"use client";

import Pool from "@/components/pages/Pool";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function PoolPage() {
    return (
        <ProtectedRoute>
            <Pool />
        </ProtectedRoute>
    );
}
