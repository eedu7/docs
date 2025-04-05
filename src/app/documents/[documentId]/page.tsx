import React from 'react'
import {Editor} from "@/app/documents/[documentId]/editor";
import {Toolbar} from "@/app/documents/[documentId]/toolbar";
import {Navbar} from "@/app/documents/[documentId]/navbar";

interface DocumentIDPageProps {
    props: Promise<{ documentId: string }>
}

function DocumentIDPage({props}: DocumentIDPageProps) {
    return (
        <div className="min-h-screen bg-[#FAFBFD]">
            <Navbar />
            <Toolbar />
            <Editor />
        </div>)
}

export default DocumentIDPage
