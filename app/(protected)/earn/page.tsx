"use client";

import Earn from "@/components/pages/Earn";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function EarnPage() {
    return (
        <ProtectedRoute>
            <Earn />
        </ProtectedRoute>
    );
}
