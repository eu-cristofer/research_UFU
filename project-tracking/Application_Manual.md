# 📚 Application Manual - Project Tracking System

## 🎯 Overview

This document provides a comprehensive guide to the **Project Tracking System** - a specialized tool designed for managing master's dissertation projects, specifically tailored for the research project **"Diagnóstico de Falhas em Máquinas Rotativas por Meio de Simulações Numéricas e Análise de Espectros de Ordem Superior"**.

**Author**: Cristofer Antoni Souza Costa  
**Orientador**: Prof. Dr. Aldemir Cavallini Jr.  
**Program**: Pós-Graduação em Engenharia Mecânica - UFU  
**Research Line**: Mecânica dos Sólidos e Vibrações  

---

## 🏗️ Technical Architecture

### Core Technologies

The Project Tracking System is built using modern web technologies:

#### **Backend Technologies**
- **Node.js** (≥16.0.0) - Runtime environment
- **Express.js** (^4.18.2) - Web framework for REST API
- **SQLite3** (^5.1.6) - Lightweight database for data persistence

#### **Frontend Technologies**
- **HTML/CSS/JavaScript** - Web dashboard interface
- **Chart.js** (^4.4.0) - Interactive data visualization

#### **Data Processing & Reporting**
- **Moment.js** (^2.29.4) - Date/time manipulation
- **PDFKit** (^0.13.0) - PDF report generation
- **Handlebars** (^4.7.8) - Template engine for reports
- **CSV-Writer** (^1.6.0) - CSV export functionality
- **fs-extra** (^11.1.1) - Enhanced file system operations

#### **Automation & Scheduling**
- **node-cron** (^3.0.3) - Automated task scheduling
- **nodemailer** (^6.9.7) - Email notifications (planned)

#### **Development Tools**
- **nodemon** (^3.0.1) - Development server with auto-restart

### System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Web Dashboard │    │  Command Line   │    │   API Server    │
│   (HTML/CSS/JS) │    │   Interface     │    │   (Express.js)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   Data Layer    │
                    │ (JSON + SQLite) │
                    └─────────────────┘
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 16.0.0 or higher
- npm 8.0.0 or higher
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation Steps

