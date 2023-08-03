import { useState, useEffect } from "react";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <section className="padding App">
      <div className="title">
        <h3>post app</h3>
      </div>
      <CreatePost />
    </section>
  );
}

export default App;
