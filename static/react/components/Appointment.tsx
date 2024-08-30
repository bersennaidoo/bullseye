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
        <div>{firstName}</div>
    )
}

export default Appointment

