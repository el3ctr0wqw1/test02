# Contributing to launch.css

First of all, thank you for considering contributing to launch.css! This document provides guidelines and instructions to help you contribute effectively.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Environment](#development-environment)
- [Making Contributions](#making-contributions)
- [Coding Standards](#coding-standards)
- [Pull Request Process](#pull-request-process)
- [Documentation](#documentation)

## Getting Started

launch.css is a classless CSS framework that aims to help developers build websites quickly without having to worry about styling initially. The project is built with Sass and uses a modular approach to make maintenance and contributions easier.

## Development Environment

### Prerequisites

- Node.js (v22+)
- pnpm

### Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/launch.css.git`
3. Navigate to the project: `cd launch.css`
4. Install dependencies: `pnpm install`
5. Start development: `pnpm dev`

## Making Contributions

### Types of Contributions

- **Bug fixes**: Fixing issues with existing components
- **New features**: Adding new components or functionality
- **Documentation**: Improving or adding documentation
- **Performance**: Optimizing CSS output

### Workflow

1. Create a new branch for your contribution:
    ```
    git checkout -b feature/your-feature-name
    ```
2. Make your changes, following the [coding standards](#coding-standards)

3. Test your changes:

    - Ensure styles render correctly across different browsers
    - Check that the CSS output is optimized

4. Commit your changes with descriptive commit messages

## Coding Standards

### Sass Guidelines

- Use variables defined in `_variables.scss` for colors, spacing, etc.
- Maintain the classless approach - styles should target semantic HTML elements or aria attributes
- Keep specificity as low as possible
- Use mixins for repeatable patterns

### CSS Output Guidelines

- Keep the CSS output minimal and optimized
- Avoid unnecessary nesting that creates complex selectors
- Ensure compatibility with modern browsers

## Pull Request Process

1. Update the README.md or documentation with details of your changes if needed
2. Make sure your code passes all tests
3. Submit your pull request with a clear description of the changes
4. Reference any related issues in your pull request

## Documentation

When adding new features or components:

1. Document how to use it in the appropriate section of the documentation
2. Include examples of the HTML structure required
3. Explain any customization options available

## Questions?

If you have any questions or need help, feel free to open an issue or reach out to the maintainers.

Thank you for contributing to launch.css!
