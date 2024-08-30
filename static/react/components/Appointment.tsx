import React from "react";
import { IAppointmentsList, ICustomer } from "../data/types";

interface IAppointmentProps {
    firstName?: string
    lastName?: string
    phoneNumber?: string
    startsAt?: number
}

const Appointment = (props: IAppointmentProps) => {
    const { firstName, lastName, phoneNumber, startsAt } = props

    return (
        <div id="appointment" className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>phoneNumber</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{phoneNumber}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Appointment

