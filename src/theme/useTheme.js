import { useEffect, useState } from 'react'

export const PALETTES = [
  { id: 'royal', label: '로열블루', color: '#2451d6' },
  { id: 'emerald', label: '에메랄드', color: '#059669' },
  { id: 'crimson', label: '크림슨', color: '#dc2626' },
  { id: 'violet', label: '바이올렛', color: '#7c3aed' },
  { id: 'amber', label: '앰버', color: '#d97706' },
]

const MODE_KEY = 'dib-mode'
const PALETTE_KEY = 'dib-palette'

function getInitial(key, fallback) {
  if (typeof localStorage === 'undefined') return fallback
  return localStorage.getItem(key) || fallback
}

export function useTheme() {
  const [mode, setMode] = useState(() => getInitial(MODE_KEY, 'light'))
  const [palette, setPalette] = useState(() => getInitial(PALETTE_KEY, 'royal'))

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode)
    localStorage.setItem(MODE_KEY, mode)
  }, [mode])

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette)
    localStorage.setItem(PALETTE_KEY, palette)
  }, [palette])

  const toggleMode = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'))

  return { mode, toggleMode, palette, setPalette }
}
