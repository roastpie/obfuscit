<div align="center">
    <img src="https://m1r.ai/9/c33f3.png" alt="Tailwind logo">
</div>
<br/>
<div align="center">
  <!-- Downloads Permonth -->
  <a href="https://npmjs.org/package/obfuscit"><img src="https://img.shields.io/npm/dm/obfuscit.svg" alt="Downloads"></a>
  <a href="LICENSE.md"><img src="https://img.shields.io/github/license/waffpi/obfuscit" alt="License"></a>
  <a href="https://npmjs.com/package/obfuscit"><img src="https://img.shields.io/npm/v/obfuscit.svg" alt="npm package"></a>
  <a href="https://github.com/waffpi/obfuscit">
    <img src="https://badgen.net/github/stars/waffpi/obfuscit" alt="Star">
  </a>
  <a href="https://pr.new/waffpi/tailwind-obfuscato"><img src="https://developer.stackblitz.com/img/start_pr_dark_small.svg" alt="Start new PR in StackBlitz Codeflow"></a>
</div>
<br/>

# Obfuscit ⚡

> Classes Obfuscator for Svelte. Protect your TailwindCSS, Bulma, Bootstrap and more classes from unauthorized copying. Current support includes Svelte, with upcoming features to support Vite, Webpack and Turbopack as well.

- 💡 Easy to Use
- ⚡️ Lightweight and Fast
- 🛠️ Customizable
- 📦 Support for Multiple Bundlers
- 🔩 Comprehensive Functionalities
- 🔑 Robust Protection for your TailwindCSS, Bulma, Bootstrap and more

> [!NOTE]  
> Some classes like `space-{direction}-{size}` and `divide-{direction}-{size}` may not be obfuscated due this time. I'm working on it.

<details>
<summary>Table of Contents</summary>
<ol>
  <li>
    <a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
    </ul>
  </li>
  <li><a href="#roadmap">Roadmap</a></li>
  <li>
    <a href="#usage">Usage</a>
    <ul>
      <li><a href="#add-obfuscit-to-your-sveltekit-project">
      Add Obfuscit to your SvelteKit Project
      </a></li>
      <li><a href="#update-build-command">
      Update build command
      </a></li>
    </ul>
  </li>
  <li>
  <a href="#command-properties">Command Properties</a>
    <ul>
      <li>
      <a href="#obfus">obfus</a>
        <ul>
          <li><a href="#arguments">Arguments</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#authors">Authors</a></li>
</ol>
</details>

## Notice

**Important:** This package is currently not being updated. Due to other commitments, I am unable to maintain or update this project at this time. When I have more availability, I plan to release a new version written in Rust with support for Bun and other platforms. Thank you for your understanding and patience.

## Roadmap

- [x] Customizable classname length/prefix/suffix
- [x] Support for SveteKit
- [x] Support for Vite
- [ ] Support for Webpack
- [ ] Support for Turbopack

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

### Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

To install and set up the library, run:

```sh
$ npm install -D obfuscit
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev obfuscit
```

Or if you prefer using PNPM:

```sh
$ pnpm add -D obfuscit
```

## Usage

### Add Obfuscit to your SvelteKit Project

```javascript
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Obfuscit from 'obfuscit';

export default defineConfig({
	plugins: [
		sveltekit({}),
		Obfuscit({
			length: 4,
			prefix: 'obf-',
			suffix: '-test'
		})
	]
});


```

### Update `build` command
Update your `package.json` to include the `twobfus` command in the `build` script.

```json
{
  "scripts": {
    "build": "obfus --clean && <your-build-command>"
  }
}
```

## Command Properties

### twobfus

```sh
$ npx obfus --clean
```

#### Arguments

`clean` - Clean old obfuscated class mappings

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Authors

- **[waffpi](https://github.com/waffpi)** - _Noob_

See also the list of [contributors](https://github.com/waffpi/obfuscit/contributors) who participated in this project.

## License

[MIT License](LICENSE.md) © waffpi
