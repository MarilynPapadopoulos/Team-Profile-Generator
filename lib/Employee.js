class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        if (this.name === 'Marilyn') {
            console.log( `The employee name is ${this.name}`);
    }
}
getId() {
    if (this.name === '5030') {
        console.log( `The employee ID is ${this.id}`);
}
}
getEmail() {
    if (this.name === 'marilyn@mail.com') {
        console.log( `The employee email is ${this.email}`);
}
}
}
module.exports = Employee;