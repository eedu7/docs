"use client"

import {Preloaded, usePreloadedQuery} from "convex/react";

import {Editor} from "@/app/documents/[documentId]/editor";
import {Toolbar} from "@/app/documents/[documentId]/toolbar";
import {Navbar} from "@/app/documents/[documentId]/navbar";
import {Room} from "@/Room";
import {api} from "../../../../convex/_generated/api";

interface DocumentPageProps {
    preloadedDocument: Preloaded<typeof api.documents.getById>;
}

export function DocumentPage({preloadedDocument}: DocumentPageProps) {

    const document = usePreloadedQuery(preloadedDocument);

    return (
        <Room>
            <div className="min-h-screen bg-[#FAFBFD]">
                <div className="flex flex-col px-4 pt-2 gap-y-2 top-0 left-0 right-0 z-10 bg-[#FaFbFD] print:hidden">
                    <Navbar data={document} />
                    <Toolbar />
                </div>
                <div className="print:pt-0">
                    <Editor  initialContent={document.initialContent} />
                </div>
            </div>
        </Room>
    )
}

