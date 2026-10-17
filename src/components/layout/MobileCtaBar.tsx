import { CtaButton } from "@/components/ui/CtaButton";

/** Barra fixa com a ação principal, apenas abaixo de md. O rodapé reserva o espaço equivalente. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <CtaButton location="barra-mobile" className="w-full" />
    </div>
  );
}
