import React from 'react'
import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="h-screen pt-20 mb-1">
  <div className="max-w-sm mx-auto px-3 py-6">
    <div className="bg-base-300 rounded-xl p-5 space-y-6">
      <div className="text-center mb-9">
        <h1 className="text-xl font-semibold ">Profile</h1>
        <p className=" text-sm ">Your profile information</p>
      </div>

      {/* avatar upload section */}
      <div className="flex flex-col items-center gap-3 mb-5">
        <div className="relative">
          <img
            src={selectedImg || authUser.profilePic || "/avatar.png"}
            alt="Profile"
            className="size-24 rounded-full object-cover border-4"
          />
          <label
            htmlFor="avatar-upload"
            className={`
              absolute bottom-0 right-0 
              bg-base-content hover:scale-105
              p-1.5 rounded-full cursor-pointer 
              transition-all duration-200
              ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
            `}
          >
            <Camera className="w-4 h-4 text-base-200" />
            <input
              type="file"
              id="avatar-upload"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={isUpdatingProfile}
            />
          </label>
        </div>
        <p className="text-xs text-zinc-400 text-center">
          {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
        </p>
      </div>

      <div className="space-y-5">
        <div className="space-y-1.5">
          <div className="text-sm text-zinc-400 flex items-center gap-2">
            <User className="w-4 h-4" />
            Full Name
          </div>
          <p className="px-4 py-2 bg-base-200 rounded-lg border text-sm">{authUser?.fullName}</p>
        </div>

        <div className="space-y-1.5">
          <div className="text-sm text-zinc-400 flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email Address
          </div>
          <p className="px-4 py-2 bg-base-200 rounded-lg border text-sm">{authUser?.email}</p>
        </div>
      </div>

      <div className="mt-5 bg-base-300 rounded-xl p-4">
        <h2 className="text-base font-medium mb-3">Account Information</h2>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between py-2 border-b border-zinc-700">
            <span>Member Since</span>
            <span>{authUser.createdAt?.split("T")[0]}</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span>Account Status</span>
            <span className="text-green-500">Active</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};
export default ProfilePage;
