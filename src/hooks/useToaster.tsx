import { toast } from 'sonner';

import { HookToasterProps } from '@/@types';
import { Toast } from '@/components';

export function useToaster(): HookToasterProps {
  return [
    (title: string, message: string): void => {
      toast(<Toast title={title} message={message} />);
    },
  ];
}
