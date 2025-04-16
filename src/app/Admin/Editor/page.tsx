'use client';

import dynamic from 'next/dynamic';

const TiptapEditor = dynamic(() => import('@/components/Tiptap'), {
  ssr: false,
});

export default function Page() {
  return (
    <main className="p-6">
      <TiptapEditor />
    </main>
  );
}
