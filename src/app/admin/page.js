"use client";
import { useState } from "react";
export default function Page() {

 return (
    <main>
      <div className="flex flex-col items-center justify-center py-2">
        <p className="text-2xl">Welcome Admin</p>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
       <button className="p-2" >Users</button>
       <button className="p-2" >Properties</button>
       <button className="p-2" >Transactions</button>
      </div>
    </main>
  );
}
