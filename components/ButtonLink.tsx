import Link from "next/link";

type ButtonLinkProps = React.ComponentPropsWithoutRef<typeof Link>;

export const ButtonLink = (props: ButtonLinkProps) => (
  <Link
    className="text-black bg-gray-200 py-2 px-4 rounded-md hover:scale-105 duration-300 font-bold text-2xl"
    {...props}
  />
);
