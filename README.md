# Angular18Tutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.10.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Commands 
```
ng serve -o // --open The --open (or just -o) option automatically opens your browser to http://localhost:4200/ to view the generated application.
```

## Angular Component Metadata 
- selector: to describe how Angular refers to the component in templates.
- standalone: to describe whether the component requires a NgModule.
- imports: to describe the component's dependencies(For import Components as dependencies).
- template: to describe the component's HTML markup and layout.
- styleUrls: to list the URLs of the CSS files that the component uses in an array.

## CLI Genrate Commands
```
ng g c component --standalone --inline-template 
```