export type StorageKeyType = 'token' | 'name';

export interface StorageProps {
  setItem: (key: StorageKeyType, value: string) => void;
  getItem: (key: StorageKeyType) => string | null;
  hasItem: (key: StorageKeyType) => boolean;
  clear: () => void;
}
