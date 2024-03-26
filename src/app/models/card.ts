import { Puzzle } from "./puzzle";

export class Card {
  static alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  private _cardId: number;
  private _word: string;
  private _parent: Puzzle | undefined;
  // where in the puzzle does this card currently sit
  private _orderIndex = -1;

  constructor (word: string, parentPuzzle?: Puzzle) {
    this._word = word;
    // create a unique id based on the characters in the word
    this._cardId = Math.random() * 1000 * word.split('').reduce((acc, ch) => acc += Card.alphabet.indexOf(ch.toLowerCase()) + 1, 0);
    this._parent = parentPuzzle;
  }

  get id () {
    // set on creation of the card and is unchangeable. Specifies the location of the word in the reconstructed solution phrase
    return this._cardId;
  }

  get word () {
    return this._word;
  }

  set word (w: string) {
    this._word = w;
  }

  get location () {
    return this._orderIndex || -1;
  }

  set location (l: number) {
    if (l >= 0) this._orderIndex = l;
    else this._orderIndex = -1;
  }

  get parentPuzzle (): Puzzle | undefined {
    return this._parent;
  }

  set parentPuzzle (puzz: Puzzle) {
    this._parent = puzz;
  }
}