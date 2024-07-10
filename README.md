# MedicalDepartures

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.7.

## Overview

This is a single page application that I built to demonstrate my skill in Angular, CSS, TypeScript and RxJS. It makes use of the [JSON Placeholder API](https://jsonplaceholder.typicode.com/guide/) as the mock API for getting, creating, updating and deleting posts.

I wrote the CSS for the designs myself and used the `ngx-toastr` library along with Angular Animations for the popup toasts. I used Angular HTTP to make the calls to the API. Also, to fully demonstrate my proficiency with Angular Forms, I used the template-driven `NgForm` for the Create Post form and the reactive form for the Update Post form.

Although, this is a simple application built for demonstration purposes, there are a few improvements that can be made.

1. Adding a details page to show more details on each item, including the author information.
2. Adding a filter/search feature to enable users to filter through the long list of items.
3. Adding pagination or infinite scroll to limit the number of items loaded at a time.
4. Writing unit tests to properly test each component used in the application.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
