const functions = {
    add: (a, b) => a+b,
    checkValue: x => x,
    throwError: () => {
        throw new Error('youre not allowed');
    },
    addUser: () => {
        const user = {
            fn: "first name",
            ln: "last name",
            
        }
        return user;
    }
}

module.exports = functions;
