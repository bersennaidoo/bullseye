export const appointmentTimeOfDay = (startsAt: number) => {

    const [h, m] = new Date(startsAt)
                       .toTimeString()
                       .split(":")
    
    return `${h}:${m}`
}