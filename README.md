# Undefault
CSS framework for simple, pretty form elements whose default properties are easily overwritten. 

## Usage 
Use npm to install Undefault in your Angular application:
`npm install undefault`

Import Undefault in your top level styling file, by default 'styles.scss':
```
@import 'undefault';
```

To overwrite Undefault's default variables, define the variable in your top level styling file before importing Undefault: 
```
$form-element-background-color: pink;

@import 'undefault';
```

To overwrite element specific styling, define the lower level variables in your top level styling file. Overwriting more specific variables will cause more general variables to be overwritten. For example, you can overwrite $form-element-height and $input-height in any order, but $input-height will win. 
```
$input-height: 50px;
$form-element-height: 48px;

@import 'undefault';
```
