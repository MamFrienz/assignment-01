jQuery plugin that automatically saves form values in the client side (using HTML5 localStorage) and restore them on our next visit. Bt i tried to my best to do something. Currently: we input our own verified data) and also we reset user input when apps is destroyed. Currently: inputs will still contain their values)

Include jquery and apps JS files

<script src="jquery.js"></script> <script src="MamFrienz.min.js"></script>
Create the following HTML element (each element must have a unique ID)

First name:

Last name:
initialize apps

$('.auto-save').apps('load');

// you can pass a function to be called when apps is finished loading. $('.auto-save').apps('load',function(){ console.log("All data from savy are loaded"); });

destroy apps

$('.auto-save').apps('destroy');

// you can pass a function to be called when apps is destroyed.

Compatibility: Firefox, Chrome, Safari and Opera Mini.
