(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[65901],{65901:n=>{n.exports=":host {\n    display: grid;\n    grid-template-columns: repeat(6, 6.5rem);\n    grid-auto-rows: 7rem;\n    align-items: start;\n    gap: 1rem;\n}\n\n.card {\n    height: 7rem;\n    display: flex;\n    flex-direction: column;\n    font: var(--tui-font-text-xs);\n\n    &:first-child {\n        grid-column: span 2;\n    }\n\n    .heading {\n        font: var(--tui-font-text-s);\n        color: var(--tui-text-01-night);\n        font-weight: bold;\n        margin: -0.125rem 0 0;\n    }\n\n    .content {\n        max-width: 50%;\n        color: var(--tui-text-01-night);\n    }\n\n    .badge {\n        margin: auto auto -0.125rem -0.125rem;\n    }\n}\n\n.restaurant {\n    height: 15rem;\n    grid-column: span 3;\n    grid-row: span 2;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    color: var(--tui-text-01-night);\n    font-size: 1.375rem;\n\n    .header {\n        display: flex;\n        justify-content: space-between;\n        align-items: flex-start;\n        padding: 0 0.25rem;\n    }\n\n    .footer {\n        display: flex;\n        justify-content: space-between;\n    }\n}\n\n.blur {\n    grid-column: span 3;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    font: var(--tui-font-heading-6);\n    color: var(--tui-text-01-night);\n\n    .button {\n        border-radius: 100%;\n        margin: 0 0.375rem 0 auto;\n    }\n}\n\n.reviews {\n    grid-column: span 3;\n    grid-row: span 3;\n    display: flex;\n    flex-direction: column;\n\n    .heading {\n        margin: -0.25rem 0 0;\n        font: var(--tui-font-heading-6);\n    }\n\n    .link {\n        float: right;\n        font: var(--tui-font-text-m);\n    }\n\n    .scrollbar {\n        margin: 0.75rem -1.25rem 1.25rem;\n        scroll-snap-type: x mandatory;\n        overscroll-behavior-x: contain;\n    }\n\n    .wrapper {\n        display: flex;\n        padding: 0 1.25rem;\n        gap: 0.625rem;\n\n        &:after {\n            content: '';\n            min-width: 0.625rem;\n        }\n    }\n\n    .review {\n        display: flex;\n        flex-direction: column;\n        gap: 0.5rem;\n        min-width: calc(100% - 0.75rem);\n        padding: 0.75rem 1rem 1rem;\n        border-radius: 1rem;\n        font: var(--tui-font-text-l);\n        scroll-snap-align: start;\n        scroll-margin: 1.25rem;\n    }\n\n    .footer {\n        display: flex;\n        align-items: flex-end;\n        gap: 0.75rem;\n        margin-top: auto;\n        font: var(--tui-font-text-s);\n    }\n\n    .label {\n        flex-direction: column-reverse;\n        font-weight: bold;\n    }\n}\n\n.mask {\n    grid-column: span 3;\n    grid-row: span 3;\n    padding: 4rem 2rem 7rem;\n    color: var(--tui-text-01-night);\n\n    .heading {\n        display: flex;\n        align-items: center;\n        gap: 0.25rem;\n        font: var(--tui-font-heading-6);\n        margin: 0;\n    }\n\n    .button {\n        border-radius: 100%;\n        transform: scale(0.75);\n    }\n\n    .sum {\n        font: var(--tui-font-heading-4);\n        margin-bottom: 4rem;\n    }\n\n    .footer {\n        display: flex;\n        gap: 0.75rem;\n        margin-top: 4rem;\n    }\n\n    .add {\n        width: 3rem;\n        border-radius: var(--tui-radius-xs);\n    }\n}\n"}}]);