# ScalableWebApp - Complete Documentation

**Author:** Manu V G  
**Version:** 1.0.0  
**Last Updated:** November 2025

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Architecture](#project-architecture)
4. [Installation & Setup](#installation--setup)
5. [Running the Project](#running-the-project)
6. [Features](#features)
7. [API Documentation](#api-documentation)
8. [Frontend Pages & Components](#frontend-pages--components)
9. [Database Models](#database-models)
10. [Authentication Flow](#authentication-flow)
11. [Error Handling](#error-handling)
12. [Project Structure](#project-structure)
13. [Environment Variables](#environment-variables)
14. [Styling & UI](#styling--ui)
15. [Deployment Guide](#deployment-guide)
16. [Troubleshooting](#troubleshooting)
17. [Credits](#credits)

---

## Project Overview

**ScalableWebApp** is a modern, full-stack web application built by **Manu V G** that provides secure user authentication, profile management, and a note-taking system. The application is designed with scalability in mind, using industry-standard technologies and best practices.

### Key Objectives
- ✅ Secure user registration and authentication using JWT tokens
- ✅ Profile management with customizable user information
- ✅ Complete CRUD operations for notes management
- ✅ Responsive, modern UI with attractive design
- ✅ Scalable backend architecture with MongoDB
- ✅ Production-ready error handling and validation

---

## Technology Stack

### Frontend
- **Framework:** Next.js 16.0.1 (React-based)
- **Styling:** Tailwind CSS 3.3.3
- **HTTP Client:** Axios 1.6.0
- **Notifications:** react-hot-toast
- **Routing:** Next.js Router
- **State Management:** React Hooks (useState, useEffect)

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js 5.1.0
- **Database:** MongoDB with Mongoose 8.19.3
- **Authentication:** JWT (jsonwebtoken 9.0.2)
- **Password Hashing:** bcrypt 6.0.0
- **Security:** CORS, rate limiting, input validation
- **Environment:** dotenv 17.2.3

### Database
- **MongoDB** - NoSQL database for flexible schema design
- **Collections:** Users, Notes

---

## Project Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (Next.js)                   │
│              Running on http://localhost:3000           │
├─────────────────────────────────────────────────────────┤
│  Pages: index, login, register, dashboard, profile      │
│  Components: Navbar, EntityForm, EntityList, etc.      │
│  Utils: apiClient, auth, validation                    │
│  Styling: Tailwind CSS + Global CSS                    │
└─────────────────────────────────────────────────────────┘
                            │
                    HTTP/REST API Calls
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                   Backend (Express.js)                  │
│              Running on http://localhost:5000          │
├─────────────────────────────────────────────────────────┤
│  Routes: /api/users, /api/notes                        │
│  Middleware: Authentication, Error Handling            │
│  Models: User, Note                                     │
│  Security: JWT, bcrypt, CORS, Rate Limiting           │
└─────────────────────────────────────────────────────────┘
                            │
                    Database Queries
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                   MongoDB Database                      │
│          Connection: mongodb://localhost:27017         │
├─────────────────────────────────────────────────────────┤
│  Database: scalablewebapp                              │
│  Collections: users, notes                             │
└─────────────────────────────────────────────────────────┘
```

---

## Installation & Setup

### Prerequisites
- **Node.js** v14+ (Recommended: v18+)
- **MongoDB** (Local installation or Atlas)
- **npm** or **yarn** package manager
- **Windows PowerShell** or other terminal

### Step 1: Clone/Extract Project
```bash
# Extract the project to your desired location
cd c:\Users\USER\Downloads\oasis\ infobyte\fro\ScalableWebApp
```

### Step 2: Install Backend Dependencies
```bash
cd backend
npm install
```

**Dependencies installed:**
- express, mongoose, cors, dotenv, jsonwebtoken, bcrypt, express-validator, express-rate-limit

### Step 3: Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

**Dependencies installed:**
- next, react, react-dom, axios, tailwindcss, postcss, autoprefixer, react-hot-toast

### Step 4: Configure Environment Variables

Create a `.env` file in the `backend` folder:
```env
MONGO_URI=mongodb://localhost:27017/scalablewebapp
JWT_SECRET=mySuperSecretKey123
PORT=5000
```

**Note:** Modify `MONGO_URI` if using MongoDB Atlas instead of local MongoDB.

### Step 5: Ensure MongoDB is Running

**Local MongoDB:**
```bash
mongod
```

**MongoDB Atlas:** Ensure your cluster is active and connection string is correct.

---

## Running the Project

### On Windows PowerShell (Remember: Use `;` not `&&`)

#### Terminal 1: Start Backend
```powershell
cd "c:\Users\USER\Downloads\oasis infobyte\fro\ScalableWebApp\backend"; npm start
```

**Expected Output:**
```
> backend@1.0.0 start
> node server.js
Server running on 5000
```

#### Terminal 2: Start Frontend
```powershell
cd "c:\Users\USER\Downloads\oasis infobyte\fro\ScalableWebApp\frontend"; npm run dev
```

**Expected Output:**
```
> frontend@1.0.0 dev
> next dev
✓ Ready in 2.2s
- Local: http://localhost:3000
```

#### Access the Application
Open your browser and navigate to: **http://localhost:3000**

---

## Features

### ✅ User Authentication
- **Registration:** Create account with email and password
- **Login:** Secure JWT-based authentication
- **Logout:** Clear session and remove token
- **Protected Routes:** Dashboard and profile require authentication

### ✅ Profile Management
- **View Profile:** Display user information
- **Edit Profile:** Update name, bio, phone, profile picture
- **Delete Account:** Permanently remove user account
- **Profile Picture:** Store image URL

### ✅ Notes Management (CRUD)
- **Create:** Add new notes with title and content
- **Read:** View all user's notes
- **Update:** Edit note title and content
- **Delete:** Remove notes
- **Search:** Filter notes by title

### ✅ Security Features
- **Password Hashing:** bcrypt with 10 salt rounds
- **JWT Authentication:** Secure token-based auth
- **Protected Endpoints:** Auth middleware on all protected routes
- **CORS:** Cross-origin resource sharing enabled
- **Input Validation:** Form validation on frontend and backend
- **Error Handling:** Centralized error handling

### ✅ User Interface
- **Modern Design:** Gradient backgrounds, glass-morphism effects
- **Responsive:** Mobile-friendly layouts
- **Interactive:** Smooth animations and transitions
- **Toast Notifications:** Real-time user feedback
- **Loading States:** Visual feedback during operations

---

## API Documentation

### Base URL
```
http://localhost:5000/api
```

---

### 1. User Authentication APIs

#### 1.1 User Registration

**Endpoint:** `POST /users/register`

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (Success - 200):**
```json
{
  "message": "User registered!"
}
```

**Response (Error - 400):**
```json
{
  "message": "User already exists"
}
```

**Frontend Location:** `pages/register.js`
**Backend Location:** `routes/userRoutes.js` - Line 7-16

**Flow:**
1. User enters email and password
2. Frontend validates format
3. POST request sent to backend
4. Backend checks if user exists
5. If not, password is hashed with bcrypt
6. User document created in MongoDB
7. Success message returned

---

#### 1.2 User Login

**Endpoint:** `POST /users/login`

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (Success - 200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response (Error - 400):**
```json
{
  "message": "Invalid credentials"
}
```

**Frontend Location:** `pages/login.js`
**Backend Location:** `routes/userRoutes.js` - Line 19-26

**Flow:**
1. User enters email and password
2. Frontend validates input
3. POST request sent to backend
4. Backend finds user by email
5. Backend compares password using bcrypt
6. If match, JWT token created with user ID
7. Token expires in 24 hours
8. Token stored in browser localStorage (frontend)
9. Token sent with all subsequent requests

---

#### 1.3 Get User Profile

**Endpoint:** `GET /users/profile`

**Headers (Required):**
```
Authorization: Bearer {JWT_TOKEN}
```

**Response (Success - 200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "bio": "Software Developer",
  "phone": "+1234567890",
  "profilePicture": "https://example.com/pic.jpg",
  "createdAt": "2025-11-12T10:30:00Z"
}
```

**Response (Error - 401):**
```json
{
  "message": "No token, authorization denied."
}
```

**Frontend Location:** `pages/dashboard.js` - useEffect hook
**Backend Location:** `routes/userRoutes.js` - Line 29-37

**Flow:**
1. Frontend includes JWT token in Authorization header
2. authMiddleware verifies token and extracts user ID
3. GET request sent to backend
4. Backend finds user by ID and excludes password
5. User data returned with all profile fields
6. Frontend displays profile information

---

#### 1.4 Update User Profile

**Endpoint:** `PUT /users/profile`

**Headers (Required):**
```
Authorization: Bearer {JWT_TOKEN}
Content-Type: application/json
```

**Request:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "bio": "Updated bio",
  "phone": "+9876543210",
  "profilePicture": "https://new-pic.jpg"
}
```

**Response (Success - 200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "bio": "Updated bio",
  "phone": "+9876543210",
  "profilePicture": "https://new-pic.jpg",
  "createdAt": "2025-11-12T10:30:00Z"
}
```

**Response (Error - 404):**
```json
{
  "message": "User not found"
}
```

**Frontend Location:** `pages/dashboard.js` - handleProfileSubmit function
**Backend Location:** `routes/userRoutes.js` - Line 39-53

**Flow:**
1. User fills profile form in dashboard
2. Frontend collects updated data
3. PUT request sent with JWT token
4. authMiddleware verifies token
5. Backend finds user and updates fields
6. Updated user document returned
7. Frontend updates local state
8. Success toast notification shown

---

#### 1.5 Delete User Account

**Endpoint:** `DELETE /users/profile`

**Headers (Required):**
```
Authorization: Bearer {JWT_TOKEN}
```

**Response (Success - 200):**
```json
{
  "message": "User account deleted successfully"
}
```

**Response (Error - 404):**
```json
{
  "message": "User not found"
}
```

**Frontend Location:** `pages/dashboard.js` - handleDeleteProfile function
**Backend Location:** `routes/userRoutes.js` - Line 55-65

**Flow:**
1. User clicks "Delete Account" button
2. Confirmation dialog appears
3. If confirmed, DELETE request sent
4. authMiddleware verifies token
5. Backend finds and deletes user document
6. All associated notes deleted
7. Token removed from localStorage
8. User redirected to register page

---

### 2. Notes Management APIs

#### 2.1 Get All Notes (for logged-in user)

**Endpoint:** `GET /notes`

**Headers (Required):**
```
Authorization: Bearer {JWT_TOKEN}
```

**Response (Success - 200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "user": "507f1f77bcf86cd799439010",
    "title": "My First Note",
    "content": "This is my first note content",
    "__v": 0
  },
  {
    "_id": "507f1f77bcf86cd799439012",
    "user": "507f1f77bcf86cd799439010",
    "title": "Second Note",
    "content": "Another note here"
  }
]
```

**Response (Error - 401):**
```json
{
  "message": "No token, authorization denied."
}
```

**Frontend Location:** `pages/dashboard.js` - useEffect hook
**Backend Location:** `routes/noteRoutes.js` - Line 5-12

**Flow:**
1. Dashboard page loads
2. Frontend sends GET request with JWT token
3. authMiddleware extracts user ID from token
4. Backend queries all notes for that user
5. Array of notes returned
6. Frontend displays notes in list
7. User can search/filter notes

---

#### 2.2 Create New Note

**Endpoint:** `POST /notes`

**Headers (Required):**
```
Authorization: Bearer {JWT_TOKEN}
Content-Type: application/json
```

**Request:**
```json
{
  "title": "My New Note",
  "content": "This is the note content"
}
```

**Response (Success - 201):**
```json
{
  "_id": "507f1f77bcf86cd799439013",
  "user": "507f1f77bcf86cd799439010",
  "title": "My New Note",
  "content": "This is the note content",
  "__v": 0
}
```

**Response (Error - 400):**
```json
{
  "message": "Note validation failed: title: Path `title` is required."
}
```

**Frontend Location:** `pages/dashboard.js` - handleSubmit function
**Backend Location:** `routes/noteRoutes.js` - Line 14-23

**Flow:**
1. User enters note title and content
2. Frontend validates inputs (title and content required)
3. POST request sent with JWT token
4. authMiddleware extracts user ID
5. Backend creates note document with user ID
6. Note saved to MongoDB
7. Created note returned with ID
8. Frontend adds note to list
9. Form cleared for next note

---

#### 2.3 Update Note

**Endpoint:** `PUT /notes/{noteId}`

**Headers (Required):**
```
Authorization: Bearer {JWT_TOKEN}
Content-Type: application/json
```

**Request:**
```json
{
  "title": "Updated Title",
  "content": "Updated content"
}
```

**Response (Success - 200):**
```json
{
  "_id": "507f1f77bcf86cd799439013",
  "user": "507f1f77bcf86cd799439010",
  "title": "Updated Title",
  "content": "Updated content",
  "__v": 0
}
```

**Response (Error - 404):**
```json
{
  "message": "Note not found"
}
```

**Frontend Location:** `pages/dashboard.js` - handleSubmit function
**Backend Location:** `routes/noteRoutes.js` - Line 25-38

**Flow:**
1. User clicks Edit button on note
2. Note data loaded into form
3. User modifies content
4. PUT request sent with note ID and JWT
5. authMiddleware verifies token
6. Backend verifies note belongs to user
7. Note updated in MongoDB
8. Updated note returned
9. Frontend updates note in list

---

#### 2.4 Delete Note

**Endpoint:** `DELETE /notes/{noteId}`

**Headers (Required):**
```
Authorization: Bearer {JWT_TOKEN}
```

**Response (Success - 200):**
```json
{
  "message": "Note deleted."
}
```

**Response (Error - 404):**
```json
{
  "message": "Note not found"
}
```

**Frontend Location:** `pages/dashboard.js` - handleDeleteNote function
**Backend Location:** `routes/noteRoutes.js` - Line 40-47

**Flow:**
1. User clicks Delete button on note
2. DELETE request sent with note ID and JWT
3. authMiddleware verifies token
4. Backend verifies note belongs to user
5. Note deleted from MongoDB
6. Frontend removes note from list
7. Notes re-fetched or updated UI

---

## Frontend Pages & Components

### Pages (Created by Manu V G)

#### 1. **pages/index.js** - Home/Landing Page
**Location:** `frontend/pages/index.js`

**Features:**
- Beautiful gradient hero section
- Feature cards with glass-morphism
- Call-to-action buttons (Get Started, Sign In)
- Automatic redirect to dashboard if logged in
- Responsive design with wave animation

**Code Sections by Manu V G:**
- Hero section with gradient (lines 22-50)
- Feature cards (lines 52-70)
- Wave SVG animation (lines 72-77)
- Custom CSS animations (lines 79-91)

**User Journey:**
1. Unauthenticated user lands on home
2. Views attractive hero section
3. Can click "Get Started" → register page
4. Or click "Sign In" → login page
5. If already logged in → redirects to dashboard

---

#### 2. **pages/login.js** - Login Page
**Location:** `frontend/pages/login.js`

**Features:**
- Dark theme with modern card design
- Email and password inputs
- Password visibility toggle
- Loading state with spinner
- Error notifications via toast
- Sign-up link
- Professional styling

**Code Sections by Manu V G:**
- Card container with backdrop blur (lines 32-39)
- Email input field (lines 52-61)
- Password field with toggle (lines 63-83)
- Loading spinner (lines 85-102)
- Divider and sign-up link (lines 104-115)

**Authentication Flow:**
1. User enters email and password
2. Form validated on submission
3. POST request sent to `/api/users/login`
4. JWT token received
5. Token stored in localStorage
6. User redirected to dashboard
7. Navbar shows logout option

---

#### 3. **pages/register.js** - Registration Page
**Location:** `frontend/pages/register.js`

**Features:**
- Account creation with email
- Password and confirm password fields
- Password strength requirements
- Password visibility toggles
- Email validation
- Password match validation
- Comprehensive error messages
- Sign-in link for existing users

**Code Sections by Manu V G:**
- Form validation (lines 14-30)
- Email validation regex (line 15)
- Password confirmation check (lines 24-26)
- Two password fields (lines 87-144)
- Validation messages (lines 34-39)

**Registration Flow:**
1. User enters email
2. User creates password (min 6 chars)
3. User confirms password
4. Frontend validates email format
5. Frontend checks passwords match
6. POST request to `/api/users/register`
7. Backend creates user with hashed password
8. User redirected to login
9. User can now login with credentials

---

#### 4. **pages/dashboard.js** - Main Dashboard
**Location:** `frontend/pages/dashboard.js`

**Features:**
- Tabbed interface (Notes & Profile)
- Notes CRUD operations
- Note search/filter
- Profile view and edit
- Profile picture display
- Account deletion

**Notes Tab:**
- Create notes with title and content
- Edit existing notes
- Delete notes
- Search notes by title
- Display all user's notes

**Profile Tab:**
- View profile information
- Edit first name, last name, phone, bio
- Update profile picture URL
- See account creation date
- Delete account with confirmation

**Code Sections by Manu V G:**
- Tab navigation (lines 139-161)
- Notes form and list (lines 163-217)
- Profile view mode (lines 227-253)
- Profile edit mode (lines 255-321)
- API calls for all operations (lines 22-50, 72-121)

**Dashboard Flow:**
1. User logs in → redirected to dashboard
2. Loads notes and profile on mount
3. User can switch between tabs
4. Create/Edit/Delete notes
5. Edit or delete profile
6. All operations require JWT token

---

#### 5. **pages/profile.js** - Dedicated Profile Page
**Location:** `frontend/pages/profile.js`

**Features:**
- Simple profile display
- Shows all user information
- Protected route (requires login)

---

#### 6. **pages/_app.js** - App Wrapper
**Location:** `frontend/pages/_app.js`

**Features:**
- Global styling import
- React Hot Toast setup
- Toast provider for all pages

**Code by Manu V G:**
- Toaster component integration (line 6)
- Toast positioning (line 7)

---

### Components (Created by Manu V G)

#### **components/Navbar.js**
**Location:** `frontend/components/Navbar.js`

**Features:**
- Responsive navigation bar
- Gradient background
- Logo with icon
- Conditional navigation (logged in vs not logged in)
- Dashboard and Profile links (when logged in)
- Logout button with confirmation
- Sticky positioning
- Smooth transitions

**Code Sections by Manu V G:**
- Gradient navbar styling (line 22)
- Logo section (lines 25-33)
- Navigation links (lines 35-73)
- Conditional rendering (lines 41-73)

**Displayed On:** All pages

---

#### **components/EntityForm.js**
**Location:** `frontend/components/EntityForm.js`

**Features:**
- Form for creating/editing notes
- Title input field
- Content input field
- Submit button with dynamic text
- Reusable component

---

#### **components/EntityList.js**
**Location:** `frontend/components/EntityList.js`

**Features:**
- Display list of notes
- Edit and delete buttons
- Reusable for different entities

---

#### **components/SearchFilter.js**
**Location:** `frontend/components/SearchFilter.js`

**Features:**
- Search input field
- Filter functionality
- Reusable component

---

#### **components/Footer.js**
**Location:** `frontend/components/Footer.js`

**Features:**
- Footer component
- Company information
- Links section

---

#### **components/UserProfile.js**
**Location:** `frontend/components/UserProfile.js`

**Features:**
- Display user profile information
- Reusable component

---

#### **components/ProtectedRoute.js**
**Location:** `frontend/components/ProtectedRoute.js`

**Features:**
- Protect routes that require authentication
- Redirect to login if not authenticated
- Check for valid JWT token

---

### Utilities (Created by Manu V G)

#### **utils/apiClient.js**
**Location:** `frontend/utils/apiClient.js`

**Features:**
- Axios instance with base URL
- Automatic JWT token injection
- Request interceptor
- Centralized API configuration

**Code by Manu V G:**
```javascript
// Lines 1-16
- Create axios instance (line 3)
- Set base URL (line 4)
- Add request interceptor (lines 8-14)
- Extract token from localStorage
- Add Authorization header
```

**Usage:**
```javascript
import apiClient from '../utils/apiClient';

// Token automatically included
apiClient.post('/notes', noteData)
  .then(res => console.log(res.data))
  .catch(err => console.log(err));
```

---

#### **utils/auth.js**
**Location:** `frontend/utils/auth.js`

**Features:**
- Check if user is logged in
- Get stored JWT token
- Save JWT token
- Logout (remove token)

**Exported Functions:**
```javascript
isLoggedIn()        // Returns: boolean
getToken()          // Returns: token string or null
saveToken(token)    // Save token to localStorage
logout()            // Remove token from localStorage
```

---

#### **utils/validation.js**
**Location:** `frontend/utils/validation.js`

**Features:**
- Form validation logic
- Email validation
- Password validation
- Username validation

**Exported Functions:**
```javascript
validateForm({ username, password })
// Returns: error message or null
```

---

## Database Models

### Model 1: User Schema

**Location:** `backend/models/User.js`

**Mongoose Schema:**
```javascript
{
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
    // Hashed with bcrypt before saving
  },
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  bio: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  profilePicture: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

**Pre-save Hook (by Manu V G):**
- Line 9-13: Hashes password with bcrypt (10 salt rounds)
- Only hashes if password is modified

**Methods:**
- `comparePassword(password)` - Compare provided password with hashed password

**Collections:**
- MongoDB Collection: `users`
- Stored in database: `scalablewebapp`

---

### Model 2: Note Schema

**Location:** `backend/models/note.js`

**Mongoose Schema:**
```javascript
{
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}
```

**Fields:**
- `user`: Reference to User who created the note
- `title`: Note title (required)
- `content`: Note content (required)

**Collections:**
- MongoDB Collection: `notes`
- Stored in database: `scalablewebapp`

**Relationship:**
- One user can have many notes
- Enforced by user ID reference

---

## Authentication Flow

### Complete JWT Authentication Flow (by Manu V G)

```
┌─────────────────────────────────────────────────────────────┐
│                     USER REGISTRATION                       │
├─────────────────────────────────────────────────────────────┤

1. Frontend (pages/register.js):
   - User enters: email, password, confirm password
   - Frontend validates: email format, password length (≥6)
   - Checks: passwords match

2. POST /api/users/register:
   Request Body:
   {
     "email": "user@example.com",
     "password": "password123"
   }

3. Backend (routes/userRoutes.js - line 7):
   - Check if user already exists
   - Hash password with bcrypt (10 rounds)
   - Create User document
   - Save to MongoDB

4. Response:
   {
     "message": "User registered!"
   }

5. Frontend:
   - Show success toast
   - Redirect to login page after 1.2 seconds

└─────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────┐
│                       USER LOGIN                            │
├─────────────────────────────────────────────────────────────┤

1. Frontend (pages/login.js):
   - User enters: email, password
   - Frontend validates inputs

2. POST /api/users/login:
   Request Body:
   {
     "email": "user@example.com",
     "password": "password123"
   }

3. Backend (routes/userRoutes.js - line 19):
   - Find user by email in database
   - Compare password using bcrypt.compare()
   - If match: create JWT token
   - Token payload: { id: user._id }
   - Token expiration: 24 hours
   - Return token to frontend

4. Response:
   {
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
   }

5. Frontend (pages/login.js):
   - Receive token from response
   - Store token in localStorage:
     localStorage.setItem('token', res.data.token)
   - Show success toast
   - Redirect to /dashboard

6. Navbar Update:
   - Check localStorage for token
   - If exists: show Logout button
   - If not: show Login/Register buttons

└─────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────┐
│              AUTHENTICATED API REQUEST (Notes)              │
├─────────────────────────────────────────────────────────────┤

1. Frontend (pages/dashboard.js):
   - useEffect loads notes on mount
   - axios.get() to /api/notes

2. Axios Interceptor (utils/apiClient.js - line 8):
   - Automatically extract token from localStorage
   - Add header: Authorization: Bearer {token}
   - Example header:
     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

3. Backend (authMiddleware.js):
   - Extract token from Authorization header
   - Verify token using JWT secret
   - Extract user ID from token
   - Attach userId to request object
   - Call next() to continue to route handler

4. Backend Route Handler (routes/noteRoutes.js - line 5):
   - Access userId from request headers
   - Query MongoDB: Note.find({ user: userId })
   - Return notes array

5. Response:
   [
     {
       "_id": "...",
       "user": "507f...",
       "title": "My Note",
       "content": "..."
     }
   ]

6. Frontend:
   - Receive notes array
   - Update state with setNotes()
   - Render notes in UI

└─────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────┐
│                    TOKEN EXPIRATION                         │
├─────────────────────────────────────────────────────────────┤

1. JWT Token:
   - Expires in 24 hours
   - After expiration: jwt.verify() fails

2. Backend Response (401):
   {
     "message": "Token is not valid."
   }

3. Frontend Error Handling:
   - Catch error with status 401
   - Remove token from localStorage
   - Redirect to login page

└─────────────────────────────────────────────────────────────┘
```

---

## Error Handling

### Frontend Error Handling (Created by Manu V G)

#### Toast Notifications
```javascript
// Success
toast.success("Login successful!")

// Error
toast.error("Invalid credentials")

// Custom
toast.loading("Processing...")
```

**Locations:**
- `pages/login.js` - lines 20, 23
- `pages/register.js` - lines 15, 21, 25, 38
- `pages/dashboard.js` - lines 89, 101, 113, 120

---

### Backend Error Handling (Created by Manu V G)

#### Centralized Error Handler
**Location:** `backend/errorHandler.js`

```javascript
function errorHandler(err, req, res, next) {
    res.status(err.status || 500).json({
        message: err.message || "Server Error"
    });
}
```

#### Try-Catch Blocks
All routes wrapped with try-catch:

```javascript
router.post('/', async (req, res) => {
  try {
    // Route logic
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
```

#### Error Response Examples

**400 Bad Request:**
```json
{ "message": "Validation failed" }
```

**401 Unauthorized:**
```json
{ "message": "No token, authorization denied." }
```

**404 Not Found:**
```json
{ "message": "User not found" }
```

**500 Server Error:**
```json
{ "message": "Server Error" }
```

---

## Project Structure

```
ScalableWebApp/
│
├── backend/                          (Created by Manu V G)
│   ├── models/
│   │   ├── User.js                   (User schema with bcrypt hashing)
│   │   └── note.js                   (Note schema with user reference)
│   │
│   ├── routes/
│   │   ├── userRoutes.js             (Auth & profile endpoints)
│   │   └── noteRoutes.js             (CRUD endpoints for notes)
│   │
│   ├── authMiddleware.js             (JWT verification)
│   ├── errorHandler.js               (Centralized error handling)
│   ├── config.js                     (Configuration file)
│   ├── server.js                     (Express app entry point)
│   ├── package.json                  (Backend dependencies)
│   ├── package-lock.json
│   └── .env                          (Environment variables)
│
├── frontend/                         (Created by Manu V G)
│   ├── pages/
│   │   ├── index.js                  (Home/Landing page)
│   │   ├── login.js                  (Login page)
│   │   ├── register.js               (Registration page)
│   │   ├── dashboard.js              (Notes & Profile dashboard)
│   │   ├── profile.js                (Profile page)
│   │   └── _app.js                   (App wrapper with Toaster)
│   │
│   ├── components/
│   │   ├── Navbar.js                 (Navigation bar)
│   │   ├── EntityForm.js             (Form component)
│   │   ├── EntityList.js             (List component)
│   │   ├── SearchFilter.js           (Search component)
│   │   ├── Footer.js                 (Footer component)
│   │   ├── UserProfile.js            (Profile component)
│   │   └── ProtectedRoute.js         (Route guard)
│   │
│   ├── utils/
│   │   ├── apiClient.js              (Axios instance with JWT interceptor)
│   │   ├── auth.js                   (Auth helper functions)
│   │   └── validation.js             (Form validation)
│   │
│   ├── styles/
│   │   └── globals.css               (Global Tailwind styles)
│   │
│   ├── next.config.js                (Next.js configuration)
│   ├── tailwind.config.js            (Tailwind configuration)
│   ├── postcss.config.js             (PostCSS configuration)
│   ├── package.json                  (Frontend dependencies)
│   ├── package-lock.json
│   └── .next/                        (Build output)
│
└── README.md                         (This file - Created by Manu V G)
```

---

## Environment Variables

### Backend .env File
**Location:** `backend/.env`

```env
# MongoDB Connection
MONGO_URI=mongodb://localhost:27017/scalablewebapp

# JWT Secret Key
JWT_SECRET=mySuperSecretKey123

# Server Port (Optional - defaults to 5000)
PORT=5000
```

### For MongoDB Atlas
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/scalablewebapp?retryWrites=true&w=majority
JWT_SECRET=your_secret_key_here
```

### Environment Variable Usage
```javascript
// In server.js
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 5000;
```

---

## Styling & UI

### Tailwind CSS Configuration
**Location:** `frontend/tailwind.config.js`

```javascript
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### PostCSS Configuration
**Location:** `frontend/postcss.config.js`

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Global Styles
**Location:** `frontend/styles/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Modern Design Features (by Manu V G)

**Gradients:**
- `bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400`
- `bg-gradient-to-r from-indigo-500 to-cyan-500`

**Glass Morphism:**
- `backdrop-blur-xl`
- `bg-opacity-50`
- `border border-gray-700`

**Animations:**
- Fade-in animations
- Scale transforms on hover
- Smooth transitions (duration-300)
- Spinner animations for loading

**Responsive Design:**
- Mobile-first approach
- Grid layouts (grid-cols-1, lg:grid-cols-2)
- Flexible spacing
- Responsive text sizes

---

## Deployment Guide

### Deploy Backend to Heroku

1. **Install Heroku CLI**
```bash
npm install -g heroku
heroku login
```

2. **Create Heroku App**
```bash
cd backend
heroku create your-app-name
```

3. **Set Environment Variables**
```bash
heroku config:set MONGO_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_secret_key
```

4. **Deploy**
```bash
git push heroku main
```

### Deploy Frontend to Vercel

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
cd frontend
vercel
```

3. **Update API URL**
- Change localhost:5000 to deployed backend URL
- Update in `utils/apiClient.js`

### Deploy Database to MongoDB Atlas

1. **Create Cluster** on mongodb.com
2. **Get Connection String**
3. **Add to .env:** `MONGO_URI=your_connection_string`

---

## Troubleshooting

### Issue: "Cannot find module 'express'"

**Solution:**
```bash
cd backend
npm install
```

### Issue: "MongoDB connection failed"

**Solution:**
1. Ensure MongoDB is running: `mongod`
2. Check MONGO_URI in .env
3. For Atlas: whitelist your IP address

### Issue: "Token is not valid"

**Solution:**
1. Clear browser localStorage
2. Login again
3. Check JWT_SECRET in .env matches

### Issue: "Port 3000 already in use"

**Solution:**
```bash
# Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port:
npm run dev -- -p 3001
```

### Issue: "CORS error"

**Solution:**
- Backend has CORS enabled
- Check frontend API URL matches backend URL
- Update baseURL in `utils/apiClient.js`

### Issue: "Password comparison fails during login"

**Solution:**
1. Ensure user is registered first
2. Check password is entered correctly
3. Password is case-sensitive

---

## FAQ - Frequently Asked Questions

### Q: How do I reset my password?
**A:** Currently, the app doesn't have a reset feature. Delete and recreate account, or contact admin.

### Q: Can I use a different database?
**A:** Yes, modify MONGO_URI in .env to any MongoDB connection string (Atlas, local, etc.)

### Q: How long does JWT token last?
**A:** 24 hours. After expiration, user must login again.

### Q: Can I delete all my notes at once?
**A:** Currently, delete notes individually. Backend supports bulk delete if needed.

### Q: How do I change the app name?
**A:** Update "ScalableWebApp" text in:
- `components/Navbar.js`
- `pages/index.js`
- `pages/login.js`
- `pages/register.js`

### Q: Is the app production-ready?
**A:** It has good foundation but needs:
- Rate limiting improvement
- Email verification
- Password reset functionality
- Comprehensive tests
- Security audit

### Q: How many users can the app handle?
**A:** With proper scaling:
- Local: 10-50 users
- With MongoDB Atlas: 1000+ users
- With load balancer: unlimited

### Q: Can I add more features?
**A:** Yes, the architecture is scalable. Add new routes, models, and components as needed.

---

## Credits

### Developer & Creator
**Manu V G**

### All code, features, and components created by Manu V G include:

#### Backend Code:
- `backend/server.js` - Express server setup
- `backend/models/User.js` - User schema with bcrypt
- `backend/models/note.js` - Note schema
- `backend/routes/userRoutes.js` - Authentication endpoints
- `backend/routes/noteRoutes.js` - Notes CRUD endpoints
- `backend/authMiddleware.js` - JWT verification
- `backend/errorHandler.js` - Error handling
- `backend/config.js` - Configuration

#### Frontend Code:
- `frontend/pages/index.js` - Home page with gradient design
- `frontend/pages/login.js` - Login page with modern UI
- `frontend/pages/register.js` - Registration with validation
- `frontend/pages/dashboard.js` - Main dashboard with notes & profile
- `frontend/pages/profile.js` - Profile page
- `frontend/pages/_app.js` - App wrapper
- `frontend/components/Navbar.js` - Navigation bar
- `frontend/components/*.js` - All other components
- `frontend/utils/apiClient.js` - Axios configuration
- `frontend/utils/auth.js` - Authentication helpers
- `frontend/utils/validation.js` - Form validation

#### Configuration:
- `frontend/next.config.js` - Next.js config
- `frontend/tailwind.config.js` - Tailwind setup
- `frontend/postcss.config.js` - PostCSS setup
- `.env` - Environment variables
- `package.json` files - Dependencies

#### Documentation:
- `README.md` - This comprehensive documentation

### Technologies Used:
- Node.js & Express (Backend)
- React & Next.js (Frontend)
- MongoDB (Database)
- JWT & bcrypt (Security)
- Tailwind CSS (Styling)
- Axios (HTTP Client)

### Third-party Libraries:
- jsonwebtoken - JWT handling
- mongoose - MongoDB ODM
- bcrypt - Password hashing
- axios - HTTP requests
- react-hot-toast - Notifications
- tailwindcss - Utility-first CSS
- next - React framework

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Nov 12, 2025 | Initial release with auth, notes, and profile management |

---

## Support & Contact

For issues, questions, or improvements:
- Review this README thoroughly
- Check the Troubleshooting section
- Verify all setup steps are completed
- Ensure dependencies are installed
- Check environment variables

---

## License

**Created by Manu V G**

All rights reserved. This project is provided as-is for educational and personal use.

---

**Last Updated:** November 12, 2025  
**Created by:** Manu V G  
**Project:** ScalableWebApp v1.0.0
# Frontend-Developer-Intern-Task
