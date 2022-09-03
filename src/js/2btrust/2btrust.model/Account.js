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