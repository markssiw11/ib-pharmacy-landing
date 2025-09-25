import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// lib/apiBase.ts
// const LOCAL_API = "http://localhost:3006";
const DEV_API = "https://pos.api.dev.cxgenie.ai";
// const PROD_API = "https://pos.api.cxgenie.ai";

export function getApiBaseUrl() {
  return DEV_API;
}
