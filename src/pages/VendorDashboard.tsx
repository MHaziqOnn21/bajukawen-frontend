
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
import { ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

// Vendor settings component
const VendorSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vendor Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="vendor-name">Vendor Name</Label>
            <Input id="vendor-name" defaultValue="Vendor A" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vendor-location">Location</Label>
            <Input id="vendor-location" defaultValue="Kuala Lumpur" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
          <Button type="submit">Update Settings</Button>
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
    <Card>
      <CardHeader>
        <CardTitle>Monthly Sales Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [`RM ${value}`, 'Sales']}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Bar dataKey="sales" fill="#9b87f5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <Card>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-gray-500">Total Sales</div>
              <div className="text-2xl font-bold">RM 89,600</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-gray-500">Average Monthly</div>
              <div className="text-2xl font-bold">RM 7,467</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-gray-500">Best Month</div>
              <div className="text-2xl font-bold">Dec (RM 9,800)</div>
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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>My Products</CardTitle>
        <Button size="sm">Add New Product</Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>In Stock</TableHead>
              <TableHead>Total Sold</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">
                    {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.sold}</TableCell>
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
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>
                  <Badge 
                    className={
                      order.status === "Completed" 
                        ? "bg-green-100 text-green-800 hover:bg-green-100" 
                        : order.status === "Processing" 
                          ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                          : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
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
