import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu, User, ShoppingBag, MapPin, CreditCard, LogOut, Key } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ProfilePicture } from "@/components/ProfilePicture";

// Define the different profile sections
type ProfileSection = "personal" | "orders" | "address" | "payment" | "password";

export default function UserProfile() {
  const [activeSection, setActiveSection] = useState<ProfileSection>("personal");
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    // For example: clear session, auth tokens, etc.
    
    // Navigate back to the home page
    navigate("/");
  };
  
  return (
    <div className="min-h-screen bg-baju-background">
      <header className="bg-header-gradient shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link 
              to="/" 
              className="text-2xl font-bold text-baju-heading hover:opacity-80 transition-opacity"
            >
              BajuKawen.com
            </Link>
            
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <nav className="flex flex-col space-y-4 mt-6">
                    <Button 
                      variant={activeSection === "personal" ? "default" : "ghost"} 
                      className="justify-start" 
                      onClick={() => setActiveSection("personal")}
                    >
                      <User className="mr-2 h-4 w-4" /> Personal Information
                    </Button>
                    <Button 
                      variant={activeSection === "orders" ? "default" : "ghost"} 
                      className="justify-start" 
                      onClick={() => setActiveSection("orders")}
                    >
                      <ShoppingBag className="mr-2 h-4 w-4" /> My Orders
                    </Button>
                    <Button 
                      variant={activeSection === "address" ? "default" : "ghost"} 
                      className="justify-start" 
                      onClick={() => setActiveSection("address")}
                    >
                      <MapPin className="mr-2 h-4 w-4" /> Manage Address
                    </Button>
                    <Button 
                      variant={activeSection === "payment" ? "default" : "ghost"} 
                      className="justify-start" 
                      onClick={() => setActiveSection("payment")}
                    >
                      <CreditCard className="mr-2 h-4 w-4" /> Payment Method
                    </Button>
                    <Button 
                      variant={activeSection === "password" ? "default" : "ghost"} 
                      className="justify-start" 
                      onClick={() => setActiveSection("password")}
                    >
                      <Key className="mr-2 h-4 w-4" /> Password Manager
                    </Button>
                    <Separator />
                    <Button 
                      variant="ghost" 
                      className="justify-start text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={handleLogout}
                    >
                      <LogOut className="mr-2 h-4 w-4" /> Logout
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar - hidden on mobile, shown on desktop */}
          <div className="hidden md:block md:col-span-1">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold mb-4 text-baju-heading">User Profile</h2>
              <nav className="flex flex-col space-y-2">
                <Button 
                  variant={activeSection === "personal" ? "default" : "ghost"} 
                  className="justify-start" 
                  onClick={() => setActiveSection("personal")}
                >
                  <User className="mr-2 h-4 w-4" /> Personal Information
                </Button>
                <Button 
                  variant={activeSection === "orders" ? "default" : "ghost"} 
                  className="justify-start" 
                  onClick={() => setActiveSection("orders")}
                >
                  <ShoppingBag className="mr-2 h-4 w-4" /> My Orders
                </Button>
                <Button 
                  variant={activeSection === "address" ? "default" : "ghost"} 
                  className="justify-start" 
                  onClick={() => setActiveSection("address")}
                >
                  <MapPin className="mr-2 h-4 w-4" /> Manage Address
                </Button>
                <Button 
                  variant={activeSection === "payment" ? "default" : "ghost"} 
                  className="justify-start" 
                  onClick={() => setActiveSection("payment")}
                >
                  <CreditCard className="mr-2 h-4 w-4" /> Payment Method
                </Button>
                <Button 
                  variant={activeSection === "password" ? "default" : "ghost"} 
                  className="justify-start" 
                  onClick={() => setActiveSection("password")}
                >
                  <Key className="mr-2 h-4 w-4" /> Password Manager
                </Button>
                <Separator />
                <Button 
                  variant="ghost" 
                  className="justify-start text-red-500 hover:text-red-700 hover:bg-red-50"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </Button>
              </nav>
            </div>
          </div>
          
          {/* Main content area */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow p-6">
              {activeSection === "personal" && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-baju-heading">Personal Information</h3>
                  
                  <div className="mb-6">
                    <ProfilePicture />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full border border-gray-300 rounded-md p-2" 
                        defaultValue="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full border border-gray-300 rounded-md p-2" 
                        defaultValue="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full border border-gray-300 rounded-md p-2" 
                        defaultValue="+60 12 345 6789"
                      />
                    </div>
                    <Button className="bg-gradient-to-r from-[#f5c8c8] to-[#e8b6b6] hover:from-[#e8b6b6] hover:to-[#d9a3a3] text-baju-heading border-none">
                      Update Profile
                    </Button>
                  </div>
                </div>
              )}

              {activeSection === "orders" && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-baju-heading">My Orders</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-baju-heading">Order #12345</p>
                          <p className="text-sm text-baju-subtext">April 15, 2025</p>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Completed</span>
                      </div>
                      <Separator className="my-3" />
                      <div className="flex justify-between">
                        <p>Royal Elegance Collection</p>
                        <p className="font-medium">MYR 2,800</p>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-baju-heading">Order #12346</p>
                          <p className="text-sm text-baju-subtext">April 10, 2025</p>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Processing</span>
                      </div>
                      <Separator className="my-3" />
                      <div className="flex justify-between">
                        <p>Classic Bridal Gown</p>
                        <p className="font-medium">MYR 1,800</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "address" && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-baju-heading">Manage Address</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium text-baju-heading">Home Address</p>
                        <span className="px-2 py-0.5 bg-baju-peach text-baju-heading rounded text-xs">Default</span>
                      </div>
                      <p>123 Jalan Bunga, Taman Bahagia</p>
                      <p>Kuala Lumpur, 50000</p>
                      <p>Malaysia</p>
                      <div className="mt-3 flex space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">Delete</Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-medium text-baju-heading">Office Address</p>
                      </div>
                      <p>456 Jalan Maju, Menara Business</p>
                      <p>Kuala Lumpur, 50100</p>
                      <p>Malaysia</p>
                      <div className="mt-3 flex space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">Delete</Button>
                        <Button variant="outline" size="sm">Set as Default</Button>
                      </div>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-[#f5c8c8] to-[#e8b6b6] hover:from-[#e8b6b6] hover:to-[#d9a3a3] text-baju-heading border-none">
                      Add New Address
                    </Button>
                  </div>
                </div>
              )}

              {activeSection === "payment" && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-baju-heading">Payment Methods</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <CreditCard className="h-6 w-6 mr-2" />
                          <div>
                            <p className="font-medium text-baju-heading">Visa ending in 4532</p>
                            <p className="text-sm text-baju-subtext">Expires 09/26</p>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 bg-baju-peach text-baju-heading rounded text-xs">Default</span>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">Remove</Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <CreditCard className="h-6 w-6 mr-2" />
                          <div>
                            <p className="font-medium text-baju-heading">Mastercard ending in 7895</p>
                            <p className="text-sm text-baju-subtext">Expires 12/25</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">Remove</Button>
                        <Button variant="outline" size="sm">Set as Default</Button>
                      </div>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-[#f5c8c8] to-[#e8b6b6] hover:from-[#e8b6b6] hover:to-[#d9a3a3] text-baju-heading border-none">
                      Add New Payment Method
                    </Button>
                  </div>
                </div>
              )}

              {activeSection === "password" && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-baju-heading">Password Manager</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                      <input 
                        type="password" 
                        className="w-full border border-gray-300 rounded-md p-2"
                        placeholder="Enter your current password"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                      <input 
                        type="password" 
                        className="w-full border border-gray-300 rounded-md p-2"
                        placeholder="Enter new password"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                      <input 
                        type="password" 
                        className="w-full border border-gray-300 rounded-md p-2"
                        placeholder="Confirm new password"
                      />
                    </div>
                    <Button className="bg-gradient-to-r from-[#f5c8c8] to-[#e8b6b6] hover:from-[#e8b6b6] hover:to-[#d9a3a3] text-baju-heading border-none">
                      Update Password
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
