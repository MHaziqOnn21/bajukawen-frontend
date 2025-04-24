
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LoginForm } from "@/components/auth/LoginForm";
import { SignUpForm } from "@/components/auth/SignUpForm";

const LoginSignUp = () => {
  const [tab, setTab] = useState<"login" | "signup">("login");
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fade-in">
      <div className="w-full max-w-md rounded-2xl shadow-xl overflow-hidden"
           style={{background: "rgba(22, 11, 11, 0.93)"}}>
        {/* Header */}
        <div
          className="px-8 pt-8 pb-6"
          style={{
            background: "linear-gradient(180deg,#7E524C 0%, #462523 100%)",
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
              <LoginForm />
            </TabsContent>
            {/* Signup Tab Content */}
            <TabsContent value="signup" forceMount>
              <SignUpForm />
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
