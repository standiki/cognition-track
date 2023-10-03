import { useState, useEffect } from "react";
import AddThread from "./components/AddThread";
import ThreadFeed from "./components/ThreadFeed";
// import SingleThread from "./components/ViewSingleThread";

import { nanoid } from "nanoid";

function App() {
  const [threads, setThreads] = useState([]);
  const [threadTitle, setThreadTitle] = useState("");
  const [threadContent, setThreadContent] = useState("");
  const [iSEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editId, setEditId] = useState(null);

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

  // function for matching id

  // console.log(threads);

  return (
    <section className="padding App">
      <div className="title">
        <h1>Thread App</h1>
      </div>
      <AddThread
        title={threadTitle}
        content={threadContent}
        handleSubmit={handleSubmit}
        handleTitleChange={handleTitleChange}
        handleContentChange={handleContentChange}
      />
      <div>
        <ThreadFeed threads={threads} />
      </div>
    </section>
  );
}

export default App;
