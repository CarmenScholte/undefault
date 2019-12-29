# Undefault
CSS framework for simple, pretty form elements whose default properties are easily overwritten. Undefault tries to provide a consistent look independent of browsers. Tested on Chrome, Firefox and Opera.

## Usage 
Use npm to install Undefault in your Angular application:
```
npm install undefault
```

Import Undefault in your top level styling file, by default 'styles.scss':
```
@import 'undefault';
```

To overwrite Undefault's default variables, define the variable in your top level styling file before importing Undefault: 
```
$form-element-background-color: pink;

@import 'undefault';
```

To overwrite element specific styling, define the lower level variables in your top level styling file. Overwriting more specific variables will cause more general variables to be overwritten. Variables like `$form-element-text-color` style all types of form elements like `<input>` and `<select>`, whereas variables like `$input-border-color` will only affect `<input>` elements. For example, you can overwrite `$form-element-height` and `$input-height` in any order, but `$input-height` will win. 
```
$input-height: 50px;
$form-element-height: 48px;

@import 'undefault';
```

## Soon
This package is brand new and is still in development. Next up is styling checkboxes, and testing on IE and Edge.

## Variable list
### General
```
$undefault-font-family
$undefault-font-size
```
### Form elments
```
$form-element-border-color
$form-element-border-radius
$form-element-border-style
$form-element-border-width
$form-element-font-size
$form-element-font-family
$form-element-background-color
$form-element-height
$form-element-padding
$form-element-placeholder-color
$form-element-text-color

$form-element-focus-color
$form-element-focus-shadow

$form-element-text-color-hover
$form-element-background-color-hover
$form-element-border-color-hover

$form-element-text-color-disabled
$form-element-background-color-disabled
$form-element-border-color-disabled
```

### Select
```
$select-arrow-url
$select-arrow-url-disabled

$select-border-color
$select-border-radius
$select-border-style
$select-border-width
$select-background-color
$select-height
$select-padding
$select-placeholder-color:
$select-text-color

$select-focus-color
$select-focus-shadow

$select-text-color-hover
$select-background-color-hover
$select-border-color-hover

$select-text-color-disabled
$select-background-color-disabled
$select-border-color-disabled
```

### Input
```
$input-border-color
$input-border-radius
$input-border-style
$input-border-width
$input-background-color
$input-height
$input-padding
$input-placeholder-color
$input-text-color

$input-focus-color
$input-focus-shadow

$input-text-color-hover
$input-background-color-hover
$input-border-color-hover

$input-text-color-disabled
$input-background-color-disabled
$input-border-color-disabled
```
