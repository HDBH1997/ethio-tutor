"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function registerUser() {
    if (!name || !email) {
      alert("Please enter both name and email.");
      return;
    }

    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      alert("User registered!");

      setName("");
      setEmail("");

      // Reload page so the new student appears immediately
      window.location.reload();
    } else {
      alert("Registration failed.");
    }
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">
        Register
      </h2>

      <div className="flex flex-col gap-3 max-w-md mb-10">
        <input
          className="border p-2 rounded"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="bg-black text-white p-2 rounded"
          onClick={registerUser}
        >
          Register
        </button>
      </div>
    </>
  );
}