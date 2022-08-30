
class Account  {
  
    constructor(user_id,
        acknowledgment_signed, 
        type, 
        status, 
        reinvest_yield, 
        bank_name, 
        bank_aba_routing_number,
        bank_account_number,
        accountHolder ){
            this.user_id = user_id;
            this.acknowledgment_signed = acknowledgment_signed;
            this.type = type;
            this.status = status;
            this.reinvest_yield = reinvest_yield;
            this.bank_name = bank_name;
            this.bank_aba_routing_number = bank_aba_routing_number;
            this.bank_account_number = bank_account_number;
            this.accountHolder = accountHolder;
        }
        toJson() {
            return JSON.stringify(this);
        }

      
}
let account = new Account(user_id, acknowledgment_signed,
    type, status,
    reinvest_yield, bank_name,
    bank_aba_routing_number,bank_account_number,
    accountHolder);
    
let jsonAccount = account.toJson();

$(".classeDoFormulario")
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
        let account = new Account();
        account.user_id = document.getElementById("#");
        account.acknowledgment_signed = document.getElementById("#");
        account.type = document.getElementById("#");
        account.status = document.getElementById("#");
        account.reinvest_yield = document.getElementById("#");
        account.bank_name = document.getElementById("#");
        account.bank_aba_routing_number = document.getElementById("#");
        account.bank_account_number = document.getElementById("#")
        
        let jsonAccount = account.toJson();
        
        console.log(jsonAccount);
    }
})


class AccountHolder{
    constructor(account_id, fristname, middle_name,lastname, date_of_birth,
        social_security_tax_id, country_citizenship,country_residency,country_tax_residency,
        is_primary ){
            this.account_id = account_id;
            this.fristname = fristname;
            this.middle_name = middle_name;
            this.lastname = lastname;
            this.date_of_birth = date_of_birth;
            this.social_security_tax_id = social_security_tax_id;
            this.country_citizenship = country_citizenship;
            this.country_residency = country_residency;
            this.country_tax_residency = country_tax_residency;
            this.is_primary = is_primary;
        }

        toJson() {
            return JSON.stringify(this);
        }

}

let accountHolder = new AccountHolder(account_id, fristname, middle_name,lastname, date_of_birth,
    social_security_tax_id, country_citizenship,country_residency,country_tax_residency,
    is_primary);
let jsonAccountHolder = accountHolder.toJson();

$(".classeDoFormulario")
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
        let account = new Account();
        accountHolder.account_id = document.getElementById("#");
        accountHolder.fristname = document.getElementById("#");
        accountHolder.middle_name = document.getElementById("#");
        accountHolder.lastname = document.getElementById("#");
        accountHolder.date_of_birth = document.getElementById("#");
        accountHolder.social_security_tax_id = document.getElementById("#");
        accountHolder.country_citizenship = document.getElementById("#");
        accountHolder.country_residency = document.getElementById("#");
        accountHolder.country_tax_residency = document.getElementById("#");
        accountHolder.is_primary = document.getElementById("#");
        
        let jsonAccountHolder = accountHolder.toJson();
        
        console.log(jsonAccountHolder);
    }
})