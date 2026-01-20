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
            <h1>Photosynthese: Wie Pflanzen atmen</h1>
            <div className={styles.metadata}>
              <span>Name: _________________</span>
              <span>Datum: _________________</span>
            </div>
          </div>

          <div className={styles.sections}>
            <div className={styles.section}>
              <div className={styles.sectionNumber}>1</div>
              <h3>Wähle das richtige Antwort aus:</h3>
              <p>Was produzieren Pflanzen während der Photosynthese?</p>
              <div className={styles.options}>
                <p>A) Käse und Brot</p>
                <p>B) Sauerstoff und Zucker</p>
                <p>C) Sterne und Sand</p>
                <p>D) Nur Wasser</p>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionNumber}>2</div>
              <h3>Fülle die Lücken aus:</h3>
              <p>Pflanzen brauchen drei wichtige Dinge für die Photosynthese:</p>
              <div className={styles.blanks}>
                <p>1. _________________</p>
                <p>2. _________________</p>
                <p>3. _________________</p>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionNumber}>3</div>
              <h3>Richtig oder Falsch?</h3>
              <div className={styles.statements}>
                <p>___ Pflanzen machen nachts Photosynthese</p>
                <p>___ Chlorophyll macht die Blätter grün</p>
                <p>___ Ohne Pflanzen hätten wir keinen Sauerstoff</p>
                <p>___ Pflanzen essen Insekten als Hauptnahrung</p>
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
                <p className={styles.caption}>Eine Pflanze bei der Photosynthese</p>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionNumber}>4</div>
              <h3>Verbinde, was zusammengehört:</h3>
              <div className={styles.matching}>
                <div className={styles.column}>
                  <p>• Wurzeln</p>
                  <p>• Blätter</p>
                  <p>• Chlorophyll</p>
                  <p>• Stengel</p>
                </div>
                <div className={styles.column}>
                  <p>• Fangen Licht</p>
                  <p>• Saugen Wasser</p>
                  <p>• Grüner Farbstoff</p>
                  <p>• Transportiert Stoffe</p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionNumber}>5</div>
              <h3>Bringe die Schritte in Ordnung (1-3):</h3>
              <div className={styles.ordering}>
                <p>___ Die Pflanze stellt Zucker und Sauerstoff her.</p>
                <p>___ Die Wurzeln nehmen Wasser aus dem Boden auf.</p>
                <p>___ Die Blätter fangen die Energie der Sonne ein.</p>
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
              <h3>Erkläre: Warum ist die Photosynthese für uns Menschen so wichtig?</h3>
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
              <h3>Zeichne eine Pflanze und beschrifte:</h3>
              <div className={styles.drawingArea}>
                <div className={styles.drawingBox}>
                  <p className={styles.drawingPrompt}>Zeichne hier eine Pflanze und beschrifte: Wurzeln, Stengel, Blätter, Blüte</p>
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
              <h3>Bonus: Forscherfragen</h3>
              <div className={styles.bonusQuestions}>
                <p><strong>1.</strong> Warum sind die meisten Pflanzen grün?</p>
                <div className={styles.line}></div>
                <div className={styles.line}></div>

                <p><strong>2.</strong> Was würde passieren, wenn es keine Sonne gäbe?</p>
                <div className={styles.line}></div>
                <div className={styles.line}></div>

                <p><strong>3.</strong> Können Pflanzen im Dunkeln wachsen?</p>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
              </div>
            </div>

            <div className={styles.section}>
              <div className={styles.sectionNumber}>9</div>
              <h3>Selbstreflexion:</h3>
              <div className={styles.reflection}>
                <p>Was hast du heute über Photosynthese gelernt?</p>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <p>Was fandest du am interessantesten?</p>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
              </div>
            </div>

            <div className={styles.footer}>
              <p className={styles.endNote}>🌿 Gut gemacht! 🌿</p>
            </div>
          </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContentPreview;
