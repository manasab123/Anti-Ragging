import React from 'react';
import Navbar from './Navbar';
import './Styles.css';
import { FaCheckCircle } from 'react-icons/fa'; // Importing an icon

export default function About() {
  return (
    <>
      <Navbar />

      {/* About Header */}
      <section className="about-header">
        <div className="overlay">
          <h1>About Us</h1>
          <p>Eliminating ragging and ensuring a safer educational environment.</p>
        </div>
      </section>

      {/* About Content */}
      <div className="about-content">
        <p>
          <strong>Centre for Youth (C4Y)</strong> is working in association with the Ministry of Education, Government of India,
          and the University Grants Commission (UGC) to support the **National Ragging Prevention Programme**.
          C4Y monitors a 24x7 anti-ragging helpline, ensures compliance, provides technological support, and
          creates awareness to **eliminate ragging** across universities and colleges in India.
        </p>

        <div className="about-box">
          <h2>What This Portal Offers</h2>
          <ul>
            <li>
              <FaCheckCircle className="icon" />
              Digital records of student undertakings to ensure compliance.
            </li>
            <li>
              <FaCheckCircle className="icon" />
              A database of registered complaints with real-time action tracking.
            </li>
            <li>
              <FaCheckCircle className="icon" />
              Resources to create awareness and prevent ragging in educational institutions.
            </li>
          </ul>
        </div>

        <p>
          The **Supreme Court of India**, in Civil Appeal No. 887 of 2009, mandated the establishment of this system
          to monitor and prevent ragging. **The goal is simple: eliminate ragging and take strict action against offenders.**
        </p>

       
      </div>
    </>
  );
}
