import { Dispatch, SetStateAction } from 'react';

export type ModalProps = {
  isModalActive: boolean;
  handleCancel: () => void;
  handleClose: () => void;
  title?: string;
  message?: string;
  icon?: boolean;
  firstPassword?: string;
  firstAccessToken?: string;
  setFirstAccessToken: Dispatch<SetStateAction<string>>;
};
