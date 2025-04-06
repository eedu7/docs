"use client";

import {Navbar} from "@/app/(home)/navbar";
import {TemplatesGallery} from "@/app/(home)/templates-gallery";
import {usePaginatedQuery} from "convex/react";
import {api} from "../../../convex/_generated/api";
import {DocumentsTable} from "@/app/(home)/documents-table";
import {useSearchParams} from "@/hooks/use-search-param";

export default function Home() {

    const [search] = useSearchParams();

    const {results, status, loadMore} = usePaginatedQuery(api.documents.get, { search }, {
        initialNumItems: 5
    })

    return (
        <div className="flex min-h-screen flex-col">
            <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
                <Navbar/>
            </div>
            <div className="mt-16">
                <TemplatesGallery/>
                <DocumentsTable
                    documents={results}
                    loadMore={loadMore}
                    status={status}
                />
            </div>
        </div>);
}