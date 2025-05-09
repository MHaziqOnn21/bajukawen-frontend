
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import 'leaflet/dist/leaflet.css';
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

// Vendors data (simulate API response)
const vendors = [
  { id: 1, name: "Vendor A", lat: 3.1390, lng: 101.6869, rating: 4.8, type: "premium" },
  { id: 2, name: "Vendor B", lat: 3.1421, lng: 101.6867, rating: 4.5, type: "standard" },
  { id: 3, name: "Vendor C", lat: 3.1370, lng: 101.6830, rating: 4.9, type: "premium" },
  { id: 4, name: "Vendor D", lat: 3.1480, lng: 101.6950, rating: 4.2, type: "standard" },
  { id: 5, name: "Vendor E", lat: 3.1300, lng: 101.7100, rating: 4.7, type: "premium" },
];

// Map component that updates the map view when filter changes
function MapView({ filteredVendors, selectedVendor }) {
  const map = useMap();
  
  useEffect(() => {
    if (selectedVendor) {
      map.setView([selectedVendor.lat, selectedVendor.lng], 15);
    } else if (filteredVendors.length > 0) {
      const bounds = L.latLngBounds(filteredVendors.map(v => [v.lat, v.lng]));
      map.fitBounds(bounds, { padding: [50, 50] });
    } else {
      // Default to KL city center if no vendors are filtered
      map.setView([3.1390, 101.6869], 12);
    }
  }, [map, filteredVendors, selectedVendor]);
  
  return null;
}

export const VendorMap = ({ selectedLocation, onLocationChange }) => {
  const [filterType, setFilterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [location, setLocation] = useState(selectedLocation || "");
  
  // Apply filters to vendors
  const filteredVendors = vendors.filter(vendor => {
    const matchesType = filterType === 'all' || vendor.type === filterType;
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  // Update location when prop changes
  useEffect(() => {
    if (selectedLocation !== location) {
      setLocation(selectedLocation || "");
    }
  }, [selectedLocation]);

  // Handle location search
  const handleSearch = () => {
    if (location.trim() === "") {
      toast.error("Please enter a location to search");
      return;
    }
    
    // Simulate geocoding API (in a real app, you would use a geocoding service)
    setTimeout(() => {
      toast.success(`Searching vendors near ${location}...`);
      // For demo purposes, we just show the notification
    }, 500);
  };
  
  const handleVendorSelect = (vendor) => {
    setSelectedVendor(vendor);
    setSearchQuery(vendor.name);
  };
  
  const handleLocationChange = (value) => {
    setLocation(value);
    if (onLocationChange) {
      onLocationChange(value);
    }
    
    if (value === "") {
      setSelectedVendor(null);
      setSearchQuery("");
    }
  };

  const center = [3.1390, 101.6869];
  
  return (
    <div className="w-full h-[400px] bg-baju-background rounded-lg border border-baju-input-border p-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1">
          <div className="relative">
            <Input
              placeholder="Search vendors..."
              className="border-baju-input-border focus:border-baju-input-focus"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Input
              placeholder="Enter location"
              className="border-baju-input-border focus:border-baju-input-focus pr-10"
              value={location}
              onChange={(e) => handleLocationChange(e.target.value)}
            />
            <Button 
              size="icon" 
              className="absolute right-0 top-0 h-full bg-baju-primary hover:bg-baju-secondary text-white"
              onClick={handleSearch}
              aria-label="Search location"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div>
          <Label className="text-sm font-medium text-baju-text mb-2 block">Filter Vendors:</Label>
          <RadioGroup 
            defaultValue="all" 
            className="flex gap-4"
            value={filterType}
            onValueChange={setFilterType}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all" className="text-baju-text">All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="premium" id="premium" />
              <Label htmlFor="premium" className="text-baju-text">Premium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="standard" id="standard" />
              <Label htmlFor="standard" className="text-baju-text">Standard</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="w-full h-[300px] rounded-lg overflow-hidden">
        <MapContainer 
          center={center}
          zoom={11} 
          style={{ height: '100%', width: '100%' }} 
          className="z-0"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapView filteredVendors={filteredVendors} selectedVendor={selectedVendor} />
          
          {filteredVendors.map(vendor => (
            <Marker 
              key={vendor.id} 
              position={[vendor.lat, vendor.lng] as L.LatLngExpression}
            >
              <Popup>
                <div>
                  <h3 className="font-bold text-baju-heading">{vendor.name}</h3>
                  <p className="text-baju-text">Rating: {vendor.rating}/5</p>
                  <p className="text-baju-subtext capitalize mb-2">{vendor.type} Vendor</p>
                  <Button 
                    size="sm" 
                    className="w-full bg-baju-primary hover:bg-baju-secondary text-white"
                    onClick={() => window.location.href = `/vendor/${vendor.id}`}
                  >
                    View Profile
                  </Button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      <div className="mt-4">
        <p className="text-sm text-baju-subtext">
          {filteredVendors.length} vendors found in the selected area
        </p>
        <div className="mt-2 flex gap-2 flex-wrap">
          {filteredVendors.slice(0, 3).map(vendor => (
            <Card 
              key={vendor.id} 
              className="inline-block border-baju-input-border cursor-pointer hover:border-baju-primary transition-colors"
              onClick={() => handleVendorSelect(vendor)}
            >
              <CardContent className="p-2">
                <div className="text-sm font-medium text-baju-heading">{vendor.name}</div>
                <div className="text-xs text-baju-subtext">Rating: {vendor.rating}/5</div>
              </CardContent>
            </Card>
          ))}
          {filteredVendors.length > 3 && (
            <Button 
              variant="outline" 
              size="sm" 
              className="text-baju-heading border-baju-input-border"
            >
              +{filteredVendors.length - 3} more
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorMap;
