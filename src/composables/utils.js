import { ref, onMounted, onUnmounted } from 'vue'

export function useGetImageUrl(file_path) {
  return new URL('/images/' + file_path, import.meta.url).href;
}
export function useGetFileUrl(file_path) {
  return new URL('/files/' + file_path, import.meta.url).href;
}

export function useFormatPhone(str) {
  if (!str) return '';
  return str
    .replace(/\D/g, '')
    .replace(/^(\d{1})(\d{3})(\d{3})(\d{4})/g, "$1 ($2)-$3-$4")
    .replace(/^(\d{1})(\d{3})(\d{3})(\d*)/g, "$1 ($2)-$3-$4")
    .replace(/^(\d{1})(\d{3})(\d{1,3})/g, "$1 ($2)-$3")
    .replace(/^(\d{1})(\d{1,3})/g, "$1 ($2");
}
