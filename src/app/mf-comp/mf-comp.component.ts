import { Component } from '@angular/core';
import { PuzzleService } from '../services/puzzle.service';
import { Puzzle } from '../models/puzzle';

@Component({
  selector: 'app-mf-comp',
  templateUrl: './mf-comp.component.html',
  styleUrls: ['./mf-comp.component.css']
})
export class MfCompComponent {
  puzzles: Puzzle[];

  constructor (puzzleService: PuzzleService) {
    this.puzzles = puzzleService.getAllPuzzles()
  }

}
