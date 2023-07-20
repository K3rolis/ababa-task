import React, { ReactNode } from 'react';
import styles from './SubmitButton.module.css';

type Props = {
  children: ReactNode;
};

const Submit = ({ children }: Props) => {
  return (
    <button className={styles.button} type="submit">
      {children}
    </button>
  );
};

export default Submit;
