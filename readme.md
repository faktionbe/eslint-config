# @faktion/eslint-config

ESLint configurations for JavaScript and TypeScript projects.

## Configurations

- **`./base`** - Base configuration for JS/TS projects
- **`./react`** - React applications with Next.js support
- **`./node`** - Node.js backend applications

## Usage

```javascript
// eslint.config.js
import baseConfig from '@faktion/eslint-config/base';
export default baseConfig;

// For React
import reactConfig from '@faktion/eslint-config/react';
export default reactConfig;

// For Node.js
import nodeConfig from '@faktion/eslint-config/node';
export default nodeConfig;
```

## Features

- TypeScript ESLint with strict rules
- React and React Hooks support
- JSX accessibility rules
- Modern ESLint flat config format
