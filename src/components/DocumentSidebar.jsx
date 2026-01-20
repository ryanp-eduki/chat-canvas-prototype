import React from 'react';
import { IoDocumentText } from 'react-icons/io5';
import styles from '../styles/DocumentSidebar.module.css';

const DocumentSidebar = ({ activeDocument, onDocumentChange, onAddDocument }) => {

  const documents = [
    {
      id: 'primary',
      title: 'Photosynthesis Worksheet',
      type: 'Primary Document',
      pages: 4,
      status: 'completed'
    },
    {
      id: 'quiz',
      title: 'Photosynthesis Quiz',
      type: 'Quiz',
      pages: 2,
      status: 'completed'
    },
    {
      id: 'lesson-plan',
      title: 'Week 3 Lesson Plan',
      type: 'Lesson Plan',
      pages: 3,
      status: 'draft'
    },
    {
      id: 'answer-key',
      title: 'Answer Key',
      type: 'Answer Key',
      pages: 2,
      status: 'completed'
    }
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h3>Documents</h3>
        <p>Generated materials</p>
      </div>

      <div className={styles.documentList}>
        {documents.map((doc) => (
          <div
            key={doc.id}
            className={`${styles.documentItem} ${
              activeDocument === doc.id ? styles.active : ''
            }`}
            onClick={() => onDocumentChange(doc.id)}
          >
            <div className={styles.documentIcon}>
              <IoDocumentText />
            </div>

            <div className={styles.documentInfo}>
              <div className={styles.documentTitle}>{doc.title}</div>
              <div className={styles.documentMeta}>
                <span className={styles.documentType}>{doc.type}</span>
                <span className={styles.documentPages}>{doc.pages} pages</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.addDocumentSection}>
        <button
          className={styles.addButton}
          onClick={onAddDocument}
        >
          + Add Related Document
        </button>
      </div>
    </div>
  );
};

export default DocumentSidebar;
