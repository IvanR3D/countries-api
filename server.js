const express = require('express');
const app = express();
const countries = require('./countries.json');

// Middleware to parse JSON request bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route to get all countries or filtered by continent, random count, or specific country
app.get('/data', (req, res) => {
  const { continent, random, country } = req.query;
  let filteredCountries = [...countries];

  // Filter by continent
  if (continent) {
    filteredCountries = filteredCountries.filter(
      (c) => c.continent.toLowerCase() === continent.toLowerCase()
    );
  }

  // Get random countries
  if (random) {
    const count = parseInt(random);
    if (isNaN(count) || count < 1) {
      return res.status(400).json({ error: 'Invalid random parameter' });
    }
    filteredCountries = filteredCountries
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
  }

  // Get a specific country
  if (country) {
    const countryData = filteredCountries.find(
      (c) => c.name.toLowerCase() === country.toLowerCase()
    );
    if (countryData) {
      return res.json(countryData);
    } else {
      return res.status(404).json({ error: 'Country not found' });
    }
  }

  if (filteredCountries.length > 0) {
    res.json(filteredCountries);
  } else {
    res.status(404).json({ error: 'No countries found' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});