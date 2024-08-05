import type {TuiLanguageEditor} from '@taiga-ui/i18n/types';

export const TUI_HEBREW_LANGUAGE_ADDON_EDITOR: TuiLanguageEditor = {
    colorSelectorModeNames: ['צבע אחיד', 'מִדרוֹן'],
    toolbarTools: {
        undo: 'לבטל',
        redo: 'לַעֲשׂוֹת שׁוּב',
        font: 'גוֹפָן',
        fontStyle: 'סיגנון גופן',
        fontSize: 'גודל גופן',
        bold: 'נוֹעָז',
        italic: 'נטוי',
        underline: 'לָשִׂים דָגֵשׁ',
        strikeThrough: 'מכה דרך',
        justify: 'לְהַצְדִיק',
        justifyLeft: 'תצדיק שמאל',
        justifyCenter: 'להצדיק מרכז',
        justifyRight: 'תצדיק נכון',
        justifyFull: 'להצדיק מלא',
        list: 'רשימה',
        indent: 'לְשַׁנֵן',
        outdent: 'שקע החוצה',
        unorderedList: 'רשימה לא מסודרת',
        orderedList: 'רשימה מסודרת',
        quote: 'ציטוט',
        foreColor: 'צֶבַע',
        backColor: 'צבע רקע',
        hiliteColor: 'הדגש צבע',
        clear: 'ברור',
        link: 'קישור',
        attach: 'לצרף קובץ',
        tex: 'הכנס TeX',
        code: 'קוד',
        image: 'הוסף תמונה',
        insertHorizontalRule: 'הכנס כלל אופקי',
        superscript: 'כתב על',
        subscript: 'מנוי',
        insertTable: 'הכנס טבלה',
        insertGroup: 'הוסף קבוצה',
        hiliteGroup: 'קבוצת הילייט',
        removeGroup: 'הסר את הקבוצה',
        insertAnchor: 'הכנס עוגן',
        mergeCells: 'מיזוג תאים',
        splitCells: 'פיצול תאים',
        rowsColumnsManaging: 'ניהול שורות ועמודות',
        cellColor: 'צבע התא',
        setDetails: 'פרטים',
        removeDetails: 'הסר פרטים',
    },
    editorEditLink: {
        urlExample: 'example.com',
        anchorExample: 'לְעַגֵן',
    },
    editorTableCommands: [
        ['הוסף עמודה לפני', 'הוסף עמודה אחרי'],
        ['הכנס שורה לפני', 'הכנס שורה אחרי'],
        ['מחק עמודה', 'מחק שורה'],
    ],
    editorCodeOptions: ['קוד בטקסט', 'קוד בבלוק'],
    editorFontOptions: {
        small: 'קָטָן',
        large: 'גָדוֹל',
        normal: 'נוֹרמָלִי',
        title: 'כותרת',
        subtitle: 'כתוביות',
    },
};
