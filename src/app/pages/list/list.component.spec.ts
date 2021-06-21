import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListService } from 'src/app/services/list.service';
import { of } from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let listService: ListService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    listService = TestBed.inject(ListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  /**
   * 
     * @returs {*}
     * @membersof ConexionComponent
     * @author Daniel Rodriguez Cendales
     */
   it('should call getTechnologyList()', (() => {
    // Arrange
    const response: any = [];
    spyOn(listService, 'getTechnologyList').and.returnValue(of(response));
    // Act
    component.handleTechnologiesData();
    fixture.detectChanges();
    // Assert
    expect(component.technologies).toEqual(response);
   }));
});
