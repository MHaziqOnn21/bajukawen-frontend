
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
    <div className="min-h-screen bg-baju-background">
      {/* Header */}
      <header className="bg-header-gradient shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link 
              to="/" 
              className="text-2xl font-bold text-baju-heading hover:opacity-80 transition-opacity"
            >
              BajuKawen.com
            </Link>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold mb-4 text-baju-heading">
                {dashboardType === 'admin' ? 'Admin Dashboard' : 'Vendor Dashboard'}
              </h2>
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const isActive = location.pathname + location.search === item.href;
                  
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={cn(
                        "flex items-center px-4 py-3 text-sm rounded-md transition-colors",
                        isActive 
                          ? "bg-gradient-to-r from-[#f5c8c8] to-[#e8b6b6] text-baju-heading font-medium" 
                          : "text-baju-subtext hover:text-baju-heading hover:bg-baju-background"
                      )}
                    >
                      <item.icon className={cn("w-5 h-5 mr-3", isActive ? "text-baju-heading" : "text-baju-subtext")} />
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-4 pt-4 border-t border-baju-divider">
                <Link 
                  to="/" 
                  className="flex items-center text-sm text-baju-subtext hover:text-baju-heading"
                >
                  Back to Store
                </Link>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow p-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
