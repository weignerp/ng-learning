import {CurrencyPipe} from '../pipes/currency.pipe';
import {Directive, HostListener, ElementRef, OnInit} from '@angular/core';

@Directive({selector: '[CurrencyFormatter]'})
export class CurrencyFormatterDirective implements OnInit {

    private el: HTMLInputElement;

    constructor(
        private elementRef: ElementRef,
        private currencyPipe: CurrencyPipe
    ) {
        this.el = this.elementRef.nativeElement;
    }

    ngOnInit() {
        this.el.value = this.currencyPipe.transform(this.el.value);
    }

    @HostListener('focus', ['$event.target.value'])
    onFocus(value) {
        console.log('parsing value: ' + value);
        console.log(`Results are: ${this.currencyPipe.parse(value)} `);
        this.el.value = this.currencyPipe.parse(value); // opossite of transform
    }

    @HostListener('blur', ['$event.target.value'])
    onBlur(value) {
        this.el.value = this.currencyPipe.transform(value);
    }

}
