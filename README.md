# Express TypeScript Starter

This is a starter template for building RESTful APIs with **Express** and **TypeScript**, featuring **CORS** support and a sample test route to get you started quickly.

## Features

- **Express**: Minimal web framework for building APIs.
- **TypeScript**: JavaScript with type safety.
- **CORS**: Cross-Origin Resource Sharing (CORS) enabled for development.
- **Sample Test Route**: A simple route to test the setup.

## Getting Started

Follow these instructions to get the project up and running.

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn (npm is recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ITSHahrad/express-ts.git
   cd express-ts
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Rename .env.example to .env

2. Start the application in development mode:

   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:3000`.

3. Open your browser or API client (e.g., Postman) and test the sample endpoint:

   - **GET** `http://localhost:3000/test`

### Sample Test Route

In this template, we provide a sample test route.

### TypeScript Configuration

The project uses TypeScript for static typing and ES module support. The configuration is stored in `tsconfig.json`.

### Available Scripts

- `npm run dev`: Start the server with hot reloading (using `ts-node-dev`).
- `npm run build`: Compile TypeScript code to JavaScript.
- `npm run server`: Compile TypeScript code to Javascript and Run it.

## Deployment

For production, you can build the TypeScript files and run the app using Node.js:

1. Build the TypeScript files:

   ```bash
   npm run build
   ```

2. Run the compiled JavaScript code:

   ```bash
   npm run server
   ```

The server will be up and running in production mode.

--- 
This starter template gives you everything you need to start building an Express API with TypeScript, CORS, and easy testing. Happy coding!