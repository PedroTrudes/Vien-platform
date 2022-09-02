export class Address {

    constructor(){
        this.address = "address";
        this.complement = "complement";
        this.city = "city";
        this.state_id = "state_id";
        this.zipcode = "zipcode";
        this.type = "type";
    }
    toJson(){
        return JSON.stringify(this);
    }
    
}