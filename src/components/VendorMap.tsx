
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';

const vendorLocations = [
  { id: 1, name: "Vendor A", lat: 3.1390, lng: 101.6869, address: "Kuala Lumpur" },
  { id: 2, name: "Vendor B", lat: 3.0495, lng: 101.5853, address: "Subang" },
  { id: 3, name: "Vendor C", lat: 3.1570, lng: 101.7117, address: "Ampang" }
];

export const VendorMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [101.6869, 3.1390], // Center on KL
      zoom: 11
    });

    // Add markers for each vendor
    vendorLocations.forEach((vendor) => {
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

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="w-full h-[400px] bg-baju-background rounded-lg border border-baju-input-border p-4 mb-8">
      <div className="text-baju-heading font-semibold mb-4 flex justify-between items-center">
        <span>Vendor Locations</span>
        {!mapboxToken && (
          <input
            type="text"
            placeholder="Enter Mapbox token"
            className="px-3 py-1 border rounded"
            onChange={(e) => setMapboxToken(e.target.value)}
          />
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
