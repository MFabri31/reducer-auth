import { AuthProvider } from "./contexts/AuthContext";
import PublicRoutes from "./routes/PublicRoutes";

const App = () => {
  return (
    <>
      <AuthProvider>
        <PublicRoutes />
      </AuthProvider>
    </>
  );
};

export default App;
