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
"0" - fixed decimal or leading zero placeholder
"#" - max decimal placehorder

