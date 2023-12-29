import React from "react";

function CreateThread({
  title,
  content,
  handleSubmit,
  handleTitleChange,
  handleContentChange,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title..."
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        name="postContent"
        id="postContent"
        placeholder="full story... "
        spellCheck="false"
        value={content}
        onChange={handleContentChange}
      />
      <button type="submit" className="btn-submit">
        post
      </button>
    </form>
  );
}

export default CreateThread;
