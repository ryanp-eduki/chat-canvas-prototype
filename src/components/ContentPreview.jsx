import React from 'react';
import styles from '../styles/ContentPreview.module.css';

const ContentPreview = () => {
  return (
    <div className={styles.contentPreview}>
      <div className={`${styles.mockDocument} mockDocument`}>

        {/* Page 1 */}
        <div className={styles.pageContainer} id="page-1">
          <div className={styles.pageNumber}>Page 1 of 4</div>
          <div className={styles.page}>
          <div className={styles.documentHeader}>
            <h1>Photosynthesis: How Plants Breathe</h1>
            <div className={styles.metadata}>
              <span>Name: _________________</span>
              <span>Date: _________________</span>
            </div>
          </div>

          <div className={styles.sections}>
            <div className={styles.section}>
              <div className={styles.sectionNumber}>1</div>
              <h3>Choose the correct answer:</h3>
              <p>What do plants produce during photosynthesis?</p>
              <div className={styles.options}>
                <p>A) Cheese and bread</p>
                <p>B) Oxygen and sugar</p>
                <p>C) Stars and sand</p>
                <p>D) Only water</p>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionNumber}>2</div>
              <h3>Fill in the blanks:</h3>
              <p>Plants need three important things for photosynthesis:</p>
              <div className={styles.blanks}>
                <p>1. _________________</p>
                <p>2. _________________</p>
                <p>3. _________________</p>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionNumber}>3</div>
              <h3>True or False?</h3>
              <div className={styles.statements}>
                <p>___ Plants do photosynthesis at night</p>
                <p>___ Chlorophyll makes leaves green</p>
                <p>___ Without plants we would have no oxygen</p>
                <p>___ Plants eat insects as their main food</p>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Page 2 */}
        <div className={styles.pageContainer} id="page-2">
          <div className={styles.pageNumber}>Page 2 of 4</div>
          <div className={styles.page}>
          <div className={styles.sections}>
            <div className={styles.illustration}>
              <div className={styles.plant}>
                <div className={styles.sun}>☀️</div>
                <div className={styles.plantPot}>🌱</div>
                <p className={styles.caption}>A plant during photosynthesis</p>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionNumber}>4</div>
              <h3>Match what belongs together:</h3>
              <div className={styles.matching}>
                <div className={styles.column}>
                  <p>• Roots</p>
                  <p>• Leaves</p>
                  <p>• Chlorophyll</p>
                  <p>• Stem</p>
                </div>
                <div className={styles.column}>
                  <p>• Capture light</p>
                  <p>• Absorb water</p>
                  <p>• Green pigment</p>
                  <p>• Transport substances</p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionNumber}>5</div>
              <h3>Put the steps in order (1-3):</h3>
              <div className={styles.ordering}>
                <p>___ The plant produces sugar and oxygen.</p>
                <p>___ The roots take up water from the soil.</p>
                <p>___ The leaves capture the sun's energy.</p>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Page 3 */}
        <div className={styles.pageContainer} id="page-3">
          <div className={styles.pageNumber}>Page 3 of 4</div>
          <div className={styles.page}>
          <div className={styles.sections}>
            <div className={styles.section}>
              <div className={styles.sectionNumber}>6</div>
              <h3>Explain: Why is photosynthesis important for humans?</h3>
              <div className={styles.writingArea}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionNumber}>7</div>
              <h3>Draw and label a plant:</h3>
              <div className={styles.drawingArea}>
                <div className={styles.drawingBox}>
                  <p className={styles.drawingPrompt}>Draw a plant here and label: roots, stem, leaves, flower</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Page 4 */}
        <div className={styles.pageContainer} id="page-4">
          <div className={styles.pageNumber}>Page 4 of 4</div>
          <div className={styles.page}>
          <div className={styles.sections}>
            <div className={styles.section}>
              <div className={styles.sectionNumber}>8</div>
              <h3>Bonus: Research Questions</h3>
              <div className={styles.bonusQuestions}>
                <p><strong>1.</strong> Why are most plants green?</p>
                <div className={styles.line}></div>
                <div className={styles.line}></div>

                <p><strong>2.</strong> What would happen if there was no sun?</p>
                <div className={styles.line}></div>
                <div className={styles.line}></div>

                <p><strong>3.</strong> Can plants grow in the dark?</p>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionNumber}>9</div>
              <h3>Self-Reflection:</h3>
              <div className={styles.reflection}>
                <p>What did you learn about photosynthesis today?</p>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <p>What did you find most interesting?</p>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
              </div>
            </div>

            <div className={styles.footer}>
              <p className={styles.endNote}>🌿 Great work! 🌿</p>
            </div>
          </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContentPreview;
