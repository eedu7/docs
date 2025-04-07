import type {Metadata} from "next";
import {Inter} from "next/font/google"
import {NuqsAdapter} from "nuqs/adapters/next/app";
import {ConvexClientProvider} from "@/components/ConvexClientProvider";
import {Toaster} from "@/components/ui/sonner";
import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-tiptap/styles.css";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"]
})


export const metadata: Metadata = {
    title: "Docs", description: "Created by eedu7 and @codewithantonio",
    applicationName: "Docs",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<html lang="en">
        <body
            className={`${inter.className}`}
        >
        <NuqsAdapter>
            <ConvexClientProvider>
                {children}
                <Toaster/>
            </ConvexClientProvider>
        </NuqsAdapter>
        </body>
        </html>);
}
