//Establish a connection to our MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@proj2024mongodb.he1em.mongodb.net/?retryWrites=true&w=majority&appName=proj2024MongoDB');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});