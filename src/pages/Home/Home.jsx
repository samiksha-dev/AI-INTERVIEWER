import robotImg from "../../assets/images/ai-robot.png";
import Sidebar from "../../components/layout/Sidebar";
import MobileNavbar from "../../components/layout/MobileNavbar";
import { Sparkles, ChevronRight, RotateCcwClock } from "lucide-react";
import Card from "../../components/ui/Card";
import { useNavigate } from "react-router-dom";
import InterviewButtons from "../../components/ui/InterviewButtons";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-navy">
      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed left-0 top-0 h-screen">
        <Sidebar />
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <MobileNavbar />
      </div>

      {/* Main */}
      <main className="md:ml-60 max-w-[1200px] px-6 py-8 font-inter">
        {/* Hero */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] items-center">
          {/* LEFT */}
          <div className="min-w-0 text-white">
            {/* Welcome */}
            <div className="bg-dark-blue inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm">
              <span>Welcome Back Samiksha</span>

              <Sparkles size={14} fill="yellow" strokeWidth={0} />
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-3xl sm:text-4xl font-semibold leading-tight">
              Ace Your Next Interview with{" "}
              <span className="text-primary">AI</span>
            </h1>

            {/* Description */}
            <p className="mt-4 text-sm text-muted max-w-xl leading-relaxed">
              Get personalised questions, real-time feedback and track your
              progress.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center items-center">
            <img
              src={robotImg}
              alt="AI Interview Robot"
              className="w-full max-w-[300px] object-contain"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg text-white">
          <InterviewButtons
            buttonTitle="Start Interview"
            Icon={ChevronRight}
            received={() => navigate("/interview/setup")}
          />
          <InterviewButtons
            buttonTitle="View History"
            Icon={RotateCcwClock}
            received={() => navigate("/interview/history")}
          />
        </div>

        <Card />
      </main>
    </div>
  );
};

export default Home;
