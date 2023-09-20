import { rawPuzzles } from "./data";

export enum PuzzleOptions {
  BBTheRoad,
  JKJourney,
  GKCCHeese,
  GKCTraveler
}

interface rawPuzzle {
  id: PuzzleOptions,
  tag: string,
  solution: string
}

export class Puzzle {
  id: number;
  private _fullSolution: string;
  private _puzzlePieces: string[];

  constructor (puzz: rawPuzzle) {
    this.id = puzz.id;
    this._fullSolution = puzz.solution;
    this._puzzlePieces = puzz.solution.trim().split(' ');
  }

  get fullSolution () {
    return this._fullSolution;
  }

  set fullSolution (value: string) {
    this._fullSolution = value;
    this._puzzlePieces = value.trim().split(' ');
  }


}