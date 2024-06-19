import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe, TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiButton, TuiLink, TuiScrollbar, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadgeDirective} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiSurface,
        TuiThumbnailCard,
        TuiAvatar,
        TuiAmountPipe,
        TuiBadgeDirective,
        TuiButton,
        TuiLink,
        TuiCell,
        TuiCardLarge,
        CommonModule,
        TuiScrollbar,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less', './surface.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly reviews = [
        {
            name: 'Alex Inkin',
            time: '2 days ago',
            body: 'It is an absolute blast!',
        },
        {
            name: 'Alex Inkin',
            time: '3 days ago',
            body: 'I am starting to kind of enjoy this library.',
        },
        {
            name: 'Alex Inkin',
            time: '4 days ago',
            body: 'This library seems interesting but I hesitate refactoring our entire codebase...',
        },
    ];
}
