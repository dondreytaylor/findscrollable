findscrollable.js
=================

FindScrollable.js is a jQuery plugin used to find scrollable elements within a given element/elements (i.e. anything with a scrollbar).


Usage
-----

```javascript

$('.selector').findScrollable( arrayofSelectors, callback ); 


```


Shorthand Example
-----

The following will grab every element within `window` that can scroll. If the holder in 
this case window contains a scrollbar it will be included as well.

```javascript

$(window).findScrollable(function( elementsThatScroll ) 
{
    // Do stuff with elements that scroll inside of window
});

```


Example
-----

The following will grab every `div` within `div.content` that can scroll. If the holder in 
this case `div.content` contains a scrollbar it will be included as well.

```javascript

$('div.content').findScrollable(['div'], function( elementsThatScroll ) 
{
    // Do stuff with elements that scroll inside of div.content
});

```


