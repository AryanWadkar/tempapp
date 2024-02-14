// _app.js
import '../styles/global.css'
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/App.module.css';

export default function App() {
  const [showRose, setShowRose] = useState(false);

  const handleYesClick = () => {
    setShowRose(true);
  };

  const handleNoClick = (e) => {
    const button = e.target;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const left = Math.random() * (width / 2) + width / 4;
    const top = Math.random() * (height / 2) + height / 4;
    button.style.position = 'absolute';
    button.style.left = `${left}px`;
    button.style.top = `${top}px`;
  };

  return (
    <div className={styles.container}>
      {!showRose ? (
        <>
          <h1 className={styles.title}>Will you be my valentine?</h1>
          <div className={styles.buttons}>
            <button onClick={handleYesClick} className={`${styles['eightbit-btn']} ${styles['button']}`}>Yes</button>
            <button onClick={handleNoClick} className={`${styles['eightbit-btn']} ${styles['eightbit-btn--reset']} ${styles['button']}`}>No</button>
          </div>
          <p className={styles.footer}>Made with {`<3`} by your boyfriend</p>
        </>
      ) : (
        <div style={{ position: 'relative', width: '500px', height: '500px' }}>
          <Image src='/../public/rose.png' alt='Rose' layout='fill' objectFit='contain' className={styles.rocking}/>
          <p className={styles.footer}>Yay! Here's a rose for cutie</p>
        </div>
      )}
    </div>
  );
}
