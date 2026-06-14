import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // 커스텀 도메인(rest02.dreamitbiz.com)은 루트로 서빙 → base는 '/'
  base: '/',
  plugins: [react()],
})