1. **Navigate to Project Directory**
   ```bash
   cd project-tracking
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the System**
   ```bash
   npm start
   ```

4. **Verify Installation**
   - Web Dashboard: http://localhost:3001/dashboard
   - API Endpoint: http://localhost:3001/api/project

### Proxy Configuration (if needed)
```bash
# Configure proxy settings
npm config set proxy http://USERNAME:PASSWORD@PROXY_ADDRESS:PROXY_PORT
npm config set https-proxy http://USERNAME:PASSWORD@PROXY_ADDRESS:PROXY_PORT
```

---

## 📊 System Features

### 1. Real-time Progress Monitoring
- **Visual Dashboard**: Interactive charts and graphs
- **Progress Tracking**: Phase and activity completion percentages
- **Time Tracking**: Detailed time logging and analysis
- **Milestone Management**: Deadline tracking and alerts

### 2. Interactive Command-Line Interface
- **Daily Progress Updates**: Quick status updates
- **Activity Management**: Add, update, and track activities
- **Time Logging**: Precise time tracking (0.5-hour increments)
- **Risk Assessment**: Risk identification and mitigation tracking

### 3. Automated Report Generation
- **PDF Reports**: Executive summaries for advisors
- **HTML Reports**: Visual reports for web viewing
- **CSV Exports**: Data for spreadsheet analysis
- **Milestone Reports**: Specific milestone tracking

### 4. Risk Management
- **Risk Identification**: Proactive risk assessment
- **Mitigation Planning**: Risk response strategies
- **Status Monitoring**: Continuous risk evaluation
- **Alert System**: Early warning notifications

---

## 🎯 Project Structure

### Dissertation Phases

The system manages **6 main phases** of the dissertation:

1. **Revisão Bibliográfica** (Completed - 100%)
   - Literature review and ROSS familiarization
   - Deliverables: Complete literature review, ROSS mastery, methodology definition

2. **Modelagem Numérica** (In Progress - 60%)
   - Finite element model development and basic validation
   - Deliverables: Basic numerical model, fault models, initial validation

3. **Simulações Sistemáticas** (Pending - 0%)
   - Systematic simulation campaigns with different parameters
   - Deliverables: Complete simulation dataset, sensitivity analysis, literature validation

4. **Análise HOS** (Pending - 0%)
   - HOS algorithm implementation and feature extraction
   - Deliverables: HOS algorithms, extracted features, pattern analysis

5. **Validação e Classificação** (Pending - 0%)
   - Physical validation and ML classifier development
   - Deliverables: Literature validation, ML classifiers, performance evaluation

6. **Redação e Defesa** (Pending - 0%)
   - Final dissertation writing and defense preparation
   - Deliverables: Complete dissertation, defense presentation, final defense

### Data Structure

The system stores data in `data/project-data.json` with the following structure:

```json
{
  "project": {
    "title": "Project title",
    "author": "Author name",
    "advisor": "Advisor name",
    "program": "Program name",
    "research_line": "Research line",
    "start_date": "YYYY-MM-DD",
    "expected_end_date": "YYYY-MM-DD",
    "current_date": "YYYY-MM-DD"
  },
  "phases": [
    {
      "id": "number",
      "name": "Phase name",
      "description": "Phase description",
      "start_date": "YYYY-MM-DD",
      "end_date": "YYYY-MM-DD",
      "status": "pending|in_progress|completed",
      "progress": "number (0-100)",
      "deliverables": ["string"],
      "milestones": [
        {
          "name": "string",
          "date": "YYYY-MM-DD",
          "status": "pending|completed"
        }
      ]
    }
  ],
  "activities": [
    {
      "id": "number",
      "phase_id": "number",
      "title": "string",
      "description": "string",
      "start_date": "YYYY-MM-DD",
      "end_date": "YYYY-MM-DD",
      "status": "pending|in_progress|completed|blocked|cancelled",
      "progress": "number (0-100)",
      "time_spent": "number (hours)",
      "notes": "string"
    }
  ],
  "risks": [
    {
      "id": "number",
      "title": "string",
      "description": "string",
      "probability": "low|medium|high",
      "impact": "low|medium|high",
      "status": "active|mitigated|resolved",
      "mitigation": "string",
      "owner": "string",
      "date_identified": "YYYY-MM-DD",
      "review_date": "YYYY-MM-DD"
    }
  ],
  "metrics": {
    "total_phases": "number",
    "completed_phases": "number",
    "in_progress_phases": "number",
    "pending_phases": "number",
    "overall_progress": "number (0-100)",
    "total_activities": "number",
    "completed_activities": "number",
    "in_progress_activities": "number",
    "total_time_spent": "number (hours)",
    "estimated_total_time": "number (hours)"
  }
}
```

---

## 🎮 User Interface Guide

### Command-Line Interface

The primary interface for daily operations:

```bash
npm run track
```

**Available Options:**
1. **Ver status atual** - View current project status
2. **Atualizar fase** - Update phase progress
3. **Atualizar atividade** - Update activity progress
4. **Adicionar atividade** - Add new activity
5. **Registrar tempo** - Log time spent
6. **Ver marcos** - View milestones
7. **Ver riscos** - View risks

### Web Dashboard

Access the visual dashboard at: http://localhost:3001/dashboard

**Dashboard Sections:**
- **Métricas Gerais**: Overall progress, completed phases, time spent
- **Gráficos**: Progress by phase, time spent by activity
- **Fases do Projeto**: Status and progress of each phase
- **Marcos**: Upcoming milestones and deadlines
- **Riscos**: Identified risks and mitigations

### API Endpoints

The system provides REST API endpoints:

- `GET /api/project` - Complete project data
- `GET /api/progress` - General progress information
- `GET /api/milestones` - Milestone list
- `GET /api/risks` - Identified risks
- `GET /api/dashboard` - Dashboard data
- `POST /api/activity` - Add activity
- `PUT /api/activity/:id` - Update activity
- `PUT /api/phase/:id` - Update phase

---

## 📅 Daily Workflow Guide

### Morning Routine (5 minutes)

1. **Check Current Status**
   ```bash
   npm run track
   # Select: "1. Ver status atual"
   ```

2. **Review Critical Milestones**
   ```bash
   npm run milestone
   ```

3. **Open Dashboard**
   - Visit: http://localhost:3001/dashboard
   - Review: General metrics, progress charts, risk alerts

### During Work

**Log Time Spent**
```bash
npm run track
# Select: "5. Registrar tempo"
# Choose activity and enter time (e.g., "2.5" for 2.5 hours)
```

### End of Day (5 minutes)

1. **Update Progress**
   ```bash
   npm run track
   # Select: "2. Atualizar fase" or "3. Atualizar atividade"
   # Enter new progress percentage
   ```

2. **Check Risks**
   ```bash
   npm run track
   # Select: "7. Ver riscos"
   ```

### Weekly Routine (30 minutes)

1. **Generate Reports**
   ```bash
   npm run report
   ```

2. **Backup Data**
   ```bash
   npm run backup
   ```

---

## 📊 Report Generation

### Available Commands

```bash
# Generate all reports
npm run report

