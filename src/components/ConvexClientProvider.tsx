"use client";

import {ReactNode} from "react";
import {ConvexReactClient, Authenticated, Unauthenticated, AuthLoading} from "convex/react";
import {ConvexProviderWithClerk} from "convex/react-clerk";
import {ClerkProvider, useAuth, SignIn} from "@clerk/nextjs";
import {FullscreenLoader} from "@/components/fullscreen-loader";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({children}: { children: ReactNode }) {
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk
                useAuth={useAuth}
                client={convex}
            >
                <Authenticated>
                    {children}
                </Authenticated>
                <Unauthenticated>
                    <div className="flex items-center justify-center min-h-screen">
                        <SignIn routing="hash" />
                    </div>
                </Unauthenticated>
                <AuthLoading>
                    <FullscreenLoader label="Auth loading..." />
                </AuthLoading>
            </ConvexProviderWithClerk>;
        </ClerkProvider>)
}