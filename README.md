# Agencia LATAM Landing Page

Landing page para agencia digital especializada en PYMEs latinoamericanas.

## 🚀 Configuración para GitHub Pages

Este proyecto está configurado para ser desplegado en GitHub Pages con las rutas de assets correctas.

### Configuración Actual

- **Repositorio**: `agencia-latam-landing`
- **URL de GitHub Pages**: `https://[username].github.io/agencia-latam-landing`
- **Configuración automática**: Las rutas se ajustan automáticamente según el entorno

### Scripts disponibles

```bash
# Desarrollo local
npm run dev

# Build para producción (local)
npm run build

# Build para GitHub Pages (simula el CI)
npm run build:gh-pages

# Servir la versión de producción localmente
npm run serve

# Probar la versión completa de GitHub Pages localmente
npm run test:gh-pages
```

### Probar localmente antes del deploy

Para verificar que las rutas funcionen correctamente en GitHub Pages:

```bash
# 1. Generar el build con las configuraciones de GitHub Pages
npm run build:gh-pages

# 2. Servir localmente en el puerto 5000
npm run serve

# 3. Abrir en el navegador
open http://localhost:5000/agencia-latam-landing
```

### Configuración de assets

Las imágenes se manejan automáticamente:
- **En desarrollo**: `/assets/imagen.jpg`
- **En GitHub Pages**: `/agencia-latam-landing/assets/imagen.jpg`

Todas las referencias de imágenes usan la función `getAssetPath()` que maneja las rutas automáticamente.

### Estructura del proyecto

```
├── public/
│   ├── assets/          # Imágenes y recursos estáticos
│   └── ...
├── components/
│   ├── ui/             # Componentes de Shadcn/ui
│   └── ...
├── lib/
│   └── utils.ts        # Incluye getAssetPath()
├── memory-bank/        # Documentación del proyecto
├── next.config.mjs     # Configuración para GitHub Pages
└── .github/
    └── workflows/
        └── nextjs.yml  # Workflow de deploy automático
```

### Cambios realizados para GitHub Pages

1. **next.config.mjs**: Configurado `basePath` y `assetPrefix` dinámicos
2. **lib/utils.ts**: Agregada función `getAssetPath()` para manejar rutas
3. **Referencias de imágenes**: Actualizadas para usar `getAssetPath()`
4. **Scripts de prueba**: Agregados para validar localmente

### Deploy automático

El deploy se realiza automáticamente cuando:
- Se hace push a la rama `main`
- Se ejecuta manualmente desde GitHub Actions

### Verificación post-deploy

Después del deploy, verificar:
- [ ] La página principal carga correctamente
- [ ] Todas las imágenes se muestran (no errores 404)
- [ ] Los enlaces internos funcionan
- [ ] La navegación entre páginas funciona

### Troubleshooting

**Error 404 en imágenes:**
- Verificar que las imágenes estén en `public/assets/`
- Confirmar que se usa `getAssetPath()` en el código
- Revisar que el nombre del repositorio en `next.config.mjs` sea correcto

**Página no carga:**
- Verificar que GitHub Pages esté habilitado en el repositorio
- Confirmar que la fuente esté configurada a "GitHub Actions"
- Revisar los logs del workflow en la pestaña Actions

## 🛠 Desarrollo

### Instalación

```bash
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

### Tecnologías utilizadas

- **Framework**: Next.js 15 con App Router
- **Styling**: Tailwind CSS + Shadcn/ui
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form
- **Iconos**: Lucide React
- **Calendario**: React Day Picker v9

### Estructura de componentes

- **Componentes UI**: Basados en Shadcn/ui con customizaciones
- **Componentes de página**: Modulares y reutilizables
- **Utilidades**: Funciones helper en `lib/utils.ts` 