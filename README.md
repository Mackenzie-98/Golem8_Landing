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

El problema del CSS en GitHub Pages suele deberse a que los archivos estáticos (incluyendo el CSS generado por Next.js) requieren el prefijo del repositorio en producción, igual que las imágenes. Ya tienes configurado correctamente el `basePath` y `assetPrefix`, pero para que el CSS cargue bien en GitHub Pages, debes asegurarte de:

1. **Acceder a la URL con el prefijo**  
   Cuando sirvas localmente, accede a:  
   ```
   http://localhost:4000/agencia-latam-landing/
   ```
   y no a la raíz (`/`), porque el CSS y los assets están bajo ese prefijo.

2. **Verifica el build en producción**  
   Haz el build con:
   ```
   NODE_ENV=production npm run build
   ```
   y luego sirve la carpeta `out` con:
   ```
   npx serve out -l 4000
   ```
   y navega a `/agencia-latam-landing/`.

3. **Asegúrate de que el nombre del repo sea EXACTO**  
   En tu `next.config.mjs` debe ser:
   ```js
   const repo = 'agencia-latam-landing'
   ```
   y en el workflow:
   ```yaml
   NEXT_PUBLIC_BASE_PATH: /agencia-latam-landing
   ```

4. **No uses rutas absolutas sin prefijo**  
   Si tienes referencias a `/assets/` o a `/static/` en tu código o HTML, deben pasar por `getAssetPath()` o usar el prefijo.

---

### ¿Por qué ocurre esto?

- El CSS generado por Next.js se sirve desde `/_next/static/css/ARCHIVO.css`, pero con `basePath` y `assetPrefix` en producción, la ruta real es `/agencia-latam-landing/_next/static/css/ARCHIVO.css`.
- Si accedes a la raíz (`/`), el navegador buscará el CSS en `/...` en vez de `/<repo>/...` y no lo encontrará.

---

### Solución rápida

- **Siempre accede a la URL con el prefijo** en local y en GitHub Pages.
- Si el problema persiste, limpia el caché del navegador o fuerza recarga (Ctrl+Shift+R).

---

### Si el problema sigue:

- Asegúrate de que el archivo `out/index.html` tenga los links CSS así:
  ```html
  <link rel="stylesheet" href="/agencia-latam-landing/_next/static/css/ARCHIVO.css" ...>
  ```
- Si ves `/assets/` o `/_next/` sin el prefijo, revisa que el build se haya hecho con `NODE_ENV=production` y que el repo esté bien escrito.

---

¿Quieres que fuerce el build y te muestre el HTML resultante para verificar que el CSS está bien referenciado? ¿O necesitas que revise algún archivo específico? 