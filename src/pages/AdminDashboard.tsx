
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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Admin settings component
const AdminSettings = () => {
  return (
    <Card className="border-baju-divider">
      <CardHeader className="bg-baju-background/50">
        <CardTitle className="text-baju-heading">Admin Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
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
            Update Password
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

// Vendors list component
const VendorsList = () => {
  const vendors = [
    { id: 1, name: "Vendor A", location: "Kuala Lumpur", products: 12, status: "Active" },
    { id: 2, name: "Vendor B", location: "Subang", products: 5, status: "Active" },
    { id: 3, name: "Vendor C", location: "Ampang", products: 8, status: "Inactive" }
  ];
  
  return (
    <Card className="border-baju-divider">
      <CardHeader className="bg-baju-background/50">
        <CardTitle className="text-baju-heading">Registered Vendors</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="bg-baju-background/30">
            <TableRow>
              <TableHead className="text-baju-text">ID</TableHead>
              <TableHead className="text-baju-text">Name</TableHead>
              <TableHead className="text-baju-text">Location</TableHead>
              <TableHead className="text-baju-text">Products</TableHead>
              <TableHead className="text-baju-text">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vendors.map((vendor) => (
              <TableRow key={vendor.id} className="border-b border-baju-divider hover:bg-baju-background/20">
                <TableCell className="text-baju-text">{vendor.id}</TableCell>
                <TableCell className="text-baju-text font-medium">{vendor.name}</TableCell>
                <TableCell className="text-baju-text">{vendor.location}</TableCell>
                <TableCell className="text-baju-text">{vendor.products}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline"
                    className={
                      vendor.status === "Active" 
                        ? "bg-green-100 text-green-800 border-green-200 hover:bg-green-100" 
                        : "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-100"
                    }
                  >
                    {vendor.status}
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

// Products list component
const ProductsList = () => {
  const products = [
    { id: 101, name: "Traditional Set A", vendor: "Vendor A", type: "set", price: "RM 599.00", stock: 15 },
    { id: 102, name: "Modern Groom Suit", vendor: "Vendor B", type: "groom", price: "RM 299.00", stock: 8 },
    { id: 103, name: "Classic Bride Dress", vendor: "Vendor C", type: "bride", price: "RM 499.00", stock: 5 },
  ];
  
  return (
    <Card className="border-baju-divider">
      <CardHeader className="bg-baju-background/50">
        <CardTitle className="text-baju-heading">Product Catalog</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="bg-baju-background/30">
            <TableRow>
              <TableHead className="text-baju-text">ID</TableHead>
              <TableHead className="text-baju-text">Product Name</TableHead>
              <TableHead className="text-baju-text">Vendor</TableHead>
              <TableHead className="text-baju-text">Type</TableHead>
              <TableHead className="text-baju-text">Price</TableHead>
              <TableHead className="text-baju-text">Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} className="border-b border-baju-divider hover:bg-baju-background/20">
                <TableCell className="text-baju-text">{product.id}</TableCell>
                <TableCell className="text-baju-text font-medium">{product.name}</TableCell>
                <TableCell className="text-baju-text">{product.vendor}</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

// Customers list component
const CustomersList = () => {
  const customers = [
    { id: 1001, name: "John Doe", email: "john@example.com", orders: 3, since: "Jan 2023" },
    { id: 1002, name: "Jane Smith", email: "jane@example.com", orders: 1, since: "Mar 2023" },
    { id: 1003, name: "David Lee", email: "david@example.com", orders: 5, since: "Dec 2022" }
  ];
  
  return (
    <Card className="border-baju-divider">
      <CardHeader className="bg-baju-background/50">
        <CardTitle className="text-baju-heading">Registered Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="bg-baju-background/30">
            <TableRow>
              <TableHead className="text-baju-text">ID</TableHead>
              <TableHead className="text-baju-text">Name</TableHead>
              <TableHead className="text-baju-text">Email</TableHead>
              <TableHead className="text-baju-text">Orders</TableHead>
              <TableHead className="text-baju-text">Customer Since</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id} className="border-b border-baju-divider hover:bg-baju-background/20">
                <TableCell className="text-baju-text">{customer.id}</TableCell>
                <TableCell className="text-baju-text font-medium">{customer.name}</TableCell>
                <TableCell className="text-baju-text">{customer.email}</TableCell>
                <TableCell className="text-baju-text">{customer.orders}</TableCell>
                <TableCell className="text-baju-text">{customer.since}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

// Main admin dashboard page
const AdminDashboard = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "settings";
  
  const renderTabContent = () => {
    switch (tab) {
      case "vendors":
        return <VendorsList />;
      case "products":
        return <ProductsList />;
      case "customers":
        return <CustomersList />;
      default:
        return <AdminSettings />;
    }
  };
  
  return (
    <DashboardLayout dashboardType="admin">
      {renderTabContent()}
    </DashboardLayout>
  );
};

export default AdminDashboard;
