export class Document {
    constructor(){
        this.name = "name";
        this.file = "file";
    }
    toJson(){
        return JSON.stringify(this);
    }
}