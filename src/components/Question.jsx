import Options from "./Options";

export default function QuestionCard({
  questionData,
  currQues,
  selectedOption,
  onOptionSelect,
  onNext,
}) {
  return (
    <div>
      <span className="text-xl font-bold">{currQues + 1}.&nbsp;</span>
      <span className="text-xl font-bold">{questionData.question}</span>
      <br />
      <br />
      <ul className="space-y-2">
        {questionData.options.map((option, i) => (
          <li key={i}>
            <Options
              option={option}
              isSelected={selectedOption === option}
              onClick={onOptionSelect}
            />
          </li>
        ))}
      </ul>
      <button
        className="rounded bg-yellow-400 mt-4 w-12 cursor-pointer"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
}
