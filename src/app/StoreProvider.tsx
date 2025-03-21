'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { appStore, AppStore } from '../utils/appStore'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = appStore
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}