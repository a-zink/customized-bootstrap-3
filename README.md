# Customized Bootstrap 3 Project Template

This is a project template for building a customized version of [Bootstrap](http://getbootstrap.com/) 3 based on the [SASS sources](http://getbootstrap.com/css/#sass).

* Build environment is managed using [npm](https://www.npmjs.com/)
* Dependencies are managed using [Bower](http://bower.io/)
* Build is performed using [Grunt](http://gruntjs.com/)
* SASS compilation is done with Compass using [Ruby](https://rubygems.org/gems/compass/versions/1.0.3)


## Build

Requires NodeJS, Ruby, and Compass gem!

```
npm install
grunt
```

You can also run 
```
grunt watch
``` 
during development.

You might need to configure your proxy settings! Create a [.npmrc](https://docs.npmjs.com/files/npmrc) file or use the _proxy_ and _https-proxy_ command line options.

## Usage

Simply get the css files (manually|bower) contained in the **dist** directory and include them in your html. The compiled css file completely contains Bootstrap, thus there is no need to additionally include bootstrap.css files. However, some Bootstrap features require JavaScript. If you want to use those, additionally include the jquery and bootstrap js files.

```
<link rel="stylesheet" href="css/my-bootstrap.min.css" />
```

### Bower

You can easily reference your customized bootstrap artifact from bower, e.g.

```
bower install https://github.com/andreas-zink/customized-bootstrap-3.git#master
```

## FAQ

* How does it work?
  
  The Bootstrap sass sources are compiled together with some custom sass files. The result is a customized version of boostrap.css, called my-bootstrap.css. There are no modifications to the original sources, just additional sass files on top.

* Why not use bootstrap.css and just override stuff?
  
  Often people include the original bootstrap.css files and then override stuff by adding an additional custom.css afterwards, e.g. like described [here](https://bootstrapbay.com/blog/customize-bootstrap/).
  This has some advantages of course, e.g. manual control over the used bootstrap version. However, I think this is only feasible for minor customizations. For extensive customizations, it's much easier to build on the sass sources. For example changing the color scheme for all elements simply means changing a variable and not to override hundreds of css classes manually. Another problem is that you sometimes can't simply override things because there is a more specific css rule in place. Hence you'll need to adapt the original css selectors and finally end up with an almost complete copy of bootstrap. 

* Bootstrap is too big! How can I reduce the size?
  
  Simply pick the Bootstrap SASS source files you need instead of including everything.


