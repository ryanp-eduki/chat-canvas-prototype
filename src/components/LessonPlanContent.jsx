import React from 'react';
import styles from '../styles/ContentPreview.module.css';

const LessonPlanContent = () => {
  return (
    <div className={styles.contentPreview}>
      <div className={styles.mockDocument}>
        <div className={styles.pageContainer} id="page-1">
        <div className={styles.pageNumber}>Page 1 of 3</div>
        <div className={styles.page}>
          <div className={styles.documentHeader}>
            <h1>Week 3 Lesson Plan: Photosynthesis</h1>
            <p className={styles.subtitle}>Grade 5 Science</p>
          </div>

          <div className={styles.section}>
            <h2>Lesson Overview</h2>
            <p><strong>Duration:</strong> 60 minutes</p>
            <p><strong>Grade Level:</strong> 5th Grade</p>
            <p><strong>Subject:</strong> Life Science</p>
            <p><strong>Topic:</strong> Photosynthesis and Plant Biology</p>
          </div>

          <div className={styles.section}>
            <h2>Learning Objectives</h2>
            <p>By the end of this lesson, students will be able to:</p>
            <ul>
              <li>Define photosynthesis and explain its importance to life on Earth</li>
              <li>Identify the key components needed for photosynthesis (sunlight, water, carbon dioxide)</li>
              <li>Describe the role of chlorophyll in the photosynthesis process</li>
              <li>Explain the products of photosynthesis (glucose and oxygen)</li>
              <li>Understand the relationship between photosynthesis and cellular respiration</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Materials Needed</h2>
            <ul>
              <li>Photosynthesis diagram poster</li>
              <li>Student worksheets (one per student)</li>
              <li>Green leaves (fresh samples)</li>
              <li>Magnifying glasses (one per group)</li>
              <li>Whiteboard and markers</li>
              <li>Video: "Photosynthesis Explained" (8 minutes)</li>
              <li>Chart paper and colored markers</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Standards Alignment</h2>
            <p><strong>NGSS:</strong> 5-LS1-1 - Support an argument that plants get the materials they need for growth chiefly from air and water.</p>
          </div>
        </div>
      </div>

      <div className={styles.pageContainer} id="page-2">
        <div className={styles.pageNumber}>Page 2 of 3</div>
        <div className={styles.page}>
          <div className={styles.section}>
            <h2>Lesson Procedure</h2>

            <h3>Introduction (10 minutes)</h3>
            <p><strong>Warm-up Activity:</strong></p>
            <ul>
              <li>Ask students: "What do plants need to survive?" Write responses on the board</li>
              <li>Show images of plants in different environments (sunny field, shaded forest, desert)</li>
              <li>Introduce the concept: "Today we'll learn how plants make their own food"</li>
            </ul>

            <h3>Direct Instruction (15 minutes)</h3>
            <p><strong>Teaching Points:</strong></p>
            <ol>
              <li><strong>What is Photosynthesis?</strong>
                <ul>
                  <li>Define: The process plants use to convert light energy into chemical energy (food)</li>
                  <li>Write equation on board: Carbon Dioxide + Water + Sunlight → Glucose + Oxygen</li>
                </ul>
              </li>
              <li><strong>Key Components:</strong>
                <ul>
                  <li>Chloroplasts - the "kitchen" of the plant cell</li>
                  <li>Chlorophyll - the green pigment that captures sunlight</li>
                  <li>Discuss each ingredient: CO₂, H₂O, and sunlight</li>
                </ul>
              </li>
              <li><strong>The Process:</strong>
                <ul>
                  <li>Show diagram of leaf cross-section</li>
                  <li>Explain how leaves absorb light and carbon dioxide</li>
                  <li>Roots absorb water from soil</li>
                  <li>Products: glucose (plant food) and oxygen (released into air)</li>
                </ul>
              </li>
            </ol>

            <h3>Guided Practice (15 minutes)</h3>
            <p><strong>Video and Discussion:</strong></p>
            <ul>
              <li>Watch "Photosynthesis Explained" video (8 min)</li>
              <li>Pause at key points to check understanding</li>
              <li>Have students turn-and-talk with partners about what they learned</li>
              <li>Class discussion: "Why is photosynthesis important for humans and animals?"</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.pageContainer} id="page-3">
        <div className={styles.pageNumber}>Page 3 of 3</div>
        <div className={styles.page}>
          <div className={styles.section}>
            <h3>Independent Practice (15 minutes)</h3>
            <p><strong>Worksheet Activity:</strong></p>
            <ul>
              <li>Distribute photosynthesis worksheets</li>
              <li>Students complete labeling diagrams and answering questions</li>
              <li>Circulate to provide support and answer questions</li>
            </ul>

            <p><strong>Hands-on Exploration:</strong></p>
            <ul>
              <li>Divide class into groups of 3-4</li>
              <li>Provide each group with fresh leaves and magnifying glasses</li>
              <li>Students observe leaf structure and identify where chlorophyll might be</li>
              <li>Groups draw and label what they observe</li>
            </ul>

            <h3>Closure (5 minutes)</h3>
            <p><strong>Exit Ticket:</strong></p>
            <ul>
              <li>Students write on sticky notes: "One thing I learned today about photosynthesis"</li>
              <li>Share a few responses with the class</li>
              <li>Preview next lesson: "Next week we'll do an experiment to see photosynthesis in action!"</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Assessment</h2>
            <p><strong>Formative:</strong></p>
            <ul>
              <li>Monitor participation during class discussion</li>
              <li>Check worksheet completion and accuracy</li>
              <li>Review exit tickets for understanding</li>
            </ul>
            <p><strong>Summative:</strong></p>
            <ul>
              <li>Photosynthesis quiz (scheduled for Friday)</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Differentiation</h2>
            <p><strong>For struggling learners:</strong> Provide sentence frames, pair with stronger students, use visual aids</p>
            <p><strong>For advanced learners:</strong> Research how different types of plants (cacti, water plants) have adapted photosynthesis</p>
            <p><strong>For ELL students:</strong> Pre-teach vocabulary, use cognates where possible, provide translated resources</p>
          </div>

          <div className={styles.section}>
            <h2>Homework</h2>
            <p>Complete the "Photosynthesis at Home" observation sheet - find 3 plants at home and describe where they get sunlight, water, and how they might perform photosynthesis.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LessonPlanContent;
