## Angular CLI Info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Dummy Backend

In `src/environments/environment.ts` the mockApi can be disabled to make real HTTP requests. API request will go to localhost:8080 (see `proxy.conf.json`).

Run `npm run dummy-backend` to start the dummy backend server on port 8080. This mainly exists to test the Vert.x SockJS event bus bridge client.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Initial setup info (for new projects of this kind)

```
> ng new same-webui --prefix same --view-encapsulation ShadowDom --routing --style css
```

Add VS Code Tasks and Launch files to `.vscode` from https://github.com/tonysneed/vscode-ng 

Add @angular/language-service package to devDependencies (now default with `ng new`)
