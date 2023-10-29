import { Dispatch, SetStateAction } from 'react';

export interface UseBooleanOutput {
  isValue: boolean;
  setIsValue: Dispatch<SetStateAction<boolean>>;
  setIsTrue: () => void;
  setIsFalse: () => void;
  setIsVisible: () => void;
  setIsHidden: () => void;
  toggle: () => void;
}
