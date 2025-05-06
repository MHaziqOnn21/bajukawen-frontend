import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const FooterMap = () => {
  return (
    <div className="h-[300px] w-full rounded-md overflow-hidden shadow-sm">
      <MapContainer 
        defaultCenter={[3.1390, 101.6869]} 
        defaultZoom={13} 
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
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};
