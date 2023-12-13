(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[59388],{59388:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiContextWithImplicit} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-input-slider-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputSliderExample5 {\n    readonly max = 100;\n    readonly min = 0;\n\n    readonly smallControl = new FormControl(this.min);\n    readonly bigControl = new FormControl(this.max);\n\n    readonly customLabel = ({\n        $implicit,\n    }: TuiContextWithImplicit<number>): number | string => {\n        switch ($implicit) {\n            case this.max:\n                // eslint-disable-next-line @typescript-eslint/quotes\n                return \"Digits can't describe my love!\";\n            case this.min:\n                return 'Just a label for min value';\n            case (this.max - this.min) / 2:\n                return 'Middle';\n            default:\n                return $implicit;\n        }\n    };\n}\n"}}]);