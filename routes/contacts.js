const routes = require('express').Router();
const contactsController = require('../controllers/contacts');

//gets all the contacts
routes.get('/', contactsController.getAllContacts);

//gets a single contact by id
routes.get('/:id', contactsController.getSingleContact);

//Add a new contact
routes.post('/', contactsController.createNewContact);

//update a contact
routes.put('/:id', contactsController.updateContact);

//delete a contact
routes.delete('/:id', contactsController.deleteContact);

module.exports = routes;