# @faktion-com/eslint-config

A collection of eslint configuration files for consistent development across Faktion projects.

## Overview

This package provides standardized eslint configurations that can be extended in your projects to ensure consistent eslint settings and development experience.

## Installation

```bash
pnpm i --save-dev @faktion-com/eslint-config
```

## Configurations

- **`./base`** - Base configuration for JS/TS projects
- **`./react`** - React applications with Next.js support
- **`./node`** - Node.js backend applications

## Usage

```javascript
// eslint.config.js
import baseConfig from '@faktion-com/eslint-config/base';
export default baseConfig;

// For React
import reactConfig from '@faktion-com/eslint-config/react';
export default reactConfig;

// For Node.js
import nodeConfig from '@faktion-com/eslint-config/node';
export default nodeConfig;
```
