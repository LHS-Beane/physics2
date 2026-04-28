const QUESTIONS = [
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "standard",
    "question": "Two identical positive charges are separated by a distance r. If the distance is doubled, what happens to the electric force between them?",
    "choices": [
      "It doubles",
      "It becomes one-half",
      "It becomes one-fourth",
      "It quadruples"
    ],
    "answer": 2
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "standard",
    "question": "A +2 \u03bcC charge and a +6 \u03bcC charge are separated by 0.30 m. Compared with the force on the +2 \u03bcC charge, the force on the +6 \u03bcC charge is:",
    "choices": [
      "three times larger",
      "three times smaller",
      "equal in magnitude",
      "zero"
    ],
    "answer": 2
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "standard",
    "question": "The electric field at a point is 400 N/C to the right. What force acts on a +0.50 C charge placed there?",
    "choices": [
      "200 N right",
      "200 N left",
      "800 N right",
      "800 N left"
    ],
    "answer": 0
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "standard",
    "question": "The electric field at a point is 400 N/C to the right. What force acts on a -0.50 C charge placed there?",
    "choices": [
      "200 N right",
      "200 N left",
      "800 N right",
      "800 N left"
    ],
    "answer": 1
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "standard",
    "question": "A positive test charge is placed near a negative source charge. The electric field at the test charge points:",
    "choices": [
      "away from the negative charge",
      "toward the negative charge",
      "perpendicular to the line between charges",
      "nowhere because the source is negative"
    ],
    "answer": 1
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "standard",
    "question": "At a point midway between two equal positive charges, the net electric field is:",
    "choices": [
      "zero",
      "toward the left charge",
      "toward the right charge",
      "away from both charges"
    ],
    "answer": 0
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "standard",
    "question": "At a point midway between a +Q charge and a -Q charge, the electric field points:",
    "choices": [
      "toward the positive charge",
      "toward the negative charge",
      "zero",
      "perpendicular to the line"
    ],
    "answer": 1
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "standard",
    "question": "Electric potential is best described as:",
    "choices": [
      "force per unit charge",
      "energy per unit charge",
      "charge per unit energy",
      "field per unit distance"
    ],
    "answer": 1
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "standard",
    "question": "A charge of +3 C moves through a potential difference of 4 V. What is the change in electric potential energy?",
    "choices": [
      "0.75 J",
      "1.33 J",
      "7 J",
      "12 J"
    ],
    "answer": 3
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "standard",
    "question": "A proton moves from low electric potential to high electric potential. Its electric potential energy:",
    "choices": [
      "increases",
      "decreases",
      "stays the same",
      "becomes zero"
    ],
    "answer": 0
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "standard",
    "question": "An electron moves from low electric potential to high electric potential. Its electric potential energy:",
    "choices": [
      "increases",
      "decreases",
      "stays the same",
      "must become positive"
    ],
    "answer": 1
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "standard",
    "question": "If the electric potential due to a point charge is V at distance r, what is the potential at distance 2r?",
    "choices": [
      "V/4",
      "V/2",
      "2V",
      "4V"
    ],
    "answer": 1
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "standard",
    "question": "If the electric field due to a point charge is E at distance r, what is the field at distance 3r?",
    "choices": [
      "E/3",
      "E/6",
      "E/9",
      "9E"
    ],
    "answer": 2
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "standard",
    "question": "Which quantity is a scalar?",
    "choices": [
      "Electric field",
      "Electric force",
      "Electric potential",
      "Displacement"
    ],
    "answer": 2
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "standard",
    "question": "A uniform electric field points to the right. Equipotential lines are:",
    "choices": [
      "parallel to the field",
      "perpendicular to the field",
      "curved around the field",
      "only possible near point charges"
    ],
    "answer": 1
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "standard",
    "question": "If no work is required to move a charge between two points, those points must have:",
    "choices": [
      "the same electric field",
      "the same electric potential",
      "zero charge",
      "zero electric force"
    ],
    "answer": 1
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "challenge",
    "question": "A +1 \u03bcC charge is placed where the electric potential is 200 V. Its potential energy is:",
    "choices": [
      "2.0\u00d710^-4 J",
      "2.0\u00d710^-6 J",
      "2.0\u00d710^-8 J",
      "2.0\u00d710^8 J"
    ],
    "answer": 0
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "challenge",
    "question": "Two point charges are brought closer together. If they have the same sign, the electric potential energy of the pair:",
    "choices": [
      "increases",
      "decreases",
      "stays zero",
      "must become negative"
    ],
    "answer": 0
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "challenge",
    "question": "Two point charges are brought closer together. If they have opposite signs, the electric potential energy of the pair:",
    "choices": [
      "increases",
      "decreases",
      "stays positive",
      "becomes zero"
    ],
    "answer": 1
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "challenge",
    "question": "A charge experiences zero net electric force at a point. What must be true about the electric field there?",
    "choices": [
      "It is zero",
      "It is positive",
      "It is negative",
      "It is infinite"
    ],
    "answer": 0
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "challenge",
    "question": "Which statement correctly compares electric field and electric potential?",
    "choices": [
      "Both are vectors",
      "Both are scalars",
      "Electric field is vector; potential is scalar",
      "Electric field is scalar; potential is vector"
    ],
    "answer": 2
  },
  {
    "topic": "Electric Fields, Coulomb's Law & Potential",
    "difficulty": "challenge",
    "question": "A +4 \u03bcC charge is 0.20 m from a point. Using k\u22489\u00d710^9, the electric potential at that point is closest to:",
    "choices": [
      "1.8\u00d710^5 V",
      "1.8\u00d710^4 V",
      "7.2\u00d710^5 V",
      "7.2\u00d710^4 V"
    ],
    "answer": 0
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "standard",
    "question": "Gauss's Law relates net electric flux through a closed surface to:",
    "choices": [
      "total charge on the surface",
      "charge enclosed by the surface",
      "electric potential outside the surface",
      "magnetic flux through the surface"
    ],
    "answer": 1
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "standard",
    "question": "If a closed Gaussian surface encloses zero net charge, the net electric flux through it is:",
    "choices": [
      "zero",
      "positive",
      "negative",
      "impossible to determine"
    ],
    "answer": 0
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "standard",
    "question": "If the electric field is tangent everywhere to a closed surface, the electric flux through that surface is:",
    "choices": [
      "maximum",
      "zero",
      "negative",
      "equal to E/A"
    ],
    "answer": 1
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "standard",
    "question": "A point charge is placed at the center of a spherical Gaussian surface. If the radius of the surface doubles, the total electric flux:",
    "choices": [
      "doubles",
      "halves",
      "becomes one-fourth",
      "stays the same"
    ],
    "answer": 3
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "standard",
    "question": "Gauss's Law is easiest to use when the charge distribution has:",
    "choices": [
      "high speed",
      "symmetry",
      "large mass",
      "nonzero magnetic field"
    ],
    "answer": 1
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "standard",
    "question": "For a point charge, the best Gaussian surface is usually a:",
    "choices": [
      "cube",
      "sphere",
      "flat disk",
      "triangle"
    ],
    "answer": 1
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "standard",
    "question": "For an infinite line of charge, the best Gaussian surface is usually a:",
    "choices": [
      "sphere",
      "cylinder",
      "flat disk",
      "cone"
    ],
    "answer": 1
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "standard",
    "question": "For an infinite sheet of charge, the best Gaussian surface is usually a:",
    "choices": [
      "sphere",
      "cylinder coaxial with the sheet",
      "pillbox",
      "thin wire"
    ],
    "answer": 2
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "standard",
    "question": "Inside a conductor in electrostatic equilibrium, the electric field is:",
    "choices": [
      "zero",
      "maximum",
      "parallel to the surface",
      "always upward"
    ],
    "answer": 0
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "standard",
    "question": "Excess charge on a conductor in electrostatic equilibrium resides:",
    "choices": [
      "only at the center",
      "throughout the volume uniformly",
      "on the outer surface",
      "randomly in the air"
    ],
    "answer": 2
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "standard",
    "question": "The electric field just outside a conducting surface is directed:",
    "choices": [
      "parallel to the surface",
      "perpendicular to the surface",
      "randomly",
      "only clockwise"
    ],
    "answer": 1
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "standard",
    "question": "For a spherical conductor with excess charge, the field inside the conducting material is:",
    "choices": [
      "zero",
      "kQ/r^2",
      "constant but nonzero",
      "infinite"
    ],
    "answer": 0
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "standard",
    "question": "A Gaussian surface encloses +5 \u03bcC and -2 \u03bcC. The net enclosed charge is:",
    "choices": [
      "+7 \u03bcC",
      "+3 \u03bcC",
      "-3 \u03bcC",
      "-7 \u03bcC"
    ],
    "answer": 1
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "standard",
    "question": "If the net flux through a closed surface is positive, the net enclosed charge is:",
    "choices": [
      "positive",
      "negative",
      "zero",
      "not related"
    ],
    "answer": 0
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "standard",
    "question": "If field lines enter a closed surface more than they leave, the net enclosed charge is:",
    "choices": [
      "positive",
      "negative",
      "zero",
      "infinite"
    ],
    "answer": 1
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "standard",
    "question": "A charge outside a closed Gaussian surface contributes to the net electric flux through the surface by:",
    "choices": [
      "adding positive flux only",
      "adding negative flux only",
      "zero net flux",
      "making flux infinite"
    ],
    "answer": 2
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "challenge",
    "question": "A uniformly charged spherical shell produces what electric field inside the shell?",
    "choices": [
      "zero",
      "constant nonzero",
      "kQ/r^2 toward center",
      "infinite"
    ],
    "answer": 0
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "challenge",
    "question": "For a long line of charge, the electric field magnitude varies with distance r as:",
    "choices": [
      "1/r",
      "1/r^2",
      "r",
      "r^2"
    ],
    "answer": 0
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "challenge",
    "question": "For a large nonconducting sheet of uniform charge, the electric field magnitude is approximately:",
    "choices": [
      "proportional to r",
      "proportional to 1/r",
      "constant with distance",
      "proportional to 1/r^2"
    ],
    "answer": 2
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "challenge",
    "question": "A point charge Q is inside a cube. The total flux through the cube is:",
    "choices": [
      "Q/\u03b50",
      "6Q/\u03b50",
      "Q/(6\u03b50)",
      "zero"
    ],
    "answer": 0
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "challenge",
    "question": "If Q is centered in a cube, the flux through one face is:",
    "choices": [
      "Q/\u03b50",
      "6Q/\u03b50",
      "Q/(6\u03b50)",
      "zero"
    ],
    "answer": 2
  },
  {
    "topic": "Gauss's Law",
    "difficulty": "challenge",
    "question": "A Gaussian surface is useful for finding E only if:",
    "choices": [
      "E is constant everywhere in space",
      "E has symmetry on the Gaussian surface",
      "the surface is a cube",
      "the enclosed charge is zero"
    ],
    "answer": 1
  },
  {
    "topic": "Capacitance",
    "difficulty": "standard",
    "question": "Capacitance is defined as:",
    "choices": [
      "C=V/Q",
      "C=Q/V",
      "C=QV",
      "C=I/V"
    ],
    "answer": 1
  },
  {
    "topic": "Capacitance",
    "difficulty": "standard",
    "question": "The SI unit of capacitance is the:",
    "choices": [
      "ohm",
      "tesla",
      "farad",
      "weber"
    ],
    "answer": 2
  },
  {
    "topic": "Capacitance",
    "difficulty": "standard",
    "question": "If a capacitor stores 6 C of charge at 3 V, its capacitance is:",
    "choices": [
      "0.5 F",
      "2 F",
      "9 F",
      "18 F"
    ],
    "answer": 1
  },
  {
    "topic": "Capacitance",
    "difficulty": "standard",
    "question": "For a parallel-plate capacitor, increasing plate area causes capacitance to:",
    "choices": [
      "increase",
      "decrease",
      "stay the same",
      "become zero"
    ],
    "answer": 0
  },
  {
    "topic": "Capacitance",
    "difficulty": "standard",
    "question": "For a parallel-plate capacitor, increasing plate separation causes capacitance to:",
    "choices": [
      "increase",
      "decrease",
      "stay the same",
      "become infinite"
    ],
    "answer": 1
  },
  {
    "topic": "Capacitance",
    "difficulty": "standard",
    "question": "For a parallel-plate capacitor, C is proportional to:",
    "choices": [
      "A/d",
      "d/A",
      "Ad",
      "1/(Ad)"
    ],
    "answer": 0
  },
  {
    "topic": "Capacitance",
    "difficulty": "standard",
    "question": "A dielectric inserted into a capacitor generally:",
    "choices": [
      "decreases capacitance",
      "increases capacitance",
      "removes all charge",
      "makes voltage infinite"
    ],
    "answer": 1
  },
  {
    "topic": "Capacitance",
    "difficulty": "standard",
    "question": "A capacitor connected to a battery has constant voltage. If capacitance increases, stored charge:",
    "choices": [
      "increases",
      "decreases",
      "stays the same",
      "becomes zero"
    ],
    "answer": 0
  },
  {
    "topic": "Capacitance",
    "difficulty": "standard",
    "question": "The energy stored in a capacitor is:",
    "choices": [
      "1/2 CV^2",
      "CV",
      "V/C",
      "C/V"
    ],
    "answer": 0
  },
  {
    "topic": "Capacitance",
    "difficulty": "standard",
    "question": "If voltage across a capacitor doubles while capacitance stays constant, stored energy:",
    "choices": [
      "doubles",
      "quadruples",
      "halves",
      "stays the same"
    ],
    "answer": 1
  },
  {
    "topic": "Capacitance",
    "difficulty": "standard",
    "question": "If capacitance doubles while voltage stays constant, stored energy:",
    "choices": [
      "doubles",
      "quadruples",
      "halves",
      "stays the same"
    ],
    "answer": 0
  },
  {
    "topic": "Capacitance",
    "difficulty": "standard",
    "question": "A 2 F capacitor connected to 5 V stores charge:",
    "choices": [
      "0.4 C",
      "2.5 C",
      "7 C",
      "10 C"
    ],
    "answer": 3
  },
  {
    "topic": "Capacitance",
    "difficulty": "standard",
    "question": "A 4 F capacitor charged to 3 V stores energy:",
    "choices": [
      "6 J",
      "12 J",
      "18 J",
      "36 J"
    ],
    "answer": 2
  },
  {
    "topic": "Capacitance",
    "difficulty": "standard",
    "question": "A capacitor blocks steady DC current after a long time because:",
    "choices": [
      "the battery disappears",
      "the plates become fully charged",
      "resistance becomes zero",
      "voltage becomes zero"
    ],
    "answer": 1
  },
  {
    "topic": "Capacitance",
    "difficulty": "standard",
    "question": "Immediately after an uncharged capacitor is connected in a circuit, it often behaves most like:",
    "choices": [
      "an open switch",
      "a short circuit",
      "an infinite resistor always",
      "a battery"
    ],
    "answer": 1
  },
  {
    "topic": "Capacitance",
    "difficulty": "standard",
    "question": "After a long time in a DC circuit, a capacitor behaves most like:",
    "choices": [
      "a closed switch",
      "an open switch",
      "a wire",
      "a resistor of zero resistance"
    ],
    "answer": 1
  },
  {
    "topic": "Capacitance",
    "difficulty": "challenge",
    "question": "If plate separation is cut in half, capacitance:",
    "choices": [
      "doubles",
      "halves",
      "quadruples",
      "becomes one-fourth"
    ],
    "answer": 0
  },
  {
    "topic": "Capacitance",
    "difficulty": "challenge",
    "question": "If plate radius doubles, plate area increases by a factor of:",
    "choices": [
      "2",
      "4",
      "1/2",
      "1/4"
    ],
    "answer": 1
  },
  {
    "topic": "Capacitance",
    "difficulty": "challenge",
    "question": "If plate radius doubles and separation doubles, capacitance changes by a factor of:",
    "choices": [
      "2",
      "4",
      "1/2",
      "1/4"
    ],
    "answer": 0
  },
  {
    "topic": "Capacitance",
    "difficulty": "challenge",
    "question": "A capacitor has C=3 F and Q=12 C. The voltage is:",
    "choices": [
      "4 V",
      "9 V",
      "15 V",
      "36 V"
    ],
    "answer": 0
  },
  {
    "topic": "Capacitance",
    "difficulty": "challenge",
    "question": "A capacitor has Q=8 C and V=2 V. Its stored energy is:",
    "choices": [
      "4 J",
      "8 J",
      "16 J",
      "32 J"
    ],
    "answer": 1
  },
  {
    "topic": "Capacitance",
    "difficulty": "challenge",
    "question": "A dielectric reduces the effective field inside a capacitor, allowing more charge to be stored for the same:",
    "choices": [
      "current",
      "voltage",
      "resistance",
      "magnetic field"
    ],
    "answer": 1
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "standard",
    "question": "Electric current is:",
    "choices": [
      "charge per time",
      "energy per charge",
      "force per charge",
      "power per voltage squared"
    ],
    "answer": 0
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "standard",
    "question": "The SI unit of current is the:",
    "choices": [
      "volt",
      "ampere",
      "ohm",
      "watt"
    ],
    "answer": 1
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "standard",
    "question": "Ohm's Law is:",
    "choices": [
      "V=IR",
      "P=IV",
      "R=\u03c1L/A",
      "I=Q/t"
    ],
    "answer": 0
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "standard",
    "question": "A 12 V battery is connected to a 6 \u03a9 resistor. The current is:",
    "choices": [
      "0.5 A",
      "2 A",
      "6 A",
      "72 A"
    ],
    "answer": 1
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "standard",
    "question": "A 3 A current flows through a 4 \u03a9 resistor. The voltage drop is:",
    "choices": [
      "0.75 V",
      "1.33 V",
      "7 V",
      "12 V"
    ],
    "answer": 3
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "standard",
    "question": "Resistance of a wire is given by:",
    "choices": [
      "R=\u03c1L/A",
      "R=\u03c1A/L",
      "R=LA/\u03c1",
      "R=V/I^2"
    ],
    "answer": 0
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "standard",
    "question": "If wire length doubles and area stays constant, resistance:",
    "choices": [
      "doubles",
      "halves",
      "quadruples",
      "stays the same"
    ],
    "answer": 0
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "standard",
    "question": "If wire radius doubles, resistance becomes:",
    "choices": [
      "twice as large",
      "half as large",
      "one-fourth as large",
      "four times as large"
    ],
    "answer": 2
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "standard",
    "question": "Resistivity depends mainly on:",
    "choices": [
      "shape only",
      "material and temperature",
      "voltage only",
      "current only"
    ],
    "answer": 1
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "standard",
    "question": "Electrical power can be calculated using:",
    "choices": [
      "P=IV",
      "P=IR",
      "P=V/R",
      "P=Q/V"
    ],
    "answer": 0
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "standard",
    "question": "A 2 A current flows through a 5 \u03a9 resistor. Power is:",
    "choices": [
      "4 W",
      "10 W",
      "20 W",
      "50 W"
    ],
    "answer": 2
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "standard",
    "question": "A 10 V drop occurs across a 5 \u03a9 resistor. Power is:",
    "choices": [
      "5 W",
      "10 W",
      "20 W",
      "50 W"
    ],
    "answer": 2
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "standard",
    "question": "At constant voltage, if resistance doubles, power:",
    "choices": [
      "doubles",
      "halves",
      "quadruples",
      "becomes one-fourth"
    ],
    "answer": 1
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "standard",
    "question": "At constant resistance, if voltage doubles, power:",
    "choices": [
      "doubles",
      "halves",
      "quadruples",
      "becomes one-fourth"
    ],
    "answer": 2
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "standard",
    "question": "At constant resistance, if current doubles, power:",
    "choices": [
      "doubles",
      "halves",
      "quadruples",
      "becomes one-fourth"
    ],
    "answer": 2
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "standard",
    "question": "A kilowatt-hour is a unit of:",
    "choices": [
      "power",
      "energy",
      "current",
      "voltage"
    ],
    "answer": 1
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "challenge",
    "question": "1 kWh equals:",
    "choices": [
      "1000 J",
      "3600 J",
      "3.6\u00d710^6 J",
      "3.6\u00d710^3 W"
    ],
    "answer": 2
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "challenge",
    "question": "A 60 W bulb runs for 10 s. Energy used is:",
    "choices": [
      "6 J",
      "60 J",
      "600 J",
      "6000 J"
    ],
    "answer": 2
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "challenge",
    "question": "A device uses 120 W at 12 V. Current is:",
    "choices": [
      "0.1 A",
      "10 A",
      "132 A",
      "1440 A"
    ],
    "answer": 1
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "challenge",
    "question": "A wire has resistance R. It is cut in half, and each half is connected in parallel across the same battery. Total current becomes:",
    "choices": [
      "I/4",
      "I/2",
      "2I",
      "4I"
    ],
    "answer": 3
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "challenge",
    "question": "An ohmic resistor has a straight-line V vs I graph. The slope represents:",
    "choices": [
      "resistance",
      "power",
      "charge",
      "resistivity only"
    ],
    "answer": 0
  },
  {
    "topic": "Current, Resistance & Power",
    "difficulty": "challenge",
    "question": "An ohmic resistor has a straight-line I vs V graph. The slope represents:",
    "choices": [
      "resistance",
      "1/resistance",
      "power",
      "charge"
    ],
    "answer": 1
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "standard",
    "question": "In a series circuit, the same quantity through each resistor is:",
    "choices": [
      "current",
      "voltage",
      "power",
      "resistance"
    ],
    "answer": 0
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "standard",
    "question": "In a parallel circuit, the same quantity across each branch is:",
    "choices": [
      "current",
      "voltage",
      "power",
      "resistance"
    ],
    "answer": 1
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "standard",
    "question": "Two resistors 3 \u03a9 and 6 \u03a9 in series have equivalent resistance:",
    "choices": [
      "2 \u03a9",
      "3 \u03a9",
      "9 \u03a9",
      "18 \u03a9"
    ],
    "answer": 2
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "standard",
    "question": "Two resistors 3 \u03a9 and 6 \u03a9 in parallel have equivalent resistance:",
    "choices": [
      "2 \u03a9",
      "3 \u03a9",
      "9 \u03a9",
      "18 \u03a9"
    ],
    "answer": 0
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "standard",
    "question": "Adding resistors in series to a battery causes total resistance to:",
    "choices": [
      "increase",
      "decrease",
      "stay the same",
      "become zero"
    ],
    "answer": 0
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "standard",
    "question": "Adding resistors in parallel to a battery causes equivalent resistance to:",
    "choices": [
      "increase",
      "decrease",
      "stay the same",
      "become infinite"
    ],
    "answer": 1
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "standard",
    "question": "Kirchhoff's junction rule is based on conservation of:",
    "choices": [
      "energy",
      "charge",
      "momentum",
      "mass"
    ],
    "answer": 1
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "standard",
    "question": "Kirchhoff's loop rule is based on conservation of:",
    "choices": [
      "energy",
      "charge",
      "momentum",
      "angular momentum"
    ],
    "answer": 0
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "standard",
    "question": "At a junction, 5 A enters and 2 A leaves one branch. The current in the other leaving branch is:",
    "choices": [
      "2 A",
      "3 A",
      "5 A",
      "7 A"
    ],
    "answer": 1
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "standard",
    "question": "A 12 V battery drives two series resistors, 2 \u03a9 and 4 \u03a9. Total current is:",
    "choices": [
      "1 A",
      "2 A",
      "3 A",
      "6 A"
    ],
    "answer": 1
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "standard",
    "question": "In the same circuit, the voltage drop across the 4 \u03a9 resistor is:",
    "choices": [
      "2 V",
      "4 V",
      "8 V",
      "12 V"
    ],
    "answer": 2
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "standard",
    "question": "A 12 V battery is connected to 3 \u03a9 and 6 \u03a9 in parallel. Total current is:",
    "choices": [
      "2 A",
      "4 A",
      "6 A",
      "8 A"
    ],
    "answer": 2
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "standard",
    "question": "In parallel branches, the smaller resistor has:",
    "choices": [
      "larger current",
      "smaller current",
      "same current always",
      "zero current"
    ],
    "answer": 0
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "standard",
    "question": "In series resistors, the larger resistor has:",
    "choices": [
      "larger voltage drop",
      "smaller voltage drop",
      "same voltage drop always",
      "zero voltage drop"
    ],
    "answer": 0
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "standard",
    "question": "Three 6 \u03a9 resistors in parallel have equivalent resistance:",
    "choices": [
      "2 \u03a9",
      "6 \u03a9",
      "12 \u03a9",
      "18 \u03a9"
    ],
    "answer": 0
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "standard",
    "question": "Three 6 \u03a9 resistors in series have equivalent resistance:",
    "choices": [
      "2 \u03a9",
      "6 \u03a9",
      "12 \u03a9",
      "18 \u03a9"
    ],
    "answer": 3
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "challenge",
    "question": "A loop equation gives +12 - 3I - 9I = 0. Current I is:",
    "choices": [
      "0.5 A",
      "1 A",
      "2 A",
      "4 A"
    ],
    "answer": 1
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "challenge",
    "question": "Two branches in parallel have resistances 4 \u03a9 and 12 \u03a9 across 12 V. Current in the 4 \u03a9 branch is:",
    "choices": [
      "1 A",
      "2 A",
      "3 A",
      "4 A"
    ],
    "answer": 2
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "challenge",
    "question": "For a fixed ideal battery, adding parallel branches makes battery power:",
    "choices": [
      "increase",
      "decrease",
      "stay same",
      "become zero"
    ],
    "answer": 0
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "challenge",
    "question": "For a fixed ideal battery, adding series resistors makes battery power:",
    "choices": [
      "increase",
      "decrease",
      "stay same",
      "become infinite"
    ],
    "answer": 1
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "challenge",
    "question": "A battery provides 24 V to a circuit drawing 3 A. Total circuit resistance is:",
    "choices": [
      "8 \u03a9",
      "21 \u03a9",
      "27 \u03a9",
      "72 \u03a9"
    ],
    "answer": 0
  },
  {
    "topic": "DC Circuits & Kirchhoff's Rules",
    "difficulty": "challenge",
    "question": "If a resistor has 2 A and 10 V across it, its resistance and power are:",
    "choices": [
      "5 \u03a9, 20 W",
      "20 \u03a9, 5 W",
      "12 \u03a9, 20 W",
      "5 \u03a9, 5 W"
    ],
    "answer": 0
  },
  {
    "topic": "Magnetism",
    "difficulty": "standard",
    "question": "The magnetic force on a moving charge is largest when velocity and magnetic field are:",
    "choices": [
      "parallel",
      "antiparallel",
      "perpendicular",
      "zero"
    ],
    "answer": 2
  },
  {
    "topic": "Magnetism",
    "difficulty": "standard",
    "question": "A charged particle moving parallel to a magnetic field experiences magnetic force:",
    "choices": [
      "maximum",
      "zero",
      "qvB",
      "infinite"
    ],
    "answer": 1
  },
  {
    "topic": "Magnetism",
    "difficulty": "standard",
    "question": "The magnetic force on a charge is:",
    "choices": [
      "parallel to velocity",
      "parallel to field",
      "perpendicular to velocity and field",
      "always opposite velocity"
    ],
    "answer": 2
  },
  {
    "topic": "Magnetism",
    "difficulty": "standard",
    "question": "A magnetic force alone can change a particle's:",
    "choices": [
      "speed only",
      "direction only",
      "mass only",
      "charge only"
    ],
    "answer": 1
  },
  {
    "topic": "Magnetism",
    "difficulty": "standard",
    "question": "A proton moves east in a magnetic field directed north. The magnetic force is:",
    "choices": [
      "up",
      "down",
      "east",
      "north"
    ],
    "answer": 0
  },
  {
    "topic": "Magnetism",
    "difficulty": "standard",
    "question": "An electron moves east in a magnetic field directed north. The magnetic force is:",
    "choices": [
      "up",
      "down",
      "east",
      "north"
    ],
    "answer": 1
  },
  {
    "topic": "Magnetism",
    "difficulty": "standard",
    "question": "The force on a current-carrying wire is given by:",
    "choices": [
      "F=ILB sin\u03b8",
      "F=qE",
      "F=kq1q2/r^2",
      "F=mv/r"
    ],
    "answer": 0
  },
  {
    "topic": "Magnetism",
    "difficulty": "standard",
    "question": "Two long parallel wires carrying current in the same direction:",
    "choices": [
      "attract",
      "repel",
      "do not interact",
      "always rotate"
    ],
    "answer": 0
  },
  {
    "topic": "Magnetism",
    "difficulty": "standard",
    "question": "Two long parallel wires carrying current in opposite directions:",
    "choices": [
      "attract",
      "repel",
      "do not interact",
      "always rotate"
    ],
    "answer": 1
  },
  {
    "topic": "Magnetism",
    "difficulty": "standard",
    "question": "If current in each of two parallel wires is halved, the force between them becomes:",
    "choices": [
      "F/2",
      "F/4",
      "2F",
      "4F"
    ],
    "answer": 1
  },
  {
    "topic": "Magnetism",
    "difficulty": "standard",
    "question": "A charged particle moves in a circle in a uniform magnetic field because the magnetic force provides:",
    "choices": [
      "centripetal force",
      "gravitational force",
      "electric potential",
      "thermal energy"
    ],
    "answer": 0
  },
  {
    "topic": "Magnetism",
    "difficulty": "standard",
    "question": "The radius of circular motion in a magnetic field is:",
    "choices": [
      "mv/qB",
      "qB/mv",
      "qvB/m",
      "m/qvB"
    ],
    "answer": 0
  },
  {
    "topic": "Magnetism",
    "difficulty": "standard",
    "question": "If a charged particle's speed doubles in the same B-field, circular radius:",
    "choices": [
      "halves",
      "doubles",
      "quadruples",
      "stays same"
    ],
    "answer": 1
  },
  {
    "topic": "Magnetism",
    "difficulty": "standard",
    "question": "If a particle's charge doubles with same mass, speed, and field, circular radius:",
    "choices": [
      "halves",
      "doubles",
      "quadruples",
      "stays same"
    ],
    "answer": 0
  },
  {
    "topic": "Magnetism",
    "difficulty": "standard",
    "question": "The period of circular motion for a charge in a uniform B-field does not depend on:",
    "choices": [
      "mass",
      "charge",
      "magnetic field",
      "speed"
    ],
    "answer": 3
  },
  {
    "topic": "Magnetism",
    "difficulty": "standard",
    "question": "Cutting a bar magnet in half produces:",
    "choices": [
      "one north pole and one south pole",
      "two smaller magnets each with north and south poles",
      "no magnetic poles",
      "only electric fields"
    ],
    "answer": 1
  },
  {
    "topic": "Magnetism",
    "difficulty": "challenge",
    "question": "Magnetic field lines form:",
    "choices": [
      "open lines from north to south only",
      "closed loops",
      "straight lines only",
      "random isolated endpoints"
    ],
    "answer": 1
  },
  {
    "topic": "Magnetism",
    "difficulty": "challenge",
    "question": "A positive charge moves right and feels an upward magnetic force. The magnetic field has a component:",
    "choices": [
      "into the page",
      "out of the page",
      "to the right",
      "upward"
    ],
    "answer": 0
  },
  {
    "topic": "Magnetism",
    "difficulty": "challenge",
    "question": "A negative charge moves right in a magnetic field into the page. Its force is:",
    "choices": [
      "up",
      "down",
      "right",
      "zero"
    ],
    "answer": 1
  },
  {
    "topic": "Magnetism",
    "difficulty": "challenge",
    "question": "A wire carries current upward in a magnetic field north. The force is:",
    "choices": [
      "east",
      "west",
      "north",
      "up"
    ],
    "answer": 1
  },
  {
    "topic": "Magnetism",
    "difficulty": "challenge",
    "question": "If a current loop has maximum torque, the magnetic moment is:",
    "choices": [
      "parallel to B",
      "perpendicular to B",
      "zero",
      "opposite current"
    ],
    "answer": 1
  },
  {
    "topic": "Magnetism",
    "difficulty": "challenge",
    "question": "The magnetic moment of a current loop has units equivalent to:",
    "choices": [
      "A\u00b7m\u00b2",
      "T/m\u00b2",
      "N/C",
      "V/m"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "standard",
    "question": "Magnetic flux depends on:",
    "choices": [
      "B, area, and angle",
      "only B",
      "only current",
      "only voltage"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "standard",
    "question": "Faraday's Law says induced emf depends on the rate of change of:",
    "choices": [
      "electric potential",
      "magnetic flux",
      "resistance",
      "charge"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "standard",
    "question": "Lenz's Law gives the direction of induced current based on opposing:",
    "choices": [
      "the existing field only",
      "the change in magnetic flux",
      "electric potential",
      "gravity"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "standard",
    "question": "If magnetic flux through a loop is constant, induced emf is:",
    "choices": [
      "zero",
      "maximum",
      "negative always",
      "infinite"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "standard",
    "question": "A stronger induced emf is produced by:",
    "choices": [
      "slower flux change",
      "faster flux change",
      "constant flux",
      "zero field"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "standard",
    "question": "The unit of magnetic flux is the:",
    "choices": [
      "tesla",
      "weber",
      "volt",
      "ohm"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "standard",
    "question": "A loop area is doubled in the same perpendicular magnetic field. Flux:",
    "choices": [
      "doubles",
      "halves",
      "stays same",
      "becomes zero"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "standard",
    "question": "A loop rotates so its normal becomes perpendicular to B. Flux becomes:",
    "choices": [
      "maximum",
      "zero",
      "negative maximum",
      "infinite"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "standard",
    "question": "Motional emf in a rod moving perpendicular to B and length L is:",
    "choices": [
      "BLv",
      "B/Lv",
      "Lv/B",
      "Bv/L"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "standard",
    "question": "If speed doubles in a motional emf setup, induced emf:",
    "choices": [
      "doubles",
      "halves",
      "quadruples",
      "stays same"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "standard",
    "question": "If length doubles in a motional emf setup, induced emf:",
    "choices": [
      "doubles",
      "halves",
      "quadruples",
      "stays same"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "standard",
    "question": "If magnetic field doubles in a motional emf setup, induced emf:",
    "choices": [
      "doubles",
      "halves",
      "quadruples",
      "stays same"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "standard",
    "question": "A coil has N turns. Compared with one turn, induced emf is:",
    "choices": [
      "N times larger",
      "N times smaller",
      "same",
      "zero"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "standard",
    "question": "A magnet held stationary near a loop induces:",
    "choices": [
      "steady current",
      "no current",
      "maximum current",
      "alternating current always"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "standard",
    "question": "A magnet moved faster toward a loop produces:",
    "choices": [
      "smaller induced emf",
      "larger induced emf",
      "no change",
      "zero emf"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "standard",
    "question": "An induced current creates its own magnetic field that:",
    "choices": [
      "supports the change",
      "opposes the change",
      "is always zero",
      "is always into page"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "challenge",
    "question": "If B into the page through a loop is increasing, the induced field is:",
    "choices": [
      "into the page",
      "out of the page",
      "to the left",
      "zero"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "challenge",
    "question": "If B out of the page through a loop is decreasing, the induced field is:",
    "choices": [
      "into the page",
      "out of the page",
      "to the right",
      "zero"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "challenge",
    "question": "A clockwise current creates a magnetic field through the loop that is:",
    "choices": [
      "into the page",
      "out of the page",
      "left",
      "right"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "challenge",
    "question": "A counterclockwise current creates a magnetic field through the loop that is:",
    "choices": [
      "into the page",
      "out of the page",
      "left",
      "right"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "challenge",
    "question": "A rod of length 0.50 m moves at 4 m/s through a 2 T field. The motional emf is:",
    "choices": [
      "1 V",
      "2 V",
      "4 V",
      "8 V"
    ],
    "answer": 2
  },
  {
    "topic": "Electromagnetic Induction",
    "difficulty": "challenge",
    "question": "A 20-turn coil has flux changing by 0.30 Wb in 2.0 s. Magnitude of emf is:",
    "choices": [
      "3 V",
      "6 V",
      "10 V",
      "20 V"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "standard",
    "question": "Electromagnetic waves are produced by:",
    "choices": [
      "stationary charges only",
      "accelerating charges",
      "uncharged masses only",
      "constant resistors only"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "standard",
    "question": "In vacuum, all electromagnetic waves travel at:",
    "choices": [
      "different speeds based on frequency",
      "the speed of light",
      "the speed of sound",
      "zero speed"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "standard",
    "question": "In an EM wave, the electric and magnetic fields are:",
    "choices": [
      "parallel to each other",
      "perpendicular to each other",
      "always zero",
      "longitudinal"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "standard",
    "question": "In an EM wave, E, B, and direction of travel are:",
    "choices": [
      "all parallel",
      "mutually perpendicular",
      "randomly oriented",
      "all in one line"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "standard",
    "question": "The direction of EM wave energy flow is given by:",
    "choices": [
      "E+B",
      "E\u00d7B",
      "B\u00d7E only",
      "E/B"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "standard",
    "question": "The speed of EM waves in vacuum is:",
    "choices": [
      "1/sqrt(\u03bc0\u03b50)",
      "sqrt(\u03bc0\u03b50)",
      "\u03bc0/\u03b50",
      "\u03b50/\u03bc0"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "standard",
    "question": "The relationship between field amplitudes is:",
    "choices": [
      "E=cB",
      "B=cE",
      "E=B always numerically",
      "E=IB"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "standard",
    "question": "If E0 = 300 V/m, B0 is closest to:",
    "choices": [
      "1.0\u00d710^-6 T",
      "9.0\u00d710^10 T",
      "300 T",
      "3.0\u00d710^-8 T"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "standard",
    "question": "Average intensity of an EM wave is proportional to:",
    "choices": [
      "E0",
      "E0^2",
      "1/E0",
      "frequency only"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "standard",
    "question": "If electric field amplitude doubles, intensity:",
    "choices": [
      "doubles",
      "quadruples",
      "halves",
      "stays same"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "standard",
    "question": "The wave equation relating speed, frequency, and wavelength is:",
    "choices": [
      "c=f\u03bb",
      "c=f/\u03bb",
      "c=\u03bb/f",
      "c=f+\u03bb"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "standard",
    "question": "A wave with higher frequency in vacuum has:",
    "choices": [
      "longer wavelength",
      "shorter wavelength",
      "higher speed",
      "lower speed"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "standard",
    "question": "Radio waves and gamma rays differ mainly in:",
    "choices": [
      "speed in vacuum",
      "frequency and wavelength",
      "whether they are EM waves",
      "whether they have fields"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "standard",
    "question": "Which has the highest frequency?",
    "choices": [
      "radio",
      "microwave",
      "visible",
      "gamma ray"
    ],
    "answer": 3
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "standard",
    "question": "Which has the longest wavelength?",
    "choices": [
      "radio",
      "visible",
      "x-ray",
      "gamma ray"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "standard",
    "question": "A sound wave differs from an EM wave because sound:",
    "choices": [
      "requires a medium",
      "travels in vacuum",
      "is transverse only",
      "has electric fields"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "challenge",
    "question": "A microwave oven operates at 2.45 GHz. Its wavelength is closest to:",
    "choices": [
      "0.012 m",
      "0.12 m",
      "1.2 m",
      "12 m"
    ],
    "answer": 1
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "challenge",
    "question": "Visible light with wavelength 600 nm has frequency closest to:",
    "choices": [
      "5\u00d710^14 Hz",
      "5\u00d710^8 Hz",
      "2\u00d710^-15 Hz",
      "1.8\u00d710^2 Hz"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "challenge",
    "question": "An EM wave travels in +x with E in +y. B points:",
    "choices": [
      "+z",
      "-z",
      "+x",
      "-y"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "challenge",
    "question": "An EM wave has E in -z and B in +y. It travels in:",
    "choices": [
      "+x",
      "-x",
      "+z",
      "-y"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "challenge",
    "question": "For a perfect absorber, radiation pressure is:",
    "choices": [
      "I/c",
      "2I/c",
      "Ic",
      "I/c\u00b2"
    ],
    "answer": 0
  },
  {
    "topic": "Electromagnetic Waves",
    "difficulty": "challenge",
    "question": "For a perfect reflector, radiation pressure is:",
    "choices": [
      "I/c",
      "2I/c",
      "Ic",
      "I/c\u00b2"
    ],
    "answer": 1
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "standard",
    "question": "One postulate of special relativity is that the laws of physics are the same in all:",
    "choices": [
      "accelerating frames",
      "inertial frames",
      "rotating frames",
      "gravitational fields only"
    ],
    "answer": 1
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "standard",
    "question": "Another postulate of special relativity is that the speed of light in vacuum is:",
    "choices": [
      "different for different observers",
      "constant for all inertial observers",
      "infinite",
      "zero for moving observers"
    ],
    "answer": 1
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "standard",
    "question": "A passenger in a sealed spaceship moving at constant velocity cannot determine that speed by experiments inside because:",
    "choices": [
      "time stops",
      "all inertial frames are equivalent",
      "light disappears",
      "mass becomes zero"
    ],
    "answer": 1
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "standard",
    "question": "The Lorentz factor \u03b3 is always:",
    "choices": [
      "less than 1",
      "equal to or greater than 1",
      "negative",
      "zero"
    ],
    "answer": 1
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "standard",
    "question": "As speed approaches c, \u03b3:",
    "choices": [
      "approaches 0",
      "approaches 1/2",
      "increases without bound",
      "stays 1"
    ],
    "answer": 2
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "standard",
    "question": "Time dilation means a moving clock is measured by an outside observer to run:",
    "choices": [
      "fast",
      "slow",
      "backward",
      "unchanged only"
    ],
    "answer": 1
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "standard",
    "question": "An observer moving with a clock measures the:",
    "choices": [
      "dilated time",
      "proper time",
      "contracted time",
      "impossible time"
    ],
    "answer": 1
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "standard",
    "question": "Length contraction occurs only along:",
    "choices": [
      "all dimensions",
      "the direction of motion",
      "directions perpendicular to motion",
      "time only"
    ],
    "answer": 1
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "standard",
    "question": "A spaceship's own crew measures its length as:",
    "choices": [
      "contracted",
      "proper length",
      "zero",
      "infinite"
    ],
    "answer": 1
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "standard",
    "question": "If v=0.80c, \u03b3 is:",
    "choices": [
      "1.25",
      "1.67",
      "2.00",
      "3.00"
    ],
    "answer": 1
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "standard",
    "question": "If astronauts measure 3 years on a trip at \u03b3=2, Earth measures:",
    "choices": [
      "1.5 years",
      "3 years",
      "6 years",
      "9 years"
    ],
    "answer": 2
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "standard",
    "question": "If a 100 m ship moves with \u03b3=2, outside observers measure its length as:",
    "choices": [
      "50 m",
      "100 m",
      "200 m",
      "400 m"
    ],
    "answer": 0
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "standard",
    "question": "Mass-energy equivalence is expressed by:",
    "choices": [
      "E=mc\u00b2",
      "F=ma",
      "V=IR",
      "c=f\u03bb"
    ],
    "answer": 0
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "standard",
    "question": "1 kg of mass converted completely to energy gives:",
    "choices": [
      "9\u00d710^16 J",
      "3\u00d710^8 J",
      "9\u00d710^8 J",
      "1 J"
    ],
    "answer": 0
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "standard",
    "question": "General relativity describes gravity as:",
    "choices": [
      "electric force",
      "curvature of spacetime",
      "magnetic attraction",
      "friction"
    ],
    "answer": 1
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "standard",
    "question": "The equivalence principle connects gravity with:",
    "choices": [
      "constant velocity",
      "acceleration",
      "electric current",
      "temperature"
    ],
    "answer": 1
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "challenge",
    "question": "Near a massive object, time runs:",
    "choices": [
      "faster than far away",
      "slower than far away",
      "backward",
      "at exactly the same rate for all observers"
    ],
    "answer": 1
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "challenge",
    "question": "A black hole's event horizon is:",
    "choices": [
      "the physical surface of the star",
      "the boundary beyond which light cannot escape",
      "the center point only",
      "a ring of fire"
    ],
    "answer": 1
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "challenge",
    "question": "The Schwarzschild radius is proportional to:",
    "choices": [
      "mass",
      "1/mass",
      "charge only",
      "temperature only"
    ],
    "answer": 0
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "challenge",
    "question": "If the mass of a nonrotating black hole doubles, its Schwarzschild radius:",
    "choices": [
      "doubles",
      "halves",
      "quadruples",
      "stays same"
    ],
    "answer": 0
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "challenge",
    "question": "Spaghettification is caused by strong differences in gravitational pull across an object's body, also called:",
    "choices": [
      "tidal forces",
      "electric shielding",
      "polarization",
      "diffraction"
    ],
    "answer": 0
  },
  {
    "topic": "Relativity & Black Holes",
    "difficulty": "challenge",
    "question": "Relative velocity addition prevents ordinary objects from being measured above:",
    "choices": [
      "sound speed",
      "escape speed",
      "the speed of light",
      "orbital speed"
    ],
    "answer": 2
  }
];
