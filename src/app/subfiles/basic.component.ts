import { Component } from '@angular/core';

@Component({
    selector: 'basic-root',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.css']
})
export class BasicComponent {
    title = 'Course1AngularAnimations';
    switchstate = 'original';
    setState(state:any) {
        this.switchstate = state;
        console.log(state);
    }
}
