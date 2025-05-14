# AdvanceLogix Web App

AdvanceLogix is a modern, responsive web application designed to streamline account management, user authentication, and internal operations for IT service businesses. Built using React, Vite, and Tailwind CSS, the app features a clean UI, reusable components, and scalable structure, ready to grow with future backend integration.

## 🚀 Features

* 🔐 Account Creation & Login
* 🎨 Responsive Design with Tailwind CSS
* 🧱 Modular Components (e.g., Navbar, Forms)
* 🧭 React Router for Page Navigation
* ✅ Form Validations (e.g., password strength, match)
* 🧑‍💼 Role-based page navigation structure

## 🛠 Tech Stack

* **Frontend:** React + Vite
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **Form Validation:** Custom JavaScript logic (with Regex)

## 📂 Project Structure

AdvanceLogix/
├── api/                    # Serverless functions
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components (Navbar, Forms, etc.)
│   ├── pages/              # Page-level components (Login, CreateAccount, etc.)
│   ├── App.jsx             # Main App container with routes
│   ├── main.jsx            # Vite entry point
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS setup for Tailwind
├── index.html              # Main HTML template
└── README.md               # Project documentation

## 🧪 Setup & Run Locally

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/AdvanceLogix.git
cd AdvanceLogix
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open in your browser at: [http://localhost:5173](http://localhost:5173)

## ✅ Password Validation Rules

* Minimum 8 characters
* At least 1 number
* At least 1 special character
* Must match the "Confirm Password" field

## 📌 Planned Features

* Backend integration (Node.js + PostgreSQL)
* JWT-based authentication
* Admin dashboard with analytics
* Database-connected service logging
* Email verification

## 🧑‍💻 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

**Developed by Muhammad Raza for internal use at AdvanceLogix. Built with a passion for clean code and scalable architecture.**
