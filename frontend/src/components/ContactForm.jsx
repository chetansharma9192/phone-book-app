import React, { useState, useEffect } from 'react';

const ContactForm = ({ onSave, selected }) => {
    const [form, setForm] = useState({ name: "", phone: "" });

    useEffect(() => {
        if (selected) setForm(selected);
        else setForm({ name: "", phone: "" });
    }, [selected]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(form);
        setForm({ name: "", phone: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
            <button type="submit">{selected ? "Update" : "Add"}</button>
        </form>
    );
};

export default ContactForm;
