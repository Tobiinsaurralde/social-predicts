"use client";

import Home from "@/components/pages/Home";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function HomePage() {
    return (
        <ProtectedRoute>
            <Home />
        </ProtectedRoute>
    );
}
