# Memoi [![Build Status](https://travis-ci.org/morishitter/memoi.svg)](https://travis-ci.org/morishitter/memoi)

Memoize with any storages.

## Installation

```
npm install memoi
```

## Features

- Adopt KVS(ex. memcached, redis), and use same API with memoize.

comming soon.

## Example

```javascript
var memoi = require('memoi');

var fibonacci = memoi.ze(function(n) {
  return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
});

fibonacci(10); // 55
```

## License
The MIT License (MIT)
Copyright (c) 2014 Masaaki Morishita
