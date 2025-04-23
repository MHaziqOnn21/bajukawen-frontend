
import { ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

type NavigationLoggedInProps = {
  username: string;
};

export const NavigationLoggedIn = ({ username }: NavigationLoggedInProps) => {
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
            <Button
              variant="ghost"
              size="default"
              className="flex items-center gap-2 text-baju-subtext hover:text-baju-heading transition-colors font-semibold px-0 py-0 bg-transparent border-none shadow-none cursor-pointer"
              aria-label={`View ${username}'s profile`}
              // Ready for onClick or route to profile
            >
              <User className="w-4 h-4" />
              <span>{username}</span>
            </Button>
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

