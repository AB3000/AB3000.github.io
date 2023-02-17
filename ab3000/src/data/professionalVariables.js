import {
  faBriefcase,
  faLaptopCode,
  faSchool,
  faSearch,
  faGraduationCap,
  faFlagUsa,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

export var fasterCharPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 5,
  },
};

export const homeStyles = [
  {
    opacity: 1,
    fill: "rgba(255, 135, 135, 100)",
    fillOpacity: 1,
    // fillRule: "evenodd",
    stroke: "rgba(255, 135, 135, 100)",
    strokeWidth: 0,
    strokeLinejoin: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeDashoffset: 0,
    strokeOpacity: 1,
    mixBlendMode: "difference",
  },
  {
    opacity: 1,
    fill: "#ff8787",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "#ff8787",
    strokeWidth: 0,
    strokeLinejoin: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeDashoffset: 0,
    strokeOpacity: 1,
    mixBlendMode: "difference",
  },
  {
    opacity: 1,
    fill: "#ff8787",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "#ff8787",
    strokeWidth: 0,
    strokeLinejoin: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeDashoffset: 0,
    strokeOpacity: 1,
    mixBlendMode: "difference",
  },
  {
    opacity: 1,
    fill: "#ff8787",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "#ff8787",
    strokeWidth: 0,
    strokeLinejoin: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeDashoffset: 0,
    strokeOpacity: 1,
    mixBlendMode: "difference",
    transform: "translate(150px,0px)",
  },
  {
    opacity: 1,
    fill: "#ff8787",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "#ff8787",
    strokeWidth: 0,
    strokeLinejoin: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeDashoffset: 0,
    strokeOpacity: 1,
    mixBlendMode: "difference",
    transform: "scale(0.5)",
    transform: "translate(150px,0px)",
  },
  {
    opacity: 1,
    fill: "#ff8787",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "#ff8787",
    strokeWidth: 0,
    strokeLinejoin: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeDashoffset: 0,
    strokeOpacity: 1,
    mixBlendMode: "difference",
    transform: "scale(0.5)",
  },
  {
    opacity: 1,
    fill: "#ff8787",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "#ff8787",
    strokeWidth: 0,
    strokeLinejoin: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeDashoffset: 0,
    strokeOpacity: 1,
    mixBlendMode: "difference",
    transform: "scale(0.5)",
    transform: "translate(250px,0px)",
  },
  {
    opacity: 1,
    fill: "#ff8787",
    fillOpacity: 1,
    fillRule: "evenodd",
    stroke: "#ff8787",
    strokeWidth: 0,
    strokeLinejoin: "round",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeDashoffset: 0,
    strokeOpacity: 1,
    mixBlendMode: "difference",
    transform: "translate(250px,0px)",
  },
];

