import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/dashboard');
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                Welcome to <span className="text-cyan-200">ScalableWebApp</span>
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                A modern, secure, and scalable platform for managing your notes and profile. Create, organize, and access your information anytime, anywhere.
              </p>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => router.push('/register')}
                  className="px-8 py-3 bg-cyan-300 text-indigo-900 font-bold rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </button>
                <button
                  onClick={() => router.push('/login')}
                  className="px-8 py-3 bg-white bg-opacity-20 text-white border-2 border-white font-bold rounded-lg hover:bg-opacity-30 transition-all duration-300"
                >
                  Sign In
                </button>
              </div>
            </div>

            {/* Right Side - Features Cards */}
            <div className="space-y-4">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-white hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-3xl mb-3">📝</div>
                <h3 className="text-xl font-bold mb-2">Easy Note Management</h3>
                <p className="text-gray-100">Create, edit, and delete notes with a simple and intuitive interface.</p>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-white hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
                <p className="text-gray-100">Your data is protected with industry-standard encryption and authentication.</p>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-white hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-3xl mb-3">👤</div>
                <h3 className="text-xl font-bold mb-2">Profile Customization</h3>
                <p className="text-gray-100">Personalize your profile with photos, bio, and contact information.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 w-full">
          <svg className="w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </>
  );
}
