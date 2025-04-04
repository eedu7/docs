import React from 'react'
import Editor from "@/app/documents/[documentId]/editor";

interface DocumentIDPageProps {
    params: Promise<{ documentId: string }>
}

export default async function DocumentIDPage({params}: DocumentIDPageProps) {

    const {documentId} = await params;

    return (<div className="min-h-screen bg-[#FAFBFD]">
        <Editor/>
    </div>)
}
