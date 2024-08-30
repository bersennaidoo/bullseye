export interface ICustomer {
    firstName?: string
    lastName?: string
    phoneNumber?: string
}

export interface IAppointments {
    startsAt?: number
}

export interface IAppointmentsList extends ICustomer, IAppointments {
}