
import { ReviewStars } from "./ReviewStars";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export interface Review {
  id: number;
  customerName: string;
  avatarUrl?: string;
  rating: number;
  date: string;
  comment: string;
}

interface CustomerReviewsProps {
  reviews: Review[];
}

export const CustomerReviews: React.FC<CustomerReviewsProps> = ({ reviews }) => {
  // Calculate average rating
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;
  
  return (
    <div className="mt-12 space-y-8">
      <h2 className="text-2xl font-bold text-baju-heading">Customer Reviews</h2>
      
      <div className="bg-baju-soft rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center">
            <span className="text-4xl font-bold text-baju-heading mr-2">
              {averageRating.toFixed(1)}
            </span>
            <span className="text-lg text-baju-subtext">out of 5</span>
          </div>
          
          <div className="flex items-center">
            <ReviewStars rating={averageRating} size={24} />
            <span className="ml-2 text-baju-subtext">
              ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
            </span>
          </div>
        </div>
      </div>
      
      <Separator className="bg-baju-input-border" />
      
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white border border-baju-input-border rounded-lg p-4 md:p-6">
            <div className="flex justify-between mb-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={review.avatarUrl} alt={review.customerName} />
                  <AvatarFallback className="bg-baju-light text-baju-heading">
                    {review.customerName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-baju-heading">{review.customerName}</p>
                  <p className="text-sm text-baju-subtext">{review.date}</p>
                </div>
              </div>
              <ReviewStars rating={review.rating} />
            </div>
            <p className="text-baju-text">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
