# mediaqueries mixins for SCSS projects 
Mixins for comforatble using media queries <br>
Mobile first oriented

### Bower install

```
$ bower install media-bootstrap-sass
```

### How to use
```
$ bower install media-bootstrap-sass
```


#### Mobile first

##### SCSS
```
header{
  color: #000;

  @include xs{
    color: #101;
  }

  @include lg{
    color: #eee;
  }

  @include max-sm{
    color: darkgreen;
  }

  @include xs-sm{
    color: burlywood;
  }

  @include xs-lg{
    color: #fff;
  }

  @include max-sm-pre{
    color: darkgray;
  }
}
```

#### CSS (compiled)
```
header {
    color: #000;
}

@media screen and (min-width: 480px) {
    header {
        color: #101;
    }
}

@media screen and (min-width: 1170px) {
    header {
        color: #eee;
    }
}

@media screen and (max-width: 768px) {
    header {
        color: darkgreen;
    }
}

@media (min-width: 480px) and (max-width: 768px) {
    header {
        color: burlywood;
    }
}

@media (min-width: 480px) and (max-width: 1170px) {
    header {
        color: #fff;
    }
}

@media screen and (max-width: 991px) {
    header {
        color: darkgray;
    }
}

```