export const paths = {
  one: "m 250.42882,300.396741 c 96.457909,-303.153429 -397.34272,-47.739309 -94.18929,48.718601 303.153423,96.457908 47.7393,-397.34272 -48.7186,-94.18929 -96.45791,303.15342 397.34272,47.739303 94.18929,-48.71861 -303.15343,-96.4579 -47.73931,397.34273 48.7186,94.189299 z",
  two: "m 453.62569,240.82154 c -103.93541,188.07633 184.67812,-133.21722 16.09333,16.2182 -168.58479,149.43543 165.99031,-131.25809 -14.71131,-17.67895 -180.70162,113.57915 222.30481,-30.01708 7.83754,23.59394 -214.46728,53.61102 214.52078,-41.72163 -8.90891,-21.60745 -223.42968,20.11418 210.00958,58.2208 -0.38292,22.05487 -210.3925,-36.16593 215.42069,29.22965 1.91747,-24.11508 -213.50321,-53.34474 188.62021,117.36969 -10.12277,21.95767 -198.74298,-95.41202 173.26823,112.76217 7.93075,-20.75713 -165.33748,-133.5193 118.12231,181.10263 -16.32883,13.23087 -134.45113,-167.871763 114.54588,176.45765 18.93872,-13.75715 -95.60716,-190.214813 41.02859,217.53732 -22.28261,4.69268 -63.31119,-212.84465 14.86683,210.54654 19.99172,-3.64574 5.1249,-214.192281 -72.42852,205.79256 -22.11311,-4.12377 50.31541,-209.916329 -46.57442,207.0147 22.21716,2.48154 C 522.49351,34.832877 307.74696,409.91766 436.60605,227.41255 565.46513,44.907432 291.51673,396.13857 454.88281,240.28966 618.24888,84.440745 254.17868,331.84451 443.4758,222.90197 632.77292,113.95942 247.99124,329.64389 454.40556,241.7856 c 206.41433,-87.8583 -218.90281,8.62715 -3.19217,-24.78549 215.71063,-33.41264 -209.44715,28.06731 3.46183,24.57584 212.90899,-3.49146 -211.9946,-70.36751 7.16299,-23.19735 219.1576,47.17017 -204.4918,-89.03154 -8.05782,20.85794 C 650.21436,349.12602 296.14577,95.72363 469.76122,222.89261 643.37667,350.06158 309.19799,80.224718 454.74463,241.62186 600.29127,403.01901 375.68493,40.178667 473.98096,230.07139 572.277,419.96411 397.12439,27.018878 455.18092,240.74626 c 58.05653,213.72739 11.58944,-213.31422 20.49935,0.49761 8.90992,213.81182 29.91433,-209.853788 -20.98186,-1.51271 -50.89618,208.34108 80.56871,-196.686734 19.58675,7.92019 -60.98197,204.60693 83.27594,-194.906141 -20.65947,-6.82981 z",
  three:
    "M 141.65275, 105.74142 C -28.502703,250.40048 349.58776,118.69593 128.35595,134.93847 -92.87586,151.18102 317.585,172.84866 105.91671,112.26241 -105.75159,51.676155 222.55583,285.73062 73.867991,112.12391 -74.819839,-61.482792 122.83159,310.46325 93.141627,82.398003 63.451664,-145.66725 9.8423832,274.91693 70.107923,60.142353 130.37346,-154.63222 -78.762495,192.51669 103.85249,58.837975 286.46748,-74.840747 -119.44872,72.884434 108.05241,23.96 335.55353,-24.964433 -79.560996,-5.1227444 132.43507,54.969656 344.43115,115.06206 11.730219,-129.95439 160.67252,49.209456 309.61482,228.3733 119.20977,-146.11437 152.7711,77.273111 186.33243,300.66059 232.90301,-124.12682 168.24386,99.52876 103.5847,323.18434 311.80821,-38.917647 141.65275,105.74142 Z",
  four: "m -60.383719,221.16456 c -160.488081,109.7107 172.385349,-62.81109 -15.06836,-12.3692 -187.453711,50.44189 185.686499,34.29064 -7.131577,18.4405 -192.818074,-15.85015 172.058703,61.03123 -3.89928,-18.92001 -175.957984,-79.95124 121.053538,145.24943 -16.792644,8.7342 -137.84618,-136.515217 90.020847,159.87124 9.06319,-16.87943 -80.95766,-176.750671 -1.887924,188.16688 -19.07449,-3.95805 -17.18657,-192.1249172 -32.21278,180.13618 17.75041,-7.03965 49.963191,-187.1758278 -121.56627,145.49537 -12.10257,-15.37428 109.4636919,-160.869643 -139.01259,119.95093 18.8752,6.53985 157.887791,-113.411076 -186.0858,32.39325 0.34762,-19.55858 186.433413,-51.95183 -182.57065,2.28037 10.530722,16.31002 C 115.21588,191.11959 -241.58624,81.038434 -65.213508,162.43521 111.15922,243.83198 -204.61967,45.43867 -68.061833,182.04526 68.496011,318.65185 -132.88769,4.6360017 -48.892096,179.16997 35.103497,353.70393 -83.204666,-0.67302852 -63.26796,192.06628 -43.331254,384.8056 5.1039912,16.325806 -46.683422,202.20002 c -51.787412,185.87422 92.874237,-158.329229 -19.288964,0.2421 -112.163204,158.57134 166.076756,-90.98826 5.588667,18.72244 z",
  five: "m 100.7737, 100.25311 c -476.1416,535.17062 651.63337,400.1775039 -86.8555,51.11496 -738.4888,-349.06255 483.08619,623.19029 18.2394,-70.32428 -464.8468,-693.51457 -151.8996,725.56422 -62.7178,-136.593 89.1818,-862.15727 -640.8412,-216.21934 109.7035,-158.52359 750.54468,57.69574 -683.4809,139.7123 -40.8732,-1.4219 642.60775,-141.13421 -321.2298,-513.34958 195.8656,145.23526 517.09542,658.584856 342.77955,-364.65806 -133.362,170.51255 z",
  six: "m 300.710216, 330.1473 c 691.138244,-297.4519 -836.673726,-541.3681 -233.503686,-91.5508 603.16998,449.81725 -66.38011,-944.9611 -154.34834,-197.692 -87.96823,747.26925 887.1754,-453.8966 196.03716,-156.4447 -691.13817,297.4519 851.55038,414.9937 248.38042,-34.8236 -603.17001,-449.8173 -50.501677,995.26475 37.46652,247.9955 87.96819,-747.2691 -785.17027,529.96743 -94.032074,232.5156 z",
  seven:
    "M100 100 c 29.58344,164.22314 70.754832,-199.40912 92.528602,-195.66062 21.773771,3.7485 -32.058192,182.48868 -78.908952,203.05421 -46.85076,20.56553 1.39876,-74.2518 51.095468,-141.19736 49.696708,-66.94556 136.168603,9.35527 28.871405,-38.6407 -107.297193,-47.995966 50.093783,-0.4995 71.92764,-2.84586 21.833858,-2.34635 -127.217563,-9.66259 -137.592143,7.5769 -10.37459,17.23949 87.21914,-88.166982 138.9475634,51.14546 C 56.578039,334.95915 -129.38172,-68.348761 -213.87508,100.31284 c -84.49335,168.66159 204.7826592,96.53156 200.79912,93.27239 -3.983539,-3.25918 -22.817332,41.25655 -65.951063,0.13479 C -122.16075,152.59826 -124.16615,-75.924698 -101.80727,91.926892 -79.448381,259.77849 -135.68518,47.755502 1.5498545,102.47845 138.78488,157.2014 -26.095338,278.18498 1.6896801,272.63884 c 27.7850189,-5.54614 1.1816356,78.79072 -13.0389031,1.01593 -14.220538,-77.77479 -13.147768,121.17501 1.791821,-17.50579 14.9395891,-138.6808 48.953851,47.21325 36.845005,44.14256 -12.108845,-3.07068 -329.197313,-0.36811 -192.792723,8.64478 136.404591,9.01288 -26.0983,-160.94479 3.48515,3.27836 z",
  eight:
    "M 154.83739,122.52651 C -142.88726,343.76453 447.69381,297.94038 99.988407,129.50932 -247.71698,-38.921733 132.1277,473.25203 65.935629,91.601978 -0.25645129,-290.0481 -185.00078,298.99194 87.26407,38.806855 359.5289,-221.37821 -219.69163,-88.044358 142.51275,26.262594 504.71716,140.56955 155.52245,-308.47427 172.00855,72.140231 188.49464,452.75471 452.56202,-98.711488 154.83739,122.52651 Z",
};

