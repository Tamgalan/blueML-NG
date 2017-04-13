import { Component, OnInit, Input, OnDestroy }   from '@angular/core';

import { FormDataService }                       from '../data/formData.service';

import { Dataset } from './dataset';

import { User } from './user.interface';

const DATASETS: Dataset[] = [
    {id: 0, name:'MICHIGAN', description: '273 users', selected: false },
    {id: 1, name:'BERKELEY', description: '100 patients',selected: false},
    {id: 2, name:'UCI', description: '1000 patients',selected: false},
    {id: 3, name:'STANDFORD', description: '2000 million patients',selected: false}
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
    title = 'Please select a training data  set';
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

    /*
    selectedDataset:  Dataset[0];
    selectedDataset2: Dataset[1];
    selectedDataset3: Dataset[2];
    selectedDataset4: Dataset[3];

    onSelect(): void {
        DATASETS[0].selected = true;
        this.selectedDataset = DATASETS[0];

        console.log("checked",DATASETS[0].name)

    }

    onSelect1(): void {
        DATASETS[1].selected = true;
        this.selectedDataset2 = DATASETS[1];
        console.log("checked",DATASETS[1].name)

    }

    onSelect2(): void {
        DATASETS[2].selected = true;
        this.selectedDataset2 = DATASETS[2];
        console.log("checked",DATASETS[2].name)

    }

    onSelect3(): void {
        DATASETS[3].selected = true;
        this.selectedDataset2 = DATASETS[3];
        console.log("checked",DATASETS[3].name)

    }
    */



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