# Express TypeScript API

A modern, type-safe REST API built with Express.js and TypeScript.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## 🚀 Features

- 🔒 Type-safe development with TypeScript
- 🛡️ Security with Helmet and CORS
- 📝 Request logging with Morgan
- 🗄️ MongoDB integration
- 🔐 JWT Authentication
- 📦 Environment configuration
- 🧪 ESLint for code quality
- 💅 Prettier for code formatting
- 🛡️ JSON payload safety middleware
- ⚡ Performance monitoring with hrtime
- 🔄 Unified response handling with callbacks

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/ITSHahrad/express-ts.git
cd express-ts
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
SERVER_PORT=3000
DATABASE_URL=mongodb://localhost:27017/your-database
JWT_SECRET=your-secret-key
CORS_ORIGIN=*
CORS_METHODS=GET,HEAD,PUT,PATCH,POST,DELETE
CORS_ALLOWED_HEADERS=Content-Type,Authorization
CORS_CREDENTIALS=true
MORGAN_FORMAT=dev
```

## 🚀 Running the Application

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── configs/         # Configuration files
│   ├── env.ts      # Environment variables
│   └── helmet.ts   # Helmet security config
├── controllers/     # Route controllers
│   └── ping.controller.ts  # Health check endpoint
├── middlewares/     # Custom middlewares
│   └── json.middleware.ts  # JSON payload validation
├── libs/           # Core libraries
│   ├── database.ts # MongoDB connection
│   └── callbacks.ts # Response handlers
├── routes/         # API routes
│   └── ping.router.ts  # Health check routes
└── application.ts  # Main application file
```

## 📝 Code Quality

```bash
# Lint code
npm run lint

# Format code
npm run format
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Shahrad Sheykhlani - [@ITSHahrad](https://github.com/ITSHahrad)

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/ITSHahrad">ITSHahrad</a></sub>
</div> 