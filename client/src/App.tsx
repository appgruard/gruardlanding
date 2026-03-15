import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LandingPage from "@/pages/landing";
import NotFound from "@/pages/not-found";
import TermsAndConditions from "@/pages/legal/terms";
import PrivacyPolicy from "@/pages/legal/privacy";
import SecurityPolicy from "@/pages/legal/security";
import RefundPolicy from "@/pages/legal/refunds";
import DeliveryPolicy from "@/pages/legal/delivery";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/terminos" component={TermsAndConditions} />
      <Route path="/privacidad" component={PrivacyPolicy} />
      <Route path="/seguridad" component={SecurityPolicy} />
      <Route path="/reembolsos" component={RefundPolicy} />
      <Route path="/entrega" component={DeliveryPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
