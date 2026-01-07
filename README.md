{
  "name": "vite-react-shadcn-ts",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://KashmiraLokhande.github.io/KashmiraPortfolio",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    }
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.1",
    "shadcn-ui": "^0.1.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.14",
    "@types/react-dom": "^18.2.6",
    "@vitejs/plugin-react": "^4.0.0",
    "eslint": "^8.50.0",
    "eslint-plugin-react": "^7.32.2",
    "typescript": "^5.3.0",
    "vite": "^5.2.0",
    "tailwindcss": "^3.6.0",
    "postcss": "^8.4.36",
    "autoprefixer": "^10.4.16",
    "gh-pages": "^5.1.1"
  }
}
