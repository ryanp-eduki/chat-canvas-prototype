import React, { useState } from 'react';
import DocumentSidebar from './DocumentSidebar';
import ButtonPalette from './ButtonPalette';
import ContentPreview from './ContentPreview';
import QuizContent from './QuizContent';
import LessonPlanContent from './LessonPlanContent';
import AnswerKeyContent from './AnswerKeyContent';
import ChatWindow from './ChatWindow';
import AddDocumentModal from './AddDocumentModal';
import styles from '../styles/ChatCanvas.module.css';

const ChatCanvas = () => {
  const [activeDocument, setActiveDocument] = useState('primary');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const documentPageCounts = {
    'primary': 4,
    'quiz': 2,
    'lesson-plan': 3,
    'answer-key': 2
  };

  const renderContent = () => {
    switch (activeDocument) {
      case 'primary':
        return <ContentPreview />;
      case 'quiz':
        return <QuizContent />;
      case 'lesson-plan':
        return <LessonPlanContent />;
      case 'answer-key':
        return <AnswerKeyContent />;
      default:
        return <ContentPreview />;
    }
  };

  return (
    <div className={styles.chatCanvas}>
      <div className={styles.mainContent}>
        <DocumentSidebar
          activeDocument={activeDocument}
          onDocumentChange={setActiveDocument}
          onAddDocument={() => setIsModalOpen(true)}
        />
        <div className={styles.canvasWrapper}>
          <ButtonPalette
            position="top"
            totalPages={documentPageCounts[activeDocument]}
          />
          {renderContent()}
        </div>
        <ChatWindow />
      </div>

      <AddDocumentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ChatCanvas;
