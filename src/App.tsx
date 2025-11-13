import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import CaseStudyUIMigration from "./pages/CaseStudyUIMigration";
import CaseStudyAnalytics from "./pages/CaseStudyAnalytics";
import CaseStudyLXP from "./pages/CaseStudyLXP";
import CaseStudyCustomerSuccess from "./pages/CaseStudyCustomerSuccess";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/case-study/ui-migration" element={<CaseStudyUIMigration />} />
          <Route path="/case-study/analytics-program" element={<CaseStudyAnalytics />} />
          <Route path="/case-study/lxp-integration" element={<CaseStudyLXP />} />
          <Route path="/case-study/customer-success" element={<CaseStudyCustomerSuccess />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
