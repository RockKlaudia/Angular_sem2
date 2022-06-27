import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';
import { NgxSnakeModule } from 'ngx-snake';
import { RouterModule } from '@angular/router';
import { HighScoreComponent } from './snake-game/high-score/high-score.component';
import { SnakesApiService } from './api/snake-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlayerFormComponent,
    SnakeGameComponent,
    HighScoreComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSnakeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'intropage', component: PlayerFormComponent },
      { path: 'gamepage/:colors', component: SnakeGameComponent },
      { path: '**', redirectTo: 'intropage' },
    ]),
  ],
  providers: [SnakesApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
