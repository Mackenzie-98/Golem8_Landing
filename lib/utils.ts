import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Función para obtener la ruta correcta de assets
 * Compatible con GitHub Pages usando variables de entorno determinísticas
 */
export function getAssetPath(path: string): string {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${prefix}${path.startsWith('/') ? path : `/${path}`}`
}
