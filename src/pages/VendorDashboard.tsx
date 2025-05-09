
import React from "react";
import { useSearchParams } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

// Vendor settings component
const VendorSettings = () => {
  return (
    <Card className="border-baju-divider">
      <CardHeader className="bg-baju-background/50">
        <CardTitle className="text-baju-heading">Vendor Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="vendor-name" className="text-baju-text">Vendor Name</Label>
            <Input id="vendor-name" defaultValue="Vendor A" className="border-baju-input-border focus:border-baju-input-focus" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vendor-location" className="text-baju-text">Location</Label>
            <Input id="vendor-location" defaultValue="Kuala Lumpur" className="border-baju-input-border focus:border-baju-input-focus" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="current-password" className="text-baju-text">Current Password</Label>
            <Input id="current-password" type="password" className="border-baju-input-border focus:border-baju-input-focus" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password" className="text-baju-text">New Password</Label>
            <Input id="new-password" type="password" className="border-baju-input-border focus:border-baju-input-focus" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password" className="text-baju-text">Confirm New Password</Label>
            <Input id="confirm-password" type="password" className="border-baju-input-border focus:border-baju-input-focus" />
          </div>
          <Button 
            type="submit" 
            className="bg-baju-primary hover:bg-baju-secondary text-white"
          >
            Update Settings
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

// Sales data component
const SalesData = () => {
  const salesData = [
    { month: "Jan", sales: 5200 },
    { month: "Feb", sales: 4800 },
    { month: "Mar", sales: 6100 },
    { month: "Apr", sales: 5400 },
    { month: "May", sales: 7200 },
    { month: "Jun", sales: 8500 },
    { month: "Jul", sales: 7800 },
    { month: "Aug", sales: 8900 },
    { month: "Sep", sales: 9200 },
    { month: "Oct", sales: 7600 },
    { month: "Nov", sales: 8100 },
    { month: "Dec", sales: 9800 }
  ];
  
  return (
    <Card className="border-baju-divider">
      <CardHeader className="bg-baju-background/50">
        <CardTitle className="text-baju-heading">Monthly Sales Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8d6d6" />
              <XAxis dataKey="month" tick={{ fill: '#5a4a4a' }} />
              <YAxis tick={{ fill: '#5a4a4a' }} />
              <Tooltip 
                formatter={(value) => [`RM ${value}`, 'Sales']}
                labelFormatter={(label) => `Month: ${label}`}
                contentStyle={{ 
                  backgroundColor: '#fff9f9',
                  borderColor: '#e8d6d6',
                  color: '#5a4a4a'
                }}
              />
              <Bar dataKey="sales" fill="#9b87f5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <Card className="border-baju-divider">
            <CardContent className="p-4">
              <div className="text-sm font-medium text-baju-subtext">Total Sales</div>
              <div className="text-2xl font-bold text-baju-heading">RM 89,600</div>
            </CardContent>
          </Card>
          <Card className="border-baju-divider">
            <CardContent className="p-4">
              <div className="text-sm font-medium text-baju-subtext">Average Monthly</div>
              <div className="text-2xl font-bold text-baju-heading">RM 7,467</div>
            </CardContent>
          </Card>
          <Card className="border-baju-divider">
            <CardContent className="p-4">
              <div className="text-sm font-medium text-baju-subtext">Best Month</div>
              <div className="text-2xl font-bold text-baju-heading">Dec (RM 9,800)</div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

// Vendor products list
const VendorProducts = () => {
  const products = [
    { id: 101, name: "Traditional Set A", type: "set", price: "RM 599.00", stock: 15, sold: 28 },
    { id: 102, name: "Modern Groom Suit", type: "groom", price: "RM 299.00", stock: 8, sold: 12 },
    { id: 103, name: "Classic Bride Dress", type: "bride", price: "RM 499.00", stock: 5, sold: 9 },
    { id: 104, name: "Premium Set B", type: "set", price: "RM 799.00", stock: 3, sold: 6 },
  ];
  
  return (
    <Card className="border-baju-divider">
      <CardHeader className="flex flex-row items-center justify-between bg-baju-background/50">
        <CardTitle className="text-baju-heading">My Products</CardTitle>
        <Button 
          size="sm"
          className="bg-baju-primary hover:bg-baju-secondary text-white"
        >
          Add New Product
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="bg-baju-background/30">
            <TableRow>
              <TableHead className="text-baju-text">ID</TableHead>
              <TableHead className="text-baju-text">Product Name</TableHead>
              <TableHead className="text-baju-text">Type</TableHead>
              <TableHead className="text-baju-text">Price</TableHead>
              <TableHead className="text-baju-text">In Stock</TableHead>
              <TableHead className="text-baju-text">Total Sold</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} className="border-b border-baju-divider hover:bg-baju-background/20">
                <TableCell className="text-baju-text">{product.id}</TableCell>
                <TableCell className="text-baju-text font-medium">{product.name}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline"
                    className="border-baju-divider text-baju-text bg-baju-background"
                  >
                    {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-baju-text">{product.price}</TableCell>
                <TableCell className="text-baju-text">{product.stock}</TableCell>
                <TableCell className="text-baju-text">{product.sold}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

// Orders list component
const OrdersList = () => {
  const orders = [
    { id: "ORD-001", customer: "John Doe", date: "2023-10-15", total: "RM 599.00", status: "Completed" },
    { id: "ORD-002", customer: "Jane Smith", date: "2023-10-18", total: "RM 299.00", status: "Processing" },
    { id: "ORD-003", customer: "David Lee", date: "2023-10-20", total: "RM 799.00", status: "Pending" },
    { id: "ORD-004", customer: "Sarah Wong", date: "2023-10-22", total: "RM 499.00", status: "Completed" },
    { id: "ORD-005", customer: "Mike Chen", date: "2023-10-25", total: "RM 599.00", status: "Processing" },
  ];
  
  return (
    <Card className="border-baju-divider">
      <CardHeader className="bg-baju-background/50">
        <CardTitle className="text-baju-heading">Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="bg-baju-background/30">
            <TableRow>
              <TableHead className="text-baju-text">Order ID</TableHead>
              <TableHead className="text-baju-text">Customer</TableHead>
              <TableHead className="text-baju-text">Date</TableHead>
              <TableHead className="text-baju-text">Total</TableHead>
              <TableHead className="text-baju-text">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="border-b border-baju-divider hover:bg-baju-background/20">
                <TableCell className="text-baju-text font-medium">{order.id}</TableCell>
                <TableCell className="text-baju-text">{order.customer}</TableCell>
                <TableCell className="text-baju-text">{order.date}</TableCell>
                <TableCell className="text-baju-text">{order.total}</TableCell>
                <TableCell>
                  <Badge 
                    className={
                      order.status === "Completed" 
                        ? "bg-green-100 text-green-800 border-green-200 hover:bg-green-100" 
                        : order.status === "Processing" 
                          ? "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-100"
                          : "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-100"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

// Main vendor dashboard page
const VendorDashboard = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "settings";
  
  const renderTabContent = () => {
    switch (tab) {
      case "sales":
        return <SalesData />;
      case "products":
        return <VendorProducts />;
      case "orders":
        return <OrdersList />;
      default:
        return <VendorSettings />;
    }
  };
  
  return (
    <DashboardLayout dashboardType="vendor">
      {renderTabContent()}
    </DashboardLayout>
  );
};

export default VendorDashboard;
