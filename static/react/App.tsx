import React, { useState } from "react";
import GiggsView from "./components/GiggsView";
import { IGiggsList } from "./data/types";

function App() {
  const today = new Date()
  const twoAppointments: IGiggsList[] = [
    { startsAt: today.setHours(12, 0), stylist: "Eve", service: "Hair trim", notes: "See you later", firstName: "Alice", lastName: "Bree", phoneNumber: "999-999-9999" },
    { startsAt: today.setHours(13, 0), stylist: "Eve", service: "Beard trim", notes: "See you later", firstName: "Jon", lastName: "Jonn", phoneNumber: "999-999-8888" },
  ];
  return (
    <div className="pt-5 mt-5">
      <h1>Entry point react</h1>
      <GiggsView appointments={twoAppointments} />
    </div>
  );
}

export default App;
