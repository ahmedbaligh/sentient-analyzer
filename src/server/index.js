const path = require('path');
const express = require('express');

// Allow access to .env files for enhanced privacy
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Add body parsing middleware
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Add CORS to allow Cross-Origin Requests
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));
console.log(__dirname);

app.get('/', (_, res) => res.sendFile('dist/index.html'));

// Start the express server
const PORT = 8081;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

// Connecting and sending articles' links to Meaning Cloud API
const fetch = require('node-fetch');
const key = process.env.MEANING_CLOUD_API_KEY;

// Handle Meaning Cloud API requests for NLP
app.post('/analyze', (req, res) => {
  const url = req.body?.url;
  const lang = req.body?.lang ?? 'en';

  let result;
  (async () => {
    try {
      result = await fetch(
        `https://api.meaningcloud.com/sentiment-2.1?lang=${lang}&key=${key}&url=${url}`,
        {
          method: 'POST',
          redirect: 'follow'
        }
      );

      result = await result.json();
    } catch (error) {
      result = `The following error happened, while making your request: ${error}`;
    } finally {
      res.send(result);
    }
  })();
});
