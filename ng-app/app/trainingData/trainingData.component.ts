import { Component, OnInit, Input, OnDestroy }   from '@angular/core';

import { FormDataService }                       from '../data/formData.service';

import { Dataset } from './dataset';

import { User } from './user.interface';

const DATASETS: Dataset[] = [
    {id: 0, name:'MICHIGAN', description: '273 users' },
    {id: 1, name:'BERKELEY', description: '100 patients'},
    {id: 2, name:'UCI', description: '1000 patients'},
    {id: 3, name:'STANDFOR', description: '2000 million patients'},
    {id: 4, name:'UCLA', description: '10 million patients'}
];


@Component ({
    selector:     'mt-wizard-training',
    styles: [`
	h1 {
	  color: yellow;
	}
	`]
    ,templateUrl: 'app/trainingData/trainingData.component.html'
})

export class trainingDataComponent implements OnInit, OnDestroy {
    title = 'Please select a training data set';
    datasets = DATASETS;

    public user: User;

    public genders = [
        { value: 'F', display: 'Female' },
        { value: 'M', display: 'Male' }
    ];

    public topics = [
        { value: 'game', display: 'Gaming' },
        { value: 'tech', display: 'Technology' },
        { value: 'life', display: 'Lifestyle' },
    ];

    public toggles = [
        { value: 'toggled', display: 'Toggled' },
        { value: 'untoggled', display: 'UnToggled' },
    ];


    selectedDataset: Dataset;

    onSelect(dataset: Dataset): void {
        this.selectedDataset = dataset;
    }


    @Input() formData;
    
    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        // this.formData = this.formDataService.getData();
        // console.log('Training data feature loaded!');
        this.user = {
            name: '',
            gender: this.genders[0].value,
            role: null,
            isActive: false,
            toggle: this.toggles[1].value,
            topics: [this.topics[1].value]
        }
    }

    ngOnDestroy() {
        this.formDataService.setData(this.formData);
    }
}