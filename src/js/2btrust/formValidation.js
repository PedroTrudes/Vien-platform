$(".fileupload :file").on("change", function () {
    let input = $(this).parents(".input-group").find(":text");
    if (input.length) {
        input.val($(this).val());
    }
});

let account = new Account();    
$("input[name='typeAccount']").on("change", function(){
    const type = $("input[name='typeAccount']:checked").val();
    if(type === "business"){
        //mostrar campos adicionais 
        account.company = new Company();
        $("#frmAccountBusiness").show();
    }else {
        $("#frmAccountBusiness").hide();
        account.company = null;
        //ocultar campos
    }
    console.log(account);
});

$(".frmTypeAccount .next-btn").on('click', function(){
    const type = $("input[name='typeAccount']:checked").val();
    account.type = type;
    if(type === "business"){
        account.company.name = $("#name").val();
        account.company.person_title = $("#person_title").val();
        account.company.state = $("#state").val();
        account.company.ein = $("#ein").val();

    }
    console.log(account);
});

let holder = new AccountHolder();
$(".frmAccountHolder .next-btn").on('click', function(){
    if($(".frmAccountHolder").valid()){
        holder.firstname = $("#firstName").val();
        holder.middle_name = $("#middleName").val();
        holder.lastname = $("#lastName").val();
        holder.date_of_birth = $("#date_of_birth").val();
        holder.country_citizenship = $("#country_citizenship").val();
        holder.country_residency = $("#country_residency").val();
        holder.social_security_tax_id = $("#social_security_tax_id").val();
        holder.country_tax_residency = $("#country_tax_residency").val();
    
        console.log(holder);
    }
});    


$(".frmIdentification .next-btn").on('click', function(){
    const documentFile = $("#documentFile")[0];
    holder.documents.filename = documentFile.files[0];
    holder.documents.document_type_id = $("#document_type_id").val();
    
    console.log(holder.documents);
});

$(".frmEmployed .btn-secondary").on('click', function(){
    holder.employmentStatus.name = $("#employment_name").val();
    holder.employmentStatus.phone = $("#employment_phone").val();
    holder.employmentStatus.annual_income = $("#employment_annual_income").val();
    
    console.log(holder.employmentStatus);
});

$(".frmAddress .next-btn").on('click', function(){
    let address = new Address();
    address.address = $("#address").val();
    address.complement = $("#complement").val();
    address.city = $("#city").val();
    address.state_id = $("#state_id").val();
    address.zipcode = $("#zipcode").val();
    console.log(address)
    holder.addAccountAddrress(address);

    if($("input[name='differentAddress']").is(':checked')){
        let address = new Address();
        address.address = $("#addressDifferent").val();
        address.complement = $("#complementDifferent").val();
        address.city = $("#cityDifferent").val();
        address.state_id = $("#stateIdDifferent").val();
        address.zipcode = $("#zipcodeDifferent").val();
        holder.addAccountAddrress(address);
        console.log(address)
    }
});

$('.myModal .btnSim').on('click', function(){ 
    account.addAccountHolder(holder);
    holder = new AccountHolder();
    console.log(holder);
    $('.frmAccountHolder').get(0).reset();
    $('.frmAddress').get(0).reset();
    $('#smartWizardValidation').smartWizard();
    
    //addres depois do checkbox
    //mandar para  a primeira step-1
});

$('.myModal .btnNao').on('click', function(){
    account.addAccountHolder(holder);
    console.log(account.toJson());
});

$(".fmrAgreements .next-btn").on('click', function(){
    account.bank_name = $("#bank_name").val();
    account.bank_account_type = $("#bank_account_type").val();
    account.bank_aba_routing_number = $("#bank_aba_routing_number").val();
    account.bank_account_number = $("#bank_account_number").val();
    console.log(account);
   
    let listContainerHolder = $('#listHolders');
    let listContainerInvestment = $('#listInvestment');
    let listType = $('#typeAccount');
    //inserrir uma div

    let type = `<p>Type Account: <strong>${account.type}</strong></p>`;
    $(listType).html(type);

    let htmlHolder = `<div class="col-12 form-row">`;
    for(let i = 0; i < account.holders.length; i++){
        htmlHolder += `<div class="col-6 border-bottom mt-2">`;
        let holder = account.holders[i];
        htmlHolder += `<p>${holder.firstname} ${holder.middle_name} ${holder.lastname}</p>`  ;
        htmlHolder += `</div>`;
        htmlHolder += `<div class="col-6 border-bottom mt-2">`;
        let addresList = holder.address
        for(let a = 0; a < addresList.length; a++){
            let address = addresList[a];
            htmlHolder +=`<p>${address.address} - ${address.complement}</p>`;
            htmlHolder += `<p>${address.city} / ${address.zipcode}</p>`;
        }
        htmlHolder += `</div>`;
    }
    htmlHolder += `</div>`;

    $(listContainerHolder).html(htmlHolder);
    
    let htmlInvestment = `<div class="col-6">`;
    htmlInvestment += `<p>Investment Plan</p>`;
    htmlInvestment += `<p>Initial Amount</p>`;
    htmlInvestment += `<p>Dividend Reinvestment</p>`;
    htmlInvestment += `<p>Payment Method</p>`;
    htmlInvestment += `</div>`;

    htmlInvestment += `<div class="col-6">`;
    htmlInvestment += `<p>Start Portfolio</p>`;
    htmlInvestment += `<p>$500.00</p>`;
    htmlInvestment += `<p><strong>ON</strong></p>`;
    htmlInvestment += `<p>${account.bank_name} - (${account.bank_account_type})</p>`;
    htmlInvestment += `</div>`;

    $(listContainerInvestment).html(htmlInvestment);
});





/*

{"holders":[
    {"account_id":0,
    "is_primary":true,
    "address":[
        {"address":"640 Estrada São Marcos",
        "complement":"",
        "city":"Embu das Artes",
        "state_id":"6",
        "zipcode":"06.814-010"}],
    "documents":{"document_type_id":"1"},
    "employmentStatus":{"name":"",
    "phone":"",
    "annual_income":""},
    "firstname":"Pedro",
    "middle_name":
    "Joaquim Trudes",
    "lastname":"Martins",
    "date_of_birth":"",
    "social_security_tax_id":"",
    "country_citizenship":"1",
    "country_residency":"1",
    "country_tax_residency":"1"}],
    "status":0,
    "reinvest_yield":false}

    $(document).ready(function(){
        carregar_json('holders');
        function carregar_json(id){
            var html = '';
             var accountjson = account.toJson();
            $.getJSON("js/2btrust/2btrust.model/Account.js", function(data){
                html += '<span>Account: ' + id + ' teste';
                console.log(data);
            
            $('#' + id).html(html);
            }).fail(function(jqxhr, textStatus, error){
                var err = textStatus + ", " + error;
                console.log("request faill: " + err);
            });
        });
  */  


        /*
    });
});

*/

/*
$(function(){
    
$(".frmAccountHolder")
.validate({
    rules:{
        fristname: {
            required: true,
        },
        middle_name:{
            required: true,
        },
        lastname: {
            required: true,
        },
        date_of_birth: {
            required: true,
        },
        social_security_tax_id: {
            required: true,
        },
        country_citizenship: {
            required: true,
        },
        country_residency: {
            required: true,
        },
        country_tax_residency: {
            required: true,
        },
    }
});
});


    */


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