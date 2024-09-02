import React, { act } from "react";
import ReactDOM from "react-dom/client";
import { initializeReactContainer, render, form, click, element, elements, textOf, typesOf } from "./helpers/reactTestExtensions";
import CustomerForm from "../components/CustomerForm"
import { IGigg, IGiggsList, ICustomer } from "../data/types";
import "@testing-library/jest-dom/extend-expect"

//ch04

describe("CustomerForm", () => {

    beforeEach(() => {
        initializeReactContainer()
    })

    it("should render a form", () => {
        render(<CustomerForm />)

        expect(form("")).not.toBeNull()
    })

    it("should render first name field as a text box", () => {
        render(<CustomerForm />)

        const obj = form("") as HTMLFormElement 
        const field = obj.elements[0] as HTMLFormElement

        expect(field).not.toBeNull()

        expect(field.tagName).toEqual("INPUT")

        expect(field.type).toEqual("text")
    })
})