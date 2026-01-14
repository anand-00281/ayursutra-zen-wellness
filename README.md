# 🌿 AyurSutra - Digital Panchakarma Management

A modern, full-stack web application for managing Ayurvedic Panchakarma therapies. Features include role-based dashboards for patients and therapists, comprehensive clinic analytics, real-time appointment scheduling, and a beautiful responsive UI built with React and TypeScript.

## ✨ Features

### 🔐 Authentication & Role Management

- **Dual Role System**: Separate authentication flows for Patients and Therapists
- **Role-Based Access Control**: Secure route protection ensuring users only access their designated dashboards
- **Session Management**: In-memory authentication context with user profile management
- **Profile Management**: User avatar with initials, name display, and profile settings

### 👥 Patient Dashboard

- **Appointment Management**: View and manage therapy appointments with detailed schedules
- **Wellness Tracking**: Real-time recovery progress visualization with progress bars
- **Digital Journal**: Personal wellness journal to record daily experiences and observations
- **Rewards System**: Gamification features with rewards and achievements
- **Knowledge Hub**: Access to Ayurvedic articles, therapy guides, and wellness tips
- **Real-time Chat**: Direct messaging with therapists
- **Wellness Score**: Comprehensive health metrics including sleep quality, energy levels, and stress tracking

### 🏥 Therapist Dashboard

- **Daily Schedule Management**: View and manage today's patient appointments
- **Room Allocation**: Real-time therapy room occupancy tracking
- **Workload Monitoring**: Visual charts showing daily patient flow distribution
- **Patient Progress Tracking**: Monitor individual patient therapy timelines and progress
- **Quick Actions**: Fast access to scheduling, patient management, and emergency protocols
- **Performance Metrics**: Success rate tracking and session completion statistics

### 📊 Clinic Reports & Analytics (Therapist Only)

- **Monthly Summary**: Comprehensive overview of total patients, revenue, satisfaction scores, and therapy completion rates
- **Recovery Trends**: Visual charts tracking patient recovery rates over time
- **Therapy Distribution**: Pie charts showing popular therapy types and their usage
- **Revenue Analytics**: Revenue vs expenses tracking with trend analysis
- **Room Occupancy**: Real-time therapy room utilization metrics
- **Top Performers**: Leaderboard of top-performing therapists with ratings and session counts
- **Patient Feedback**: Detailed feedback table with ratings and reviews
- **Export Capabilities**: Download reports in various formats

### 🎨 User Interface

- **Responsive Design**: Seamlessly works on desktop, tablet, and mobile devices
- **Modern UI**: Built with Tailwind CSS and Shadcn UI components
- **Smooth Animations**: Framer Motion powered transitions and entrance animations
- **Beautiful Charts**: Interactive data visualizations using Recharts
- **Theme Support**: Custom Ayurvedic-inspired color palette with healing gradients
- **Loading States**: Smooth loading animations and skeleton screens

### 🔧 Technical Features

- **Type-Safe Development**: Full TypeScript support for better code quality
- **Component Library**: Reusable UI components built on Radix UI primitives
- **State Management**: React Query for efficient data fetching and caching
- **Route Protection**: Secure navigation with role-based access control
- **Error Handling**: Comprehensive error handling with user-friendly notifications
- **Form Validation**: Robust form handling with React Hook Form and Zod

## 🛠️ Tech Stack

### Frontend

- **React 18.3.1** - Modern React with latest features
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 7.3.1** - Fast build tool and development server
- **React Router DOM 6.30.1** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Shadcn UI** - Beautiful component library built on Radix UI
- **Framer Motion 12.23.15** - Animation library
- **Recharts 2.15.4** - Composable charting library
- **React Query 5.83.0** - Data fetching and state management
- **React Hook Form 7.61.1** - Form state management
- **Zod 3.25.76** - Schema validation
- **Lucide React 0.462.0** - Beautiful icon library
- **Sonner 1.7.4** - Toast notifications

### UI Components

- **Radix UI** - Accessible component primitives
  - Dialog, Dropdown Menu, Tabs, Toast, Tooltip, Avatar, and more
- **Tailwind CSS Animate** - Animation utilities
- **Class Variance Authority** - Component variant management

## 📁 Project Structure

