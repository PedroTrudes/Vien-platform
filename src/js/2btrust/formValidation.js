let account = new Account();    
$(".frmTypeAccount .next-btn").on('click', function(){
    account.type = $("input[name='typeAccount']:checked").val();
    console.log(account);
});

let holder = new AccountHolder();
$(".frmAccountHolder .next-btn").on('click', function(){
    holder.firstname = $("#firstName").val();
    holder.middle_name = $("#middleName").val();
    holder.lastname = $("#lastName").val();
    holder.date_of_birth = $("#date_of_birth").val();
    console.log(holder);
});

/*

    holder.country_citizenship = $("#country_citizenship").val();
    holder.country_residency = $("#country_residency").val();
    holder.social_security_tax_id = $("#social_security_tax_id").val();
   
*/

$(".frmIdentification .next-btn").on('click', function(){
    holder.country_citizenship = $("#country_citizenship").val();
    
});

$(".frmAddress .next-btn").on('click', function(){
    let address = new Address();
    address.country_citizenship = $("#country_citizenship").val();
    
    holder.addAccountAddrress(address);

    if($("input[name='typeAccount']").is('checked')){
        let address = new Address();

        holder.addAccountAddrress(address);
    }
});

$('#myModal .btnSim').on('click', function(){
    account.addAccountHolder(holder);
    holder = new AccountHolder();
    //mandar para  a primeira step-1
});

$('#myModal .btnNao').on('click', function(){
    account.addAccountHolder(holder);
    //Avança para a proxima step
    //mandar para  a primeira step-1
});

/*
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


*/