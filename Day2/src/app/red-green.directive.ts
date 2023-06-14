import { Directive, ElementRef, Renderer2,Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRedGreen]'
})
export class RedGreenDirective {
  @HostBinding('style.color') color='orange';

  @HostListener('mouseover') mouseover() { {
    this.color='yellow';
  }
  }

  @HostListener('mouseout') mouseout() { {
    this.color='black';
  }
  }

@Input()
  set appRedGreen(value: boolean) {
    console.log('RedGreenDirective appRedGreen');
    console.log(value);
    if (value) {
      this.el.nativeElement.style.color = 'red';
      this.el.nativeElement.textContent = 'reddd22';
    } else {
      this.el.nativeElement.style.color = 'green';

      this.el.nativeElement.textContent = 'Green22';
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2  ) {
//renderer.setStyle(el.nativeElement, 'color', 'red');

    console.log('RedGreenDirective constructor');
    console.log(this.el);

   // this.el.nativeElement.style.color = 'green';
  }

ngOnInit() {
    //console.log('RedGreenDirective ngOnInit');
    //console.log(this.el);
    //this.el.nativeElement.style.color = 'green';
  }

}
