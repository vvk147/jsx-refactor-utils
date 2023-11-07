# jsx-refactor-utils

![npm](https://img.shields.io/npm/v/jsx-refactor-utils)
![Build Status](https://github.com/vvk147/jsx-refactor-utils/workflows/Node.js%20CI/badge.svg)
![License](https://img.shields.io/badge/license-MIT-green)

`jsx-refactor-utils` is an open-source npm library designed to streamline the process of analyzing and refactoring JSX code. With a focus on ease of use and extensibility, `jsx-refactor-utils` provides developers with actionable insights to improve the maintainability and readability of their React codebase.

## Features

- 🧠 **Smart Analysis**: Leverages AST parsing to understand and evaluate your JSX code.
- 🛠️ **Refactoring Suggestions**: Provides clear, actionable refactoring recommendations.
- 📊 **Complexity Reports**: Generates complexity reports to identify areas that need simplification.
- 📝 **Automated Docs**: Auto-generates documentation for better code understanding.
- 🔧 **Customizable Rules**: Tailor the suggestions to fit your team's coding standards.

## Getting Started

### Installation

Install `jsx-refactor-utils` using npm:

```bash
npm install jsx-refactor-utils --save-dev
```

or using yarn:

```bash
yarn add jsx-refactor-utils --dev
```

### Usage

To analyze your JSX code and get refactoring suggestions, import and use `jsx-refactor-utils` as follows:

```javascript
const { analyzeCode, suggestRefactor } = require('jsx-refactor-utils');

const code = `<Your JSX Code Here>`;
const analysis = analyzeCode(code);
const suggestions = suggestRefactor(code);

console.log(analysis, suggestions);
```

## Documentation

For detailed documentation and API references, visit our [GitHub Pages documentation](https://vvk147.github.io/jsx-refactor-utils/).

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

<!-- Your Name - [@your_twitter](https://twitter.com/your_twitter) -->

Project Link: [https://github.com/vvk147/jsx-refactor-utils](https://github.com/vvk147/jsx-refactor-utils)

<!-- ## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. Great READMEs often include:

- References to other related projects
- Links to tutorials that aided in the creation of this project
- Credits to any contributors or maintainers -->

---

Made with ❤️ by Vivek Yaligar
