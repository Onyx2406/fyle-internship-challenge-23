import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  getRepos(githubUsername: string, page: number = 1, per_page: number = 10) {
    return this.httpClient.get<any[]>(`https://api.github.com/users/${githubUsername}/repos?page=${page}&per_page=${per_page}`);
  }

  getRepoTopics(owner: string, repo: string) {
    return this.httpClient.get<{ names: string[] }>(`https://api.github.com/repos/${owner}/${repo}/topics`, {
      headers: {
        'Accept': 'application/vnd.github+json'
      }
    }).pipe(map(response => response.names));
  }

  fetchRepositoriesWithTopics(githubUsername: string, page: number = 1, per_page: number = 10) {
    return this.getRepos(githubUsername, page, per_page).pipe(
      mergeMap((repos: any[]) => {
        const requests = repos.map(repo => 
          this.getRepoTopics(repo.owner.login, repo.name).pipe(
            map(topics => ({
              ...repo,
              topics
            }))
          )
        );
        return forkJoin(requests);
      }),
      catchError(error => {
        if (error.status === 403 && error.error.message.includes("API rate limit exceeded")) {
          throw new Error("You have reached the GitHub API rate limit. Please try again later.");
        }
        throw error;
      })
    );
  }
}
