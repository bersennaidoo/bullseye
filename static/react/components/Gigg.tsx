import React from "react";
import { IGiggsList, ICustomer } from "../data/types";
import { appointmentTimeOfDay } from "../utils/timeOfDay";

interface IGiggProps {
    firstName?: string
    lastName?: string
    phoneNumber?: string
    startsAt?: number
    stylist?: string
    service?: string
    notes?: string
}

const Gigg = (props: IGiggProps) => {
    const { firstName, lastName, phoneNumber, startsAt, stylist, service, notes } = props

    return (
        <div id="appointment" className="container">
            <h2 className="text-center mb-4 p-3">{firstName} gigg at {appointmentTimeOfDay(startsAt as number)}</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>phoneNumber</th>
                        <th>stylist</th>
                        <th>service</th>
                        <th>notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{phoneNumber}</td>
                        <td>{stylist}</td>
                        <td>{service}</td>
                        <td>{notes}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Gigg

