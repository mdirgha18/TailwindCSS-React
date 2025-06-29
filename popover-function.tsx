
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <button
        popovertarget="my-popover"
        className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition"
      >
        Check for updates
      </button>

      <div
        popover="auto"
        id="my-popover"
        className="p-6 mt-4 max-w-sm rounded-lg bg-white text-gray-800 shadow-lg border border-gray-300"
      >
        <h2 className="text-lg font-semibold mb-2">Update Available</h2>
        <p className="text-sm mb-4">
          A new version of the app is available. Please update to enjoy the
          latest features and improvements.
        </p>
        <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
          Update Now
        </button>
      </div>
    </div>
  );
}

export default App;
