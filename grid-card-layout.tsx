function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-6">Grid Card Layout</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Card 1</h3>
          <p className="text-gray-600">This is the description for card 1</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Card 2</h3>
          <p className="text-gray-600">This is the description for card 2</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Card 3</h3>
          <p className="text-gray-600">This is the description for card 3</p>
        </div>
      </div>
    </div>
  );
}

export default App;
