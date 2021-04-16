// Implementation

// A Jest Custom Matcher, almost straight from the docs, https://jestjs.io/docs/expect#custom-matchers-api.

// This uses XState's built in =state.matches=. See https://xstate.js.org/api/classes/state.html#matches.


// [[file:../literate/XStateJestMatchers.org::*Implementation][Implementation:1]]
export function toMatchState(received, expected) {
    const options = {
        comment: 'XState.State.matches',
        isNot: this.isNot,
        promise: this.promise,
    };
    const actual = received.value;

    const pass = received.matches(expected);

    const message = () =>
        this.utils.matcherHint('toMatchState', "state", "matcher", options) +
        '\n\n' +
        `Expected: ${this.utils.printExpected(expected)}\n` +
        `Received: ${this.utils.printReceived(actual)}`

    return { actual, pass, message };
}
// Implementation:1 ends here
