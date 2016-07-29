# smarti.to.js `NEW`

<b>For old version look [README.old.md](https://github.com/onitecsoft/smarti.to.js/blob/master/README.old.md)</b>

JavaScript Number, Date and JSON Date localizable formatting  
(Converting JSON Date to JavaScript Date ignores timezone, so it will be the same value as defined in JSON)

User should create separate smarti.to.{culture-name}.js file for every culture and configure it.  
Example files: [smarti.to.et-EE.js](https://raw.githubusercontent.com/onitecsoft/smarti.to.js/master/src/smarti.to.et-EE.js), [smarti.to.en-US.js](https://raw.githubusercontent.com/onitecsoft/smarti.to.js/master/src/smarti.to.en-US.js)

<b>Using:</b>  
include [smarti.to.js](https://raw.githubusercontent.com/onitecsoft/smarti.to.js/master/src/smarti.to.js)   
include smarti.to.{corresponding-culture-name}.js

<b>Supported `Number` patterns:</b>
```
"." - decimal delimiter  
"," - group delimiter  
"0" - minimum (fixed) decimals or leading zero placeholder  
"#" - maximum decimals placehorder
```

<b>Supported `Date` patterns:</b>
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

Custom patterns can be defined in smarti.to.{culture-name}.js file

<b>Reference</b>

<table>
  <thead>
    <tr>
      <th>member</th>
      <th>description</th>
    </tr>
  </thead>
  <tr>
    <td><b>to(pattern, argument0, argument1, ...)</b></td>
    <td></td>
  </tr>
  <tr>
    <td colspan="2">
<pre lang="javascript">
smarti.to(',.00', 1111.2222);		  //return: 1,111.22
smarti.to('n2', 1111.2222);		    //return: 1,111.22
smarti.to('00000,', 1111);			  //return: 01,111
smarti.to(',.00##', 1111.222222);	//return: 1,111.2222
smarti.to(',.00##', 1111);			  //return: 1,111.00
</pre>
    </td>
  </tr>
</table>

```js
var number = (123.456).to('pattern');
var date = new Date().to('pattern');
var date = "2015-01-01T10:11:12.123Z".to('pattern');
var date = "/Date('1432883671013')/".to('pattern');
var formatted_string = smarti.format('{0:pattern} some_text {1:pattern}...', var0, var1, ...)
```



Examples (smarti.to.et-EE.js):
```js
new Date('2015-1-1').to('d')                //output: 1.01.2015  
new Date('2015-1-1').to('dd.MM.yy')         //output: 01.01.15  
new Date('2015-1-1 10:30:25').to('hh:mm')   //output: 10:30

smarti.format('{0:n2} + {1:n2} = {2:n2}', 1, 2, 3)   //output: 1,00 + 2,00 = 3,00
```
