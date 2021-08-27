{
  /* <h1 style="font-family: avenir">Spontaneous. <br> 
      Adventurous. <br> 
      Bold. <br> 
      Confident. <br> 
      Determined. 
      <br><br><br> 
      Never a dull moment!</h1> */
}


export const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 10,
  },
};

//Some information from https://www.pinterest.de/pin/334533078557639580/
export const astrologyData = [
  {
    src: "images/astrology/main_pendants/aries.png",
    frontText: `Spontaneous, adventurous, bold, confident, and determined. Never a dull moment!`,
    backText: `<h1>Aries the Ram</h1>
    <h2>Element: Fire</h2>
    <h2>
      Symbol: <span class="icon-aries" data-icon="&#xe90b;"></span>
    </h2>
    <h2>Modality: Cardinal</h2>
    <h2>Season: Spring</h2>
    <h3>
      Most compatible with Aries, Leo, Sagittarius, Aquarius, and
      Gemini.
    </h3>
    <h3>"The leader of the zodiac"</h3>`,
    id: 0,
    cardColor: "rgb(255, 202, 202)",
  },
  {
    src: "images/astrology/main_pendants/taurus.png",
    frontText:
      "Intelligent, headstrong, dedicated, reliable, and diligent. I fight well.",
    backText: `<h1>Taurus the Bull</h1>
    <h2>Element: Earth</h2>
    <h2>
      Symbol: <span class="icon-taurus" data-icon="&#x74;"></span>
    </h2>
    <h2>Modality: Fixed</h2>
    <h2>Season: Spring</h2>
    <h3>
      Most compatible with Taurus, Virgo, Capricorn, Cancer, and
      Pisces.
    </h3>
    <h3>"The owner of the zodiac"</h3>`,
    id: 1,
    cardColor: "rgb(211, 255, 202)",
  },
  {
    src: "images/astrology/main_pendants/gemini.png",
    frontText:
      "Playful, curious, affectionate, witty, and adaptable. Catch me if you can!",
    backText: `<h1>Gemini the Twins</h1>
    <h2>Element: Air</h2>
    <h2>
      Symbol: <span class="icon-gemini" data-icon="&#x67;"></span>
    </h2>
    <h2>Modality: Mutable</h2>
    <h2>Season: Spring</h2>
    <h3>
      Most compatible with Gemini, Libra, Aquarius, Leo, and Aries.
    </h3>
    <h3>"The child of the zodiac"</h3>`,
    id: 2,
    cardColor: "rgb(255, 250, 202)",
  },
  {
    src: "images/astrology/main_pendants/cancer.png",
    frontText:
      "Compassionate, sensitive, nurturing, patient, and romantic. I'll always be by your side.",
    backText: `<h1>Cancer the Crab</h1>
    <h2>Element: Water</h2>
    <h2>
      Symbol: <span class="icon-cancer" data-icon="&#x908;"></span>
    </h2>
    <h2>Modality: Cardinal</h2>
    <h2>Season: Summer</h2>
    <h3>
      Most compatible with Cancer, Scorpio, Pisces, Virgo, and Taurus.
    </h3>
    <h3>"The mother of the zodiac"</h3>`,
    id: 3,
    cardColor: "rgb(202, 255, 252)",
  },
  {
    src: "images/astrology/main_pendants/leo.png",
    frontText:
      "Ambitious, loyal, confident, generous, and perseverant. Heads turn when I make an entrance.",
    backText: `<h1>Leo the Lion</h1>
    <h2>Element: Fire</h2>
    <h2>
      Symbol: <span class="icon-leo" data-icon="&#x6c;"></span>
    </h2>
    <h2>Modality: Fixed</h2>
    <h2>Season: Summer</h2>
    <h3>
      Most compatible with Leo, Sagittarius, Aries, Gemini, and Libra.
    </h3>
    <h3>"The protector of the zodiac"</h3>`,
    id: 4,
    cardColor: "rgb(255, 202, 202)",
  },
  {
    src: "images/astrology/main_pendants/virgo.png",
    frontText:
      "Intelligent, meticulous, practical, organized, and adaptable. I'm not afraid of standing alone.",
    backText: `<h1>Virgo the Maiden</h1>
    <h2>Element: Earth</h2>
    <h2>
      Symbol: <span class="icon-virgo" data-icon="&#x76;"></span>
    </h2>
    <h2>Modality: Mutable</h2>
    <h2>Season: Summer</h2>
    <h3>
      Most compatible with Virgo, Taurus, Capricorn, Scorpio, and
      Cancer.
    </h3>
    <h3>"The helper of the zodiac"</h3>`,
    id: 5,
    cardColor: "rgb(211, 255, 202)",
  },
  {
    src: "images/astrology/main_pendants/libra.png",
    frontText:
      "Charming, social, diplomatic, balanced, and cheerful. I'm the eye in a storm.",
    backText: `<h1>Libra the Scale</h1>
    <h2>Element: Air</h2>
    <h2>
      Symbol: <span class="icon-libra" data-icon="&#xe905;"></span>
    </h2>
    <h2>Modality: Cardinal</h2>
    <h2>Season: Fall</h2>
    <h3>
      Most compatible with Libra, Aquarius, Gemini, Sagittarius, and Leo.
    </h3>
    <h3>"The law of the zodiac"</h3>`,
    id: 6,
    cardColor: "rgb(255, 250, 202)",
  },
  {
    src: "images/astrology/main_pendants/scorpio.png",
    frontText:
      "Mysterious, perceptive, collected, determined, and astute. My wit is sharp.",
    backText: `<h1>Scorpio the Scorpion</h1>
    <h2>Element: Water</h2>
    <h2>
      Symbol: <span class="icon-scorpio" data-icon="&#x73;"></span>
    </h2>
    <h2>Modality: Fixed</h2>
    <h2>Season: Fall</h2>
    <h3>
      Most compatible with Scorpio, Pisces, Cancer, Capricorn, and Virgo.
    </h3>
    <h3>"The magician of the zodiac"</h3>`,
    id: 7,
    cardColor: "rgb(202, 255, 252)",
  },
  {
    src: "images/astrology/main_pendants/sagittarius.png",
    frontText:
      "Optimistic, philosophical, adventurous, scholarly, and honest. You'll never forget me.",
    backText: `<h1>Sagittarius the Archer</h1>
    <h2>Element: Fire</h2>
    <h2>
      Symbol: <span class="icon-sagittarius" data-icon="&#xe903;"></span>
    </h2>
    <h2>Modality: Mutable</h2>
    <h2>Season: Fall</h2>
    <h3>
      Most compatible with Sagittarius, Aries, Leo, Aquarius, and Libra.
    </h3>
    <h3>"The tourist of the zodiac"</h3>`,
    id: 8,
    cardColor: "rgb(255, 202, 202)",
  },
  {
    src: "images/astrology/main_pendants/capricorn.png",
    frontText:
      "Practical, disciplined, respectful, hardworking, and serious. The early bird catches the worm.",
    backText: `<h1>Capricorn the Sea Goat</h1>
    <h2>Element: Earth</h2>
    <h2>
      Symbol: <span class="icon-capricorn" data-icon="&#x63;"></span>
    </h2>
    <h2>Modality: Cardinal</h2>
    <h2>Season: Winter</h2>
    <h3>
      Most compatible with Capricorn, Taurus, Virgo, Pisces, and Scorpio.
    </h3>
    <h3>"The father of the zodiac"</h3>`,
    id: 9,
    cardColor: "rgb(211, 255, 202)",
  },
  {
    src: "images/astrology/main_pendants/aquarius.png",
    frontText:
      "Friendly, creative, independent, intelligent, and approachable. Crazy ideas change the world.",
    backText: `<h1>Aquarius the Water-Bearer</h1>
    <h2>Element: Air</h2>
    <h2>
      Symbol: <span class="icon-aquarius" data-icon="&#x61;"></span>
    </h2>
    <h2>Modality: Fixed</h2>
    <h2>Season: Winter</h2>
    <h3>
      Most compatible with Aquarius, Gemini, Libra, Aries, and Sagittarius.
    </h3>
    <h3>"The eccentric of the zodiac"</h3>`,
    id: 10,
    cardColor: "rgb(255, 250, 202)",
  },
  {
    src: "images/astrology/main_pendants/pisces.png",
    frontText:
      "Wise, kind, gentle, artistic, and trusting. I sing the body electric.",
    backText: `<h1>Pisces the Fish</h1>
    <h2>Element: Water</h2>
    <h2>
      Symbol: <span class="icon-pisces" data-icon="&#x70;"></span>
    </h2>
    <h2>Modality: Mutable</h2>
    <h2>Season: Winter</h2>
    <h3>
      Most compatible with Pisces, Cancer, Scorpio, Taurus and Capricorn.
    </h3>
    <h3>"The elder of the zodiac"</h3>`,
    id: 11,
    cardColor: "rgb(202, 255, 252)",
  },
];


