import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import styles from './DemoModal.module.css';

interface DemoModalProps {
  title: string;
  src: string;
  poster?: string;
  onClose: () => void;
}

function DemoModal({ title, src, poster, onClose }: DemoModalProps) {
  const isEmbed = src.startsWith('http');

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  // Portal to body so the flip card's 3D transform doesn't trap the fixed overlay
  return createPortal(
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <button className={styles.close} onClick={onClose} aria-label="Close video">
            <FaTimes />
          </button>
        </div>
        <div className={styles.player}>
          {isEmbed ? (
            <iframe src={src} title={title} allow="autoplay; fullscreen" allowFullScreen />
          ) : (
            <video controls autoPlay muted playsInline preload="metadata" poster={poster}>
              <source src={src} type="video/mp4" />
              Your browser doesn't support embedded videos.
            </video>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default DemoModal;
