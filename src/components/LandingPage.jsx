export default function LandingPage({ startQuiz }) {
  return (
    <div>
      <h1 className="w-full text-6xl font-bold text-white h-32">QUIZZIE</h1>
      <div className="flex justify-center items-center">
        <button
          onClick={startQuiz}
          className="rounded border-2 bg-purple-900 w-40 text-xl font-semibold text-white border-black cursor-pointer"
        >
          click to get started
        </button>
      </div>
    </div>
  );
}
