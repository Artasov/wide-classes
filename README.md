# Wide Classes

<img height="78" src="img/logo.png" width="78" alt="Wide Classes Logo"/>

<h1 style="margin: 0;">
    <a target="_blank" href="https://artasov.github.io/wide-classes/">DOCS</a>
</h1>

### Utility CSS classes library for better layout experience
> Supported breakpoints: `xs`, `sm`, `md`, `lg`, `xl`, `2xl` similar to tailwind

## 🚀 Quick Start

### Download the latest [release](https://github.com/Artasov/wide-classes/releases/latest) and include in your project
```html
<link rel="stylesheet" href="wide-classes.min.css">
```


### For modifications and rebuilding
```bash
# Clone repository
git clone https://github.com/Artasov/wide-classes.git
cd wide-classes

# Install dependencies
npm install
```

### Build
```bash 
# Production
npm run build:min

# Watch for changes
npm run watch

# Clean files
npm run clean
```

### Project structure
```
wide-classes/
├── sass/                   # SASS sources
│   ├── _variables.sass     # Variables
│   └── _mixins.sass        # Mixins
├── classes/                # Class modules
│   ├── layout.sass         # Flexbox classes
│   └── transform.sass      # Transform classes
├── wide-classes.sass       # Main file
└── wide-classes.min.css    # Compiled CSS
```

### npm commands
```bash
npm install    # Install dependencies
npm run build # Build CSS (expanded)
npm run build:min # Build CSS (minified)
npm run watch  # Watch for changes
npm run clean  # Clean files
```

## 📄 License

MIT License