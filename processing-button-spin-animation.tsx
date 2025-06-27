function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-2">
      <button
        type="button"
        className="flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled
      >
        {/* <svg
          className="h-5 w-5 animate-spin motion-reduce:hidden"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-loader-circle-icon lucide-loader-circle animate-spin"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
        Processing...
      </button>
    </div>
  );
}

export default App;