export const accAstrologyData = [
  {
    src: "images/astrology/acc_pendants/gemini_one.png",
    frontText: `Spontaneous, adventurous, bold, confident, and determined. Never a dull moment!`,
    backText: `<h1>Aries the Ram</h1>
    <h2>Element: Fire</h2>
    <h2>
      Symbol: <span class="icon-aries" data-icon="&#xe90b;"></span>
    </h2>
    <h2>Modality: Cardinal</h2>
    <h2>Season: Spring</h2>
    <h3>
      Most compatible with Aries, Leo, Sagittarius, Aquarius, and
      Gemini.
    </h3>
    <h3>"The leader of the zodiac"</h3>`,
    id: 0,
    cardColor: "rgb(255, 202, 202)",
  },
  {
    src: "images/astrology/main_pendants/taurus.png",
    frontText:
      "Intelligent, headstrong, dedicated, reliable, and diligent. I fight well.",
    backText: `<h1>Taurus the Bull</h1>
    <h2>Element: Earth</h2>
    <h2>
      Symbol: <span class="icon-taurus" data-icon="&#x74;"></span>
    </h2>
    <h2>Modality: Fixed</h2>
    <h2>Season: Spring</h2>
    <h3>
      Most compatible with Taurus, Virgo, Capricorn, Cancer, and
      Pisces.
    </h3>
    <h3>"The owner of the zodiac"</h3>`,
    id: 1,
    cardColor: "rgb(211, 255, 202)",
  },
  {
    src: "images/astrology/main_pendants/gemini.png",
    frontText:
      "Playful, curious, affectionate, witty, and adaptable. Catch me if you can!",
    backText: `<h1>Gemini the Twins</h1>
    <h2>Element: Air</h2>
    <h2>
      Symbol: <span class="icon-gemini" data-icon="&#x67;"></span>
    </h2>
    <h2>Modality: Mutable</h2>
    <h2>Season: Spring</h2>
    <h3>
      Most compatible with Gemini, Libra, Aquarius, Leo, and Aries.
    </h3>
    <h3>"The child of the zodiac"</h3>`,
    id: 2,
    cardColor: "rgb(255, 250, 202)",
  },
  {
    src: "images/astrology/main_pendants/cancer.png",
    frontText:
      "Compassionate, sensitive, nurturing, patient, and romantic. I'll always be by your side.",
    backText: `<h1>Cancer the Crab</h1>
    <h2>Element: Water</h2>
    <h2>
      Symbol: <span class="icon-cancer" data-icon="&#x908;"></span>
    </h2>
    <h2>Modality: Cardinal</h2>
    <h2>Season: Summer</h2>
    <h3>
      Most compatible with Cancer, Scorpio, Pisces, Virgo, and Taurus.
    </h3>
    <h3>"The mother of the zodiac"</h3>`,
    id: 3,
    cardColor: "rgb(202, 255, 252)",
  },
  {
    src: "images/astrology/main_pendants/leo.png",
    frontText:
      "Ambitious, loyal, confident, generous, and perseverant. Heads turn when I make an entrance.",
    backText: `<h1>Leo the Lion</h1>
    <h2>Element: Fire</h2>
    <h2>
      Symbol: <span class="icon-leo" data-icon="&#x6c;"></span>
    </h2>
    <h2>Modality: Fixed</h2>
    <h2>Season: Summer</h2>
    <h3>
      Most compatible with Leo, Sagittarius, Aries, Gemini, and Libra.
    </h3>
    <h3>"The protector of the zodiac"</h3>`,
    id: 4,
    cardColor: "rgb(255, 202, 202)",
  },
  {
    src: "images/astrology/main_pendants/virgo.png",
    frontText:
      "Intelligent, meticulous, practical, organized, and adaptable. I'm not afraid of standing alone.",
    backText: `<h1>Virgo the Maiden</h1>
    <h2>Element: Earth</h2>
    <h2>
      Symbol: <span class="icon-virgo" data-icon="&#x76;"></span>
    </h2>
    <h2>Modality: Mutable</h2>
    <h2>Season: Summer</h2>
    <h3>
      Most compatible with Virgo, Taurus, Capricorn, Scorpio, and
      Cancer.
    </h3>
    <h3>"The helper of the zodiac"</h3>`,
    id: 5,
    cardColor: "rgb(211, 255, 202)",
  },
  {
    src: "images/astrology/main_pendants/libra.png",
    frontText:
      "Charming, social, diplomatic, balanced, and cheerful. I'm the eye in a storm.",
    backText: `<h1>Libra the Scale</h1>
    <h2>Element: Air</h2>
    <h2>
      Symbol: <span class="icon-libra" data-icon="&#xe905;"></span>
    </h2>
    <h2>Modality: Cardinal</h2>
    <h2>Season: Fall</h2>
    <h3>
      Most compatible with Libra, Aquarius, Gemini, Sagittarius, and Leo.
    </h3>
    <h3>"The law of the zodiac"</h3>`,
    id: 6,
    cardColor: "rgb(255, 250, 202)",
  },
  {
    src: "images/astrology/main_pendants/scorpio.png",
    frontText:
      "Mysterious, perceptive, collected, determined, and astute. My wit is sharp.",
    backText: `<h1>Scorpio the Scorpion</h1>
    <h2>Element: Water</h2>
    <h2>
      Symbol: <span class="icon-scorpio" data-icon="&#x73;"></span>
    </h2>
    <h2>Modality: Fixed</h2>
    <h2>Season: Fall</h2>
    <h3>
      Most compatible with Scorpio, Pisces, Cancer, Capricorn, and Virgo.
    </h3>
    <h3>"The magician of the zodiac"</h3>`,
    id: 7,
    cardColor: "rgb(202, 255, 252)",
  },
  {
    src: "images/astrology/main_pendants/sagittarius.png",
    frontText:
      "Optimistic, philosophical, adventurous, scholarly, and honest. You'll never forget me.",
    backText: `<h1>Sagittarius the Archer</h1>
    <h2>Element: Fire</h2>
    <h2>
      Symbol: <span class="icon-sagittarius" data-icon="&#xe903;"></span>
    </h2>
    <h2>Modality: Mutable</h2>
    <h2>Season: Fall</h2>
    <h3>
      Most compatible with Sagittarius, Aries, Leo, Aquarius, and Libra.
    </h3>
    <h3>"The tourist of the zodiac"</h3>`,
    id: 8,
    cardColor: "rgb(255, 202, 202)",
  },
  {
    src: "images/astrology/main_pendants/capricorn.png",
    frontText:
      "Practical, disciplined, respectful, hardworking, and serious. The early bird catches the worm.",
    backText: `<h1>Capricorn the Sea Goat</h1>
    <h2>Element: Earth</h2>
    <h2>
      Symbol: <span class="icon-capricorn" data-icon="&#x63;"></span>
    </h2>
    <h2>Modality: Cardinal</h2>
    <h2>Season: Winter</h2>
    <h3>
      Most compatible with Capricorn, Taurus, Virgo, Pisces, and Scorpio.
    </h3>
    <h3>"The father of the zodiac"</h3>`,
    id: 9,
    cardColor: "rgb(211, 255, 202)",
  },
  {
    src: "images/astrology/main_pendants/aquarius.png",
    frontText:
      "Friendly, creative, independent, intelligent, and approachable. Crazy ideas change the world.",
    backText: `<h1>Aquarius the Water-Bearer</h1>
    <h2>Element: Air</h2>
    <h2>
      Symbol: <span class="icon-aquarius" data-icon="&#x61;"></span>
    </h2>
    <h2>Modality: Fixed</h2>
    <h2>Season: Winter</h2>
    <h3>
      Most compatible with Aquarius, Gemini, Libra, Aries, and Sagittarius.
    </h3>
    <h3>"The eccentric of the zodiac"</h3>`,
    id: 10,
    cardColor: "rgb(255, 250, 202)",
  },
  {
    src: "images/astrology/main_pendants/pisces.png",
    frontText:
      "Wise, kind, gentle, artistic, and trusting. I sing the body electric.",
    backText: `<h1>Pisces the Fish</h1>
    <h2>Element: Water</h2>
    <h2>
      Symbol: <span class="icon-pisces" data-icon="&#x70;"></span>
    </h2>
    <h2>Modality: Mutable</h2>
    <h2>Season: Winter</h2>
    <h3>
      Most compatible with Pisces, Cancer, Scorpio, Taurus and Capricorn.
    </h3>
    <h3>"The elder of the zodiac"</h3>`,
    id: 11,
    cardColor: "rgb(202, 255, 252)",
  },
];
// export const braceletData = [
//   {
//     path: require("../assets/images/Web-Files/Bracelets/FullSizeRender 2.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/FullSizeRender 3.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/FullSizeRender 4.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/FullSizeRender 5.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/FullSizeRender 6.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/FullSizeRender 7.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/FullSizeRender.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3688.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3699.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3701.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3703.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3704.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3705.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3706.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3707.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3708.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3717.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3718.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3719.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3721.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3723.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3724.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3768.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3774.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3776.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3777.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3840.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_3841.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4004.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4005.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4006.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4007.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4009.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4010.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4012.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4013.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4014.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4015.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4018.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4019.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4020.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4021.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4022.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4024.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4025.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4026.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4027.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4028.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4029.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4030.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4064.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4068.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4268.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4269.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4424.jpeg")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4426.jpeg")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4427.jpeg")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/IMG_4428.png")
//   },
// {
//   path: require("../assets/images/Web-Files/Bracelets/IMG_4456.JPG")
// },
// {
//   path: require("../assets/images/Web-Files/Bracelets/IMG_4463.JPG")
//   // },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/Jewelry - 10.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/Jewelry - 22.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/Jewelry - 25.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bracelets/Jewelry - 32.png")
//   }
// ];

