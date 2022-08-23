(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{KUrn:function(n,t,e){"use strict";e.r(t),t.default="@height-cell-large: 5rem;\n\n.tui-table {\n    width: 100%;\n\n    &_layout_fixed {\n        table-layout: fixed;\n    }\n\n    &__tr {\n        .transition(background);\n        outline: none;\n\n        &:not(&_hover_disabled):hover {\n            background: var(--tui-base-02);\n        }\n\n        &:not(&_border_none) {\n            border-bottom: 1px solid var(--tui-base-03);\n        }\n\n        &_border_top {\n            border-top: 1px solid var(--tui-base-03);\n        }\n\n        &_cursor_pointer {\n            cursor: pointer;\n        }\n    }\n\n    &__th {\n        .text-overflow();\n        font: var(--tui-font-text-s);\n        padding: 0.5rem 1rem;\n        vertical-align: middle;\n        height: 2.5rem;\n        color: var(--tui-text-02);\n        background: inherit;\n\n        &_font-size_l,\n        .tui-table_font-size_l & {\n            font: var(--tui-font-text-m);\n        }\n    }\n\n    &__td {\n        font: var(--tui-font-text-m);\n        padding: 1rem 1rem 0.875rem;\n        vertical-align: top;\n        word-wrap: break-word;\n        height: 3.4375rem;\n        color: var(--tui-text-01);\n        background: inherit;\n\n        &_size_l,\n        .tui-table_size_l & {\n            height: @height-cell-large - 0.0625rem;\n        }\n\n        &_font-size_l,\n        .tui-table_font-size_l & {\n            font: var(--tui-font-text-l);\n        }\n\n        &_font-size_s,\n        .tui-table_font-size_s & {\n            font: var(--tui-font-text-s);\n        }\n\n        &_align_center {\n            vertical-align: middle;\n        }\n    }\n\n    &__td,\n    &__th {\n        box-sizing: border-box;\n        text-align: left;\n\n        .tui-table_size_l &:before {\n            width: 1rem;\n            border-top-left-radius: 1rem;\n            border-bottom-left-radius: 1rem;\n        }\n\n        &_first:before,\n        &_last:before {\n            content: '';\n            position: absolute;\n            top: 0;\n            width: 0.75rem;\n            height: 100%;\n            background: inherit;\n            border-top-left-radius: 0.75rem;\n            border-bottom-left-radius: 0.75rem;\n        }\n\n        &_first {\n            position: relative;\n            padding-left: 0;\n            overflow: visible;\n\n            &:before {\n                right: 100%;\n            }\n        }\n\n        &_last {\n            position: relative;\n            padding-right: 0;\n            overflow: visible;\n\n            &:before {\n                left: 100%;\n                transform: scaleX(-1);\n            }\n        }\n\n        &_text_center {\n            text-align: center;\n        }\n\n        &_text_right {\n            text-align: right;\n        }\n\n        &_text_overflow {\n            .text-overflow();\n        }\n    }\n\n    &__subtext {\n        font: var(--tui-font-text-s);\n        margin: @space 0 0 0;\n        color: var(--tui-text-03);\n    }\n\n    &__sort {\n        .clearbtn();\n        .transition(color);\n        position: relative;\n        display: inline-flex;\n        align-items: center;\n        outline: none;\n        cursor: pointer;\n\n        &:hover {\n            color: var(--tui-text-01);\n        }\n\n        &_active {\n            color: var(--tui-link);\n\n            &:hover {\n                color: var(--tui-link-hover);\n            }\n        }\n    }\n\n    &__sort-icon {\n        .center-top();\n        left: 100%;\n        margin-left: (@space / 2);\n        width: 1rem;\n        height: 1rem;\n        flex-shrink: 0;\n        opacity: 0;\n\n        .tui-table__sort_active &,\n        .tui-table__sort:hover & {\n            .transition(transform);\n            opacity: 1;\n        }\n\n        .tui-table__sort_active.tui-table__sort_up & {\n            transform: rotate(180deg) translateY(50%);\n        }\n    }\n}\n"}}]);