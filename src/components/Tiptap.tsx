"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Placeholder from "@tiptap/extension-placeholder";
import Tiptapeditor from "@/components/Tiptapeditor";
import Image from "@tiptap/extension-image";
import { lowlight } from "@/lib/Codeblocklowlight";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: false }),
      Heading.configure({ levels: [1, 2, 3] }),
      Image,
      CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: "js",
      }),
      Bold,
      Italic,
      Document,
      Paragraph,
      Text,
      Placeholder.configure({ placeholder: "Hi 👋" }),
    ],
    content: `
    <pre><code class="language-js">const hello = () => {
  console.log("world");
}</code></pre>
  `,
    autofocus: true,
    editorProps: {
      attributes: {
        class: "prose max-w-none focus:outline-none min-h-[300px]",
      },
    },
    
  });

  return (
    <div className="p-4 border rounded-md shadow-md max-w-3xl mx-auto ">
      <Tiptapeditor editor={editor} />
      <EditorContent
  editor={editor}
  className="prose dark:prose-invert max-w-full min-h-[200px] border p-4 rounded-md dark:bg-zinc-900 focus:outline-none
    [&_pre]:bg-[#1e1e1e]
    [&_pre]:text-gray-200
    [&_pre]:rounded-lg
    [&_pre]:p-4
    [&_pre]:overflow-x-auto
    [&_pre]:text-sm
    [&_code]:font-mono
    [&_code]:text-gray-100"
/>

    </div>
  );
};

export default Tiptap;
