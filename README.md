# Fyle Frontend Challenge

## Who is this for?

This challenge is designed for candidates who wish to intern at Fyle and join our engineering team. We expect a minimum commitment of 6 months for the internship.

## Why work at Fyle?

Fyle is a rapidly growing Expense Management SaaS product. Our engineering team is currently about 40 members strong.

We pride ourselves on our transparency. Get a glimpse of what it's like to work here on our [careers page](https://careers.fylehq.com). Also, have a look at our [Glassdoor reviews](https://www.glassdoor.co.in/Reviews/Fyle-Reviews-E1723235.htm), and read stories from our teammates [here](https://stories.fylehq.com).

## Challenge Outline

This challenge involves implementing an application using the GitHub API.

The necessary services have already been implemented in the ApiService.

Details of the challenge can be found [here](https://fyleuniverse.notion.site/fyleuniverse/Fyle-Frontend-development-challenge-cb5085e5e0864e769e7b98c694400aaa).

__Note:__ This challenge is based on Angular. Our work primarily involves Angular frameworks, and post-internship, we would expect you to continue working with Angular.

## What Happens Next?

You will receive a response from us within 48 hours via email after submitting your challenge.

## Installation

1. Fork this repository to your GitHub account.
2. Clone the forked repository to your local machine.

### Install Requirements

- Install the Angular CLI. See [Angular CLI Overview and Command Reference](https://angular.io/cli) for installation instructions.
- Run `npm install` within this repository to install dependencies.

## Development Server

Run `ng serve` for a development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

This project contains unit tests for both components and services with the aim of reaching 100% code coverage. The tests can be found in the `.spec.ts` files throughout the project.

To check the code coverage, you can run `ng test --code-coverage`. This will create a coverage report in the `coverage/` directory of the project. You can open `index.html` within that directory in a browser to view the coverage results.

## Further Help

To get more help on Angular, check out the [Angular Documentation](https://angular.io/guide/styleguide). For styling, we strictly use [Tailwind CSS](https://tailwindcss.com/docs/installation).

## Additional Features

This project includes a feature for displaying repository information using the GitHub API. It supports server-side pagination with a default display of 10 repositories per page, and allows users to select up to 100 repositories per page. While API calls are in progress, a skeleton loader is shown to enhance the user experience.

### Skeleton Loader

The skeleton loader is implemented using the `ngx-skeleton-loader` package. It provides a visual cue that content is loading, which improves the overall user experience during data fetching operations.

### Error Handling

The application is designed to handle API rate limits gracefully. When the GitHub API rate limit is exceeded, it displays a user-friendly error message informing the user to try again later.

### Running the Application

After cloning the repository and installing the dependencies, you can run the application using the `ng serve` command. The application will be available at `http://localhost:4200/`.

To see the skeleton loader in action, navigate to the portion of the application that performs API calls. The loader will display automatically while waiting for the API response.
