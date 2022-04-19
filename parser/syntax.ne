input -> expression | expression _ logicGate _ expression | input _ logicGate _ input
 
expression -> expressionOne | expressionTwo | expressionThree

expressionOne ->  categoryOne _ operator _ langaugesAvailable
expressionTwo ->  categoryTwo _ operator _ categoryAvailable
expressionThree ->  categoryThree _ operator _ ratingOptionsAvailable

_ -> " "
operator -> "=" | "!="
logicGate -> "OR"i | "AND"i

categoryOne -> "Language"i
categoryTwo -> "Category"i 
categoryThree -> "Rating"i

langaugesAvailable -> "Tamil"i | "English"i | "Telugu"i | "Kannada"i | "\"Hindi\""i 

categoryAvailable -> "Comedy"i | "Horror"i | "Family"i | "Thrillers"i | "\"Cartoons\""i

ratingOptionsAvailable -> "\">8\""i | "\">9\""i | "\">5\""i | "\">3\""i | "\"=0\""i