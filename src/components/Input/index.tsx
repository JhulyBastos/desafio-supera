import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {}

export function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className="bg-slate-400/10 w-[300px] h-[40px] p-4 rounded-lg placeholder:text-sm outline-none"
    />
  );
}