export const languages = [
  ["Basic", "Bengali, Hindi"],
  ["Intermediate", ""],
  ["Proficient", "French"],
  ["Native", "English"],
];

export const skillData = [
  {
    title: "Programming",
    skills: [
      ["Java", "images/skill_icons/programming/java.svg"],
      ["python", "images/skill_icons/programming/python.svg"],
      ["C", "images/skill_icons/programming/c.svg"],
      ["C++", "images/skill_icons/programming/c++.svg"],
      ["C#", "images/skill_icons/programming/c-sharp.svg"],
      ["R: RStudio", "images/skill_icons/programming/r.svg"],
      ["SQL", "images/skill_icons/programming/sql.svg"],
      ["Bash Scripting", "images/skill_icons/programming/bash.svg"],
      ["Raspberry PI - ARM Assembly", "images/skill_icons/programming/arm.svg"],
    ],
  },
  {
    title: "Web Development",
    skills: [
      ["HTML", "images/skill_icons/web_dev/html.svg"],
      ["CSS", "images/skill_icons/web_dev/css.svg"],
      ["Javascript", "images/skill_icons/web_dev/javascript.svg"],
      ["Sass", "images/skill_icons/web_dev/sass.svg"],
      ["React", "images/skill_icons/web_dev/react.svg"],
      ["Node/Express.js", "images/skill_icons/web_dev/node-express-js.svg"],
      ["ejs", "images/skill_icons/web_dev/ejs.svg"],
      ["jsx", "images/skill_icons/web_dev/jsx.svg"],
    ],
  },
  {
    title: "UX/UI + Modeling",
    skills: [
      ["Autodesk Maya", "images/skill_icons/ui/maya.svg"],
      ["Adobe Animate", "images/skill_icons/ui/adobe-animate.svg"],
      ["Adobe Photoshop", "images/skill_icons/ui/adobe-photoshop.svg"],
      ["Adobe Illustrate", "images/skill_icons/ui/adobe-illustrator.svg"],
      ["Inkscape", "images/skill_icons/ui/inkscape.svg"],
      ["Unity", "images/skill_icons/ui/unity.svg"],
      ["iMovie", "images/skill_icons/ui/imovie.svg"],
    ],
  },
  {
    title: "Languages",
    skills: [],
  },
];

