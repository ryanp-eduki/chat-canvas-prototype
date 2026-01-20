# Chat Multi-Page View Prototype

A React-based prototype for displaying AI-generated content in a multi-page A4 format with interactive controls.

## Features

- **A4 Page Layout**: Content displayed in standard A4 dimensions (210mm × 297mm)
- **Multi-Page View**: 4 sample pages stacked vertically with proper spacing
- **Sticky Button Palette**: Navigation and action buttons that stay accessible while scrolling
- **Page Navigation**: Dropdown selector to quickly jump between pages
- **Functional Buttons**:
  - **Copy**: Copy all content to clipboard
  - **Download**: Download content as a text file
  - **Edit**: Placeholder for edit functionality
- **Page Numbers**: Displayed outside each page container for clear identification
- **Smooth Scrolling**: Animated transitions when navigating between pages

## Technology Stack

- React 18
- Vite (build tool)
- CSS Modules
- React Icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/chat-multi-page-view.git
cd chat-multi-page-view
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Project Structure

```
chat-multi-page-view/
├── src/
│   ├── components/
│   │   ├── ButtonPalette.jsx      # Sticky button bar with actions
│   │   ├── ChatCanvas.jsx         # Main container component
│   │   └── ContentPreview.jsx     # Multi-page content display
│   ├── styles/
│   │   ├── ButtonPalette.module.css
│   │   ├── ChatCanvas.module.css
│   │   ├── ContentPreview.module.css
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Usage

- Use the **page dropdown** to navigate between pages
- Click **Copy** to copy all content to clipboard
- Click **Download** to save content as a text file
- The button bar stays visible when scrolling for easy access

## Future Enhancements

- Real PDF generation for downloads
- Editable content mode
- Dynamic page generation from API data
- Print-ready formatting
- Zoom controls
- Dark mode support

## License

MIT

## Acknowledgments

Built with Claude Code
