import { memo } from 'react';
import ReactModal from 'react-modal';

import { ModalProps } from '../../@types';

function Modal(props: ModalProps) {
  const { children, isOpen, onRequestClose } = props;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnEsc
      ariaHideApp={false}
      shouldFocusAfterRender={false}
      overlayClassName='fixed z-50 inset-0 bg-overlay40 border-none'
      className='flex flex-col w-full h-screen justify-center items-center'
    >
      {children}
    </ReactModal>
  );
}

export default memo(Modal);
