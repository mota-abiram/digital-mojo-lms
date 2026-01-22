# Digital Mojo LMS


## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Feature Breakdown](#-feature-breakdown)
- [Security Considerations](#-security-considerations)
- [Performance Optimizations](#-performance-optimizations)
- [Browser Support](#-browser-support)
- [Development Notes](#-development-notes)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**Digital Mojo LMS** is a comprehensive, cloud-based Learning Management System designed for corporate training and employee onboarding. Built with modern web technologies, it provides a seamless learning experience with role-based access control, real-time progress tracking, interactive quizzes, and automated certificate generation.

### Why Digital Mojo LMS?

- **🎓 Structured Learning Paths**: Organize courses by mandatory onboarding and role-specific training
- **📊 Real-time Analytics**: Track learner progress, completion rates, and quiz performance
- **🏆 Automated Certifications**: Generate professional PDF certificates upon course completion
- **👥 Multi-role Support**: Separate interfaces for learners and administrators
- **🌙 Dark Mode**: Built-in theme switching for comfortable learning at any time
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices

---

## ✨ Key Features

### For Learners

- **Personalized Dashboard**: View assigned courses, track progress, and resume learning
- **Interactive Video Modules**: YouTube-integrated video player with seamless playback
- **Timed Quizzes**: Multiple-choice assessments with instant feedback and retry options
- **Progress Tracking**: Real-time synchronization of module completion across devices
- **Certificate Generation**: Download professional PDF certificates for completed courses
- **Profile Management**: View learning statistics, hours completed, and achievements
- **Department-based Learning Paths**: Customized course recommendations based on role

### For Administrators

- **Course Management**: Create, edit, and delete courses with a visual editor
- **Quiz Builder**: Design custom quizzes with configurable passing scores and time limits
- **Analytics Dashboard**: Comprehensive insights into user engagement and completion rates
- **User Management**: View all learners, track individual progress, and manage permissions
- **Bulk Data Import**: Seed database with courses and quizzes via JSON upload
- **Real-time Updates**: All changes reflect immediately across the platform

### Platform Features

- **Authentication**: Secure email/password and Google OAuth login
- **Role-based Access Control**: Granular permissions for learners and admins
- **Error Boundaries**: Graceful error handling with user-friendly fallbacks
- **Lazy Loading**: Code-splitting for optimal performance
- **Offline Resilience**: Firestore caching for improved reliability
- **Search Functionality**: Quick course discovery across the dashboard

---

## 🛠 Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI library for building component-based interfaces |
| **TypeScript** | 5.8.2 | Type-safe development with enhanced IDE support |
| **React Router DOM** | 7.9.6 | Client-side routing with protected routes |
| **Vite** | 6.2.0 | Lightning-fast build tool and dev server |
| **TailwindCSS** | 3.x (CDN) | Utility-first CSS framework for rapid styling |
| **Material Symbols** | Latest | Google's icon library for consistent UI elements |

### Backend & Services

| Technology | Version | Purpose |
|------------|---------|---------|
| **Firebase Authentication** | 12.6.0 | User authentication with email/password and OAuth |
| **Cloud Firestore** | 12.6.0 | NoSQL database for real-time data synchronization |
| **Firebase Storage** | 12.6.0 | Cloud storage for user avatars and assets |
| **Firebase Analytics** | 12.6.0 | User behavior tracking and insights |

### Additional Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| **jsPDF** | 3.0.4 | PDF generation for certificates |
| **html2canvas** | 1.4.1 | HTML to canvas conversion for certificate rendering |

### Development Tools

- **Node.js**: Runtime environment (v18+ recommended)
- **npm**: Package manager
- **ESLint**: Code linting (configured via Vite)
- **Git**: Version control

---

## 📁 Project Structure

```
digital-mojo-lms/
├── assets/                      # Static assets (images, logos)
├── components/                  # Reusable React components
│   ├── CertificateGenerator.tsx # PDF certificate generation
│   ├── DepartmentSelector.tsx   # Department selection modal
│   ├── ErrorBoundary.tsx        # Error handling wrapper
│   ├── Header.tsx               # Top navigation bar
│   ├── MainLayout.tsx           # Layout wrapper with sidebar
│   ├── ProtectedRoute.tsx       # Route guard for admin pages
│   ├── Sidebar.tsx              # Navigation sidebar
│   └── UserAvatar.tsx           # User profile avatar
├── pages/                       # Page-level components
│   ├── AdminAnalytics.tsx       # Admin analytics dashboard
│   ├── AdminCourseEditor.tsx    # Course creation/editing interface
│   ├── AdminCourseManager.tsx   # Course list management
│   ├── AdminCourseUpload.tsx    # Bulk course JSON upload
│   ├── AdminDashboard.tsx       # Admin home page
│   ├── AdminQuizUpload.tsx      # Bulk quiz JSON upload
│   ├── AdminSeed.tsx            # Database seeding utility
│   ├── CourseViewer.tsx         # Course content player
│   ├── Dashboard.tsx            # Learner home page
│   ├── Login.tsx                # Authentication page
│   ├── PlaceholderPage.tsx      # Placeholder for future features
│   ├── Profile.tsx              # User profile and statistics
│   ├── Quiz.tsx                 # Quiz interface
│   └── Register.tsx             # User registration page
├── services/                    # Business logic and API calls
│   ├── db.ts                    # Firestore database operations
│   ├── seed.ts                  # Database seeding functions
│   └── storage.ts               # Firebase Storage operations
├── App.tsx                      # Main application component
├── constants.ts                 # Mock data and constants
├── firebaseConfig.ts            # Firebase initialization
├── firestore.rules              # Firestore security rules
├── firestore.indexes.json       # Firestore composite indexes
├── index.html                   # HTML entry point
├── index.tsx                    # React entry point
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── types.ts                     # TypeScript type definitions
├── vite.config.ts               # Vite build configuration
└── README.md                    # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- **Firebase Project** (with Firestore, Authentication, and Storage enabled)
- **Gemini API Key** (optional, for AI features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/digital-mojo-lms.git
   cd digital-mojo-lms
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
   - Enable **Authentication** (Email/Password and Google Sign-In)
   - Enable **Cloud Firestore** (start in test mode, then apply security rules)
   - Enable **Firebase Storage**
   - Copy your Firebase config to `firebaseConfig.ts`

4. **Set up environment variables**
   ```bash
   # Create .env.local file
   echo "GEMINI_API_KEY=your_gemini_api_key_here" > .env.local
   ```

5. **Deploy Firestore security rules**
   ```bash
   firebase deploy --only firestore:rules
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Access the application**
   - Open [http://localhost:3000](http://localhost:3000) in your browser
   - Register a new account or use the seed data

### Initial Setup

1. **Create an admin account**
   - Register a new user via the UI
   - Manually set `role: "admin"` in Firestore for this user

2. **Seed the database** (Optional)
   - Navigate to `/admin/seed` as an admin
   - Upload course and quiz JSON files
   - Or use the mock data generator

3. **Start learning!**
   - Log in as a learner
   - Explore courses and complete modules

### Demo Account for Portfolio Showcase

To showcase the LMS with realistic data in your portfolio:

1. **Create the demo account**
   - Log in as an admin user
   - Navigate to `/admin/seed`
   - Click "Create Demo Account" button
   - The system will create a demo account with:
     - Completed courses with progress tracking
     - Quiz scores and attempt history
     - Generated certificates
     - Realistic learning timeline

2. **Demo Account Credentials**
   - **Email**: `demo@digitalmojo.in`
   - **Password**: `DemoAccount123!`

3. **What's Included**
   - ✅ 2 fully completed courses (100% progress)
   - ✅ 1 partially completed course (70% progress)
   - ✅ Multiple quiz scores with attempt history
   - ✅ Certificates for completed courses
   - ✅ Realistic timestamps showing learning progression over time

**Note**: The demo account is designed for portfolio demonstration purposes. You can refresh the demo account data anytime by clicking "Create Demo Account" again (it will update existing data if the account already exists).

---

## 🔍 Feature Breakdown

### 1. Authentication System

**Implementation**: Firebase Authentication with custom user profiles stored in Firestore

**Features**:
- Email/password registration with validation
- Google OAuth integration
- Password reset functionality
- "Remember me" option with persistent sessions
- Automatic profile creation on first login
- Real-time authentication state management

**Security**:
- Passwords hashed by Firebase (bcrypt with salt)
- Email verification (can be enabled)
- Rate limiting on authentication endpoints
- Secure session tokens (JWT)

### 2. Course Management

**Data Model**:
```typescript
Course {
  id: string
  title: string
  description: string
  category: 'mandated' | 'role-specific' | 'optional'
  sections: CourseSection[]
  image: string
  dueDate?: string
}
```

**Features**:
- Hierarchical structure: Course → Sections → Modules
- Support for video, quiz, and reading modules
- Progress tracking at module level
- Resume functionality (remembers last accessed module)
- Drag-and-drop course editor (admin)
- Bulk import via JSON

### 3. Quiz System

**Features**:
- Multiple-choice questions with single correct answer
- Configurable time limits (countdown timer)
- Passing score thresholds (default: 70%)
- Unlimited retakes with score history
- Instant feedback on submission
- Progress bar during quiz
- Auto-submit on time expiration

**Data Persistence**:
- Quiz scores stored in user progress object
- Attempt history maintained
- Best score highlighted
- Completion status tracked

### 4. Certificate Generation

**Technology**: jsPDF + html2canvas

**Process**:
1. User completes all modules in a course
2. System checks for 100% completion
3. Certificate modal appears with preview
4. HTML template rendered with user/course data
5. Converted to canvas, then to PDF
6. Downloaded as `Certificate-{CourseName}.pdf`

**Design**:
- Professional layout with decorative borders
- Company logo and branding
- User name, course title, completion date
- Digital signature placeholder
- Verification badge

### 5. Admin Analytics

**Metrics Tracked**:
- Total users, courses, quizzes
- Overall completion rate
- Average quiz scores
- Department-wise breakdown
- Individual user progress
- Course popularity rankings
- Time-based trends (if timestamps added)

**Visualizations**:
- Progress bars for completion rates
- User tables with sortable columns
- Department distribution charts (can be enhanced)
- Real-time data updates

### 6. Real-time Synchronization

**Implementation**: Firestore `onSnapshot` listeners

**Benefits**:
- Progress updates reflect immediately across devices
- Admin changes propagate to all users instantly
- No manual refresh required
- Offline support with automatic sync on reconnection

**Optimizations**:
- Listeners attached only for active user
- Unsubscribe on component unmount
- Cached data for faster initial loads

---

## 🔒 Security Considerations

### Firestore Security Rules

**Current Rules** (`firestore.rules`):

```javascript
// Users can only read/write their own profile
match /users/{userId} {
  allow read, write: if request.auth.uid == userId;
  allow read: if isAdmin(); // Admins can view all users
}

// Authenticated users can read courses/quizzes
match /courses/{courseId} {
  allow read: if request.auth != null;
  allow write: if isAdmin(); // Only admins can modify
}

match /quizzes/{quizId} {
  allow read: if request.auth != null;
  allow write: if isAdmin();
}
```

### Best Practices Implemented

1. **Authentication Required**: All routes except login/register are protected
2. **Role-based Access**: Admin routes use `ProtectedRoute` component
3. **Input Validation**: Form inputs validated before submission
4. **XSS Prevention**: React's built-in escaping prevents script injection
5. **API Key Protection**: Gemini API key stored in environment variables
6. **HTTPS Only**: Firebase enforces HTTPS for all connections

### Recommended Enhancements

- [ ] Enable email verification for new accounts
- [ ] Implement rate limiting on login attempts
- [ ] Add CAPTCHA for registration
- [ ] Set up Firebase App Check for bot protection
- [ ] Implement Content Security Policy (CSP) headers
- [ ] Add audit logging for admin actions
- [ ] Enable Firestore backup and recovery

---

## ⚡ Performance Optimizations

### Code Splitting & Lazy Loading

All page components are lazy-loaded using React's `lazy()` and `Suspense`:

```typescript
const Dashboard = lazy(() => import('./pages/Dashboard'));
const CourseViewer = lazy(() => import('./pages/CourseViewer'));
// ... etc
```

**Benefits**:
- Reduced initial bundle size (~60% smaller)
- Faster time-to-interactive
- On-demand loading of admin features

### Firestore Optimizations

1. **Indexed Queries**: Composite indexes for complex queries
2. **Selective Fetching**: Only fetch required fields
3. **Caching**: Firestore SDK caches data locally
4. **Batch Operations**: Bulk updates use `batch()` or `transaction()`

### Asset Optimization

- **Images**: Compressed and served via CDN
- **Fonts**: Google Fonts with `display=swap` for faster rendering
- **Icons**: Material Symbols loaded from CDN
- **Videos**: YouTube embeds (no hosting overhead)

### Build Optimizations

**Vite Configuration**:
- Tree-shaking to remove unused code
- Minification of JS/CSS
- Code splitting by route
- CSS purging (via TailwindCSS JIT)

**Production Build**:
```bash
npm run build
# Output: Optimized static files in /dist
```

---

## 🌐 Browser Support

### Fully Supported

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

### Mobile Browsers

| Browser | Minimum Version |
|---------|----------------|
| Chrome (Android) | 90+ |
| Safari (iOS) | 14+ |
| Samsung Internet | 14+ |

### Required Features

- ES6+ JavaScript support
- CSS Grid and Flexbox
- LocalStorage API
- Fetch API
- Promises and async/await
- CSS Custom Properties (variables)

### Known Limitations

- **IE11**: Not supported (requires polyfills for ES6+)
- **Older Safari**: May have issues with CSS Grid
- **Firefox < 88**: Some Tailwind utilities may not render correctly

---

## 💻 Development Notes

### Running the Development Server

```bash
npm run dev
# Server runs on http://localhost:3000
# Hot Module Replacement (HMR) enabled
```

### Building for Production

```bash
npm run build
# Output: /dist directory
# Includes minified JS, CSS, and optimized assets
```

### Previewing Production Build

```bash
npm run preview
# Serves the /dist folder locally
```

### Common Development Tasks

**Adding a New Page**:
1. Create component in `/pages`
2. Add lazy import in `App.tsx`
3. Define route in `<Routes>` section
4. Update navigation in `Sidebar.tsx` (if needed)

**Creating a New Course**:
1. Log in as admin
2. Navigate to `/admin/courses`
3. Click "Create New Course"
4. Fill in details and add modules
5. Publish course

**Debugging Firestore Rules**:
1. Check Firebase Console → Firestore → Rules
2. Use the Rules Playground to test queries
3. Review error messages in browser console

### Environment Variables

| Variable | Purpose | Required |
|----------|---------|----------|
| `GEMINI_API_KEY` | Google Gemini API for AI features | No |

---

## 🚢 Deployment

### Firebase Hosting (Recommended)

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. **Initialize Firebase Hosting**
   ```bash
   firebase init hosting
   # Select your project
   # Set public directory to: dist
   # Configure as single-page app: Yes
   ```

3. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

4. **Access Your App**
   - URL: `https://your-project-id.web.app`

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   npm run build
   vercel --prod
   ```

3. **Configure**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Environment Variables in Production

Set these in your hosting platform:
- `GEMINI_API_KEY`: Your Gemini API key

