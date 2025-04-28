
import { Star, StarHalf, StarOff } from "lucide-react";

interface ReviewStarsProps {
  rating: number;
  size?: number;
}

export const ReviewStars: React.FC<ReviewStarsProps> = ({ rating, size = 16 }) => {
  // Convert rating to array of full, half, and empty stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={size} className="fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && <StarHalf size={size} className="fill-yellow-400 text-yellow-400" />}
      {[...Array(emptyStars)].map((_, i) => (
        <StarOff key={`empty-${i}`} size={size} className="text-gray-300" />
      ))}
    </div>
  );
};
