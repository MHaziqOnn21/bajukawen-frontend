import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Building, MapPin } from "lucide-react";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export default function VendorAuth() {
  const [activeTab, setActiveTab] = useState("login");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate credentials here
    toast.success("Logged in successfully");
    navigate("/vendor");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      toast.error("You must agree to the Terms & Conditions");
      return;
    }
    // In a real app, you would register the vendor here
    toast.success("Account created successfully");
    navigate("/vendor");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-baju-background to-baju-peach p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-baju-heading mb-2">BajuKawen Vendors</h1>
        <p className="text-baju-subtext">
          Create and manage your wedding attire listings on our platform.
        </p>
      </div>

      {showTerms ? (
        <VendorTermsAndConditions
          onAccept={() => {
            setAgreedToTerms(true);
            setShowTerms(false);
          }}
          onCancel={() => setShowTerms(false)}
        />
      ) : (
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
                <form className="space-y-4" onSubmit={handleLogin}>
                  <div className="space-y-2">
                    <label className="text-baju-heading text-sm font-medium">Email</label>
                    <Input
                      type="email"
                      placeholder="your@business.com"
                      className="border-baju-input-border text-baju-text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-baju-heading text-sm font-medium">Password</label>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="border-baju-input-border text-baju-text"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#f5c8c8] to-[#e8b6b6] hover:from-[#e8b6b6] hover:to-[#d9a3a3] text-baju-heading border-none"
                  >
                    Login as Vendor
                  </Button>
                  <p className="text-center text-baju-subtext mt-4">
                    Don't have a vendor account?{" "}
                    <button
                      type="button"
                      onClick={() => setActiveTab("signup")}
                      className="text-baju-heading hover:underline"
                    >
                      Sign Up
                    </button>
                  </p>
                  <div className="text-center pt-4 border-t border-baju-input-border">
                    <Link
                      to="/login"
                      className="text-baju-subtext hover:text-baju-heading text-sm"
                    >
                      Looking to rent? Go to customer login
                    </Link>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="mt-0">
                <form className="space-y-4" onSubmit={handleSignup}>
                  <div className="space-y-2">
                    <label className="text-baju-heading text-sm font-medium flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      Business Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Your Business Name"
                      className="border-baju-input-border text-baju-text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-baju-heading text-sm font-medium">Email</label>
                    <Input
                      type="email"
                      placeholder="your@business.com"
                      className="border-baju-input-border text-baju-text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-baju-heading text-sm font-medium">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="+60 12 345 6789"
                      className="border-baju-input-border text-baju-text"
                      required
                    />
                  </div>

                  {/* New Address Fields */}
                  <div className="space-y-2">
                    <label className="text-baju-heading text-sm font-medium flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Store Address
                    </label>
                    <Input
                      type="text"
                      placeholder="Street Address"
                      className="border-baju-input-border text-baju-text mb-2"
                      required
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        type="text"
                        placeholder="City"
                        className="border-baju-input-border text-baju-text"
                        required
                      />
                      <Input
                        type="text"
                        placeholder="State"
                        className="border-baju-input-border text-baju-text"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        type="text"
                        placeholder="Postal Code"
                        className="border-baju-input-border text-baju-text"
                        required
                      />
                      <Input
                        type="text"
                        placeholder="Malaysia"
                        className="border-baju-input-border text-baju-text bg-gray-50"
                        readOnly
                      />
                    </div>
                    <p className="text-xs text-baju-subtext mt-1 flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> 
                      Your shop location will be displayed on the map
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-baju-heading text-sm font-medium">Password</label>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="border-baju-input-border text-baju-text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-baju-heading text-sm font-medium">Confirm Password</label>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="border-baju-input-border text-baju-text"
                      required
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => {
                        if (checked && !agreedToTerms) {
                          setShowTerms(true);
                        } else {
                          setAgreedToTerms(false);
                        }
                      }}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-baju-text cursor-pointer"
                    >
                      I agree to the{" "}
                      <button
                        type="button"
                        className="text-baju-heading hover:underline"
                        onClick={() => setShowTerms(true)}
                      >
                        Terms & Conditions
                      </button>
                    </label>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#f5c8c8] to-[#e8b6b6] hover:from-[#e8b6b6] hover:to-[#d9a3a3] text-baju-heading border-none"
                  >
                    Create Vendor Account
                  </Button>
                  
                  <p className="text-center text-baju-subtext mt-4">
                    Already have a vendor account?{" "}
                    <button
                      type="button"
                      onClick={() => setActiveTab("login")}
                      className="text-baju-heading hover:underline"
                    >
                      Login
                    </button>
                  </p>
                  <div className="text-center pt-4 border-t border-baju-input-border">
                    <Link
                      to="/login"
                      className="text-baju-subtext hover:text-baju-heading text-sm"
                    >
                      Looking to rent? Go to customer login
                    </Link>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function VendorTermsAndConditions({ onAccept, onCancel }) {
  return (
    <Card className="w-full max-w-2xl bg-white border border-baju-input-border shadow-md">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold text-baju-heading mb-4">Vendor Terms & Conditions</h2>
        
        <div className="max-h-[400px] overflow-y-auto mb-4 p-4 border border-baju-input-border rounded-md bg-baju-background/30 text-left">
          <h3 className="font-semibold mb-2">1. ACCEPTANCE OF TERMS</h3>
          <p className="mb-3 text-baju-text">
            By registering as a vendor on BajuKawen.com, you agree to be bound by these Terms & Conditions. 
            BajuKawen reserves the right to update or modify these terms at any time without prior notice.
          </p>
          
          <h3 className="font-semibold mb-2">2. VENDOR RESPONSIBILITIES</h3>
          <p className="mb-3 text-baju-text">
            2.1 Accurate Information: Vendors must provide accurate and complete information about their products and services.<br />
            2.2 Product Quality: Vendors are responsible for the quality and condition of all items listed.<br />
            2.3 Timely Delivery: Vendors must ensure timely delivery of products as agreed upon with customers.<br />
            2.4 Customer Service: Vendors must maintain professional customer service standards and respond to inquiries promptly.<br />
            2.5 Location Accuracy: Vendors must provide accurate store location information that will be displayed on our platform map.
          </p>
          
          <h3 className="font-semibold mb-2">3. FEES AND PAYMENTS</h3>
          <p className="mb-3 text-baju-text">
            3.1 Commission: BajuKawen charges a commission on each successful transaction.<br />
            3.2 Payment Processing: All payments are processed through BajuKawen's platform.<br />
            3.3 Payment Schedule: Vendors will receive payments according to the schedule outlined in the Vendor Dashboard.
          </p>
          
          <h3 className="font-semibold mb-2">4. ACCOUNT MANAGEMENT</h3>
          <p className="mb-3 text-baju-text">
            4.1 Account Security: Vendors are responsible for maintaining the security of their account credentials.<br />
            4.2 Account Suspension: BajuKawen reserves the right to suspend or terminate vendor accounts for violations of these terms.<br />
            4.3 Updates: Vendors must keep their account information up to date.
          </p>
          
          <h3 className="font-semibold mb-2">5. INTELLECTUAL PROPERTY</h3>
          <p className="mb-3 text-baju-text">
            5.1 Content Ownership: Vendors retain ownership of their content but grant BajuKawen a license to use product images and descriptions.<br />
            5.2 Platform Content: BajuKawen's platform content remains the property of BajuKawen.
          </p>
          
          <h3 className="font-semibold mb-2">6. LIMITATION OF LIABILITY</h3>
          <p className="mb-3 text-baju-text">
            BajuKawen shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the platform.
          </p>
          
          <h3 className="font-semibold mb-2">7. GOVERNING LAW</h3>
          <p className="mb-3 text-baju-text">
            These terms are governed by the laws of Malaysia without regard to its conflict of law provisions.
          </p>
          
          <h3 className="font-semibold mb-2">8. MODIFICATIONS TO TERMS</h3>
          <p className="text-baju-text">
            BajuKawen reserves the right to modify these terms at any time. Continued use of the platform after such modifications constitutes acceptance of the modified terms.
          </p>
        </div>
        
        <div className="flex space-x-4 justify-end">
          <Button 
            variant="outline" 
            onClick={onCancel}
            className="border-baju-input-border text-baju-heading hover:bg-baju-background/50"
          >
            Cancel
          </Button>
          <Button 
            onClick={onAccept}
            className="bg-baju-primary hover:bg-baju-secondary text-white border-none"
          >
            I Accept
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
