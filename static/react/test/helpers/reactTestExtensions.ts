import React, { ReactNode, act } from "react"
import ReactDOM from "react-dom/client"

export let container: HTMLDivElement

export const initializeReactContainer = () => {

    container = document.createElement("div")

    document.body.replaceChildren(container)
}

export const render = (component: React.ReactNode) => {
    act(() => {
        ReactDOM.createRoot(container).render(component)
    })
}

export const click = (element: HTMLElement) => {
    act(() => element.click())
}

export const element = (selector: string) =>
  document.querySelector(selector);

export const elements = (selector: string) =>
  Array.from(document.querySelectorAll(selector));

export const typesOf = (elements: Element[]) =>
  elements.map((element: Element) => element!.nodeName.toLowerCase());

export const textOf = (elements: Element[]) =>
  elements.map((element: Element) => element.textContent);

export const form = (id: string) => element("form") 

