import React from 'react';
import { IoClose, IoDocumentText, IoCheckmarkCircle, IoBook, IoClipboard } from 'react-icons/io5';
import styles from '../styles/AddDocumentModal.module.css';

const AddDocumentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const documentTypes = [
    {
      id: 'worksheet',
      title: 'Worksheet',
      description: 'Practice exercises and activities for students',
      icon: <IoClipboard />
    },
    {
      id: 'quiz',
      title: 'Quiz',
      description: 'Assessment with multiple choice and short answer questions',
      icon: <IoCheckmarkCircle />
    },
    {
      id: 'lesson-plan',
      title: 'Lesson Plan',
      description: 'Detailed teaching plan with objectives and activities',
      icon: <IoBook />
    },
    {
      id: 'answer-key',
      title: 'Answer Key',
      description: 'Solutions and explanations for worksheets and quizzes',
      icon: <IoDocumentText />
    },
    {
      id: 'study-guide',
      title: 'Study Guide',
      description: 'Comprehensive review material for exam preparation',
      icon: <IoBook />
    },
    {
      id: 'presentation',
      title: 'Presentation',
      description: 'Slide deck for classroom instruction',
      icon: <IoDocumentText />
    }
  ];

  const handleSelectType = (typeId) => {
    console.log('Selected document type:', typeId);
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Add Related Document</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <IoClose />
          </button>
        </div>

        <div className={styles.modalBody}>
          <p className={styles.modalDescription}>
            Select the type of material you'd like to create
          </p>

          <div className={styles.documentTypeGrid}>
            {documentTypes.map((type) => (
              <div
                key={type.id}
                className={styles.documentTypeCard}
                onClick={() => handleSelectType(type.id)}
              >
                <div className={styles.cardIcon}>{type.icon}</div>
                <div className={styles.cardContent}>
                  <h3>{type.title}</h3>
                  <p>{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDocumentModal;
