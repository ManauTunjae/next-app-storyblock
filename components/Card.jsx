export default function Card({ title, description }) {
  return (
    <div>
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md">
        <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-955">Title: {title}</h3>
        <p className="mb-4 font-normal text-gray-700">{description}</p>
      </div>
    </div>
  );
}
