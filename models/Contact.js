import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    countryCode: { type: String, required: true },
    phone: { type: String, required: true },
    company: { type: String },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', ContactSchema);
export default Contact;