import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const base = '/test_exports//'

function prefixPublicAssetUrls() {
  const basePath = base.replace(/\/$/, '')
  const assetBase = `${basePath}/assets/`
  const doubleAssetBase = `${basePath}${assetBase}`

  const prefixAssets = (source) =>
    source.replaceAll('/assets/', assetBase).replaceAll(doubleAssetBase, assetBase)

  return {
    name: 'prefix-public-asset-urls',
    generateBundle(_, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type === 'chunk') {
          file.code = prefixAssets(file.code)
        }

        if (file.type === 'asset' && typeof file.source === 'string') {
          file.source = prefixAssets(file.source)
        }
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), prefixPublicAssetUrls()],

  base,
})
