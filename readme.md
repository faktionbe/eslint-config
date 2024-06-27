# ESLINT-CONFIG-FAKTION

# install

`npm install eslint@8.57.0 eslint-config-faktion@github:faktionbe/eslint-config-faktion prettier@3.3.2`

# .eslintrc.cjs node

```
module.exports = {
  extends: ["faktion/node"],
  parserOptions: {
    project: "tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
```

# .eslintrc.cjs react

```
module.exports = {
  extends: ["faktion/react"],
  parserOptions: {
    project: "tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
```

# .eslintrc.cjs base

```
module.exports = {
  extends: ["faktion"],
  parserOptions: {
    project: "tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
```

# Roadmap

- [ ] Bump eslint to v9
- [ ] Publish on npm
