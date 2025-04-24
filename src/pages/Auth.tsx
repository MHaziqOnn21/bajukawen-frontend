
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

      <Card className="w-full max-w-md bg-black/90 border-none shadow-xl">
        <CardContent className="p-6">
          <Tabs
            defaultValue={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full bg-transparent border-b border-baju-divider mb-6">
              <TabsTrigger
                value="login"
                className="flex-1 text-baju-tab-inactive data-[state=active]:text-baju-pink data-[state=active]:border-b-2 data-[state=active]:border-baju-pink rounded-none"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="flex-1 text-baju-tab-inactive data-[state=active]:text-baju-pink data-[state=active]:border-b-2 data-[state=active]:border-baju-pink rounded-none"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-0">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-baju-pink">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-black/50 border-baju-input-border text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-baju-pink">Password</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="bg-black/50 border-baju-input-border text-white"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-baju-pink to-baju-peach hover:opacity-90 text-white">
                  Login
                </Button>
                <p className="text-center text-baju-subtext mt-4">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setActiveTab("signup")}
                    className="text-baju-pink hover:underline"
                  >
                    Sign Up
                  </button>
                </p>
              </form>
            </TabsContent>

            <TabsContent value="signup" className="mt-0">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-baju-pink">Full Name</label>
                  <Input
                    type="text"
                    placeholder="John & Jane"
                    className="bg-black/50 border-baju-input-border text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-baju-pink">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-black/50 border-baju-input-border text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-baju-pink">Password</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="bg-black/50 border-baju-input-border text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-baju-pink">Confirm Password</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="bg-black/50 border-baju-input-border text-white"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-baju-pink to-baju-peach hover:opacity-90 text-white">
                  Create Account
                </Button>
                <p className="text-center text-baju-subtext mt-4">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setActiveTab("login")}
                    className="text-baju-pink hover:underline"
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
