import React from 'react'
import {Editor} from "@/app/documents/[documentId]/editor";

interface DocumentIDPageProps {
    props: Promise<{ documentId: string }>
}

function DocumentIDPage({props}: DocumentIDPageProps) {
    return (<div className="min-h-screen bg-[#FAFBFD]"><Editor/></div>)
}

export default DocumentIDPage