```
AyurSutra/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/            # Images and media files
│   │   └── ayurveda-hero.jpg
│   ├── components/         # Reusable components
│   │   ├── ui/            # Shadcn UI components
│   │   ├── Navbar.tsx     # Navigation bar
│   │   ├── Footer.tsx     # Footer component
│   │   ├── NotificationDropdown.tsx
│   │   ├── PanchakarmaTimeline.tsx
│   │   └── RewardsCard.tsx
│   ├── context/           # React contexts
│   │   └── AuthRole.tsx   # Authentication context
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   │   └── utils.ts
│   ├── pages/             # Page components
│   │   ├── Landing.tsx    # Home page
│   │   ├── Auth.tsx       # Login/Signup
│   │   ├── PatientDashboard.tsx
│   │   ├── TherapistDashboard.tsx
│   │   ├── Reports.tsx    # Analytics dashboard
│   │   ├── Appointments.tsx
│   │   ├── Chat.tsx
│   │   ├── KnowledgeHub.tsx
│   │   ├── Profile.tsx
│   │   ├── Settings.tsx
│   │   ├── TherapyDetail.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** or **pnpm** package manager

### Installation

1. **Clone the repository**

```bash
git clone <YOUR_REPOSITORY_URL>
cd AyurSutra
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Access the application**

Open your browser and navigate to:
- **Frontend**: `http://localhost:5173` (default Vite port)

## 📱 Usage

### Authentication Flow

1. **Landing Page**: Visit the home page (`/`) to see the marketing/landing page
2. **Registration/Login**: Click "Register as Patient" or "Login as Therapist" to navigate to `/auth`
3. **Role Selection**: Choose your role (Patient or Therapist) using the toggle
4. **Sign Up/Login**: Fill in the form and submit
5. **Dashboard Access**: You'll be redirected to your respective dashboard based on your role

### Patient Features

- **View Dashboard**: Access your personalized patient dashboard at `/patient`
- **Manage Appointments**: Navigate to `/appointments` to view and schedule therapy sessions
- **Chat with Therapists**: Use `/chat` for direct messaging
- **Explore Knowledge Hub**: Visit `/knowledge-hub` for Ayurvedic articles and guides
- **Track Progress**: Monitor your recovery progress and wellness score on the dashboard
- **Update Profile**: Access `/profile` to manage your personal information

### Therapist Features

- **View Dashboard**: Access your therapist dashboard at `/therapist`
- **View Reports**: Navigate to `/reports` for comprehensive clinic analytics
- **Manage Schedule**: View today's patient schedule and room allocations
- **Monitor Performance**: Track success rates and patient recovery trends
- **Access Analytics**: View detailed charts and metrics in the Reports section

### Navigation

- **Navbar**: 
  - When logged out: Logo, Login, Sign Up buttons
  - When logged in: Profile avatar with dropdown menu (Dashboard, Profile, Reports, Logout)
  - Therapists see an additional "Reports" button in the navbar

## 🔒 Route Protection

The application implements role-based route protection:

- **`/patient`**: Only accessible to users with `patient` role
- **`/therapist`**: Only accessible to users with `therapist` role  
- **`/reports`**: Only accessible to users with `therapist` role
- **Unauthorized Access**: Users are automatically redirected to their appropriate dashboard or `/auth`

## 🎨 Available Routes

### Public Routes
- `/` - Landing page
- `/auth` - Authentication page (Login/Signup)

### Protected Routes (Patient)
- `/patient` - Patient dashboard
- `/appointments` - Appointment management
- `/chat` - Messaging interface
- `/knowledge-hub` - Educational content
- `/profile` - User profile
- `/settings` - Application settings
- `/therapy/:id` - Therapy details

### Protected Routes (Therapist)
- `/therapist` - Therapist dashboard
- `/reports` - Clinic analytics and reports
- `/profile` - User profile
- `/settings` - Application settings

## 🚀 Deployment

### Build for Production

```bash
# Build the application
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist/` directory, ready for deployment to any static hosting service like:

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to deploy
- **AWS S3 + CloudFront**: Upload `dist` folder to S3 bucket
- **Any Static Host**: Upload the `dist` folder contents

### Environment Variables

Currently, the application uses in-memory authentication. For production deployment with a backend API, you may need to configure:

- API endpoint URLs
- Authentication tokens
- Environment-specific configurations

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- **Radix UI** - For accessible component primitives
- **Shadcn UI** - For beautiful component library
- **Tailwind CSS** - For utility-first styling
- **Recharts** - For data visualization
- **Framer Motion** - For smooth animations
- **React Query** - For efficient data fetching
- **Lucide** - For beautiful icons

## 📧 Support

If you have any questions or need help, please open an issue in the repository.

---

Built with ❤️ for the Ayurvedic wellness community
