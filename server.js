const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/lab-7/index.html'));
});

// Mad Lib POST handler
app.post('/ITC505/lab-7/index.html', (req, res) => {
    const { noun, adjective, verb, pluralNoun, adverb } = req.body;

    if (!noun || !adjective || !verb || !pluralNoun || !adverb) {
        return res.send(`
            <h1>Submission Failed</h1>
            <p>Please fill out all fields</p>
            <a href="/">Go Back to Form</a>
        `);
    }

    const madLib = `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} ${adverb}. They often played with ${pluralNoun}, and everyone was amazed!`;

    res.send(`
        <h1>Your Mad Lib Story</h1>
        <link rel="stylesheet" href="styles.css">
        <p>${madLib}</p>
        <a href="/">Create Another Mad Lib</a>
    `);
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

