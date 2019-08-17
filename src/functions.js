const functions = {
    add: (a, b) => a+b,
    checkValue: x => x,
    addUser: () => {
        const user = {
            fn: "first name",
            ln: "last name",
            
        }
        return user;
    }
}

module.exports = functions;