# Check milestones
npm run milestone

# Backup data
npm run backup

# Export data
npm run export
```

### Report Types

1. **PDF Reports** (`reports/relatorio-projeto-YYYY-MM-DD.pdf`)
   - Executive summary format
   - Professional presentation for advisors
   - Complete project overview

2. **HTML Reports** (`reports/relatorio-projeto-YYYY-MM-DD.html`)
   - Visual format for web viewing
   - Interactive charts and graphs
   - Detailed progress analysis

3. **CSV Reports** (`reports/relatorio-projeto-YYYY-MM-DD.csv`)
   - Tabular data for spreadsheet analysis
   - Raw data export
   - Statistical analysis support

4. **Milestone Reports** (`reports/marcos-projeto-YYYY-MM-DD.csv`)
   - Specific milestone tracking
   - Deadline monitoring
   - Progress toward goals

---

## 🎯 Best Practices

### Progress Tracking

1. **Consistency**
   - Update progress daily
   - Log time immediately after work sessions
   - Use consistent time format (0.5-hour increments)

2. **Accuracy**
   - Progress percentages should reflect actual completion
   - Time logging should be precise
   - Document obstacles and insights in notes

3. **Dashboard Usage**
   - Check web dashboard daily for visual overview
   - Look for trends and patterns in productivity
   - Monitor risks and upcoming deadlines

### Risk Management

1. **Risk Identification**
   - Review risks weekly using `npm run track` → option 7
   - Update risk status when mitigated
   - Add new risks as they're identified

2. **Risk Categories**
   - **Technical Risks**: Complexity of ROSS library, data limitations
   - **Schedule Risks**: Milestone delays, time overruns
   - **Resource Risks**: Hardware/software availability

### Data Management

1. **Backup Strategy**
   - Daily backups before major changes
   - Weekly comprehensive backups
   - Monthly data exports

2. **Data Integrity**
   - Regular validation of JSON data
   - Consistent data entry practices
   - Regular system maintenance

---

## 🚨 Troubleshooting

### Common Issues

#### Dashboard Won't Load
```bash
# Check server status
npm start

# Verify port 3001 is available
curl http://localhost:3001/api/project
```

#### Data Not Updating
```bash
# Check data file integrity
npm run track

# If errors, restore from backup
npm run backup
```

#### Reports Not Generating
```bash
# Check if reports folder exists
mkdir reports
npm run report
```

#### Proxy Issues
```bash
# Configure proxy settings
npm config set proxy http://USERNAME:PASSWORD@PROXY_ADDRESS:PROXY_PORT
npm config set https-proxy http://USERNAME:PASSWORD@PROXY_ADDRESS:PROXY_PORT
```

### Diagnostic Commands

```bash
# Check system status
npm run track

