import React from 'react'
import {Editor} from "@/app/documents/[documentId]/editor";
import {Toolbar} from "@/app/documents/[documentId]/toolbar";
import {Navbar} from "@/app/documents/[documentId]/navbar";
import {Room} from "@/Room";

interface DocumentIDPageProps {
    props: Promise<{ documentId: string }>
}

function DocumentIDPage({props}: DocumentIDPageProps) {
    return (
        <div className="min-h-screen bg-[#FAFBFD]">
            <div className="flex flex-col px-4 pt-2 gap-y-2 top-0 left-0 right-0 z-10 bg-[#FaFbFD] print:hidden">
                <Navbar />
                <Toolbar />
            </div>
            <div className="print:pt-0">
                <Room>
                    <Editor />
                </Room>
            </div>
        </div>)
}

export default DocumentIDPage
