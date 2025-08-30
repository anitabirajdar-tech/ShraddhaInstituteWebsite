import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./blogStyles.css";

const BlogPostPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, "posts", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setBlog({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!blog) {
    return <div className="not-found">Blog post not found</div>;
  }

  return (
    <div className="blog-post-page">
      <div className="container">
        <article className="blog-article">
          <h1>{blog.title}</h1>
          {blog.imageUrl && (
            <img src={blog.imageUrl} alt={blog.title} className="featured-image" />
          )}
          <div className="blog-meta">
            <span className="date">
              {blog.createdAt && new Date(blog.createdAt.toDate()).toLocaleDateString()}
            </span>
          </div>
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;
