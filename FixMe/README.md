FixMe Kata - 

Need to fix broken code that is supposed to replace all the dots "." in a string with dashes "-".

The existing code was essentially what I had pseudo-coded, with two mistakes.  The first was pretty simple; I just needed to create a new variable to return the new string to.  The second one took me a while - replacing . tells the JS to replace every instance it finds of anything.  I found the solution here:
https://stackoverflow.com/questions/19596610/escape-dot-in-javascript
The . needs to have a \ preceding it so that JS knows to look for it as a character and not a variable.
