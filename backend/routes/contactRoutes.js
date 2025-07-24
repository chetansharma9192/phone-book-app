const express = require("express");
const router = express.Router();
const Contact = require("../models/contact.js");

// Create Contact
router.post("/", async (req, res) => {
    try {
        console.log("🔵 Incoming contact:", req.body);
        const newContact = new Contact(req.body);
        const saved = await newContact.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Getting All Contacts
router.get("/", async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
});

// Update Contact
router.put("/:id", async (req, res) => {
    try {
        const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete Contact
router.delete("/:id", async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.json({ message: "Contact deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
