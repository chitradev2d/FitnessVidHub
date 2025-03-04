import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Sidebar } from "@/components/layout/Sidebar";
import MuscleGroupPage from "@/pages/muscle-group";

function Router() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <main>
          <Switch>
            <Route path="/" component={MuscleGroupPage} />
            <Route path="/muscle/:id" component={MuscleGroupPage} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;