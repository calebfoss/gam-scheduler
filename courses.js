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
    endTime: []
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
    endTime: [15, 0]
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
    endTime: [16, 40]
  },
  {
    program: "GAM",
    number: 224,
    section: 201,
    name: "Game Design for Non-Majors",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
    startTime: [13, 0],
    endTime: [14, 30]
  },
  {
    program: "GAM",
    number: 224,
    section: 801,
    name: "Game Design for Non-Majors",
    credits: 4,
    prereqs: [],
    days: ["W"],
    startTime: [17, 45],
    endTime: [21, 0]
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
    endTime: []
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
    endTime: [11, 10]
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
    endTime: []
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
    endTime: [13, 20]
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
    endTime: []
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
    endTime: []
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
    endTime: [21, 0]
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
    endTime: [21, 0]
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
    endTime: []
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
    endTime: [16, 40]
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
    endTime: []
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
    endTime: [13, 20]
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
    endTime: [21, 0]
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
    endTime: [21, 0]
  },
  {
    program: "GAM",
    number: 334,
    section: 501,
    name: "The Business of Indie Games",
    credits: 4,
    prereqs: [],
    days: [],
    startTime: [],
    endTime: []
  }
];
