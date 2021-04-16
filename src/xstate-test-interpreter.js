// [[file:../literate/XStateTestInterpreter.org::*Implementation][Implementation:1]]
export const TestInterpreter = (machine) => {
    return new _TestInterpreter(machine);
}

function _TestInterpreter(machine) {
    this.machine = machine;
    this.S = machine.initialState;
    this.C = this.S.context;
}

_TestInterpreter.prototype.transition = function (event) {
    this.S = this.machine.transition(this.S, event);
    this.C = this.S.context;

    // Get the side-effect actions to execute
    const { actions } = this.S;

    actions.forEach(action => {
        // If the action is executable, execute it
        action.exec && action.exec();
    });
}
// Implementation:1 ends here
