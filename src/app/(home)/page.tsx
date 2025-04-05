"use client";

import {Navbar} from "@/app/(home)/navbar";
import {TemplatesGallery} from "@/app/(home)/templates-gallery";
import {useQuery} from "convex/react";
import {api} from "../../../convex/_generated/api";

export default function Home() {

    const documents = useQuery(api.documents.get)

    if (documents === undefined) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <div className="flex min-h-screen flex-col">
            <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
                <Navbar/>
            </div>
            <div className="mt-16">
                <TemplatesGallery/>
                {
                    documents?.map(({title, _id}) => (
                        <span key={_id}>{title}</span>
                    ))
                }
            </div>
        </div>);
}