import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';

const Map = () => {

  const position = [13.046698, 80.253458];

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={12} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ margin: '0', paddingBottom: '5px' }}>Stella Maris College</h3>
              <img
                src={require('../Assets/smc.jpg')}
                alt="Stella Maris College"
                style={{
                  width: '50%',
                  height: 'auto',
                  borderRadius: '8px',
                  maxWidth: '100%'
                }}
              />
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;