// Implementation

// I'm averse to the =new= keyword, so the actual export will be a wrapper for that:


// [[file:../literate/XStateTestInterpreter.org::*Implementation][Implementation:1]]
export const TestInterpreter = (...args) => {
    return new _TestInterpreter(...args);
}
// Implementation:1 ends here



// Now the internal implementation as a =class=.


// [[file:../literate/XStateTestInterpreter.org::*Implementation][Implementation:2]]
class _TestInterpreter {
// Implementation:2 ends here



// Using XState, referencing =machine.state= and =machine.state.context= is so common that I like to use shorthand, =interpreter.S= and =interpreter.C= respectively.

// When the machine has just been instantiated, =machine.initialState= is actually the only state.


// [[file:../literate/XStateTestInterpreter.org::*Implementation][Implementation:3]]
    constructor(machine) {
        this.machine = machine;
        this.state = machine.initialState;
        this.S = this.state;
        this.C = this.state.context;
    }
// Implementation:3 ends here



// To affect a change, the user will =send= an =event=.

// When a transition occurs, we also execute any actions described as side effects. See [[https://xstate.js.org/docs/guides/interpretation.html#custom-interpreters][XState Custom Interpreters]] for more info.


// [[file:../literate/XStateTestInterpreter.org::*Implementation][Implementation:4]]
    send (event) {
        this.state = this.machine.transition(this.state, event);
        this.S = this.state;
        this.C = this.state.context;

        // Get the side-effect actions to execute
        this.state.actions.forEach(action => {
            // If the action is executable, execute it
            action.exec && action.exec();
        });
    }
// Implementation:4 ends here



// Wrap up the class definition:


// [[file:../literate/XStateTestInterpreter.org::*Implementation][Implementation:5]]
}
// Implementation:5 ends here
