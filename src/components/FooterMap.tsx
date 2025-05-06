
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

export const FooterMap = () => {
  const position: LatLngExpression = [3.1390, 101.6869];

  return (
    <div className="h-[300px] w-full rounded-md overflow-hidden shadow-sm">
      <MapContainer 
        center={position}
        zoom={13} 
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
      </MapContainer>
    </div>
  );
};

export default FooterMap;
