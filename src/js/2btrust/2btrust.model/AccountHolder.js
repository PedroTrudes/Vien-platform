export class AccountHolder {
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