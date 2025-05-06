
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
    <Card>
      <CardHeader>
        <CardTitle>Admin Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
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
          <Button type="submit">Update Password</Button>
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
    <Card>
      <CardHeader>
        <CardTitle>Registered Vendors</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Products</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vendors.map((vendor) => (
              <TableRow key={vendor.id}>
                <TableCell>{vendor.id}</TableCell>
                <TableCell>{vendor.name}</TableCell>
                <TableCell>{vendor.location}</TableCell>
                <TableCell>{vendor.products}</TableCell>
                <TableCell>
                  <Badge 
                    variant={vendor.status === "Active" ? "default" : "secondary"}
                    className={
                      vendor.status === "Active" 
                        ? "bg-green-100 text-green-800 hover:bg-green-100" 
                        : "bg-gray-100 text-gray-800 hover:bg-gray-100"
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
    <Card>
      <CardHeader>
        <CardTitle>Product Catalog</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Vendor</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.vendor}</TableCell>
                <TableCell>
                  <Badge variant="outline">
                    {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
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
    <Card>
      <CardHeader>
        <CardTitle>Registered Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Customer Since</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.orders}</TableCell>
                <TableCell>{customer.since}</TableCell>
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
