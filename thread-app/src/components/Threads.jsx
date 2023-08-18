import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

function ThreadsList({ threads }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="threads-container">
      {/* <h2>Posted threads will show here</h2> */}
      {threads.map((thread) => {
        const { id, title, content } = thread;
        return (
          <article key={id} className="thread">
            <div className="title">
              <h3>{title}</h3>
              <div className="thread-btn">
                <FaTrash />
                <FaEdit />
              </div>
            </div>
            <p>
              {readMore ? content : content.substring(0, 200)}
              <button onClick={() => setReadMore(!readMore)}>
                {readMore ? "show less" : "read more"}
              </button>
            </p>
          </article>
        );
      })}
    </div>
  );
}

export default ThreadsList;
