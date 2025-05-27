import { ButtonLink } from "@/components/ButtonLink";

export default function Home() {
  return (
    <main className="grow flex items-center justify-center">
      <div className="flex gap-4">
        <ButtonLink href="/lcp">LCP</ButtonLink>
        <ButtonLink href="/cls">CLS</ButtonLink>
        <ButtonLink href="/inp">INP</ButtonLink>
      </div>
    </main>
  );
}
