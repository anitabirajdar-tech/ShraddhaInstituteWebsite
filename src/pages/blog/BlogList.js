import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      setBlogs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchBlogs();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📖 Latest Blogs</h1>
      {blogs.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition"
            >
              {blog.featuredImage && (
                <img 
                  src={blog.featuredImage} 
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded mb-3"
                />
              )}
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-3">
                {blog.content ? blog.content.replace(/<[^>]*>/g, '').substring(0, 100) + '...' : 'No content available'}
              </p>
              <p className="text-sm text-gray-400 mb-3">
                {blog.createdAt ? new Date(blog.createdAt.toDate()).toLocaleDateString() : 'Date not available'}
              </p>
              <Link
                to={`/blog/${blog.id}`}
                className="text-blue-600 hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl text-gray-600">No blogs found</h3>
          <p className="text-gray-500">Check if blogs are being saved to the database.</p>
        </div>
      )}
    </div>
  );
}

export default BlogList;
