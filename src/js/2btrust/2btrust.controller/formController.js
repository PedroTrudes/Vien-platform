let moduleAccount = await import ("../2btrust.model/Account");


class formCotroller{
    constructor(){

    }
}
let account = new Account();
let accountJson = account.toJson();


console.log(accountJson);