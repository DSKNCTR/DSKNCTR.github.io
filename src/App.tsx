import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { ProfilePage } from "./components/ProfilePage";
import { AboutPage } from "./components/AboutPage";
import { ChevronDownCircle, ChevronUpCircle } from "lucide-react";
import { ExperiencePage } from "./components/ExperiencePage";

const routes = ["/", "/about", "/experience"];

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = routes.indexOf(location.pathname);

  const goPrev = () => {
    if (currentIndex > 0) {
      navigate(routes[currentIndex - 1]);
    }
  };

  const goNext = () => {
    if (currentIndex < routes.length - 1) {
      navigate(routes[currentIndex + 1]);
    }
  };

  return (
    <div className="w-screen relative h-screen max-h-full max-w-screen flex flex-col items-center justify-center gap-4">
      {currentIndex !== 0 && 
        <button onClick={goPrev} className="cursor-pointer absolute top-8">
          <ChevronUpCircle className="text-orange-300 mt-16" />
        </button>
      }

      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>

      {currentIndex !== routes.length - 1 && 
        <button onClick={goNext} className="cursor-pointer absolute bottom-8">
          <ChevronDownCircle className="text-pink-500 mt-16" />
        </button>
      }
    </div>
  );
}