"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
<StoreProvider>

        {children}
</StoreProvider>
    
      </body>
      
    </html>
  );
}


// 'use client'
// import { useRef } from 'react'
// import { Provider } from 'react-redux'
// import {  appStore } from '../utils/appStore'

// export default function StoreProvider({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const storeRef = useRef<typeof appStore>(undefined)
//   if (!storeRef.current) {
//     // Create the store instance the first time this renders
//     storeRef.current = appStore
//   }

//   return <Provider store={storeRef.current}>{children}</Provider>
// }