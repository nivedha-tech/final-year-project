import React, { useState, useEffect } from "react";
import axios from "axios";

const EditProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const API_URL = "http://localhost:4000/api/v1/profile";

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("No authentication token found. Please log in again.");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(API_URL, {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });

        setProfile(res.data.profile);
        setLoading(false);
      } catch (err) {
        console.error("Profile fetch error:", err.response);
        setError(err.response?.data?.message || "Failed to load profile");
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!profile) return <p>No profile data found.</p>;

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      {success && <p className="success">{success}</p>}
      <form>
        <label>Image URL:</label>
        <input type="text" value={profile.image} readOnly />

        <label>Gender:</label>
        <input type="text" value={profile.gender} readOnly />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default EditProfile;
