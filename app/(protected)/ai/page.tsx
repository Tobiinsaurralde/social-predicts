"use client";

import AiChat from "@/components/pages/AiChat";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function AiChatPage() {
    return (
        <ProtectedRoute>
            <AiChat />
        </ProtectedRoute>
    );
}
