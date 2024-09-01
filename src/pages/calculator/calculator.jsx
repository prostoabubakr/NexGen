import React, { useEffect, useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, TextField, Select, MenuItem, Checkbox, FormControlLabel, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "./calculator.css"
import { FaMoon, FaSun } from 'react-icons/fa';
const steps = [
  'Number of Pages & Framework',
  'Website Type & Adaptivity',
  'Style Type & Complexity Level',
  'Responsive Design & Animations',
  'PWA Support & Backend Language',
  'Multi-Language Support & SEO Optimization',
  'Hosting & CMS',
  'Maintenance & E-commerce Features',
  'Performance Optimization & Security Features',
  'Backup Solutions & Summary',
];

const WebsiteCostCalculator = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [pages, setPages] = useState('');
  const [framework, setFramework] = useState('select');
  const [websiteType, setWebsiteType] = useState('select');
  const [adaptivity, setAdaptivity] = useState('select');
  const [styleType, setStyleType] = useState('select');
  const [complexity, setComplexity] = useState('select');
  const [responsive, setResponsive] = useState(false);
  const [customAnimations, setCustomAnimations] = useState(false);
  const [pwaSupport, setPwaSupport] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [backendLanguage, setBackendLanguage] = useState('select');
  const [multiLanguage, setMultiLanguage] = useState(false);
  const [seoOptimization, setSeoOptimization] = useState(false);
  const [hosting, setHosting] = useState('select');
  const [cms, setCms] = useState('select');
  const [maintenance, setMaintenance] = useState(false);
  const [ecommerceFeatures, setEcommerceFeatures] = useState(false);
  const [performanceOptimization, setPerformanceOptimization] = useState(false);
  const [securityFeatures, setSecurityFeatures] = useState(false);
  const [backupSolutions, setBackupSolutions] = useState(false);

  const [summary, setSummary] = useState({});
  const [totalCost, setTotalCost] = useState(0);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  const calculateCost = () => {
    let costPerPage = 0;
    let breakdown = {};

    // Set cost per page based on the selected framework
    switch (framework) {
      case 'JSX':
        costPerPage = 20;
        breakdown.framework = 20 * pages;
        break;
      case 'Angular':
        costPerPage = 15;
        breakdown.framework = 15 * pages;
        break;
      case 'Vue':
        costPerPage = 10;
        breakdown.framework = 10 * pages;
        break;
      default:
        costPerPage = 0;
        breakdown.framework = 0;
    }

    // Calculate base cost
    let total = pages * costPerPage;

    // Add cost for website type
    if (websiteType === 'online-shop') {
      total += 10 * pages;
      breakdown.websiteType = 10 * pages;
    }

    // Add cost for adaptivity
    switch (adaptivity) {
      case '350-1440':
        total += 50;
        breakdown.adaptivity = 50;
        break;
      case '500-1440':
        total += 45;
        breakdown.adaptivity = 45;
        break;
      case '768-1440':
        total += 40;
        breakdown.adaptivity = 40;
        break;
      default:
        breakdown.adaptivity = 0;
    }

    // Add cost for style type
    switch (styleType) {
      case 'Tailwind':
        total += 20;
        breakdown.styleType = 20;
        break;
      case 'CSS':
        total += 15;
        breakdown.styleType = 15;
        break;
      case 'MUI':
        total += 25;
        breakdown.styleType = 25;
        break;
      default:
        breakdown.styleType = 0;
    }

    // Add cost for complexity level
    switch (complexity) {
      case 'Basic':
        total += 50;
        breakdown.complexity = 50;
        break;
      case 'Intermediate':
        total += 100;
        breakdown.complexity = 100;
        break;
      case 'Advanced':
        total += 200;
        breakdown.complexity = 200;
        break;
      default:
        breakdown.complexity = 0;
    }

    // Add cost for responsive design
    if (responsive) {
      const responsiveCost = total * 0.1; // 10% increase
      total += responsiveCost;
      breakdown.responsive = responsiveCost.toFixed(2);
    }

    // Add cost for custom animations
    if (customAnimations) {
      total += 100;
      breakdown.customAnimations = 100;
    }

    // Add cost for PWA support
    if (pwaSupport) {
      total += 150;
      breakdown.pwaSupport = 150;
    }

    // Add cost for backend language
    switch (backendLanguage) {
      case 'Node.js':
        total += 200;
        breakdown.backendLanguage = 200;
        break;
      case 'Python':
        total += 180;
        breakdown.backendLanguage = 180;
        break;
      case 'Ruby':
        total += 220;
        breakdown.backendLanguage = 220;
        break;
      case 'PHP':
        total += 160;
        breakdown.backendLanguage = 160;
        break;
      default:
        breakdown.backendLanguage = 0;
    }

    // Add cost for multi-language support
    if (multiLanguage) {
      total += 100;
      breakdown.multiLanguage = 100;
    }

    // Add cost for SEO optimization
    if (seoOptimization) {
      total += 80;
      breakdown.seoOptimization = 80;
    }

    // Add cost for hosting
    switch (hosting) {
      case 'Shared':
        total += 50;
        breakdown.hosting = 50;
        break;
      case 'VPS':
        total += 100;
        breakdown.hosting = 100;
        break;
      case 'Dedicated':
        total += 200;
        breakdown.hosting = 200;
        break;
      default:
        breakdown.hosting = 0;
    }

    // Add cost for CMS
    switch (cms) {
      case 'WordPress':
        total += 150;
        breakdown.cms = 150;
        break;
      case 'Drupal':
        total += 200;
        breakdown.cms = 200;
        break;
      case 'Joomla':
        total += 180;
        breakdown.cms = 180;
        break;
      default:
        breakdown.cms = 0;
    }

    // Add cost for maintenance and support
    if (maintenance) {
      total += 50; // monthly cost
      breakdown.maintenance = 50;
    }

    // Add cost for e-commerce features
    if (ecommerceFeatures) {
      total += 100;
      breakdown.ecommerceFeatures = 100;
    }

    // Add cost for performance optimization
    if (performanceOptimization) {
      total += 70;
      breakdown.performanceOptimization = 70;
    }

    // Add cost for security features
    if (securityFeatures) {
      total += 90;
      breakdown.securityFeatures = 90;
    }

    // Add cost for backup solutions
    if (backupSolutions) {
      total += 60;
      breakdown.backupSolutions = 60;
    }

    // Add cost for dark mode
    if (darkMode) {
      total += 10;
      breakdown.darkMode = 10;
    }

    // Apply discount if pages are 5 or more
    let discount = 0;
    if (pages >= 5) {
      discount = total * 0.1; // 10% discount
      total -= discount;
    }
    breakdown.totalCost = total.toFixed(2);
    breakdown.discount = discount.toFixed(2);

    setTotalCost(total.toFixed(2));
    setSummary(breakdown);
  };

  const handleNext = () => {
    calculateCost();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setSummary({});
    setTotalCost(0);
    setPurchaseCompleted(false);
  };

  const handleBuy = () => {
    calculateCost();
    setPurchaseCompleted(true);
  };

  const navigate = useNavigate();

  const toggleDarkMode = () => {
     setDarkMode(!darkMode);
   };
   
   useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);
  

  return (
    <div className="form-container" style={{marginTop:'50px',marginBottom:"50px"}}>
      <button className={`toggle ${darkMode ? 'toggle-dark' : ''}`} onClick={toggleDarkMode} style={{border:"none",backgroundColor:"transparent",position:"absolute",left:"1270px",top:'15px',zIndex:"40"}}>
                              {darkMode ? <FaMoon style={{zoom: '1.6', marginTop: '5px'}}/> : <FaSun style={{zoom: '1.6', marginTop: '5px',}}/>}
           </button>
      <div className="stepper-container">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      {purchaseCompleted ? (
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h5" className="typography-summary">
            Thank you for choosing our company. We will connect with you soon.
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            style={{ cursor: 'pointer', marginTop: '10px' }}
            onClick={() => navigate('/contactUs')}
          >
            If you have questions, click here
          </Typography>
          <Button style={{border:"2px solid lightblue",marginTop:"20px"}} onClick={()=>navigate("/contactUs")}>
            Contact Us
          </Button>
          <Typography variant="h5" className="typography-cost" style={{ marginTop: '20px' }}>
            Total Cost: ${totalCost}
          </Typography>
          <Typography variant="body1" style={{ marginTop: '10px' }}>Breakdown:</Typography>
          {Object.keys(summary).map((key) => (
            <Typography key={key} variant="body1">
              {key}: ${summary[key]}
            </Typography>
          ))}
        </div>
      ) : (
        <div>
          {activeStep === 0 && (
            <div>
              <TextField
                label="Number of Pages"
                type="number"
                value={pages}
                onChange={(e) => setPages(Number(e.target.value))}
                fullWidth
                margin="normal"
                variant="outlined"
                InputProps={{ style: { borderRadius: 12 } }}
              />
              <FormControl fullWidth margin="normal" variant="outlined">
                <InputLabel>Framework</InputLabel>
                <Select
                  value={framework}
                  onChange={(e) => setFramework(e.target.value)}
                  label="Framework"
                  style={{borderRadius:'10px'}}
                >
                  <MenuItem value="select">Select</MenuItem>
                  <MenuItem value="JSX">JSX</MenuItem>
                  <MenuItem value="Angular">Angular</MenuItem>
                  <MenuItem value="Vue">Vue</MenuItem>
                </Select>
              </FormControl>
            </div>
          )}
          {activeStep === 1 && (
            <div>
              <FormControl fullWidth margin="normal" variant="outlined">
                <InputLabel>Website Type</InputLabel>
                <Select
                  value={websiteType}
                  onChange={(e) => setWebsiteType(e.target.value)}
                  label="Website Type"
                  style={{borderRadius:'10px'}}

                >
                  <MenuItem value="select">Select</MenuItem>
                  <MenuItem value="IT Company">IT Company</MenuItem>
                  <MenuItem value="Online Shop">Online Shop</MenuItem>
                  <MenuItem value="Marketplace">Marketplace</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal" variant="outlined">
                <InputLabel>Adaptivity Range</InputLabel>
                <Select
                  value={adaptivity}
                  onChange={(e) => setAdaptivity(e.target.value)}
                  label="Adaptivity Range"
                  style={{borderRadius:'10px'}}

                >
                  <MenuItem value="select">Select</MenuItem>
                  <MenuItem value="350px-1440px">350px-1440px</MenuItem>
                  <MenuItem value="480px-1920px">480px-1920px</MenuItem>
                </Select>
              </FormControl>
            </div>
          )}
          {activeStep === 2 && (
            <div>
              <FormControl fullWidth margin="normal" variant="outlined">
                <InputLabel>Style Type</InputLabel>
                <Select
                  value={styleType}
                  onChange={(e) => setStyleType(e.target.value)}
                  label="Style Type"
                  style={{borderRadius:'10px'}}

                >
                  <MenuItem value="select">Select</MenuItem>
                  <MenuItem value="Tailwind">Tailwind</MenuItem>
                  <MenuItem value="CSS">CSS</MenuItem>
                  <MenuItem value="MUI">MUI</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal" variant="outlined">
                <InputLabel>Complexity Level</InputLabel>
                <Select
                  value={complexity}
                  onChange={(e) => setComplexity(e.target.value)}
                  label="Complexity Level"
                  style={{borderRadius:'10px'}}

                >
                  <MenuItem value="select">Select</MenuItem>
                  <MenuItem value="basic">Basic</MenuItem>
                  <MenuItem value="intermediate">Intermediate</MenuItem>
                  <MenuItem value="advanced">Advanced</MenuItem>
                </Select>
              </FormControl>
            </div>
          )}
          {activeStep === 3 && (
            <div>
              <FormControlLabel
                control={<Checkbox checked={responsive} onChange={(e) => setResponsive(e.target.checked)} />}
                label="Responsive Design"
                style={{borderRadius:'10px'}}

              />
              <FormControlLabel
                control={<Checkbox checked={customAnimations} onChange={(e) => setCustomAnimations(e.target.checked)} />}
                label="Custom Animations"
                style={{borderRadius:'10px'}}

              />
            </div>
          )}
          {activeStep === 4 && (
            <div>
              <FormControlLabel
                control={<Checkbox checked={pwaSupport} onChange={(e) => setPwaSupport(e.target.checked)} />}
                label="PWA Support"
                style={{borderRadius:'10px'}}

              />
              <FormControlLabel
                control={<Checkbox checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />}
                label="Dark Mode"
                style={{borderRadius:'10px'}}

              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Backend Language</InputLabel>
                <Select
                  value={backendLanguage}
                  onChange={(e) => setBackendLanguage(e.target.value)}
                  style={{borderRadius:'10px'}}

                >
                  <MenuItem value="select">Select</MenuItem>
                  <MenuItem value="Node.js">Node.js</MenuItem>
                  <MenuItem value="Python">Python</MenuItem>
                  <MenuItem value="Ruby">Ruby</MenuItem>
                  <MenuItem value="PHP">PHP</MenuItem>
                </Select>
              </FormControl>
            </div>
          )}
          {activeStep === 5 && (
            <div>
              <FormControlLabel
                control={<Checkbox checked={multiLanguage} onChange={(e) => setMultiLanguage(e.target.checked)} />}
                label="Multi-Language Support"
              />
              <FormControlLabel
                control={<Checkbox checked={seoOptimization} onChange={(e) => setSeoOptimization(e.target.checked)} />}
                label="SEO Optimization"
              />
            </div>
          )}
          {activeStep === 6 && (
            <div>
              <FormControl fullWidth margin="normal">
                <InputLabel>Hosting</InputLabel>
                <Select
                  value={hosting}
                  onChange={(e) => setHosting(e.target.value)}
                  style={{borderRadius:'10px'}}

                >
                  <MenuItem value="select">Select</MenuItem>
                  <MenuItem value="Shared">Shared</MenuItem>
                  <MenuItem value="VPS">VPS</MenuItem>
                  <MenuItem value="Dedicated">Dedicated</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth margin="normal">
                <InputLabel>CMS</InputLabel>
                <Select
                  value={cms}
                  onChange={(e) => setCms(e.target.value)}
                  style={{borderRadius:'10px'}}

                >
                  <MenuItem value="select">Select</MenuItem>
                  <MenuItem value="WordPress">WordPress</MenuItem>
                  <MenuItem value="Drupal">Drupal</MenuItem>
                  <MenuItem value="Joomla">Joomla</MenuItem>
                </Select>
              </FormControl>
            </div>
          )}
          {activeStep === 7 && (
            <div>
              <FormControlLabel
                control={<Checkbox checked={maintenance} onChange={(e) => setMaintenance(e.target.checked)} />}
                label="Maintenance & Support"
              />
              <FormControlLabel
                control={<Checkbox checked={ecommerceFeatures} onChange={(e) => setEcommerceFeatures(e.target.checked)} />}
                label="E-commerce Features"
              />
            </div>
          )}
          {activeStep === 8 && (
            <div>
              <FormControlLabel
                control={<Checkbox checked={performanceOptimization} onChange={(e) => setPerformanceOptimization(e.target.checked)} />}
                label="Performance Optimization"
              />
              <FormControlLabel
                control={<Checkbox checked={securityFeatures} onChange={(e) => setSecurityFeatures(e.target.checked)} />}
                label="Security Features"
              />
            </div>
          )}
          {activeStep === 9 && (
            <div>
              <FormControlLabel
                control={<Checkbox checked={backupSolutions} onChange={(e) => setBackupSolutions(e.target.checked)} />}
                label="Backup Solutions"
              />
            </div>
          )}
          {activeStep === 10 && (
            <div>
              <Typography variant="h6">Summary:</Typography>
              {Object.keys(summary).map((key) => (
                <Typography key={key} variant="body1">{key}: ${summary[key]}</Typography>
              ))}
              <Typography variant="h6" style={{ marginTop: '20px' }}>Total Cost: ${totalCost}</Typography>
              <div style={{ marginTop: '20px' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleBuy}
                >
                  Buy
                </Button>
              </div>
            </div>
          )}
          <div style={{ marginTop: '20px' }}  className="button-container">
          <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
              color="primary"
            >
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button
                onClick={handleBuy}
                variant="contained"
                color="primary"
              >
                Buy
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                variant="contained"
                color="primary"
              >
                Next
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WebsiteCostCalculator;