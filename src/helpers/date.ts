import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function getCurrentDateFormatted(): string {
  return format(new Date(), "EEEE, dd 'de' MMMM", {
    locale: ptBR,
  });
}

export function formatToTraditionalDate(date: Date): string {
  return format(date, "dd/MM/yy 'às' H'h'm'm'", {
    locale: ptBR,
  });
}
