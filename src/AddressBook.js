function AddressBook(){
	this.ContactList=[];
	AddressBook.prototype.addContact=function(Contact){
		this.ContactList.push(Contact);
	}
	AddressBook.prototype.getContact=function(index){
		return this.ContactList[index];
	}
	
	AddressBook.prototype.deleteContact=function(index){
		this.ContactList.splice(index,1);
	}
}