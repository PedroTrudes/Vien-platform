class Account {

    holders = [];
    acknowledgment_signed ;
    bank_name;
    bank_aba_routing_number;
    bank_account_number;
    user_id;
    status = 0;
    reinvest_yield= false;
      constructor(type){
          
              this.type = type ;
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