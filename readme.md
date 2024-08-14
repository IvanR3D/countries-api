# Countries API

🌍 A simple and powerful API for accessing information about countries around the world.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- Get information about all countries
- Filter countries by continent
- Retrieve random countries
- Get detailed information about a specific country
- Combine filters for more specific queries

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/ivanr3d/countries-api.git
   ```

2. Navigate to the project directory:
   ```
   cd countries-api
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   npm start
   ```

The API should now be running on `http://localhost:3000`.

## Usage

### API Endpoints

- `/data`: Get all countries
- `/data?continent=<continentName>`: Get countries from a specific continent
- `/data?random=<count>`: Get a random selection of countries
- `/data?country=<countryName>`: Get information about a specific country
- `/data?continent=<continentName>&random=<count>`: Get a random selection of countries from a specific continent

### Examples

1. Get all countries:
   ```
   GET http://localhost:3000/data
   ```

2. Get countries from Europe:
   ```
   GET http://localhost:3000/data?continent=Europe
   ```

3. Get 5 random countries:
   ```
   GET http://localhost:3000/data?random=5
   ```

4. Get information about Afghanistan:
   ```
   GET http://localhost:3000/data?country=Afghanistan
   ```

5. Get 3 random countries from Asia:
   ```
   GET http://localhost:3000/data?continent=Asia&random=3
   ```


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements

- Data sourced from [List of countries - Wikipedia](https://en.wikipedia.org/wiki/List_of_countries)
- Built with [Express.js](https://expressjs.com/)
- Inspired by [REST Countries](https://restcountries.com/)