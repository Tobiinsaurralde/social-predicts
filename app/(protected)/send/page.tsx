"use client";

import Send from "@/components/pages/Send";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function SendPage() {
    return (
        <ProtectedRoute>
            <Send />
        </ProtectedRoute>
    );
}
