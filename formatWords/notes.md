Test.assertEquals(formatWords(['ninja', 'samurai', 'ronin']),
 "ninja, samurai and ronin")
 
Test.assertEquals(formatWords(['ninja', '', 'ronin']), "ninja and ronin")
Test.assertEquals(formatWords([]), '')