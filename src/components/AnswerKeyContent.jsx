import React from 'react';
import styles from '../styles/ContentPreview.module.css';

const AnswerKeyContent = () => {
  return (
    <div className={styles.contentPreview}>
      <div className={styles.mockDocument}>
        <div className={styles.pageContainer} id="page-1">
        <div className={styles.pageNumber}>Page 1 of 2</div>
        <div className={styles.page}>
          <div className={styles.documentHeader}>
            <h1>Answer Key: Photosynthesis Quiz</h1>
            <p className={styles.subtitle}>Grade 5 Science - Teacher's Edition</p>
          </div>

          <div className={styles.section}>
            <p><strong>Total Points: 20</strong></p>
          </div>

          <div className={styles.section}>
            <h2>Part A: Multiple Choice (2 points each)</h2>

            <div className={styles.question}>
              <p><strong>1. What is the main purpose of photosynthesis?</strong></p>
              <p className={styles.correctAnswer}>✓ <strong>B) To make food for the plant</strong></p>
              <p className={styles.explanation}><em>Explanation: While photosynthesis does produce oxygen as a byproduct, the primary purpose is for plants to create glucose (food) for their own energy and growth.</em></p>
            </div>

            <div className={styles.question}>
              <p><strong>2. Which part of the plant cell is responsible for photosynthesis?</strong></p>
              <p className={styles.correctAnswer}>✓ <strong>C) Chloroplast</strong></p>
              <p className={styles.explanation}><em>Explanation: Chloroplasts contain chlorophyll and are the organelles where photosynthesis takes place.</em></p>
            </div>

            <div className={styles.question}>
              <p><strong>3. What gas do plants take in during photosynthesis?</strong></p>
              <p className={styles.correctAnswer}>✓ <strong>C) Carbon dioxide</strong></p>
              <p className={styles.explanation}><em>Explanation: Plants absorb carbon dioxide (CO₂) from the air through their stomata and use it as one of the raw materials for photosynthesis.</em></p>
            </div>

            <div className={styles.question}>
              <p><strong>4. What gives plants their green color?</strong></p>
              <p className={styles.correctAnswer}>✓ <strong>B) Chlorophyll</strong></p>
              <p className={styles.explanation}><em>Explanation: Chlorophyll is the green pigment found in chloroplasts that absorbs light energy and gives plants their characteristic green color.</em></p>
            </div>

            <div className={styles.question}>
              <p><strong>5. Which of these is NOT needed for photosynthesis?</strong></p>
              <p className={styles.correctAnswer}>✓ <strong>C) Soil nutrients</strong></p>
              <p className={styles.explanation}><em>Explanation: The three essential requirements for photosynthesis are sunlight, water, and carbon dioxide. While soil nutrients are important for overall plant health, they are not direct ingredients in the photosynthesis equation.</em></p>
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
              <p><strong>6.</strong> <strong className={styles.correctAnswer}>TRUE</strong> - Photosynthesis only happens during the day.</p>
              <p className={styles.explanation}><em>Photosynthesis requires sunlight, so it only occurs during daylight hours.</em></p>
            </div>

            <div className={styles.question}>
              <p><strong>7.</strong> <strong className={styles.correctAnswer}>FALSE</strong> - Plants use oxygen to make food.</p>
              <p className={styles.explanation}><em>Plants use carbon dioxide, water, and sunlight to make food. Oxygen is a product (waste) of photosynthesis, not an ingredient.</em></p>
            </div>

            <div className={styles.question}>
              <p><strong>8.</strong> <strong className={styles.correctAnswer}>TRUE</strong> - The roots help absorb water for photosynthesis.</p>
              <p className={styles.explanation}><em>Roots absorb water from the soil, which is then transported up to the leaves where photosynthesis occurs.</em></p>
            </div>

            <div className={styles.question}>
              <p><strong>9.</strong> <strong className={styles.correctAnswer}>TRUE</strong> - Glucose is the sugar produced during photosynthesis.</p>
              <p className={styles.explanation}><em>Glucose (C₆H₁₂O₆) is the simple sugar that plants create as food during photosynthesis.</em></p>
            </div>

            <div className={styles.question}>
              <p><strong>10.</strong> <strong className={styles.correctAnswer}>FALSE</strong> - Plants can survive without sunlight.</p>
              <p className={styles.explanation}><em>Plants need sunlight to perform photosynthesis and create food. Without sunlight, they cannot produce the energy needed to survive.</em></p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Part C: Short Answer (2 points each)</h2>

            <div className={styles.question}>
              <p><strong>11. Write the simple equation for photosynthesis.</strong></p>
              <p className={styles.correctAnswer}><strong>Answer:</strong></p>
              <p>Carbon Dioxide + Water + Sunlight → Glucose + Oxygen</p>
              <p><em>or</em></p>
              <p>6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂</p>
              <p className={styles.explanation}><em>Award full credit for either version. The simple word equation is acceptable for 5th grade.</em></p>
            </div>

            <div className={styles.question}>
              <p><strong>12. Explain why plants are important for other living things.</strong></p>
              <p className={styles.correctAnswer}><strong>Sample Answer:</strong></p>
              <p>Plants are important because they produce oxygen that animals need to breathe. They also provide food for many animals and humans. Without plants, most life on Earth could not survive.</p>
              <p className={styles.explanation}><em>Award full credit for answers mentioning: oxygen production, food source, or being the base of food chains.</em></p>
            </div>

            <div className={styles.question}>
              <p><strong>13. What would happen to a plant if it did not receive enough sunlight? Explain your answer.</strong></p>
              <p className={styles.correctAnswer}><strong>Sample Answer:</strong></p>
              <p>If a plant didn't get enough sunlight, it couldn't perform photosynthesis properly. This means it couldn't make enough food (glucose) for itself. The plant would become weak, stop growing, and eventually die because it needs energy from glucose to survive.</p>
              <p className={styles.explanation}><em>Award full credit for answers that connect: lack of sunlight → less photosynthesis → less food/energy → plant weakness or death.</em></p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Grading Rubric</h2>
            <ul>
              <li><strong>18-20 points:</strong> Excellent understanding</li>
              <li><strong>15-17 points:</strong> Good understanding</li>
              <li><strong>12-14 points:</strong> Satisfactory understanding</li>
              <li><strong>Below 12 points:</strong> Needs review and reteaching</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AnswerKeyContent;
