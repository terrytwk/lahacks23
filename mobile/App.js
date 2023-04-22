import { StatusBar } from "expo-status-bar";

// context
import { Provider as AuthProvider } from "./src/context/AuthContext";

// navigation
import Router from "./src/navigation/Router";

const App = () => {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <Router />
    </AuthProvider>
  );
};

export default App;
