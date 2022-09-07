class Account {

    holders = [];
    acknowledgment_signed ;
      constructor(type){
          
              this.user_id;
              this.type = type ;
              this.status = 0;
              this.reinvest_yield="" ;
              this.bank_name;
              this.bank_aba_routing_number;
              this.bank_account_number;
              //this.accountHolder = "accountHolder";
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