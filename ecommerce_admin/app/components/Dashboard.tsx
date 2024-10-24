"use client";

import { useSession, signIn } from "next-auth/react";
import React from "react";

const Dashboard = () => {
    const { data: session } = useSession();
  return (
    <>
    { session ? (
            <h1>Welcome Dashboard</h1>
        ): (
            <button onClick={() => signIn("facebook")}>Sign in with Facebook</button>
        )}
    </>
  );
};

export default Dashboard;