export const timelineData = [
  {
    text: [
      "Fullstack development in Angular, Javascript, Java, and python."
    ],
    date: "July 2022 - Present",
    title: "Rightfoot",
    position: "Software Engineer",
    location: "San Francisco, CA (remote)",
    icon: faBriefcase,
    iconOffset: "left-2.5",
    iconColor: "rgb(250, 255, 205)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    date: "May 2022",
    title: "Graduated Cornell Tech University!",
    location: "New York, NY",
    icon: faGraduationCap,
    iconOffset: "left-4.5",
    iconColor: "rgb(255, 205, 205)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Graded tests, homeworks, and projects through the semester."
    ],
    date: "January 2022 - May 2022",
    title: "Cornell Tech",
    position: "Grader, CS5726 (Learning, Inference, and Decision Making from Data)",
    location: "New York, NY",
    icon: faBriefcase,
    iconOffset: "left-2.5",
    iconColor: "rgb(250, 255, 205)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    date: "August 2021",
    title: "Started my master's at Cornell Tech!",
    location: "New York, NY",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "rgb(255, 205, 205)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Contributed to App Hosting and cross-compatibility changes in the Catalyst 9400 team.",
      "Ran builds and performed bug-fixing for minor issues.",
    ],
    date: "May - August 2021",
    title: "Cisco",
    position: "Software Engineer",
    location: "San Jose, CA",
    icon: faBriefcase,
    iconOffset: "left-2.5",
    iconColor: "rgb(250, 255, 205)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Moved conveyor panels in InControlWare to match Autocad specifications.",
      "Designed and leveraged SQL scripts to manipulate the lengths, positions, and angles of panels in bulk.",
    ],
    date: "February - May 2021",
    title: "Honeywell",
    position: "Software Engineer I",
    location: "Roseville, CA",
    icon: faBriefcase,
    iconOffset: "left-2.5",
    iconColor: "rgb(250, 255, 205)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    date: "December 2020",
    title: "Graduated Purdue University!",
    location: "West Lafayette, IN",
    icon: faGraduationCap,
    iconOffset: "left-4.5",
    iconColor: "rgb(255, 205, 205)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Led a group of seven students in preparing code under a Minecraft repository for open-sourcing under Microsoft.",
      "Coordinated communication of information amongst team members, Microsoft mentors, and CS407 professors.",
    ],

    date: "August - December 2020",
    title: "RenderDragon - CS407 and Microsoft",
    position: "Team Leader and Software Engineer",
    icon: faLaptopCode,
    iconOffset: "left-5",
    iconColor: "rgb(183, 255, 248)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Brainstormed and collaborated with the Director of Design to flesh out a project that would enhance user experience.",
      "Single-handedly created a standalone web application from scratch to perform automated chapter marking on videos. Led the programming.",
      "Designed a Natural Language Processing (machine learning) algorithm to chapter videos based on sentiment or common topics.",
      "Leveraged the capabilities of python libraries and Amazon Web Services (Comprehend and Transcribe) to maximize overall performance.",
      "Customized existing AWS services, such as Comprehend and Rekognition, in python.",
    ],
    date: "October 2019 - August 2020",
    title: "UEGroup",
    position: "Machine Learning Intern",
    location: "Remote (2019), San Jose (2020)",
    icon: faBriefcase,
    iconOffset: "left-2.5",
    iconColor: "rgb(250, 255, 205)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Built a chrome extension that crawls through a website in real time.",
      "Designed a natural language processing algorithm to extract vital information from the page.",
      "Developing this extension to improve runtime and utility as a startup team.",
      "Won first place, most technical, best prototype, and best UI/UX recognition for this project in HACKXD, 2019.",
      "Our product was featured on Fox59 and CBS4.",
    ],
    date: "September 2019",
    links: [
      {
        url: "https://fox59.com/news/purdue-students-working-to-make-technology-more-transparent/",
        text: "See news article and video",
      },
    ],
    title: "HackXD, 2019: Birds Aren't Real",
    icon: faLaptopCode,
    iconOffset: "left-5",
    iconColor: "rgb(183, 255, 248)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Devised new ways to improve the DeepPool algorithm for ridesharing.",
      "Connected Google's Distance Matrix API and Waze's API to gather real-time data.",
      "Presented this research in Purdue's Fall 2019 Research Expo.",
    ],
    date: "August 2019 - May 2020",
    title: "Purdue University: Department of Electrical & Computer Engineering",
    position: "Undergraduate Research Assistant",
    location: "West Lafayette, IN",
    icon: faSearch,
    iconOffset: "left-3",
    iconColor: "rgb(216, 205, 255)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Designed projects for AI + Machine Learning customers in Java, Python, and JavaScript + HTML.",
      "Created data generation algorithms in Python for various Machine Learning exercises related to regression and classification.",
      "Identified several blocker bugs and UI issues with the main website and suggested new features and enhancements to facilitate customer usage.",
      "Assisted in the front-end development of the project website (https://aiclub.world/).",
      "Crowdsourced data for text-based lessons and reached out to clients for testing.",
      "Developed curriculum and ensured readability of project documentation.",
    ],
    date: "May - July 2019",
    title: "Pyxeda AI",
    position: "Software + Machine Learning Intern",
    location: "Santa Clara, CA",
    icon: faBriefcase,
    iconOffset: "left-2.5",
    iconColor: "rgb(250, 255, 205)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Composed curriculum in Canvas for a game coding course geared to preteens.",
      "Added lessons in Processing to facilitate the transition from drag-and-drop code to typed programming.",
    ],
    date: "January - May 2019",
    links: [
      {
        url: "https://github.com/AB3000/Adventures-Game-Coding-Curriculum",
        text: "See repository",
      },
    ],
    title: "Digital Media Academy",
    position: "Curriculum Developer",
    location: "Remote",
    icon: faBriefcase,
    iconOffset: "left-2.5",
    iconColor: "rgb(250, 255, 205)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Assisted students with class projects regarding Unix/Linux commands, C, and C++.",
      "Reviewed students' code to ensure that their submissions meet formatting standards.",
      "Occasionally graded students in class with questions to check their understanding of concepts implemented.",
    ],
    date: "January - May 2019",
    title: "Purdue University: Department of Computer Science",
    position: "Undergraduate Teaching Assistant, CS240 (Programming in C)",
    location: "West Lafayette, IN",
    icon: faBriefcase,
    iconOffset: "left-2.5",
    iconColor: "rgb(250, 255, 205)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Programmed a single-level 2D game in Unity. The player must avoid colliding with any falling objects.",
      "Experimented with threads and a point-system in this game.",
    ],
    date: "December 2018 -  January 2019",
    links: [
      {
        url: "https://github.com/AB3000/Avoid-the-objects-",
        text: "See repository",
      },
    ],
    title: "Avoid the Objects",
    icon: faLaptopCode,
    iconOffset: "left-5",
    iconColor: "rgb(183, 255, 248)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Programmed a single-level 2D RPG game in Unity. This game follows a woman who lost her briefcase in her house.",
      "Experimented with animation, triggers, and dialogue.",
    ],
    date: "September - December 2018",
    links: [
      {
        url: "https://github.com/AB3000/Office-Trouble-",
        text: "See repository",
      },
    ],
    title: "Office Trouble",
    icon: faLaptopCode,
    iconOffset: "left-5",
    iconColor: "rgb(183, 255, 248)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Returned to Digital Media Academy as an instructor. Taught students aged 5 - 12 about artificial intelligence, game development, and lego robotics. ",
      "Planned final projects that allowed students to express their creativity and showcase to their parents.",
      "Wrote weekly reports so that students had an idea of their progress and potential next steps.",
    ],
    date: "June - August 2018",
    title: "Digital Media Academy",
    position: "Instructor",
    location: "Palo Alto, CA",
    icon: faBriefcase,
    iconOffset: "left-2.5",
    iconColor: "rgb(250, 255, 205)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Teamed up with five students from the Graduate and Undergraduate Department in Computer Science to build a dining app.",
      "This app allows students to customize plates based on options from the campus dining courts with their personal nutritional needs.",
      "Designed the graphics and charts to display the nutritional information of the plates.",
      "The app is available on Google Play.",
    ],
    date: "January - April 2018",
    links: [
      {
        url: "https://github.com/magickaiyang/purdue-healthy-dining",
        text: "See repository",
      },
    ],
    title: "Purdue Dining App",
    icon: faLaptopCode,
    iconOffset: "left-5",
    iconColor: "rgb(183, 255, 248)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Collaborated with two people to design a game that teaches recursion.",
      "Players drag and drop blocks to solve a given recursion problem.",
      "Designed the UI and programmed the button triggers.",
    ],
    date: "November - December 2017",
    links: [
      {
        url: "https://github.com/AB3000/Recursive-Tree",
        text: "See repository",
      },
    ],
    title: "Recursive Tree Puzzle",
    icon: faLaptopCode,
    iconOffset: "left-5",
    iconColor: "rgb(183, 255, 248)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Created my first 3D RPG game (a horror maze) in Unity with a group of seven people as part of a game programming club.",
      "Led the team with whiteboard brainstorming sessions, modeled some of the assets, and programmed the game triggers.",
    ],
    date: "October - November 2017",
    links: [
      {
        url: "https://github.com/AB3000/Defy-The-Maze-2017",
        text: "See repository",
      },
    ],
    title: "Defy the Maze",
    icon: faLaptopCode,
    iconOffset: "left-5",
    iconColor: "rgb(183, 255, 248)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Built my first 2D mini-RPG game in Unity.",
      "The game followed a teenage girl trying to find the mystery behind the janitor's closet at her high school.",
      "This was under Purdue's Launchpad program, a one-to-one program that helps students bring their ideas to life!",
    ],
    date: "September - October 2017",
    links: [
      {
        url: "https://github.com/AB3000/dreaming-crazy",
        text: "See repository",
      },
    ],
    title: "Dreaming Crazy",
    icon: faLaptopCode,
    iconOffset: "left-5",
    iconColor: "rgb(183, 255, 248)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    date: "August 2017",
    title: "Started college at Purdue University!",
    location: "West Lafayette, IN",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "rgb(255, 205, 205)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Helped students one-to-one with their weekly projects in wearable technology, animation, game programming, robotics, and physics.",
      "Engaged students in healthy outdoor break-time activities.",
    ],
    date: "Summer 2016, Summer 2017",
    title: "Digital Media Academy",
    position: "Teaching Assistant",
    location: "Palo Alto, CA",
    icon: faBriefcase,
    iconOffset: "left-2.5",
    iconColor: "rgb(250, 255, 205)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Constructed, modeled, and animated several 2D and 3D characters, objects and scenes for games, clips, and app logos.",
      "Used software such as Inkscape, Krita, Adobe Photoshop, Adobe Animate, Unity, and Maya Autodesk.",
    ],
    date: "Summer 2015 - present",
    title: "2D and 3D modeling",
    icon: faLaptopCode,
    iconOffset: "left-5",
    iconColor: "rgb(183, 255, 248)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
  {
    text: [
      "Designed simple platforms to promote awareness and propose cures to several eye diseases, such as Glaucoma.",
      "Developed and copyrighted an android app (South Asian Diet Watch) within 3 months. This app checks a person's BMI and lists foods with their glycemic indices, used for people with diabetes.",
      "The app can be found in google play and downloaded for free (currently undergoing updates/maintenance).",
      "This app was accepted into the Endocrine Society of America.",
    ],
    date: "Summer 2015",
    title: "Gloria Wu, MD",
    position: "Android App / Software Engineering Intern",
    location: "Cambrian Park, San Jose, CA",
    icon: faBriefcase,
    iconOffset: "left-2.5",
    iconColor: "rgb(250, 255, 205)",
    boxColor: "#ff8787",
    borderColor: "#ffa1a1",
  },
];

