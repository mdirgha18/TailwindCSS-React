
function App() {
  return (
    <form className="p-4 space-y-4">
      <fieldset className="border p-4 rounded">
        <legend className="text-lg font-semibold mb-2">
          Notification Preferences{" "}
        </legend>
        <div className="flex items-center space-x-2 mb-2">
          <input type="radio" name="notifications" value="custom" id="custom" />
          <label htmlFor="custom">Custom</label>
        </div>
        <fieldset className="border p-2 rounded opacity-50">
          <p className="text-sm text-gray-500">
            Custom options here (disabled)
          </p>
        </fieldset>
        <div className="flex items-center space-x-2 mt-4">
          <input
            type="radio"
            name="notifications"
            value="everything"
            id="everything"
          />
          <label htmlFor="everything">Everything</label>
        </div>
      </fieldset>
    </form>
  );
}

export default App;
