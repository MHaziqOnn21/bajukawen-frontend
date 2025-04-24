
import { ButtonHTMLAttributes } from "react";

export const SocialIconButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => (
  <button
    className="mx-2 flex items-center justify-center rounded-full border border-[#634A48] w-12 h-12 transition-all duration-200 hover:scale-105 bg-transparent hover:bg-white/10"
    {...props}
  >
    {children}
  </button>
);
