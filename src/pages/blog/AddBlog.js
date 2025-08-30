import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, doc } from "firebase/firestore"; // ✅ added 'doc'

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "blogs"), {
        title,
        date,
        content,
      });
      alert("Blog added successfully!");
      setTitle("");
      setDate("");
      setContent("");
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", margin: "5px 0" }}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", margin: "5px 0" }}
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", margin: "5px 0" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
