export default function LoadingProduct() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      <p className="text-gray-500 mt-4">Lade Produkte...</p>
    </div>
  );
}