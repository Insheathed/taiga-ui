(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3734],{45287:(a,n,e)=>{e.d(n,{Z:()=>r});var r=(()=>(function(a){a.ArmenianDram="051",a.AustralianDollar="036",a.AzerbaijaniManat="944",a.Baht="764",a.BelarusianRuble="933",a.BrazilianReal="986",a.CanadianDollar="124",a.Dirham="784",a.Dollar="840",a.Euro="978",a.GeorgianLari="981",a.HongKongDollar="344",a.Hryvnia="980",a.IndianRupee="356",a.IndonesianRupiah="360",a.IranianRial="364",a.IsraeliShekel="376",a.KyrgyzstanSom="417",a.MalaysianRinggit="458",a.MexicanPeso="484",a.MongolianTugrik="496",a.NewTurkmenManat="934",a.Pound="826",a.Ruble="643",a.SaudiRiyal="682",a.SerbianDinar="941",a.SingaporeDollar="702",a.SouthAfricanRand="710",a.SriLankanRupee="144",a.SwissFranc="756",a.TajikistaniSomoni="972",a.Tenge="398",a.TurkishLira="949",a.UzbekSum="860",a.VietnameseDong="704",a.Won="410",a.Yen="392",a.YuanRenminbi="156"}(r||(r={})),r))()},35913:(a,n,e)=>{e.d(n,{o:()=>r});var r=(()=>(function(a){a.ArmenianDram="AMD",a.AustralianDollar="AUD",a.AzerbaijaniManat="AZN",a.Baht="THB",a.BelarusianRuble="BYN",a.BrazilianReal="BRL",a.CanadianDollar="CAD",a.Dirham="AED",a.Dollar="USD",a.Euro="EUR",a.GeorgianLari="GEL",a.HongKongDollar="HKD",a.Hryvnia="UAH",a.IndianRupee="INR",a.IndonesianRupiah="IDR",a.IranianRial="IRR",a.IsraeliShekel="ILS",a.KyrgyzstanSom="KGS",a.MalaysianRinggit="MYR",a.MexicanPeso="MXN",a.MongolianTugrik="MNT",a.NewTurkmenManat="TMT",a.Pound="GBP",a.Ruble="RUB",a.SaudiRiyal="SAR",a.SerbianDinar="RSD",a.SingaporeDollar="SGD",a.SouthAfricanRand="ZAR",a.SriLankanRupee="LKR",a.SwissFranc="CHF",a.TajikistaniSomoni="TJS",a.Tenge="KZT",a.TurkishLira="TRY",a.UzbekSum="UZS",a.VietnameseDong="VND",a.Won="KRW",a.Yen="JPY",a.YuanRenminbi="CNY"}(r||(r={})),r))()},44974:(a,n,e)=>{e.d(n,{H6:()=>o,pw:()=>i,uC:()=>t});var r=e(79243);const i={currency:null,currencyAlign:"right",sign:"negative-only"},o=(0,r.tuiCreateToken)(i);function t(a){return(0,r.tuiProvideOptions)(o,a,i)}},3734:(a,n,e)=>{e.d(n,{f:()=>l});var r=e(8575),i=e(79243),o=e(57760),t=e(86779),u=e(44974),s=e(39508);let l=(()=>{var a;class n{constructor(a,n){this.options=a,this.format=n}transform(a,n=this.options.currency,e=this.options.currencyAlign){return this.format.pipe((0,t.T)((t=>{const u=(0,r.Vl)(a,this.options.sign),s=(0,r.vN)(n),l=(0,o.tuiFormatNumber)(Math.abs(a),{...t,decimalLimit:this.getDecimalLimit(a,Number.isNaN(t.decimalLimit)?2:t.decimalLimit,(null==t?void 0:t.decimal)||"not-zero")}),c=(null==s?void 0:s.length)>1||"right"===e?i.CHAR_NO_BREAK_SPACE:"";return"right"===e?`${u}${l}${c}${s}`:`${u}${s}${c}${l}`})))}getDecimalLimit(a,n,e){return"always"===e||"not-zero"===e&&a%1?n:0}}return(a=n).ɵfac=function(n){return new(n||a)(s.rXU(u.H6,16),s.rXU(o.TUI_NUMBER_FORMAT_OBSERVABLE,16))},a.ɵpipe=s.EJ8({name:"tuiAmount",type:a,pure:!0,standalone:!0}),n})()},8575:(a,n,e)=>{e.d(n,{q_:()=>R,eW:()=>l,_v:()=>m,Fu:()=>y,vN:()=>u,Vl:()=>s,yS:()=>c,Ub:()=>Z,kB:()=>t,qZ:()=>g,bw:()=>k,YF:()=>b,RZ:()=>h,Wq:()=>M,we:()=>S,P3:()=>D,rY:()=>d,wT:()=>p});var r=e(79243),i=e(35913),o=e(45287);function t(a){switch(a){case i.o.Ruble:case o.Z.Ruble:return"₽";case i.o.Dollar:case o.Z.Dollar:case i.o.MexicanPeso:case o.Z.MexicanPeso:return"$";case i.o.SingaporeDollar:case o.Z.SingaporeDollar:return"S$";case i.o.AustralianDollar:case o.Z.AustralianDollar:return"A$";case i.o.HongKongDollar:case o.Z.HongKongDollar:return"HK$";case i.o.CanadianDollar:case o.Z.CanadianDollar:return"C$";case i.o.Euro:case o.Z.Euro:return"€";case i.o.Pound:case o.Z.Pound:return"£";case i.o.Baht:case o.Z.Baht:return"฿";case i.o.TurkishLira:case o.Z.TurkishLira:return"₺";case i.o.YuanRenminbi:case o.Z.YuanRenminbi:return"CN¥";case i.o.Yen:case o.Z.Yen:return"¥";case i.o.IsraeliShekel:case o.Z.IsraeliShekel:return"₪";case i.o.IndianRupee:case o.Z.IndianRupee:return"₹";case i.o.SwissFranc:case o.Z.SwissFranc:return"₣";case i.o.ArmenianDram:case o.Z.ArmenianDram:return"֏";case i.o.Won:case o.Z.Won:return"₩";case i.o.Tenge:case o.Z.Tenge:return"₸";case i.o.Hryvnia:case o.Z.Hryvnia:return"₴";case i.o.UzbekSum:case o.Z.UzbekSum:return"So'm";case i.o.KyrgyzstanSom:case o.Z.KyrgyzstanSom:return"c";case i.o.Dirham:case o.Z.Dirham:return"Dh";case i.o.TajikistaniSomoni:case o.Z.TajikistaniSomoni:return"SM";case i.o.MalaysianRinggit:case o.Z.MalaysianRinggit:return"RM";case i.o.BelarusianRuble:case o.Z.BelarusianRuble:return"Br";case i.o.GeorgianLari:case o.Z.GeorgianLari:return"₾";case i.o.AzerbaijaniManat:case o.Z.AzerbaijaniManat:return"₼";case i.o.SriLankanRupee:case o.Z.SriLankanRupee:return"Rs.";case i.o.SerbianDinar:case o.Z.SerbianDinar:return"DIN";case i.o.SaudiRiyal:case o.Z.SaudiRiyal:return"SR";case i.o.MongolianTugrik:case o.Z.MongolianTugrik:return"₮";case i.o.SouthAfricanRand:case o.Z.SouthAfricanRand:return"R";case i.o.IranianRial:case o.Z.IranianRial:return"IR";case i.o.IndonesianRupiah:case o.Z.IndonesianRupiah:return"Rp";case i.o.VietnameseDong:case o.Z.VietnameseDong:return"đ";case i.o.NewTurkmenManat:case o.Z.NewTurkmenManat:return"TMT";case i.o.BrazilianReal:case o.Z.BrazilianReal:return"R$";default:return null}}function u(a){const n=function(a){return null===a||(0,r.tuiIsString)(a)?a||"":String(a).padStart(3,"0")}(a);return t(n)||n}function s(a,n){return"never"===n||!a||"negative-only"===n&&a>0?"":"force-negative"===n||a<0&&"force-positive"!==n?r.CHAR_MINUS:r.CHAR_PLUS}const l={[i.o.Ruble]:o.Z.Ruble,[i.o.Dollar]:o.Z.Dollar,[i.o.MexicanPeso]:o.Z.MexicanPeso,[i.o.SingaporeDollar]:o.Z.SingaporeDollar,[i.o.AustralianDollar]:o.Z.AustralianDollar,[i.o.HongKongDollar]:o.Z.HongKongDollar,[i.o.CanadianDollar]:o.Z.CanadianDollar,[i.o.Euro]:o.Z.Euro,[i.o.Pound]:o.Z.Pound,[i.o.Baht]:o.Z.Baht,[i.o.TurkishLira]:o.Z.TurkishLira,[i.o.YuanRenminbi]:o.Z.YuanRenminbi,[i.o.Yen]:o.Z.Yen,[i.o.IsraeliShekel]:o.Z.IsraeliShekel,[i.o.IndianRupee]:o.Z.IndianRupee,[i.o.SwissFranc]:o.Z.SwissFranc,[i.o.ArmenianDram]:o.Z.ArmenianDram,[i.o.Won]:o.Z.Won,[i.o.Tenge]:o.Z.Tenge,[i.o.Hryvnia]:o.Z.Hryvnia,[i.o.UzbekSum]:o.Z.UzbekSum,[i.o.KyrgyzstanSom]:o.Z.KyrgyzstanSom,[i.o.Dirham]:o.Z.Dirham,[i.o.TajikistaniSomoni]:o.Z.TajikistaniSomoni,[i.o.MalaysianRinggit]:o.Z.MalaysianRinggit,[i.o.BelarusianRuble]:o.Z.BelarusianRuble,[i.o.GeorgianLari]:o.Z.GeorgianLari,[i.o.AzerbaijaniManat]:o.Z.AzerbaijaniManat,[i.o.SriLankanRupee]:o.Z.SriLankanRupee,[i.o.SerbianDinar]:o.Z.SerbianDinar,[i.o.SaudiRiyal]:o.Z.SaudiRiyal,[i.o.MongolianTugrik]:o.Z.MongolianTugrik,[i.o.SouthAfricanRand]:o.Z.SouthAfricanRand,[i.o.IranianRial]:o.Z.IranianRial,[i.o.IndonesianRupiah]:o.Z.IndonesianRupiah,[i.o.VietnameseDong]:o.Z.VietnameseDong,[i.o.NewTurkmenManat]:o.Z.NewTurkmenManat,[i.o.BrazilianReal]:o.Z.BrazilianReal};function c(a){var n;return null!==(n=l[a])&&void 0!==n?n:null}const m={[o.Z.Ruble]:i.o.Ruble,[o.Z.Dollar]:i.o.Dollar,[o.Z.MexicanPeso]:i.o.MexicanPeso,[o.Z.SingaporeDollar]:i.o.SingaporeDollar,[o.Z.SingaporeDollar]:i.o.SingaporeDollar,[o.Z.AustralianDollar]:i.o.AustralianDollar,[o.Z.HongKongDollar]:i.o.HongKongDollar,[o.Z.CanadianDollar]:i.o.CanadianDollar,[o.Z.Euro]:i.o.Euro,[o.Z.Pound]:i.o.Pound,[o.Z.Baht]:i.o.Baht,[o.Z.TurkishLira]:i.o.TurkishLira,[o.Z.YuanRenminbi]:i.o.YuanRenminbi,[o.Z.Yen]:i.o.Yen,[o.Z.IsraeliShekel]:i.o.IsraeliShekel,[o.Z.IsraeliShekel]:i.o.IsraeliShekel,[o.Z.IndianRupee]:i.o.IndianRupee,[o.Z.SwissFranc]:i.o.SwissFranc,[o.Z.ArmenianDram]:i.o.ArmenianDram,[o.Z.Won]:i.o.Won,[o.Z.Tenge]:i.o.Tenge,[o.Z.Hryvnia]:i.o.Hryvnia,[o.Z.UzbekSum]:i.o.UzbekSum,[o.Z.KyrgyzstanSom]:i.o.KyrgyzstanSom,[o.Z.Dirham]:i.o.Dirham,[o.Z.TajikistaniSomoni]:i.o.TajikistaniSomoni,[o.Z.MalaysianRinggit]:i.o.MalaysianRinggit,[o.Z.BelarusianRuble]:i.o.BelarusianRuble,[o.Z.GeorgianLari]:i.o.GeorgianLari,[o.Z.AzerbaijaniManat]:i.o.AzerbaijaniManat,[o.Z.SriLankanRupee]:i.o.SriLankanRupee,[o.Z.SerbianDinar]:i.o.SerbianDinar,[o.Z.SaudiRiyal]:i.o.SaudiRiyal,[o.Z.MongolianTugrik]:i.o.MongolianTugrik,[o.Z.SouthAfricanRand]:i.o.SouthAfricanRand,[o.Z.IranianRial]:i.o.IranianRial,[o.Z.IndonesianRupiah]:i.o.IndonesianRupiah,[o.Z.VietnameseDong]:i.o.VietnameseDong,[o.Z.NewTurkmenManat]:i.o.NewTurkmenManat,[o.Z.BrazilianReal]:i.o.BrazilianReal};function Z(a){var n;return null!==(n=m[a])&&void 0!==n?n:null}const R=[["mir",2200,2204],["mastercard",2221,2720],["jcb",3528,3589],["amex",34],["amex",37],["dinersclub",36],["electron",4026],["electron",4175],["electron",4405],["electron",4508],["electron",4844],["electron",4913],["electron",4917],["visa",4],["verve",506099,506198],["verve",507865,507964],["maestro",5018],["maestro",5020],["maestro",5038],["maestro",5090],["maestro",5890],["maestro",5893],["rupay",508],["maestro",50],["mastercard",51,55],["maestro",56],["maestro",58],["mastercard",5],["maestro",6e3],["maestro",6304],["maestro",6759,6763],["verve",650002,650027],["maestro",676770],["maestro",676774],["discover",644,649],["discover",6011],["rupay",60],["unionpay",62],["discover",65],["maestro",6],["rupay",81,82],["uzcard",8600],["humo",9860]];function g(a,n){var e;if(!a)return null;const r=R.find((([e,r,i=r])=>{const o=Number.parseInt(a.slice(0,String(r).length),10);return o>=r&&o<=i&&(!(null!=n&&n.length)||n.includes(e))}));return null!==(e=null==r?void 0:r[0])&&void 0!==e?e:null}function S(a,n,e){return 6===e||50===n||n>55&&n<59||!(a<500)&&a<510}function D(a,n,e){return 5===e||!(n<10)&&(n>50&&n<56||!(a<1e3)&&a>2220&&a<2721)}function d(a){return a>2199&&a<2205}function h(a){switch(a){case 4026:case 4175:case 4405:case 4508:case 4844:case 4913:case 4917:return!0;default:return!1}}function p(a){return 4===a}function k(a){const{length:n}=a;switch(g(a)){case"electron":return 16===n;case"maestro":return n>11&&n<20;case"mastercard":case"mir":return n>15&&n<20;case"visa":return n>12&&n<20;default:return n>8&&n<20}}var I=e(57760);function b(a){const n=String(a).replace(I.TUI_NON_DIGITS_REGEXP,""),{length:e}=n;return!(n.split("").map(((a,n)=>{const r=parseInt(a,10);if((n+e)%2==0){const a=2*r;return a>9?a-9:a}return r})).reduce(((a,n)=>a+n),0)%10)}function M(a,n=new Date){const e=n.getMonth()+1,i=n.getFullYear()-2e3,o=(0,r.tuiClamp)(parseInt(a.slice(0,2),10),1,12),t=(0,r.tuiClamp)(parseInt(a.slice(-2),10),0,99);return t>i||i===t&&o>=e}const y={mir:"tuiIconMirMono",visa:"tuiIconVisaMono",electron:"tuiIconElectronMono",mastercard:"tuiIconMastercard",maestro:"tuiIconMaestro",amex:"tuiIconAmex",dinersclub:"tuiIconDinersClub",discover:"tuiIconDiscover",humo:"tuiIconHumo",jcb:"tuiIconJCB",rupay:"tuiIconRuPay",unionpay:"tuiIconUnionPay",uzcard:"tuiIconUzcard",verve:"tuiIconVerve"}}}]);