# Content Management Guide

This guide explains how to easily manage and edit your presentation content using the React Presentation Framework.

## 📋 Overview

The framework uses a JSON-based content management system that makes it easy to:
- Edit presentation content without touching code
- Create multiple presentations
- Share content between presentations
- Version control your content
- Collaborate with others

## 🗂️ Content Structure

### Main Data File
All presentation content is stored in `src/data/presentationData.js`:

```javascript
export const presentationData = {
  title: "Presentation Title",
  author: "Your Name",
  slides: [
    // Array of slide objects
  ]
}
```

### Slide Object Structure
Each slide follows this basic structure:

```javascript
{
  type: "slide-type",     // Required: defines the slide component
  title: "Slide Title",   // Required: main heading
  // Additional properties based on slide type
}
```

## 📝 Slide Types and Content

### 1. Title Slide
Perfect for opening and closing slides.

```javascript
{
  type: "title",
  title: "Proposta de Dissertação de Mestrado",
  subtitle: "Brief description of your research",
  author: "Your Full Name",
  advisor: "Advisor Name",
  program: "Program Name (e.g., Engenharia Mecânica)",
  researchLine: "Research line description"
}
```

**Properties:**
- `title` (required): Main title
- `subtitle` (optional): Subtitle or description
- `author` (optional): Author name
- `advisor` (optional): Advisor name
- `program` (optional): Academic program
- `researchLine` (optional): Research line

### 2. Content Slide
Versatile slide for any content with lists, text, and boxes.

```javascript
{
  type: "content",
  title: "Your Slide Title",
  content: [
    // Array of content blocks
  ]
}
```

**Content Block Types:**

#### Text Block
```javascript
"Simple text paragraph that will be displayed as-is."
```

#### List Block
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

#### Nested List Block
```javascript
{
  type: "nested-list",
  items: [
    {
      text: "Main point with sub-points",
      subItems: [
        "Sub-point 1",
        "Sub-point 2"
      ]
    },
    {
      text: "Another main point",
      subItems: [
        "Another sub-point"
      ]
    }
  ]
}
```

#### Information Box Block
```javascript
{
  type: "box",
  icon: "💡",  // Emoji or icon
  title: "Box Title",
  content: "Important information or tips"
}
```

### 3. Objectives Slide
Structured slide for research objectives.

```javascript
{
  type: "objectives",
  title: "Objetivos",
  generalObjective: "Main research objective",
  specificObjectives: [
    "Specific objective 1",
    "Specific objective 2",
    "Specific objective 3"
  ]
}
```

### 4. Methodology Slide
Step-by-step methodology presentation.

```javascript
{
  type: "methodology",
  title: "Metodologia",
  steps: [
    {
      title: "Step 1: Planning",
      description: "Brief description of this step",
      items: [
        "Detail 1",
        "Detail 2",
        "Detail 3"
      ]
    },
    {
      title: "Step 2: Implementation",
      description: "What happens in this step",
      items: [
        "Implementation detail 1",
        "Implementation detail 2"
      ]
    }
  ]
}
```

### 5. Research Line Slide
Academic information about your research area.

```javascript
{
  type: "research-line",
  title: "Linha de Pesquisa",
  researchLine: "Research line name",
  concentrationArea: "Area of concentration",
  focus: "Research focus area",
  application: "Practical applications",
  tools: [
    "Tool 1",
    "Tool 2",
    "Tool 3"
  ]
}
```

## 🎨 Text Formatting

### Inline Formatting
You can use HTML-like tags for text formatting:

```javascript
"<strong>Bold text</strong>"
"<em>Italic text</em>"
"<highlight>Highlighted text</highlight>"
```

### Mixed Formatting
```javascript
"<strong>Important point</strong> with <highlight>highlighted text</highlight> and <em>emphasis</em>."
```

## 📚 Complete Example

Here's a complete presentation example:

