
import React from 'react';
import { MapPin } from 'lucide-react';

const vendorLocations = [
  { id: 1, name: "Vendor A", lat: 3.1390, lng: 101.6869, address: "Kuala Lumpur" },
  { id: 2, name: "Vendor B", lat: 3.0495, lng: 101.5853, address: "Subang" },
  { id: 3, name: "Vendor C", lat: 3.1570, lng: 101.7117, address: "Ampang" }
];

export const VendorMap = () => {
  return (
    <div className="w-full h-[400px] bg-baju-background rounded-lg border border-baju-input-border p-4 mb-8">
      <div className="text-baju-heading font-semibold mb-4">Vendor Locations</div>
      <div className="space-y-4">
        {vendorLocations.map((vendor) => (
          <div key={vendor.id} className="flex items-center space-x-3 text-baju-text">
            <MapPin className="h-5 w-5 text-baju-heading" />
            <div>
              <div className="font-medium">{vendor.name}</div>
              <div className="text-sm text-baju-subtext">{vendor.address}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-sm text-baju-subtext text-center">
        Google Maps integration coming soon...
      </div>
    </div>
  );
};
