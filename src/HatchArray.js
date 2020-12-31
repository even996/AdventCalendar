/* Found this on Stackoverflow https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place. ES6 version
 * @param {Array} a - An array containing the items.
 */

/**
 * Funksjon som sorter arrayet i ES6
 * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * @param {*} a - An array containg the items 
 */
const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  
  
  /**
   * Visdomsord, morsomme quotes fra ulike nettsteder
   * http://www.devtopics.com/best-programming-jokes/
   */

  // Array med alle elementene --> id, nr, img, text og open.
    // id er for at elementene trenger en id av react
    // nr er da hvilken dag det er
    // Bilde er da lukebildet
    // Text er teksten som kommer når man har åpnet luken
    // open er en boolean som sier om den er åpnet eller ikke. Alle er da false i starten.


    /**
     * Resultat sender over(export) hatchArrayet med hatch elementer sortert random.
     */
  export const hatchArray = [
    {
      id: "hatch-1",
      nr: 1,
      img: "./img/1.jpg",
      text:
        '«I morgen er svært ofte den hektiske dagen i uka». – Ukjent',
      open: false
    },
    {
      id: "hatch-2",
      nr: 2,
      img: "./img/2.jpg",
      text:
        '«Alltid lån penger fra en pessimist. Ha forventer nemlig ikke å få dem tilbake.» – Oscar Wilde',
      open: false
    },
    {
      id: "hatch-3",
      nr: 3,
      img: "./img/3.jpg",
      text:
        '«Jeg skal la meg imponere av teknologi den dagen de gjør mulig å laste ned mat.» – Ukjent',
      open: false
    },
    {
      id: "hatch-4",
      nr: 4,
      img: "./img/4.jpg",
      text:
        "How do you know when Santa's in the room? You can sense his presents.",
      open: false
    },
    {
      id: "hatch-5",
      nr: 5,
      img: "./img/5.jpg",
      text:
        "STRESSED is just DESSERTS spelled backward.",
      open: false
    },
    {
      id: "hatch-6",
      nr: 6,
      img: "./img/6.jpg",
      text:
        '«Bursdager er bra for deg. Statistikk viser at de som har flest, lever også lengst.»',
      open: false
    },
    {
      id: "hatch-7",
      nr: 7,
      img: "./img/7.jpg",
      text:
        "What nationality is Santa Claus? North Polish",
      open: false
    },
    {
      id: "hatch-8",
      nr: 8,
      img: "./img/8.jpg",
      text:
        "What kind of motorbike does Santa ride? A Holly Davidson!",
      open: false
    },
    {
      id: "hatch-9",
      nr: 9,
      img: "./img/9.jpg",
      text:
        "Who is never hungry at Christmas? The turkey - he's always stuffed!",
      open: false
    },
    {
      id: "hatch-10",
      nr: 10,
      img: "./img/10.jpg",
      text:
        "When you stop believing in Santa Claus is when you start getting clothes for Christmas!",
      open: false
    },
    {
      id: "hatch-11",
      nr: 11,
      img: "./img/11.jpg",
      text:
        'Han som aldri har lært å følge ordre kan aldri bli en god leder. - Aristotles',
      open: false
    },
    {
      id: "hatch-12",
      nr: 12,
      img: "./img/12.jpg",
      text:
        'Når alle tenker likt er det ingen som tenker. - Walter Lippman',
      open: false
    },
    {
      id: "hatch-13",
      nr: 13,
      img: "./img/13.jpg",
      text:
        "Which of Santa's reindeers needs to mind his manners the most? 'Rude'olph",
      open: false
    },
    {
      id: "hatch-14",
      nr: 14,
      img: "./img/14.jpg",
      text:
        "Folk bryr seg ikke om hvor mye du vet før de vet hvor mye du bryr deg.- Mike McNight",
      open: false
    },
    {
      id: "hatch-15",
      nr: 15,
      img: "./img/15.jpg",
      text:
        "What do elves learn in school? The Elf-abet!",
      open: false
    },
    {
      id: "hatch-16",
      nr: 16,
      img: "./img/16.jpg",
      text:
        "How do you scare a snowman? You get a hairdryer!",
      open: false
    },
    {
      id: "hatch-17",
      nr: 17,
      img: "./img/17.jpg",
      text:
        "Jeg kommer alltid for sent på kontoret, men jeg gjør det godt igjen ved å gå tidlig.",
      open: false
    },
    {
      id: "hatch-18",
      nr: 18,
      img: "./img/18.jpg",
      text:
        "Dette er mine prinsipper, hvis du ikke liker dem så har jeg andre.- Groucho Marx",
      open: false
    },
    {
      id: "hatch-19",
      nr: 19,
      img: "./img/19.jpg",
      text:
        "Why are iPhone chargers not called Apple Juice?",
      open: false
    },
    {
      id: "hatch-20",
      nr: 20,
      img: "./img/20.jpg",
      text:
        "Santa's elves are just a bunch of subordinate Clauses.",
      open: false
    },
    {
      id: "hatch-21",
      nr: 21,
      img: "./img/21.jpg",
      text:
        "Debugging: Removing the needles from the haystack.",
      open: false
    },
    {
      id: "hatch-22",
      nr: 22,
      img: "./img/22.jpg",
      text:
        "Why did the PowerPoint Presentation cross the road? A. To get to the other slide.",
      open: false
    },
    {
      id: "hatch-23",
      nr: 23,
      img: "./img/23.jpg",
      text:
        "What does Santa suffer from if he gets stuck in a chimney? Claustrophobia!",
      open: false
    },
    {
      id: "hatch-24",
      nr: 24,
      img: "./img/24.jpg",
      text:
        "What's red and white, red and white, red and white? Sant rolling off your roof.",
      open: false
    },
  ];
  
  export const createCalendar = () => shuffle(hatchArray);