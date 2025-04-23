
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogIn, UserPlus } from "lucide-react";

const LoginSignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fade-in">
      <Dialog open>
        <DialogContent className="max-w-sm mx-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <LogIn className="w-5 h-5" />
              Login / Sign Up
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            {/* Placeholder for actual login/signup forms */}
            <Button
              className="w-full flex gap-2"
              onClick={() => alert("Login functionality coming soon!")}
              variant="default"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Button>
            <Button
              className="w-full flex gap-2"
              onClick={() => alert("Sign Up functionality coming soon!")}
              variant="secondary"
            >
              <UserPlus className="w-4 h-4" />
              Sign Up
            </Button>
            <Button
              className="w-full mt-2"
              variant="ghost"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginSignUp;
