// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Date.prototype property "toUTCString" has { DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.42/S15.9.5.42_A1_T3.js
 * @description Checking DontEnum attribute
 */

if (Date.prototype.propertyIsEnumerable('toUTCString')) {
  $ERROR('#1: The Date.prototype.toUTCString property has the attribute DontEnum');
}

for(x in Date.prototype) {
  if(x === "toUTCString") {
    $ERROR('#2: The Date.prototype.toUTCString has the attribute DontEnum');
  }
}


