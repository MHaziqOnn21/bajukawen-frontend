
import { ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

type NavigationLoggedInProps = {
  username: string;
};

export const NavigationLoggedIn = ({ username }: NavigationLoggedInProps) => {
  return (
    <div className="flex items-center justify-between py-4">
      <Link 
        to="/" 
        className="text-2xl font-bold text-baju-heading hover:opacity-80 transition-opacity"
      >
        BajuKawen.com
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <Link
              to="/profile"
              className="text-baju-subtext hover:text-baju-heading transition-colors flex items-center"
              aria-label={`View ${username}'s profile`}
            >
              <User className="w-4 h-4 mr-2 -mt-0.5" />
              {username}
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-baju-heading">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
