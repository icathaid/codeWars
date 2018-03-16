Problem Domain:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F



This one wasn't too bad, did some quick searches for string manipulation methods and found out that we could split strings at a certain character, in this cace a space " ", with the txt.split() method, and then access and return specific indeces of the individual names returned by the first function.  From there we just had to tack on a '.' and convert the output to uppercase.
