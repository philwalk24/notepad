const notes = require('express').Router();
const path = require('path');
let notesJSON = require('../../db/db.json');
const fs = require('fs');

const h = require('uniqid');
const route = require('express').Router();
// GET request for the NOTES retrieval

notes.get('api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

// POST Route for a new note
notes.post('api/notes', (req, res) => {
    console.log(req.body);
  
    const { noteTitle, noteText} = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        id: h.uniqid(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Tip added successfully 🚀`);
    } else {
      res.error('Error in adding tip');
    }
  });

  module.exports = notes;
  