"use client";
import * as React from "react";
import dynamic from "next/dynamic";
import { BUSINESS } from "@/lib/content/business";

const LeafletMap = dynamic(() => import("./leaflet-map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-brand-50 to-amber-50 animate-pulse" />
  ),
});

export function ContactMap() {
  return (
    <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-3xl overflow-hidden border border-border shadow-xl">
      <LeafletMap lat={BUSINESS.geo.lat} lng={BUSINESS.geo.lng} label={BUSINESS.name} address={BUSINESS.address} />
    </div>
  );
}
