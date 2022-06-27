import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { PlayerDataService } from '../player-data.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss'],
})
export class PlayerFormComponent implements OnInit {
  public playerName: string = '';
  public playerToken: string = '';

  public form = new FormGroup({
    playerName: new FormControl(this.playerName, [
      Validators.required,
      Validators.minLength(3),
    ]),
    playerToken: new FormControl(this.playerToken, [
      Validators.required,
      Validators.maxLength(4),
      Validators.minLength(4),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ]),
  });
  constructor(
    private _playerdata: PlayerDataService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  onClick(colors: string) {
    this._playerdata.setData(
      this.form.controls['playerName'].value,
      this.form.controls['playerToken'].value
    );
    this._router.navigate(['/gamepage/', colors]);
  }
}
