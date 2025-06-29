function App() {
  return (
    <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800">
      <span className="inline-flex shrink-0 rounded-full border border-pink-300 bg-pink-100 p-2 dark:border-pink-300/10 dark:bg-pink-400/10">
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
          className="lucide lucide-bell-icon lucide-bell size-6 stroke-pink-700 dark:stroke-pink-500"
        >
          <path d="M10.268 21a2 2 0 0 0 3.464 0" />
          <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
        </svg>
      </span>
      <div>
        <p className="text-gray-700 dark:text-gray-400">
          <span className="font-medium text-gray-950 dark:text-white">
            Tom Watson
          </span>{" "}
          mentioned you in
          <span className="font-medium text-gray-950 dark:text-white">
            Logo redesign
          </span>
        </p>
        <time className="mt-1 block text-gray-500" datetime="9:37">
          9:37am
        </time>
      </div>
    </div>
  );
}

export default App;
