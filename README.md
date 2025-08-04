# 1fe Sample Widget

A basic sample widget demonstrating core 1fe platform integration patterns. This widget showcases essential platform utilities and serves as a reference implementation for building widgets within the 1fe ecosystem.

## What's in this repository

This sample widget demonstrates:

- **Platform integration** using `@1fe/shell` utilities
- **Event bus communication** between widgets and platform
- **App load time tracking** for performance monitoring
- **Basic widget lifecycle** and contract implementation
- **Antd UI components** integration
- **TypeScript configuration** for widget development

## Prerequisites

- **Node.js** `>= 22`
- **Yarn** (package manager)

## Getting Started

### Development Setup

```bash
# Clone this repository
git clone <repository-url>
cd 1fe-sample-widget

# Install dependencies
yarn install

# Start development server
yarn dev
```

### Project Structure

```text
src/
├── app2.tsx              # Main application component
├── contract.ts           # Widget contract definition
├── declarations.d.ts     # TypeScript declarations
├── root.component.tsx    # Root component wrapper
├── root.component.test.tsx # Component tests
└── widget.ts            # Widget entry point
```

## Development Commands

```bash
# Start development server with hot reloading
yarn dev

# Build widget for production
yarn build:widget

# Lint code
yarn lint

# Format code
yarn format

# Check code formatting
yarn check-format
```

## Widget Features

### Platform Integration

- **App Load Time**: Tracks and reports widget loading performance
- **Event Bus**: Demonstrates inter-widget communication
- **Platform Props**: Access to 1fe platform utilities

### UI Components

- Uses Antd components for consistent UI
- Demonstrates button interactions and state management
- Event handling and user feedback

## Widget Contract

The widget defines its interface in `src/contract.ts`:

```typescript
export interface WidgetEvents {
  // Event definitions for widget communication
}
```

## Configuration

The widget uses the base configuration from `@1fe/sample-widget-base-config` for:

- Environment settings
- Build configurations
- Platform integration setup

## Testing

Unit tests are included for components:

- Test files: `*.test.tsx`
- Uses React Testing Library patterns

## Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Run tests and linting (`yarn lint`)
5. Format your code (`yarn format`)
6. Commit your changes (`git commit -m 'Add feature'`)
7. Push to your branch (`git push origin feature/your-feature`)
8. Open a Pull Request

## Troubleshooting

### Common Issues

- **Build failures**: Ensure Node.js version is >= 22 and dependencies are installed
- **Platform utilities not available**: Check that `@1fe/shell` is properly imported
- **Event bus issues**: Verify event listeners are properly set up and cleaned up

## Getting Help

- **[1fe Documentation](https://1fe.com/getting-started/installation/)** - Complete platform documentation
- **[GitHub Issues](https://github.com/docusign/1fe-sample-widget/issues)** - Report bugs or request features
- **[GitHub Discussions](https://github.com/docusign/1fe-sample-widget/discussions)** - Ask questions and share ideas

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
