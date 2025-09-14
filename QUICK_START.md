# Quick Start Guide

Get your React Presentation Framework up and running in minutes!

## 🚀 Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000`

## ✏️ Edit Your Content

1. **Open the content file**
   Edit `src/data/presentationData.js`

2. **Modify the title slide**
   ```javascript
   {
     type: "title",
     title: "Your Presentation Title",
     subtitle: "Your subtitle here",
     author: "Your Name",
     advisor: "Your Advisor",
     program: "Your Program"
   }
   ```

3. **Add content slides**
   ```javascript
   {
     type: "content",
     title: "Your Slide Title",
     content: [
       "Your text here",
       {
         type: "list",
         items: [
           "Point 1",
           "Point 2",
           "Point 3"
         ]
       }
     ]
   }
   ```

## 🎨 Customize Appearance

1. **Change themes**
   - Click the theme buttons in the top-right corner
   - Choose from Light, Dark, or Academic themes

2. **Customize colors**
   - Edit `tailwind.config.js` for color schemes
   - Modify `src/styles/index.css` for custom styles

## 📤 Export Your Presentation

1. **PDF Export**
   - Click the download button in the top-left corner
   - Or run `npm run export-pdf`

2. **HTML Export**
   - Click the settings button for HTML export
   - Or run `npm run export-html`

## 🎮 Controls

- **Navigate**: Use arrow keys or click navigation buttons
- **Fullscreen**: Press `F` or click the fullscreen button
- **Hide controls**: Press `C` to toggle control visibility
- **Exit fullscreen**: Press `ESC`

## 📚 Need More Help?

- **Full Documentation**: See `README.md`
- **Content Management**: See `CONTENT_MANAGEMENT_GUIDE.md`
- **Slide Types**: Check the examples in the content file

## 🎯 Common Tasks

### Add a New Slide
1. Open `src/data/presentationData.js`
2. Add a new object to the `slides` array
3. Choose a slide type: `title`, `content`, `objectives`, `methodology`, or `research-line`

### Change Slide Order
1. Reorder objects in the `slides` array
2. Save the file
3. Refresh your browser

### Add Formatting
Use HTML-like tags in your text:
- `<strong>Bold text</strong>`
- `<em>Italic text</em>`
- `<highlight>Highlighted text</highlight>`

### Create Lists
```javascript
{
  type: "list",
  items: [
    "First item",
    "Second item",
    "Third item"
  ]
}
```

### Add Information Boxes
```javascript
{
  type: "box",
  icon: "💡",
  title: "Tip",
  content: "Your tip or important information here"
}
```

## 🚨 Troubleshooting

**Presentation not loading?**
- Check browser console for errors
- Ensure JSON syntax is correct
- Restart the development server

**Styling issues?**
- Clear browser cache
- Check for syntax errors in CSS
- Verify Tailwind CSS is working

**Export not working?**
- Ensure the build is complete
- Check export script permissions
- Try with a smaller presentation first

## 🎉 You're Ready!

Your React Presentation Framework is now set up and ready to use. Start creating amazing presentations!

---

**Need help?** Check the full documentation in `README.md` or the content management guide in `CONTENT_MANAGEMENT_GUIDE.md`.

