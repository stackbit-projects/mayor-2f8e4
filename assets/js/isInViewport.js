/*
* @author Mudit Ameta
* @license https://github.com/zeusdeux/isInViewport/blob/master/license.md MIT
*/
!function(a){function b(b){var c,d=a("<div></div>").css({width:"100%"});return b.append(d),c=b.width()-d.width(),d.remove(),c}function c(d,e){var f=d.getBoundingClientRect(),g=f.top,h=f.bottom,i=f.left,j=f.right,k=a.extend({tolerance:0,viewport:window},e),l=!1,m=k.viewport.get?k.viewport:a(k.viewport);m.length||(console.warn("isInViewport: The viewport selector you have provided matches no element on page."),console.warn("isInViewport: Defaulting to viewport as window"),m=a(window));var n=m.height(),o=m.width(),p=m.get(0).toString();if("[object Window]"!==p&&"[object DOMWindow]"!==p){var q=m.offset();g-=q.top,h-=q.top,i-=q.left,j=i+o,c.scrollBarWidth=c.scrollBarWidth||b(m),o-=c.scrollBarWidth}return k.tolerance=~~Math.round(parseFloat(k.tolerance)),k.tolerance<0&&(k.tolerance=n+k.tolerance),Math.abs(i)>=o?l:l=k.tolerance?!!(g<=k.tolerance&&h>=k.tolerance):!!(h>0&&n>=g)}var d=function(b){if(1===arguments.length&&"function"==typeof b&&(b=[b]),!(b instanceof Array))throw new SyntaxError("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions");for(var c=0;c<b.length;c++)if("function"==typeof b[c])for(var d=0;d<this.length;d++)b[c].call(a(this[d]));else console.warn("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"),console.warn("isInViewport: Ignoring non-function values in array and moving on");return this};a.fn["do"]=function(a){return console.warn("isInViewport: .do causes issues in IE and some browsers since its a reserved. Use $.fn.run instead i.e., $(el).run(fn)."),d(a)},a.fn.run=d,a.extend(a.expr[":"],{"in-viewport":function(a,b,d){if(d[3]){var e=d[3].split(",");return 1===e.length&&isNaN(e[0])&&(e[1]=e[0],e[0]=void 0),c(a,{tolerance:e[0]?e[0].trim():void 0,viewport:e[1]?e[1].trim():void 0})}return c(a)}})}(jQuery);
