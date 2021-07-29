# Sentient Analyzer

This is a simple project for analyzing articles, news, and text using Natural Language Processing via the services offered by [Meaning Cloud](https://www.meaningcloud.com/) API.

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
> concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
> process and analyze large amounts of natural language data.

## Overview

### Tech Stack

Tech stack includes:

- **Sass** as my CSS preprocessor for styling.
- **Webpack** as my build tool.
- **Babel** for using the latest ES syntax, while maintaining support for older browser.
- **Express** as my `Node.js` backend framework.

### Main Files: Project Structure

```bash
├── README.md
├── webpack.dev.js ***  Webpack development environment configuration.
├── webpack.prod.js ***  Webpack production environment configuration.
├── package.json *** Project dependencies.
├── __test__ *** Project testing suites.
└── src
    ├── client
    |   ├── js
    |   ├── styles
    |   ├── views
    |   └── index.js
    └── server
        └── index.js
```

## Getting started

### Installing Dependencies

`cd` into the project's root directory and run:

```bash
npm install
```

### Setting up the API

This project uses the Meaning Cloud API to handle the natural language processing part.

You need to [signup](https://www.meaningcloud.com/developer/create-account) for a new account, if you don't have one already. Then head to [here](https://www.meaningcloud.com/developer/) and under the **_Your subscriptions_** section you will find your API key.

Now create a `.env` file in the root directory of the project and inside it add the following:

```env
MEANING_CLOUD_API_KEY=<your_api_key>
```

### Running the App

To run the application in production mood, firstly create the build file by executing:

```bash
npm run build-prod
```

Now, to the run the local production server, run:

```bash
npm start
```

The app should now be running at [localhost:8081](http://localhost:8081/).

## Testing

Make sure to be in the project's root directory, then to run all test suites, execute:

```bash
npm run test
```
