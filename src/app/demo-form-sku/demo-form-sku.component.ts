import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators, FormControl} from '@angular/forms';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {IPartialLocaleValues, RecursivePartial, SuiLocalizationService} from 'ng2-semantic-ui';
import * as moment from 'moment'
import 'moment/locale/cs';
import cs from './locale/cs';


function NumberValidator(control: FormControl): {[s: string]: boolean} {
    console.log('Value' + control.value);
    console.log(`Vysledek isNaN = ${!isNaN(control.value)}`);

    if(!isNaN(control.value)) {
        return {invalidValue: true};
    }
}

const now = new Date();

@Component({
    selector: 'app-demo-form-sku',
    templateUrl: './demo-form-sku.component.html',
    styles: []
})
export class DemoFormSkuComponent implements OnInit {
    myForm: FormGroup;
    name: string;
    value = 25;
    myDate: Number;

    mDate: any = moment().format('LLLL');

    model: NgbDateStruct;
    date: {year: number, month: number};

    constructor(public localizationService: SuiLocalizationService, fb: FormBuilder) {
        localizationService.load('cs', cs);
        // Set the current language to Spanish.
        localizationService.setLanguage('cs');
        this.myForm = fb.group({
            'sku': ['', Validators.maxLength(5)],
            'skuName': ['', Validators.maxLength(5)],
            'value': ['', Validators.compose([
                Validators.required, NumberValidator])]
        })
    }

    selectToday() {
        this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    }

    ngOnInit() {
        moment.locale('cs');
    }

    private changeModel(ev) {
        this.value = ev;
    }

    onSubmit(form: any): void {
        console.log('you submitted value:', form);
    }

}
