
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Settings, 
  Users, 
  List, 
  ChartBarStacked, 
  FileText, 
  User
} from "lucide-react";

type DashboardLayoutProps = {
  children: React.ReactNode;
  dashboardType: 'admin' | 'vendor';
};

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
}

export const DashboardLayout = ({ children, dashboardType }: DashboardLayoutProps) => {
  const location = useLocation();
  
  const adminNavItems: NavItem[] = [
    { title: "Settings", href: "/admin", icon: Settings },
    { title: "Vendors", href: "/admin?tab=vendors", icon: Users },
    { title: "Products", href: "/admin?tab=products", icon: List },
    { title: "Customers", href: "/admin?tab=customers", icon: User }
  ];
  
  const vendorNavItems: NavItem[] = [
    { title: "Settings", href: "/vendor", icon: Settings },
    { title: "Sales", href: "/vendor?tab=sales", icon: ChartBarStacked },
    { title: "Products", href: "/vendor?tab=products", icon: List },
    { title: "Orders", href: "/vendor?tab=orders", icon: FileText }
  ];
  
  const navItems = dashboardType === 'admin' ? adminNavItems : vendorNavItems;
  
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-baju-heading">
            {dashboardType === 'admin' ? 'Admin Dashboard' : 'Vendor Dashboard'}
          </h1>
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname + location.search === item.href;
            
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center px-4 py-3 text-sm rounded-md transition-colors",
                  isActive 
                    ? "bg-baju-background text-baju-heading font-medium" 
                    : "text-gray-500 hover:text-baju-heading hover:bg-gray-50"
                )}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.title}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 mt-auto border-t">
          <Link 
            to="/" 
            className="flex items-center text-sm text-gray-500 hover:text-baju-heading"
          >
            Back to Store
          </Link>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
