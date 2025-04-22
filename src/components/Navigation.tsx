
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <h1 className="text-2xl font-bold text-baju-heading">BajuKawen.com</h1>
      <NavigationMenu>
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <NavigationMenuLink
              className="text-baju-subtext hover:text-baju-heading transition-colors"
              href="#products"
            >
              Products
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="text-baju-subtext hover:text-baju-heading transition-colors"
              href="#auth"
            >
              Login/SignUp
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button variant="ghost" size="icon" className="text-baju-heading">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
