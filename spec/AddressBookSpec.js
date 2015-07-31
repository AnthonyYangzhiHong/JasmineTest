describe('Address Book',function(){
		it('Should be able to add a content',function(){
			var addressBook=new AddressBook(),
			    thisContact=new Contact();
			
			addressBook.addContact(thisContact);
			
			expect(addressBook.getContact(0)).toBe(thisContact);
		});
});