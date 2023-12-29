import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import SingleThread from "./ViewSingleThread";

function ThreadsList({ threads }) {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = (id) => {
    console.log(id);
    setReadMore(!readMore);
  };

  return (
    <div className="thread-container">
      {threads.map((thread) => {
        const { id, title, content } = thread;
        return (
          <article key={id} className="thread" style={{ width: "100%" }}>
            <div className="heading thread-heading">
              <button onClick={handleReadMore}>
                <h1>{title}</h1>
              </button>
              <div className="icons">
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
            <div className="clear__fix"></div>
          </article>
        );
      })}
    </div>
  );
}

export default ThreadsList;
