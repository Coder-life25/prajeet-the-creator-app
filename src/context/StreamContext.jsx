"use client";

import { createContext, useContext, useEffect, useState } from "react";

const StreamContext = createContext({});

export const useStream = () => useContext(StreamContext);

export const StreamProvider = ({ children }) => {
  const [stream, setStreamState] = useState(null);
  const [attempts, setAttempts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const savedStream = localStorage.getItem("compexStream");
      if (savedStream) setStreamState(savedStream);

      const savedAttempts = localStorage.getItem("compexAttempts");
      if (savedAttempts) setAttempts(JSON.parse(savedAttempts));
    } catch (error) {
      console.error("Failed to load COMPEX local data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const setStream = (newStream) => {
    setStreamState(newStream);
    try {
      localStorage.setItem("compexStream", newStream);
    } catch (error) {
      console.error("Failed to save stream:", error);
    }
  };

  const addAttempt = (record) => {
    setAttempts((prev) => {
      const updated = [...prev, record];
      try {
        localStorage.setItem("compexAttempts", JSON.stringify(updated));
      } catch (error) {
        console.error("Failed to save attempt:", error);
      }
      return updated;
    });
  };

  const getAttempt = (attemptId) => attempts.find((a) => a.attemptId === attemptId);

  // Children are always rendered. Gating them behind `loading` here replaced
  // the server-rendered HTML of EVERY page with a spinner (useEffect never
  // runs on the server), which is what hid the site's content from crawlers.
  // Pages that depend on localStorage-backed state read `loading` themselves.
  return (
    <StreamContext.Provider value={{ stream, setStream, attempts, addAttempt, getAttempt, loading }}>
      {children}
    </StreamContext.Provider>
  );
};
