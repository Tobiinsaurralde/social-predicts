"use client";

import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export function useLocation() {
    const pathname = usePathname();
    const router = useRouter();

    const setLocation = useCallback((to: string, options?: { replace?: boolean }) => {
        if (options?.replace) {
            router.replace(to);
        } else {
            router.push(to);
        }
    }, [router]);

    return [pathname, setLocation] as const;
}

export function Link({ href, children, ...props }: any) {
    return (
        <NextLink href={href} {...props}>
            {children}
        </NextLink>
    );
}

export const useRoute = (pattern: string) => {
    const pathname = usePathname();
    // Basic exact match for now
    const match = pathname === pattern;
    return [match, params(pattern, pathname)];
};

// Helper for params
const params = (pattern: string, path: string) => {
    // simplified
    return null;
}

export function Switch({ children }: any) { return <>{children}</>; }
export function Route({ children }: any) { return <>{children}</>; }
