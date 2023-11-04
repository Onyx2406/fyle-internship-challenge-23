import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch repositories with topics', () => {
    service.fetchRepositoriesWithTopics('Onyx2406').subscribe(repos => {
      expect(repos.length).toBe(2);
      expect(repos[0].topics).toEqual(['topic1', 'topic2']);
      expect(repos[1].topics).toEqual(['topic3', 'topic4']);
    });

    const reqRepos = httpMock.expectOne(`https://api.github.com/users/Onyx2406/repos?page=1&per_page=10`);
    reqRepos.flush([
      { 
        name: 'Repo1', 
        description: 'Description1', 
        owner: { login: 'Onyx2406' },  // Ensure 'login' is provided inside 'owner'
        topics: ['topic1', 'topic2'] 
      },
      { 
        name: 'Repo2', 
        description: 'Description2', 
        owner: { login: 'Onyx2406' },  // Ensure 'login' is provided inside 'owner'
        topics: ['topic3', 'topic4'] 
      }
    ]);

    const reqRepo1Topics = httpMock.expectOne(`https://api.github.com/repos/Onyx2406/Repo1/topics`);
    reqRepo1Topics.flush({ names: ['topic1', 'topic2'] });

    const reqRepo2Topics = httpMock.expectOne(`https://api.github.com/repos/Onyx2406/Repo2/topics`);
    reqRepo2Topics.flush({ names: ['topic3', 'topic4'] });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
