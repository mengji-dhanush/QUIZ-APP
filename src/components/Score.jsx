export default function Score({ score, total, onRetake }) {
  return (
    <div className="text-3xl font-bold">
      Your Score: {score}/{total}
      <br />
      <button
        onClick={onRetake}
        className="border-4 w-48 cursor-pointer border-black text-white rounded mt-4"
      >
        Retake Quiz
      </button>
    </div>
  );
}
