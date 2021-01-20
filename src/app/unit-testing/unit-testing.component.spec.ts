import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { UnitTestingComponent } from './unit-testing.component';
// import { UnitTestingService } from './unit-testing.service';
import * as fromunitTestingService from './unit-testing.service';

describe('UnitTestingComponent', () => {
  let component: UnitTestingComponent;
  let fixture: ComponentFixture<UnitTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitTestingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain h element............................................', () => {
    // expect(component).toBeTruthy();
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    let title = component.title;
    let wrongText = "unit-testing workssssssss!";
    // expect(compiled.querySelector("p").textContent).toContain(wrongText);
    expect(compiled.querySelector("p").textContent).toContain(title);
  });

  it('not async service method ...................... ', () => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    let unitTestService = fixture.debugElement.injector.get(fromunitTestingService.UnitTestingService);
    let spy = spyOn(unitTestService, "getDetails").and.returnValue(Promise.resolve(fromunitTestingService.resolveText));
    expect(component.titleFromAsyncService).toBe(undefined);
    // expect(component.titleFromAsyncService).toBe(fromunitTestingService.resolveText);
  });

  it('async service method firs setup ...................... ', waitForAsync(() => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    let unitTestService = fixture.debugElement.injector.get(fromunitTestingService.UnitTestingService);
    let spy = spyOn(unitTestService, "getDetails").and.returnValue(Promise.resolve(fromunitTestingService.resolveText));
    fixture.whenStable().then(() => {
      expect(component.titleFromAsyncService).toBe(undefined);

    })
    // expect(component.titleFromAsyncService).toBe(fromunitTestingService.resolveText);
  }));

  it('asynccccccccc service method second setup ...................... ', fakeAsync(() => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    let unitTestService = fixture.debugElement.injector.get(fromunitTestingService.UnitTestingService);
    let spy = spyOn(unitTestService, "getDetails").and.returnValue(Promise.resolve(fromunitTestingService.resolveText));
    tick();
    expect(component.titleFromAsyncService).toBe(fromunitTestingService.resolveText);
  }));


});
