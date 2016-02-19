# mediaqueries-bootstrap
Mixins for comforatble using media rules (using Twitter Bootstrap's scss variables)<br>
Mobile first oriented

## Bower install

```
$ bower install media-bootstrap-sass
```

### What it is

This is a little kit for comfortable using media rules. It is specifically targeted to Mobile first.<br>
100% compatible with Twitter Bootstrap 3. 

### How to use

This little kit of mixins is very simple to use. Just copy content of file "_mediaqueries.scss" to your file with mixins or add this to "_mixins.scss" in Twitter Bootstrap source.

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