class Firstname {   
    Firstname:string     
    constructor(Firstname:string) {   
       this.Firstname = Firstname  
    }   
 }   
 class Name extends Firstname {   
    surname: string  
     constructor(Firstname: string, surname: string) {  
         super(Firstname);  
         this.surname = surname;  
     }  
     display():void {  
         console.log("Firstname :" + this.Firstname);  
         console.log("Surname: " + this.surname);  
     }  
 }  
 let object = new Name(" Istiyak", "Shaikh" );  
 object.display();  