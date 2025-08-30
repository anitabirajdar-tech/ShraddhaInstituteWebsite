import React from "react";
import "./blogStyles.css";

const BlogPost = ({ blog }) => {
  return (
    <div className="blog-card">
      {blog.imageUrl && (
        <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
      )}
      <div className="blog-content">
        <h3>{blog.title}</h3>
        
        {/* ✅ Render content as HTML */}
        <div
          className="blog-text"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
        <button className="read-more">Read More</button>
      </div>
    </div>
  );
};

export default BlogPost;
