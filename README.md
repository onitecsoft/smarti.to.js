# smarple.to.js

JavaScript Number, Date and JSON Date localized formatter  
(Converting JSON Date to JavaScript Date ignores timezone, so it will be the same value as defined in JSON)

User should create separate smarple.to.{culture-name}.js file for every culture and configure it.  
Example files: smarple.to.et-EE.js, smarple.to.en-US.js

Using:  
include smarple.to.js  
include smarple.to.{corresponding-culture-name}.js
```js
var number = (123.456).to('{pattern}');  
var date = new Date().to('{pattern}');
var date = "2015-01-01T10:11:12.123Z".to('{pattern}');
var date = "/Date('1432883671013')/".to('{pattern}');
```

Supported Number patterns:
```
"." - decimal delimiter  
"," - group delimiter  
"0" - minimum (fixed) decimals or leading zero placeholder  
"#" - maximum decimals placehorder
```

Supported Date patterns:
```
"d"    - day of the month  
"dd"   - day of the month (2 digits)  
"M"    - month  
"MM"   - month (2 digits)  
"MMM"  - month name from "MMM" array defined in culture configuration  
"MMMM" - month name from "MMMM" array defined in culture configuration  
"yy"   - year (2 digits)  
"yyyy" - year (4 digits)  
"h"    - hour  
"hh"   - hour (2 digits)  
"m"    - minutes  
"mm"   - minutes (2 digits)  
"s"    - seconds  
"ss"   - seconds (2 digits)  
"t"    - A/P  
"tt"   - AM/PM  
"a"    - week day from "a" array defined in culture configuration  
"aa"   - week day from "aa" array defined in culture configuration  
"aaa"  - week day from "aaa" array defined in culture configuration  
```

Custom patterns can be defined in smarple.to.{culture-name}.js file

Examples (smarple.to.et-EE.js):
```js
(1111.2222).to(',.00')        //output: 1 111,22  
(1111.2222).to('n2')          //output: 1 111,22  
(1111).to('00000,')           //output: 01 111  
(1111.222222).to(',.00##')    //output: 1 111,2222  
(1111).to(',.00##')           //output: 1 111,00

new Date('2015-1-1').to('d')                //output: 1.01.2015  
new Date('2015-1-1').to('dd.MM.yy')         //output: 01.01.15  
new Date('2015-1-1 10:30:25').to('hh:mm')   //output: 10:30
```
