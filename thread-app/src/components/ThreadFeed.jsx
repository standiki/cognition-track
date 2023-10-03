import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import SingleThread from "./ViewSingleThread";

function ThreadFeed({ threads }) {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = (id) => {
    setReadMore(!readMore);
  };

  return (
    <div className="thread-container">
      {threads.map((thread) => {
        const { id, title, content } = thread;
        return (
          <article key={id} className="thread" style={{ width: "100%" }}>
            <div className="thread-heading">
              <button onClick={handleReadMore}>
                <h1>{title}</h1>
              </button>
              <div className="heading-icons">
                <button>
                  <FaEdit />
                </button>
                <button>
                  <FaTrash />
                </button>
              </div>
            </div>
            <div className="thread-paragraph">
              <>
                {readMore ? (
                  <SingleThread
                    handleReadMore={handleReadMore}
                    thread={thread}
                  />
                ) : (
                  <p>{`${content.substring(0, 200)}...`}</p>
                )}
              </>
              <button className="view-thread_btn" onClick={handleReadMore}>
                View entire post
              </button>
            </div>
            <hr />
          </article>
        );
      })}
    </div>
  );
}

export default ThreadFeed;
