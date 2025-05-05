
import React from "react";
import { NavigationLoggedIn } from "@/components/NavigationLoggedIn";
import { Footer } from "@/components/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2, Calendar, Package, MinusCircle, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock cart items - in a real app, this would come from state management or API
const cartItems = [
  {
    id: 1,
    name: "Royal Elegance Collection",
    image: "https://images.unsplash.com/photo-1594552072238-5c4cefc1d033?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    type: "set",
    price: 2800,
    quantity: 1,
    bookingDate: "2025-05-20",
    returnDate: "2025-05-22",
  },
  {
    id: 2,
    name: "Classic Bridal Gown",
    image: "https://images.unsplash.com/photo-1566114725077-855347e7b6e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    type: "bride",
    price: 1800,
    quantity: 1,
    bookingDate: "2025-05-20",
    returnDate: "2025-05-22",
  },
];

// Mock user data - in a real app, this would come from authentication
const userData = {
  name: "John",
  address: {
    street: "123 Wedding Avenue",
    city: "Kuala Lumpur",
    state: "Federal Territory",
    postalCode: "50088",
    country: "Malaysia"
  }
};

const Cart = () => {
  const navigate = useNavigate();
  
  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Calculate tax (6%)
  const tax = subtotal * 0.06;
  
  // Calculate total
  const total = subtotal + tax;

  const handleQuantityChange = (itemId: number, change: number) => {
    // This would update the cart state in a real app
    console.log(`Change quantity of item ${itemId} by ${change}`);
  };

  const handleRemoveItem = (itemId: number) => {
    // This would update the cart state in a real app
    console.log(`Remove item ${itemId} from cart`);
  };

  const handleCheckout = () => {
    // In a real app, this would navigate to checkout
    console.log("Proceeding to checkout");
  };

  return (
    <div className="min-h-screen bg-baju-background flex flex-col">
      <header className="bg-header-gradient shadow-sm">
        <div className="container mx-auto px-4">
          <NavigationLoggedIn username={userData.name} />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-baju-heading mb-8">Your Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Product</TableHead>
                      <TableHead>Details</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-center">Quantity</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                      <TableHead className="w-[70px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="h-20 w-20 rounded-md overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <div className="text-sm text-baju-subtext mt-1 flex items-center">
                              <Calendar className="h-3 w-3 mr-1" /> 
                              <span>{item.bookingDate} to {item.returnDate}</span>
                            </div>
                            <div className="text-sm text-baju-subtext mt-1 flex items-center">
                              <Package className="h-3 w-3 mr-1" /> 
                              <span>{item.type === "set" ? "Complete Set" : item.type === "bride" ? "Bride Attire" : "Groom Attire"}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">MYR {item.price.toLocaleString()}</TableCell>
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center">
                            <button 
                              onClick={() => handleQuantityChange(item.id, -1)}
                              disabled={item.quantity <= 1}
                              className="text-baju-subtext hover:text-baju-heading disabled:opacity-30"
                            >
                              <MinusCircle className="h-4 w-4" />
                            </button>
                            <span className="mx-2 w-6 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => handleQuantityChange(item.id, 1)}
                              className="text-baju-subtext hover:text-baju-heading"
                            >
                              <PlusCircle className="h-4 w-4" />
                            </button>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          MYR {(item.price * item.quantity).toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <button 
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-baju-subtext hover:text-red-500"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-lg font-semibold text-baju-heading mb-4">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-baju-subtext">Subtotal</span>
                    <span className="text-baju-heading">MYR {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-baju-subtext">Tax (6%)</span>
                    <span className="text-baju-heading">MYR {tax.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="text-baju-heading">MYR {total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={handleCheckout}
                  className="w-full mt-6 bg-gradient-to-r from-[#f5c8c8] to-[#e8b6b6] hover:from-[#e8b6b6] hover:to-[#d9a3a3] text-baju-heading"
                >
                  Proceed to Checkout
                </Button>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold text-baju-heading mb-4">Shipping Address</h2>
                <address className="not-italic text-baju-subtext">
                  <p className="font-medium text-baju-heading">{userData.name}</p>
                  <p>{userData.address.street}</p>
                  <p>{userData.address.city}, {userData.address.state} {userData.address.postalCode}</p>
                  <p>{userData.address.country}</p>
                </address>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 text-baju-heading border-baju-input-border"
                  onClick={() => navigate("/profile")}
                >
                  Edit Address
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold text-baju-heading mb-4">Your cart is empty</h2>
            <p className="text-baju-subtext mb-6">Browse our collection to find the perfect wedding attire for your special day.</p>
            <Button 
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-[#f5c8c8] to-[#e8b6b6] hover:from-[#e8b6b6] hover:to-[#d9a3a3] text-baju-heading"
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
