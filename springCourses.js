const springCourses = [
  {
    program: "GAM",
    number: 228,
    section: 620,
    name: "Ethics In Comp Games/cinema",
    credits: 4,
    prereqs: [],
    days: [],
    startTime: [],
    endTime: [],
    required: {
      "1617": false,
      "1718": false,
      "1819": false,
      "1920": false,
      "2021": false
    }
  },
  {
    program: "GAM",
    number: 240,
    section: 601,
    name: "Playgramming",
    credits: 4,
    prereqs: [],
    days: ["M", "W"],
    startTime: [10, 10],
    endTime: [11, 40],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    program: "GAM",
    number: 395,
    section: 601,
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
    days: ["M", "W"],
    startTime: [15, 10],
    endTime: [16, 40],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    program: "GAM",
    number: 350,
    section: 901,
    name: "Physics For Game Developers",
    credits: 4,
    prereqs: [],
    days: ["Th"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: []
  },
  {
    program: "GAM",
    number: 333,
    section: 901,
    name: "The Business of Games",
    credits: 4,
    prereqs: [],
    days: ["W"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: []
  },
  {
    program: "GAM",
    number: 315,
    section: 901,
    name: "Game Sound Design 2",
    credits: 4,
    prereqs: [],
    days: ["Th"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: []
  },
  {
    program: "GAM",
    number: 245,
    section: 601,
    name: "Game Development II",
    credits: 4,
    prereqs: [
      "AND",
      {
        program: "GAM",
        number: 226,
        name: "Fundamentals of Game Design"
      },
      [
        "OR",
        {
          program: "GAM",
          number: 244,
          name: "Game Development I"
        },
        {
          program: "CSC",
          number: 241,
          name: "Introduction to Computer Science I"
        },
        {
          program: "CSC",
          number: 243,
          name: "Python for Programmers"
        }
      ]
    ],
    days: ["M", "W"],
    startTime: [11, 50],
    endTime: [13, 20],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    program: "GAM",
    number: 365,
    section: 601,
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
      {
        program: "GAM",
        number: 355,
        name: "Solo Game Development Project"
      }
    ],
    days: ["M", "W"],
    startTime: [15, 10],
    endTime: [16, 40],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    program: "GAM",
    number: 250,
    section: 901,
    name: "Game Sound Design I",
    credits: 4,
    prereqs: [],
    days: ["Tu"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    program: "GAM",
    number: 317,
    section: 901,
    name: "Game Sound Design And Scoring",
    credits: 4,
    prereqs: [],
    days: ["W"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: []
  },
  {
    program: "GAM",
    number: 231,
    section: 601,
    name: "History And Design of Rpgs",
    credits: 4,
    prereqs: [],
    days: ["M", "W"],
    startTime: [13, 30],
    endTime: [15, 0],
    required: []
  },
  {
    program: "GAM",
    number: 312,
    section: 602,
    name: "Playtesting",
    credits: 4,
    prereqs: [
      "AND",
      { program: "GAM", number: 226, name: "Fundamentals of Game Design" }
    ],
    days: ["M"],
    startTime: [13, 30],
    endTime: [16, 45],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    program: "GAM",
    number: 377,
    section: 601,
    name: "Game Engine Programming II",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
    startTime: [15, 10],
    endTime: [16, 40],
    required: []
  },
  {
    program: "GAM",
    number: 205,
    section: 601,
    name: "Games Literacy",
    credits: 4,
    prereqs: [],
    days: ["M", "W"],
    startTime: [13, 30],
    endTime: [15, 0],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    program: "GAM",
    number: 355,
    section: 601,
    name: "Solo Game Development Project",
    credits: 4,
    prereqs: [],
    days: ["M", "W"],
    startTime: [10, 10],
    endTime: [11, 40],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    program: "GAM",
    number: 226,
    section: 601,
    name: "Fundamentals of Game Design",
    credits: 4,
    prereqs: [],
    days: ["Tu"],
    startTime: [13, 30],
    endTime: [16, 45],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    program: "GAM",
    number: 312,
    section: 601,
    name: "Playtesting",
    credits: 4,
    prereqs: [],
    days: ["W"],
    startTime: [13, 30],
    endTime: [16, 45],
    required: []
  },
  {
    program: "GAM",
    number: 205,
    section: 301,
    name: "Games Literacy",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
    startTime: [13, 0],
    endTime: [14, 30],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    program: "GAM",
    number: 228,
    section: 301,
    name: "Ethics In Comp Games/cinema",
    credits: 4,
    prereqs: [],
    days: ["M", "W"],
    startTime: [9, 40],
    endTime: [11, 10],
    required: {
      "1617": false,
      "1718": false,
      "1819": false,
      "1920": false,
      "2021": false
    }
  },
  {
    program: "GAM",
    number: 395,
    section: 901,
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
    days: ["W"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    program: "GAM",
    number: 224,
    section: 902,
    name: "Game Design For Non-majors",
    credits: 4,
    prereqs: [],
    days: ["W"],
    startTime: [18, 0],
    endTime: [21, 15],
    required: []
  },
  {
    program: "GAM",
    number: 340,
    section: 601,
    name: "Practical Scripting For Games",
    credits: 4,
    prereqs: [
      "OR",
      {
        program: "GAM",
        number: 245,
        name: "Game Development II"
      },
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
      {
        program: "CSC",
        number: 243,
        name: "Python for Programers"
      }
    ],
    days: ["M", "W"],
    startTime: [11, 50],
    endTime: [13, 20],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    program: "GAM",
    number: 206,
    section: 601,
    name: "History of Games",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
    startTime: [13, 30],
    endTime: [15, 0],
    required: []
  },
  {
    program: "GAM",
    number: 397,
    section: 602,
    name: "Topics In Game Design",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
    startTime: [10, 10],
    endTime: [11, 40],
    required: {
      "1617": false,
      "1718": false,
      "1819": false,
      "1920": false,
      "2021": false
    }
  },
  {
    program: "GAM",
    number: 341,
    section: 601,
    name: "Introduction to Level Design",
    credits: 4,
    prereqs: [
      "AND",
      {
        program: "GAM",
        number: 245,
        name: "Game Development I"
      }
    ],
    days: ["M", "W"],
    startTime: [13, 30],
    endTime: [15, 0],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    program: "GAM",
    number: 326,
    section: 901,
    name: "Gwap Pre-production",
    credits: 4,
    prereqs: [],
    days: ["M"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: []
  },
  {
    program: "GAM",
    number: 350,
    section: 910,
    name: "Physics For Game Developers",
    credits: 4,
    prereqs: [],
    days: [],
    startTime: [],
    endTime: [],
    required: []
  },
  {
    program: "GAM",
    number: 228,
    section: 302,
    name: "Ethics In Comp Games/cinema",
    credits: 4,
    prereqs: [],
    days: ["M", "W"],
    startTime: [11, 20],
    endTime: [12, 50],
    required: {
      "1617": false,
      "1718": false,
      "1819": false,
      "1920": false,
      "2021": false
    }
  },
  {
    program: "GAM",
    number: 244,
    section: 601,
    name: "Game Development I",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
    startTime: [13, 30],
    endTime: [15, 0],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    program: "GAM",
    number: 224,
    section: 901,
    name: "Game Design For Non-majors",
    credits: 4,
    prereqs: [],
    days: ["M"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: []
  },
  {
    program: "GAM",
    number: 397,
    section: 601,
    name: "Topics In Game Design",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
    startTime: [11, 50],
    endTime: [13, 20],
    required: {
      "1617": false,
      "1718": false,
      "1819": false,
      "1920": false,
      "2021": false
    }
  },
  {
    program: "GAM",
    number: 392,
    section: 901,
    name: "Game Modification Workshop",
    credits: 4,
    prereqs: [
      "OR",
      {
        program: "GAM",
        number: 362,
        name: "Making Deep Games"
      },
      {
        program: "GAM",
        number: 372,
        name: "Object-Oriented Game Development"
      },
      [
        "AND",
        {
          program: "ANI",
          number: 344,
          name: "Visual Design for Games"
        },
        {
          program: "GAM",
          number: 341,
          name: "Introduction to Level Design"
        }
      ]
    ],
    days: ["Tu"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    program: "GAM",
    number: 229,
    section: 601,
    name: "Presentation And Communication",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
    startTime: [15, 10],
    endTime: [16, 40],
    required: []
  },
  {
    program: "GAM",
    number: 245,
    section: 602,
    name: "Game Development II",
    credits: 4,
    prereqs: [
      "AND",
      {
        program: "GAM",
        number: 226,
        name: "Fundamentals of Game Design"
      },
      [
        "OR",
        {
          program: "GAM",
          number: 244,
          name: "Game Development I"
        },
        {
          program: "CSC",
          number: 241,
          name: "Introduction to Computer Science I"
        },
        {
          program: "CSC",
          number: 243,
          name: "Python for Programmers"
        }
      ]
    ],
    days: ["Tu", "Th"],
    startTime: [11, 50],
    endTime: [13, 20],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    program: "GAM",
    number: 228,
    section: 621,
    name: "Ethics In Comp Games/cinema",
    credits: 4,
    prereqs: [],
    days: [],
    startTime: [],
    endTime: [],
    required: {
      "1617": false,
      "1718": false,
      "1819": false,
      "1920": false,
      "2021": false
    }
  },
  {
    program: "GAM",
    number: 208,
    section: 601,
    name: "Virtual Worlds & Online Commun",
    credits: 4,
    prereqs: [],
    days: ["M", "W"],
    startTime: [10, 10],
    endTime: [11, 40],
    required: []
  },
  {
    program: "GAM",
    number: 228,
    section: 601,
    name: "Ethics In Comp Games/cinema",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
    startTime: [11, 50],
    endTime: [13, 20],
    required: {
      "1617": false,
      "1718": false,
      "1819": false,
      "1920": false,
      "2021": false
    }
  }
];
