import React, { act } from "react";
import ReactDOM from "react-dom/client";
import Appointment from "../../components/Appointment"
import { ICustomer } from "../../data/types";

describe("Appointment", () => {
    let container: HTMLDivElement;

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
})