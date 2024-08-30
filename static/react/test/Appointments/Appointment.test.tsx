import React, { act } from "react";
import ReactDOM from "react-dom/client";
import Appointment from "../../components/Appointment"
import { ICustomer, IAppointmentsList } from "../../data/types";

describe("Appointment", () => {
    let container: HTMLDivElement;
    const today = new Date();
    const appointment: IAppointmentsList = { startsAt: today.setHours(12, 0),  firstName: "Alice", lastName: "Bree", phoneNumber: "999-999-9999" }

    beforeEach(() => {
        container = document.createElement("div")
        document.body.replaceChildren(container)
    })

    const render = (component: React.ReactNode) =>
      act(() =>
        ReactDOM.createRoot(container).render(component)
      )

    it("renders the customer first name", () => {
        const customer  = { firstName: "Jon" }
        render(<Appointment {...customer} />)

        expect(document.body.textContent).toContain("Jon")
    })

    it("renders a div classified as container", () => {
      render(<Appointment {...appointment} />)
      const divel = document.querySelector("div#appointment")
      const container = divel?.getAttribute("class")

      expect(divel).not.toBeNull()
      expect(container).toEqual("container")
    })

    it("renders a table", () => {
      render(<Appointment {...appointment} />)
      const tablenode = document.querySelector("table")
      let table = tablenode?.getAttribute("class")

      expect(tablenode).not.toBeNull()
      expect(table).toContain("table")
    })

    it("renders a table head", () => {
      render(<Appointment {...appointment} />)
      const tablehead = document.querySelector("thead")
      const trow = document.querySelector("tr")

      expect(tablehead).not.toBeNull()
      expect(trow).not.toBeNull()
    })

    it("renders table header data", () => {
      render(<Appointment {...appointment} />)
      const tdList = document.querySelectorAll("tr > th")

      expect(tdList).toHaveLength(3)
    })

    it("renders table data", () => {
      render(<Appointment {...appointment} />)

      const tabledataList = document.querySelectorAll("tr > td")

      expect(tabledataList).toHaveLength(3)
    })
})