import clsx from "clsx";

/** O container único do site: 1440px, gutter de 64px (24px no tablet, 16px no celular). Ver .container em base.css. */
export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx("container", className)}>{children}</div>;
}
