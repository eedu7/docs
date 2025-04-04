import React from 'react'
import {Editor} from "@/app/documents/[documentId]/editor";

interface DocumentIDPageProps {
    props: Promise<{ documentId: string }>
}

function DocumentIDPage({props}: DocumentIDPageProps) {
    return (<div><Editor/></div>)
}

export default DocumentIDPage
