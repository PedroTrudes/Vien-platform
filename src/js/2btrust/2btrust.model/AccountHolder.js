class AccountHolder {
    account_id = 0;
    is_primary = true;
    address =[];
    documents;
    employmentStatus;
      constructor(firstname, middle_name, lastname,
          date_of_birth,social_security_tax_id,
          country_citizenship,country_residency,country_tax_residency){
            
            this.firstname = firstname;
            this.middle_name = middle_name;
            this.lastname = lastname;
            this.date_of_birth = date_of_birth;
            this.social_security_tax_id = social_security_tax_id;
            this.country_citizenship = country_citizenship;
            this.country_residency = country_residency;
            this.country_tax_residency = country_tax_residency;
              
            this.documents = new AccountDocument();
            this.employmentStatus = new AccountEmployment();
          }
          
  
          toJson() {
              return JSON.stringify(this);
          }
  
          addAccountAddrress(address){
              this.address.push(address);
          }
      }