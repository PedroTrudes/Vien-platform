class Company {
    name;
    person_title;
    state;
    ein;

    constructor(){
    }

    toJson() {
        return JSON.stringify(this);
    }
}