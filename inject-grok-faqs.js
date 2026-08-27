const fs = require('fs');
const path = require('path');

const grokFaqs = {
  "mombasa": [
    {
      "question": "How are capacitive fuel probes calibrated for diurnal humidity swings on the A109 Northern Transit Corridor?",
      "answer": "Probe firmware applies real-time dielectric offset tables derived from onboard temperature-humidity sensors to hold volumetric error below ±0.3 % when relative humidity oscillates between 65 % and 95 %. Calibration cycles run automatically every 12 hours or after any temperature delta exceeding 8 °C."
    },
    {
      "question": "What MQTT QoS level and dual-SIM failover logic is required to maintain event continuity during coastal RF interference near the Port of Mombasa?",
      "answer": "QoS 1 is enforced for all fuel-anomaly and door-state payloads; the gateway switches SIMs within 1.8 s of three consecutive failed publishes and re-establishes the TLS session using cached certificates. J1939 frames continue buffering in non-volatile memory during the handover."
    },
    {
      "question": "Which accelerometer thresholds detect unauthorized trailer decoupling on bulk agricultural hauls leaving Mombasa?",
      "answer": "A 3-axis MEMS sensor triggers an MQTT alert when the vertical acceleration exceeds 1.8 g for longer than 120 ms while vehicle speed remains below 3 km/h. The event is cross-checked against the tractor-trailer electrical interlock status extracted from the J1939 network."
    }
  ],
  "nairobi": [
    {
      "question": "How is multipath GNSS error mitigated for geofence enforcement inside Nairobi’s central business district canyons?",
      "answer": "The gateway fuses dual-frequency GNSS with a 100 Hz inertial measurement unit and applies a tightly-coupled Kalman filter that discards satellites with elevation angles below 15°. Resulting position residuals stay under 4 m, preventing false geofence breaches."
    },
    {
      "question": "What J1939 PGN set is decrypted to quantify non-productive idle fuel burn during East African inland logistics staging?",
      "answer": "PGNs 65262 (engine temperature), 65257 (fuel economy), and 61444 (electronic engine controller) are parsed at 10 Hz. Edge logic accumulates fuel-rate values only when vehicle speed is zero and engine RPM exceeds 550 for more than 90 s."
    },
    {
      "question": "Which capacitive probe mounting orientation compensates for continuous high-frequency vibration on Nairobi–Mombasa trunk routes?",
      "answer": "Probes are installed at a 15° forward rake and secured with anti-vibration bushings rated to 25 g RMS. Firmware applies a 4 Hz low-pass filter to the raw capacitance signal before volumetric conversion."
    }
  ],
  "lagos": [
    {
      "question": "What dual-SIM anti-jamming configuration maintains MQTT connectivity on the Lagos–Ibadan–Kano Freight Highway?",
      "answer": "Primary and secondary SIMs operate on separate MNO bands; the gateway monitors RSSI and packet-error-rate every 5 s and initiates a soft handover when either metric degrades beyond configured thresholds for three consecutive samples. Session keys remain cached to keep TLS renegotiation under 2.2 s."
    },
    {
      "question": "How are capacitive fuel sensors protected against volumetric drift caused by sustained axle-load vibration above 18 Hz?",
      "answer": "Sensor heads use rigid stainless-steel waveguides and are mounted on isolation plates with natural frequencies above 45 Hz. Onboard DSP applies adaptive notch filtering centered on the dominant vibration peak before capacitance-to-volume conversion."
    },
    {
      "question": "Which edge algorithm isolates route deviations greater than 3 km from planned corridors on the Lagos–Kano axis?",
      "answer": "A sliding-window Haversine calculator compares live GNSS fixes against a pre-loaded corridor polyline every 15 s. When cumulative lateral offset exceeds 3 km for longer than 90 s an MQTT alert carrying the last five position samples is published at QoS 1."
    }
  ],
  "kano": [
    {
      "question": "How does the system compensate for dust-induced dielectric changes in capacitive fuel probes on Sahel cross-border segments?",
      "answer": "An optical dust sensor mounted adjacent to the probe supplies a particulate-density offset that is subtracted from the raw capacitance reading. Recalibration is forced whenever the offset exceeds 4 % of full-scale for more than 10 minutes."
    },
    {
      "question": "What anti-spoofing measures are applied to dual-frequency GNSS receivers near Kano border posts?",
      "answer": "The receiver continuously monitors automatic gain control levels and carrier-to-noise ratios; any abrupt rise accompanied by inconsistent Doppler is flagged as potential spoofing. Position solutions then fall back to inertial dead-reckoning for up to 45 s while an MQTT spoofing alert is raised."
    },
    {
      "question": "Which stationary-state criteria trigger fuel-siphoning alerts during prolonged customs dwell in Kano?",
      "answer": "Engine RPM below 400, vehicle speed zero, and a capacitance drop greater than 1.5 % of tank volume within any 60-second window generate an immediate MQTT event. The event payload includes the last 30 s of fuel-level samples and ambient temperature."
    }
  ],
  "johannesburg": [
    {
      "question": "How are proprietary OEM J1939 PGNs decoded for real-time axle-load monitoring on Gauteng industrial distribution routes?",
      "answer": "Gateway firmware contains a lookup table mapping manufacturer-specific PGN 65217 and 65132 variants to normalized axle-group weights. Values are published via MQTT every 5 s when the vehicle is in motion and every 30 s when stationary."
    },
    {
      "question": "What door-sensor sampling rate detects unauthorized cargo access during overnight yard dwell in Johannesburg?",
      "answer": "Magnetic reed switches and capacitive door-edge sensors are polled at 20 Hz. Any state transition lasting longer than 80 ms while the vehicle ignition is off generates a buffered MQTT alert that is transmitted as soon as cellular coverage is restored."
    },
    {
      "question": "Which accelerometer fusion parameters identify trailer decoupling events under variable payload conditions?",
      "answer": "A 3-axis MEMS sensor triggers when the vertical axis exceeds 2.1 g for more than 100 ms and the longitudinal axis simultaneously drops below 0.3 g while vehicle speed is under 2 km/h. The event is validated against the tractor-trailer CAN interlock status."
    }
  ],
  "durban": [
    {
      "question": "How is RFID-to-telematics latency kept under 400 ms during container handovers at the Durban Container Terminal?",
      "answer": "The gateway maintains a persistent TCP connection to the yard management system and prioritizes RFID tag reads on a dedicated MQTT topic with QoS 1. Timestamp alignment uses NTP-synchronized clocks accurate to 15 ms."
    },
    {
      "question": "What compensation is applied to capacitive fuel probes for salinity-induced dielectric shifts between maritime and inland environments?",
      "answer": "An onboard conductivity sensor supplies a real-time offset factor that is applied to the raw capacitance value. The compensation table is updated whenever the vehicle crosses a geofenced coastal boundary."
    },
    {
      "question": "Which shock-event classification thresholds flag excessive container handling during crane operations in Durban?",
      "answer": "A 100 Hz accelerometer stream is processed by a wavelet-based classifier that isolates impact events exceeding 3.5 g peak and lasting between 15 ms and 80 ms. Matching events are published with peak-g and duration fields via MQTT."
    }
  ],
  "warsaw": [
    {
      "question": "How is cold-chain temperature integrity monitored for WHO GDP compliance on TEN-T north-south routes through Warsaw?",
      "answer": "Dual PT100 probes inside the cargo compartment report at 30-second intervals; any excursion outside the 2–8 °C band for more than 90 s generates an MQTT alert carrying the full temperature time-series and door-open status."
    },
    {
      "question": "What multi-constellation GNSS configuration maintains lane-level accuracy through Warsaw urban multipath zones?",
      "answer": "GPS, Galileo and GLONASS constellations are combined with RTK corrections delivered over NTRIP. Satellites with elevation masks below 12° or C/N0 under 28 dB-Hz are excluded, keeping horizontal residuals below 0.4 m."
    },
    {
      "question": "Which J1939 parameters are extracted to detect thermal stress on sustained downhill gradients approaching Warsaw?",
      "answer": "Brake temperature (PGN 65134), retarder torque (PGN 61440) and transmission oil temperature (PGN 65272) are sampled at 5 Hz. Edge logic raises an alert when any value exceeds manufacturer red-line thresholds for longer than 20 s."
    }
  ],
  "krakow": [
    {
      "question": "How does dual-SIM APN failover maintain continuous MQTT connectivity across Polish–Czech–Slovak border coverage gaps?",
      "answer": "The gateway monitors publish success rate; after three consecutive failures it switches SIMs, reloads the secondary APN profile and re-establishes the TLS session within 2.5 s. Buffered J1939 and sensor frames are flushed immediately after reconnection."
    },
    {
      "question": "What edge logic correlates fuel-rate anomalies with GPS velocity to isolate engine-idling theft during customs dwell near Krakow?",
      "answer": "Fuel-rate values from PGN 65257 are accumulated only when GNSS speed remains below 1 km/h for more than 120 s. A sudden capacitance drop coincident with elevated fuel-rate triggers an MQTT siphoning alert."
    },
    {
      "question": "Which capacitive probe temperature compensation range is required for Central European winter operations through Krakow?",
      "answer": "Probes operate with a multi-point compensation table covering –25 °C to +45 °C. The table is applied in real time using the probe’s internal thermistor, holding volumetric error within ±0.4 % across the full temperature span."
    }
  ],
  "bucharest": [
    {
      "question": "How are unauthorized high-elevation detours detected on the Balkan Transit Corridor approaching Bucharest?",
      "answer": "Barometric pressure is fused with GNSS altitude at 1 Hz; any sustained climb exceeding 180 m above the planned corridor profile for longer than 4 minutes generates an MQTT route-deviation alert containing the altitude time-series."
    },
    {
      "question": "What J1939 fuel-rail and injector parameters identify adulterated diesel events on Danube Highway segments?",
      "answer": "Fuel-rail pressure (PGN 65263) and injector pulse-width (PGN 61444) are monitored at 10 Hz. Statistical deviation beyond two standard deviations from the rolling baseline while engine load remains constant triggers an MQTT fuel-quality alert."
    },
    {
      "question": "Which dual-SIM anti-jamming settings counteract intermittent RF interference near Bucharest industrial zones?",
      "answer": "The gateway continuously measures in-band noise floor; when noise exceeds –85 dBm for more than 8 s it forces a SIM switch and raises the MQTT publish interval temporarily to 2 s until the noise floor recovers."
    }
  ],
  "constanta": [
    {
      "question": "What IP rating and material specification is required for sensor housings exposed to Black Sea salt-spray at Constanta?",
      "answer": "All external sensor enclosures meet IP68 and are fabricated from 316L stainless steel with silicone gaskets rated for continuous salt-fog exposure. Internal conformal coating protects the electronics against chloride ingress."
    },
    {
      "question": "How are container seal integrity events synchronized with crane-lift shock data during Danube logistics transfers?",
      "answer": "Seal-status changes and 100 Hz accelerometer peaks are time-stamped with a common UTC clock accurate to 20 ms and published on a single MQTT topic. Edge logic correlates any seal break occurring within 3 s of a >4 g shock event."
    },
    {
      "question": "Which capacitive fuel probe compensation addresses density changes caused by temperature swings between maritime and river environments?",
      "answer": "An onboard densitometer and temperature sensor feed a real-time density correction factor into the volumetric calculation, limiting error to ±0.5 % across a 5–35 °C range."
    }
  ],
  "budapest": [
    {
      "question": "How do adaptive geofencing polygons adjust to real-time traffic density on Budapest highway crossroads?",
      "answer": "Polygon vertices expand or contract every 60 s based on floating-car data feeds; expansion is limited to 150 m beyond the nominal corridor. Entry and exit events continue to be published via MQTT with the updated geometry version."
    },
    {
      "question": "What J1939 transmission parameters predict overheating risk during prolonged stop-start cycles in Budapest?",
      "answer": "Transmission oil temperature (PGN 65272), torque-converter slip (PGN 61445) and lock-up clutch status are sampled at 2 Hz. An alert is raised when oil temperature exceeds 110 °C while average vehicle speed remains below 15 km/h for more than 8 minutes."
    },
    {
      "question": "Which dual-SIM MQTT configuration maintains session continuity across operator coverage boundaries surrounding Budapest?",
      "answer": "The gateway prefers the SIM with the highest RSRP; handover occurs within 1.6 s of RSRP falling below –110 dBm. TLS session tickets are reused to avoid full renegotiation."
    }
  ],
  "dubai": [
    {
      "question": "How is thermal runaway prevented in capacitive fuel probes operating above 48 °C at Jebel Ali Port?",
      "answer": "Probe electronics incorporate active thermal compensation that applies a cubic polynomial correction derived from three internal thermistors. Volumetric output remains within ±0.25 % up to 55 °C ambient."
    },
    {
      "question": "What dual-SIM anti-jamming parameters counteract high-power RF interference near Dubai industrial complexes?",
      "answer": "The gateway continuously scans for in-band CW interferers; when detected power exceeds –70 dBm it switches SIMs and raises the MQTT keep-alive interval to 10 s until the interferer disappears."
    },
    {
      "question": "Which J1939 engine parameters are monitored to detect forced high-load operation under extreme desert heat?",
      "answer": "Turbocharger boost pressure, exhaust-gas temperature and coolant temperature are sampled at 5 Hz. Sustained values above manufacturer red-line thresholds for more than 30 s generate an MQTT thermal-stress alert."
    }
  ],
  "abu-dhabi": [
    {
      "question": "What ATEX zone classification and intrinsically safe interfaces are required for Khalifa Port oil-and-gas supply chain deployments?",
      "answer": "Gateways and sensors are certified for ATEX Zone 2; all CAN-bus and power interfaces incorporate galvanic isolation and current-limiting barriers compliant with IEC 60079-11. MQTT payloads remain identical to non-hazardous deployments."
    },
    {
      "question": "How are volumetric losses correlated with prolonged stationary periods under high solar loading in Abu Dhabi?",
      "answer": "Edge logic accumulates capacitance samples only when vehicle speed is zero and solar irradiance (measured by an onboard pyranometer) exceeds 800 W/m². A drop greater than 1.2 % of tank volume within 45 minutes triggers an MQTT alert."
    },
    {
      "question": "Which J1939 engine-hour and fuel-consumption PGNs are streamed for continuous duty-cycle analysis on oilfield routes?",
      "answer": "PGNs 65253 (engine hours) and 65257 (fuel consumption) are published every 60 s via MQTT. Cumulative values are also stored in non-volatile memory for post-trip reconciliation."
    }
  ],
  "riyadh": [
    {
      "question": "How is internal gateway temperature kept below 70 °C under continuous solar loading on the KSA East-West Desert Logistics Corridor?",
      "answer": "Enclosures use passive heat-sink fins and a reflective white coating; an internal thermistor throttles non-essential MQTT traffic when temperature exceeds 65 °C, reducing power dissipation until the enclosure cools."
    },
    {
      "question": "What vapor-pressure compensation is applied to capacitive fuel probes during large diurnal temperature swings in Riyadh?",
      "answer": "A tank-headspace temperature sensor supplies vapor-pressure data that is subtracted from the liquid-level capacitance reading. Compensation holds volumetric error within ±0.6 % across a 15–50 °C daily range."
    },
    {
      "question": "Which dual-SIM satellite-backup failover logic is used when terrestrial coverage gaps exceed 80 km on desert routes?",
      "answer": "After 90 s of continuous cellular outage the gateway activates a low-bandwidth satellite modem, prioritizes critical fuel and door-state events, and resumes terrestrial MQTT streaming as soon as a terrestrial signal returns."
    }
  ],
  "jeddah": [
    {
      "question": "What IP rating and material selection protects sensors against Red Sea salt aerosols and high humidity on Jeddah port routes?",
      "answer": "External housings are IP67-rated 316 stainless steel with UV-stabilized silicone seals. Internal PCBs receive acrylic conformal coating to resist chloride-induced corrosion."
    },
    {
      "question": "How are intentional idling events differentiated from congestion-induced delays on Mecca logistics corridors?",
      "answer": "Edge logic compares fuel-rate (PGN 65257) against GNSS velocity variance. High fuel-rate combined with velocity standard deviation below 0.5 km/h for more than 5 minutes is classified as intentional idling and generates an MQTT alert."
    },
    {
      "question": "Which capacitive probe calibration interval is required under continuous high-humidity exposure in Jeddah?",
      "answer": "Automatic dielectric offset recalibration is performed every 8 hours or after any ambient humidity change greater than 15 % RH. The offset is derived from an onboard reference capacitor protected from the fuel medium."
    }
  ],
  "dammam": [
    {
      "question": "What intrinsically safe CAN-bus interface requirements apply to Eastern Province oil-and-gas industrial network deployments?",
      "answer": "All CAN interfaces incorporate isolation barriers limiting energy to IEC 60079-11 levels; the gateway itself is certified for ATEX Zone 2. Proprietary OEM diagnostic trouble codes continue to be decrypted and published via MQTT without modification."
    },
    {
      "question": "How do multi-point temperature compensation tables maintain capacitive probe accuracy across 25 °C diurnal swings in Dammam?",
      "answer": "A five-point cubic spline is stored in probe firmware and evaluated using the average of three internal thermistors. Volumetric output remains within ±0.35 % from 10 °C to 50 °C."
    },
    {
      "question": "Which MQTT event priorities are assigned to critical fuel and door-state alerts under intermittent coverage on desert industrial routes?",
      "answer": "Fuel-siphoning and door-breach events are published at QoS 1 with retain flag set; lower-priority telemetry is buffered and sent at QoS 0 once continuous coverage is restored for more than 30 s."
    }
  ],
  "mexico-city": [
    {
      "question": "What dual-SIM anti-jamming measures counteract targeted RF interference on high-risk US–Mexico cross-border freight segments?",
      "answer": "The gateway detects rapid rises in noise floor above –75 dBm and forces an immediate SIM switch while buffering all J1939 and sensor frames. An MQTT jamming alert containing the noise spectrum snapshot is transmitted as soon as the secondary link is established."
    },
    {
      "question": "How are cargo intrusion events detected within 1.2 seconds of door breach on Mexico City outbound corridors?",
      "answer": "Capacitive door-edge sensors and magnetic reed switches are sampled at 50 Hz. Any state transition longer than 40 ms while the vehicle is stationary or moving below 5 km/h generates an MQTT alert containing the exact timestamp and last GNSS fix."
    },
    {
      "question": "Which accelerometer threshold combination isolates trailer decoupling under variable payload on NAFTA highway routes?",
      "answer": "A simultaneous vertical acceleration exceeding 1.9 g and longitudinal acceleration dropping below 0.25 g for more than 90 ms, while vehicle speed is under 3 km/h, triggers the event. Validation against the J1939 trailer interlock status is performed before publication."
    }
  ],
  "sao-paulo": [
    {
      "question": "How is continuous CAN-bus monitoring of turbocharger boost and exhaust-gas temperature used to detect forced high-load operation on Mercosur corridors?",
      "answer": "Boost pressure and EGT are sampled at 5 Hz from PGNs 65134 and 65262. Sustained values above the OEM red-line for more than 45 s while vehicle speed remains constant generate an MQTT high-load alert."
    },
    {
      "question": "What synchronization method links fuel-probe readings with toll-plaza geofence crossings on the São Paulo–Santos corridor?",
      "answer": "Toll-plaza geofences are pre-loaded with 50 m radius; entry and exit timestamps are aligned with capacitive fuel samples using a common UTC clock. Any volumetric drop greater than 0.8 % occurring inside the geofence window is flagged."
    },
    {
      "question": "Which dual-SIM MQTT keep-alive settings maintain session continuity through dense urban coverage fluctuations in São Paulo?",
      "answer": "Keep-alive is set to 15 s on the primary SIM; after two missed acknowledgments the gateway switches SIMs and re-establishes the TLS session within 2.1 s while flushing the event buffer."
    }
  ],
  "bogota": [
    {
      "question": "How is barometric recalibration of fuel-volume algorithms performed for altitude variations exceeding 2 600 m on Andean highways?",
      "answer": "An onboard barometric sensor supplies absolute pressure every 10 s; the volumetric conversion applies a pressure-dependent tank-deformation coefficient derived from finite-element models of the tank geometry. Error remains below ±0.7 % across the altitude range."
    },
    {
      "question": "What dual-frequency GNSS anti-spoofing firmware settings counteract signal manipulation on Buenaventura access routes?",
      "answer": "The receiver monitors AGC and multi-correlator distortion metrics; any abrupt inconsistency triggers inertial fallback for up to 60 s and raises an MQTT spoofing alert containing the last valid position and signal quality indicators."
    },
    {
      "question": "Which J1939 engine-load and gear-ratio parameters are logged to quantify power demand on sustained Andean gradients?",
      "answer": "Engine percent load (PGN 61443) and current gear (PGN 61445) are recorded at 2 Hz. Cumulative load-time histograms are published via MQTT at the end of each trip segment."
    }
  ],
  "medellin": [
    {
      "question": "How do dual-axis inclinometer and GNSS altitude fusion detect unauthorized shortcut routes through secondary Andean passes?",
      "answer": "Pitch and roll angles are fused with barometric altitude at 1 Hz. Any sustained grade exceeding 9 % outside the pre-approved corridor polyline for more than 3 minutes generates an MQTT route-deviation alert."
    },
    {
      "question": "What continuous J1939 logging captures engine load percentage and transmission gear ratios on gradients exceeding 8 %?",
      "answer": "PGNs 61443 and 61445 are sampled at 5 Hz and stored in a circular buffer. When average grade (derived from GNSS altitude) exceeds 8 % for longer than 2 minutes the buffer contents are published via MQTT."
    },
    {
      "question": "Which capacitive probe mounting and filtering techniques compensate for high-frequency vibration on Medellín mountain routes?",
      "answer": "Probes are mounted with silicone isolation mounts rated to 30 g RMS and firmware applies a 6 Hz Butterworth low-pass filter before volumetric conversion, limiting vibration-induced noise to ±0.2 %."
    }
  ],
  "santos": [
    {
      "question": "How are 100 Hz accelerometer streams classified to identify excessive container handling during Port of Santos crane operations?",
      "answer": "A wavelet packet decomposition isolates impact events with peak acceleration above 3.8 g and duration between 10 ms and 70 ms. Matching events are published with peak-g, duration and crane-cycle correlation flags via MQTT."
    },
    {
      "question": "What timestamp synchronization isolates volumetric anomalies that occur exclusively during dwell periods at Santos?",
      "answer": "Capacitive fuel samples and crane-cycle digital inputs share a common UTC clock accurate to 25 ms. Edge logic flags any capacitance drop greater than 1 % that occurs while the vehicle is stationary and a crane-cycle signal is active."
    },
    {
      "question": "Which dual-SIM configuration maintains MQTT continuity during high-density terminal RF congestion in Santos?",
      "answer": "The gateway monitors packet-error-rate; when PER exceeds 15 % for more than 12 s it switches SIMs and temporarily reduces non-critical telemetry publish rates until PER recovers below 5 %."
    }
  ],
  "barcelona": [
    {
      "question": "How is sub-second RFID-to-telematics handshake latency achieved for container handover validation at Barcelona Port Gateway?",
      "answer": "The gateway maintains a persistent MQTT connection with QoS 1 and prioritizes RFID tag reads on a dedicated topic. Timestamp alignment uses PTP-synchronized clocks, keeping end-to-end latency under 350 ms."
    },
    {
      "question": "What real-time dielectric offset correction compensates capacitive probes for Mediterranean marine humidity ingress?",
      "answer": "An onboard temperature-humidity sensor supplies a dielectric correction factor that is applied every 30 s. The correction table is specific to the fuel type and holds volumetric error within ±0.4 %."
    },
    {
      "question": "Which J1939 brake and retarder parameters are monitored on sustained gradients of the Mediterranean Transport Corridor?",
      "answer": "Brake temperature (PGN 65134) and retarder torque (PGN 61440) are sampled at 5 Hz. Values exceeding OEM limits for more than 25 s generate an MQTT thermal-alert payload."
    }
  ],
  "hamburg": [
    {
      "question": "How is timestamp alignment between GNSS fixes and digital-twin yard maps maintained within 150 ms at the Port of Hamburg?",
      "answer": "Both the gateway and the yard management system synchronize to a common NTP stratum-1 source. Position reports are published with a timestamp accuracy of ±20 ms, enabling sub-150 ms spatial correlation."
    },
    {
      "question": "What J1939 inter-axle and suspension parameters verify load distribution prior to barge loading in Hamburg?",
      "answer": "Inter-axle differential lock status (PGN 64964) and suspension pressure (PGN 65132) are read at 2 Hz. Edge logic confirms that left-right and front-rear pressure differentials remain within 8 % before issuing a load-ready MQTT event."
    },
    {
      "question": "Which dual-SIM MQTT settings ensure continuity during rail-transfer RF shadowing at Hamburg terminals?",
      "answer": "The gateway switches SIMs after 8 s of consecutive publish failures and re-establishes the TLS session using session tickets. Critical seal-integrity and position events are prioritized during the recovery window."
    }
  ],
  "rotterdam": [
    {
      "question": "How are waterway AIS feeds bridged with road telematics via MQTT for multimodal continuity on the Rhine Logistics Axis?",
      "answer": "An onboard AIS receiver publishes vessel position and status on a dedicated MQTT topic; the gateway merges these messages with road GNSS and fuel data under a common trip identifier, maintaining chronological order with 50 ms timestamp resolution."
    },
    {
      "question": "What temperature-compensated lookup tables keep capacitive fuel accuracy within ±0.8 % across barge-to-truck transfer cycles?",
      "answer": "A 12-point temperature-density table specific to the fuel grade is stored in probe firmware and evaluated using the average of two internal thermistors, compensating for density changes during temperature equilibration after transfer."
    },
    {
      "question": "Which dual-SIM anti-jamming parameters counteract industrial RF noise near Rotterdam port installations?",
      "answer": "In-band noise floor is measured every 4 s; when it exceeds –80 dBm for more than 10 s the gateway forces a SIM switch and temporarily increases MQTT keep-alive to 20 s until the noise floor drops below –90 dBm."
    }
  ],
  "singapore": [
    {
      "question": "How is meter-level positioning maintained inside dense container stacks at the Southeast Asian transshipment hub?",
      "answer": "Multi-constellation GNSS with SBAS corrections is fused with a 100 Hz IMU in a tightly-coupled filter. Satellites with elevation below 20° or C/N0 under 30 dB-Hz are excluded, keeping horizontal residuals under 1.2 m."
    },
    {
      "question": "What TLS 1.3 session persistence and dual-SIM settings ensure continuous MQTT streaming of seal-integrity events?",
      "answer": "Session tickets are cached for 24 h; after a SIM switch the gateway resumes the previous TLS session within 1.4 s. Seal and door-state events continue to be published at 500 ms intervals throughout the handover."
    },
    {
      "question": "Which capacitive probe compensation addresses rapid temperature changes during refrigerated container handling in Singapore?",
      "answer": "An onboard thermistor drives a real-time cubic compensation polynomial; volumetric output is updated every 10 s, limiting error to ±0.3 % across a 5–40 °C range."
    }
  ],
  "kuala-lumpur": [
    {
      "question": "How are engine coolant temperature and fan-clutch duty cycles monitored under tropical heat-soak conditions on Peninsular Malaysia Expressway routes?",
      "answer": "Coolant temperature (PGN 65262) and fan-clutch status (PGN 65213) are sampled at 2 Hz. Sustained coolant temperatures above 98 °C combined with continuous fan engagement for more than 6 minutes generate an MQTT thermal-alert."
    },
    {
      "question": "What edge logic isolates roadside siphoning by correlating fuel-level drops with zero-velocity states?",
      "answer": "Capacitance samples are examined only when GNSS speed is below 0.5 km/h. A drop exceeding 1.5 % of tank volume within any 45-second window triggers an MQTT siphoning alert containing the preceding 60 s of fuel data."
    },
    {
      "question": "Which dual-SIM MQTT failover timing maintains continuity through intermittent coverage on expressway segments?",
      "answer": "After three consecutive publish failures spaced 5 s apart the gateway switches SIMs and re-establishes the TLS session within 2.0 s, flushing the buffered event queue immediately thereafter."
    }
  ],
  "johor-bahru": [
    {
      "question": "How are cabin and cargo-door contact states monitored continuously during extended Malaysia–Singapore border dwell?",
      "answer": "Reed switches and capacitive edge sensors are polled at 25 Hz. Any state change lasting longer than 60 ms while the vehicle is stationary generates an MQTT alert with the exact UTC timestamp and last GNSS position."
    },
    {
      "question": "What differential GNSS correction method reduces multipath error near dense customs infrastructure at Johor Bahru?",
      "answer": "The receiver applies SBAS corrections and excludes satellites with elevation masks below 18°. Residual multipath is further attenuated by a tightly-coupled IMU, keeping horizontal error under 2.5 m inside the border complex."
    },
    {
      "question": "Which dual-SIM automatic roaming profiles maintain MQTT connectivity across the Malaysia–Singapore operator boundary?",
      "answer": "Each SIM is pre-provisioned with both Malaysian and Singaporean APNs; the gateway selects the SIM with the strongest RSRP and performs a soft handover within 1.7 s when the preferred network becomes unavailable."
    }
  ],
  "perth": [
    {
      "question": "What ruggedized dual-SIM and satellite-backup configuration bridges coverage gaps exceeding 120 km on Western Australia mining corridors?",
      "answer": "After 120 s of continuous cellular outage the gateway activates a low-Earth-orbit satellite modem, prioritizes fuel, door and emergency events, and resumes terrestrial MQTT streaming as soon as cellular RSSI recovers above –105 dBm."
    },
    {
      "question": "How are engine hours and idle-time counters extracted via J1939 to quantify non-productive fuel burn during remote staging?",
      "answer": "PGNs 65253 (total engine hours) and 65257 (fuel used) are read every 60 s. Edge logic accumulates idle fuel only when engine RPM is between 500 and 900 and vehicle speed remains zero for more than 5 minutes."
    },
    {
      "question": "Which capacitive probe thermal compensation range is required for outback diurnal temperature extremes around Perth?",
      "answer": "Probes operate with a compensation table spanning –5 °C to +55 °C. The table is evaluated using the average of two internal thermistors, holding volumetric error within ±0.5 % across the full range."
    }
  ],
  "cairo": [
    {
      "question": "What dust-ingress protection and J1939 DPF monitoring are required on Suez Canal and North African Transport Network routes?",
      "answer": "Sensor housings meet IP6K9K; DPF soot-load (PGN 64946) and regeneration status are sampled at 1 Hz. An MQTT alert is raised when soot-load exceeds 80 % while regeneration is inhibited for more than 30 minutes."
    },
    {
      "question": "How does GNSS-inertial dead-reckoning bridge satellite outages inside Cairo urban canyon segments?",
      "answer": "A 100 Hz IMU is tightly coupled with multi-constellation GNSS; during complete satellite outage the system coasts on inertial data for up to 45 s while continuing to publish position estimates with increasing uncertainty flags via MQTT."
    },
    {
      "question": "Which capacitive probe calibration interval compensates for rapid temperature changes between Nile Delta and desert zones?",
      "answer": "Automatic dielectric recalibration occurs every 6 hours or after any ambient temperature change greater than 10 °C. The offset is derived from an onboard reference capacitor isolated from the fuel."
    }
  ],
  "casablanca": [
    {
      "question": "What dual-SIM automatic roaming profiles maintain continuous connectivity across Mediterranean operator boundaries on the Tanger-Med corridor?",
      "answer": "Each SIM is provisioned with Moroccan and European roaming APNs; the gateway selects the SIM with the highest RSRP and completes a soft handover within 1.9 s when the serving network’s RSRP falls below –108 dBm."
    },
    {
      "question": "How are capacitive probe calibration curves adjusted for diurnal temperature swings of 22 °C on North Africa–Europe logistics routes?",
      "answer": "A six-point temperature-compensation table is evaluated every 30 s using the probe’s internal thermistor. Volumetric output remains within ±0.45 % across the 8–30 °C daily range."
    },
    {
      "question": "Which J1939 engine and transmission parameters detect thermal stress during prolonged border-queue idling near Casablanca?",
      "answer": "Coolant temperature, transmission oil temperature and fan-clutch duty cycle are sampled at 2 Hz. Sustained coolant temperatures above 95 °C while vehicle speed remains zero for more than 10 minutes generate an MQTT thermal-alert."
    }
  ]
};

const locationsPath = path.join(__dirname, 'data', 'locations.js');
let content = fs.readFileSync(locationsPath, 'utf8');

// Inject faqs array into each location object safely
for (const [slug, faqs] of Object.entries(grokFaqs)) {
  const faqsStr = JSON.stringify(faqs, null, 4).replace(/^/gm, '    ').trim();
  // Find the exact object and insert faqs before the closing brace
  // This uses a non-greedy match to find the specific slug's object
  const regex = new RegExp(`(slug:\\s*'${slug}'[\\s\\S]*?)(})`, 'm');
  content = content.replace(regex, `$1,\n  faqs: ${faqsStr}\n  $2`);
}

// Clean up any double commas if they got created
content = content.replace(/,(\s*,\s*faqs:)/g, '$1');

fs.writeFileSync(locationsPath, content, 'utf8');
console.log('Successfully injected faqs securely.');
