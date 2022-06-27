import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerDataService {
  private _playerName: string = '';
  private _playerToken: string = '';

  public readData() {
    return { name: this._playerName, token: this._playerToken };
  }

  public getUserName() {
    return this._playerName;
  }

  public setData(name: string, token: string) {
    this._playerName = name;
    this._playerToken = token;
  }
}
