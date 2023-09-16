"use client";
import { useState } from "react";
export default function Page() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center py-2">
        <p className="text-2xl">Welcome to Selling Platform</p>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <button className="p-2">My Properties</button>
        <button className="p-2">Property Offers</button>
        <button className="p-2">Sold</button>
      </div>
    </main>
  );
}
