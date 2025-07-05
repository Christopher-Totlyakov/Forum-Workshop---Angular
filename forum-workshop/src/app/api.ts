import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor(private http: HttpClient) { }

  getThemes(){
    const {apiURL} = environment;
    return this.http.get<Theme[]>(`${apiURL}/themes`);
  }

  createTheme(themeName: string, postText: string) {
    const { apiURL } = environment;
    return this.http.post<Theme>(`${apiURL}/themes`, {themeName, postText});
  }

  getPosts(limit?: number){
    const { apiURL } = environment;

    let url = `${apiURL}/posts`;
    if (limit) {
      url += `?limit=${limit}`;
    }
    return this.http.get<Post[]>(url)
  }
}
