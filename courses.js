/*
{
    program: "GAM",
    number: 100,
    section: 100,
    name: "",
    credits: 4,
    prereqs: [],
    days: [],
    startTime: [],
    endTime: [],
    required: true
  },
  */

module.exports = [
  {
    program: "GD",
    number: 105,
    section: 501,
    name: "Intro to Visual Design",
    credits: 4,
    prereqs: [],
    days: ["M", "W"],
    startTime: [10, 10],
    endTime: [11, 40],
    required: true
  },
  {
    program: "GD",
    number: 105,
    section: 502,
    name: "Intro to Visual Design",
    credits: 4,
    prereqs: [],
    days: ["Th"],
    startTime: [10, 0],
    endTime: [13, 15],
    required: true
  },
  {
    program: "GD",
    number: 105,
    section: 503,
    name: "Intro to Visual Design",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
    startTime: [13, 30],
    endTime: [15, 0],
    required: true
  },
  {
    program: "GD",
    number: 105,
    section: 502,
    name: "Intro to Visual Design",
    credits: 4,
    prereqs: [],
    days: ["Th"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: true
  },
  {
    program: "GAM",
    number: 181,
    section: 501,
    credits: 2,
    name: "Unity Workshop",
    prereqs: [],
    days: ["Tu"],
    startTime: [13, 30],
    endTime: [15, 0],
    required: false
  },
  {
    program: "GAM",
    number: 205,
    section: 501,
    name: "Games Literacy",
    credits: 4,
    prereqs: [],
    days: ["M", "W"],
    startTime: [15, 10],
    endTime: [16, 40],
    required: true
  },
  {
    program: "IT",
    number: 223,
    section: 501,
    name: "",
    credits: 4,
    prereqs: [
      "OR",
      { program: "MAT", number: 130, name: "Precalculus" },
      { program: "MAT", number: 140, name: "Discrete Mathematics I" }
    ],
    days: ["M", "W"],
    startTime: [10, 10],
    endTime: [11, 40],
    required: true
  },
  {
    program: "IT",
    number: 223,
    section: 502,
    name: "",
    credits: 4,
    prereqs: [
      "OR",
      { program: "MAT", number: 130, name: "Precalculus" },
      { program: "MAT", number: 140, name: "Discrete Mathematics I" }
    ],
    days: ["M", "W"],
    startTime: [11, 50],
    endTime: [13, 20],
    required: true
  },
  {
    program: "IT",
    number: 223,
    section: 520,
    name: "",
    credits: 4,
    prereqs: [
      "OR",
      { program: "MAT", number: 130, name: "Precalculus" },
      { program: "MAT", number: 140, name: "Discrete Mathematics I" }
    ],
    days: [],
    startTime: [],
    endTime: [],
    required: true
  },
  {
    program: "GAM",
    number: 226,
    section: 501,
    name: "Fundamentals of Game Design",
    credits: 4,
    prereqs: [],
    days: [],
    startTime: [],
    endTime: [],
    required: true
  },
  {
    program: "GAM",
    number: 228,
    section: 201,
    name: "Ethics in Computer Games and Cinema",
    credits: 4,
    prereqs: [],
    days: ["M", "W"],
    startTime: [9, 40],
    endTime: [11, 10],
    required: false
  },
  {
    program: "GAM",
    number: 228,
    section: 220,
    name: "Ethics in Computer Games and Cinema",
    credits: 4,
    prereqs: [],
    days: [],
    startTime: [],
    endTime: [],
    required: false
  },
  {
    program: "GAM",
    number: 228,
    section: 501,
    name: "Ethics in Computer Games and Cinema",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
    startTime: [11, 50],
    endTime: [13, 20],
    required: false
  },
  {
    program: "GAM",
    number: 228,
    section: 520,
    name: "Ethics in Computer Games and Cinema",
    credits: 4,
    prereqs: [],
    days: [],
    startTime: [],
    endTime: [],
    required: false
  },
  {
    program: "GAM",
    number: 228,
    section: 521,
    name: "Ethics in Computer Games and Cinema",
    credits: 4,
    prereqs: [],
    days: [],
    startTime: [],
    endTime: [],
    required: false
  },
  {
    program: "GAM",
    number: 228,
    section: 801,
    name: "Ethics in Computer Games and Cinema",
    credits: 4,
    prereqs: [],
    days: ["W"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: false
  },
  {
    program: "ANI",
    number: 230,
    section: 501,
    name: "3D Design and Modeling",
    credits: 4,
    prereqs: [],
    days: ["M", "W"],
    startTime: [13, 30],
    endTime: [15, 0],
    required: true
  },
  {
    program: "ANI",
    number: 230,
    section: 502,
    name: "3D Design and Modeling",
    credits: 4,
    prereqs: [],
    days: ["M", "W"],
    startTime: [11, 50],
    endTime: [13, 20],
    required: true
  },
  {
    program: "ANI",
    number: 230,
    section: 503,
    name: "3D Design and Modeling",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
    startTime: [10, 10],
    endTime: [11, 40],
    required: true
  },
  {
    program: "ANI",
    number: 230,
    section: 504,
    name: "3D Design and Modeling",
    credits: 4,
    prereqs: [],
    days: ["M", "W"],
    startTime: [15, 10],
    endTime: [16, 40],
    required: true
  },
  {
    program: "GAM",
    number: 230,
    section: 801,
    name: "Intro to Game Production",
    credits: 4,
    prereqs: [245],
    days: ["Tu"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: true
  },
  {
    program: "ANI",
    number: 231,
    section: 501,
    name: "3D Animation",
    credits: 4,
    prereqs: [
      "AND",
      { program: "ANI", number: 230, name: "3D Design and Modeling" }
    ],
    days: ["M", "W"],
    startTime: [10, 10],
    endTime: [11, 40],
    required: true
  },
  {
    program: "ANI",
    number: 231,
    section: 801,
    name: "3D Animation",
    credits: 4,
    prereqs: [
      "AND",
      { program: "ANI", number: 230, name: "3D Design and Modeling" }
    ],
    days: ["Th"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: true
  },
  {
    program: "GAM",
    number: 240,
    section: 502,
    name: "Playgramming",
    credits: 4,
    prereqs: [],
    days: [],
    startTime: [],
    endTime: [],
    required: true
  },
  {
    program: "GAM",
    number: 244,
    section: 501,
    name: "Game Development I",
    credits: 4,
    prereqs: [],
    days: ["M", "W"],
    startTime: [15, 10],
    endTime: [16, 40],
    required: true
  },
  {
    program: "GAM",
    number: 244,
    section: 801,
    name: "Game Development I",
    credits: 4,
    prereqs: [],
    days: [],
    startTime: [],
    endTime: [],
    required: true
  },
  {
    program: "GAM",
    number: 245,
    section: 501,
    name: "Game Development II",
    credits: 4,
    prereqs: [
      "AND",
      { program: "GAM", number: 226, name: "Fundamentals of Game Design" },
      [
        "OR",
        { program: "GAM", number: 244, name: "Game Development I" },
        {
          program: "CSC",
          number: 241,
          name: "Introduction to Computer Science I"
        },
        { program: "CSC", number: 243, name: "Python for Programmers" }
      ]
    ],
    days: ["Tu", "Th"],
    startTime: [11, 50],
    endTime: [13, 20],
    required: true
  },
  {
    program: "GAM",
    number: 250,
    section: 801,
    name: "Game Sound Design I",
    credits: 4,
    prereqs: [],
    days: ["W"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: true
  },
  {
    program: "GAM",
    number: 316,
    section: 801,
    name: "Scoring for Games",
    credits: 4,
    prereqs: [
      "OR",
      { program: "GAM", number: 250, name: "Game Sound Design I" },
      { program: "POST", number: 124, name: "Sound Design I" }
    ],
    days: ["M"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: false
  },
  {
    program: "GAM",
    number: 334,
    section: 501,
    name: "The Business of Indie Games",
    credits: 4,
    prereqs: [
      "AND",
      { program: "GAM", number: 229, name: "Presentation and Communication" }
    ],
    days: ["Tu", "Th"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: false
  },
  {
    program: "GAM",
    number: 340,
    section: 502,
    name: "Practical Scripting for Games",
    credits: 4,
    prereqs: [
      "OR",
      { program: "GAM", number: 245, name: "Game Development II" },
      {
        program: "CSC",
        number: 241,
        name: "Introduction to Computer Science I"
      },
      {
        program: "CSC",
        number: 241,
        name: "Introduction to Computer Science II"
      },
      { program: "CSC", number: 243, name: "Python for Programers" }
    ],
    days: [],
    startTime: [],
    endTime: [],
    required: true
  },
  {
    program: "GAM",
    number: 341,
    section: 801,
    name: "Introduction to Level Design",
    credits: 4,
    prereqs: [
      "AND",
      { program: "GAM", number: 245, name: "Game Development I" }
    ],
    days: ["M"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: true
  },
  {
    program: "GAM",
    number: 342,
    section: 501,
    name: "Advanced Level Design",
    credits: 4,
    prereqs: [
      "OR",
      { program: "GAM", number: 341, name: "Introduction to Level Design" },
      { program: "GAM", number: 392, name: "Game Modification Workshop" }
    ],
    days: ["M"],
    startTime: [13, 30],
    endTime: [16, 45],
    required: false
  },
  {
    program: "GAM",
    number: 365,
    section: 501,
    name: "Advanced Game Design",
    credits: 4,
    prereqs: [
      "OR",
      [
        "AND",
        {
          program: "GAM",
          number: 340,
          name: "Practical Scripting for Games"
        },
        {
          program: "GAM",
          number: 341,
          name: "Introduction to Level Design"
        }
      ],
      { program: "GAM", number: 355, name: "Solo Game Development Project" }
    ],
    days: ["M", "W"],
    startTime: [13, 30],
    endTime: [15, 0],
    required: true
  },
  {
    program: "GAM",
    number: 370,
    section: 801,
    name: "Rendering and Graphics Programming",
    credits: 4,
    prereqs: [
      "AND",
      { program: "GAM", number: 325, name: "Applied 3D Geometry" },
      { program: "CSC", number: 361, name: "Optimized C++" }
    ],
    days: ["Th"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: false
  },
  {
    program: "GAM",
    number: 370,
    section: 810,
    name: "Rendering and Graphics Programming",
    credits: 4,
    prereqs: [
      "AND",
      { program: "GAM", number: 325, name: "Applied 3D Geometry" },
      { program: "CSC", number: 361, name: "Optimized C++" }
    ],
    days: [],
    startTime: [],
    endTime: [],
    required: false
  },
  {
    program: "GAM",
    number: 374,
    section: 501,
    name: "Game Engine Programming I",
    credits: 4,
    prereqs: [
      "AND",
      { program: "GAM", number: 372, name: "Object-Oriented Game Development" },
      { program: "GAM", number: 325, name: "Applied 3D Geometry" }
    ],
    days: ["Tu", "Th"],
    startTime: [15, 10],
    endTime: [16, 40],
    required: false
  },
  {
    program: "GAM",
    number: 376,
    section: 801,
    name: "Artificial Intelligence for Computer Games",
    credits: 4,
    prereqs: [
      "OR",
      { program: "GAM", number: 372, name: "Object-Oriented Game Development" },
      [
        "AND",
        {
          program: "SE",
          number: 350,
          name: "Object-Oriented Software Development Principals"
        },
        { program: "CSC", number: 361, name: "Optimized C++" }
      ]
    ],
    days: ["M"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: false
  },
  {
    program: "GAM",
    number: 376,
    section: 810,
    name: "Artificial Intelligence for Computer Games",
    credits: 4,
    prereqs: [
      "OR",
      { program: "GAM", number: 372, name: "Object-Oriented Game Development" },
      [
        "AND",
        {
          program: "SE",
          number: 350,
          name: "Object-Oriented Software Development Principals"
        },
        { program: "CSC", number: 361, name: "Optimized C++" }
      ]
    ],
    days: [],
    startTime: [],
    endTime: [],
    required: false
  },
  {
    program: "GAM",
    number: 392,
    section: 801,
    name: "Game Modification Workshop",
    credits: 4,
    prereqs: [
      "OR",
      { program: "GAM", number: 362, name: "Making Deep Games" },
      { program: "GAM", number: 372, name: "Object-Oriented Game Development" },
      [
        "AND",
        { program: "ANI", number: 344, name: "Visual Design for Games" },
        { program: "GAM", number: 341, name: "Introduction to Level Design" }
      ]
    ],
    days: ["M"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: true
  },
  {
    program: "GAM",
    number: 394,
    section: 501,
    name: "Game Development Project I",
    credits: 4,
    prereqs: [
      "OR",
      { program: "GAM", number: 377, name: "Game Engine Programming II" },
      { program: "GAM", number: 392, name: "Game Modification Workshop" }
    ],
    days: ["M", "W"],
    startTime: [13, 30],
    endTime: [15, 0],
    required: true
  },
  {
    program: "GAM",
    number: 394,
    section: 801,
    name: "Game Development Project I",
    credits: 4,
    prereqs: [
      "OR",
      { program: "GAM", number: 377, name: "Game Engine Programming II" },
      { program: "GAM", number: 392, name: "Game Modification Workshop" }
    ],
    days: ["W"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: true
  },
  {
    program: "GAM",
    number: 395,
    section: 501,
    name: "Game Development Project II",
    credits: 4,
    prereqs: [
      "AND",
      {
        program: "GAM",
        number: 394,
        name: "Game Development Project I"
      }
    ],
    days: ["Tu", "Th"],
    startTime: [10, 10],
    endTime: [11, 40],
    required: true
  },
  {
    program: "GAM",
    number: 397,
    section: 501,
    name: "Topics in Game Design",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
    startTime: [10, 10],
    endTime: [11, 40],
    required: false
  },
  {
    program: "GAM",
    number: 397,
    section: 501,
    name: "Topics in Game Design",
    credits: 4,
    prereqs: [],
    days: ["Tu"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: false
  }
];
