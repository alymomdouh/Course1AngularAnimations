import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'animbox',
    templateUrl: './animbox.component.html',
    styleUrls: [' '],
    animations: [
        trigger('changeState', [
            state('original', style({
                backgroundColor: '#47748f',
                transform: 'scale(1)'
            })),
            state('basic', style({
                backgroundColor: '#440000',
                transform: 'scale(2)'
            })),
            transition('* => basic', animate('800ms')),
            transition('* => original', animate('200ms'))
        ])
    ]
})
export class AnimboxComponent {
    title = 'Course1AngularAnimations';
    @Input() currentState: string = '';
}
