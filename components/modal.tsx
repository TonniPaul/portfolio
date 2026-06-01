'use client';

import {
  Close,
  Content,
  DialogOverlay,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dialog';
import { ReactNode, useImperativeHandle, useRef, useState } from 'react';

import { cn } from '@/lib/utils';
import Show from './show';
import SvgIcon from './svg-icon';

interface IModalProps {
  trigger?: ReactNode;
  children: ReactNode | ((close: () => void) => ReactNode);
  hideCloseButton?: boolean;
  onClose?: () => void;
  disableEscapeDown?: boolean;
  disableOutsideClick?: boolean;
  className?: string;
  bounce?: boolean;
}

export type ModalRefActions = {
  open: () => void;
  close: () => void;
};

const Modal = (
  props: IModalProps & { ref?: React.RefObject<ModalRefActions | null> }
) => {
  const {
    trigger,
    children,
    hideCloseButton,
    onClose,
    disableEscapeDown,
    disableOutsideClick,
    className,
    ref,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    onClose?.();
    setIsOpen(false);
  };

  // expose methods to parent through the provided ref
  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: closeModal,
  }));

  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      {trigger && <Trigger asChild>{trigger}</Trigger>}
      <Portal>
        <DialogOverlay
          className={cn(
            'fixed inset-0 z-60 flex flex-col bg-primary/10 dark:bg-white/40 backdrop-blur-sm'
          )}
        >
          <Show when={!hideCloseButton}>
            <Close className="bg-white mx-auto mt-4 grid h-10 w-10 place-items-center rounded-full border-2">
              <SvgIcon
                name="close"
                onClick={closeModal}
                className="h-6 w-6 text-primary"
              />
            </Close>
          </Show>

          <Content
            ref={contentRef}
            onPointerDownOutside={(e) =>
              disableOutsideClick && e.preventDefault()
            }
            onOpenAutoFocus={(e) => e.preventDefault()}
            onEscapeKeyDown={(e) => disableEscapeDown && e.preventDefault()}
            className={cn(
              'mt-4 flex-1 overflow-y-auto rounded-t-3xl bg-background  shadow-a-base data-[state=open]:animate-slide-in-from-bottom data-[state=closed]:animate-slide-out-to-bottom outline-none py-7',
              className
            )}
          >
            {typeof children === 'function' ? children(closeModal) : children}
          </Content>
        </DialogOverlay>
      </Portal>
    </Root>
  );
};

export default Modal;
