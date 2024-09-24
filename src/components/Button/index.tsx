import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: "default" | "outline";
}
export function Button({
  variant = "default",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    default: "",
    outline: "",
  };
  return (
    <button
      {...props}
      className={`{${variants[variant]} w-full bg-transparent hover:bg-brand-color/5 rounded-md text-xl text-center  hover:text-dark-10 text-black/80 py-2 px-4`}
    >
      {children}
    </button>
  );
}
