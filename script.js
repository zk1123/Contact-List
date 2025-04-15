class Contact {
    constructor(name, phone) {
      this.name = name;
      this.phone = phone;
    }
  }
  
  class ContactManager {
    constructor(maxSize = 100) {
      this.contacts = [];
      this.maxSize = maxSize;
    }
  
    addContact(name, phone) {
      if (this.contacts.length >= this.maxSize) {
        return "Contact list is full!";
      }
      const contact = new Contact(name, phone);
      this.contacts.push(contact);
      return "Contact added!";
    }
  
    viewContacts() {
      if (this.contacts.length === 0) {
        return "No contacts available.";
      }
      return this.contacts.map((c, i) => `${i + 1}. ${c.name} - ${c.phone}`).join("<br>");
    }
  
    searchContact(name) {
      const found = this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
      return found ? `Found: ${found.name} - ${found.phone}` : "Contact not found.";
    }
  }
  
  const manager = new ContactManager();
  const outputDiv = document.getElementById("output");
  
  function addContact() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    if (!name || !phone) {
      outputDiv.innerHTML = "Please enter both name and phone number.";
      return;
    }
    const result = manager.addContact(name, phone);
    outputDiv.innerHTML = result;
  }
  
  function viewContacts() {
    outputDiv.innerHTML = manager.viewContacts();
  }
  
  function searchContact() {
    const name = document.getElementById("search").value.trim();
    if (!name) {
      outputDiv.innerHTML = "Enter a name to search.";
      return;
    }
    const result = manager.searchContact(name);
    outputDiv.innerHTML = result;

  function deleteAllContacts() {
        manager.contacts = [];
        outputDiv.innerHTML = "All contacts have been deleted.";
      }
  }