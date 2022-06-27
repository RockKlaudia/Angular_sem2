import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { PlayerDataService } from '../player-data.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss'],
})
export class SnakeGameComponent implements OnInit {
  public changePage = true;
  public counter: number = 0;
  public gameStatus: string = 'Starting from...';
  public timerHours: number = 0;
  public timerMinutes: number = 0;
  public timerSeconds: number = 0;
  public color!: string;
  public playerName!: string;

  constructor(
    private _playerdata: PlayerDataService,
    private _location: Location,
    private _route: ActivatedRoute
  ) {
    this.color = this._route.snapshot.params['colors'];
  }

  ngOnInit(): void {
    this.playerName = this._playerdata.getUserName();
  }

  public returnMain() {
    this._location.back();
  }

  public timerGo() {
    setInterval(() => {
      if (this.timerSeconds < 59) {
        this.timerSeconds++;
      } else {
        this.timerSeconds = 0;
        this.timerMinutes++;
        if (this.timerMinutes == 59) {
          this.timerMinutes = 0;
          this.timerHours++;
        }
      }
    }, 1000);
  }

  public onGrow() {
    this.counter += 1;
  }
  public onGameOver() {
    alert('Game over');
    this.gameStatus = 'Game over';
  }
  public onReset() {
    this.counter = 0;
    this.gameStatus = '';
  }
  public onPause() {
    this.gameStatus = 'Paused';
  }
  public onPlay() {
    this.gameStatus = 'Playing';
  }
}
