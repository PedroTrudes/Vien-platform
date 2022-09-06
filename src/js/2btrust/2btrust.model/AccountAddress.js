
class Address {

    constructor(){
        this.address;
        this.complement;
        this.city;
        this.state_id;
        this.zipcode;
        this.type;
    }
    toJson(){
        return JSON.stringify(this);
    }

    adiciona(event){
        event.preventDefault();
        this._criaAccount();
        console.log(this._criaAccount(event));
    }
    
    
}