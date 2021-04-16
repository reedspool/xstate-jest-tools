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