// export const bottlesData = [
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3936.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3939.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3940.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3941.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3942.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3943.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3944.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3945.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3947.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3948.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3949.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3950.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3952.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3953.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3954.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3955.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3956.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3957.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3958.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3959.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3960.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3961.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_3962.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_4031.jpeg")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_4032.jpeg")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_4033.jpeg")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_4034.jpeg")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_4035.jpeg")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_4036.jpeg")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_4037.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_4038.jpeg")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_4039.jpeg")
//   },
//   {
//     path: require("../assets/images/Web-Files/Bottles/IMG_4062.jpeg")
//   }
// ];

// export const earringData = [
//   {
//     path: require("../assets/images/Web-Files/Earrings/blue_earrings.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Earrings/IMG_3715.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Earrings/IMG_3716.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Earrings/IMG_3725.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Earrings/IMG_3727.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Earrings/IMG_3728.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Earrings/IMG_3730.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Earrings/IMG_3735.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Earrings/IMG_3775.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Earrings/IMG_3778.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Earrings/Jewelry - 2.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Earrings/Jewelry - 11.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Earrings/Jewelry - 27.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Earrings/Jewelry - 28.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Earrings/Jewelry - 29.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Earrings/Jewelry - 30.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Earrings/Jewelry - 31.png")
//   }
// ];

