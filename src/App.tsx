import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { PatientDashboard } from "./pages/PatientDashboard";
import { TherapistDashboard } from "./pages/TherapistDashboard";
import { Auth } from "./pages/Auth";
import { Profile } from "./pages/Profile";
import { TherapyDetail } from "./pages/TherapyDetail";
import { Reports } from "./pages/Reports";
import { Appointments } from "./pages/Appointments";
import { Chat } from "./pages/Chat";
import { KnowledgeHub } from "./pages/KnowledgeHub";
import { Settings } from "./pages/Settings";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import NotFound from "./pages/NotFound";
import { AuthRoleProvider, useAuthRole } from "./context/AuthRole";

const queryClient = new QueryClient();

type ProtectedRouteProps = {
  children: React.ReactElement;
  allowedRole: "patient" | "therapist";
};

const ProtectedRoute = ({ children, allowedRole }: ProtectedRouteProps) => {
  const { role } = useAuthRole();

  // If role not yet known (initial load), you could show a loader; for now just allow.
  if (!role) {
    return <Navigate to="/auth" replace />;
  }

  if (role !== allowedRole) {
    // Redirect to that user's home dashboard
    if (role === "patient") {
      return <Navigate to="/patient" replace />;
    }
    if (role === "therapist") {
      return <Navigate to="/therapist" replace />;
    }
  }

  return children;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthRoleProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/auth" element={<Auth />} />
                <Route
                  path="/patient"
                  element={
                    <ProtectedRoute allowedRole="patient">
                      <PatientDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/therapist"
                  element={
                    <ProtectedRoute allowedRole="therapist">
                      <TherapistDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route path="/profile" element={<Profile />} />
                <Route path="/therapy/:id" element={<TherapyDetail />} />
                <Route
                  path="/reports"
                  element={
                    <ProtectedRoute allowedRole="therapist">
                      <Reports />
                    </ProtectedRoute>
                  }
                />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/knowledge-hub" element={<KnowledgeHub />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </AuthRoleProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
