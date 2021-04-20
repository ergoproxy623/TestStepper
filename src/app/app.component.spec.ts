import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import {MockStore} from "@ngrx/store/testing";
import {StateObservable, Store, StoreModule} from "@ngrx/store";
import {BehaviorSubject, Subject} from "rxjs";
import {ReducerConfiguration, ReducerMap} from "./storage/reducer-configuration";

describe("AppComponent", () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(ReducerMap, ReducerConfiguration),
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'client-v2'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toContain("client-v2");
  });

});
