# `@xarples/utils`

> A collection of utilities from xarples to the world.

## Install

```js
npm install --save @xarples/utils
```

## Usage

```js
import utils from '@xarples/utils'

utils.encrypt('the_best_password_of_the_world')
```

## API

### encrypt(password: string): Promise<string>

Returns a Promise with version hashed of the given password.

```js
import utils from '@xarples/utils'

utils.encrypt('the_best_password_of_the_world').then((hash) => {
  // do something with the hash
})
```

### randomBytes(length: number): Promise<string>

Returns a Promise with version hashed of the given password.

```js
import utils from '@xarples/utils'

utils.encrypt('the_best_password_of_the_world').then((hash) => {
  // do something with the hash
})
```
