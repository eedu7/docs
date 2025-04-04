"use client";

import {EditorContent, useEditor} from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'


export const Editor = () => {

    const editor = useEditor({
        editorProps: {
            attributes: {
                style: "padding-left: 56px; padding-right: 56px;",
                class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
            }
        }, extensions: [StarterKit, TaskList, TaskItem.configure({
            nested: true
        }), Table, TableRow, TableHeader, TableCell], content: "<table>\n" +
            "          <tbody>\n" +
            "            <tr>\n" +
            "              <th>Name</th>\n" +
            "              <th colspan=\"3\">Description</th>\n" +
            "            </tr>\n" +
            "            <tr>\n" +
            "              <td>Cyndi Lauper</td>\n" +
            "              <td>Singer</td>\n" +
            "              <td>Songwriter</td>\n" +
            "              <td>Actress</td>\n" +
            "            </tr>\n" +
            "          </tbody>\n" +
            "        </table>"
    })

    return (
        <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
            <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
                <EditorContent editor={editor}/>
            </div>
        </div>)
}