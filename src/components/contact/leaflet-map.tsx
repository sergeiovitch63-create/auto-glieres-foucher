"use client";
import * as React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.DivIcon({
  className: "",
  html: `
    <div style="
      width: 44px; height: 44px;
      display: flex; align-items: center; justify-content: center;
    ">
      <div style="
        position: absolute; inset: 0;
        background: rgba(255,90,54,.25);
        border-radius: 9999px;
        animation: pingDot 1.6s cubic-bezier(0,0,.2,1) infinite;
      "></div>
      <div style="
        position: relative;
        width: 22px; height: 22px;
        background: #ff5a36;
        border: 4px solid #fff;
        border-radius: 9999px;
        box-shadow: 0 4px 12px rgba(255,90,54,.5);
      "></div>
    </div>
    <style>
      @keyframes pingDot {
        75%, 100% { transform: scale(2); opacity: 0; }
      }
    </style>
  `,
  iconSize: [44, 44],
  iconAnchor: [22, 22],
});

export default function LeafletMap({
  lat,
  lng,
  label,
  address,
}: {
  lat: number;
  lng: number;
  label: string;
  address: string;
}) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", background: "#f4f2ee" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={customIcon}>
        <Popup>
          <strong>{label}</strong>
          <br />
          {address}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
