'use client';

import { useState } from 'react';
import { Calculator, ArrowRight, Activity, Database, Server } from 'lucide-react';
import styles from './RoiCalculator.module.css';

export default function RoiCalculator({ onOpenDemo }) {
  const [fleetSize, setFleetSize] = useState(35);
  const [dailyHours, setDailyHours] = useState(8);

  // Data Volume Estimation Logic:
  // Assuming 1 location ping every 10 seconds (360 pings/hour)
  // and 5 sensor metrics (fuel, temp, speed, rpm, engine load) per ping (1800 metrics/hour)
  // Monthly active hours = fleetSize * dailyHours * 30 days
  const monthlyActiveHours = fleetSize * dailyHours * 30;
  
  const locationPings = monthlyActiveHours * 360;
  const sensorMetrics = monthlyActiveHours * 1800;

  // Total monthly data points
  const totalDataPoints = locationPings + sensorMetrics;

  return (
    <section className="section-padding" style={{ background: 'rgba(7, 11, 21, 0.9)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
          <div className="badge-pill" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38BDF8', border: '1px solid rgba(56, 189, 248, 0.3)', margin: '0 auto 16px' }}>
            Telemetry Scale Estimator
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#FFFFFF', fontWeight: '800' }}>
            Estimate Your Telemetry Data Volume
          </h2>
          <p style={{ color: '#E2E8F0', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Adjust your fleet scale below to visualize the massive monthly data volume processed securely by our zero-latency cloud architecture.
          </p>
        </div>

        <div className={styles.calculatorBox}>
          {/* Inputs Column */}
          <div className={styles.inputsCol}>
            <div className={styles.sliderGroup}>
              <div className={styles.sliderHeader}>
                <span className={styles.sliderTitle}>Total Active Vehicles / Assets</span>
                <span className={styles.sliderVal}>{fleetSize} Vehicles</span>
              </div>
              <input
                type="range"
                min="5"
                max="500"
                step="5"
                value={fleetSize}
                onChange={(e) => setFleetSize(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>

            <div className={styles.sliderGroup}>
              <div className={styles.sliderHeader}>
                <span className={styles.sliderTitle}>Average Daily Operating Hours</span>
                <span className={styles.sliderVal}>{dailyHours} hours / day</span>
              </div>
              <input
                type="range"
                min="2"
                max="24"
                step="1"
                value={dailyHours}
                onChange={(e) => setDailyHours(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>

            <div style={{ padding: '20px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              💡 <strong>System Capacity:</strong> Built on high-availability WebSocket and MQTT clusters, our architecture is capable of ingesting and parsing millions of concurrent IoT sensor packets without latency.
            </div>
          </div>

          {/* Results Column */}
          <div className={styles.resultsCol}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '12px' }}>
              ESTIMATED MONTHLY DATA POINTS PROCESSED
            </span>
            <div className={styles.annualSavingsVal}>
              {totalDataPoints.toLocaleString()}
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)' }}>
              Platform Uptime SLA: <strong>99.99% Guaranteed</strong>
            </span>

            <div className={styles.savingsBreakdown}>
              <div className={styles.breakdownItem}>
                <div className={styles.breakdownVal}>{locationPings.toLocaleString()}</div>
                <div className={styles.breakdownLbl}>GPS Location Pings</div>
              </div>
              <div className={styles.breakdownItem}>
                <div className={styles.breakdownVal}>{sensorMetrics.toLocaleString()}</div>
                <div className={styles.breakdownLbl}>CAN-bus & Sensor Metrics</div>
              </div>
            </div>

            <button onClick={onOpenDemo} className="btn btn-primary" style={{ width: '100%' }}>
              Explore Technical Architecture <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
