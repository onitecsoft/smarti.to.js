# smarple.to.js

JavaScript Date and Number localized formatter

User should create separate smarple.to.{culture-name}.js file for every culture and configure it.  
Example file - smarple.to.et-EE.js

Using:  
include smarple.to.js  
include smarple.to.{corresponding-culture-name}.js

(123.456).to('{pattern}');  
new Date().to('{pattern}');

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
