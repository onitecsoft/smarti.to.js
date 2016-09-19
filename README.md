# smarti.to.js `NEW`

<b>For old version look [README.old.md](https://github.com/onitecsoft/smarti.to.js/blob/master/README.old.md)</b>

JavaScript Number (or its String representation), Date and JSON Date localizable formatting  
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
    <td>returns formatted pattern with one or multiple arguments</td>
  </tr>
  <tr>
    <td colspan="2">
<pre lang="javascript">
//used en-US culture
smarti.to(',.00', 1111.2222);         //return: 1,111.22
smarti.to('n2', '1111.2222');         //return: 1,111.22
smarti.to('00000,', '1111');          //return: 01,111
smarti.to(',.00##', '1111,222222');   //return: 1,111.2222
smarti.to(',.00##', 1111);            //return: 1,111.00
smarti.to('d', '2015-01-01T10:11:12.123Z');           //return: 1/1/2015
smarti.to('dd.MM.yy', "/Date(1432883671013)/");       //return: 29.05.15
smarti.to('hh:mm:ss', new Date('2016-1-1 8:29:59'));  //return: 08:29:59
smarti.to('{0:n2} + {1:n2} = {2:n2}', 1, 2, 3);       //return: 1.00 + 2.00 = 3.00
smarti.to('This {0} a test', 'is');                   //return: This is a test
</pre>
    </td>
  </tr>
  <tr>
    <td><b>parse(value)</b></td>
    <td>returns parsed Number or Date value from its String or Json representation</td>
  </tr>
  <tr>
    <td colspan="2">
<pre lang="javascript">
smarti.parse('2015-01-01T10:11:12.123Z');
smarti.parse('2015-01-01 10:11:12');
smarti.parse('2015-01-01');
smarti.parse("/Date(1432883671013)/");
//parse numeric depend on culture
//en-US example
smarti.parse('123');        //return 123
smarti.parse('123,456');    //return 123456
smarti.parse('123.456');    //return 123.456
smarti.parse('123,456.78'); //return 123456.78
</pre>
    </td>
  </tr>
</table>
