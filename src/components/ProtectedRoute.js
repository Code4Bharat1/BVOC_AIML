"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Loader2 } from "lucide-react";

export default function ProtectedRoute({
  children,
  role = null, 
}) {
  const { user, isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    //  Not logged in
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    //  Role-based access
    if (role && user?.role !== role) {
      // Redirect based on actual role
      if (user?.role === "SUPER_ADMIN") {
        router.push("/admin");
      } else if (user?.role === "COUNSELLOR") {
        router.push("/counsellor");
      } else if(user?.role === "ADMISSION"){
        router.push("/admissioner");
      }else{
        router.push("/start");
      }
    }
  }, [isAuthenticated, user, loading, role, router]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-emerald-50 to-white">
        <Loader2 size={40} className="animate-spin text-emerald-600" />
      </div>
    );
  }

  //  Block render until auth resolved
  if (!isAuthenticated) {
    return null;
  }

  //  Block render if role mismatch
  if (role && user?.role !== role) {
    return null;
  }

  //  Authorized
  return <>{children}</>;
}
  