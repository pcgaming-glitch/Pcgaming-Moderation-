"use client";

import { useState } from "react";
import SettingsMenu from "./SettingsMenu";

export default function SettingsButton() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "absolute", top: 20, right: 20, zIndex: 999 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          fontSize: 28,
          background: "none",
          border: "none",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        ⚙️
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 0,
            background: "#111",
            padding: 20,
            borderRadius: 10,
            boxShadow: "0 0 15px rgba(0,0,0,0.5)",
            color: "#fff"
          }}
        >
          <SettingsMenu />
        </div>
      )}
    </div>
  );
}
