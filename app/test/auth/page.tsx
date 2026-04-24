"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function DebugSession() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session) return;
    console.log(session)
  }, [session]);


  return (
    <pre className="fixed bottom-4 right-4 bg-black text-green-400 text-xs p-3 rounded max-w-sm overflow-auto">
      {JSON.stringify({ status, session }, null, 2)}
    </pre>
  );
}
