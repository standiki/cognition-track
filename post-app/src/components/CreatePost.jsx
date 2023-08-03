import React from "react";

function CreatePost() {
  return (
    <form>
      <input type="text" placeholder="title..." />
      <textarea
        name="postContent"
        id="postContent"
        placeholder="full story... "
        spellCheck="false"
      />
      <button type="submit" className="btn-submit">
        post
      </button>
    </form>
  );
}

export default CreatePost;