// export const necklaceData = [
//   {
//     path: require("../assets/images/Web-Files/Necklaces/IMG_3698.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/IMG_3729.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/IMG_3770.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/IMG_3771.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/IMG_3772.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/IMG_3773.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/IMG_3832.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/IMG_3833.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/IMG_3839.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/IMG_4067.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/IMG_4609.JPG")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/IMG_4720.JPG")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/IMG_4740.JPG")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/IMG_8206.JPG")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 1.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 3.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 4.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 5.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 6.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 7.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 8.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 9.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 12.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 13.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 14.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 15.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 16.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 17.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 18.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 19.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 20.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 21.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 23.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 24.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry - 26.png")
//   },
//   {
//     path: require("../assets/images/Web-Files/Necklaces/Jewelry necklaces.png")
//   }
// ];

// export const sewingData = [
// { path: require("../assets/images/Web-Files/Sewing/IMG_3671.png") },
// { path: require("../assets/images/Web-Files/Sewing/IMG_3672.png") },
// { path: require("../assets/images/Web-Files/Sewing/IMG_3673.png") },
// { path: require("../assets/images/Web-Files/Sewing/IMG_3674.png") },
// { path: require("../assets/images/Web-Files/Sewing/IMG_3675.png") },
// { path: require("../assets/images/Web-Files/Sewing/IMG_3676.png") },
// { path: require("../assets/images/Web-Files/Sewing/IMG_3677.png") },
// { path: require("../assets/images/Web-Files/Sewing/IMG_3678.png") },
// { path: require("../assets/images/Web-Files/Sewing/IMG_3679.png") },
// { path: require("../assets/images/Web-Files/Sewing/IMG_3680.png") },
// { path: require("../assets/images/Web-Files/Sewing/IMG_3681.png") },
// { path: require("../assets/images/Web-Files/Sewing/IMG_3682.png") },
// { path: require("../assets/images/Web-Files/Sewing/IMG_3683.png") },
// { path: require("../assets/images/Web-Files/Sewing/IMG_3684.png") },
// { path: require("../assets/images/Web-Files/Sewing/pillow.png") }
// ];

