import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {}

export function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className="bg-dark-10/10 w-[336px] h-[51px] p-4 rounded-lg"
    />
  );
}
