export enum PuzzleOptions {
  BBTheRoad,
  JKJourney,
  GKCCHeese,
  GKCTraveler
}

export interface RawPuzzleData {
  id: PuzzleOptions;
  tag: string;
  solution: string;
  complexity: number;
  obscurity: number;
}

export class Puzzle {
  id: number;
  private _fullSolution: string;
  private _puzzlePieces: string[] = [];
  private _fillers = ['Nope.', 'Nothin\'.', 'So close!', 'Close, but no cigar', 'Fry, fry a hen', 'Missed it by *that* much']

  complexity: number;
  obscurity: number;

  constructor (puzz: RawPuzzleData) {
    this.id = puzz.id;
    this._fullSolution = puzz.solution;
    this.complexity = puzz.complexity;
    this.obscurity = puzz.obscurity;
    this.generatePuzzleFromSolution();
  }

  generatePuzzleFromSolution () {
    const src = this._fullSolution;

    const solutionElements = src.trim().split(/\s\s|\s/);

    const unshuffledPuzzlePieces = solutionElements.concat(this._fillers);

    this.puzzlePieces = this.shuffle(unshuffledPuzzlePieces);

    return this.puzzlePieces;
  }

  shuffle (pieces: string[]) {
    const shuffled = Array(pieces.length).fill('');
    console.log(shuffled);
    console.log(pieces);
    return pieces;
  }

  get fullSolution () {
    return this._fullSolution;
  }

  set fullSolution (value: string) {
    this._fullSolution = value;
    this.generatePuzzleFromSolution();
  }

  get puzzlePieces () {
    return this._puzzlePieces;
  }

  set puzzlePieces (list: string[]) {
    this._puzzlePieces = list;
  }

}