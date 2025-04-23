
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
          {/* Username: now clickable, as a button for later routing */}
          <NavigationMenuItem>
            <Button
              variant="ghost"
              size="default"
              className="text-baju-heading font-semibold px-4 py-2 rounded bg-baju-background border border-baju-input-border hover:bg-baju-heading/10 transition-colors flex items-center gap-2 cursor-pointer"
              // In the future: could use onClick or route to user's profile
              aria-label={`View ${username}'s profile`}
            >
              <User className="w-4 h-4" />
              <span>{`Hi, ${username}`}</span>
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
