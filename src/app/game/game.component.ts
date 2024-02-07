import { Component } from '@angular/core';
import { PuzzleService } from '../services/puzzle.service';
import { Puzzle } from '../models/puzzle';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  puzzles: Puzzle[];
  puzzleInProgress: Puzzle | undefined;
  activeCard: string = '';

  constructor (puzzleService: PuzzleService) {
    this.puzzles = puzzleService.getAllPuzzles()
  }

  loadPuzzleGame (puzzle: Puzzle, event: any) {
    this.puzzleInProgress = puzzle;
    this.activeCard = this.puzzleInProgress.puzzlePieces[0]
  }

}
