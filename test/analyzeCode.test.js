import { analyzeCode } from "../src/analyzeCode";

describe("analyzeCode", () => {
  it("should analyze JSX code", () => {
    const code = "<div>Hello World</div>";
    const analysis = analyzeCode(code);
    expect(analysis).toBeTruthy(); // Replace with more specific assertions
  });
});
