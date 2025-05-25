import React from 'react';
import './Styles.css';
import Navbar from './Navbar';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Say 'NO' to Ragging!</h1>
          <p className="hero-subtitle">
            A step towards a safer and more inclusive educational environment.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <div className="image-gallery">
        <img
          src="https://www.marwadiuniversity.ac.in/wp-content/uploads/2022/04/Vector-Smart-Object-1.png"
          alt="rag1"
        />
        <img
          src="https://www.antiragging.in/assets/img/index/being-ragged.webp"
          alt="rag2"
        />
        <img
          src="https://www.marwadiuniversity.ac.in/wp-content/uploads/2022/04/award-trophy-.png"
          alt="rag3"
        />
      </div>

      {/* Anti-Ragging Section */}
      <div className="stop-rag">
      
        <h3 className="anti-rag-heading">ANTI-RAGGING</h3>
        <p className="anti-rag-text">
          <span className="highlight">R</span>agging is a disturbing reality in the higher education system.
          Despite the fact that over the years ragging has claimed hundreds of innocent lives and has ruined
          careers of thousands of bright students, the practice is still perceived by many as a way of
          familiarization and an initiation into the real world for young college-going students.
        </p>
      </div>
    </>
  );
}
