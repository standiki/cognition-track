import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";

function SingleThread({ thread, handleReadMore }) {
  return (
    <div className="overlay">
      <div className="container">
        <button onClick={handleReadMore} className="back-btn">
          <MdOutlineArrowBack />
          back
        </button>
        <div className="thread-content">
          <h1>{thread.title}</h1>
          <p>{thread.content}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleThread;
