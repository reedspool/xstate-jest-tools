// [[file:../literate/XStateTestInterpreter.org::*Implementation][Implementation:1]]
export const TestInterpreter = (...args) => {
    return new _TestInterpreter(...args);
}
// Implementation:1 ends here

// [[file:../literate/XStateTestInterpreter.org::*Implementation][Implementation:2]]
class _TestInterpreter {
// Implementation:2 ends here

// [[file:../literate/XStateTestInterpreter.org::*Implementation][Implementation:3]]
    constructor(machine) {
        this.machine = machine;
        this.state = machine.initialState;
        this.S = this.state;
        this.C = this.state.context;
    }
// Implementation:3 ends here

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

// [[file:../literate/XStateTestInterpreter.org::*Implementation][Implementation:5]]
}
// Implementation:5 ends here
