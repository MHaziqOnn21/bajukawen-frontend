
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "./PasswordInput";

export const SignUpForm = () => {
  return (
    <form className="space-y-5">
      <div>
        <label htmlFor="signup-name" className="block text-[#F0BFBC] font-medium mb-1">
          Full Name
        </label>
        <Input
          id="signup-name"
          name="name"
          placeholder="John & Jane"
          className="bg-transparent border-[#675146] text-white placeholder:text-[#F0BFBC]/80 text-base"
        />
      </div>
      <div>
        <label htmlFor="signup-email" className="block text-[#F0BFBC] font-medium mb-1">
          Email
        </label>
        <Input
          id="signup-email"
          name="email"
          type="email"
          placeholder="your@email.com"
          className="bg-transparent border-[#675146] text-white placeholder:text-[#F0BFBC]/80 text-base"
        />
      </div>
      <PasswordInput id="signup-password" name="password" label="Password" />
      <PasswordInput id="signup-confirm" name="password2" label="Confirm Password" />
      <Button
        type="submit"
        className="w-full mt-3 font-semibold rounded-md text-base bg-gradient-to-r from-[#B0847E] to-[#F0BFBC] text-[#2e0e0b] hover:from-[#F0BFBC] hover:to-[#b0847e] shadow-none border-0"
        style={{ boxShadow: "0 1px 10px 0 #a6868666" }}
        onClick={e => {
          e.preventDefault();
          // Implement sign up logic
        }}
      >
        Create Account
      </Button>
    </form>
  );
};
