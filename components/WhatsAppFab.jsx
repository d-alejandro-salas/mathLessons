import { whatsappUrl } from '@/lib/site';

export default function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener"
      aria-label="Escribir por WhatsApp"
      className="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 grid size-[58px] place-items-center rounded-full bg-wa text-white shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[30px] fill-current">
        <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.300-1.900 1.300-.5.100-1.100.100-1.800-.100-.4-.100-1-.300-1.700-.600-3-1.300-4.900-4.300-5-4.500-.2-.2-1.200-1.600-1.200-3s.7-2.100 1-2.400c.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.8 2c.1.200.1.300 0 .5l-.3.500-.4.400c-.1.200-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.100 1 2.100 1.300 2.400 1.400.3.100.5.100.6-.1l.8-1c.2-.2.400-.2.600-.1l2 1c.3.100.5.200.5.300.100.100.100.700-.100 1.400Z" />
      </svg>
    </a>
  );
}
