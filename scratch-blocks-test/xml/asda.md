[Scratch Blocks]: Block migration
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
- `≤` Not implemented in Scratch Blocks, requires custom block definition
- `>` option becomes `operator_gt` block
- `≥` Not implemented in Scratch Blocks, requires custom block definition

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
- `^` Not implemented in Scratch Blocks, requires custom block definition

`math_single` & `math_trig` 
- Both have been merged into a single block called `operator_mathop`
`math_constant`
    - `π` Not implemented in Scratch Blocks, requires custom block definition
    - `e` Not implemented in Scratch Blocks, requires custom block definition
    - `ϕ` Not implemented in Scratch Blocks, requires custom block definition
    - `sqrt(2)` Not implemented in Scratch Blocks, requires custom block definition
    - `sqrt(½)` Not implemented in Scratch Blocks, requires custom block definition
    - `∞` Not implemented in Scratch Blocks, requires custom block definition

`math_number_property`
Tests whether a given number is any of the following and returns a boolean
    - `even` Not implemented in Scratch Blocks, requires custom block definition
    - `odd` Not implemented in Scratch Blocks, requires custom block definition
    - `prime` Not implemented in Scratch Blocks, requires custom block definition
    - `whole` Not implemented in Scratch Blocks, requires custom block definition
    - `positive` Not implemented in Scratch Blocks, requires custom block definition
    - `negative` Not implemented in Scratch Blocks, requires custom block definition
    - `divisible by` Not implemented in Scratch Blocks, requires custom block definition

`math_change`
- Becomes `data_changevariableby`

`math_round`
Performs the following operations on the given number
- `round` option becomes `operator_round`
- `round_up` Not implemented in Scratch Blocks, requires custom block definition
- `round_down` Not implemented in Scratch Blocks, requires custom block definition

`math_on_list`
Performs the following operations to a list of numbers
- `sum` Not implemented in Scratch Blocks, requires custom block definition
- `min` Not implemented in Scratch Blocks, requires custom block definition
- `max` Not implemented in Scratch Blocks, requires custom block definition
- `average` Not implemented in Scratch Blocks, requires custom block definition
- `median` Not implemented in Scratch Blocks, requires custom block definition
- `modes` Not implemented in Scratch Blocks, requires custom block definition
- `standard deviation` Not implemented in Scratch Blocks, requires custom block definition
- `random_item` Not implemented in Scratch Blocks, requires custom block definition

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

`text_getSubstring` Not implemented in Scratch Blocks, requires custom block definition
Returns a specific portion of a given string of text
- `letter #` 
- `letter # from end`
- `first letter`

`text_changeCase`
Changes the capitalisation of a string of text to
- `UPPER CASE` Not implemented in Scratch Blocks, requires custom block definition
- `lower case` Not implemented in Scratch Blocks, requires custom block definition
- `Title Case` Not implemented in Scratch Blocks, requires custom block definition 
`text_trim`
Trims the spaces within a given string or text
- `both sides` Not implemented in Scratch Blocks, requires custom block definition
- `left side` Not implemented in Scratch Blocks, requires custom block definition
- `right side` Not implemented in Scratch Blocks, requires custom block definition

`text_print`
Displays a given string of text
-  Not implemented in Scratch Blocks, requires custom block definition

`text_prompt_ext`
Prompts for an input of either text or numbers with a specific display message
- `text` Not implemented in Scratch Blocks, requires custom block definition
- `number` Not implemented in Scratch Blocks, requires custom block definition

### Advanced/List

`lists_create_with` (has mutator)
`lists_create_with` same as above, but comes with 2 outputs (has mutator)
-  Not implemented in Scratch Blocks, requires custom block definition

`lists_repeat`  *doesn’t have an equivalent*, requires our own implementatio

`lists_length`
- Becomes `data_lengthoflist`

`lists_isEmpty` Not implemented in Scratch Blocks, requires custom block definition

`lists_indexOf` Not implemented in Scratch Blocks, requires custom block definition
- `first` 
- `last`

`lists_getIndex`
- `get` becomes `data_itemoflist`
- `get and remove` Not implemented in Scratch Blocks, requires custom block definition
- `remove` Not implemented in Scratch Blocks, requires custom block definition

`lists_setIndex`  Not implemented in Scratch Blocks, requires custom block definition
- `set`
- `insert at`

`lists_getSublist` Not implemented in Scratch Blocks, requires custom block definition
- First dropdown
    - `#`
    - `# from end`
    - `first`
- Second dropdown
    - `#`
    - `# from end`
    - `first`

`lists_split` Not implemented in Scratch Blocks, requires custom block definition
- `list from text`
- `text from list`

`lists_sort` Not implemented in Scratch Blocks, requires custom block definition
- First dropdown
    - `numeric`
    - `alphabetic`
    - `alphabetic, ignore case`
- Second dropdown
    - `ascending`
    - `descending

### Advanced/Variable

Functionality seems to be the same for both Blockly and Scratch Blocks.
- _This section will be rendered by VARIABLES custom category function._ 
    - See https://developers.google.com/blockly/guides/configure/web/toolbox#dynamic_categories

### Advanced/Functions

Functionality seems to be the same for both Blockly and Scratch Blocks, but in Scratch Blocks a dialog is opened where the user can set various block settings. Without any customisation it emits a “_External procedure editor must be override Blockly.Procedures.externalProcedureDefCallback_”-error, so we need to override _Blockly.Procedures.externalProcedureDefCallback_.

- This section will be rendered by PROCEDURES custom category function (like VARIABLES)._
    - See https://developers.google.com/blockly/guides/configure/web/toolbox#dynamic_categories

### Advanced/Loop

`controls_repeat_ext`
- Becomes `control_repeat`

`controls_repeat`
- Becomes `control_repeat_until`

`controls_whileUntil`
- Becomes `control_while`

`controls_for` Not implemented in Scratch Blocks, requires custom block definition

`controls_forEach`
- Becomes `control_for_each`

`controls_flow_statements` Not implemented in Scratch Blocks, requires custom block definition
- `break out`
- `continue with next iteration`

