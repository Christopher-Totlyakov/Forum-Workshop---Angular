import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Api } from '../../api';
import { Theme } from '../../types/theme';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-theme',
  imports: [],
  templateUrl: './current-theme.html',
  styleUrl: './current-theme.css'
})
export class CurrentTheme implements OnInit {

  theme = {} as Theme;

  constructor(private api: Api, private activatedRoute: ActivatedRoute, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        const themeId = params['id'];
        this.api.getThemeById(themeId).subscribe(theme => {
          this.theme = theme;
          console.log(this.theme);
          this.cdr.detectChanges();
      })
    })
  }


}
