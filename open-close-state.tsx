function App() {
  return (
    <details className="border border-gray-300 rounded p-4 open:bg-gray-100 transition">
      <summary className="text-sm leading-6 font-semibold text-gray-900 select-none cursor-pointer">
        Why do they call it Ovaltine?
      </summary>
      <div className="mt-3 text-sm leading-6 text-gray-600">
        <p>
          The mug is round. The jar is round. They should call it Roundtine.
        </p>
      </div>
    </details>
  );
}

export default App;
