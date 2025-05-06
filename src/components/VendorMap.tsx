
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
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
  { id: 1, name: "Elegant Bridal House", lat: 3.1390, lng: 101.6869, address: "Kuala Lumpur" },
  { id: 2, name: "Modern Menswear", lat: 3.0495, lng: 101.5853, address: "Subang" },
  { id: 3, name: "Vendor C", lat: 3.1570, lng: 101.7117, address: "Ampang" }
];

// Extract unique locations for the filter
const PINNED_LOCATIONS = [...new Set(vendorLocations.map(vendor => vendor.address))];

// Center map view on filtered vendors or reset to default
function MapViewUpdater({ filteredVendors }) {
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

export const VendorMap = ({ selectedLocation = "", onLocationChange }) => {
  const [searchInput, setSearchInput] = useState("");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  
  // Filter vendors based on selected location or search input
  const filteredVendors = selectedLocation 
    ? vendorLocations.filter(vendor => vendor.address === selectedLocation) 
    : searchInput
      ? vendorLocations.filter(vendor => 
          vendor.address.toLowerCase().includes(searchInput.toLowerCase()) ||
          vendor.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      : vendorLocations;
  
  const handleLocationSelect = (location) => {
    if (onLocationChange) {
      onLocationChange(location);
      setSearchInput("");
    }
  };
  
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    if (onLocationChange && e.target.value) {
      onLocationChange("");
    }
  };
  
  const handleClearLocation = () => {
    if (onLocationChange) {
      onLocationChange("");
      setSearchInput("");
    }
  };
  
  return (
    <div className="w-full h-[400px] bg-baju-background rounded-lg border border-baju-input-border p-4 mb-8">
      <div className="text-baju-heading font-semibold mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <span>Vendor Locations</span>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <div className="relative w-full sm:w-auto">
            <Input
              type="text"
              placeholder="Search location or vendor..."
              value={searchInput}
              onChange={handleSearchInput}
              className="w-full sm:w-[240px]"
            />
            {searchInput && (
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={() => {
                  setSearchInput("");
                  handleClearLocation();
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>
          
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <div className="relative">
              <Select 
                value={selectedLocation || ""}
                onValueChange={(value) => handleLocationSelect(value)}
                open={isSelectOpen}
                onOpenChange={setIsSelectOpen}
              >
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Pinned locations" />
                </SelectTrigger>
                <SelectContent>
                  {PINNED_LOCATIONS.map(location => (
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
      </div>
      <div className="w-full h-[300px] rounded-lg overflow-hidden">
        <MapContainer 
          defaultCenter={[3.1390, 101.6869]} 
          defaultZoom={11} 
          style={{ height: '100%', width: '100%' }} 
          className="z-0"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {filteredVendors.map(vendor => (
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
