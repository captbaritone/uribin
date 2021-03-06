# UriBin

A self-replicating paste bin that lives in URL shorteners

UriBin is a paste bin app which is encoded as a data URI. You can modify its
content and then save that new content (and the surrounding app) to a new
TinyUrl link.

**Try it out!: http://tinyurl.com/porqfo9**

## How does it work?

UriBin combines the following three realizations:

1. Using a [data
   URI](https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs) you can
   write an HTML/JavaScript app that is completely contained within a link.

2. You can get TinyUrl to host this app by asking it to "shorten" your data
   URI.

3. A data URI app could modify its internal state, express that new state as
   a new URI, and ask TinyUrl to shorten that URI.

## Build process

Since the app modifies its own source, it must be loaded as a data URI. If
you want to modify the code and rebuild the data URI yourself, you will need to
run the Grunt build script. If you have npm installed, it should be as easy as:

    npm install
    grunt

You should then find the new URI in `build/index.url`

## Limitations

* TinyUrl seems to cap URLs at around 8,000 characters. Our app already eats up
  ~2,000 of those
* TinyUrl is the only URL shortener I could find that will shorten anonymous
  data URIs

## Related projects

* [An Auto-Updating Data URI Text Editor](http://iamnotagoodartist.com/web/an-auto-updating-data-uri-text-editor/)
* [Hashify.me](http://hashify.me/)
