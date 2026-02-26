# Product Requirements Document (PRD)
## Green-Themed Tea Shop Analytics Website

### 1. Project Overview
**Project Name:** Tea Analytics Dashboard  
**Theme:** Green color scheme with subtle tech elements  
**Purpose:** Present tea shop customer churn analysis findings in an engaging, visually appealing website  
**Target Audience:** Tea shop management, risk department, data analysts, stakeholders  

### 2. Design Requirements

#### 2.1 Color Scheme
- **Primary Green:** #2E7D32 (Forest Green)
- **Secondary Green:** #4CAF50 (Material Green)
- **Light Green:** #C8E6C9 (Mint Green)
- **Dark Green:** #1B5E20 (Deep Green)
- **Accent Colors:** 
  - #FFFFFF (White) for backgrounds
  - #F5F5F5 (Light Gray) for section backgrounds
  - #212121 (Near Black) for text
- **Tech Elements:** Subtle gradients, clean shadows, geometric shapes

#### 2.2 Typography
- **Primary Font:** 'Inter' or system sans-serif (-apple-system, BlinkMacSystemFont, 'Segoe UI')
- **Headings:** Bold, clean, with letter-spacing for tech feel
- **Body Text:** Readable, adequate line-height (1.6)
- **Code/Data Font:** 'Roboto Mono' for data points (subtle tech hint)

#### 2.3 Visual Elements
- **Cards:** Rounded corners (8px), subtle shadows (0 5px 15px rgba(0,0,0,0.05))
- **Buttons:** Gradient greens, hover effects with slight scale transformation
- **Charts:** Clean Chart.js visualizations with green color palette
- **Icons:** Font Awesome icons with green accents
- **Tech Touches:** 
  - Subtle grid backgrounds in some sections
  - Animated data points on hover
  - Progress bars with gradient fills
  - Minimalist loading animations

### 3. Website Structure

#### 3.1 Navigation
- Fixed header with logo and navigation links
- Smooth scrolling to sections
- Mobile-responsive hamburger menu
- Active section highlighting

#### 3.2 Sections (Single Page Application)

**Section 1: Hero / Introduction**
- Large title with subtitle
- Key statistics in card format (4 cards)
- Call-to-action button
- Subtle animated background element

**Section 2: Data Quality Issues**
- Problem cards with icons
- Data cleaning table
- Visual indicators of data issues

**Section 3: Key Churn Indicators**
- Explanation of critical metrics
- Interactive chart showing feature importance
- Risk level warning cards (High/Medium/Low)

**Section 4: Customer Segmentation**
- Cluster visualization chart
- 6 cluster cards with risk badges
- Action recommendations per cluster

**Section 5: Churn Prediction Model**
- Model performance metrics
- Decision tree visualization
- Feature importance list
- Key insights cards

**Section 6: Business Recommendations**
- Actionable strategy cards
- Implementation timeline
- Methodology explanation

**Section 7: Footer**
- Contact information
- Links to sections
- Copyright and disclaimer

### 4. Technical Requirements

#### 4.1 Frontend Stack
- **HTML5:** Semantic markup
- **CSS3:** Flexbox/Grid, custom properties (CSS variables)
- **JavaScript:** Vanilla JS for interactivity
- **Charting Library:** Chart.js for data visualizations
- **Icons:** Font Awesome 6
- **Fonts:** Google Fonts (Inter, Roboto Mono)

#### 4.2 Performance Requirements
- Page load time < 3 seconds
- Mobile-friendly (responsive design)
- Accessible (WCAG 2.1 AA compliance)
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

#### 4.3 Interactive Features
- Smooth scrolling navigation
- Chart animations on scroll
- Mobile menu toggle
- Hover effects on cards
- Dynamic data updates (if applicable)

### 5. Content Requirements

#### 5.1 Text Content
Based on user's analysis:
- Data quality issues description
- Churn indicator explanations
- Customer cluster descriptions
- Model performance metrics
- Business recommendations

#### 5.2 Visual Content
- 3 main charts (feature importance, clusters, decision tree)
- 6 cluster cards with risk indicators
- 4+ statistic cards
- Multiple icon illustrations
- Color-coded risk indicators

#### 5.3 Data Visualization
- Bar chart for feature importance
- Combined bar chart for cluster characteristics
- Doughnut chart for model results
- Responsive charts that work on mobile

### 6. Development Timeline

#### Phase 1: Foundation (Week 1)
- HTML structure with all sections
- CSS base styles and color scheme
- Responsive grid system
- Basic navigation

#### Phase 2: Styling & Components (Week 2)
- Card components styling
- Button and form elements
- Typography hierarchy
- Mobile responsiveness

#### Phase 3: Interactivity & Charts (Week 3)
- JavaScript for navigation
- Chart.js implementations
- Hover and animation effects
- Mobile menu functionality

#### Phase 4: Testing & Polish (Week 4)
- Cross-browser testing
- Performance optimization
- Accessibility checks
- Content finalization

### 7. Success Metrics

#### 7.1 User Experience Metrics
- Bounce rate < 40%
- Average session duration > 2 minutes
- Mobile usage > 30% of traffic
- Page speed score > 80 (Google PageSpeed)

#### 7.2 Business Metrics
- Clear presentation of churn analysis
- Actionable insights for risk department
- Professional appearance for stakeholders
- Easy navigation to key findings

### 8. Constraints & Considerations

#### 8.1 Technical Constraints
- No backend required (static site)
- Must work without JavaScript for basic content
- File size optimization for images/charts
- SEO-friendly markup

#### 8.2 Design Constraints
- Green theme must remain dominant
- Tech elements should not overwhelm
- Balance between visual appeal and readability
- Consistent spacing and alignment

#### 8.3 Content Constraints
- Based on provided analysis data
- Respect data privacy (anonymized data)
- Clear attribution of analysis methodology
- Disclaimer about educational purpose

### 9. Future Enhancements

#### Phase 2 Potential Features
- Interactive data filtering
- Export charts as images
- Dark mode toggle
- Multi-language support
- PDF report generation
- Live data updates (if API available)

### 10. Approval & Sign-off

**Stakeholder Approval Required For:**
- [ ] Color scheme and design direction
- [ ] Website structure and sections
- [ ] Content accuracy from analysis
- [ ] Technical implementation approach
- [ ] Final deployment and launch

---

**Document Version:** 1.0  
**Last Updated:** 2026-02-25  
**Prepared By:** Tea Analytics Team  
**Status:** Ready for Implementation