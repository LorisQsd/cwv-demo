import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

type INPButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  "rounded-md px-4 py-2 font-bold cursor-pointer text-2xl duration-300 transition-colors flex justify-center items-center min-h-[48px]",
  {
    variants: {
      variant: {
        primary: "bg-red-700 hover:bg-red-600",
        secondary: "bg-green-700 hover:bg-green-600",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const INPButton = ({ className, variant, ...props }: INPButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props} />
  );
};

export default INPButton;
