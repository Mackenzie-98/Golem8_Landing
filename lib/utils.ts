import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Función para obtener la ruta correcta de assets
 * Maneja automáticamente el basePath para GitHub Pages
 */
export function getAssetPath(path: string): string {
  // Asegurarse de que la ruta comience con /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  // Obtener el basePath de las variables de entorno
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  
  // Retornar la ruta completa
  return `${basePath}${normalizedPath}`
}
