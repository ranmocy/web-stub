# web-interface
Generate placeholder JavaScript code from WebIDL for IDE auto-completion.

# Dev

Install deps
```bash
cd <project_path>
npm install
```

To get WebIDL:
```bash
node . update
```
Or manually:
```bash
curl https://www.w3.org/TR/IndexedDB/ | node_modules/webidl-extract/cli.js > idl/IndexedDB.webidl
```

To generate JS files from WebIDL:
```bash
node .
```

To test:
```bash
node . all
git diff
```
Should be empty result.
