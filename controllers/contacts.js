const connect = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res) => {
    const results =  await connect.getCollection("contacts").find();
    results.toArray().then((documents) => {
        res.status(200).json(documents);
        console.log('Returned All Contacts');
      });
}

const getSingleContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id)
    const results = connect.getCollection("contacts").find({_id: contactId});
    results.toArray().then((documents) => {
      res.status(200).json(documents[0]);
      console.log('Returned One Contact');
    });

}

const createNewContact = async (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    }
    const results = await connect.getCollection("contacts").insertOne(contact);
    if (results.acknowledged) {
        res.status(201).json(results);
        console.log('New Contact Added');
        console.log(`New Contact Id: ${results.insertedId}`);
      } else {
        res.status(500).json(results.error || 'Error occurred.');
      }
}

const updateContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id)
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    }
    const results = await connect.getCollection("contacts").replaceOne({ _id: contactId }, contact);
    if (results.modifiedCount > 0) {
        res.status(204).send();
        console.log('Contact Was Updated');
      } else {
        res.status(500).json(results.error || 'Error occurred.');
      }
}

const deleteContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id)
    const results = await connect.getCollection("contacts").deleteOne({ _id: contactId }, true);
    if (results.deletedCount > 0) {
        res.status(204).send();
        console.log('Contact Deleted');
      } else {
        res.status(500).json(results.error || 'Error occurred.');
      }
}

  module.exports = {
      getAllContacts,
      getSingleContact,
      createNewContact,
      updateContact,
      deleteContact
  }