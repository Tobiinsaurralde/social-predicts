"use client";

import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";
// import { ProtectedRoute } from "@/components/ProtectedRoute"; // Logic might be needed here or in pages

export default function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <AppHeader />
            {children}
            <BottomNav />
        </>
    );
}
