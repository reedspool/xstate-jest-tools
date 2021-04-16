// Preamble


// [[file:../literate/IndexTests.org::*Preamble][Preamble:1]]
import { toMatchState } from "../src/xstate-jest-matchers";
import { TestInterpreter } from "../src/xstate-test-interpreter";
import * as Index from "../src/index";
// Preamble:1 ends here

// Tests


// [[file:../literate/IndexTests.org::*Tests][Tests:1]]
it("Everything is defined", () => {
    expect(Index.toMatchState).toBeDefined();
    expect(Index.TestInterpreter).toBeDefined();
})

it("Exposes everything", () => {
    expect(Index.toMatchState).toBe(toMatchState);
    expect(Index.TestInterpreter).toBe(TestInterpreter);
})
// Tests:1 ends here
