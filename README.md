# URL Shortener

A simple and efficient URL Shortener web application built with Node.js, Express, MongoDB, and EJS.  
This project allows users to convert long URLs into short and shareable links with fast redirection support.

---

## Features

- Shorten long URLs instantly
- Generate unique short IDs
- Fast URL redirection
- MongoDB database integration
- Simple and clean UI using EJS
- Beginner-friendly project structure

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- ShortID
- Nodemon

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/url-shortner.git
cd url-shortner
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Configure MongoDB

Make sure MongoDB is installed and running locally.

Create a `.env` file in the root directory and add:

```env
MONGO_URL=mongodb://127.0.0.1:27017/url-shortner
PORT=8001
```

---

### 4. Start the Server

```bash
npm start
```

The server will start on:

```txt
http://localhost:5000
```

---

## Project Structure

```txt
url-shortner/
│
├── models/
├── routes/
├── views/
├── controllers/
├── index.js
├── package.json
└── README.md
```

---

## Usage

1. Open the application in your browser
2. Enter a long URL
3. Click on **Shorten**
4. Copy and share the generated short URL

---

## Scripts

### Start Development Server

```bash
npm start
```

---

## Dependencies

- express
- mongoose
- ejs
- shortid
- nano
- nodemon

---

## Future Improvements

- Click analytics
- User authentication
- Custom short URLs
- QR code generation
- Deployment support

---

## License

This project is licensed under the ISC License.
