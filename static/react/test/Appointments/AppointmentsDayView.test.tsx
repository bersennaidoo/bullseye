import React, { act } from "react";
import ReactDOM from "react-dom/client";
import AppointmentsDayView from "../../components/AppointmentsDayView";
import { IAppointments, IAppointmentsList, ICustomer } from "../../data/types";

describe("AppointmentsDayView", () => {
  let container: HTMLDivElement;
  const today = new Date();
  const twoAppointments: IAppointmentsList[] = [
    { startsAt: today.setHours(12, 0),  firstName: "Alice", lastName: "Bree", phoneNumber: "999-999-9999" },
    { startsAt: today.setHours(13, 0), firstName: "Jon", lastName: "Jonn", phoneNumber: "999-999-8888" },
  ];

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  const render = (component: React.ReactNode) => {
    act(() => ReactDOM.createRoot(container).render(component));
  };

  it("renders a div with the right id", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(document.querySelector("div#appointmentsDayView")).not.toBeNull();
  });

  it("renders an ol element to display appointments", () => {
    render(<AppointmentsDayView appointments={[]} />);

    const listElement = document.querySelector("ol");

    expect(listElement).not.toBeNull();
  });

  it("renders an li for each appointment", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);

    const listChildren = document.querySelectorAll("ol > li");

    expect(listChildren).toHaveLength(2);
  });

  it("renders the time of each appointment", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    const listChildren = document.querySelectorAll("li");

    expect(listChildren[0].textContent).toEqual("12:00");
  });

  it("initially shows a message saying there are no appointments today", () => {
    render(<AppointmentsDayView appointments={[]} />)

    expect(document.body.textContent).toContain(
      "There are no appointments scheduled for today"
    )
  })

  it("selects the first appointment by default", () => {
    render(
      <AppointmentsDayView appointments={twoAppointments} />
    )

    expect(document.body.textContent).toContain("Alice")
  })

  it("has a button element in each li", () => {
    render(
      <AppointmentsDayView appointments={twoAppointments} />
    )

    const buttons = document.querySelectorAll("li > button")
    expect(buttons).toHaveLength(2)
    expect(buttons[0]).not.toBeNull()
  })

  it("renders another appointment when clicked", () => {
    render(
      <AppointmentsDayView 
        appointments={twoAppointments}
      />
    )

    const button = document.querySelectorAll("button")[1]
    act(() => button.click())

    expect(document.body.textContent).toContain("Jon")
  })

  it("renders a bootstrap container", () => {
    render(
      <AppointmentsDayView 
        appointments={twoAppointments}
      />
    )
    const divel = document.querySelector("div#appointmentsDayView")
    let container = divel?.getAttribute("class")
    expect(container).toEqual("container")
  })
});
