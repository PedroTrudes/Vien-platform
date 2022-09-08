class AccountDocument {
    constructor(){
        this.document_type_id;
        this.account_holder_id;
        this.filename;
    }
    toJson(){
        return JSON.stringify(this);
    }
}