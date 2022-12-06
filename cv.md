# Katsiaryna Shakuryna

**DATE OF BIRTH:** 04.10.1989 (33 y.o.)

Juniour front-end developer with a passion for learning

## Contact

- **PHONE:** +48572010559
- **E-MAIL:** [kateshakurina@gmail.com](mailto:kateshakurina@gmail.com)
- **GIT-HUB:** [ShEP-JS](https://github.com/ShEP-JS)
- **CITY:** Białystok, Poland

## Tech Skills

- HTML
- CSS/SASS/SCSS
- JavaScript (basic level)
- Bootstrap
- Figma
- Git

## Code Examples

- Square Every Digit

```
function squareDigits(num){
  let arr= num.toString().split('');
  let newNumberArr= arr.map(item => (+item)**2);
  return +newNumberArr.join('');
}
```

- Calculate average

```
function findAverage(array) {
  let value= array.reduce((sum,item) => sum+item, 0);
  if (value <=0) {
    return 0;
  } else {
  return value/array.length;
  }
}
```
