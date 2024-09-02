export interface ICustomer {
    firstName?: string
    lastName?: string
    phoneNumber?: string
}

export interface IGigg {
    startsAt?: number
    stylist?: string
    service?: string
    notes: string
}

export interface IGiggsList extends ICustomer, IGigg {
}