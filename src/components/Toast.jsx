import React, { useEffect } from 'react';
import styles from '../styles/Toast.module.css';

const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className={styles.toast}>
      <span>{message}</span>
    </div>
  );
};

export default Toast;
