import React, { useState } from 'react';
import { HiDownload } from 'react-icons/hi';
import { BiEditAlt } from 'react-icons/bi';
import { IoCopy } from 'react-icons/io5';
import { IoChevronDown } from 'react-icons/io5';
import styles from '../styles/ButtonPalette.module.css';

const ButtonPalette = ({ position = 'top' }) => {
  const [selectedPage, setSelectedPage] = useState(1);

  const handlePageChange = (e) => {
    const pageNumber = parseInt(e.target.value);
    setSelectedPage(pageNumber);

    // Find the page element by ID and scroll to it
    const pageElement = document.getElementById(`page-${pageNumber}`);
    if (pageElement) {
      pageElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      console.log(`Navigated to page ${pageNumber}`);
    }
  };

  const handleCopy = async () => {
    try {
      const content = document.querySelector('.mockDocument')?.innerText || '';
      await navigator.clipboard.writeText(content);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy:', err);
      alert('Failed to copy content');
    }
  };

  const handleDownload = () => {
    const content = document.querySelector('.mockDocument')?.innerText || '';
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'photosynthese-worksheet.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    console.log('Content downloaded');
  };

  const handleEdit = () => {
    console.log('Edit mode activated');
    alert('Edit functionality - this would open an editor interface');
  };

  return (
    <div className={`${styles.buttonPalette} ${styles[position]}`}>
      <div className={styles.buttonGroup}>
        <div className={styles.pageSelector}>
          <select
            value={selectedPage}
            onChange={handlePageChange}
            className={styles.pageDropdown}
          >
            <option value={1}>Page 1</option>
            <option value={2}>Page 2</option>
            <option value={3}>Page 3</option>
            <option value={4}>Page 4</option>
          </select>
          <IoChevronDown className={styles.dropdownIcon} />
        </div>

        <button
          className={styles.button}
          onClick={handleCopy}
          title="Copy"
        >
          <IoCopy className={styles.icon} />
          <span>Copy</span>
        </button>

        <button
          className={styles.button}
          onClick={handleDownload}
          title="Download"
        >
          <HiDownload className={styles.icon} />
          <span>Download</span>
        </button>

        <button
          className={styles.button}
          onClick={handleEdit}
          title="Edit"
        >
          <BiEditAlt className={styles.icon} />
          <span>Edit</span>
        </button>
      </div>
    </div>
  );
};

export default ButtonPalette;
