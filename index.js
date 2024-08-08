const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Example API endpoint
app.get('/api/bots/:botId', (req, res) => {
    const botId = req.params.botId;
    // Fetch and return bot-specific data here
    res.json({ message: `Data for ${botId}` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
