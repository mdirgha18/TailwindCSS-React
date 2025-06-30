function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <span className="inline-block bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">
          New in 2025: At Orchestration
        </span>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Automate your business with AI
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-2-2xl mx-auto">
          Connect your favourite tools, design powerful workflows, and scale
          your productivity without writing a single line of code.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition">
            Get started free
          </button>
          <button className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg shadow transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
