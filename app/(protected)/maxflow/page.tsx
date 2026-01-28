"use client";

import MaxFlow from "@/components/pages/MaxFlow";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function MaxFlowPage() {
    return (
        <ProtectedRoute>
            <MaxFlow />
        </ProtectedRoute>
    );
}
