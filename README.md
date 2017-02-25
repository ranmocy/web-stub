# Web Interface
Generate placeholder JavaScript code and [JSDoc](http://usejsdoc.org/) from [WebIDL](https://www.w3.org/TR/WebIDL-1/) for IDE auto-completion and type checking.

Optimized for [WebStorm](https://www.jetbrains.com/webstorm/).

Happy hacking!

# Screenshots

Method auto completion
![Method auto completion](screenshots/method_auto_complete.png)

Params auto completion
![Params auto completion](screenshots/params_auto_complete.png)

Params type-sensitive completion
![Params type sensitive completion](screenshots/params_auto_complete_type_sensitive.png)

Params validation
![Params type check](screenshots/params_type_check.png)

# Usage

Clone this library to local `git clone https://github.com/ranmocy/web-interface.git`.
Setup your IDE to add `web-interface/js` folder or any JS file under it to be a library.
Note: Do not include this folder to your production code. This is for IDE only.

WebStorm:
![WebStorm settings](screenshots/webstorm_settings.png)

# Supported API

* [WebIDL2](https://github.com/w3c/webidl2.js)
* [IndexedDB](https://www.w3.org/TR/IndexedDB/)
* [Fetch](https://fetch.spec.whatwg.org/)
* ...Upcoming

# Dev

Install dependencies: `npm install`

To get WebIDL: `node . update`

To generate JS files from WebIDL: `node .`

To test: `node . all && if ! git diff-index --quiet HEAD; then exit 1; fi`

## Dependencies

* [WebIDL2](https://github.com/w3c/webidl2.js)
* [webidl-extract](https://github.com/AndreasMadsen/webidl-extract)

# Contribution

There are ways that you can contribute to this project:

1. Create Issue if you found IDE have issue about the interface. Please find the minimal code snippet that can reproduce the issue. Better with a screenshot.
2. Provide more WebIDL that is commonly used. Please attach the link to W3C definition website like [https://www.w3.org/TR/IndexedDB/](https://www.w3.org/TR/IndexedDB/).
3. Send pull request on main.js. It currently can not handle all cases of WebIDL. Please help me to support more WebIDLs.
