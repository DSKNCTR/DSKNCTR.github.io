import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { ChevronDownCircle, ChevronUpCircle } from "lucide-react";
import { lazy, Suspense } from "react";

const routes = ["/", "/about", "/experience"];

const ProfilePage = lazy(() => import("./components/ProfilePage"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const ExperiencePage = lazy(() => import("./components/ExperiencePage"));


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

  const Loading = () => (
    <div className="w-screen h-screen flex items-center justify-center bg-[#1E1E1E] text-white">
      Loading…
    </div>
  );

  return (
    <div className="w-screen relative h-screen max-h-full max-w-screen flex flex-col items-center justify-center gap-4">
      <button onClick={goPrev} disabled={currentIndex === 0} className="cursor-pointer absolute top-8 disabled:opacity-0">
        <ChevronUpCircle className="text-orange-300 mt-16" />
      </button>

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
      </Suspense>

      <button onClick={goNext} disabled={currentIndex === routes.length - 1} className="cursor-pointer absolute bottom-8 disabled:opacity-0">
        <ChevronDownCircle className="text-pink-500 mt-16" />
      </button>
    </div>
  );
}