export const awardData = [
  {
    text: [
      `Voted "best demeanor inside and outside the classroom" by faculty and staff.`
    ],
    date: "May 2022",
    title: "Spirit of Cornell Tech Award",
    location: "Cornell Tech",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "#bf2121",
    iconBackground: "#121211",
    iconOutline: "#cccccc",
    boxColor: "#121211",
    boxBorder: "#bf2121",
    textColor: "#bf2121",
    locColor: "#303e49",
  },
  {
    text: [
      `Received a $25,000 merit scholarship for my year at Cornell Tech.`,
    ],
    date: "December 2020",
    title: "Merit Scholarship",
    location: "Cornell Tech",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "#bf2121",
    iconBackground: "#121211",
    iconOutline: "#cccccc",
    boxColor: "#121211",
    boxBorder: "#bf2121",
    textColor: "#bf2121",
    locColor: "#303e49",
  },
  {
    text: [
      `From my first semester till graduation, I have 
       consistently maintained Semester Honors and my place on the Dean's List.`,
    ],
    date: "August 2017 - December 2020",
    title: "Dean's List and Semester Honors",
    location: "Purdue University",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "rgba(255,181,0,1)",
    iconBackground: "#121211",
    iconOutline: "rgba(255,181,0,1)",
    boxColor: "#121211",
    boxBorder: "rgba(255,181,0,1)",
    textColor: "rgba(255,181,0,0.8)",
    locColor: "#303e49",
  },
  {
    text: [
      "Our team won third place ($500 check) for a pitch competition where we presented our Humanazing AI idea.",
      "I designed the business model slides for the product."
    ],
    date: "November 2019",
    title: `Third Place: Crossing State Street`,
    location: "Purdue University",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "rgba(255,181,0,1)",
    iconBackground: "#121211",
    iconOutline: "rgba(255,181,0,1)",
    boxColor: "#121211",
    boxBorder: "rgba(255,181,0,1)",
    textColor: "rgba(255,181,0,0.8)",
    locColor: "#303e49",
  },
  {
    text: [
      "Our team won first place in the UX Hackathon: Humanizing AI.",
      "We received a check and a seat at Firestarter, a program for helping students build startups.",
      "Our team got a broadcasted TV interview with Fox59 and CBS4."
    ],
    date: "September 2019",
    title: `First Place: UX Hackathon`,
    location: "Purdue University",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "rgba(255,181,0,1)",
    iconBackground: "#121211",
    iconOutline: "rgba(255,181,0,1)",
    boxColor: "#121211",
    boxBorder: "rgba(255,181,0,1)",
    textColor: "rgba(255,181,0,0.8)",
    locColor: "#303e49",
  },
  {
    text: [
      "Our team won the award for Best Prototype at the UX Hackathon: Humanizing AI.",
    ],
    date: "September 2019",
    title: "Best Prototype: UX Hackathon",
    location: "Purdue University",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "rgba(255,181,0,1)",
    iconBackground: "#121211",
    iconOutline: "rgba(255,181,0,1)",
    boxColor: "#121211",
    boxBorder: "rgba(255,181,0,1)",
    textColor: "rgba(255,181,0,0.8)",
    locColor: "#303e49",
  },
  {
    text: [
      "Our team won the Best User Experience award at the UX Hackathon: Humanizing AI.",
    ],
    date: "September 2019",
    title: "Best User Experience: UX Hackathon",
    location: "Purdue University",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "rgba(255,181,0,1)",
    iconBackground: "#121211",
    iconOutline: "rgba(255,181,0,1)",
    boxColor: "#121211",
    boxBorder: "rgba(255,181,0,1)",
    textColor: "rgba(255,181,0,0.8)",
    locColor: "#303e49",
  },
  {
    text: [
      "Our hackathon team won the award for the most technical project at the UX Hackathon: Humanizing AI.",
      "I designed the natural language processing algorithm underlying the chrome extension we built.",
    ],
    date: "September 2019",
    title: `Most Technical Project: UX Hackathon`,
    location: "Purdue University",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "rgba(255,181,0,1)",
    iconBackground: "#121211",
    iconOutline: "rgba(255,181,0,1)",
    boxColor: "#121211",
    boxBorder: "rgba(255,181,0,1)",
    textColor: "rgba(255,181,0,0.8)",
    locColor: "#303e49",
  },
  {
    text: [
      `Certificate and seal on diploma for showing proficiency in French and English.`,
    ],
    date: "June 2017",
    title: "California Seal of Billiteracy",
    location: "Homestead High School",
    icon: "icon-california",
    iconCode: "&#xe900;",
    iconGradient: "gradient california-gradient",
    iconBackground: "black",
    iconOutline: "rgba(255,181,0,0.8)",
    boxColor: "#121211",
    boxBorder: "#5ab337",
    textColor: "green",
    locColor: "#303e49",
  },
  {
    text: [
      `Medal for performing more than 80 hours of local community service within my senior year of high school.`,
    ],
    date: "June 2017",
    title: `Community Service Award`,
    location: "Fremont Union High School District",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "#610606",
    iconBackground: "#121211",
    iconOutline: "#610606",
    boxColor: "#121211",
    boxBorder: "#610606",
    textColor: "#a80c0c",
    locColor: "#303e49",
  },
  {
    text: [
      `Award placed on diploma for maintaining high grades in English, Mathematics, Science, History, and other electives in high school.`,
    ],
    date: "June 2017",
    title: "Golden State Seal Merit",
    location: "Homestead High School",
    icon: "icon-california",
    iconCode: "&#xe900;",
    iconGradient: "gradient california-gradient",
    iconBackground: "black",
    iconOutline: "rgba(255,181,0,0.8)",
    boxColor: "#121211",
    boxBorder: "#5ab337",
    textColor: "green",
    locColor: "#303e49",
  },
  {
    text: [
      `Received this community service award for 12 hours of tutoring services in math after school.`,
    ],
    date: "May 2017",
    title: `Academic Center Tutoring: Community Service Award`,
    location: "Homestead High School",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "#5ab337",
    iconBackground: "#121211",
    iconOutline: "#5ab337",
    boxColor: "#121211",
    boxBorder: "#5ab337",
    textColor: "green",
    locColor: "#303e49",
  },
  {
    text: [
      `Cord handed for performing more than 20 hours of service in French-themed events in my local community.`,
    ],
    date: "May 2017",
    title: "French National Honor Society: Recognition",
    location: "Homestead High School",
    icon: "icon-USAFlag",
    iconCode: "&#xe901;",
    iconGradient: "gradient french-gradient",
    iconBackground: "black",
    iconOutline: "pink",
    boxColor: "#121211",
    boxBorder: "#5ab337",
    textColor: "green",
    locColor: "#303e49",
  },
  {
    text: [
      `Cord handed for assisting in art-related events for more than 20 hours in my school and community.`,
    ],
    date: "May 2017",
    title: "National Art Honor Society: Recognition",
    location: "Homestead High School",
    icon: "icon-USAFlag",
    iconGradient: "gradient rainbow-gradient",
    iconCode: "&#xe901;",
    iconBackground: "black",
    iconOutline: "rgba(0,224,233, 0.8)",
    boxColor: "#121211",
    boxBorder: "#5ab337",
    textColor: "green",
    locColor: "#303e49",
  },
  {
    text: [
      `Received a merit award for "Doin' It Wright" in my government and economics class.`,
    ],
    date: "April 2017",
    title: `Government and Economics: "Doin' It Wright"`,
    location: "Homestead High School",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "#5ab337",
    iconBackground: "#121211",
    iconOutline: "#5ab337",
    boxColor: "#121211",
    boxBorder: "#5ab337",
    textColor: "green",
    locColor: "#303e49",
  },
  {
    text: [
      `Received the "Dr. Francisco Jiminez Award for the Strongest Work Ethic" in my Mythology and Folklore class.`,
    ],
    date: "April 2017",
    title: "Mythology and Folklore: Dr. Francisco Jiminez Award for Work Ethic",
    location: "Homestead High School",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "#5ab337",
    iconBackground: "#121211",
    iconOutline: "#5ab337",
    boxColor: "#121211",
    boxBorder: "#5ab337",
    textColor: "green",
    locColor: "#303e49",
  },
  {
    text: [
      `Received this merit award in French IV for excellent class performance.`,
    ],
    date: "February 2017",
    title: "French IV: Merit Certificate",
    location: "Homestead High School",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "#5ab337",
    iconBackground: "#121211",
    iconOutline: "#5ab337",
    boxColor: "#121211",
    boxBorder: "#5ab337",
    textColor: "green",
    locColor: "#303e49",
  },
  {
    text: [
      `Received this merit award for "exceptional writing and speaking skills and constant effort to use the French language in creative ways."`,
    ],
    date: "April 2016",
    title: "French III: The Marcel Pagnol Award",
    location: "Homestead High School",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "#5ab337",
    iconBackground: "#121211",
    iconOutline: "#5ab337",
    boxColor: "#121211",
    boxBorder: "#5ab337",
    textColor: "green",
    locColor: "#303e49",
  },
  {
    text: [`Awarded for having a PSAT score within the top 3% of test-takers.`],
    date: "September 2015",
    title: "National Merit Scholarship Program: Letter of Commendation",
    location: "Homestead High School",
    icon: faFlagUsa,
    iconOffset: "left-2",
    iconColor: "blue",
    iconBackground: "#121211",
    iconOutline: "#d41717",
    boxColor: "#121211",
    boxBorder: "#5ab337",
    textColor: "green",
    locColor: "#303e49",
  },
  {
    text: [
      `Received this merit award for "outstanding performance" in my 10th grade World History class.`,
    ],
    date: "April 2015",
    title: "World History: Outstanding Performance",
    location: "Homestead High School",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "#5ab337",
    iconBackground: "#121211",
    iconOutline: "#5ab337",
    boxColor: "#121211",
    boxBorder: "#5ab337",
    textColor: "green",
    locColor: "#303e49",
  },
  {
    text: [
      `Received this merit award for "exceptional writing and speaking skills and constant effort to use the French language in creative ways."`,
    ],
    date: "April 2015",
    title: "French II: The Marcel Pagnol Award",
    location: "Homestead High School",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "#5ab337",
    iconBackground: "#121211",
    iconOutline: "#5ab337",
    boxColor: "#121211",
    boxBorder: "#5ab337",
    textColor: "green",
    locColor: "#303e49",
  },
  {
    text: [
      `Received a "Zora Neale Hurston Award for Good Medicine / Well Rounded Student" in my 10th grade World Literature and Writing class.`,
    ],
    date: "April 2015",
    title: "World Literature and Writing: The Zora Neale Hurston Award",
    location: "Homestead High School",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "#5ab337",
    iconBackground: "#121211",
    iconOutline: "#5ab337",
    boxColor: "#121211",
    boxBorder: "#5ab337",
    textColor: "green",
    locColor: "#303e49",
  },
  {
    text: [
      `Received this merit award for "outstanding Computer Science achievement" in an Introduction to Java course in 9th grade.`,
    ],
    date: "April 2014",
    title: "Introduction to Java: Outstanding Computer Science Achievement",
    location: "Homestead High School",
    icon: faSchool,
    iconOffset: "left-5",
    iconColor: "#5ab337",
    iconBackground: "#121211",
    iconOutline: "#5ab337",
    boxColor: "#121211",
    boxBorder: "#5ab337",
    textColor: "green",
    locColor: "#303e49",
  },
];
