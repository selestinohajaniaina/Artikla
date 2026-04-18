import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitleArticleCardComponent } from './litle-article-card.component';

describe('LitleArticleCardComponent', () => {
  let component: LitleArticleCardComponent;
  let fixture: ComponentFixture<LitleArticleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LitleArticleCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LitleArticleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
