🚨 AlertHer– One-Tap Women Safety Alert System

SafeTap is a web-based women safety application designed to provide instant emergency assistance with a single tap. 
The system sends an SOS alert along with the user’s live location to predefined emergency contacts using SMS, ensuring quick help during critical situations.

🔍 Problem Statement

Women often face unsafe situations where immediate help is required, but existing communication methods may be slow or unavailable. 
There is a need for a quick, reliable, and simple emergency alert system that works instantly.

💡 Solution

SafeTap provides a one-tap SOS button that automatically:

Fetches the user’s live location,
Sends emergency SMS alerts to trusted contacts,
Logs alert history for future reference.

✨ Features

🚨 One-Tap SOS Emergency Alert,
📍 Live Location Tracking (Google Maps link),
📩 SMS Alerts using Twilio API.

👥 Emergency Contact Management

🕒 Alert History with timestamp,
⏱️ Safety Timer (auto SOS if no response).

🧩 Modules

SOS Dashboard,
Emergency Contact Management,
Location Tracking,
SMS Alert System,
Alert History,
Safety Timer Module.

🛠️ Technology Stack

Frontend: React.js,
Backend: Node.js, Express.js,
Database: MongoDB.

APIs:

Twilio SMS API,
Browser Geolocation API,
Authentication: JWT.

⚙️ How It Works

User clicks the SOS button,
System fetches live GPS location,
SMS alert is sent to emergency contacts,
Alert details are saved in the database,
User can view alert history anytime.

Project Structure

women-safety-alert/
│
├── client/                     # Frontend (React)
│   ├── public/
│   │   └── index.html
│   │
│   └── src/
│       ├── assets/             # Images & icons
│       │   └── sos.png
│       │
│       ├── components/         # Reusable UI components
│       │   ├── Navbar.jsx
│       │   ├── ProtectedRoute.jsx
│       │   └── SOSButton.jsx
│       │
│       ├── pages/              # Application pages
│       │   ├── Dashboard.jsx
│       │   ├── Contacts.jsx
│       │   └── AlertHistory.jsx
│       │
│       ├── context/            # Global state management
│       │   └── AuthContext.jsx
│       │
│       ├── services/           # API service files
│       │   ├── authService.js
│       │   ├── contactService.js
│       │   └── sosService.js
│       │
│       ├── utils/              # Helper utilities
│       │   └── getLocation.js
│       │
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
├── server/                     # Backend (Node + Express)
│   ├── config/
│   │   ├── db.js               # MongoDB connection
│   │   └── twilio.js           # Twilio configuration
│   │
│   ├── controllers/            # Request handlers
│   │   ├── authController.js
│   │   ├── contactController.js
│   │   └── sosController.js
│   │
│   ├── models/                 # Database schemas
│   │   ├── User.js
│   │   └── Alert.js
│   │
│   ├── routes/                 # API routes
│   │   ├── authRoutes.js
│   │   ├── contactRoutes.js
│   │   └── sosRoutes.js
│   │
│   ├── middleware/             # Custom middleware
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   │
│   ├── utils/                  # Utility functions
│   │   └── sendSMS.js
│   │
│   ├── app.js                  # Express app setup
│   └── server.js               # Server entry point
│
├── .env                        # Environment variables
├── .gitignore
├── package.json
└── README.md

👩‍💻 Author
Deepadharshini K
MERN Stack Developer
screenshots/
<img width="1880" height="942" alt="image" src="https://github.com/user-attachments/assets/842fcdbf-6037-4959-82a0-db044c3edfc0" />
<img width="1877" height="946" alt="image" src="https://github.com/user-attachments/assets/779be541-a9c2-4296-a392-a7aa92cd53b7" />
<img width="1888" height="949" alt="image" src="https://github.com/user-attachments/assets/dd2d9901-cf55-40f8-b596-41797ba84e18" />
<img width="720" height="1600" alt="image" src="https://github.com/user-attachments/assets/8f81bffc-6aba-4504-a2b9-9349a2a5a490" />



