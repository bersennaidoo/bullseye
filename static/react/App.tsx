import React, { useState } from "react";
import AppointmentsDayView from "./components/AppointmentsDayView";
import { IAppointmentsList } from "./data/types";

function App() {
  const today = new Date()
  const twoAppointments: IAppointmentsList[] = [
    { startsAt: today.setHours(12, 0),  firstName: "Alice", lastName: "Bree", phoneNumber: "999-999-9999" },
    { startsAt: today.setHours(13, 0), firstName: "Jon", lastName: "Jonn", phoneNumber: "999-999-8888" },
  ];
  return (
    <div className="pt-5 mt-5">
      <h1>Entry point react</h1>
      <AppointmentsDayView appointments={twoAppointments} />
    </div>
  );
}

export default App;
