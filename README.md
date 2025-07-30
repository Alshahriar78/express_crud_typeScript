# Express CRUD API with TypeScript

A simple and clean **CRUD (Create, Read, Update, Delete)** REST API built with **Express.js** and **TypeScript**, demonstrating best practices for structuring Node.js applications with TypeScript.

---

## 🚀 Features
- ✅ Built with **Express.js** and **TypeScript**
- ✅ Implements full **CRUD operations**
- ✅ Uses **MS SQL Server** as the database
- ✅ Organized project structure for scalability
- ✅ Includes basic error handling and validation
- ✅ **JWT Authentication** implemented with secure token generation and verification

---

## 📂 Project Structure
express_crud_typeScript/
├── src/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── services/
│ └── index.ts
├── .env
├── tsconfig.json
├── package.json
└── README.md




---

## 🛠️ Technologies Used
- [Express.js](https://expressjs.com/) - Web framework for Node.js
- [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript
- [MSSQL](https://www.microsoft.com/en-us/sql-server/) - Database

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Alshahriar78/express_crud_typeScript.git
cd express_crud_typeScript

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables
Create a .env file and add your database credentials:

DB_USER=your_user
DB_PASSWORD=your_password
DB_SERVER=localhost
DB_DATABASE=your_database

4️⃣ Run the Project
npm run dev   # for development
npm run build # compile TypeScript
npm start     # run compiled code
