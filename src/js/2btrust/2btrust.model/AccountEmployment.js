class AccountEmployment{
    constructor(){
        this.name;
        this.phone;
        this.annual_income;
    }
    toJson(){
        return JSON.stringify(this);
    }
}