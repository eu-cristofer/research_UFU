# React Presentation Framework

A modern, component-based presentation framework built with React, designed specifically for academic and professional presentations. This framework offers superior component reusability, easy content management, responsive design, and multiple export capabilities.

## 🚀 Features

### ✨ Core Features
- **Component-Based Architecture**: Reusable slide components for consistent design
- **Interactive Elements**: Smooth animations and transitions using Framer Motion
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Multiple Themes**: Light, Dark, and Academic themes with easy switching
- **Export Capabilities**: Export to PDF, HTML, and PowerPoint formats
- **Keyboard Navigation**: Full keyboard support for presentation control
- **Content Management**: JSON-based content configuration for easy editing

### 🎨 Design Features
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Smooth Animations**: Framer Motion powered transitions
- **Customizable Themes**: Easy theme switching and customization
- **Typography**: Professional fonts and text styling
- **Visual Elements**: Icons, highlights, and visual indicators

### 🛠️ Technical Features
- **React 18**: Latest React features and performance optimizations
- **Vite**: Fast development and build process
- **TypeScript Ready**: Full TypeScript support (optional)
- **Hot Reload**: Instant development feedback
- **Modern Build**: Optimized production builds

## 📦 Installation

1. **Clone or download the framework**
   ```bash
   git clone <repository-url>
   cd react-presentation-framework
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Quick Start

### 1. Edit Your Content

Edit the presentation content in `src/data/presentationData.js`:

```javascript
export const presentationData = {
  title: "Your Presentation Title",
  author: "Your Name",
  slides: [
    {
      type: "title",
      title: "Welcome to My Presentation",
      subtitle: "A brief description of what you'll cover",
      author: "Your Name",
      advisor: "Your Advisor",
      program: "Your Program"
    },
    {
      type: "content",
      title: "Main Topic",
      content: [
        {
          type: "list",
          items: [
            "First important point",
            "Second important point",
            "Third important point"
          ]
        }
      ]
    }
    // Add more slides...
  ]
}
```

### 2. Customize Themes

Themes are defined in `src/App.jsx`. You can modify existing themes or create new ones:

```javascript
const themes = {
  light: {
    name: 'Light',
    icon: Sun,
    classes: 'bg-white text-gray-900'
  },
  // Add your custom theme
  custom: {
    name: 'Custom',
    icon: Palette,
    classes: 'bg-purple-50 text-purple-900'
  }
}
```

### 3. Build for Production

```bash
npm run build
```

## 📝 Slide Types

### Title Slide
```javascript
{
  type: "title",
  title: "Your Title",
  subtitle: "Your Subtitle",
  author: "Author Name",
  advisor: "Advisor Name",
  program: "Program Name",
  researchLine: "Research Line"
}
```

### Content Slide
```javascript
{
  type: "content",
  title: "Slide Title",
  content: [
    {
      type: "list",
      items: ["Item 1", "Item 2", "Item 3"]
    },
    {
      type: "nested-list",
      items: [
        {
          text: "Main point",
          subItems: ["Sub-point 1", "Sub-point 2"]
        }
      ]
    },
    {
      type: "box",
      icon: "💡",
      title: "Tip",
      content: "Important information"
    }
  ]
}
```

### Methodology Slide
```javascript
{
  type: "methodology",
  title: "Methodology",
  steps: [
    {
      title: "Step 1",
      description: "Description of step 1",
      items: ["Detail 1", "Detail 2"]
    }
  ]
}
```

### Objectives Slide
```javascript
{
  type: "objectives",
  title: "Objectives",
  generalObjective: "Main objective",
  specificObjectives: [
    "Specific objective 1",
    "Specific objective 2"
  ]
}
```

### Research Line Slide
```javascript
{
  type: "research-line",
  title: "Research Line",
  researchLine: "Research line name",
  concentrationArea: "Area of concentration",
  focus: "Research focus",
  application: "Application area",
  tools: ["Tool 1", "Tool 2", "Tool 3"]
}
```

## 🎮 Controls

### Keyboard Shortcuts
- **Arrow Keys** or **Space**: Navigate slides
- **Home**: Go to first slide
- **End**: Go to last slide
- **F**: Toggle fullscreen
- **C**: Toggle controls visibility
- **ESC**: Exit fullscreen

### Mouse Controls
- **Navigation buttons**: Previous/Next slide
- **Theme selector**: Switch between themes
- **Export buttons**: Export to different formats

## 📤 Export Options

### PDF Export
```bash
npm run export-pdf
```

### HTML Export
```bash
npm run export-html
```

### PowerPoint Export
Use the export button in the presentation interface.

## 🎨 Customization

### Styling
- Modify `src/styles/index.css` for global styles
- Use Tailwind CSS classes for component styling
- Customize themes in `src/App.jsx`

### Components
- Create new slide types in `src/components/slides/`
- Add new components in `src/components/`
- Extend functionality with custom hooks

### Content Management
- Edit `src/data/presentationData.js` for content
- Create multiple presentation files
- Use external data sources (APIs, databases)

## 🏗️ Project Structure

```
react-presentation-framework/
├── src/
│   ├── components/
│   │   └── slides/          # Slide components
│   ├── hooks/               # Custom React hooks
│   ├── data/                # Presentation data
│   ├── styles/              # CSS and styling
│   ├── utils/               # Utility functions
│   ├── App.jsx              # Main application
│   └── main.jsx             # Application entry point
├── scripts/                 # Export scripts
├── public/                  # Static assets
├── dist/                    # Built application
└── package.json             # Dependencies and scripts
```

## 🔧 Development

### Adding New Slide Types

1. Create a new component in `src/components/slides/`
2. Add the component to `src/App.jsx`
3. Update the slide type handling in the render function
4. Add documentation for the new slide type

### Creating Custom Themes

1. Define the theme in `src/App.jsx`
2. Add theme-specific styles in `src/styles/index.css`
3. Test the theme across different slide types

### Extending Export Functionality

1. Add new export functions in `src/hooks/useExport.js`
2. Create export scripts in `scripts/`
3. Add export buttons to the UI

## 📱 Responsive Design

The framework is fully responsive and works on:
- **Desktop**: Full feature set with all controls
- **Tablet**: Optimized layout with touch controls
- **Mobile**: Simplified interface for small screens

## 🎯 Best Practices

### Content Organization
- Keep slides focused on single topics
- Use consistent formatting and styling
- Include visual elements to support text
- Test readability on different screen sizes

### Performance
- Optimize images and assets
- Use lazy loading for large presentations
- Minimize animations on slower devices
- Test export functionality regularly

### Accessibility
- Use semantic HTML elements
- Provide alt text for images
- Ensure good color contrast
- Test with screen readers

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
- Ensure all dependencies are installed
- Check for syntax errors in components
- Verify import paths are correct

**Export Issues**
- Check that the build is complete
- Verify export scripts have proper permissions
- Test with smaller presentations first

**Styling Issues**
- Clear browser cache
- Check Tailwind CSS configuration
- Verify custom styles don't conflict

## 📄 License

MIT License - feel free to use this framework for your academic and professional presentations.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the example presentations

---

**Happy Presenting! 🎉**