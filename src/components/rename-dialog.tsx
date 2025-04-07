"use client";

import React from 'react'

import {Id} from "../../convex/_generated/dataModel";
import {useMutation} from "convex/react";
import {api} from "../../convex/_generated/api";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";


interface RenameDialogProps {
    documentId: Id<"documents">;
    children: React.ReactNode;
    initialTitle: string;
}

export const RenameDialog = ({documentId, children, initialTitle}: RenameDialogProps) => {

    const update = useMutation(api.documents.updateById);
    const [isUpdating, setIsUpdating] = React.useState(false);

    const [title, setTitle] = React.useState(initialTitle);
    const [open, setOpen] = React.useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsUpdating(true);
        update({
            id: documentId,
            title: title.trim() || "Untitled"
        })
            .then(() => setOpen(false))
            .catch(() => toast.error("Something went wrong"))
            .then(() => {
                toast.success("Document renamed");
            })
            .finally(() => {
                setIsUpdating(false);
                setOpen(false);
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent
                onClick={(e) => e.stopPropagation()}
            >
                <form onSubmit={onSubmit}>
                    <DialogHeader>
                        <DialogTitle>Rename document</DialogTitle>
                        <DialogDescription>Enter a new name for this document</DialogDescription>
                    </DialogHeader>
                    <div className="my-4">
                        <Input
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Document name"
                            onClick={e => e.stopPropagation()}
                        />
                    </div>
                    <DialogFooter>
                        <Button
                            type="button"
                            variant="ghost"
                            disabled={isUpdating}
                            onClick={e => {
                                e.stopPropagation();
                                setOpen(false);
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={isUpdating}
                            onClick={e => {
                                    e.stopPropagation()
                                }
                            }
                        >
                            Save
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
