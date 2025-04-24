
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { PasswordInput } from "./PasswordInput";
import { SocialIconButton } from "./SocialIconButton";
import { Facebook, Twitter } from "lucide-react";

export const LoginForm = () => {
  return (
    <form className="space-y-5">
      <div>
        <label htmlFor="login-email" className="block text-[#F0BFBC] font-medium mb-1">
          Email
        </label>
        <Input
          id="login-email"
          name="email"
          type="email"
          placeholder="your@email.com"
          className="bg-transparent border-[#675146] text-white placeholder:text-[#F0BFBC]/80 text-base"
        />
      </div>
      <PasswordInput id="login-password" name="password" label="Password" />
      <Button
        type="submit"
        className="w-full mt-3 font-semibold rounded-md text-base bg-gradient-to-r from-[#B0847E] to-[#F0BFBC] text-[#2e0e0b] hover:from-[#F0BFBC] hover:to-[#b0847e] shadow-none border-0"
        style={{ boxShadow: "0 1px 10px 0 #a6868666" }}
        onClick={e => {
          e.preventDefault();
          // Implement login logic
        }}
      >
        Login
      </Button>
      <div className="flex items-center my-5">
        <Separator className="bg-[#F0BFBC55]" />
        <span className="mx-2 text-[#cbb3b3] text-sm">or continue with</span>
        <Separator className="bg-[#F0BFBC55]" />
      </div>
      <div className="flex items-center justify-center mb-3">
        <SocialIconButton aria-label="Sign in with Google">
          <svg width="21" height="21" fill="none" viewBox="0 0 24 24">
            <g><path fill="#EA4335" d="M21.805 10.023h-9.49v3.955h5.647c-.244 1.262-1.392 3.705-5.648 3.705a6.563 6.563 0 0 1 0-13.124c1.72 0 3.244.632 4.452 1.872l3.147-3.062C18.287 1.88 15.837.75 13.015.75c-6.072 0-11 4.927-11 11s4.928 11 11 11c6.072 0 10.215-4.265 10.215-10.295 0-.833-.09-1.388-.21-2.182Z"/><path fill="#34A853" d="M12.314 22.322c4.148 0 7.618-3.308 7.618-7.398 0-.481-.052-.843-.123-1.203h-7.495v3.101h4.384c-.177 1.127-1.285 3.139-4.385 3.139-3.104 0-5.636-2.56-5.636-5.7a5.56 5.56 0 0 1 5.637-5.7c1.46 0 2.657.513 3.485 1.392l2.618-2.55c-1.406-1.357-3.338-2.193-6.102-2.193A9.16 9.16 0 0 0 3.5 12c0 5.034 3.84 8.822 8.814 8.822Z"/><path fill="#FBBC05" d="M21.116 14.516c.163-.483.29-1.081.29-1.816 0-.522-.048-1.026-.158-1.672H12.31v3.101h5.079c-.14.9-1.03 2.02-3.076 2.02-1.9 0-3.49-1.616-3.49-3.611 0-2.011 1.616-3.636 3.513-3.636 1.083 0 1.94.405 2.346.778L21.12 7.67c-1.393-1.236-3.311-2.011-5.681-2.011a7.528 7.528 0 0 0-7.488 7.492c0 4.154 3.259 7.423 7.488 7.423Z"/></g>
          </svg>
        </SocialIconButton>
        <SocialIconButton aria-label="Sign in with Facebook">
          <Facebook size={21} />
        </SocialIconButton>
        <SocialIconButton aria-label="Sign in with Twitter">
          <Twitter size={21} />
        </SocialIconButton>
      </div>
      <div className="text-center mb-0 mt-2">
        <a href="#" className="text-[#F0BFBC] text-sm underline underline-offset-2 hover:text-white transition" tabIndex={0}>
          Forgot password?
        </a>
      </div>
    </form>
  );
};
