
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ProfilePictureProps = {
  initialImage?: string;
};

export const ProfilePicture = ({ initialImage }: ProfilePictureProps) => {
  const [image, setImage] = useState<string | undefined>(initialImage);
  const [isHovering, setIsHovering] = useState(false);
  const { toast } = useToast();
  
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive",
      });
      return;
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Image should be less than 5MB",
        variant: "destructive",
      });
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
      toast({
        title: "Profile picture updated",
        description: "Your profile picture has been updated successfully",
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div 
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Avatar className="h-24 w-24 border-2 border-baju-peach">
          <AvatarImage src={image} />
          <AvatarFallback className="bg-gradient-to-r from-[#f5c8c8] to-[#e8b6b6] text-baju-heading">
            <User className="h-12 w-12" />
          </AvatarFallback>
        </Avatar>
        
        <label
          htmlFor="profile-picture-upload"
          className={`absolute inset-0 flex items-center justify-center rounded-full cursor-pointer transition-opacity ${
            isHovering ? "bg-black bg-opacity-50" : "opacity-0"
          }`}
        >
          <Camera className="h-8 w-8 text-white" />
        </label>
        <input
          type="file"
          id="profile-picture-upload"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </div>
      <p className="text-sm text-gray-600">Click on the image to upload a new profile picture</p>
    </div>
  );
};
