import { ComponentProps, forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className="bg-slate-400/10 w-[300px] h-[40px] p-4 rounded-lg placeholder:text-sm outline-none"
      />
    );
  }
);

export default Input;
