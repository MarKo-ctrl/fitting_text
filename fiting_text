## Fitting text in a certain space

The challenge is to implement function which takes two arguments, text and width, and formats the text to fit the width.

Your function should divide the given text into lines using newline characters. It should fit as many words into each line as possible without exceeding the given width or splitting any words between two lines. There should not be a space at the beginning or end of any line. The minimum input for the width is 15. Anything below 15 should return "INVALID INPUT"

##### examples

```javascript
const str =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectetur risus. Cras vel urna a tellus dapibus consequat. Duis bibendum tincidunt viverra. Phasellus dictum efficitur sem quis porttitor. Mauris luctus auctor diam id ultrices. Praesent laoreet in enim ut placerat. Praesent a facilisis turpis.'
```

```javascript
textInDiv('A', 1)
// -> "INVALID INPUT"
```

```javascript
textInDiv('Northcoders', 15)
// -> "Northcoders"
```

```javascript
textInDiv('Northcoders Coding Bootcamp', 15)
// -> "Northcoders/n
//     Coding Bootcamp"
```

```javascript
textInDiv('Northcoders Coding Bootcamp', 20)
// -> "Northcoders Coding\n
//     Bootcamp"
```

```javascript
textInDiv('Northcoders Coding Bootcamp', 30)
// -> "Northcoders Coding Bootcamp"
```

```javascript
textInDiv(str, 50)
/* -> "Lorem ipsum dolor sit amet, consectetur adipiscing\n
        elit. Aliquam nec consectetur risus. Cras vel urna\n
        a tellus dapibus consequat. Duis bibendum\n
        tincidunt viverra. Phasellus dictum efficitur sem\n
        quis porttitor. Mauris luctus auctor diam id\n 
        ultrices. Praesent laoreet in enim ut placerat.\n
        Praesent a facilisis turpis."
    */
```

```javascript
textInDiv(str, 30)
/* -> "Lorem ipsum dolor sit amet,\n
        consectetur adipiscing elit.\n
        Aliquam nec consectetur risus.\n
        Cras vel urna a tellus dapibus\n
        consequat. Duis bibendum\n
        tincidunt viverra. Phasellus\n
        dictum efficitur sem quis\n
        porttitor. Mauris luctus\n
        auctor diam id ultrices.\n
        Praesent laoreet in enim ut\n
        placerat. Praesent a facilisis\n
        turpis."
    */
```
