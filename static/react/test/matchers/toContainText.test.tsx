import { toContainText } from "./toContainText";

const stripTerminalColor = (text: string) => {
  return text.replace(/\x1B\[\d+m/g, "");
};

describe("toContainText matcher", () => {
  it("should return pass is true when text is found in the given DOM element", () => {
    const domElement = {
      textContent: "text to find",
    };

    const result = toContainText(domElement, "text to find");

    expect(result.pass).toBe(true);
  });

  it("should return pass is false when the text is not found in the given DOM element", () => {
    const domElement = { textContent: "" };

    const result = toContainText(domElement, "text to find");

    expect(result.pass).toBe(false);
  });

  it("should return a message that contains the source line if no match", () => {
    const domElement = { textContent: "" };

    const result = toContainText(domElement, "text to find");

    expect(stripTerminalColor(result.message())).toContain(
      `expect(element).toContainText("text to find")`
    );
  });

  it("returns a message that contains the source line if negated match", () => {
    const domElement = {
      textContent: "text to find",
    };
    const result = toContainText(domElement, "text to find");
    expect(stripTerminalColor(result.message())).toContain(
      `expect(element).not.toContainText("text to find")`
    );
  });

    
});
