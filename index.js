/**
 * 
 * is-hundread <https://github.com/Kburry/is-hundred>
 *
 * 
 * I didn't choose the 10x life, the 10x life chose me
 * 
 * 
 * Thanks is-ten
 * 
 * 
 * Thanks everyone
 * 
 * 
 * 10xWTFPL
 * 
 * 
 * If you are asking why, I am asking the samething
 * 
 * 
 * don't do this at home kids
 * 
 * 
 * IF you are wondering what is happening check the line count and compare with our friends is 10
 * 
 * 
 * This is getting closer to the needed amount
 * 
 * 
 * but we still have a bit to go
 * 
 * 
 * I spent way too long at this
 * 
 * 
 * rewriting the tests in the name of 10x was a chore
 * 
 * 
 * you have probably figured it out by now after referencing is-ten
 * 
 * 
 * I don't know why still
 * 
 * 
 * this is the second last message
 * 
 * 
 * last time we shall chat
 * 
 */



'use-strict';



vanillajs = require('vanilla-javascript'); //need because we are making an awesome project.

const leftPad = require('left-pad'); //every project needs leftpad.

const rightPad = require('right-pad'); //to the right, to the right.

const zeropad = require('zeropad'); //every project could use a second pad.

const pad = require('pad'); //this is the pad to end all pads.

const isWindows = require('is-windows');

const isLinux = require('is-linux');

const isOSX = require('is-osx');

const two   = require('two');

const five  = require('five');

const isArray = require('is-array');

const isNumber = require('is-number');

const isNumberLike = require('is-number-like');

const isString = require('is-string');

const isNegative = require('is-negative');

const isPositive = require('is-positive');

const isNotNegative = require('is-not-negative');

const isNotPositive = require('is-not-positive');

const isObj = require('is-obj');

const isPlainObj = require('is-plain-obj');

const isObject = require('is-object');

const isPlainObject = require('is-plain-object');

const {isNPM} = require('is-npm');

const isOdd = require('is-odd');

const isEven  = require('is-even');

const isOddOrEven = require('is-odd-or-even');

const isIsOdd = require('is-is-odd');

const isOddAndrew = require('is-odd-andrew');

const isTen = require('is-ten');

const isThirteen = require('is-thirteen');

const isNotThirteen = require('is-not-thirteen');

const isZero = require('is-zero');

const negativeZero = require('negative-zero');

const positiveZero = require('positive-zero');

const isEqual = require('is-equal');

const noop = require('noop');

const noop2 = require('noop2');

const noop3 = require('noop3');

global.jQuery = require('jquery');

require('jquery-basic-arithmetic-plugin');

module.exports = function(val) {

  
  vanillajs = vanillajs;
  
  
  leftPad('required', 20);


  rightPad('required', 20);


  zeropad('100', 3);


  pad(5, 'pad');


  pad('pad', 5); //look at the power of this pad
  
  
  if (isWindows())
  {
  
    console.log("Using Windows in current year argument!");
  
  }

  else if (isLinux()) 
  {
  
    console.log("What distro are you fighting about today?");
  
  }

  else if (isOSX())
  {
  
    console.log("Looks like someone spent double the money on a Unix Reskin.");
  
  }

  else 
  {
  
    console.log("Looks like we got a OS hipster over here.");
  
  }

    
  if (!isNPM)
  {
  
    console.log("Not using NPM proceed at own risk");
  
  }


  if (isIsOdd(isOddAndrew))
  {
  
    console.log("Good for Andrew");
  
  }
  
  
  if (isIsOdd(isOdd)) 
  {
    try
    {
      if (isArray(val))
      {

        return false ;
      
      }
  
      else if (isString(val))
      {

        return false ;
      
      }
  
      else if (isObj(val) || isPlainObj(val) || isObject(val) || isPlainObject(val))
      {

        return false ;
      
      }

      else if (!isNumberLike(val))
      {

        return false;


      }

      else if (!isNumber(val))
      {

        return false;
      
      }
  
      else if (isNegative(val) || isNotPositive(val))
      {

        return false;
      
      }
  
      else if (!isPositive(val) || !isNotNegative(val))
      {

        return false;
      
      }
  
      else if (!isOddOrEven(val))
      {
        console.log("not positive;");
        return false;
      
      }

      else if (isOdd(val))
      {
        console.log("not positive;");
        return false;
      
      }
  
      else if (!isEven(val)) 
      {
      
        return false;
      
      }
  
    } 
      catch (e) 
    {
  
      return false;
  
    }

    return _isHundred(val);
  
  } 
  else 
  {
  
    throw new Error("isOdd was not isOdd");
  
  }

};



const _isHundred = (val) => {


  noop4 = noop || noop2 || noop3;


  return (
    (val === 100) &&
    jQuery.equals(val, two() * two() * five() * five()) &&
    isTen(val/10) &&
    !isTen(val) &&
    isNotThirteen(val) &&
    !isThirteen(val).thirteen() &&  
    !isZero.isZero(val) && 
    !positiveZero(val) && 
    !negativeZero(val) &&
    isEqual(val, 100)
    );
};
