(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4992],{4992:e=>{e.exports='<tui-textfield tuiDropdownMobile="Select country">\n    <label tuiLabel>Phone number</label>\n    <input\n        tuiInputPhoneInternational\n        [countries]="(countries | tuiSortCountries | async) || []"\n        [countrySearch]="true"\n        [(countryIsoCode)]="countryIsoCode"\n        [(ngModel)]="value"\n    />\n</tui-textfield>\n'}}]);