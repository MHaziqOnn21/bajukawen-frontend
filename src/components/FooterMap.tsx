
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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

const addressCoords = {
  lat: 3.139,
  lng: 101.6869
};

const FooterMap = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[120px] rounded-md border border-baju-input-border overflow-hidden" style={{ minHeight: "100px" }}>
        <MapContainer 
          defaultCenter={[addressCoords.lat, addressCoords.lng]} 
          zoom={15} 
          style={{ height: '100%', width: '100%' }}
          zoomControl={false}
          dragging={false}
          touchZoom={false}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[addressCoords.lat, addressCoords.lng]}>
            <Popup>BajuKawen HQ</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default FooterMap;
