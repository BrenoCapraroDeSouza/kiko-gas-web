export function getOnlyNumbers(value: string): string {
  return value.replace(/\D/g, '');
}

export function changeSemisToDots(value: string): string {
  return value.replace(/[,]/g, '.');
}

export function removeDots(value: string): string {
  return value.replace(/[.]/g, '');
}

export function removeKgSuffix(value: string): string {
  return value.replace(/Kg/g, '');
}
