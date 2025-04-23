
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Eye, EyeOff, facebook, google, twitter } from "lucide-react";

// Helper for icon backgrounds and hover effect
const SocialIconButton = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => (
  <button
    className="mx-2 flex items-center justify-center rounded-full border border-[#634A48] w-12 h-12 transition-all duration-200 hover:scale-105 bg-transparent hover:bg-white/10"
    {...props}
  >
    {children}
  </button>
);

const LoginSignUp = () => {
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordSignup, setShowPasswordSignup] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fade-in">
      <div className="w-full max-w-md rounded-2xl shadow-xl overflow-hidden"
           style={{background: "rgba(22, 11, 11, 0.93)"}}>
        {/* Header */}
        <div
          className="px-8 pt-8 pb-6"
          style={{
            background:
              "linear-gradient(180deg,#7E524C 0%, #462523 100%)",
          }}
        >
          <h1 className="text-center text-3xl md:text-4xl font-bold text-[#F0BFBC] tracking-wide mb-2" style={{letterSpacing: "0.08em"}}>
            BajuKawen
          </h1>
          <p className="text-center text-base text-[#f0bfbcb9] font-medium tracking-wide">
            Discover and rent the perfect wedding attire—all in one place.
          </p>
        </div>
        {/* Card */}
        <div className="px-8 py-7 bg-black bg-opacity-90">
          {/* Tabs */}
          <Tabs value={tab}>
            <TabsList className="bg-transparent p-0 flex mb-5 border-b-0 justify-center gap-2">
              <TabsTrigger
                value="login"
                className={`flex-1 border-b-2 border-transparent rounded-none text-lg font-medium transition-all !text-[#F0BFBC] px-0 py-0 ${tab === "login" ? "border-[#F0BFBC]" : ""}`}
                onClick={() => setTab("login")}
                style={{background: "transparent"}}
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className={`flex-1 border-b-2 border-transparent rounded-none text-lg font-medium transition-all !text-[#F0BFBC] px-0 py-0 ${tab === "signup" ? "border-[#F0BFBC]" : ""}`}
                onClick={() => setTab("signup")}
                style={{background: "transparent"}}
              >
                Sign Up
              </TabsTrigger>
            </TabsList>
            {/* Login Tab Content */}
            <TabsContent value="login" forceMount>
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="login-email"
                    className="block text-[#F0BFBC] font-medium mb-1"
                  >
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
                <div>
                  <label
                    htmlFor="login-password"
                    className="block text-[#F0BFBC] font-medium mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="login-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="bg-transparent border-[#675146] text-white placeholder:text-[#F0BFBC]/80 text-base pr-10"
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-[#936868] hover:text-[#F0BFBC]"
                      tabIndex={-1}
                      onClick={() => setShowPassword((v) => !v)}
                    >
                      {showPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </div>
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
              </form>
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
                  <svg width="21" height="21" fill="none" viewBox="0 0 24 24">
                    <g>
                      <rect width="24" height="24" fill="#3B5998" rx="12"/>
                      <path fill="#fff" d="M17.292 16.901 17.808 13h-2.67v-2.178c0-.956.469-1.889 1.972-1.889H18v-2.19c-.321-.043-1.427-.141-2.711-.141-2.765 0-4.57 1.374-4.57 3.866V13h-2.304v3.901h2.304v9.376C10.719 23.978 11.354 24 12 24s1.282-.022 1.895-.069v-9.382H17.291Z"/>
                    </g>
                  </svg>
                </SocialIconButton>
                <SocialIconButton aria-label="Sign in with Twitter">
                  <svg width="21" height="21" fill="none" viewBox="0 0 24 24"><g><rect width="24" height="24" fill="#1DA1F2" rx="12"/><path fill="#fff" d="M19.633 8.503a6.932 6.932 0 0 1-1.925.527 3.397 3.397 0 0 0 1.486-1.873 6.88 6.88 0 0 1-2.174.831A3.433 3.433 0 0 0 16.306 7c-1.89 0-3.423 1.628-3.049 3.477A9.724 9.724 0 0 1 5.092 7.629c-.395.667-.623 1.451-.623 2.284 0 1.58.795 2.976 2.006 3.795-.768-.021-1.491-.231-2.123-.578v.057c0 2.206 1.548 4.045 3.605 4.464-.376.104-.772.161-1.18.161-.288 0-.565-.028-.84-.08.566 1.769 2.214 3.072 4.169 3.106A6.921 6.921 0 0 1 4 19.343 9.733 9.733 0 0 0 9.548 21c6.039.001 9.36-5.013 9.36-9.368 0-.143-.004-.285-.011-.427a6.668 6.668 0 0 0 1.638-1.702Z"/></g></svg>
                </SocialIconButton>
              </div>
              <div className="text-center mb-0 mt-2">
                <a
                  href="#"
                  className="text-[#F0BFBC] text-sm underline underline-offset-2 hover:text-white transition"
                  tabIndex={0}
                >
                  Forgot password?
                </a>
              </div>
            </TabsContent>
            {/* Signup Tab Content */}
            <TabsContent value="signup" forceMount>
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="signup-name"
                    className="block text-[#F0BFBC] font-medium mb-1"
                  >
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
                  <label
                    htmlFor="signup-email"
                    className="block text-[#F0BFBC] font-medium mb-1"
                  >
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
                <div>
                  <label
                    htmlFor="signup-password"
                    className="block text-[#F0BFBC] font-medium mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="signup-password"
                      name="password"
                      type={showPasswordSignup ? "text" : "password"}
                      placeholder="••••••••"
                      className="bg-transparent border-[#675146] text-white placeholder:text-[#F0BFBC]/80 text-base pr-10"
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-[#936868] hover:text-[#F0BFBC]"
                      tabIndex={-1}
                      onClick={() => setShowPasswordSignup((v) => !v)}
                    >
                      {showPasswordSignup ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="signup-confirm"
                    className="block text-[#F0BFBC] font-medium mb-1"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Input
                      id="signup-confirm"
                      name="password2"
                      type={showConfirm ? "text" : "password"}
                      placeholder="••••••••"
                      className="bg-transparent border-[#675146] text-white placeholder:text-[#F0BFBC]/80 text-base pr-10"
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-[#936868] hover:text-[#F0BFBC]"
                      tabIndex={-1}
                      onClick={() => setShowConfirm((v) => !v)}
                    >
                      {showConfirm ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </div>
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
              <div className="text-center mt-6">
                <span className="text-[#F0BFBC] text-sm mr-2">
                  Already have an account?
                </span>
                <button
                  className="text-[#F0BFBC] text-sm underline underline-offset-2 hover:text-white transition"
                  type="button"
                  onClick={() => setTab("login")}
                >
                  Login
                </button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      {/* Clickable overlay: go back */}
      <button
        className="fixed inset-0 z-10"
        aria-label="Close modal"
        tabIndex={-1}
        style={{ background: "transparent" }}
        onClick={() => navigate(-1)}
      />
    </div>
  );
};

export default LoginSignUp;
