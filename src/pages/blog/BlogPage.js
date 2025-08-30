import React, { useState, useEffect } from "react";
import { db, storage } from "../../firebase";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";
import "./BlogPage.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogsData);
    };

    fetchBlogs();
  }, []);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove selected image
  const removeImage = () => {
    setImage(null);
    setImagePreview("");
  };

  // Add new blog
  const handleAddBlog = async (e) => {
    e.preventDefault();
    if (!title || !date || !content) {
      alert("Please fill all fields");
      return;
    }

    setUploading(true);
    let imageUrl = "";

    try {
      // Upload image if selected
      if (image) {
        const imageRef = ref(storage, `blog-images/${Date.now()}_${image.name}`);
        const snapshot = await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      // Add blog to Firestore
      await addDoc(collection(db, "blogs"), {
        title,
        date,
        content,
        imageUrl,
        createdAt: new Date().toISOString()
      });

      alert("Blog Added ✅");

      // Reset form
      setTitle("");
      setDate("");
      setContent("");
      setImage(null);
      setImagePreview("");
      setShowForm(false);
      
      // Refresh blogs list
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogsData);
    } catch (error) {
      console.error("Error adding blog: ", error);
      alert("Error adding blog. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="blog-container">
      {/* Header Section */}
      <header className="blog-header">
        <h1>Our Blog</h1>
        <p>Discover the latest insights and updates</p>
      </header>

      {/* Add Blog Button */}
      <div className="add-blog-btn-container">
        <button
          onClick={() => setShowForm(!showForm)}
          className="add-blog-btn"
          disabled={uploading}
        >
          {showForm ? "Cancel" : "➕ Add New Blog"}
        </button>
      </div>

      {/* Blog Form */}
      {showForm && (
        <form
          onSubmit={handleAddBlog}
          className="blog-form"
        >
          <h2 className="form-title">Create New Blog Post</h2>
          
          <div className="form-grid">
            <input
              type="text"
              placeholder="Blog Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
              required
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="form-input"
              required
            />
          </div>
          
          {/* Image Upload */}
          <div className="image-upload-section">
            <label className="image-upload-label">
              {imagePreview ? "Change Image" : "Upload Featured Image"}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="image-upload-input"
              />
            </label>
            
            {imagePreview && (
              <div className="image-preview-container">
                <img src={imagePreview} alt="Preview" className="image-preview" />
                <button type="button" onClick={removeImage} className="remove-image-btn">
                  ×
                </button>
              </div>
            )}
          </div>
          
          <textarea
            placeholder="Blog Content (Supports HTML formatting)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-textarea"
            rows="6"
            required
          ></textarea>
          
          <button
            type="submit"
            className="submit-btn"
            disabled={uploading}
          >
            {uploading ? "Publishing..." : "Publish Blog"}
          </button>
        </form>
      )}

      {/* Blog List */}
      <section className="blog-list-section">
        <h2 className="section-title">All Blog Posts</h2>
        
        {blogs.length > 0 ? (
          <div className="blog-grid">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="blog-card"
              >
                {blog.imageUrl && (
                  <div className="blog-image-container">
                    <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
                  </div>
                )}
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="blog-title">{blog.title}</h3>
                    <span className="blog-date">{blog.date}</span>
                  </div>
                  <div 
                    className="blog-preview" 
                    dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 120) + "..." }}
                  ></div>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="read-more-link"
                  >
                    Continue Reading →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <h3>No blog posts yet</h3>
            <p>Be the first to share your thoughts and insights!</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogPage;