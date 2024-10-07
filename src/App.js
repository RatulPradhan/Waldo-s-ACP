
import './App.css';
import LoginPrompt from './components/Pre-Login/LoginPrompt';
import ProfilePage from "./components/Profile/ProfilePage";
import Notifications from "./components/Notifications/Notifications";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPrompt />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/notifications"
          element={<Notifications />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
