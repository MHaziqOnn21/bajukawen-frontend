
import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import L from 'leaflet';

// Fix for Leaflet marker icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});

L.Marker.prototype.options.icon = DefaultIcon;

export const vendorLocations = [
  { id: 1, name: "Vendor A", lat: 3.1390, lng: 101.6869, address: "Kuala Lumpur" },
  { id: 2, name: "Vendor B", lat: 3.0495, lng: 101.5853, address: "Subang" },
  { id: 3, name: "Vendor C", lat: 3.1570, lng: 101.7117, address: "Ampang" }
];

// Extract unique locations for the filter
const LOCATIONS = [...new Set(vendorLocations.map(vendor => vendor.address))];

// Center map view on filtered vendors or reset to default
function MapViewUpdater({ filteredVendors }: { filteredVendors: typeof vendorLocations }) {
  const map = useMap();
  
  useEffect(() => {
    if (filteredVendors.length === 1) {
      map.setView([filteredVendors[0].lat, filteredVendors[0].lng], 13);
    } else if (filteredVendors.length > 0) {
      // Create bounds that include all vendors
      const bounds = L.latLngBounds(filteredVendors.map(vendor => [vendor.lat, vendor.lng]));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [filteredVendors, map]);
  
  return null;
}

interface VendorMapProps {
  selectedLocation?: string;
  onLocationChange?: (location: string) => void;
}

export const VendorMap: React.FC<VendorMapProps> = ({ selectedLocation = "", onLocationChange }) => {
  // Filter vendors based on selected location
  const filteredVendors = selectedLocation 
    ? vendorLocations.filter(vendor => vendor.address === selectedLocation)
    : vendorLocations;

  const handleLocationSelect = (location: string) => {
    if (onLocationChange) {
      onLocationChange(location);
    }
  };

  const handleClearLocation = () => {
    if (onLocationChange) {
      onLocationChange("");
    }
  };

  return (
    <div className="w-full h-[400px] bg-baju-background rounded-lg border border-baju-input-border p-4 mb-8">
      <div className="text-baju-heading font-semibold mb-4 flex justify-between items-center">
        <span>Vendor Locations</span>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Select
              value={selectedLocation || ""}
              onValueChange={(value) => handleLocationSelect(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All locations</SelectItem>
                {LOCATIONS.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {selectedLocation && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleClearLocation}
            >
              Clear
            </Button>
          )}
        </div>
      </div>
      <div className="w-full h-[300px] rounded-lg overflow-hidden">
        <MapContainer 
          center={[3.1390, 101.6869]} 
          zoom={11} 
          style={{ height: '100%', width: '100%' }} 
          className="z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredVendors.map((vendor) => (
            <Marker 
              key={vendor.id} 
              position={[vendor.lat, vendor.lng]}
            >
              <Popup>
                <div>
                  <h3 className="font-medium">{vendor.name}</h3>
                  <p>{vendor.address}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          <MapViewUpdater filteredVendors={filteredVendors} />
        </MapContainer>
      </div>
    </div>
  );
};
