import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { FaTrash, FaEdit } from "react-icons/fa";

function SingleThread({ thread, handleReadMore }) {
  return (
    <div className="overlay">
      <div className="overlay-container">
        <button onClick={handleReadMore} className="back-btn">
          <MdOutlineArrowBack />
          back
        </button>
        <div className="thread-content">
          <div className="heading thread-heading">
            <h1>{thread.title}</h1>
            <div className="icons">
              <button>
                <FaEdit />
              </button>
              <button>
                <FaTrash />
              </button>
            </div>
          </div>
          <p>{thread.content}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleThread;
