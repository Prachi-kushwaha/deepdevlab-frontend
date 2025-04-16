"use client";

import React from "react";
import { Editor } from "@tiptap/react";
import { useCallback } from "react";

type Props = {
  editor: Editor | null;
};

export default function Tiptapeditor({ editor }: Props) {
  const toggleBold = useCallback(() => {
    editor?.chain().focus().toggleBold().run();
  }, [editor]);

  const toggleItalic = useCallback(() => {
    editor?.chain().focus().toggleItalic().run();
  }, [editor]);

  const toggleHeading = useCallback(
    (level: 1 | 2 | 3) => {
      editor?.chain().focus().toggleHeading({ level }).run();
    },
    [editor]
  );

  const toggleCode = useCallback(() => {
    editor?.chain().focus().insertContent({
      type: 'codeBlock',
      attrs: { language: 'js' },
      content: [{ type: 'text', text: 'const x = 42;' }],
    }).run();
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="flex items-center justify-between border-b mb-4 pb-2">
      <div className="flex gap-2 text-sm">
     
      <button
        onClick={toggleBold}
        className="px-2 py-1 rounded bg-black text-white hover:bg-gray-800"
      >
        Bold
      </button>
      <button
        onClick={toggleItalic}
        className="px-2 py-1 rounded bg-black text-white hover:bg-gray-800"
      >
        Italic
      </button>
      <button
        onClick={() => toggleHeading(1)}
        className="px-2 py-1 rounded bg-black text-white hover:bg-gray-800"
      >
        H1
      </button>
      <button
        onClick={() => toggleHeading(2)}
        className="px-2 py-1 rounded bg-black text-white hover:bg-gray-800"
      >
        H2
      </button>
      <button
        onClick={toggleCode}
        className="px-2 py-1 rounded bg-black text-white hover:bg-gray-800"
      >
        Code
      </button>
      <input
        type="file"
        accept="image/*"
        hidden
        id="imageUpload"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file || !editor) return;

          const reader = new FileReader();
          reader.onload = () => {
            editor
              .chain()
              .focus()
              .setImage({ src: reader.result as string })
              .run();
          };
          reader.readAsDataURL(file); // preview
        }}
      />
      <label
        htmlFor="imageUpload"
        className="px-2 py-1 rounded bg-black text-white cursor-pointer hover:bg-gray-800"
      >
        Upload Image
      </label>

      </div>

      <div className="">
        <button type="submit" className="hover:bg-gray-800 px-2 py-1 rounded"
        >
            Publish
        </button>
      </div>
    </div>
  );
}
