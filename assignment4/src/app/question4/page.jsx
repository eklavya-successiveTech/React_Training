'use client';

import { useState } from "react";

function Password() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      alert("Submission complete");
      setPassword("");
      setConfirmPassword("");
    } else {
      alert("Please make sure your passwords match");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Password;
