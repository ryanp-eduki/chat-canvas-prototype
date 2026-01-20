import React from 'react';
import ButtonPalette from './ButtonPalette';
import ContentPreview from './ContentPreview';
import styles from '../styles/ChatCanvas.module.css';

const ChatCanvas = () => {
  return (
    <div className={styles.chatCanvas}>
      <div className={styles.canvasWrapper}>
        <ButtonPalette position="top" />
        <ContentPreview />
      </div>
    </div>
  );
};

export default ChatCanvas;
