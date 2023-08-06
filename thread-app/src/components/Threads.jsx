import React from "react";

function ThreadsList({ threads }) {
  return (
    <div className="threads">
      {/* <h2>Posted threads will show here</h2> */}
      {threads.map((thread) => {
        const { id, title, content } = thread;
        return (
          <article key={id} className="thread">
            <h3>{title}</h3>
            <p>{content}</p>
          </article>
        );
      })}
    </div>
  );
}

export default ThreadsList;
