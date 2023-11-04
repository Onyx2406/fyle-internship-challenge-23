import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  githubUsername: string = '';
  repositories: any = [];
  currentPage: number = 1;
  repositoriesPerPage: number = 10;
  isLoading: boolean = false;  // <-- Add this line to manage the loading state

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  fetchRepositories(): void {
    this.isLoading = true;  // <-- Start loading

    this.apiService.fetchRepositoriesWithTopics(this.githubUsername, this.currentPage, this.repositoriesPerPage)
      .subscribe(
        reposWithTopics => {
          this.repositories = reposWithTopics;
          this.isLoading = false;  // <-- Stop loading
        },
        error => {
          alert(error.message);
          this.isLoading = false;  // <-- Stop loading on error too
        }
      );
  }
}
