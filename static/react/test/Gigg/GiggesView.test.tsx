import React, { act } from "react";
import ReactDOM from "react-dom/client";
import { initializeReactContainer, render, click, element, elements, textOf, typesOf } from "../helpers/reactTestExtensions";
import GiggsView from "../../components/GiggsView";
import { IGigg, IGiggsList, ICustomer } from "../../data/types";
import "@testing-library/jest-dom/extend-expect"

describe("GiggsView", () => {
  const today = new Date();
  const twoAppointments: IGiggsList[] = [
    { startsAt: today.setHours(12, 0), stylist: "Eve", service: "Hair trim", notes: "Only willing to pay 10 dollars", firstName: "Alice", lastName: "Bree", phoneNumber: "999-999-9999" },
    { startsAt: today.setHours(13, 0), stylist: "Eve", service: "Beard trim", notes: "Only have 10 minutes to spend", firstName: "Jon", lastName: "Jonn", phoneNumber: "999-999-8888" },
  ];

  beforeEach(() => {
    initializeReactContainer()
  });

  it("renders a div with the right id", () => {
    render(<GiggsView appointments={[]} />);
    expect(element("div#appointmentsDayView")).not.toBeNull();
  });

  it("renders an ol element to display appointments", () => {
    render(<GiggsView appointments={[]} />);

    const listElement = element("ol");

    expect(listElement).not.toBeNull();
  });

  it("renders an li for each appointment", () => {
    render(<GiggsView appointments={twoAppointments} />);

    const listChildren = elements("ol > li");

    expect(listChildren).toHaveLength(2);
  });

  it("renders the time of each appointment", () => {
    render(<GiggsView appointments={twoAppointments} />);
    const listChildren = elements("li");

    expect(listChildren[0].textContent).toEqual("12:00");
  });

  it("initially shows a message saying there are no appointments today", () => {
    render(<GiggsView appointments={[]} />)

    expect(document.body.textContent).toContain(
      "There are no appointments scheduled for today"
    )
  })

  it("selects the first appointment by default", () => {
    render(
      <GiggsView appointments={twoAppointments} />
    )

    expect(document.body.textContent).toContain("Alice")
  })

  it("has a button element in each li", () => {
    render(
      <GiggsView appointments={twoAppointments} />
    )

    //const buttons = elements("li > button")
    //expect(buttons).toHaveLength(2)
    //expect((buttons[0] as HTMLButtonElement).type).toEqual("button")
    //expect(buttons[0]).not.toBeNull()

    expect(typesOf(elements("li > *"))).toEqual([
      "button",
      "button",
    ])
  })

  it("renders another appointment when clicked", () => {
    render(
      <GiggsView 
        appointments={twoAppointments}
      />
    )

    const button = elements("button")[1]
    click(button as HTMLElement)

    expect(document.body.textContent).toContain("Jon")
  })

  it("renders a bootstrap container", () => {
    render(
      <GiggsView 
        appointments={twoAppointments}
      />
    )
    const divel = element("div#appointmentsDayView")
    let container = divel?.getAttribute("class")
    expect(container).toEqual("container")
  })
});
