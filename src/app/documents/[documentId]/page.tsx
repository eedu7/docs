import React from 'react'
import {auth} from "@clerk/nextjs/server";

import {Id} from "../../../../convex/_generated/dataModel";
import {DocumentPage} from "@/app/documents/[documentId]/document";
import {preloadQuery} from "convex/nextjs";
import {api} from "../../../../convex/_generated/api";

interface DocumentIDPageProps {
    params: Promise<{ documentId: Id<"documents"> }>
}

async function DocumentIDPage({ params }: DocumentIDPageProps) {

    const { documentId } = await params;

    const { getToken } = await auth();
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
