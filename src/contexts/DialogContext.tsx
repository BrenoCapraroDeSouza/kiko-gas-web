import { createContext, PropsWithChildren, useMemo, useState } from 'react';

import { DialogContextProps, DialogInfoProps, DialogVariant } from '@/@types';
import { Dialog } from '@/components';

export const DialogContext = createContext({} as DialogContextProps);

export function DialogProvider({ children }: Required<PropsWithChildren>) {
  const [dialogInfo, setDialogInfo] = useState<DialogInfoProps>(
    {} as DialogInfoProps,
  );

  function handleConfirmDialog(): void {
    setDialogInfo({} as DialogInfoProps);
  }

  function handleCloseDialog(): void {
    setDialogInfo({} as DialogInfoProps);
  }

  function handleOpenDialog(info: DialogInfoProps): void {
    setDialogInfo(info);
  }

  const advertises: Record<DialogVariant, string> = useMemo(
    () => ({
      client: `Tem certeza que deseja excluir o cliente ${dialogInfo?.name}? Essa ação não poderá ser revertida.`,
      cylinder: `Tem certeza que deseja excluir o botijão de gás ${dialogInfo?.name}? Essa ação não poderá ser revertida.`,
    }),
    [dialogInfo],
  );

  const isOpen = !!dialogInfo?.id;
  const advertise = advertises[dialogInfo?.variant];

  return (
    <DialogContext.Provider value={{ handleOpen: handleOpenDialog }}>
      {children}

      <Dialog
        isOpen={isOpen}
        advertise={advertise}
        onClose={handleCloseDialog}
        onAccept={handleConfirmDialog}
      />
    </DialogContext.Provider>
  );
}
