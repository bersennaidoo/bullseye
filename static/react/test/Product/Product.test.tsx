import React, { act } from "react";
import ReactDOM from "react-dom/client";
import Product from "../../components/Product";
import { Products } from "../../components/Product"

describe("Product", () => {
  it("renders the product name", async () => {

    const product: Products = { name: "Syringe" };
    const component = <Product product={product} />;
    const container = document.createElement("div");
    document.body.appendChild(container);

    await act(() => ReactDOM.createRoot(container).render(component));

    expect(document.body.textContent).toContain("Syringe");
  });
});
