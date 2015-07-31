function AddressBook(){
	this.ContactList=[];
	AddressBook.prototype.addContact=function(Contact){
		this.ContactList.push(Contact);
	}
	AddressBook.prototype.getContact=function(index){
		return this.ContactList[index];
	}
	
}