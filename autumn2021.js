const autumnCourses = [
  {
    subject: "ANI",
    number: 230,
    section: 403,
    name: "3D Design & Modeling",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
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
    subject: "ANI",
    number: 230,
    section: 401,
    name: "3D Design & Modeling",
    credits: 4,
    prereqs: [],
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
    subject: "ANI",
    number: 231,
    section: 402,
    name: "3D Animation",
    credits: 4,
    prereqs: [
      "AND",
      {
        subject: "ANI",
        number: 230,
        name: "3D Design & Modeling"
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
    subject: "ANI",
    number: 231,
    section: 401,
    name: "3D Animation",
    credits: 4,
    prereqs: [
      "AND",
      {
        subject: "ANI",
        number: 230,
        name: "3D Design & Modeling"
      }
    ],
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
    subject: "GAM",
    number: 205,
    section: 401,
    name: "Games Literacy",
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
    subject: "GAM",
    number: 208,
    section: 401,
    name: "Virtual Worlds & Online Commun",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
    startTime: [15, 10],
    endTime: [16, 40],
    required: []
  },
  {
    subject: "GAM",
    number: 224,
    section: 701,
    name: "Game Design For Non-majors",
    credits: 4,
    prereqs: [],
    days: ["M"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: []
  },
  {
    subject: "GAM",
    number: 226,
    section: 401,
    name: "Fundamentals Of Game Design",
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
    subject: "GAM",
    number: 226,
    section: 402,
    name: "Fundamentals Of Game Design",
    credits: 4,
    prereqs: [],
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
    subject: "GAM",
    number: 226,
    section: 102,
    name: "Fundamentals Of Game Design",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
    startTime: [11, 20],
    endTime: [12, 50],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    subject: "GAM",
    number: 228,
    section: 420,
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
    subject: "GAM",
    number: 228,
    section: 101,
    name: "Ethics In Comp Games/cinema",
    credits: 4,
    prereqs: [],
    days: ["M", "W"],
    startTime: [94, 0],
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
    subject: "GAM",
    number: 228,
    section: 422,
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
    subject: "GAM",
    number: 228,
    section: 401,
    name: "Ethics In Comp Games/cinema",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
    startTime: [15, 10],
    endTime: [16, 40],
    required: {
      "1617": false,
      "1718": false,
      "1819": false,
      "1920": false,
      "2021": false
    }
  },
  {
    subject: "GAM",
    number: 228,
    section: 421,
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
    subject: "GAM",
    number: 228,
    section: 410,
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
    subject: "GAM",
    number: 228,
    section: 110,
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
    subject: "GAM",
    number: 229,
    section: 401,
    name: "Presentation And Communication",
    credits: 4,
    prereqs: [],
    days: ["M"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: []
  },
  {
    subject: "GAM",
    number: 230,
    section: 701,
    name: "Intro To Game Production",
    credits: 4,
    prereqs: [
      "AND",
      { subject: "GAM", number: 245, name: "Game Development II" }
    ],
    days: ["Th"],
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
    subject: "GAM",
    number: 240,
    section: 402,
    name: "Playgramming",
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
    subject: "GAM",
    number: 240,
    section: 401,
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
    subject: "GAM",
    number: 244,
    section: 401,
    name: "Game Development I",
    credits: 4,
    prereqs: [],
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
    subject: "GAM",
    number: 245,
    section: 401,
    name: "Game Development II",
    credits: 4,
    prereqs: [
      "AND",
      {
        subject: "GAM",
        number: 226,
        name: "Fundamentals Of Game Design"
      },
      [
        "OR",
        {
          subject: "GAM",
          number: 244,
          name: "Game Development I"
        },
        {
          subject: "CSC",
          number: 241,
          name: "Introduction to Computer Science I"
        },
        {
          subject: "CSC",
          number: 243,
          name: "Python for Programmers"
        }
      ]
    ],
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
    subject: "GAM",
    number: 250,
    section: 701,
    name: "Game Sound Design I",
    credits: 4,
    prereqs: [],
    days: ["M"],
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
    subject: "GAM",
    number: 325,
    section: 710,
    name: "Applied 3D Geometry",
    credits: 4,
    prereqs: [],
    days: [],
    startTime: [],
    endTime: [],
    required: []
  },
  {
    subject: "GAM",
    number: 325,
    section: 701,
    name: "Applied 3D Geometry",
    credits: 4,
    prereqs: [],
    days: ["Th"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: []
  },
  {
    subject: "GAM",
    number: 340,
    section: 701,
    name: "Practical Scripting For Games",
    credits: 4,
    prereqs: [
      "OR",
      {
        subject: "GAM",
        number: 245,
        name: "Game Development II"
      },
      {
        subject: "CSC",
        number: 241,
        name: "Introduction to Computer Science I"
      },
      {
        subject: "CSC",
        number: 241,
        name: "Introduction to Computer Science II"
      },
      {
        subject: "CSC",
        number: 243,
        name: "Python for Programmers"
      }
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
    subject: "GAM",
    number: 341,
    section: 401,
    name: "Introduction To Level Design",
    credits: 4,
    prereqs: [
      "AND",
      {
        subject: "GAM",
        number: 245,
        name: "Game Development I"
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
    subject: "GAM",
    number: 351,
    section: 730,
    name: "Expressive Game Audio Scripting",
    credits: 4,
    prereqs: [],
    days: ["W"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: []
  },
  {
    subject: "GAM",
    number: 355,
    section: 401,
    name: "Solo Game Development Project",
    credits: 4,
    prereqs: [
      "AND",
      {
        subject: "GAM",
        number: 340,
        name: "Practical Scripting For Games"
      },
      {
        subject: "GAM",
        number: 341,
        name: "Introduction to Level Design"
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
    subject: "GAM",
    number: 365,
    section: 401,
    name: "Advanced Game Design",
    credits: 4,
    prereqs: [
      "OR",
      [
        "AND",
        {
          subject: "GAM",
          number: 340,
          name: "Practical Scripting For Games"
        },
        {
          subject: "GAM",
          number: 341,
          name: "Introduction to Level Design"
        }
      ],
      {
        subject: "GAM",
        number: 355,
        name: "Solo Game Development Project"
      }
    ],
    days: ["Tu", "Th"],
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
    subject: "GAM",
    number: 369,
    section: 401,
    name: "VR Game Development",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
    startTime: [13, 30],
    endTime: [15, 0],
    required: []
  },
  {
    subject: "GAM",
    number: 372,
    section: 401,
    name: "Object-Oriented Game Dev",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
    startTime: [15, 10],
    endTime: [16, 40],
    required: []
  },
  {
    subject: "GAM",
    number: 392,
    section: 401,
    name: "Game Modification Workshop",
    credits: 4,
    prereqs: [
      "OR",
      {
        subject: "GAM",
        number: 362,
        name: "Making Deep Games"
      },
      {
        subject: "GAM",
        number: 372,
        name: "Object-Oriented Game Dev"
      },
      [
        "AND",
        {
          subject: "ANI",
          number: 344,
          name: "Visual Design for Games"
        },
        {
          subject: "GAM",
          number: 341,
          name: "Introduction To Level Design"
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
    subject: "GAM",
    number: 394,
    section: 401,
    name: "Game Development Project I",
    credits: 4,
    prereqs: [
      "OR",
      {
        subject: "GAM",
        number: 377,
        name: "Game Engine Programming II"
      },
      {
        subject: "GAM",
        number: 392,
        name: "Game Modification Workshop"
      }
    ],
    days: ["Tu", "Th"],
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
    subject: "GAM",
    number: 397,
    section: 701,
    name: "Topics In Game Design",
    credits: 4,
    prereqs: [],
    days: ["Th"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: {
      "1617": false,
      "1718": false,
      "1819": false,
      "1920": false,
      "2021": false
    }
  },
  {
    subject: "GAM",
    number: 397,
    section: 702,
    name: "Topics In Game Design",
    credits: 4,
    prereqs: [],
    days: ["Tu"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: {
      "1617": false,
      "1718": false,
      "1819": false,
      "1920": false,
      "2021": false
    }
  },
  {
    subject: "GAM",
    number: 397,
    section: 710,
    name: "Topics In Game Design",
    credits: 4,
    prereqs: [],
    days: ["Th"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: {
      "1617": false,
      "1718": false,
      "1819": false,
      "1920": false,
      "2021": false
    }
  },
  {
    subject: "GAM",
    number: 397,
    section: 711,
    name: "Topics In Game Design",
    credits: 4,
    prereqs: [],
    days: ["Tu"],
    startTime: [17, 45],
    endTime: [21, 0],
    required: {
      "1617": false,
      "1718": false,
      "1819": false,
      "1920": false,
      "2021": false
    }
  },
  {
    subject: "GAM",
    number: 398,
    section: 410,
    name: "Topics In Game Programming",
    credits: 4,
    prereqs: [],
    days: [],
    startTime: [],
    endTime: [],
    required: []
  },
  {
    subject: "GAM",
    number: 398,
    section: 401,
    name: "Topics In Game Programming",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
    startTime: [13, 30],
    endTime: [15, 0],
    required: []
  },
  {
    subject: "GD",
    number: 105,
    section: 402,
    name: "Intro To Visual Design",
    credits: 4,
    prereqs: [],
    days: ["Tu"],
    startTime: [10, 0],
    endTime: [13, 15],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    subject: "GD",
    number: 105,
    section: 701,
    name: "Intro To Visual Design",
    credits: 4,
    prereqs: [],
    days: ["Th"],
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
    subject: "GD",
    number: 105,
    section: 401,
    name: "Intro To Visual Design",
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
    subject: "GD",
    number: 105,
    section: 403,
    name: "Intro To Visual Design",
    credits: 4,
    prereqs: [],
    days: ["Tu", "Th"],
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
    subject: "GD",
    number: 105,
    section: 404,
    name: "Intro To Visual Design",
    credits: 4,
    prereqs: [],
    days: ["Th"],
    startTime: [10, 0],
    endTime: [13, 15],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    subject: "IT",
    number: 223,
    section: 401,
    name: "Data Analysis",
    credits: 4,
    prereqs: [
      "OR",
      {
        subject: "MAT",
        number: 130,
        name: "Precalculus"
      },
      {
        subject: "MAT",
        number: 140,
        name: "Discrete Mathematics I"
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
    subject: "IT",
    number: 223,
    section: 720,
    name: "Data Analysis",
    credits: 4,
    prereqs: [
      "OR",
      {
        subject: "MAT",
        number: 130,
        name: "Precalculus"
      },
      {
        subject: "MAT",
        number: 140,
        name: "Discrete Mathematics I"
      }
    ],
    days: [],
    startTime: [],
    endTime: [],
    required: {
      "1617": true,
      "1718": true,
      "1819": true,
      "1920": true,
      "2021": true
    }
  },
  {
    subject: "IT",
    number: 223,
    section: 402,
    name: "Data Analysis",
    credits: 4,
    prereqs: [
      "OR",
      {
        subject: "MAT",
        number: 130,
        name: "Precalculus"
      },
      {
        subject: "MAT",
        number: 140,
        name: "Discrete Mathematics I"
      }
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
    subject: "IT",
    number: 223,
    section: 403,
    name: "Data Analysis",
    credits: 4,
    prereqs: [
      "OR",
      {
        subject: "MAT",
        number: 130,
        name: "Precalculus"
      },
      {
        subject: "MAT",
        number: 140,
        name: "Discrete Mathematics I"
      }
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
  }
];
