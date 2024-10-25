export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative flex justify-center items-center">
        <div className="w-16 h-16 border-8 border-gray-200 rounded-full animate-spin"></div>
        <div className="absolute w-16 h-16 border-8 border-t-transparent border-primary rounded-full animate-spin"></div>
      </div>
      <div className="absolute text-white text-xl">Loading...</div>
    </div>
  );
}
