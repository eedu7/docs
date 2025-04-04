import React from 'react'
import {Editor} from "@/app/documents/[documentId]/editor";
import {Toolbar} from "@/app/documents/[documentId]/toolbar";

interface DocumentIDPageProps {
    props: Promise<{ documentId: string }>
}

function DocumentIDPage({props}: DocumentIDPageProps) {
    return (<div className="min-h-screen bg-[#FAFBFD]">
        <Toolbar/>
        <Editor/></div>)
}

export default DocumentIDPage