// export const modelingData = [
// { path: require("../assets/images/Web-Files/3DModelingFiles/beadgif.mp4") },
// {
//   path: require("../assets/images/Web-Files/3DModelingFiles/blue_bottle.mp4")
// },
// { path: require("../assets/images/Web-Files/3DModelingFiles/blueeye.jpeg") },
// { path: require("../assets/images/Web-Files/3DModelingFiles/bowl.jpeg") },
// { path: require("../assets/images/Web-Files/3DModelingFiles/bowl.png") },
// { path: require("../assets/images/Web-Files/3DModelingFiles/cake.png") },
// {
//   path: require("../assets/images/Web-Files/3DModelingFiles/cakeslices.png")
// },
// {
//   path: require("../assets/images/Web-Files/3DModelingFiles/changingorb.mp4")
// },
// {
//   path: require("../assets/images/Web-Files/3DModelingFiles/chibi_model.png")
// },
// { path: require("../assets/images/Web-Files/3DModelingFiles/coloreyes.png") },
// { path: require("../assets/images/Web-Files/3DModelingFiles/doughnut.png") },
// { path: require("../assets/images/Web-Files/3DModelingFiles/excited.png") },
// { path: require("../assets/images/Web-Files/3DModelingFiles/fountain.mp4") },
// {
//   path: require("../assets/images/Web-Files/3DModelingFiles/glass_twist.png")
// },
// { path: require("../assets/images/Web-Files/3DModelingFiles/glass.mp4") },
// { path: require("../assets/images/Web-Files/3DModelingFiles/glassbowl.png") },
// {
//   path: require("../assets/images/Web-Files/3DModelingFiles/glassjello.jpeg")
// },
// { path: require("../assets/images/Web-Files/3DModelingFiles/happy.png") },
// { path: require("../assets/images/Web-Files/3DModelingFiles/heart.png") },
// {
//   path: require("../assets/images/Web-Files/3DModelingFiles/ice_cream.jpeg")
// },
// { path: require("../assets/images/Web-Files/3DModelingFiles/icegif.mp4") },
// { path: require("../assets/images/Web-Files/3DModelingFiles/IMG_3664.mp4") },
// { path: require("../assets/images/Web-Files/3DModelingFiles/limebowl.jpeg") },
// { path: require("../assets/images/Web-Files/3DModelingFiles/orb.JPG") },
// { path: require("../assets/images/Web-Files/3DModelingFiles/pink_bowl.png") },
// { path: require("../assets/images/Web-Files/3DModelingFiles/pinkbead.jpeg") },
// { path: require("../assets/images/Web-Files/3DModelingFiles/pot.png") },
// {
//   path: require("../assets/images/Web-Files/3DModelingFiles/purplebead.jpeg")
// },
// { path: require("../assets/images/Web-Files/3DModelingFiles/rose.png") },
// { path: require("../assets/images/Web-Files/3DModelingFiles/sad.png") },
// {
//   path: require("../assets/images/Web-Files/3DModelingFiles/scary_girl.jpeg")
// },
// {
//   path: require("../assets/images/Web-Files/3DModelingFiles/sculpture.jpeg")
// },
// {
//   path: require("../assets/images/Web-Files/3DModelingFiles/triangularprism.png")
// },
// { path: require("../assets/images/Web-Files/3DModelingFiles/warmbowl.jpeg") }
// ];

