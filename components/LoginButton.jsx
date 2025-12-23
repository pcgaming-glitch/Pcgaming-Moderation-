"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <button
        onClick={() => signIn("discord")}
        style={{
          backgroundColor: "#5865F2",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: 8,
          fontSize: 16,
          border: "none",
          cursor: "pointer"
        }}
      >
        Login met Discord
      </button>
    );
  }

  return (
    <button
      onClick={() => signOut()}
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "12px 24px",
        borderRadius: 8,
        fontSize: 16,
        border: "none",
        cursor: "pointer"
      }}
    >
      Uitloggen ({session.user.name})
    </button>
  );
}
