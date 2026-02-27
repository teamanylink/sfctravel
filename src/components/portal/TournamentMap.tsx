"use client";

import { useEffect, useRef, useState } from "react";
import { Tournament } from "@/lib/types";

interface TournamentMapProps {
  tournaments: Tournament[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function TournamentMap({ tournaments, selectedId, onSelect }: TournamentMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    let cancelled = false;

    async function initMap() {
      const L = (await import("leaflet")).default;

      if (cancelled || !mapRef.current) return;

      const map = L.map(mapRef.current, {
        center: [20, -20],
        zoom: 2.5,
        minZoom: 2,
        maxZoom: 12,
        zoomControl: false,
        scrollWheelZoom: true,
        attributionControl: false,
      });

      L.control.zoom({ position: "bottomright" }).addTo(map);

      // Light, elegant map tiles
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 19,
          subdomains: "abcd",
        }
      ).addTo(map);

      mapInstanceRef.current = map;
      setIsLoaded(true);
    }

    initMap();

    return () => {
      cancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapInstanceRef.current || !isLoaded) return;

    const L = require("leaflet");
    const map = mapInstanceRef.current;

    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    tournaments.forEach((t) => {
      const isSelected = t.id === selectedId;
      const isActive = t.status === "Active";
      const isPast = t.status === "Past";

      const color = isActive ? "#0ea5e9" : isPast ? "#9ca3af" : "#0a1628";
      const bgColor = isSelected ? color : "#ffffff";
      const borderColor = color;
      
      const size = isSelected ? 16 : 12;
      const pulseSize = size + 16;

      const html = `
        <div style="position:relative;width:${pulseSize}px;height:${pulseSize}px;display:flex;align-items:center;justify-content:center;">
          ${(isActive || isSelected) ? `<div style="position:absolute;width:${pulseSize}px;height:${pulseSize}px;border-radius:50%;background:${color};opacity:0.2;animation:marker-ping 2s cubic-bezier(0,0,0.2,1) infinite;"></div>` : ""}
          <div style="width:${size}px;height:${size}px;border-radius:50%;background:${bgColor};border:2px solid ${borderColor};box-shadow:0 4px 12px rgba(0,0,0,0.1);position:relative;z-index:1;transition:all 0.3s ease;cursor:pointer;"></div>
        </div>
      `;

      const icon = L.divIcon({
        html,
        className: "",
        iconSize: [pulseSize, pulseSize],
        iconAnchor: [pulseSize / 2, pulseSize / 2],
      });

      const marker = L.marker([t.lat, t.lng], { icon }).addTo(map);

      const tooltipContent = `
        <div style="font-family:var(--font-sans);padding:6px 4px;">
          <div style="font-weight:500;font-size:13px;color:#0a1628;margin-bottom:4px;">${t.name}</div>
          <div style="font-size:11px;color:#0a1628;opacity:0.6;">${t.city}, ${t.country}</div>
        </div>
      `;
      marker.bindTooltip(tooltipContent, {
        direction: "top",
        offset: [0, -pulseSize / 2],
        className: "elegant-tooltip",
      });

      marker.on("click", () => {
        onSelect(t.id);
      });

      markersRef.current.push(marker);
    });
  }, [tournaments, selectedId, onSelect, isLoaded]);

  useEffect(() => {
    if (!mapInstanceRef.current || !selectedId || !isLoaded) return;
    const t = tournaments.find((t) => t.id === selectedId);
    if (t) {
      mapInstanceRef.current.flyTo([t.lat, t.lng], 6, {
        duration: 1.5,
        easeLinearity: 0.25,
      });
    }
  }, [selectedId, tournaments, isLoaded]);

  return (
    <div className="relative w-full h-[500px] lg:h-[600px] bg-[#f8f9fa]">
      <div ref={mapRef} className="w-full h-full z-0" />

      {!isLoaded && (
        <div className="absolute inset-0 bg-[#fcfcfc] flex items-center justify-center z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-2 border-navy-900/10 border-t-navy-900 rounded-full animate-spin" />
            <p className="text-[10px] font-light tracking-[0.2em] text-navy-900/40 uppercase">Loading Map</p>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes marker-ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .elegant-tooltip {
          background: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(8px) !important;
          border: 1px solid rgba(10, 22, 40, 0.05) !important;
          border-radius: 12px !important;
          padding: 8px 16px !important;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08) !important;
        }
        .elegant-tooltip .leaflet-tooltip-tip {
          border-top-color: rgba(255, 255, 255, 0.95) !important;
        }
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08) !important;
          border-radius: 12px !important;
          overflow: hidden !important;
          margin-bottom: 24px !important;
          margin-right: 24px !important;
        }
        .leaflet-control-zoom a {
          background: rgba(255, 255, 255, 0.9) !important;
          backdrop-filter: blur(8px) !important;
          color: #0a1628 !important;
          border-color: rgba(10, 22, 40, 0.05) !important;
          width: 36px !important;
          height: 36px !important;
          line-height: 36px !important;
          font-size: 16px !important;
          transition: all 0.2s ease !important;
        }
        .leaflet-control-zoom a:hover {
          background: #ffffff !important;
          color: #0ea5e9 !important;
        }
      `}</style>
    </div>
  );
}
