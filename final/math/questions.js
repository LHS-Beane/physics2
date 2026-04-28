const QUESTIONS = [
  {
    "id": "E1",
    "topic": "Electrostatics",
    "level": "standard",
    "question": "Two objects electrically attract. Which statement must be true?",
    "choices": [
      "Both objects must be positive",
      "Both objects must be negative",
      "The objects have opposite net charges, or one may be neutral and polarized",
      "The objects must have equal magnitude charges"
    ],
    "answer": 2
  },
  {
    "id": "E2",
    "topic": "Electrostatics",
    "level": "standard",
    "question": "A neutral conducting sphere is brought near a positively charged rod without touching. What is the most likely interaction?",
    "choices": [
      "Repulsion only",
      "Attraction due to polarization",
      "No interaction because the sphere is neutral",
      "The sphere becomes permanently positive"
    ],
    "answer": 1
  },
  {
    "id": "E3",
    "topic": "Electrostatics",
    "level": "challenge",
    "question": "A charge of +3.0 \u03bcC and a charge of -6.0 \u03bcC are separated by 0.20 m. What is the magnitude of the force between them? Use k = 8.99\u00d710^9 N\u00b7m\u00b2/C\u00b2.",
    "choices": [
      "2.7 N",
      "4.0 N",
      "0.27 N",
      "27 N"
    ],
    "answer": 1
  },
  {
    "id": "E4",
    "topic": "Electrostatics",
    "level": "challenge",
    "question": "The distance between two point charges is doubled. What happens to the magnitude of the electric force?",
    "choices": [
      "It doubles",
      "It is cut in half",
      "It becomes one-fourth as large",
      "It becomes four times as large"
    ],
    "answer": 2
  },
  {
    "id": "E5",
    "topic": "Electrostatics",
    "level": "standard",
    "question": "The electric field direction at a point is defined as the direction of the force on which kind of test charge?",
    "choices": [
      "A positive test charge",
      "A negative test charge",
      "A neutral conductor",
      "An electron only"
    ],
    "answer": 0
  },
  {
    "id": "E6",
    "topic": "Electrostatics",
    "level": "challenge",
    "question": "What is the electric field magnitude 0.50 m from a +2.0 \u03bcC point charge? Use k = 8.99\u00d710^9 N\u00b7m\u00b2/C\u00b2.",
    "choices": [
      "7.2\u00d710^4 N/C",
      "3.6\u00d710^4 N/C",
      "1.8\u00d710^4 N/C",
      "1.4\u00d710^5 N/C"
    ],
    "answer": 0
  },
  {
    "id": "E7",
    "topic": "Electrostatics",
    "level": "challenge",
    "question": "At a point, the electric field is 250 N/C east. What force acts on a +4.0 \u03bcC charge placed there?",
    "choices": [
      "1.0\u00d710^-3 N east",
      "1.0\u00d710^-3 N west",
      "6.25\u00d710^7 N east",
      "6.25\u00d710^7 N west"
    ],
    "answer": 0
  },
  {
    "id": "E8",
    "topic": "Electrostatics",
    "level": "standard",
    "question": "If the net electric field at a point is zero, what must be true about a small positive test charge placed there?",
    "choices": [
      "It must have zero electric potential energy",
      "The net electric force on it is zero",
      "There are no charges nearby",
      "The electric potential must be zero"
    ],
    "answer": 1
  },
  {
    "id": "G1",
    "topic": "Gauss/Potential/Capacitance",
    "level": "standard",
    "question": "Kirchhoff aside, Gauss's Law is fundamentally a statement about which quantity?",
    "choices": [
      "Electric flux through a closed surface",
      "Current through a resistor",
      "Magnetic force on a charge",
      "Voltage across a capacitor only"
    ],
    "answer": 0
  },
  {
    "id": "G2",
    "topic": "Gauss/Potential/Capacitance",
    "level": "challenge",
    "question": "A closed Gaussian surface encloses +3.0 \u03bcC and -1.0 \u03bcC. What is the net electric flux through the surface?",
    "choices": [
      "0",
      "(2.0\u00d710^-6)/\u03b50",
      "(4.0\u00d710^-6)/\u03b50",
      "(-2.0\u00d710^-6)/\u03b50"
    ],
    "answer": 1
  },
  {
    "id": "G3",
    "topic": "Gauss/Potential/Capacitance",
    "level": "standard",
    "question": "If a closed surface encloses zero net charge, what can you conclude about the net electric flux?",
    "choices": [
      "The net flux is zero",
      "The electric field is zero everywhere on the surface",
      "The potential is zero everywhere",
      "No charges exist outside the surface"
    ],
    "answer": 0
  },
  {
    "id": "G4",
    "topic": "Gauss/Potential/Capacitance",
    "level": "challenge",
    "question": "For a point charge, why is a spherical Gaussian surface centered on the charge useful?",
    "choices": [
      "The electric field is tangent everywhere",
      "The field magnitude is constant on the surface and parallel to area vectors",
      "It makes the enclosed charge zero",
      "It removes the need for \u03b50"
    ],
    "answer": 1
  },
  {
    "id": "P1",
    "topic": "Gauss/Potential/Capacitance",
    "level": "standard",
    "question": "Electric potential is best described as:",
    "choices": [
      "Force per unit charge",
      "Energy per unit charge",
      "Charge per unit time",
      "Resistance per unit length"
    ],
    "answer": 1
  },
  {
    "id": "P2",
    "topic": "Gauss/Potential/Capacitance",
    "level": "challenge",
    "question": "A +2.0 \u03bcC charge moves through a potential difference of +50 V. What is the change in electric potential energy?",
    "choices": [
      "1.0\u00d710^-4 J",
      "2.5\u00d710^7 J",
      "4.0\u00d710^-8 J",
      "100 J"
    ],
    "answer": 0
  },
  {
    "id": "P3",
    "topic": "Gauss/Potential/Capacitance",
    "level": "challenge",
    "question": "What is the electric potential 0.30 m from a +4.0 \u03bcC point charge? Use k = 8.99\u00d710^9 N\u00b7m\u00b2/C\u00b2.",
    "choices": [
      "1.2\u00d710^5 V",
      "4.8\u00d710^5 V",
      "3.0\u00d710^4 V",
      "1.1\u00d710^-4 V"
    ],
    "answer": 0
  },
  {
    "id": "C1",
    "topic": "Gauss/Potential/Capacitance",
    "level": "standard",
    "question": "Capacitance is defined as:",
    "choices": [
      "C = Q/\u0394V",
      "C = \u0394V/Q",
      "C = IR",
      "C = \u03c1L/A"
    ],
    "answer": 0
  },
  {
    "id": "C2",
    "topic": "Gauss/Potential/Capacitance",
    "level": "challenge",
    "question": "A capacitor stores 12 \u03bcC of charge when connected to 6.0 V. What is its capacitance?",
    "choices": [
      "2.0 \u03bcF",
      "72 \u03bcF",
      "0.50 \u03bcF",
      "18 \u03bcF"
    ],
    "answer": 0
  },
  {
    "id": "C3",
    "topic": "Gauss/Potential/Capacitance",
    "level": "challenge",
    "question": "A parallel-plate capacitor has plate area doubled while separation stays the same. What happens to its capacitance?",
    "choices": [
      "It doubles",
      "It halves",
      "It quadruples",
      "It does not change"
    ],
    "answer": 0
  },
  {
    "id": "C4",
    "topic": "Gauss/Potential/Capacitance",
    "level": "challenge",
    "question": "A 10 \u03bcF capacitor is connected to 12 V. How much energy is stored?",
    "choices": [
      "7.2\u00d710^-4 J",
      "1.2\u00d710^-4 J",
      "1.44\u00d710^-3 J",
      "60 J"
    ],
    "answer": 0
  },
  {
    "id": "R1",
    "topic": "Current/Resistance/Circuits",
    "level": "standard",
    "question": "Which cause-effect relationship is most appropriate for a simple resistor connected to a battery?",
    "choices": [
      "Current causes voltage",
      "Voltage causes current",
      "Resistance causes voltage",
      "Resistance causes current"
    ],
    "answer": 1
  },
  {
    "id": "R2",
    "topic": "Current/Resistance/Circuits",
    "level": "standard",
    "question": "The length of a wire is kept the same while its radius is doubled. What happens to the resistance?",
    "choices": [
      "It becomes 1/4 as large",
      "It becomes 1/2 as large",
      "It doubles",
      "It quadruples"
    ],
    "answer": 0
  },
  {
    "id": "R3",
    "topic": "Current/Resistance/Circuits",
    "level": "standard",
    "question": "The length of a certain wire is doubled while its radius is kept constant. What happens to its resistance?",
    "choices": [
      "It halves",
      "It doubles",
      "It quadruples",
      "It stays the same"
    ],
    "answer": 1
  },
  {
    "id": "R4",
    "topic": "Current/Resistance/Circuits",
    "level": "standard",
    "question": "The resistivity of a wire depends primarily on:",
    "choices": [
      "Length only",
      "Radius only",
      "Material and temperature",
      "Voltage across the wire only"
    ],
    "answer": 2
  },
  {
    "id": "R5",
    "topic": "Current/Resistance/Circuits",
    "level": "challenge",
    "question": "A 12 V battery is connected to a 6.0 \u03a9 resistor. What is the current?",
    "choices": [
      "0.50 A",
      "2.0 A",
      "18 A",
      "72 A"
    ],
    "answer": 1
  },
  {
    "id": "R6",
    "topic": "Current/Resistance/Circuits",
    "level": "challenge",
    "question": "A 4.0 \u03a9 resistor carries 3.0 A. What power is dissipated?",
    "choices": [
      "12 W",
      "36 W",
      "48 W",
      "9 W"
    ],
    "answer": 1
  },
  {
    "id": "R7",
    "topic": "Current/Resistance/Circuits",
    "level": "standard",
    "question": "A kilowatt-hour is a unit of:",
    "choices": [
      "Power",
      "Energy",
      "Current",
      "Resistance"
    ],
    "answer": 1
  },
  {
    "id": "R8",
    "topic": "Current/Resistance/Circuits",
    "level": "challenge",
    "question": "A kilowatt-hour is equivalent to:",
    "choices": [
      "3600 J",
      "3.6\u00d710^6 J",
      "1000 J/s",
      "3600 J/s"
    ],
    "answer": 1
  },
  {
    "id": "R9",
    "topic": "Current/Resistance/Circuits",
    "level": "challenge",
    "question": "If resistance doubles while voltage remains constant, what happens to power?",
    "choices": [
      "It doubles",
      "It quadruples",
      "It halves",
      "It becomes one-fourth"
    ],
    "answer": 2
  },
  {
    "id": "R10",
    "topic": "Current/Resistance/Circuits",
    "level": "challenge",
    "question": "If voltage doubles across a constant resistance, what happens to power?",
    "choices": [
      "It doubles",
      "It halves",
      "It quadruples",
      "It stays the same"
    ],
    "answer": 2
  },
  {
    "id": "R11",
    "topic": "Current/Resistance/Circuits",
    "level": "challenge",
    "question": "If current doubles through a constant resistance, what happens to power?",
    "choices": [
      "It doubles",
      "It quadruples",
      "It halves",
      "It becomes one-fourth"
    ],
    "answer": 1
  },
  {
    "id": "R12",
    "topic": "Current/Resistance/Circuits",
    "level": "standard",
    "question": "When unequal resistors are connected in parallel, what is the same across each resistor?",
    "choices": [
      "Current",
      "Voltage",
      "Power",
      "Resistance"
    ],
    "answer": 1
  },
  {
    "id": "R13",
    "topic": "Current/Resistance/Circuits",
    "level": "standard",
    "question": "When unequal resistors are connected in series, what is the same through each resistor?",
    "choices": [
      "Current",
      "Voltage",
      "Power",
      "Resistance"
    ],
    "answer": 0
  },
  {
    "id": "R14",
    "topic": "Current/Resistance/Circuits",
    "level": "challenge",
    "question": "Two resistors, 6 \u03a9 and 3 \u03a9, are connected in series to a 9 V battery. What is the current?",
    "choices": [
      "1 A",
      "2 A",
      "3 A",
      "9 A"
    ],
    "answer": 0
  },
  {
    "id": "R15",
    "topic": "Current/Resistance/Circuits",
    "level": "challenge",
    "question": "Two resistors, 6 \u03a9 and 3 \u03a9, are connected in parallel. What is the equivalent resistance?",
    "choices": [
      "9 \u03a9",
      "4.5 \u03a9",
      "2 \u03a9",
      "3 \u03a9"
    ],
    "answer": 2
  },
  {
    "id": "R16",
    "topic": "Current/Resistance/Circuits",
    "level": "challenge",
    "question": "A 10 \u03a9 and 20 \u03a9 resistor are in series with a 12 V battery. What is the voltage drop across the 20 \u03a9 resistor?",
    "choices": [
      "4 V",
      "6 V",
      "8 V",
      "12 V"
    ],
    "answer": 2
  },
  {
    "id": "R17",
    "topic": "Current/Resistance/Circuits",
    "level": "standard",
    "question": "Kirchhoff's junction rule is a statement of conservation of:",
    "choices": [
      "Energy",
      "Charge",
      "Momentum",
      "Angular momentum"
    ],
    "answer": 1
  },
  {
    "id": "R18",
    "topic": "Current/Resistance/Circuits",
    "level": "standard",
    "question": "Kirchhoff's loop rule is a statement of conservation of:",
    "choices": [
      "Energy",
      "Charge",
      "Momentum",
      "Mass"
    ],
    "answer": 0
  },
  {
    "id": "R19",
    "topic": "Current/Resistance/Circuits",
    "level": "challenge",
    "question": "A wire of length L has resistance R. It is cut in half and the two halves are connected in parallel across the same battery. What is the new total current compared with the original?",
    "choices": [
      "I/4",
      "I/2",
      "2I",
      "4I"
    ],
    "answer": 3
  },
  {
    "id": "R20",
    "topic": "Current/Resistance/Circuits",
    "level": "challenge",
    "question": "A 5 \u03a9 resistor and a 10 \u03a9 resistor are in parallel across 20 V. What is the total current from the source?",
    "choices": [
      "2 A",
      "4 A",
      "6 A",
      "8 A"
    ],
    "answer": 2
  },
  {
    "id": "M1",
    "topic": "Magnetism",
    "level": "standard",
    "question": "The direction of the magnetic force on a current-carrying wire is:",
    "choices": [
      "Parallel to the current",
      "Parallel to the magnetic field",
      "Perpendicular to both the current and magnetic field",
      "Opposite the current"
    ],
    "answer": 2
  },
  {
    "id": "M2",
    "topic": "Magnetism",
    "level": "standard",
    "question": "A moving charged particle experiences no magnetic force. What can definitely be concluded?",
    "choices": [
      "There is no magnetic field",
      "The particle is moving perpendicular to the field",
      "Either no magnetic field exists or the velocity is parallel to the field",
      "The particle must be neutral"
    ],
    "answer": 2
  },
  {
    "id": "M3",
    "topic": "Magnetism",
    "level": "standard",
    "question": "A charged particle moves perpendicular to a uniform magnetic field. Neglecting gravity, what path does it follow?",
    "choices": [
      "Straight line",
      "Circular path",
      "Parabolic path",
      "It immediately stops"
    ],
    "answer": 1
  },
  {
    "id": "M4",
    "topic": "Magnetism",
    "level": "standard",
    "question": "A magnetic field can change a moving charged particle's direction. Why does it not change the particle's speed?",
    "choices": [
      "The magnetic force is zero",
      "The magnetic force is perpendicular to velocity",
      "The charge disappears",
      "Magnetic fields only act on neutral objects"
    ],
    "answer": 1
  },
  {
    "id": "M5",
    "topic": "Magnetism",
    "level": "challenge",
    "question": "A particle with charge +e moves in a circle of radius R in a magnetic field. If its speed doubles, what is the new radius?",
    "choices": [
      "R/2",
      "R",
      "2R",
      "4R"
    ],
    "answer": 2
  },
  {
    "id": "M6",
    "topic": "Magnetism",
    "level": "challenge",
    "question": "A particle with charge +e moves in a circle of radius R. If the charge were +2e at the same speed and field, what would the radius be?",
    "choices": [
      "R/2",
      "R",
      "2R",
      "4R"
    ],
    "answer": 0
  },
  {
    "id": "M7",
    "topic": "Magnetism",
    "level": "challenge",
    "question": "A proton moves in a circle in a uniform magnetic field with period T. If its speed triples, what happens to the period?",
    "choices": [
      "T/3",
      "T",
      "3T",
      "9T"
    ],
    "answer": 1
  },
  {
    "id": "M8",
    "topic": "Magnetism",
    "level": "challenge",
    "question": "A +2.0 \u03bcC charge moves at 3.0\u00d710^4 m/s perpendicular to a 0.50 T magnetic field. What is the magnetic force?",
    "choices": [
      "0.030 N",
      "3.0\u00d710^-2 N",
      "3.0\u00d710^-8 N",
      "1.5\u00d710^4 N"
    ],
    "answer": 1
  },
  {
    "id": "M9",
    "topic": "Magnetism",
    "level": "challenge",
    "question": "A 0.40 m wire carries 5.0 A perpendicular to a 0.20 T magnetic field. What is the magnetic force on the wire?",
    "choices": [
      "0.40 N",
      "1.0 N",
      "4.0 N",
      "0.04 N"
    ],
    "answer": 0
  },
  {
    "id": "M10",
    "topic": "Magnetism",
    "level": "standard",
    "question": "If two long parallel wires carry current in the same direction, they:",
    "choices": [
      "Attract each other",
      "Repel each other",
      "Do not interact",
      "Rotate but do not translate"
    ],
    "answer": 0
  },
  {
    "id": "M11",
    "topic": "Magnetism",
    "level": "standard",
    "question": "If two long parallel wires carry current in opposite directions, they:",
    "choices": [
      "Attract each other",
      "Repel each other",
      "Do not interact",
      "Both lift upward"
    ],
    "answer": 1
  },
  {
    "id": "M12",
    "topic": "Magnetism",
    "level": "challenge",
    "question": "Two long parallel wires each carry current I and attract with force F. If each current is halved, what is the new force?",
    "choices": [
      "F/4",
      "F/2",
      "F",
      "2F"
    ],
    "answer": 0
  },
  {
    "id": "M13",
    "topic": "Magnetism",
    "level": "challenge",
    "question": "A long straight wire produces 20 mT at distance d. At what distance is the field 5 mT?",
    "choices": [
      "2d",
      "4d",
      "8d",
      "16d"
    ],
    "answer": 1
  },
  {
    "id": "M14",
    "topic": "Magnetism",
    "level": "challenge",
    "question": "The magnetic field is 4 \u03bcT at 2 cm from a long straight wire. What is the field at 4 cm?",
    "choices": [
      "1 \u03bcT",
      "2 \u03bcT",
      "4 \u03bcT",
      "8 \u03bcT"
    ],
    "answer": 1
  },
  {
    "id": "M15",
    "topic": "Magnetism",
    "level": "challenge",
    "question": "The magnetic field is 4 \u03bcT at 2 cm from a long straight wire. What is the field at 1 cm?",
    "choices": [
      "2 \u03bcT",
      "4 \u03bcT",
      "8 \u03bcT",
      "16 \u03bcT"
    ],
    "answer": 2
  },
  {
    "id": "M16",
    "topic": "Magnetism",
    "level": "standard",
    "question": "If a bar magnet is cut in half, what happens?",
    "choices": [
      "One half is only north and the other only south",
      "Each half becomes a smaller magnet with both poles",
      "Both halves lose magnetism completely",
      "Only the north half remains magnetic"
    ],
    "answer": 1
  },
  {
    "id": "M17",
    "topic": "Magnetism",
    "level": "standard",
    "question": "The maximum torque on a current loop occurs when the plane of the loop is at what angle to the magnetic field?",
    "choices": [
      "0\u00b0",
      "45\u00b0",
      "90\u00b0",
      "135\u00b0"
    ],
    "answer": 0
  },
  {
    "id": "M18",
    "topic": "Magnetism",
    "level": "challenge",
    "question": "A coil has N = 20 turns, area 0.015 m\u00b2, current 2.0 A, and is positioned for maximum torque in a 0.30 T field. What is the maximum torque?",
    "choices": [
      "0.18 N\u00b7m",
      "0.09 N\u00b7m",
      "0.45 N\u00b7m",
      "1.8 N\u00b7m"
    ],
    "answer": 0
  },
  {
    "id": "I1",
    "topic": "Induction",
    "level": "standard",
    "question": "Faraday's Law says an emf is induced when there is a change in:",
    "choices": [
      "Electric charge only",
      "Magnetic flux",
      "Resistance only",
      "Mass"
    ],
    "answer": 1
  },
  {
    "id": "I2",
    "topic": "Induction",
    "level": "standard",
    "question": "Lenz's Law says the induced current produces a magnetic field that:",
    "choices": [
      "Always strengthens the original field",
      "Always cancels the original field completely",
      "Opposes the change in magnetic flux",
      "Points randomly"
    ],
    "answer": 2
  },
  {
    "id": "I3",
    "topic": "Induction",
    "level": "challenge",
    "question": "A coil with 50 turns has magnetic flux per turn change from 0.020 Wb to 0.005 Wb in 0.10 s. What is the magnitude of the induced emf?",
    "choices": [
      "7.5 V",
      "0.75 V",
      "15 V",
      "2.5 V"
    ],
    "answer": 0
  },
  {
    "id": "I4",
    "topic": "Induction",
    "level": "challenge",
    "question": "A 0.40 m conducting bar moves at 3.0 m/s perpendicular to a 0.50 T magnetic field. What is the motional emf?",
    "choices": [
      "0.20 V",
      "0.60 V",
      "1.5 V",
      "6.0 V"
    ],
    "answer": 1
  },
  {
    "id": "I5",
    "topic": "Induction",
    "level": "standard",
    "question": "A stationary magnet near a stationary conducting loop induces:",
    "choices": [
      "A steady current",
      "No current",
      "A current only if the loop has resistance zero",
      "A current only if the magnet is north-up"
    ],
    "answer": 1
  },
  {
    "id": "I6",
    "topic": "Induction",
    "level": "challenge",
    "question": "If magnetic flux through a loop increases into the page, what direction is the induced magnetic field?",
    "choices": [
      "Into the page",
      "Out of the page",
      "To the right",
      "Zero"
    ],
    "answer": 1
  },
  {
    "id": "I7",
    "topic": "Induction",
    "level": "challenge",
    "question": "If magnetic flux through a loop decreases out of the page, what direction is the induced magnetic field?",
    "choices": [
      "Out of the page",
      "Into the page",
      "To the left",
      "Zero"
    ],
    "answer": 0
  },
  {
    "id": "I8",
    "topic": "Induction",
    "level": "challenge",
    "question": "A loop's area doubles while a perpendicular uniform magnetic field stays constant. What happens to magnetic flux?",
    "choices": [
      "It halves",
      "It doubles",
      "It becomes four times larger",
      "It stays the same"
    ],
    "answer": 1
  },
  {
    "id": "W1",
    "topic": "EM Waves",
    "level": "standard",
    "question": "In vacuum, which type of electromagnetic wave travels fastest?",
    "choices": [
      "Radio waves",
      "Visible light",
      "Gamma rays",
      "They all travel at the same speed"
    ],
    "answer": 3
  },
  {
    "id": "W2",
    "topic": "EM Waves",
    "level": "standard",
    "question": "In an electromagnetic wave in vacuum, the electric and magnetic fields are:",
    "choices": [
      "Parallel to each other and propagation",
      "Perpendicular to each other and to propagation",
      "Parallel to each other and perpendicular to propagation",
      "Perpendicular to each other but parallel to propagation"
    ],
    "answer": 1
  },
  {
    "id": "W3",
    "topic": "EM Waves",
    "level": "standard",
    "question": "Which is not an electromagnetic wave?",
    "choices": [
      "Infrared",
      "Ultraviolet",
      "Sound",
      "Gamma ray"
    ],
    "answer": 2
  },
  {
    "id": "W4",
    "topic": "EM Waves",
    "level": "standard",
    "question": "Correct order from low frequency to high frequency is:",
    "choices": [
      "Radio, microwave, infrared, visible, ultraviolet, x-ray, gamma",
      "Radio, infrared, microwave, visible, ultraviolet, x-ray, gamma",
      "Gamma, x-ray, ultraviolet, visible, infrared, microwave, radio",
      "Radio, visible, microwave, infrared, ultraviolet, x-ray, gamma"
    ],
    "answer": 0
  },
  {
    "id": "W5",
    "topic": "EM Waves",
    "level": "challenge",
    "question": "A microwave oven operates at 2.45 GHz. What is the wavelength? Use c = 3.00\u00d710^8 m/s.",
    "choices": [
      "0.122 m",
      "0.061 m",
      "8.17 m",
      "1.22\u00d710^-3 m"
    ],
    "answer": 0
  },
  {
    "id": "W6",
    "topic": "EM Waves",
    "level": "challenge",
    "question": "An EM wave has electric field amplitude E0 = 600 V/m. What is the magnetic field amplitude?",
    "choices": [
      "2.0\u00d710^-6 T",
      "1.8\u00d710^11 T",
      "5.0\u00d710^-7 T",
      "600 T"
    ],
    "answer": 0
  },
  {
    "id": "W7",
    "topic": "EM Waves",
    "level": "challenge",
    "question": "If the electric field amplitude of an EM wave doubles, what happens to intensity?",
    "choices": [
      "It doubles",
      "It halves",
      "It quadruples",
      "It stays the same"
    ],
    "answer": 2
  },
  {
    "id": "W8",
    "topic": "EM Waves",
    "level": "challenge",
    "question": "An EM wave has E0 = 500 V/m. What is its average intensity? Use I = 1/2 c\u03b50E0\u00b2, c = 3.00\u00d710^8 m/s, \u03b50 = 8.85\u00d710^-12.",
    "choices": [
      "33 W/m\u00b2",
      "332 W/m\u00b2",
      "3.32\u00d710^4 W/m\u00b2",
      "0.332 W/m\u00b2"
    ],
    "answer": 1
  },
  {
    "id": "W9",
    "topic": "EM Waves",
    "level": "standard",
    "question": "The Poynting vector points in the direction of:",
    "choices": [
      "Electric field only",
      "Magnetic field only",
      "Energy flow / wave propagation",
      "Charge motion only"
    ],
    "answer": 2
  },
  {
    "id": "W10",
    "topic": "EM Waves",
    "level": "standard",
    "question": "In a vacuum EM wave, the electric and magnetic fields carry:",
    "choices": [
      "Equal energy",
      "No energy",
      "Electric field carries all energy",
      "Magnetic field carries all energy"
    ],
    "answer": 0
  },
  {
    "id": "S1",
    "topic": "Relativity/Black Holes",
    "level": "standard",
    "question": "Which are postulates of special relativity?",
    "choices": [
      "Physics laws are the same in inertial frames and light speed is the same for all inertial observers",
      "All reference frames are identical, including accelerating frames",
      "Time is absolute and light speed depends on the observer",
      "Mass cannot create gravity"
    ],
    "answer": 0
  },
  {
    "id": "S2",
    "topic": "Relativity/Black Holes",
    "level": "standard",
    "question": "A passenger in a windowless spaceship moving at constant velocity cannot determine the ship's speed by internal experiments alone. This illustrates:",
    "choices": [
      "The equivalence principle only",
      "The relativity principle",
      "Gauss's Law",
      "Lenz's Law"
    ],
    "answer": 1
  },
  {
    "id": "S3",
    "topic": "Relativity/Black Holes",
    "level": "standard",
    "question": "A passenger on a spaceship observes their own watch as the spaceship speeds up. What do they observe locally?",
    "choices": [
      "Their watch runs normally",
      "Their watch slows down",
      "Their watch speeds up",
      "Their watch stops"
    ],
    "answer": 0
  },
  {
    "id": "S4",
    "topic": "Relativity/Black Holes",
    "level": "standard",
    "question": "Length contraction affects which dimension of a moving object as seen by a stationary observer?",
    "choices": [
      "All dimensions equally",
      "Only dimensions perpendicular to motion",
      "Only dimensions parallel to motion",
      "No dimensions"
    ],
    "answer": 2
  },
  {
    "id": "S5",
    "topic": "Relativity/Black Holes",
    "level": "challenge",
    "question": "A spaceship moves at 0.80c. What is \u03b3?",
    "choices": [
      "1.25",
      "1.67",
      "2.00",
      "0.60"
    ],
    "answer": 1
  },
  {
    "id": "S6",
    "topic": "Relativity/Black Holes",
    "level": "challenge",
    "question": "A clock moving at 0.80c measures 6.0 years. How much time passes in the Earth frame?",
    "choices": [
      "3.6 years",
      "6.0 years",
      "10 years",
      "13.3 years"
    ],
    "answer": 2
  },
  {
    "id": "S7",
    "topic": "Relativity/Black Holes",
    "level": "challenge",
    "question": "A 100 m spacecraft moves past Earth at 0.60c. What length does Earth measure? \u03b3 = 1.25.",
    "choices": [
      "80 m",
      "100 m",
      "125 m",
      "60 m"
    ],
    "answer": 0
  },
  {
    "id": "S8",
    "topic": "Relativity/Black Holes",
    "level": "standard",
    "question": "A twin travels at very high speed to a distant star and returns. Compared with the twin who stayed on Earth, the traveling twin is:",
    "choices": [
      "Older",
      "Younger",
      "The same age",
      "Impossible to determine in relativity"
    ],
    "answer": 1
  },
  {
    "id": "S9",
    "topic": "Relativity/Black Holes",
    "level": "challenge",
    "question": "A spaceship moves at 0.80c relative to Earth and fires a missile forward at 0.60c relative to the ship. Relative to Earth, the missile's speed is:",
    "choices": [
      "1.40c",
      "Exactly c",
      "Greater than 0.80c but less than c",
      "Less than 0.60c"
    ],
    "answer": 2
  },
  {
    "id": "S10",
    "topic": "Relativity/Black Holes",
    "level": "standard",
    "question": "If you move toward a light beam at 2/3c, what speed do you measure for the light?",
    "choices": [
      "1/3c",
      "2/3c",
      "c",
      "5/3c"
    ],
    "answer": 2
  },
  {
    "id": "S11",
    "topic": "Relativity/Black Holes",
    "level": "standard",
    "question": "General relativity describes gravity as:",
    "choices": [
      "A force caused by electric fields",
      "Curvature of spacetime by mass-energy",
      "Magnetic attraction between planets",
      "A violation of inertia"
    ],
    "answer": 1
  },
  {
    "id": "S12",
    "topic": "Relativity/Black Holes",
    "level": "standard",
    "question": "The event horizon of a black hole is best described as:",
    "choices": [
      "The surface of the star",
      "The boundary beyond which light cannot escape",
      "The center singularity",
      "The orbit where all matter stops moving"
    ],
    "answer": 1
  },
  {
    "id": "S13",
    "topic": "Relativity/Black Holes",
    "level": "challenge",
    "question": "A 2.0 kg object is fully converted to energy. How much energy is released? Use c = 3.00\u00d710^8 m/s.",
    "choices": [
      "6.0\u00d710^8 J",
      "1.8\u00d710^17 J",
      "9.0\u00d710^16 J",
      "2.0\u00d710^8 J"
    ],
    "answer": 1
  },
  {
    "id": "S14",
    "topic": "Relativity/Black Holes",
    "level": "standard",
    "question": "Near a massive object such as a black hole, a distant observer would say clocks closer to the mass run:",
    "choices": [
      "Faster",
      "Slower",
      "At the same rate",
      "Backward"
    ],
    "answer": 1
  }
];
