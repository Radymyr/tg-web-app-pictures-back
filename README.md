# TG Web App Pictures Back

This project is a web application for Telegram that accepts an image and a related question as input, returns a description of the image, and sends the image back to the Telegram chat bot from which the application was invoked.

## Contents

1. [Description](#description)
2. [Project Structure](#project-structure)
3. [Requirements](#requirements)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Testing](#testing)
7. [Contribution](#contribution)
8. [License](#license)

## Description

This web application for Telegram accepts an image and a question about it, processes the image, and returns a description along with the image to the originating Telegram chat bot. The backend is built using Node.js with Express and Telegraf.

## Project Structure

```
/tg-web-app-pictures-back
  /node_modules
  /src
    /assets
    bot.js
    buttons.js
    encodeImage.js
    filters.js
    index.js
    initialize.js
    openai.js
    server.js
  /uploads
  .env
  .gitignore
  package-lock.json
  package.json
  Procfile
```

## Requirements

### General Requirements

- Node.js
- NPM or Yarn

### Dependencies

The project uses the following npm packages:

- cors
- dotenv
- express
- express-validator
- form-data
- fs
- mime-types
- multer
- nodemon
- openai
- telegraf

## Installation

Step-by-step guide to install and set up the project on your local machine.

[Frontend Repository](https://github.com/Radymyr/tg-web-app-pictures)

1. Clone the repository:

   ```sh
   git clone https://github.com/Radymyr/tg-web-app-pictures-back.git
   cd tg-web-app-pictures-back
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Set up the configuration file `.env`:
   ```sh
   cp .env.example .env
   # Open .env and add your parameters
   ```

## Usage

Instructions on how to run the project.

1. Start the server:
   ```sh
   npm start
   ```
   The server will start and be ready to handle requests from the Telegram bot.

## Testing

Currently, tests are not implemented. You can run a basic check with:

```sh
npm test
```

(Note: This command will return an error message as there are no tests specified.)

## Contribution

Guidelines for contributing to the project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-xyz`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-xyz`).
5. Open a pull request.

## License

This project is licensed under the ISC License.

---

## Live Demo

Check out the working version of the application deployed on a server:

[Working Version](https://t.me/describingPictures_bot)
