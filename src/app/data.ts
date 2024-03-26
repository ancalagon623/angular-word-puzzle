import { PuzzleOptions, RawPuzzleData } from "./models/puzzle"

export const rawPuzzles: RawPuzzleData[] = [ 
  {
    id: PuzzleOptions.BBTheRoad,
    tag: 'bb-the-road',
    solution: 'The road goes ever on and on \nDown from the door where it began. \nNow far ahead the road has gone \nAnd I must follow, if I can...',
    author: 'J. R. R. Tolkien',
    complexity: 5,
    obscurity: 1
  },
  {
    id: PuzzleOptions.JKJourney,
    tag: 'jk-journey',
    solution: 'The journey is its own reward.',
    author: 'Justin Kan',
    complexity: 1,
    obscurity: 2
  },
  {
    id: PuzzleOptions.GKCCHeese,
    tag: 'gkc-cheese',
    solution: 'The poets have been mysteriously silent on the subject of cheese.',
    author: 'G. K. Chesterton',
    complexity: 3,
    obscurity: 4
  },
  {
    id: PuzzleOptions.GKCTraveler,
    tag: 'gkc-traveler',
    solution: 'The traveler sees what he sees, the tourist sees what he has come to see.',
    author: 'G. K. Chesterton',
    complexity: 3,
    obscurity: 5
  }
];

