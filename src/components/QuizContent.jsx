import React from 'react';
import styles from '../styles/ContentPreview.module.css';

const QuizContent = () => {
  return (
    <div className={styles.contentPreview}>
      <div className={styles.mockDocument}>
        <div className={styles.pageContainer} id="page-1">
        <div className={styles.pageNumber}>Page 1 of 2</div>
        <div className={styles.page}>
          <div className={styles.documentHeader}>
            <h1>Photosynthesis Quiz</h1>
            <p className={styles.subtitle}>Grade 5 Science - Assessment</p>
          </div>

          <div className={styles.section}>
            <p><strong>Name:</strong> _________________ <strong>Date:</strong> _________________</p>
            <p><strong>Total Points: 20</strong></p>
          </div>

          <div className={styles.section}>
            <h2>Part A: Multiple Choice (2 points each)</h2>

            <div className={styles.question}>
              <p><strong>1. What is the main purpose of photosynthesis?</strong></p>
              <p>A) To produce oxygen for animals</p>
              <p>B) To make food for the plant</p>
              <p>C) To absorb water from soil</p>
              <p>D) To create carbon dioxide</p>
            </div>

            <div className={styles.question}>
              <p><strong>2. Which part of the plant cell is responsible for photosynthesis?</strong></p>
              <p>A) Nucleus</p>
              <p>B) Cell wall</p>
              <p>C) Chloroplast</p>
              <p>D) Vacuole</p>
            </div>

            <div className={styles.question}>
              <p><strong>3. What gas do plants take in during photosynthesis?</strong></p>
              <p>A) Oxygen</p>
              <p>B) Nitrogen</p>
              <p>C) Carbon dioxide</p>
              <p>D) Hydrogen</p>
            </div>

            <div className={styles.question}>
              <p><strong>4. What gives plants their green color?</strong></p>
              <p>A) Water</p>
              <p>B) Chlorophyll</p>
              <p>C) Sunlight</p>
              <p>D) Soil</p>
            </div>

            <div className={styles.question}>
              <p><strong>5. Which of these is NOT needed for photosynthesis?</strong></p>
              <p>A) Sunlight</p>
              <p>B) Water</p>
              <p>C) Soil nutrients</p>
              <p>D) Carbon dioxide</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.pageContainer} id="page-2">
        <div className={styles.pageNumber}>Page 2 of 2</div>
        <div className={styles.page}>
          <div className={styles.section}>
            <h2>Part B: True or False (1 point each)</h2>

            <div className={styles.question}>
              <p><strong>6.</strong> _____ Photosynthesis only happens during the day.</p>
            </div>

            <div className={styles.question}>
              <p><strong>7.</strong> _____ Plants use oxygen to make food.</p>
            </div>

            <div className={styles.question}>
              <p><strong>8.</strong> _____ The roots help absorb water for photosynthesis.</p>
            </div>

            <div className={styles.question}>
              <p><strong>9.</strong> _____ Glucose is the sugar produced during photosynthesis.</p>
            </div>

            <div className={styles.question}>
              <p><strong>10.</strong> _____ Plants can survive without sunlight.</p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Part C: Short Answer (2 points each)</h2>

            <div className={styles.question}>
              <p><strong>11. Write the simple equation for photosynthesis.</strong></p>
              <p className={styles.answerSpace}>_________________________________________________</p>
              <p className={styles.answerSpace}>_________________________________________________</p>
            </div>

            <div className={styles.question}>
              <p><strong>12. Explain why plants are important for other living things.</strong></p>
              <p className={styles.answerSpace}>_________________________________________________</p>
              <p className={styles.answerSpace}>_________________________________________________</p>
              <p className={styles.answerSpace}>_________________________________________________</p>
            </div>

            <div className={styles.question}>
              <p><strong>13. What would happen to a plant if it did not receive enough sunlight? Explain your answer.</strong></p>
              <p className={styles.answerSpace}>_________________________________________________</p>
              <p className={styles.answerSpace}>_________________________________________________</p>
              <p className={styles.answerSpace}>_________________________________________________</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default QuizContent;
