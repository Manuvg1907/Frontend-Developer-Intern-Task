import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

export default function Profile() {
  const [profile, setProfile] = useState({});
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return router.push("/login");
    axios.get("http://localhost:5000/api/users/profile", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setProfile(res.data)).catch(err => setError("Failed to load profile."));
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-sm mx-auto mt-10">
        <h2 className="text-xl font-bold mb-4">Profile</h2>
        {error ? <div className="bg-red-100 text-red-700 p-2 rounded">{error}</div> :
          <div>
            <div><b>Email:</b> {profile.email}</div>
          </div>
        }
      </div>
    </>
  );
}
