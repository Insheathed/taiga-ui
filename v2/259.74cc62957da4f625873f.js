(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{YuUP:function(n,i,r){"use strict";r.r(i),i.default="@import '../taiga-ui-local';\n\n.tui-group {\n    .createStackingContext();\n    display: flex;\n\n    & > * {\n        flex: 1 1 0;\n        min-width: 0;\n\n        &:nth-child(n) {\n            border-radius: 0;\n        }\n\n        &:not(:last-child) {\n            margin-right: (@space / 2);\n        }\n    }\n\n    /* stylelint-disable */\n    &_collapsed {\n        & > * {\n            z-index: 1;\n\n            &:not(:last-child) {\n                margin-right: -1px;\n            }\n\n            &._readonly,\n            &._disabled,\n            &._readonly:hover,\n            &._disabled:hover {\n                z-index: 0;\n            }\n\n            &:hover,\n            &._hovered,\n            &._pressed {\n                z-index: 3;\n            }\n\n            &._invalid {\n                z-index: 2;\n\n                &:hover,\n                &._hovered,\n                &._pressed {\n                    z-index: 4;\n                }\n            }\n\n            // @bad TODO: remove \"touched\" and \"focus-visible\"\n            &._hosted_dropdown_focused,\n            &._focus-visible,\n            &._focused.ng-touched,\n            &._focused.ng-untouched {\n                z-index: 5;\n            }\n\n            &._active,\n            &[data-appearance='whiteblock-active'] {\n                z-index: 6;\n            }\n\n            &._focus-visible {\n                &._focused,\n                &._active,\n                &[data-appearance='whiteblock-active'] {\n                    z-index: 7;\n                }\n            }\n        }\n    }\n\n    &_orientation_vertical {\n        display: inline-flex;\n        flex-direction: column;\n\n        & > * {\n            min-height: auto;\n            flex: 0 0 auto;\n\n            &:not(:last-child) {\n                margin-right: 0;\n                margin-bottom: (@space / 2);\n            }\n        }\n\n        &.tui-group_collapsed {\n            & > * {\n                &:not(:last-child) {\n                    margin-right: 0;\n                    margin-bottom: -1px;\n                }\n            }\n        }\n    }\n\n    &_rounded.tui-group_orientation_horizontal {\n        & > * {\n            &:first-child {\n                border-top-left-radius: var(--tui-radius-m);\n                border-bottom-left-radius: var(--tui-radius-m);\n            }\n\n            &:last-child {\n                border-top-right-radius: var(--tui-radius-m);\n                border-bottom-right-radius: var(--tui-radius-m);\n            }\n        }\n    }\n\n    &_rounded.tui-group_orientation_horizontal.tui-group_radius_large {\n        & > * {\n            &:first-child {\n                border-top-left-radius: var(--tui-radius-l);\n                border-bottom-left-radius: var(--tui-radius-l);\n            }\n\n            &:last-child {\n                border-top-right-radius: var(--tui-radius-l);\n                border-bottom-right-radius: var(--tui-radius-l);\n            }\n        }\n    }\n\n    &_rounded.tui-group_orientation_vertical {\n        & > * {\n            &:first-child {\n                border-top-left-radius: var(--tui-radius-m);\n                border-top-right-radius: var(--tui-radius-m);\n            }\n\n            &:last-child {\n                border-bottom-left-radius: var(--tui-radius-m);\n                border-bottom-right-radius: var(--tui-radius-m);\n            }\n        }\n    }\n\n    &_rounded.tui-group_orientation_vertical.tui-group_radius_large {\n        & > * {\n            &:first-child {\n                border-top-left-radius: var(--tui-radius-l);\n                border-top-right-radius: var(--tui-radius-l);\n            }\n\n            &:last-child {\n                border-bottom-left-radius: var(--tui-radius-l);\n                border-bottom-right-radius: var(--tui-radius-l);\n            }\n        }\n    }\n\n    &_rounded.tui-group_adaptive {\n        &.tui-group_orientation_vertical:not(.tui-group_collapsed),\n        &.tui-group_orientation_horizontal {\n            & > * {\n                @media @mobile-m {\n                    &:first-child:not(:last-child),\n                    &:last-child:not(:first-child) {\n                        border-radius: var(--tui-radius-m);\n                    }\n                }\n            }\n        }\n    }\n\n    &_rounded.tui-group_adaptive.tui-group_radius_large {\n        &.tui-group_orientation_vertical:not(.tui-group_collapsed),\n        &.tui-group_orientation_horizontal {\n            & > * {\n                @media @mobile-m {\n                    &:first-child:not(:last-child),\n                    &:last-child:not(:first-child) {\n                        border-radius: var(--tui-radius-l);\n                    }\n                }\n            }\n        }\n    }\n\n    &_adaptive {\n        &.tui-group_orientation_vertical {\n            @media @mobile-m {\n                width: 100%;\n\n                & > * {\n                    &:nth-child(n):not(:only-child) {\n                        border-radius: var(--tui-radius-m);\n                    }\n\n                    &:not(:last-child) {\n                        margin-bottom: 1rem;\n                    }\n                }\n\n                &.tui-group_collapsed {\n                    & > * {\n                        &:nth-child(n):not(:only-child) {\n                            border-radius: 0;\n                        }\n\n                        &:first-child:not(:last-child) {\n                            border-radius: var(--tui-radius-m) var(--tui-radius-m) 0 0;\n                        }\n\n                        &:last-child:not(:first-child) {\n                            border-radius: 0 0 var(--tui-radius-m) var(--tui-radius-m);\n                        }\n\n                        &:not(:last-child) {\n                            margin-bottom: -1px;\n                        }\n                    }\n                }\n            }\n        }\n\n        &.tui-group_orientation_horizontal {\n            @media @mobile-m {\n                flex-direction: column;\n                width: 100%;\n\n                & > * {\n                    &:nth-child(n):not(:only-child) {\n                        border-radius: var(--tui-radius-m);\n                    }\n\n                    &:not(:last-child) {\n                        margin-right: 0;\n                        margin-bottom: 1rem;\n                    }\n                }\n\n                &.tui-group_collapsed {\n                    & > * {\n                        &:nth-child(n):not(:only-child) {\n                            border-radius: 0;\n                        }\n\n                        &:first-child:not(:last-child) {\n                            border-radius: var(--tui-radius-m) var(--tui-radius-m) 0 0;\n                        }\n\n                        &:last-child:not(:first-child) {\n                            border-radius: 0 0 var(--tui-radius-m) var(--tui-radius-m);\n                        }\n\n                        &:not(:last-child) {\n                            margin-right: 0;\n                            margin-bottom: -1px;\n                        }\n                    }\n                }\n            }\n        }\n    }\n\n    &_adaptive.tui-group_radius_large {\n        &.tui-group_orientation_vertical {\n            @media @mobile-m {\n                & > * {\n                    &:nth-child(n):not(:only-child) {\n                        border-radius: var(--tui-radius-l);\n                    }\n                }\n\n                &.tui-group_collapsed {\n                    & > * {\n                        &:nth-child(n):not(:only-child) {\n                            border-radius: 0;\n                        }\n\n                        &:first-child:not(:last-child) {\n                            border-radius: var(--tui-radius-l) var(--tui-radius-l) 0 0;\n                        }\n\n                        &:last-child:not(:first-child) {\n                            border-radius: 0 0 var(--tui-radius-l) var(--tui-radius-l);\n                        }\n                    }\n                }\n            }\n        }\n\n        &.tui-group_orientation_horizontal {\n            @media @mobile-m {\n                & > * {\n                    &:nth-child(n):not(:only-child) {\n                        border-radius: var(--tui-radius-l);\n                    }\n                }\n\n                &.tui-group_collapsed {\n                    & > * {\n                        &:nth-child(n):not(:only-child) {\n                            border-radius: 0;\n                        }\n\n                        &:first-child:not(:last-child) {\n                            border-radius: var(--tui-radius-l) var(--tui-radius-l) 0 0;\n                        }\n\n                        &:last-child:not(:first-child) {\n                            border-radius: 0 0 var(--tui-radius-l) var(--tui-radius-l);\n                        }\n                    }\n                }\n            }\n        }\n    }\n    /* stylelint-enable */\n\n    &__auto-width-item {\n        min-width: auto;\n        flex: 0 0 auto;\n    }\n\n    // specificity is the reason of this selector\n    & .tui-group__inherit-item {\n        border-radius: inherit;\n    }\n}\n"}}]);