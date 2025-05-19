import { useState } from "react";
import { quizData } from "./quizData";

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
        {!started ? (
          <div>
            <h1 className="w-full text-6xl font-bold text-white h-32">
              QUIZZIE
            </h1>
            <div className="flex justify-center items-center">
              <button
                onClick={handleStartButton}
                className="rounded border-2 bg-purple-900 w-40 text-xl font-semibold text-white border-black cursor-pointer"
              >
                click to get started
              </button>
            </div>
          </div>
        ) : null}

        {started && currQues < quizData.length && (
          <div>
            <span className="text-xl font-bold">{currQues + 1}.&nbsp;</span>
            <span className="text-xl font-bold">
              {quizData[currQues].question}
            </span>
            <br />
            <br />
            <ul className="space-y-2">
              {quizData[currQues].options.map((option, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleOptionSelect(option)}
                    className={`w-full px-4 py-2 border rounded cursor-pointer ${
                      selectedOption === option
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black border-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="rounded bg-yellow-400 mt-4 w-12 cursor-pointer"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        )}
        {started && currQues === quizData.length && (
          <div className="text-3xl font-bold">
            Your Score: {score}/{quizData.length}
            <br />
            <button
              onClick={handleRetake}
              className="border-4 w-48 cursor-pointer border-black text-white rounded mt-4 "
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </>
  );
}
