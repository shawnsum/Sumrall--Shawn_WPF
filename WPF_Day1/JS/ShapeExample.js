/**
 * Created by ShawnSum on 10/28/13.
 */

var length;
var width;
var height;
var volume;
var outputString;

length = prompt('What Is The Length?')*1;
width = prompt('What Is The Width?')*1;
height = prompt('What Is The Height?')*1
volume = length * width * height;

outputString =
'The length is ; \t\t' + length + '\n' +
'The width is ; \t\t' + width + '\n'
'The height is ; \t\t' + height + '\n'
'The volume is ; \t\t' + volume + '\n'

console.log(outputString)

