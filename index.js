const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/bots/:botId', async (req, res) => {
    const botId = req.params.botId;
    try {
        // Simulating data fetching
        const data = await getBotData(botId); // Replace with your actual data-fetching logic
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// Start the server
app.listen(PORT, () => {
    const baseURL = process.env.RAILWAY_STATIC_HOST
        ? `https://${process.env.RAILWAY_STATIC_HOST}`
        : `http://localhost:${PORT}`;
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit your dashboard at: ${baseURL}`);
});
