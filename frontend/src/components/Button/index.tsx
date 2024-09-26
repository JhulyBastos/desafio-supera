import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
}
export function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "w-full bg-transparent hover:bg-brand-color/5  hover:text-dark-10 text-black/80 text-xl py-2 px-4",
    secondary:
      "w-[100px] hover:bg-green-600 hover:text-white text-green-600 border-2 border-green-600 text-base px-2 py-1 text-lg",
    tertiary:
      "w-[100px] hover:bg-red-800 hover:text-white text-red-800 border-2 border-red-800 text-base px-2 py-1 text-lg",
  };
  return (
    <button
      {...props}
      className={`${variants[variant]}  flex items-center justify-center  rounded-md text-center `}
    >
      {children}
    </button>
  );
}
