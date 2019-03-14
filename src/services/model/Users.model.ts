export class UsersModel{
    public ID:string;
    public Firstname:string;
    public Middlename:string;
    public Lastname:string;
    public EmailAddress:string;
    public ContactNumber:string;
    public Password:string;
    public Repassword:string;
    public Address:string;
    constructor(){
        this.ID="";
        this.Firstname="";
        this.Middlename="";
        this.Lastname="";
        this.EmailAddress="";
        this.ContactNumber="";
        this.Password="";
        this.Repassword="";
    }
    set(id, firstname, middlename, lastname, emailAddress, contactNumber, password, repassword){
        this.ID=id;
        this.Firstname=firstname;
        this.Middlename=middlename;
        this.Lastname=lastname;
        this.EmailAddress=emailAddress;
        this.ContactNumber=contactNumber;
        this.Password=password;
        this.Repassword=repassword;
    }
    jsonTo(object){
        this.ID=object.ID;
        this.Firstname=object.Firstname;
        this.Middlename=object.MiddleName;
        this.Lastname=object.Lastname;
        this.EmailAddress=object.EmailAddress;
        this.ContactNumber=object.ContactNumber;
    }
}
