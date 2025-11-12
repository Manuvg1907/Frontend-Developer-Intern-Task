import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ title: '', content: '' });
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState('');
  const [profile, setProfile] = useState({});
  const [editingProfile, setEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({ firstName: '', lastName: '', bio: '', phone: '', profilePicture: '' });
  const [activeTab, setActiveTab] = useState('notes');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return router.replace('/login');
    
    axios.get('http://localhost:5000/api/users/profile', {
      headers: { Authorization: 'Bearer ' + token }
    })
    .then(res => {
      setProfile(res.data);
      setProfileData({
        firstName: res.data.firstName || '',
        lastName: res.data.lastName || '',
        bio: res.data.bio || '',
        phone: res.data.phone || '',
        profilePicture: res.data.profilePicture || ''
      });
    })
    .catch(err => console.error('Failed to load profile'));
    
    axios.get('http://localhost:5000/api/notes', {
      headers: { Authorization: 'Bearer ' + token }
    })
    .then(res => setNotes(res.data))
    .catch(() => setNotes([]));
  }, []);

  const refreshProfile = () => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/api/users/profile', {
      headers: { Authorization: 'Bearer ' + token }
    })
    .then(res => {
      setProfile(res.data);
      setProfileData({
        firstName: res.data.firstName || '',
        lastName: res.data.lastName || '',
        bio: res.data.bio || '',
        phone: res.data.phone || '',
        profilePicture: res.data.profilePicture || ''
      });
    })
    .catch(err => console.error('Failed to load profile'));
  };

  const refresh = () => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/api/notes', {
      headers: { Authorization: 'Bearer ' + token }
    })
    .then(res => setNotes(res.data))
    .catch(() => setNotes([]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      if (editing) {
        await axios.put(`http://localhost:5000/api/notes/${editing}`, note, {
          headers: { Authorization: 'Bearer ' + token }
        });
        setEditing(null);
      } else {
        await axios.post('http://localhost:5000/api/notes', note, {
          headers: { Authorization: 'Bearer ' + token }
        });
      }
      setNote({ title: '', content: '' });
      refresh();
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  const handleDeleteNote = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`, {
        headers: { Authorization: 'Bearer ' + token }
      });
      refresh();
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.put('http://localhost:5000/api/users/profile', profileData, {
        headers: { Authorization: 'Bearer ' + token }
      });
      setEditingProfile(false);
      refreshProfile();
      alert('Profile updated!');
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  const handleDeleteProfile = async () => {
    if (confirm('Delete your account? This cannot be undone.')) {
      const token = localStorage.getItem('token');
      try {
        await axios.delete('http://localhost:5000/api/users/profile', {
          headers: { Authorization: 'Bearer ' + token }
        });
        localStorage.removeItem('token');
        router.push('/register');
      } catch (err) {
        alert('Error: ' + err.message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl m-auto mt-10 p-6 bg-white shadow-2xl rounded-xl">
        <div className="flex gap-4 mb-6 border-b">
          <button
            onClick={() => setActiveTab('notes')}
            className={`px-6 py-2 font-semibold transition ${
              activeTab === 'notes'
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-600 hover:text-indigo-600'
            }`}
          >
            Notes
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-6 py-2 font-semibold transition ${
              activeTab === 'profile'
                ? 'text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-600 hover:text-indigo-600'
            }`}
          >
            Profile
          </button>
        </div>

        {activeTab === 'notes' && (
          <div>
            <h1 className="text-2xl font-bold mb-5 text-indigo-800">Notes Dashboard</h1>
            <form onSubmit={handleSubmit} className="mb-5 flex gap-2 flex-wrap">
              <input placeholder="Title" value={note.title} onChange={e => setNote({ ...note, title: e.target.value })} className="border p-2 flex-1 min-w-48 rounded" required />
              <input placeholder="Content" value={note.content} onChange={e => setNote({ ...note, content: e.target.value })} className="border p-2 flex-1 min-w-48 rounded" required />
              <button className="bg-blue-500 text-white px-3 py-1 rounded shadow hover:bg-blue-600">{editing ? 'Update' : 'Add'}</button>
            </form>
            <input type="text" placeholder="Search..." className="border p-2 mb-4 w-full rounded" value={search} onChange={e => setSearch(e.target.value)} />
            <ul>
              {notes.filter(n => n.title.toLowerCase().includes(search.toLowerCase())).map(n => (
                <li key={n._id} className="flex items-center gap-3 border-b py-2">
                  <span className="font-bold text-blue-700">{n.title}:</span> <span>{n.content}</span>
                  <button onClick={() => { setNote({ title: n.title, content: n.content }); setEditing(n._id); }} className="ml-auto text-yellow-700 hover:underline">Edit</button>
                  <button onClick={() => handleDeleteNote(n._id)} className="text-red-600 hover:underline">Delete</button>
                </li>
              ))}
            </ul>
            {notes.length === 0 && <div className="text-center text-gray-500 italic mt-6">No notes yet!</div>}
          </div>
        )}

        {activeTab === 'profile' && (
          <div>
            <h1 className="text-2xl font-bold mb-5 text-indigo-800">User Profile</h1>
            {!editingProfile ? (
              <div className="bg-gray-50 p-6 rounded-lg border">
                <div className="mb-4">
                  {profileData.profilePicture && <img src={profileData.profilePicture} alt="Profile" className="w-32 h-32 rounded-full object-cover mb-4" />}
                  <p className="mb-2"><b>Email:</b> {profile.email}</p>
                  <p className="mb-2"><b>First Name:</b> {profile.firstName || 'Not set'}</p>
                  <p className="mb-2"><b>Last Name:</b> {profile.lastName || 'Not set'}</p>
                  <p className="mb-2"><b>Bio:</b> {profile.bio || 'Not set'}</p>
                  <p className="mb-2"><b>Phone:</b> {profile.phone || 'Not set'}</p>
                  <p className="mb-4"><b>Member Since:</b> {profile.createdAt ? new Date(profile.createdAt).toLocaleDateString() : 'Unknown'}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setEditingProfile(true)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit Profile</button>
                  <button onClick={handleDeleteProfile} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete Account</button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleProfileSubmit} className="bg-gray-50 p-6 rounded-lg border">
                <div className="mb-4">
                  <label className="block mb-2 font-semibold">Profile Picture URL</label>
                  <input type="text" value={profileData.profilePicture} onChange={e => setProfileData({ ...profileData, profilePicture: e.target.value })} placeholder="https://example.com/image.jpg" className="border p-2 w-full rounded" />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-2 font-semibold">First Name</label>
                    <input type="text" value={profileData.firstName} onChange={e => setProfileData({ ...profileData, firstName: e.target.value })} className="border p-2 w-full rounded" />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">Last Name</label>
                    <input type="text" value={profileData.lastName} onChange={e => setProfileData({ ...profileData, lastName: e.target.value })} className="border p-2 w-full rounded" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-semibold">Phone</label>
                  <input type="tel" value={profileData.phone} onChange={e => setProfileData({ ...profileData, phone: e.target.value })} className="border p-2 w-full rounded" />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-semibold">Bio</label>
                  <textarea value={profileData.bio} onChange={e => setProfileData({ ...profileData, bio: e.target.value })} placeholder="Tell us about yourself..." className="border p-2 w-full rounded h-24" />
                </div>
                <div className="flex gap-2">
                  <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Save Changes</button>
                  <button type="button" onClick={() => setEditingProfile(false)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Cancel</button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </>
  );
}
