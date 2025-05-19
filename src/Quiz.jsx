import { useState } from "react";
import { quizData } from "./quizData";
import LandingPage from "./components/LandingPage";
import Question from "./components/Question";
import Score from "./components/Score";

export default function Quiz() {
  let [started, setStarted] = useState(false);
  let [score, setScore] = useState(0);
  let [currQues, setCurrQues] = useState(null);
  let [selectedOption, setSelectedOption] = useState(null);

  const handleRetake = () => {
    setStarted(false);
    setScore(0);
    setCurrQues(0);
  };

  const handleStartButton = () => {
    setStarted(true);
    setCurrQues(0);
  };

  const handleNext = () => {
    if (selectedOption === null) {
      alert("please select an option");
    } else if (selectedOption === quizData[currQues].correctAnswer) {
      setScore((score) => score + 1);
      setSelectedOption(null);
      setCurrQues((currQues) => currQues + 1);
    } else if (selectedOption !== quizData[currQues].correctAnswer) {
      setSelectedOption(null);
      setCurrQues((currQues) => currQues + 1);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="w-full h-screen bg-linear-to-t from-sky-500 to-indigo-500 flex flex-wrap justify-center items-center">
        {!started && <LandingPage startQuiz={handleStartButton} />}

        {started && currQues < quizData.length && (
          <div>
            <Question
              questionData={quizData[currQues]}
              currQues={currQues}
              selectedOption={selectedOption}
              onOptionSelect={setSelectedOption}
              onNext={handleNext}
            />
          </div>
        )}
        {started && currQues === quizData.length && (
          <Score
            score={score}
            total={quizData.length}
            onRetake={handleRetake}
          />
        )}
      </div>
    </>
  );
}
