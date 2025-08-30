// src/pages/blog/BlogEditor.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import "../../pages/blog/blogStyles.css";

const BlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const ref = doc(db, "posts", id);
        const snap = await getDoc(ref);
        if (!snap.exists()) return;
        const data = snap.data();
        setTitle(data.title || "");
        setExcerpt(data.excerpt || "");
        setContent(data.content || "");
      } catch (err) {
        console.error(err);
      }
    };
    load();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "posts", id), {
        title,
        excerpt,
        content,
        updatedAt: serverTimestamp(),
      });
      navigate("/blog");
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <div className="blog-container">
      <h2>Edit Post</h2>
      <form onSubmit={handleUpdate} style={{display:'grid', gap:12}}>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" style={{padding:10, borderRadius:8, border:'1px solid #ddd'}} />
        <textarea value={excerpt} onChange={(e)=>setExcerpt(e.target.value)} placeholder="Excerpt" rows={3} style={{padding:10, borderRadius:8, border:'1px solid #ddd'}} />
        <ReactQuill value={content} onChange={setContent} />
        <button type="submit" style={{background:'#ff6b1d', color:'#fff', padding:'10px 16px', border:'none', borderRadius:8}}>Save Changes</button>
      </form>
    </div>
  );
};

export default BlogEditor;
