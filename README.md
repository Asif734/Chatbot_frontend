# SmartBot Chatbot Application

A modern, responsive AI chatbot interface built with React, Vite, and Tailwind CSS.

## 📁 Project Structure

```bash
chatbot-app/
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── AuthModal.jsx          # Main auth modal container
│   │   │   ├── SignInForm.jsx         # Sign in form component
│   │   │   ├── SignUpStepOne.jsx      # First step of signup (reg_id + email)
│   │   │   └── SignUpStepTwo.jsx      # Second step (OTP + password)
│   │   ├── chat/
│   │   │   ├── ChatArea.jsx           # Chat messages display area
│   │   │   └── MessageInput.jsx       # Message input field
│   │   └── layout/
│   │       └── Header.jsx             # Top navigation header
│   ├── hooks/
│   │   └── useAuth.js                 # Authentication custom hook
│   ├── services/
│   │   └── api.js                     # API service layer
│   ├── App.jsx                        # Main app component
│   ├── main.jsx                       # Entry point
│   └── index.css                      # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Installation

### 1. Create Project Directory
```bash
mkdir chatbot-app
cd chatbot-app
```

### 2. Copy all the provided files to their respective locations

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```

The application will start on `http://localhost:3000`

## 🔧 Configuration

### Update API Base URL
In `src/services/api.js`, update the API base URL to your backend:

```javascript
const API_BASE_URL = 'http://localhost:8000/api'; // Change this
```

## 📡 API Integration

The application expects the following API endpoints:

### Authentication Endpoints

**1. Sign In**
```
POST /api/auth/signin
Body: {
  "reg_id": "string",
  "password": "string"
}
Response: {
  "token": "string",
  "user": {...}
}
```

**2. Send OTP (Sign Up Step 1)**
```
POST /api/auth/send-otp
Body: {
  "reg_id": "string",
  "email": "string"
}
Response: {
  "message": "OTP sent successfully"
}
```

**3. Sign Up (Step 2)**
```
POST /api/auth/signup
Body: {
  "reg_id": "string",
  "otp": "string",
  "password": "string",
  "confirm_password": "string"
}
Response: {
  "token": "string",
  "user": {...}
}
```

**4. Verify Token**
```
GET /api/auth/verify
Headers: {
  "Authorization": "Bearer <token>"
}
Response: {
  "user": {...}
}
```

### Chat Endpoints

**1. Send Message**
```
POST /api/chat/send
Headers: {
  "Authorization": "Bearer <token>"
}
Body: {
  "message": "string"
}
Response: {
  "response": "string"
}
```

**2. Get Chat History**
```
GET /api/chat/history
Headers: {
  "Authorization": "Bearer <token>"
}
Response: {
  "messages": [...]
}
```

## 🎨 Features

- ✅ Modern, responsive UI with gradient design
- ✅ Two-step signup process with OTP verification
- ✅ Secure authentication flow
- ✅ Modular component architecture
- ✅ API service layer for easy integration
- ✅ Custom authentication hook
- ✅ Local storage for token management
- ✅ Mobile-responsive design

## 🔨 Build for Production

```bash
npm run build
```

Build output will be in the `dist/` directory.

## 📝 TODO

- [ ] Connect authentication forms to backend API
- [ ] Implement chat functionality with backend
- [ ] Add loading states and error handling
- [ ] Add form validation
- [ ] Implement logout functionality
- [ ] Add password strength indicator
- [ ] Add "Forgot Password" feature
- [ ] Implement real-time chat with WebSockets

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **LocalStorage** - Token persistence

## 📄 License

MIT