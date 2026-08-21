export default function Button({ text }) {
  return (
    <div className="w-fit px-4 py-2 bg-stone-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200">
      <button>{text}</button>
    </div>
  );
}
