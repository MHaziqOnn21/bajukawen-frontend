
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin } from "lucide-react";

const addressCoords = { lat: 3.139, lng: 101.6869 };

const FooterMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [addressCoords.lng, addressCoords.lat],
      zoom: 15,
      interactive: false,
    });

    const markerDiv = document.createElement("div");
    markerDiv.className = "flex items-center justify-center";
    markerDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9b87f5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;

    new mapboxgl.Marker(markerDiv)
      .setLngLat([addressCoords.lng, addressCoords.lat])
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="w-full">
      {!mapboxToken && (
        <div className="mb-2">
          <input
            type="text"
            placeholder="Enter Mapbox token"
            className="px-2 py-1 border rounded w-full mb-2 text-xs"
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <div className="text-xs text-baju-subtext text-center">
            Enter your Mapbox token to see the location map.
          </div>
        </div>
      )}
      <div
        ref={mapContainer}
        className="w-full h-[120px] rounded-md border border-baju-input-border overflow-hidden"
        style={{ minHeight: "100px" }}
      />
    </div>
  );
};

export default FooterMap;

