"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type FooterLinkProps = React.ComponentPropsWithoutRef<typeof Link>;

export const FooterLink = (props: FooterLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <Link className={isActive ? "font-bold" : "hover:underline"} {...props} />
  );
};
