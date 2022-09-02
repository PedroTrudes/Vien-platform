
class Account {

  holders = [];
  acknowledgment_signed ;
    constructor(type){
        
            this.user_id;
            this.type = type ;
            this.status ="";
            this.reinvest_yield="" ;
            this.bank_name = "a";
            this.bank_aba_routing_number = "a";
            this.bank_account_number = "bank_account_number";
            this.accountHolder = "accountHolder";
        }
        //transformando dados em json
        toJson() {
            return JSON.stringify(this);
        }

        //inserindo dados no array
        addAccountHolder(holders){
            this.holders.push(holders);
        }
}

$(".classeDoFormulario")
.validate({
    rules:{
    
        user_id: {
        require: true,
    },
    acknowledgment_signed: {
        require: true,
    },
    type:{
        require: true,
    },
    status: {
        require: true,
    },
    reinvest_yield: {
        require: true,
    },
    bank_name: {
        require: true,
    },
    bank_aba_routing_number: {
        require: true,
    },
    bank_account_number: {
        require: true,
    },
    accountHolder: {
        require: true,
    }
}

}),
({
    submitHandler: form => {
        
        account.user_id = $("#nomecampo").val();
        account.acknowledgment_signed =  $("#nomecampo").val();
        account.type =  $("#nomecampo").val();
        account.status =  $("#nomecampo").val();
        account.reinvest_yield =  $("#nomecampo").val();
        account.bank_name =  $("#nomecampo").val();
        account.bank_aba_routing_number =  $("#nomecampo").val();
        account.bank_account_number =  $("#nomecampo").val();
        
        let jsonAccount = account.toJson();
        
        console.log(jsonAccount);
    }
})


class AccountHolder {
  account_id = 0;
  is_primary = true;
  address =[];
    constructor(fristname, middle_name, lastname,
        date_of_birth,social_security_tax_id,
        country_citizenship,country_residency,country_tax_residency){
          
            this.fristname = fristname;
            this.middle_name = middle_name;
            this.lastname = lastname;
            this.date_of_birth = date_of_birth;
            this.social_security_tax_id = social_security_tax_id;
            this.country_citizenship = country_citizenship;
            this.country_residency = country_residency;
            this.country_tax_residency = country_tax_residency;
        }

        toJson() {
            return JSON.stringify(this);
        }

        addAccountAddrress(address){
            this.address.push(address);
        }
    }

$(".frmAccountHolder")
.validate({
    rules:{
        account_id: {
            require: true,
        },
        fristname: {
            require: true,
        },
        middle_name:{
            require: true,
        },
        lastname: {
            require: true,
        },
        date_of_birth: {
            require: true,
        },
        social_security_tax_id: {
            require: true,
        },
        country_citizenship: {
            require: true,
        },
        country_residency: {
            require: true,
        },
        country_tax_residency: {
            require: true,
        },
        is_primary: {
            require: true,
        }

    }
}),
({
    submitHandler: form => {
       
       
        accountHolder.account_id =  $("#namecampo").val();
        accountHolder.fristname =  $("#firstName").val();
        accountHolder.middle_name =  $("#middleName").val();
        accountHolder.lastname =  $("#lastName").val();
        accountHolder.date_of_birth =  $("#dateOfBirth").val();
        accountHolder.social_security_tax_id =  $("#socialSecurityTaxId").val();
        accountHolder.country_citizenship =  $("#countryCitizenship").val();
        accountHolder.country_residency =  $("#countryResidency").val();
        accountHolder.country_tax_residency =  $("#countryTaxResidency").val();
        accountHolder.is_primary =  $("#nomecampo").val();
        
    }
})


