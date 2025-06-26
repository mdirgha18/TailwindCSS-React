
function App() {
  return (
    <nav className="flex justify-center space-x-4">
      <a
        href="/dashboard"
        className="font-medium rounded-lg px-3 py-2 text-gray-700 hover: bg-gray-100 hover:text-gray-900"
      >
        Home
      </a>
      <a
        href="/team"
        className="font-medium rounded-lg px-3 py-2 text-gray-700 hover: bg-gray-100 hover:text-gray-900"
      >
        Team
      </a>
      <a
        href="/projects"
        className="font-medium rounded-lg px-3 py-2 text-gray-700 hover: bg-gray-100 hover:text-gray-900"
      >
        Projects
      </a>
      <a
        href="/reports"
        className="font-medium rounded-lg px-3 py-2 text-gray-700 hover: bg-gray-100 hover:text-gray-900"
      >
        Reports
      </a>
    </nav>
  );
}

export default App;
