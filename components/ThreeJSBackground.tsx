'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamicky importujeme Three.js len na klientovi
const ThreeJSBackgroundClient = dynamic(() => import('./ThreeJSBackgroundClient'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 pointer-events-none z-0" style={{ zIndex: -1 }} />
})

export default function ThreeJSBackground() {
  return <ThreeJSBackgroundClient />
} 