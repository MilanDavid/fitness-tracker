import { transition, trigger, query, style, animate, group } from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('Home <=> Day', [
            query(':enter, :leave',
                style({ opacity: 1, position: 'fixed' })),
            group([
                query(':enter', [
                    style({ opacity: 0 }),
                    animate('0.3s ease',
                        style({ opacity: 1 }))
                ]),
                query(':leave', [
                    style({ opacity: 1 }),
                    animate('0.3s ease',
                        style({ opacity: 0 }))
                ]),
            ])
        ]),
    ]);