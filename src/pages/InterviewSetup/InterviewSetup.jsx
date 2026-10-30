import Sidebar from "../../components/layout/Sidebar";
import MobileNavbar from "../../components/layout/MobileNavbar";
import { useState } from "react";
import InterviewModeCard from "../../components/ui/InterviewModeCard";
import { BookOpen, ChevronRight, ClipboardCheck } from "lucide-react";
import InterviewButtons from "../../components/ui/InterviewButtons";
const InterviewSetup = () => {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questionCount, setQuestionCount] = useState("");
  const [interviewMode, setInterviewMode] = useState("");
  const handleQuestionCount = (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 1 && Number(value) <= 20)) {
      setQuestionCount(value);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (topic === "") {
      alert("Topic cannot be empty");
      return;
    }
    if (difficulty === "") {
      alert("Please select a difficulty");
      return;
    }
    if (questionCount === "") {
      alert("Please enter the number of questions");
      return;
    }
    if(interviewMode===""){
         alert("Please select mode of interview");
      return;
    }
    const config={topic:topic,difficulty:difficulty,questionCount:Number(questionCount),interviewMode:interviewMode}
    console.log(config);                                                                            
  };
  return (
    <div className="min-h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed left-0 top-0 h-screen bg-navy">
        <Sidebar />
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <MobileNavbar />
      </div>
      <main className="md:ml-60 max-w-[1200px] px-6 py-8 font-inter">
        <form onSubmit={handleFormSubmit} className="grid gap-6">
          <p className="font-extrabold text-3xl">Setup Interview</p>
          <p>Choose your preferences to get started</p>
          <hr className="border-gray-300" />
          <div className="grid">
            <label htmlFor="interviewTopic" className="text-base font-medium">
              Topic
            </label>
            <select
              name="topic"
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
              }}
              id="interviewTopic"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-gray-500"
            >
              <option value="">Select a topic</option>
              <option value="Javascript">Javascript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C++">C++</option>
              <option value="React">React</option>
              <option value="Node.js">Node.js</option>
              <option value="Data Structures">Data Structures</option>
              <option value="Algorithms">Algorithms</option>
              <option value="Machine Learning">Machine Learning</option>
            </select>
          </div>
          <div className="grid">
            <label htmlFor="difficulty" className="text-base font-medium">
              Difficulty
            </label>
            <select
              name="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              id="difficulty"
              className="border border-gray-300 rounded-md p-2 focus:outline-none border-gray-500"
            >
              <option value="">Select a difficulty</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="noOfQuestions" className="text-base font-medium">
              Number of Questions
            </label>
            <input
              value={questionCount}
              onChange={handleQuestionCount}
              className="border border-gray-300 rounded-md p-2 focus:outline-none border-gray-500"
              type="number"
              name="noOfQuestions"
              id="noOfQuestions"
              min="1"
              max="20"
            />
          </div>

          <p className="font-medium">Interview Mode</p>
          <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
            <InterviewModeCard
              title="Practice"
              description="Practice questions at your own pace with helpful feedback."
              Icon={BookOpen}
              onSelect={() => setInterviewMode("practice")}
              selected={interviewMode === "practice"}
            />

            <InterviewModeCard
              title="Test"
              description="Simulate a real interview and review your performance."
              Icon={ClipboardCheck}
              onSelect={() => setInterviewMode("test")}
              selected={interviewMode === "test"}
            />
          </section>
          <InterviewButtons
            type="submit"
            Icon={ChevronRight}
            buttonTitle="Start Interview"
          />
        </form>
      </main>
    </div>
  );
};
export default InterviewSetup;
