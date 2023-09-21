import { Injectable } from '@angular/core';
import { rawPuzzles } from '../data';
import { Puzzle } from '../models/puzzle';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {
  getAllPuzzles () {
    const returnArray: Puzzle[] = [];
    for (let pzix = 0; pzix < rawPuzzles.length; pzix++) {
      returnArray.push(new Puzzle(rawPuzzles[pzix]));
    }
    return returnArray;
  }
}
