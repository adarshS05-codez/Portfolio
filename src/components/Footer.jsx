import React, { useState, useEffect } from 'react';
import '../styles/footer.css';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-logo">AS</span>
          <span className="footer-copy">
            © 2024–2027 Adarsh Soni // All Rights Reserved. Built with React + Vite.
          </span>
        </div>
        <div className="footer-right">
          <span className="footer-time">
            <span className="clock-pulse" />
            IST {time}
          </span>
          <button
            className="footer-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ▲ BACK TO TOP
          </button>
        </div>
      </div>
    </footer>
  );
}
