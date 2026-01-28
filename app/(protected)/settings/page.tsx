"use client";

import Settings from "@/components/pages/Settings";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function SettingsPage() {
    return (
        <ProtectedRoute>
            <Settings />
        </ProtectedRoute>
    );
}
