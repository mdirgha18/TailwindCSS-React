
function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-6">Flex Card layout</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 w-72">
          <h3 className="text-lg font-semibold mb-2">Card 1</h3>
          <p className="text-gray-600">This is the description for card 1</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 w-72">
          <h3 className="text-lg font-semibold mb-2">Card 2</h3>
          <p className="text-gray-600">This is the description for card 2</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 w-72">
          <h3 className="text-lg font-semibold mb-2">Card 3</h3>
          <p className="text-gray-600">This is the description for card 3</p>
        </div>
      </div>
    </div>
  );
}

export default App;

// Flex version → good for wrapping rows of cards without worrying about columns

// Grid version → perfect for consistent, responsive card grids that look clean at all sizes
