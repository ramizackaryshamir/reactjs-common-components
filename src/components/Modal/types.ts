import { ComponentProps } from '../types';

export interface ModalProps extends ComponentProps {
  setIsModalOpen: any;
  header?: any;
  main?: any;
}
