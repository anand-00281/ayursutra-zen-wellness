import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/patient" element={<PatientDashboard />} />
              <Route path="/therapist" element={<TherapistDashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/therapy/:id" element={<TherapyDetail />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/knowledge-hub" element={<KnowledgeHub />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
