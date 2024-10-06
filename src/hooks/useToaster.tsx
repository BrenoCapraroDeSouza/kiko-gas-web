import { toast } from 'sonner';

import { Toast } from '@/components';

export function useToaster() {
  return [
    (title: string, message: string): void => {
      toast(<Toast title={title} message={message} />);
    },
  ];
}
