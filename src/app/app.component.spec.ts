import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let apiServiceSpy: any;

  beforeEach(async () => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['fetchRepositoriesWithTopics']);

    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch repositories with topics', () => {
    const mockRepos = [
      { name: 'Repo1', description: 'Description1', topics: ['topic1', 'topic2'] },
      { name: 'Repo2', description: 'Description2', topics: ['topic3', 'topic4'] }
    ];
    
    apiServiceSpy.fetchRepositoriesWithTopics.and.returnValue(of(mockRepos));
    component.fetchRepositories();
    expect(component.repositories.length).toBe(2);
  });
});
