import { Divider } from "@/components/Divider";
import { FooterLink } from "./FooterLink";

export const Footer = () => (
  <footer className="my-6 flex flex-col items-center">
    <Divider />
    <div className="flex gap-4">
      <FooterLink href="/">Home</FooterLink>
      <FooterLink href="/lcp">LCP</FooterLink>
      <FooterLink href="/cls">CLS</FooterLink>
      <FooterLink href="/inp">INP</FooterLink>
    </div>
  </footer>
);
