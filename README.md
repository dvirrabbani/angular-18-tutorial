# Angular18Tutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.10.

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
ng g c interface  // genrate a tpye  
ng g service --skip-tests
```

## Input decorator

Let the component be customize, import it from '@angular/core'
@input must be initialized
The "!" sybmol after the property name,
tells Typescript complier that the value of this property won't be null or undefined
like @input data:Data;

## Service 

Typescript class in angular
@injectable decorator means we can use the service class
In the dependecy injection system, meaning other parts of the application
can request an instace of this service 
- fetch request - define the return value and provide default return value
```
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  // component.ts
   constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }
```

# providedIn:'root'
the property of the injecatable decorator metadata 
tells angular where in the application this service can be injected
'root' - means we can the service can be used throught the application  


## Routing 

- routerLink directive - In order to use "routerLink" directive 
we must import { RouterModule } from '@angular/router'; 

- ActivateRoute - is a reference to the current route in our application, we can access for vital information like params and etc' 

## Form 
- ReactiveFormsModule 
- FormGroup - to bind a form to the form group instance
     ```
     <form[formGroup]="applyForm">
        <input formControlName="name" placeholder="Name">
        ... code
     </form>
     ```
- FormControl - always pass default value 
- submiiting - provide a default value for all controls
- ?? - if the value on left side is null or undefined get the value on the right side 

```
 <form [formGroup]="applyForm" (submit)="submitApplication()">
 submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
```

## Json Server 
```
npm install -g json-server
npx json-server db.json
json-server --watch db.json
```

## Terms
The term "listing" refers to a property available for rent or sale and is used to denote elements related to that property.