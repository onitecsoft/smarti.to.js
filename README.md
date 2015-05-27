# smarple.to.js

JavaScript Date and Number localized formatter

User should create separate smarple.to.{culture-name}.js file for every culture and configure it.  
Example file - smarple.to.et-EE.js

Using:  
include smarple.to.js  
include smarple.to.{corresponding-culture-name}.js

```js
var number = (123.456).to('{pattern}');  
var date = new Date().to('{pattern}');
```

Supported Number patterns:  
"." - decimal delimiter  
"," - group delimiter  
"0" - minimum (fixed) decimals or leading zero placeholder  
"#" - maximum decimals placehorder

Supported Date patterns:  
"d"    - day of the month  
"dd"   - day of the month (2 digits)  
"M"    - month  
"MM"   - month (2 digits)  
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

Custom patterns defined in smarple.to.{culture-name}.js file

Examples (smarple.to.et-EE.js):  
(1111.2222).to(',.00')        //output: 1 111,22  
(1111.2222).to('n2')          //output: 1 111,22  
(1111).to('00000,')           //output: 01 111  
(1111.222222).to(',.00##')    //output: 1 111,2222  
(1111).to(',.00##')           //output: 1 111,00

new Date('2015-1-1').to('d')                //output: 1.01.2015  
new Date('2015-1-1').to('dd.MM.yy')         //output: 01.01.15  
new Date('2015-1-1 10:30:25').to('hh:mm')   //output: 10:30
