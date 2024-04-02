class BankAccount{
     constructor(accountNumber , ownerName , balance) {
          this.accountNumber = accountNumber;
          this.ownerName = ownerName;
          this.balance = balance;
     }
     deposit(amount) {
         this.balance += amount;
     }
     withdraw(amount) {
         if(amount <= this.balance) {
            this.balance -= amount;
         }
         else {
             console.log("Insufficient funds");
         }
     }
     getBalance() {
         return this.balance;
     }
     displayAccountInfo() {
        console.log("Account Number: "+ this.accountNumber);
        console.log("Owner Name: "+ this.ownerName);
        console.log("Balnce: "+ this.balance);
     }
}


const Owner_info = new BankAccount(1004 , "Durjoy Sarker" , 100);
Owner_info.deposit(150);
Owner_info.withdraw(12);
Owner_info.displayAccountInfo();


const Ownergf_info = new BankAccount(1005 , "Abanti Rahaman" , 200);
Ownergf_info.deposit(80);
Ownergf_info.withdraw(90);
Ownergf_info.displayAccountInfo();