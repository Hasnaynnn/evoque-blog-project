'use client';
import { Editor } from "react-draft-wysiwyg"
import { EditorState, convertToRaw } from "draft-js"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import draftToHtml from 'draftjs-to-html';
import { useState } from "react"

import editorStyles from "../styles/editor.module.css"
// import toolbarOptions from "../utils/toolbarOptions";

const TextEditor = ({ setBody }) => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    // options of toolbar of editor
    const editorOptions = ["inline", "list", "textAlign"]

    let hashtagConfig = {
        trigger: '#',
        separator: ' ',
      }
    const handleChange = (state) => {
        setEditorState(state)
        const rawContentState = convertToRaw(editorState.getCurrentContent());

        const markup = draftToHtml(
            rawContentState,
            hashtagConfig,
        );
        
        //setBody(editorState.getCurrentContent().getPlainText("\u0001"))
        setBody(markup)
    }
    return (
        <>
            <Editor
                //toolbarHidden
                editorState={editorState}
                onEditorStateChange={handleChange}
                wrapperClassName={editorStyles.editor_wrapper}
                editorClassName={editorStyles.editor_class}
                toolbar={{
                    inline: {
                        inDropdown: false,
                        className: undefined,
                        component: undefined,
                        dropdownClassName: undefined,
                        options: ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript'],
                        bold: { icon: undefined, className: undefined },
                        italic: { icon: undefined, className: undefined },
                        underline: { icon: undefined, className: undefined },
                        strikethrough: { icon: undefined, className: undefined },
                        monospace: { icon: undefined, className: undefined },
                        superscript: { icon: undefined, className: undefined },
                        subscript: { icon: undefined, className: undefined },
                    },
                    blockType: {
                        inDropdown: false,
                        options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'Code'],
                        className: undefined,
                        component: undefined,
                        dropdownClassName: undefined,
                    },
                    // fontSize: {
                    //     inDropdown: false,
                    //     //icon: fontSize,
                    //     options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
                    //     className: undefined,
                    //     component: undefined,
                    //     dropdownClassName: undefined,
                    // },
                    list: { inDropdown: false },
                    textAlign: { inDropdown: false },
                    // link: { inDropdown: true },
                    // history: { inDropdown: true },
                }}
                toolbarClassName={editorStyles.toolbar_class}
                //onChange = {handleChange}
                placeholder="Enter body for blog"
            />
        </>
    )
}

export default TextEditor
