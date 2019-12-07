function program(input) {
    if (!Array.isArray(input)) {
        return null;
    }
    const workingCopy = [...input];
    let counter = 0;
    while (counter < workingCopy.length) {
        const intcode = workingCopy[counter];
        if(intcode == 99) {
            break;
        }
        const a = workingCopy[workingCopy[counter + 1]];
        const b = workingCopy[workingCopy[counter + 2]];
        let result;
        switch (intcode) {
            case 1:
                result = a + b;
                break;
            case 2:
                result = a * b;
                break;
            default:
                throw new Error(`unknown opcode ${intcode} at ${counter}`);
        }
        workingCopy[workingCopy[counter + 3]] = result;
        counter += 4;
    }
    return workingCopy;
}

module.exports = {
    program
};