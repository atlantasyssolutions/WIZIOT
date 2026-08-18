'use client';

import { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, Fuel, Wrench } from 'lucide-react';
import styles from './RoiCalculator.module.css';

export default function RoiCalculator({ onOpenDemo }) {
  const [fleetSize, setFleetSize] = useState(35);
  const [monthlyKm, setMonthlyKm] = useState(4500);

  // ROI Estimation Logic:
  // Fuel savings ~ 18% of total fuel bill ($0.12/km average fuel cost)
  const annualFuelSavings = Math.round(fleetSize * (monthlyKm * 12) * 0.12 * 0.18);
  
  // Maintenance savings ~ $380/vehicle/year via predictive diagnostics & oil/brake alerts
  const annualMaintSavings = Math.round(fleetSize * 380);

  // Total annual savings
  const totalAnnualSavings = annualFuelSavings + annualMaintSavings;

  return (
    <section className="section-padding" style={{ background: 'rgba(7, 11, 21, 0.9)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
          <div className="badge-pill" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38BDF8', border: '1px solid rgba(56, 189, 248, 0.3)', margin: '0 auto 16px' }}>
            Interactive ROI Estimator
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#FFFFFF', fontWeight: '800' }}>
            Calculate Your Fleet Operational Savings
          </h2>
          <p style={{ color: '#E2E8F0', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Adjust your fleet metrics below to estimate annual fuel and maintenance savings achieved with WizIOT telematics.
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
                <span className={styles.sliderTitle}>Average Monthly Distance per Vehicle</span>
                <span className={styles.sliderVal}>{monthlyKm.toLocaleString()} km / month</span>
              </div>
              <input
                type="range"
                min="1000"
                max="15000"
                step="500"
                value={monthlyKm}
                onChange={(e) => setMonthlyKm(Number(e.target.value))}
                className={styles.rangeInput}
              />
            </div>

            <div style={{ padding: '20px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              💡 <strong>Calculation Basis:</strong> Benchmark calculations derived from anonymized telemetry data across 1,000+ active enterprise fleets using WizIOT route optimization and driver coaching.
            </div>
          </div>

          {/* Results Column */}
          <div className={styles.resultsCol}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '12px' }}>
              ESTIMATED ANNUAL FLEET SAVINGS
            </span>
            <div className={styles.annualSavingsVal}>
              ${totalAnnualSavings.toLocaleString()}
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)' }}>
              Projected ROI payback period: <strong>&lt; 65 days</strong>
            </span>

            <div className={styles.savingsBreakdown}>
              <div className={styles.breakdownItem}>
                <div className={styles.breakdownVal}>${annualFuelSavings.toLocaleString()}</div>
                <div className={styles.breakdownLbl}>Fuel Waste Reduction</div>
              </div>
              <div className={styles.breakdownItem}>
                <div className={styles.breakdownVal}>${annualMaintSavings.toLocaleString()}</div>
                <div className={styles.breakdownLbl}>Preventive Maintenance</div>
              </div>
            </div>

            <button onClick={onOpenDemo} className="btn btn-primary" style={{ width: '100%' }}>
              Claim Your Custom Savings Audit <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
