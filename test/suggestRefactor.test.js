// test/suggestRefactor.test.js

import { suggestRefactor } from "../src/suggestRefactor";

describe("Refactoring Suggestions", () => {
  test("it should identify long functions", () => {
    const longFunctionCode = `
      function TooLongFunction() {
        let i = 0;
        // ... more than 50 lines of code ...
        return i;
      }
    `;

    expect(suggestRefactor(longFunctionCode)).toContain(
      "Function 'TooLongFunction' is too long",
    );
  });

  test("it should detect deep prop drilling", () => {
    const deepPropDrillingCode = `
      const Component = () => (
        <AnotherComponent prop1={value1} prop2={value2}>
          <ChildComponent prop3={value3} />
        </AnotherComponent>
      );
    `;

    expect(suggestRefactor(deepPropDrillingCode)).toContain(
      "Deep prop drilling detected",
    );
  });

  // ... additional tests for other scenarios ...
});
