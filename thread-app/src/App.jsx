import { useState, useEffect } from "react";
import AddThread from "./components/AddThread";
import Threads from "./components/Threads";

import { nanoid } from "nanoid";

function App() {
  const [threads, setThreads] = useState([]);
  const [threadTitle, setThreadTitle] = useState("");
  const [threadContent, setThreadContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!threadTitle && !threadContent) {
      // show some error && disable the 'Post' button
      console.log("Can't post empty values, submit button disabled!");
    }

    // else if () {

    //   Will later make up what to do here.

    // }
    else {
      const newThread = {
        id: nanoid(),
        title: threadTitle,
        content: threadContent,
      };
      setThreads([...threads, newThread]);
    }
    // clear the inputs
    setThreadTitle("");
    setThreadContent("");
  };

  const handleTitleChange = (e) => {
    setThreadTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setThreadContent(e.target.value);
  };

  // console.log(threads);

  return (
    <section className="padding App">
      <div className="title">
        <h3>thread app</h3>
      </div>
      <AddThread
        title={threadTitle}
        content={threadContent}
        handleSubmit={handleSubmit}
        handleTitleChange={handleTitleChange}
        handleContentChange={handleContentChange}
      />
      <div className="thread-container">
        <Threads threads={threads} />
      </div>
    </section>
  );
}

export default App;
