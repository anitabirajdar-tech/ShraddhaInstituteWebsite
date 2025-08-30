import React, { useState, useRef } from "react";
import { db, storage } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const BlogUpload = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // rich text HTML
  const [featuredImage, setFeaturedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const quillRef = useRef(null);

  // Handle featured image selection
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFeaturedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Upload image to Firebase Storage
  const uploadImageToStorage = async (file, path) => {
    const imageRef = ref(storage, path);
    const snapshot = await uploadBytes(imageRef, file);
    return await getDownloadURL(snapshot.ref);
  };

  // Custom image handler for ReactQuill
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        try {
          const imageUrl = await uploadImageToStorage(file, `blog-images/${Date.now()}-${file.name}`);
          const quill = quillRef.current.getEditor();
          const range = quill.getSelection();
          quill.insertEmbed(range.index, 'image', imageUrl);
        } catch (error) {
          console.error('Error uploading image:', error);
          alert('Failed to upload image');
        }
      }
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("Please enter title and content");
      return;
    }

    try {
      setLoading(true);
      
      let featuredImageUrl = "";
      if (featuredImage) {
        featuredImageUrl = await uploadImageToStorage(
          featuredImage, 
          `blog-featured/${Date.now()}-${featuredImage.name}`
        );
      }

      await addDoc(collection(db, "blogs"), {
        title,
        content, // HTML saved
        featuredImage: featuredImageUrl,
        createdAt: serverTimestamp(),
      });
      
      setTitle("");
      setContent("");
      setFeaturedImage(null);
      setImagePreview("");
      alert("Blog uploaded successfully!");
    } catch (error) {
      console.error("Error uploading blog: ", error);
      alert("Failed to upload blog");
    } finally {
      setLoading(false);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
    handlers: {
      image: imageHandler,
    },
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">✍️ Write a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        {/* Featured Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Featured Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            className="w-full p-2 border rounded"
          />
          {imagePreview && (
            <div className="mt-2">
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="max-w-xs h-32 object-cover rounded border"
              />
            </div>
          )}
        </div>
        
        <ReactQuill
          ref={quillRef}
          value={content}
          onChange={setContent}
          modules={modules}
          placeholder="Write your blog here... Use the image button in toolbar to add images within content"
          className="mb-4 h-60"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Blog"}
        </button>
      </form>
    </div>
  );
};

export default BlogUpload;