class Address {

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
$(".frmAddress")
.validate({
    rules:{
        address: {
            require: false,
        },
        complement: {
            require: false,
        },
        city:{
            require: false,
        },
        state_id: {
            require: false,
        },
        zipcode: {
            require: false,
        },
        type: {
            require: false,
        }

    }
}),
({
    submitHandler: form => {
        let address = new Address();

        address.address =  $("#address").val();
        address.complement =  $("#complement").val();
        address.city =  $("#city").val();
        address.state_id =  $("#stateId").val();
        address.zipcode =  $("#zipcode").val();
        address.type =  $("#nomecampo").val();
        
        let jsonAddress = address.toJson();

        
        console.log(jsonAddress);
    }
})

class Document {
    constructor(){
        this.name = "name";
        this.file = "file";
    }
    toJson(){
        return JSON.stringify(this);
    }
}

$(".classeDoFormulario")
.validate({
    rules:{
        name: {
            require: true,
        },
        file: {
            require: true,
        }
    }
}),
({
    submitHandler: form => {
        let documentUpload = new Document();
        documentUpload.name = $("#").val();
        documentUpload.file = $("#").val();
        
        let jsonDocumentUpload = documentUpload.toJson();
        
        //console.log(jsonDocumentUpload);
    }
})

let account = new Account();
let jsonAccount = account.toJson();
console.log(account);

let accountHolder = new AccountHolder();
account.addAccountHolder(accountHolder);
  
let jsonAccountHolder = accountHolder.toJson();
console.log(accountHolder);

let address = new Address();
accountHolder.addAccountAddrress(address);
let jsonAddress = accountHolder.toJson();
console.log(address);

let documentUpload = new Document();
console.log(documentUpload);
let jsonDocument = documentUpload.toJson();






class NewAccount {
    holders = [];
    _inputType ;
    constructor(){
        this._inputType;
    }

    adiciona(event){
        event.preventDefault();
        this._criaAccount();
        this.addAccountHolder();
        console.log(this._criaAccount(event));

        
    }

    _criaAccount(){
        return new Account(this._inputType = document.querySelector("input[name='typeAccount']:checked").value)
    }
   
    toJson() {
        return JSON.stringify(this);
    }

    addAccountHolder(holders){
        this.holders.push(holders);
    }
}

class NewAccountHolder{
    _inputName
    _inputMidleName
    _inputLastName
    _inputDateOfBirth
    _inputCountryCitizenship
    _inputCountryResidency
    _inputSocialSecurityTaxId
    _inputCountryTaxResidency
    _inputTaxIdentificationNumber
    addres = []
    constructor(){
        this._inputName = document.querySelector('#firstName');
        this._inputMidleName = document.querySelector('#middleName');
        this._inputLastName = document.querySelector('#lastName');
        this._inputDateOfBirth = document.querySelector('#dateOfBirth');
        this._inputCountryCitizenship = document.querySelector('#countryCitizenship');
        this._inputCountryResidency = document.querySelector('#countryResidency');
        this._inputSocialSecurityTaxId = document.querySelector('#socialSecurityTaxId');
        this._inputCountryTaxResidency = document.querySelector('#countryTaxResidency');
        this._inputTaxIdentificationNumber = document.querySelector('#taxIdentificationNumber');
    
    }
    adiciona(event){
        event.preventDefault();
        this._criaAccountHolder().toJson();
        console.log(this._criaAccountHolder());
    }

    _criaAccountHolder(){
        return new AccountHolder(this._inputName.value, 
            this._inputMidleName.value,
            this._inputLastName.value,
            this._inputDateOfBirth.value,
            this._inputCountryCitizenship.value,
            this._inputCountryResidency.value,
            this._inputSocialSecurityTaxId.value,
            this._inputCountryTaxResidency.value,
            this._inputTaxIdentificationNumber.value);
    }

    _limparCampo(){
        this._inputName.value = "";
        this._inputMidleName.value = "";
        this._inputLastName.value = "";
        this._inputDateOfBirth.value = "";
        this._inputCountryCitizenship.value = "";
        this._inputCountryResidency.value = "";
        this._inputSocialSecurityTaxId.value = "";
        this._inputCountryTaxResidency.value = "";
        this._inputTaxIdentificationNumber.value = "";

    }

    toJson() {
        return JSON.stringify(this);
    }

    addAccountHolder(address){
        this.addres.push(address);
    }
}

let newAccount = new NewAccount();
let newAccountHolder = new NewAccountHolder();
let formularioAccountHolder = document.querySelector('.frmAccountHolder');


formularioAccountHolder.addEventListener('submit', (event) =>{

    newAccount.adiciona(event);
    newAccountHolder.adiciona(event);
    newAccountHolder._limparCampo(event);
    
})