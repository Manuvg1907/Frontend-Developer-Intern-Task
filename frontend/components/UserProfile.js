import { useState, useEffect } from 'react';

export default function UserProfile() {
    const [profile, setProfile] = useState({ username: '' });

    useEffect(() => {
        const user = localStorage.getItem('user');
        setProfile(user ? JSON.parse(user) : {});
    }, []);

    return (
        <div className="border p-4 my-3 bg-white text-black rounded">
            <h2 className="font-bold text-lg mb-2">Profile</h2>
            <p>Username: {profile.username}</p>
        </div>
    );
}