# Verify data integrity
npm run backup

# Test API connectivity
curl http://localhost:3001/api/project
```

---

## 📈 Performance Metrics

### Key Performance Indicators (KPIs)

1. **Overall Progress**: Target 100% by January 1, 2025
2. **Phase Completion**: Track completion of 6 main phases
3. **Time Efficiency**: Monitor actual vs. estimated time
4. **Milestone Compliance**: Track deadline adherence
5. **Risk Management**: Monitor risk mitigation progress

### Current Status

- **Overall Progress**: 25%
- **Completed Phases**: 1 of 6
- **In Progress Phases**: 1 of 6
- **Total Time Spent**: 145 hours
- **Estimated Total Time**: 600 hours

---

## 🔧 Maintenance & Customization

### System Maintenance

```bash
# Clean old reports (monthly)
find reports/ -name "*.pdf" -mtime +30 -delete
find reports/ -name "*.html" -mtime +30 -delete
find reports/ -name "*.csv" -mtime +30 -delete

# Update dependencies
npm update
npm audit
npm audit fix
```

### Customization Options

1. **Dashboard Customization**
   - Edit `public/dashboard.html` for interface changes
   - Modify `src/index.js` for metric updates

2. **Report Customization**
   - Edit templates in `templates/` directory
   - Modify `scripts/generate-report.js` for report logic

3. **Data Structure**
   - Edit `data/project-data.json` for project configuration
   - Add new phases, activities, or risks as needed

---

## 📞 Support & Resources

### Documentation Files

- `README.md` - Basic system overview
- `PROCEDURE.md` - Detailed operational procedures
- `Application_Manual.md` - This comprehensive guide

### Support Levels

1. **Level 1**: Self-resolution using documentation
2. **Level 2**: Technical support for complex issues
3. **Level 3**: System administrator for critical problems

### Contact Information

- **Primary User**: Cristofer Antoni Souza Costa
- **Technical Advisor**: Prof. Dr. Aldemir Cavallini Jr.
- **Institution**: Universidade Federal de Uberlândia (UFU)

---

## 🎯 Future Enhancements

### Planned Features

- [ ] Email notifications for milestones and risks
- [ ] Calendar integration for deadline management
- [ ] Productivity analysis and insights
- [ ] Automated report scheduling
- [ ] Mobile interface optimization
- [ ] Git integration for code tracking

### System Roadmap

1. **Phase 1**: Core functionality (Current)
2. **Phase 2**: Enhanced reporting and automation
3. **Phase 3**: Advanced analytics and insights
4. **Phase 4**: Integration with external tools

---

## 📋 Quick Reference

### Essential Commands

```bash
# Daily operations
npm start                    # Start system
npm run track               # Interactive tracking
npm run milestone           # Check milestones
npm run backup              # Backup data

# Weekly operations
npm run report              # Generate reports
npm run export              # Export data

# Development
npm run dev                 # Development mode
npm install                 # Install dependencies
```

### Key URLs

- **Dashboard**: http://localhost:3001/dashboard
- **API**: http://localhost:3001/api/project
- **Reports**: `reports/` directory

### File Locations

- **Main Data**: `data/project-data.json`
- **Source Code**: `src/` directory
- **Scripts**: `scripts/` directory
- **Reports**: `reports/` directory
- **Web Interface**: `public/dashboard.html`

---

**🎯 Remember**: This system is designed to help you maintain professional project management standards throughout your dissertation work. Regular use will provide valuable insights into your productivity patterns and help ensure you meet all deadlines successfully.

---

*Document**: Application Manual - Project Tracking System*  
*Version**: 1.0.0  
*Date**: 2024-12-19  
*Author**: Cristofer Antoni Souza Costa  
*Review**: Prof. Dr. Aldemir Cavallini Jr.*  
*Next Review**: 2025-03-19*
