'use client'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import Placeholder from '@tiptap/extension-placeholder'
import TextStyle from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { use, useEffect } from 'react'
import {
    FaBold,
    FaCode,
    FaCodeBranch,
    FaItalic,
    FaListOl,
    FaListUl,
    FaParagraph,
    FaQuoteLeft,
    FaRedo,
    FaStrikethrough,
    FaUndo
} from 'react-icons/fa'

interface TextEditorProps {
    content?: string
    onContentChange?: (content: string) => void
}

const TextEditor = ({ content, onContentChange }: TextEditorProps) => {
    const editor = useEditor({
        extensions: [
            Color.configure({ types: [TextStyle.name, ListItem.name] }),
            TextStyle.configure(),
            StarterKit.configure({
                bulletList: {
                    keepMarks: true,
                    keepAttributes: false
                },
                orderedList: {
                    keepMarks: true,
                    keepAttributes: false
                }
            }),
            Placeholder.configure({
                emptyEditorClass: 'is-editor-empty',
                emptyNodeClass: 'my-custom-is-empty-class',
                placeholder: 'Write something amazing...'
            })
        ],
        content,
        onUpdate: ({ editor }) => {
            onContentChange?.(editor.getHTML())
        }
    })
    return (
        <div className='border rounded-md min-h-[50vh]'>
            {editor && (
                <div className='flex items-center gap-2 flex-wrap p-3 rounded-t-md border-b'>
                    <button
                        type='button'
                        onClick={() =>
                            editor.chain().focus().toggleBold().run()
                        }
                        disabled={
                            !editor.can().chain().focus().toggleBold().run()
                        }
                        className={`menu-editor ${
                            editor.isActive('bold') ? 'active' : ''
                        }`}>
                        <FaBold />
                    </button>
                    <button
                        type='button'
                        onClick={() =>
                            editor.chain().focus().toggleItalic().run()
                        }
                        disabled={
                            !editor.can().chain().focus().toggleItalic().run()
                        }
                        className={`menu-editor ${
                            editor.isActive('italic') ? 'active' : ''
                        }`}>
                        <FaItalic />
                    </button>
                    <button
                        type='button'
                        onClick={() =>
                            editor.chain().focus().toggleStrike().run()
                        }
                        disabled={
                            !editor.can().chain().focus().toggleStrike().run()
                        }
                        className={`menu-editor ${
                            editor.isActive('strike') ? 'active' : ''
                        }`}>
                        <FaStrikethrough />
                    </button>
                    <button
                        type='button'
                        onClick={() =>
                            editor.chain().focus().toggleCode().run()
                        }
                        disabled={
                            !editor.can().chain().focus().toggleCode().run()
                        }
                        className={`menu-editor ${
                            editor.isActive('code') ? 'active' : ''
                        }`}>
                        <FaCode />
                    </button>
                    <button
                        type='button'
                        onClick={() =>
                            editor.chain().focus().setParagraph().run()
                        }
                        className={`menu-editor ${
                            editor.isActive('paragraph') ? 'active' : ''
                        }`}>
                        <FaParagraph />
                    </button>
                    <button
                        type='button'
                        onClick={() =>
                            editor
                                .chain()
                                .focus()
                                .toggleHeading({ level: 1 })
                                .run()
                        }
                        className={`menu-editor ${
                            editor.isActive('heading', { level: 1 })
                                ? 'is-active'
                                : ''
                        }`}>
                        H1
                    </button>
                    <button
                        type='button'
                        onClick={() =>
                            editor
                                .chain()
                                .focus()
                                .toggleHeading({ level: 2 })
                                .run()
                        }
                        className={`menu-editor ${
                            editor.isActive('heading', { level: 2 })
                                ? 'is-active'
                                : ''
                        }`}>
                        H2
                    </button>
                    <button
                        type='button'
                        onClick={() =>
                            editor
                                .chain()
                                .focus()
                                .toggleHeading({ level: 3 })
                                .run()
                        }
                        className={`menu-editor ${
                            editor.isActive('heading', { level: 3 })
                                ? 'is-active'
                                : ''
                        }`}>
                        H3
                    </button>

                    <button
                        type='button'
                        onClick={() =>
                            editor.chain().focus().toggleBulletList().run()
                        }
                        className={`menu-editor ${
                            editor.isActive('bulletList') ? 'active' : ''
                        }`}>
                        <FaListUl />
                    </button>
                    <button
                        type='button'
                        onClick={() =>
                            editor.chain().focus().toggleOrderedList().run()
                        }
                        className={`menu-editor ${
                            editor.isActive('orderedList') ? 'active' : ''
                        }`}>
                        <FaListOl />
                    </button>
                    <button
                        type='button'
                        onClick={() =>
                            editor.chain().focus().toggleCodeBlock().run()
                        }
                        className={`menu-editor ${
                            editor.isActive('codeBlock') ? 'active' : ''
                        }`}>
                        <FaCodeBranch />
                    </button>
                    <button
                        type='button'
                        onClick={() =>
                            editor.chain().focus().toggleBlockquote().run()
                        }
                        className={`menu-editor ${
                            editor.isActive('blockquote') ? 'active' : ''
                        }`}>
                        <FaQuoteLeft />
                    </button>
                    <button
                        type='button'
                        onClick={() => editor.chain().focus().undo().run()}
                        disabled={!editor.can().chain().focus().undo().run()}
                        className={`menu-editor`}>
                        <FaUndo />
                    </button>
                    <button
                        type='button'
                        onClick={() => editor.chain().focus().redo().run()}
                        disabled={!editor.can().chain().focus().redo().run()}
                        className={`menu-editor`}>
                        <FaRedo />
                    </button>
                    <input
                        type='color'
                        name=''
                        id=''
                        onChange={e => {
                            editor
                                .chain()
                                .focus()
                                .setColor(e.target.value)
                                .run()
                        }}
                    />
                </div>
            )}
            <EditorContent editor={editor} />
        </div>
    )
}

export default TextEditor