```javascript
export const presentationData = {
  title: "My Research Presentation",
  author: "John Doe",
  slides: [
    {
      type: "title",
      title: "Research Proposal",
      subtitle: "Advanced Machine Learning Applications",
      author: "John Doe",
      advisor: "Dr. Jane Smith",
      program: "Computer Science",
      researchLine: "Artificial Intelligence and Machine Learning"
    },
    {
      type: "content",
      title: "Introduction",
      content: [
        "Welcome to my research presentation on advanced machine learning applications.",
        {
          type: "list",
          items: [
            "Overview of current state",
            "Research objectives",
            "Proposed methodology",
            "Expected contributions"
          ]
        }
      ]
    },
    {
      type: "objectives",
      title: "Research Objectives",
      generalObjective: "Develop novel machine learning algorithms for real-world applications",
      specificObjectives: [
        "Analyze existing algorithms",
        "Propose improvements",
        "Implement and test solutions",
        "Validate results"
      ]
    },
    {
      type: "methodology",
      title: "Research Methodology",
      steps: [
        {
          title: "Literature Review",
          description: "Comprehensive analysis of existing work",
          items: [
            "Survey recent papers",
            "Identify gaps",
            "Document findings"
          ]
        },
        {
          title: "Algorithm Development",
          description: "Create new algorithms",
          items: [
            "Design new approaches",
            "Implement prototypes",
            "Test performance"
          ]
        }
      ]
    },
    {
      type: "research-line",
      title: "Research Context",
      researchLine: "Artificial Intelligence",
      concentrationArea: "Computer Science",
      focus: "Machine Learning Algorithms",
      application: "Real-world problem solving",
      tools: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Jupyter Notebooks"
      ]
    },
    {
      type: "title",
      title: "Thank You!",
      subtitle: "Questions and Discussion",
      author: "John Doe"
    }
  ]
}
```

## 🔄 Content Management Workflow

### 1. Planning Your Presentation
- Outline your main topics
- Decide on slide types for each section
- Plan the flow and transitions

### 2. Creating Content
- Start with the title slide
- Add content slides with your main points
- Include methodology and objectives slides
- End with a thank you slide

### 3. Editing Content
- Edit the JSON file directly
- Use a text editor with JSON syntax highlighting
- Validate JSON syntax before testing

### 4. Testing Changes
- Run `npm run dev` to see changes
- Navigate through all slides
- Check formatting and layout
- Test on different screen sizes

### 5. Finalizing
- Review all content for accuracy
- Check spelling and grammar
- Ensure consistent formatting
- Test export functionality

## 💡 Tips and Best Practices

### Content Organization
- Keep slides focused on single topics
- Use consistent terminology
- Include visual breaks between sections
- End with clear conclusions

### Text Formatting
- Use formatting sparingly for emphasis
- Keep text concise and readable
- Use bullet points for lists
- Highlight key information

### Slide Flow
- Start with an engaging title slide
- Provide clear context and motivation
- Present objectives clearly
- Explain methodology step-by-step
- End with contributions and thanks

### Technical Tips
- Always validate JSON syntax
- Use consistent indentation
- Comment complex content structures
- Keep backup copies of working versions

## 🛠️ Advanced Content Management

### Multiple Presentations
Create multiple data files for different presentations:

```javascript
// src/data/presentation1.js
export const presentation1Data = { /* ... */ }

// src/data/presentation2.js
export const presentation2Data = { /* ... */ }
```

### Dynamic Content
You can load content from external sources:

```javascript
// Load from API
const loadPresentationData = async () => {
  const response = await fetch('/api/presentation')
  return response.json()
}

// Load from file
import { presentationData } from './data/myPresentation.js'
```

### Content Validation
Add validation to ensure content structure:

```javascript
const validateSlide = (slide) => {
  if (!slide.type || !slide.title) {
    throw new Error('Slide must have type and title')
  }
  // Add more validation rules
}
```

## 🔍 Troubleshooting

### Common Issues

**JSON Syntax Errors**
- Check for missing commas
- Verify quote marks are properly closed
- Use a JSON validator

**Missing Content**
- Ensure all required properties are present
- Check property names match exactly
- Verify content structure

**Formatting Issues**
- Check HTML-like tags are properly closed
- Ensure special characters are escaped
- Test formatting in the browser

### Getting Help
- Check the browser console for errors
- Validate JSON syntax online
- Review the example presentations
- Test with simple content first

---

This content management system makes it easy to create professional presentations without needing to write code. Focus on your content while the framework handles the presentation!