// export const animationData = [
// { path: require("../assets/images/Web-Files/AnimationClips/4_women.png") },
// { path: require("../assets/images/Web-Files/AnimationClips/abstract.png") },
// { path: require("../assets/images/Web-Files/AnimationClips/ax-rose.mp4") },
// { path: require("../assets/images/Web-Files/AnimationClips/bloody.mp4") },
// { path: require("../assets/images/Web-Files/AnimationClips/blue.png") },
// {
//   path: require("../assets/images/Web-Files/AnimationClips/changing_shapes.mp4")
// },
// {
//   path: require("../assets/images/Web-Files/AnimationClips/churning_woman.mp4")
// },
// { path: require("../assets/images/Web-Files/AnimationClips/cross_back.png") },
// { path: require("../assets/images/Web-Files/AnimationClips/doll.png") },
// { path: require("../assets/images/Web-Files/AnimationClips/dream.mp4") },
// { path: require("../assets/images/Web-Files/AnimationClips/dress.mp4") },
// { path: require("../assets/images/Web-Files/AnimationClips/eyes.png") },
// { path: require("../assets/images/Web-Files/AnimationClips/fall_girl.png") },
// { path: require("../assets/images/Web-Files/AnimationClips/fullbody.png") },
// { path: require("../assets/images/Web-Files/AnimationClips/ghosts.mp4") },
// {
//   path: require("../assets/images/Web-Files/AnimationClips/girl_hair_animate.mp4")
// },
// {
//   path: require("../assets/images/Web-Files/AnimationClips/Girl_Running_Carnival.mp4")
// },
// { path: require("../assets/images/Web-Files/AnimationClips/girl.png") },
// { path: require("../assets/images/Web-Files/AnimationClips/girl1.png") },
// { path: require("../assets/images/Web-Files/AnimationClips/hairbow.png") },
// { path: require("../assets/images/Web-Files/AnimationClips/hot.png") },
// {
//   path: require("../assets/images/Web-Files/AnimationClips/love_yourself.mp4")
// },
// { path: require("../assets/images/Web-Files/AnimationClips/miss.png") },
// {
//   path: require("../assets/images/Web-Files/AnimationClips/multipleshapes.mp4")
// },
// { path: require("../assets/images/Web-Files/AnimationClips/nature.mp4") },
// { path: require("../assets/images/Web-Files/AnimationClips/noface.png") },
// { path: require("../assets/images/Web-Files/AnimationClips/small.png") },
// { path: require("../assets/images/Web-Files/AnimationClips/trace.png") },
// { path: require("../assets/images/Web-Files/AnimationClips/twin_girls.png") },
// {
//   path: require("../assets/images/Web-Files/AnimationClips/woman_long_dress.mp4")
// }
// ];

// export default braceletData;
