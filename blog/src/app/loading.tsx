export default function Loading() {
  return (
    <>
      <div className="bg-white shadow-md rounded p-4 animate-pulse space-y-2">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="mt-4 flex space-x-2">
          <div className="h-10 bg-gray-300 rounded w-20"></div>
          <div className="h-10 bg-gray-300 rounded w-20"></div>
          <div className="h-10 bg-gray-300 rounded w-20"></div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded p-4 animate-pulse space-y-2">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="mt-4 flex space-x-2">
          <div className="h-10 bg-gray-300 rounded w-20"></div>
          <div className="h-10 bg-gray-300 rounded w-20"></div>
          <div className="h-10 bg-gray-300 rounded w-20"></div>
        </div>
      </div>
    </>
  );
}
