"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    // Implement your sign-up logic here
    // For simplicity, let's just add the new user to the JSON Server
    await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, fullname, email, password, balance: 0 }),
    });

    // After signing up, you can redirect to the sign-in page or any other page
    router.push("/sign-in");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white md:border rounded-md md:shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
      <label className="block mb-4">
        Username:
        <div className="p-3 border rounded my-3">
          <input
            type="text"
            className="form-input mt-1 block w-full rounded-md outline-none border-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </label>
      <label className="block mb-4">
        Fullname:
        <div className="p-3 border rounded my-3">
          <input
            type="text"
            className="form-input mt-1 block w-full rounded-md outline-none border-none"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
      </label>
      <label className="block mb-4">
        Email:
        <div className="p-3 border rounded my-3">
          <input
            type="email"
            className="form-input mt-1 block w-full rounded-md outline-none border-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </label>
      <label className="block mb-4">
        Password:
        <div className="p-3 border rounded my-3">
          <input
            type="password"
            className="form-input mt-1 block w-full rounded-md outline-none border-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </label>
      <button
        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
      <p className="mt-4 text-gray-600">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-blue-500">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Signup;
