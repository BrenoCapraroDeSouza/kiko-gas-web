import { StorageKeyType, StorageProps } from '@/@types';

export const Storage: StorageProps = {
  setItem(key: StorageKeyType, value: string): void {
    localStorage.setItem(key, value);
  },

  getItem(key: StorageKeyType): string | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  },

  hasItem(key: StorageKeyType): boolean {
    return !!localStorage.getItem(key);
  },

  clear(): void {
    localStorage.clear();
  },
};
