import React, { useState } from "react";
import { IGigg, IGiggsList } from "../data/types";
import { appointmentTimeOfDay } from "../utils/timeOfDay";
import Gigg from "./Gigg";

interface IGiggsViewProps {
  appointments?: IGiggsList[];
}

const GiggsView = (props: IGiggsViewProps) => {
  const { appointments } = props;
  const [selectedGigg, setSelectedGigg] = useState(0)

  return (
    <div id="appointmentsDayView" className="container">
      <ol>
        {appointments?.map((ap, i) => (
          <li key={ap.startsAt}>
            <button type="button" onClick={() => setSelectedGigg(i)}>
              {appointmentTimeOfDay(ap.startsAt as number)}
            </button>
          </li>
        ))}
      </ol>
      {appointments?.length === 0 ? (
        <p>There are no appointments scheduled for today</p>
      ) : (
        <Gigg {...appointments![selectedGigg]} />
      )}
    </div>
  );
};

export default GiggsView;
