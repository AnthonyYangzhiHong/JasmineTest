describe('Address Book',function(){
		it('Should be able to add a content',function(){
			var addressBook=new AddressBook(),
			    thisContact=new Contact();
			
			addressBook.addContact(thisContact);
			
			expect(addressBook.getContact(0)).toBe(thisContact);
		});
		
		it('should be able to delete a contact',function(){
			var addressBook=new AddressBook(),
				thisContact=new Contact();
				
			addressBook.addContact(thisContact);
			addressBook.deleteContact(0);
			
			expect(addressBook.getContact(0)).not.toBeDefined();
		});
});