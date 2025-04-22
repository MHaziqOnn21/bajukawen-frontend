
import { Mail, Phone, Instagram, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white mt-24 py-12 border-t border-baju-input-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-baju-heading font-medium text-lg mb-4">Contact Information</h3>
            <div className="space-y-3">
              <a href="tel:+601121234567" className="flex items-center text-baju-footer hover:text-baju-footer-link transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                <span>+601121234567</span>
              </a>
              <a href="mailto:bajukawen@gmail.com" className="flex items-center text-baju-footer hover:text-baju-footer-link transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                <span>bajukawen@gmail.com</span>
              </a>
              <a href="https://instagram.com/BajuKawen" target="_blank" rel="noopener noreferrer" className="flex items-center text-baju-footer hover:text-baju-footer-link transition-colors">
                <Instagram className="h-4 w-4 mr-2" />
                <span>@BajuKawen</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-baju-heading font-medium text-lg mb-4">Address</h3>
            <div className="flex text-baju-footer">
              <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
              <div>
                No.01, Jalan Mati 1/0, Somewhere,<br />
                Persiaran Entah,<br />
                012345 Malaysia
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-baju-footer text-xs">
            © {new Date().getFullYear()} BajuKawen.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
