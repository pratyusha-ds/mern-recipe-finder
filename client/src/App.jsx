import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Registerpage from "./pages/Registerpage";
import Loginpage from "./pages/Loginpage";
import Landingpage from "./pages/Landingpage";
import Homepage from "./pages/Homepage";
import Logout from "./components/Logout";
import Privateroute from "./components/Privateroute";
import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landingpage />} />
        <Route
          path="/home"
          element={
            <Privateroute>
              <Homepage />
            </Privateroute>
          }
        />

        <Route
          path="/register"
          element={
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 2,
              }}
            >
              <Registerpage />
            </motion.div>
          }
        />
        <Route
          path="/login"
          element={
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.2,
              }}
            >
              <Loginpage />
            </motion.div>
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
