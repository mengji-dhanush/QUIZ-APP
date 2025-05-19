export default function Options({ option, isSelected, onClick }) {
  return (
    <button
      onClick={() => onClick(option)}
      className={`w-full px-4 py-2 border rounded cursor-pointer ${
        isSelected
          ? "bg-blue-500 text-white"
          : "bg-white text-black border-gray-300"
      }`}
    >
      {option}
    </button>
  );
}
