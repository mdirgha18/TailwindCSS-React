function App() {
  return (
    <fieldset>
      <legend>Published status</legend>
      <input
        id="draft"
        className="peer/draft"
        type="radio"
        name="status"
        checked
      />
      <label className="peer-checked/draft:text-sky-500">Draft</label>
      <input
        id="published"
        className="peer/published"
        type="radio"
        name="status"
      />
      <label for="published" className="peer-checked/published:text-sky-500">
        Published
      </label>
      <div className="hidden peer-checked/draft:block">
        Drafts are onlyy visible to administrators.
      </div>
      <div className="hidden peer-checked/published:block">
        Your post will be publicly visible on your site
      </div>
    </fieldset>
  );
}

export default App;
