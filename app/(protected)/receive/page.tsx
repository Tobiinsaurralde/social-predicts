"use client";

import Receive from "@/components/pages/Receive";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function ReceivePage() {
    return (
        <ProtectedRoute>
            <Receive />
        </ProtectedRoute>
    );
}
