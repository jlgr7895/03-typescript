# Learning Node + TypeScript

## Setting

- Start node project

```shell
npm i -y
```

- Add TypeScript dependencies

```shell
npm i -D typescript @types/node
```

- Initialize TypeScript configuration file

```shell
npx tsc --init --outDir dist/ --rootDir src
```

- Set up Nodemon and Node-TS

```shell
npm install -D ts-node nodemon
```

- Add nodemon.json

```json
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/app.ts"
}
```

- Add scripts to package.json

```
"dev": "nodemon"
//"dev": "npx nodemon" // En caso de no querer instalar nodemon
"build": "rimraf ./dist && tsc",
"start": "npm run build && node dist/app.js"
```

- Add rimraf dependency

```shell
npm install -D rimraf

```
