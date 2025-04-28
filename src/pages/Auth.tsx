
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Auth() {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-baju-background to-baju-peach p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-baju-heading mb-2">BajuKawen</h1>
        <p className="text-baju-subtext">
          Discover and rent the perfect wedding attire—all in one place.
        </p>
      </div>

      <Card className="w-full max-w-md bg-white border border-baju-input-border shadow-md">
        <CardContent className="p-6">
          <Tabs
            defaultValue={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full bg-baju-background border-b border-baju-input-border mb-6">
              <TabsTrigger
                value="login"
                className="flex-1 text-baju-tab-inactive data-[state=active]:text-baju-heading data-[state=active]:border-b-2 data-[state=active]:border-baju-heading rounded-none"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="flex-1 text-baju-tab-inactive data-[state=active]:text-baju-heading data-[state=active]:border-b-2 data-[state=active]:border-baju-heading rounded-none"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-0">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-baju-heading text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="border-baju-input-border text-baju-text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-baju-heading text-sm font-medium">Password</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="border-baju-input-border text-baju-text"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-[#f5c8c8] to-[#e8b6b6] hover:from-[#e8b6b6] hover:to-[#d9a3a3] text-baju-heading border-none">
                  Login
                </Button>
                <p className="text-center text-baju-subtext mt-4">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setActiveTab("signup")}
                    className="text-baju-heading hover:underline"
                  >
                    Sign Up
                  </button>
                </p>
              </form>
            </TabsContent>

            <TabsContent value="signup" className="mt-0">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-baju-heading text-sm font-medium">Full Name</label>
                  <Input
                    type="text"
                    placeholder="John & Jane"
                    className="border-baju-input-border text-baju-text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-baju-heading text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="border-baju-input-border text-baju-text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-baju-heading text-sm font-medium">Password</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="border-baju-input-border text-baju-text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-baju-heading text-sm font-medium">Confirm Password</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="border-baju-input-border text-baju-text"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-[#f5c8c8] to-[#e8b6b6] hover:from-[#e8b6b6] hover:to-[#d9a3a3] text-baju-heading border-none">
                  Create Account
                </Button>
                <p className="text-center text-baju-subtext mt-4">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setActiveTab("login")}
                    className="text-baju-heading hover:underline"
                  >
                    Login
                  </button>
                </p>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
