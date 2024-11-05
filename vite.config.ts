import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import path from 'path'
import {viteMockServe} from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        UnoCSS(),
        viteMockServe({
            mockPath: './mock',
            enable: true
        }),
        AutoImport({
            include: [/\.[tj]sx?$/],
            dts: './src/auto-imports.d.ts',
            dirs: ['./src/hooks', './src/**/*'],
            imports: ['react', 'react-router-dom'],
            eslintrc: {
                enabled: true,
                filepath: './.eslintrc-auto-import.json',
                globalsPropValue: true
            }
        })
    ],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})
