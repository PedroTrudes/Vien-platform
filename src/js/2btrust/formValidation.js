
class Account {

  holders = [];
  acknowledgment_signed ;
    constructor(){
        
            this.user_id ="";
            this.type ="" ;
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

let account = new Account();
//let holder = new Account();
let jsonAccount = account.toJson();

console.log(account);






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
    constructor(fristname){
          
            this.fristname;
            this.middle_name = "middle_name";
            this.lastname = "lastname";
            this.date_of_birth = "date_of_birth";
            this.social_security_tax_id = "social_security_tax_id";
            this.country_citizenship = "country_citizenship";
            this.country_residency = "country_residency";
            this.country_tax_residency = "country_tax_residency";
        }

        toJson() {
            return JSON.stringify(this);
        }

        addAccountAddrress(address){
            this.address.push(address);
        }
    }

    
    // teste de inserção de algum dado
    let accountHolder = new AccountHolder();
    accountHolder.fristname = "Pedro";
    accountHolder.middle_name = "trudes";
    //let addressHolder = new AccountHolder();

    account.addAccountHolder(accountHolder);
    
    let jsonAccountHolder = accountHolder.toJson();
    console.log(accountHolder);
   

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
let address = new Address();
accountHolder.addAccountAddrress(address);
let jsonAddress = accountHolder.toJson();

console.log(address);

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

let documentUpload = new Document();
console.log(documentUpload);
let jsonDocument = documentUpload.toJson();

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
