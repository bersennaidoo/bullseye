import React, { useState } from "react";
import { IAppointments, IAppointmentsList } from "../data/types";
import { appointmentTimeOfDay } from "../utils/timeOfDay";
import Appointment from "./Appointment";

interface IAppointmentsDayViewProps {
  appointments?: IAppointmentsList[];
}

const AppointmentsDayView = (props: IAppointmentsDayViewProps) => {
  const { appointments } = props;
  const [selectedAppointment, setSelectedAppointment] = useState(0)

  return (
    <div id="appointmentsDayView" className="container">
      <ol>
        {appointments?.map((ap, i) => (
          <li key={ap.startsAt}>
            <button type="button" onClick={() => setSelectedAppointment(i)}>
              {appointmentTimeOfDay(ap.startsAt as number)}
            </button>
          </li>
        ))}
      </ol>
      {appointments?.length === 0 ? (
        <p>There are no appointments scheduled for today</p>
      ) : (
        <Appointment {...appointments![selectedAppointment]} />
      )}
    </div>
  );
};

export default AppointmentsDayView;
