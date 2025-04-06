import React from 'react'
import {auth} from "@clerk/nextjs/server";

import {Id} from "../../../../convex/_generated/dataModel";
import {DocumentPage} from "@/app/documents/[documentId]/documents";
import {preloadQuery} from "convex/nextjs";
import {api} from "../../../../convex/_generated/api";

interface DocumentIDPageProps {
    props: Promise<{ documentId: Id<"documents"> }>
}

async function DocumentIDPage({ props }: DocumentIDPageProps) {

    const {documentId} = await props;

    const { getToken } = await auth()
    const token = await getToken({template: "convex"}) ?? undefined;

    if (!token) throw new Error("Unauthorized");

    const preloadedDocument = await preloadQuery(
        api.documents.getById,
        { id: documentId },
        { token }
    )

    return (
        <DocumentPage
            preloadedDocument={preloadedDocument}
        />
    )
}

export default DocumentIDPage
