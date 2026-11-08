import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Exclusiones de carpetas: Bloqueamos .next (el build de Next.js) y public (estáticos)
const EXCLUIR_CARPETAS = new Set(['node_modules', '.git', '.vscode', '.next', 'public']);

// 2. Excluimos archivos de bloqueo, reportes, textos markdown y el propio script
const EXCLUIR_ARCHIVOS = new Set([
  'package-lock.json', 
  'pnpm-lock.yaml', 
  'yarn.lock', 
  '.DS_Store', 
  'codigo_completo.txt',
  'README.md',
  'AGENTS.md',
  path.basename(fileURLToPath(import.meta.url)) 
]);

// 3. Extensiones: Sumamos .jsx, .ts, .tsx y .mjs (vital para next.config.mjs y eslint.config.mjs)
const EXTENSIONES_PERMITIDAS = ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.css', '.json'];

function generarReporte() {
    const archivoSalida = 'codigo_completo.txt';
    
    // Escribimos un encabezado temporal
    fs.writeFileSync(archivoSalida, "=== ESTRUCTURA DEL PROYECTO ===\n", 'utf-8');

    // Función recursiva para escribir el árbol
    function escribirArbol(dir, nivel = 0) {
        const indentacion = '    '.repeat(nivel);
        const nombreDir = path.basename(dir) || '.';
        
        if (nivel > 0) {
            fs.appendFileSync(archivoSalida, `${indentacion}${nombreDir}/\n`, 'utf-8');
        }

        let elementos;
        try {
            elementos = fs.readdirSync(dir, { withFileTypes: true });
        } catch (error) {
            return;
        }

        const subIndentacion = '    '.repeat(nivel + 1);
        
        for (const elemento of elementos) {
            if (elemento.isDirectory()) {
                if (!EXCLUIR_CARPETAS.has(elemento.name)) {
                    escribirArbol(path.join(dir, elemento.name), nivel + 1);
                }
            } else {
                if (!EXCLUIR_ARCHIVOS.has(elemento.name) && EXTENSIONES_PERMITIDAS.includes(path.extname(elemento.name))) {
                    fs.appendFileSync(archivoSalida, `${subIndentacion}${elemento.name}\n`, 'utf-8');
                }
            }
        }
    }

    escribirArbol('.');

    // Separador para la sección de contenido
    fs.appendFileSync(archivoSalida, "\n=== CONTENIDO DE LOS ARCHIVOS ===\n\n", 'utf-8');

    function escribirContenido(dir) {
        let elementos;
        try {
            elementos = fs.readdirSync(dir, { withFileTypes: true });
        } catch (error) {
            return;
        }
        
        for (const elemento of elementos) {
            const rutaCompleta = path.join(dir, elemento.name);
            
            if (elemento.isDirectory()) {
                if (!EXCLUIR_CARPETAS.has(elemento.name)) {
                    escribirContenido(rutaCompleta);
                }
            } else {
                const ext = path.extname(elemento.name);
                
                if (!EXCLUIR_ARCHIVOS.has(elemento.name) && EXTENSIONES_PERMITIDAS.includes(ext)) {
                    fs.appendFileSync(archivoSalida, `// FILE: ${rutaCompleta}\n`, 'utf-8');
                    fs.appendFileSync(archivoSalida, "-".repeat(50) + "\n", 'utf-8');
                    
                    try {
                        const contenido = fs.readFileSync(rutaCompleta, 'utf-8');
                        fs.appendFileSync(archivoSalida, contenido + "\n", 'utf-8');
                    } catch (e) {
                        fs.appendFileSync(archivoSalida, `[Error leyendo archivo: ${e.message}]\n`, 'utf-8');
                    }
                    
                    fs.appendFileSync(archivoSalida, "\n\n" + "=".repeat(80) + "\n\n", 'utf-8');
                }
            }
        }
    }

    escribirContenido('.');

    // Cálculo de caracteres y estimación de tokens (~2.95 caracteres por token)
    let contenidoFinal = fs.readFileSync(archivoSalida, 'utf-8');
    const totalCaracteres = contenidoFinal.length;
    const tokensEstimados = Math.round(totalCaracteres / 2.95);

    // Reemplazamos el título principal para agregar el conteo de tokens
    const nuevoEncabezado = `=== ESTRUCTURA DEL PROYECTO (Tokens estimados: ~${tokensEstimados.toLocaleString()} | Caracteres: ${totalCaracteres.toLocaleString()}) ===\n`;
    contenidoFinal = contenidoFinal.replace("=== ESTRUCTURA DEL PROYECTO ===\n", nuevoEncabezado);

    fs.writeFileSync(archivoSalida, contenidoFinal, 'utf-8');

    console.log(`¡Listo! Archivo generado: ${archivoSalida}`);
    console.log(`📊 Tamaño total: ${totalCaracteres.toLocaleString()} caracteres`);
    console.log(`🔤 Tokens estimados: ~${tokensEstimados.toLocaleString()} tokens`);
}

generarReporte();