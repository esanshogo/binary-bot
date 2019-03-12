Blockly to Scratch Blocks
Block equivalents

### Logic

`controls_if`
Evaluates a statement and will perform an action only when the statement is true.
- Becomes `control_if` and `control_if_else`, in Scratch Blocks there is no support for mutators, so no more infinite-growing if-else-if statements. This may cause a backward compatibility issue, but we should we able to convert long if-else-if statements by converting them into nested if-else statements.

`logic_compare`
This block is to compare the values of two items, and is used to build a conditional structure
- `=` option becomes `operator_equals` block
- `≠` option becomes `operator_not` block
- `<` option becomes `operator_lt` block
- `≤` *doesn’t have an equivalent*, requires our own implementation
- `>` option becomes `operator_gt` block
- `≥` *doesn’t have an equivalent*, requires our own implementation

`logic_operation`
This block compares two different statements based on the logical operator
- `and` option becomes `operator_and` block
- `or` option becomes `operator_or` block

`logic_negate`
Is the same as `operator_not`? If so, no need to implement.

`logic_boolean`
Doesn’t have an equivalent in Scratch, we need to replicate this from Blockly

`logic_null`
Doesn’t have an equivalent in Scratch, we need to replicate this from Blockly

`logic_ternary`
Doesn’t have an equivalent in Scratch, we need to replicate this from Blockly

### Math

`math_number`
A single block that can contain numbers only
- Scratch Blocks doesn’t usually offer inputs as their own block (they’re always offered as part of another block), but they can be used as such (we will need to work on the styling a bit as the edges are white at the moment). This block has been divided into a couple blocks:
    - `math_number`
    - `math_whole_number`
    - `math_positive_number`
- Other available blocks
    - `math_angle`

`math_arithmetic`
Performs the following operations between two numbers
- `+` option becomes `operator_add`
- `-` option becomes `operator_subtract`
- `×` option becomes `operator_multiply`
- `÷` option becomes `operator_divide`
- `^` *doesn’t have an equivalent*, requires our own implementation

`math_single` & `math_trig` 
- Both have been merged into a single block called `operator_mathop`
`math_constant`
    - `π` *doesn’t have an equivalent*, requires our own implementation
    - `e` *doesn’t have an equivalent*, requires our own implementation
    - `ϕ` *doesn’t have an equivalent*, requires our own implementation
    - `sqrt(2)` *doesn’t have an equivalent*, requires our own implementation
    - `sqrt(½)` *doesn’t have an equivalent*, requires our own implementation
    - `∞` *doesn’t have an equivalent*, requires our own implementation

`math_number_property`
Tests whether a given number is any of the following and returns a boolean
    - `even` *doesn’t have an equivalent*, requires our own implementation
    - `odd` *doesn’t have an equivalent*, requires our own implementation
    - `prime` *doesn’t have an equivalent*, requires our own implementation
    - `whole` *doesn’t have an equivalent*, requires our own implementation
    - `positive` *doesn’t have an equivalent*, requires our own implementation
    - `negative` *doesn’t have an equivalent*, requires our own implementation
    - `divisible by` *doesn’t have an equivalent*, requires our own implementation

`math_change`
*doesn’t have an equivalent*, requires our own implementation

`math_round`
Performs the following operations on the given number
- `round` option becomes `operator_round`
- `round_up` *doesn’t have an equivalent*, requires our own implementation
- `round_down` *doesn’t have an equivalent*, requires our own implementation

`math_on_list`
Performs the following operations to a list of numbers
- `sum` *doesn’t have an equivalent*, requires our own implementation
- `min` *doesn’t have an equivalent*, requires our own implementation
- `max` *doesn’t have an equivalent*, requires our own implementation
- `average` *doesn’t have an equivalent*, requires our own implementation
- `median` *doesn’t have an equivalent*, requires our own implementation
- `modes` *doesn’t have an equivalent*, requires our own implementation
- `standard deviation` *doesn’t have an equivalent*, requires our own implementation
- `random_item` *doesn’t have an equivalent*, requires our own implementation

`math_modulo`
Returns the remainder after the division of the given numbers
- Becomes `operator_mod`

`math_constrain`
Constraints a given number to be within a set range
- Doesn’t have an equivalent in Scratch, we need to replicate this from Blockly

`math_random_int`
Returns a random number from x to y
- Becomes `operator_random`

`math_random_float`
Returns a random fraction from 0.0 to 1.0
- Doesn’t have an equivalent in Scratch, we need to replicate this from Blockly

### Text

`text`
A single block that can contain text only

`text_join`
Creates text strings from combining the text value of each attached item, without spaces in between. The number of items can be added accordingly.

`text_append`
Appends the given text to the variable “item”

`text_length`
Returns the number of characters of a given string of text, including numbers, spaces, punctuation marks, and symbols

`text_isEmpty`
Tests whether a string of text is empty. Returns a boolean value (true or false)

`text_indexOf`
Searches through a string of text for a specific occurrence of a given character or word, and returns the position

`text_charAt`
Returns the following from a given string of text
- `letter #`: Position of a specific letter
- `letter # from end`: Position of a specific letter from the end of the string
- `first letter`: The first letter of the string
- `last letter`: The last letter of the string
- `random letter`: A random letter within the string

`text_getSubstring`
Returns a specific portion of a given string of text
- `letter #` *doesn’t have an equivalent*, requires our own implementation
- `letter # from end` *doesn’t have an equivalent*, requires our own implementation
- `first letter` *doesn’t have an equivalent*, requires our own implementation

`text_changeCase`
Changes the capitalisation of a string of text to
- `UPPER CASE` *doesn’t have an equivalent*, requires our own implementation
- `lower case` *doesn’t have an equivalent*, requires our own implementation
- `Title Case` *doesn’t have an equivalent*, requires our own implementation 
`text_trim`
Trims the spaces within a given string or text
- `both sides` *doesn’t have an equivalent*, requires our own implementation
- `left side` *doesn’t have an equivalent*, requires our own implementation
- `right side` *doesn’t have an equivalent*, requires our own implementation

`text_print`
Displays a given string of text
-  *doesn’t have an equivalent*, requires our own implementation

`text_prompt_ext`
Prompts for an input of either text or numbers with a specific display message
- `text` *doesn’t have an equivalent*, requires our own implementation
- `number` *doesn’t have an equivalent*, requires our own implementation

### Advanced/List

`lists_create_with`
`lists_create_with` same as above, but with shadow block
`lists_repeat`
`lists_length`
`lists_isEmpty`
`lists_indexOf`
`lists_getIndex`
`lists_setIndex`
`lists_getSublist`
`lists_split`
`lists_sort`


### Advanced/Variable


### Advanced/Functions

### Advanced/Loop



