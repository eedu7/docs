"use client";

import React from 'react'

import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import {Id} from "../../convex/_generated/dataModel";
import {useMutation} from "convex/react";
import {api} from "../../convex/_generated/api";
import {toast} from "sonner";
import {useRouter} from "next/navigation";


interface RemoveDialogProps {
    documentId: Id<"documents">;
    children: React.ReactNode;
    redirect?: string;
}


export default function RemoveDialog({documentId, children, redirect}: RemoveDialogProps) {

    const router = useRouter();

    const remove = useMutation(api.documents.removeById);
    const [isRemoving, setIsRemoving] = React.useState(false);


    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>This action cannot be undone. This will permanently delete your document.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={(e) => e.stopPropagation()}>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        disabled={isRemoving}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsRemoving(true);
                            remove({id: documentId})
                                .catch(() => toast.error("Something went wrong"))
                                .then(() => {
                                    toast.success("Document removed")
                                    if (redirect) router.push(redirect)
                                })
                                .finally(() => setIsRemoving(false));
                        }}
                    >
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
