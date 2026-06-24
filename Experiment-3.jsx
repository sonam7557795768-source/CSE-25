function Experiment3() {
  return (
    <div className="container">
      <h2 id="main-heading">Welcome to JavaScript Lab</h2>

      <input
        type="text"
        id="user-input"
        placeholder="Enter new heading text"
      />

      <div className="button-group">
        <button id="btn-change-text">Change Heading</button>
        <button id="btn-bg">Change Background</button>
        <button id="btn-font">Increase Font Size</button>
        <br />
        <button id="btn-toggle">Show/Hide Paragraph</button>
        <button id="btn-reset">Reset</button>
      </div>

      <p id="description-text">
        This is a sample paragraph.
      </p>
    </div>
  );
}

export default Experiment3;
