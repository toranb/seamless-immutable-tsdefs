# type defs for seamless-immutable 7

## install

open the tsconfig.json file and add this to your paths

```js
{
  "compilerOptions": {
    "target": "es2015",
    "module": "es2015",
    "moduleResolution": "node",
    "paths": {
      "app/*": ["app/*"],
      "seamless-immutable": ["node_modules/seamless-immutable-tsdefs/index.d.ts"]
    }
  },
  "include": [
    "**/*.ts"
  ]
}
```
