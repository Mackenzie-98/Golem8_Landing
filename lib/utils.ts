import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Función para obtener la ruta correcta de assets
 * Compatible con GitHub Pages usando variables de entorno automáticas
 */
export function getAssetPath(path: string): string {
  // Asegurarse de que la ruta comience con /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  // actions/configure-pages@v5 automáticamente inyecta estas variables
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || ''
  
  // Retornar la ruta completa
  return `${basePath}${normalizedPath}`
}
