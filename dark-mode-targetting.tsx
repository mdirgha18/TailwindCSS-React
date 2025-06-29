
function App() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
      <div>
        <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
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
            className="lucide lucide-square-pen-icon lucide-square-pen h-6 w-6 stroke-white"
          >
            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
          </svg>
        </span>
      </div>
      <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">
        Writes upside-down
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
        The Zero Gravity Pen can be used to write in any orientation, including
        upside-down. It even works in outer space.
      </p>
    </div>
  );
}

export default App;

// icon svg copied from lucide icons
