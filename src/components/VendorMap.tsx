
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Search } from 'lucide-react';
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Button } from "@/components/ui/button";

export const vendorLocations = [
  { id: 1, name: "Vendor A", lat: 3.1390, lng: 101.6869, address: "Kuala Lumpur" },
  { id: 2, name: "Vendor B", lat: 3.0495, lng: 101.5853, address: "Subang" },
  { id: 3, name: "Vendor C", lat: 3.1570, lng: 101.7117, address: "Ampang" }
];

// Extract unique locations for the filter
const LOCATIONS = [...new Set(vendorLocations.map(vendor => vendor.address))];

interface VendorMapProps {
  selectedLocation?: string;
  onLocationChange?: (location: string) => void;
}

export const VendorMap: React.FC<VendorMapProps> = ({ selectedLocation = "", onLocationChange }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [showLocationCommand, setShowLocationCommand] = useState(false);
  
  // Filter vendors based on selected location
  const filteredVendors = selectedLocation 
    ? vendorLocations.filter(vendor => vendor.address === selectedLocation)
    : vendorLocations;
  
  const filteredLocations = LOCATIONS.filter(location =>
    location.toLowerCase().includes(locationSearch.toLowerCase())
  );

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [101.6869, 3.1390], // Center on KL
      zoom: 11
    });

    // Clear existing markers if any
    const existingMarkers = document.querySelectorAll('.mapboxgl-marker');
    existingMarkers.forEach(marker => marker.remove());

    // Add markers for filtered vendors
    filteredVendors.forEach((vendor) => {
      const marker = document.createElement('div');
      marker.className = 'flex items-center justify-center w-8 h-8';
      
      const pinElement = document.createElement('div');
      pinElement.className = 'text-baju-heading';
      pinElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;
      
      marker.appendChild(pinElement);

      new mapboxgl.Marker(marker)
        .setLngLat([vendor.lng, vendor.lat])
        .setPopup(new mapboxgl.Popup().setHTML(`<h3 class="font-medium">${vendor.name}</h3><p>${vendor.address}</p>`))
        .addTo(map.current);
    });

    // Adjust map view if filtered to one location
    if (filteredVendors.length === 1) {
      map.current.flyTo({
        center: [filteredVendors[0].lng, filteredVendors[0].lat],
        zoom: 13
      });
    } else if (filteredVendors.length > 0) {
      // Reset to view all vendors
      map.current.flyTo({
        center: [101.6869, 3.1390],
        zoom: 11
      });
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken, filteredVendors]);

  const handleLocationSelect = (location: string) => {
    if (onLocationChange) {
      onLocationChange(location);
    }
    setShowLocationCommand(false);
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
        {!mapboxToken ? (
          <input
            type="text"
            placeholder="Enter Mapbox token"
            className="px-3 py-1 border rounded"
            onChange={(e) => setMapboxToken(e.target.value)}
          />
        ) : (
          <div className="flex items-center space-x-2">
            <div className="relative">
              <button
                className="flex items-center justify-between px-3 py-1 text-sm border rounded-md border-baju-input-border bg-background"
                onClick={() => setShowLocationCommand(true)}
              >
                <span>{selectedLocation || "All locations"}</span>
                <Search className="h-4 w-4 ml-2" />
              </button>
              <CommandDialog open={showLocationCommand} onOpenChange={setShowLocationCommand}>
                <Command>
                  <CommandInput 
                    placeholder="Search locations..." 
                    value={locationSearch}
                    onValueChange={setLocationSearch}
                  />
                  <CommandList>
                    <CommandEmpty>No locations found.</CommandEmpty>
                    <CommandGroup>
                      {filteredLocations.map((location) => (
                        <CommandItem
                          key={location}
                          onSelect={() => handleLocationSelect(location)}
                        >
                          {location}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </CommandDialog>
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
        )}
      </div>
      <div ref={mapContainer} className="w-full h-[300px] rounded-lg overflow-hidden" />
      {!mapboxToken && (
        <div className="mt-4 text-sm text-baju-subtext text-center">
          Please enter your Mapbox token to view the map. Get one at mapbox.com
        </div>
      )}
    </div>
  );
};
