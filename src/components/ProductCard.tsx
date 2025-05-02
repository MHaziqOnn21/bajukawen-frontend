
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white rounded-lg overflow-hidden border border-baju-input-border shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={product.type === 'groom' ? product.groomImage : product.brideImage}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-white/90 text-baju-heading">
            {product.type === 'set' ? 'Set Match' : product.type === 'bride' ? 'Bride' : 'Groom'}
          </Badge>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-baju-heading">
            {product.name}
          </h3>
          <Badge
            variant={product.availability === "In Stock" ? "default" : "outline"}
            className={
              product.availability === "In Stock"
                ? "bg-green-100 text-green-800 hover:bg-green-100"
                : "bg-red-100 text-red-800 hover:bg-red-100"
            }
          >
            {product.availability}
          </Badge>
        </div>
        <p className="text-baju-text text-sm line-clamp-2">{product.description}</p>
        <p className="text-baju-heading font-semibold">{product.price}</p>
      </div>
    </Link>
  );
};
