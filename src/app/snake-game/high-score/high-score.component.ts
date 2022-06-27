import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { SnakesApiService } from 'src/app/api/snake-api.service';
import { SnakeScores } from 'src/app/models/snake-scores';

@Component({
  selector: 'app-high-score',
  templateUrl: './high-score.component.html',
  styleUrls: ['./high-score.component.scss']
})
export class HighScoreComponent implements OnInit {
public highscores!: SnakeScores[];

  constructor(
    private snakeService: SnakesApiService
  ) { }

  ngOnInit(): void {
    this.snakeService.getScores().pipe(
      map((data) => {
        this.highscores = data
          .sort((a, b) => b.score - a.score)
          .slice(0, 10);
      })
    )
    .subscribe()
    
  }

}
