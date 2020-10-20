module.exports = [
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
      { program: "GAM", number: 226, name: "Fundamentals of Game Design" },
      [
        [{ program: "GAM", number: 244, name: "Game Development I" }],
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
      [
        { program: "GAM", number: 250, name: "Game Sound Design I" },
        { program: "POST", number: 124, name: "Sound Design I" }
      ]
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
      [{ program: "GAM", number: 229, name: "Presentation and Communication" }]
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
      [
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
      ]
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
    prereqs: [[{ program: "GAM", number: 245, name: "Game Development I" }]],
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
    section: 100,
    name: "",
    credits: 4,
    prereqs: [],
    days: [],
    startTime: [],
    endTime: [],
    required: false
  }
];
