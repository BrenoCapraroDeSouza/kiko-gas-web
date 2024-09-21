export function getOnlyNumbers(value: string): string {
  return value.replace(/\D/g, '');
}
