import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import app from '../firebase';

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [content, setContent] = useState({});
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchContent();
    }
  }, [user]);

  const fetchContent = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, 'site', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContent(docSnap.data());
      }
    } catch (err) {
      setError('Failed to fetch content');
    }
    setLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError('Login failed');
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const handleContentChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await setDoc(doc(db, 'site', 'main'), content);
      alert('Content updated!');
    } catch (err) {
      setError('Failed to save content');
    }
    setLoading(false);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    try {
      const storageRef = ref(storage, `site-images/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
      setContent({ ...content, mainImage: url });
      alert('Image uploaded!');
    } catch (err) {
      setError('Image upload failed');
    }
    setLoading(false);
  };

  if (!user) {
    return (
      <div className="admin-login">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button type="submit" disabled={loading}>Login</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{color:'red'}}>{error}</p>}
      <div className="content-editor">
        <h3>Edit Website Content</h3>
        <input name="siteTitle" value={content.siteTitle || ''} onChange={handleContentChange} placeholder="Site Title" />
        <textarea name="siteDescription" value={content.siteDescription || ''} onChange={handleContentChange} placeholder="Site Description" />
        <button onClick={handleSave} disabled={loading}>Save Content</button>
      </div>
      <div className="image-uploader">
        <h3>Upload Main Image</h3>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {imageUrl && <img src={imageUrl} alt="Main" style={{maxWidth:'200px'}} />}
      </div>
    </div>
  );
}

export default AdminDashboard;
