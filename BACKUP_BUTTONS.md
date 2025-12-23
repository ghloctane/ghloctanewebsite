# BUTTON CODE BACKUP
## Date: $(Get-Date)

## 1. CSS Button Styles (main.css)

### Button Base Styles
```css
.btn{
    max-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 100px 100px 100px 100px;
    padding: 5px 5px 5px 5px;
    justify-content: space-between;
    align-self: stretch;
}

.btn-accent{
    fill: var(--accent-color-2);
    transition: all 0.6s;
    background-color: var(--accent-color-4);
    box-shadow: var(--box-shadow-top-left);
    border: 1px solid var(--accent-color);
}

.btn-title{
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-snug);
    padding: 20px 30px 20px 30px;
    color: var(--accent-color-2);
    text-decoration: none;
    align-self: center;
    width: 100%;
    transition: all 0.6s;
}

.btn-title a,
.btn-title span{
    color: var(--primary);
}

.btn-accent:hover{
    box-shadow: var(--box-shadow-bottom-right);
    background-color: var(--accent-color-4);
}

.btn:hover .btn-title a,
.btn:hover .btn-title span,
.btn:focus .btn-title a,
.btn:focus .btn-title span{
    color: var(--accent-color) !important;
}

.btn-sidebar{
    display: inline-block;
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-sm);
    text-align: center;
    padding: 17px 32px;
    border-radius: 30px !important;
    transition: all 0.15s ease-in-out;
    border-radius: 25px;
    line-height: var(--line-height-tight);
    letter-spacing: 1px;
}

.icon-circle {
    position: relative;
    background-color: var(--accent-color);
    color: var(--primary);
    font-size: var(--font-size-6xl);
    width: 59px;
    height: 59px;
    border-radius: 50%;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 0.3s ease-in-out;
}
```

### Form Buttons
```css
.form-button-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: auto;
}

#newsletterForm button:hover {
    background-color: transparent;
    color: var(--primary);
}
```

### Search Button
```css
.search-form button {
    border: 1px solid var(--accent-color-5);
    border-left: none;
    background-color: transparent;
    color: var(--accent-color-1);
    border-radius: 0px 25px 25px 0px;
    padding: 0px 30px;
    height: 70px;
}
```

### Close Buttons
```css
.close-btn-second {
    display: inline-block;
    justify-content: center;
    background-color: var(--accent-transparent);
    border: none;
    border-radius: 25% 25% 25% 25%;
    color: var(--primary);
    font-weight: var(--font-weight-bold);
    position: relative;
    font-size: var(--font-size-lg);
    cursor: pointer;
    border: 1px solid var(--accent-color);
    padding: 12px 15px 12px 15px;
    transition: all 0.4s;
}

.close-btn-second:hover{
    border: 1px solid var(--primary);
    color: var(--accent-color);
}
```

### Theme Switch Button
```css
#themeSwitch{
    height: 45px;
    width: 45px;
    padding: 0;
    border-radius: 50%;
    background-color: var(--accent-color-4);
    display: flex;
    justify-content: center;
    align-items: center;
    order: 2;
}

#themeSwitch i{
    font-size: var(--font-size-xl);
}
```

## 2. Button Components

### VideoButton Component
File: `marko_main_files/marko-react/src/Components/Video/VideoButton.jsx`

### SocialButton Component
File: `marko_main_files/marko-react/src/Components/Social/SocialButton.jsx`
CSS: `marko_main_files/marko-react/src/Components/Social/SocialButton.css`

## 3. Button Usage Examples

### Header Button
```jsx
<NavLink to="/contact" className="btn btn-accent">
    <div className="btn-title">
        <span>Book a Call</span>
    </div>
    <div className="icon-circle">
        <i className="fa-solid fa-arrow-right"></i>
    </div>
</NavLink>
```

### Contact Form Button
```jsx
<button type="submit" className="btn btn-accent">
    <span className="btn-title">
        <span>Send a Message</span>
    </span>
    <span className="icon-circle">
        <i className="fa-solid fa-arrow-right"></i>
    </span>
</button>
```

### Service Card Button
```jsx
<a href={link} className="btn btn-accent">
    <div className="btn-title">
        <span>Learn More</span>
    </div>
    <div className="icon-circle">
        <i className="fa-solid fa-arrow-right"></i>
    </div>
</a>
```

## 4. Button Variables
```css
--accent-color: #27428c;
--accent-color-2: #000000;
--accent-color-4: #f5f5f5;
--box-shadow-top-left: -3px -3px 7px 0px rgba(39, 66, 140, 0.44);
--box-shadow-bottom-right: 3px 3px 7px 0px rgba(39, 66, 140, 0.44);
```

## 5. Complete Button Component Files

### ServiceCard.jsx
```jsx
<a href={link} className="btn btn-accent">
    <div className="btn-title">
        <span>Learn More</span>
    </div>
    <div className="icon-circle">
        <i className="fa-solid fa-arrow-right"></i>
    </div>
</a>
```

### Header.jsx
```jsx
<NavLink to="/contact" className="btn btn-accent">
    <div className="btn-title">
        <span>Book a Call</span>
    </div>
    <div className="icon-circle">
        <i className="fa-solid fa-arrow-right"></i>
    </div>
</NavLink>
```

### Banner/index.jsx
```jsx
<a href="./contact" className="btn btn-accent">
    <div className="btn-title">
        <span>Get Started</span>
    </div>
    <div className="icon-circle">
        <i className="fa-solid fa-arrow-right"></i>
    </div>
</a>
```

### ContactForm.jsx
```jsx
<button type="submit" className="btn btn-accent">
    <span className="btn-title">
        <span>Send a Message</span>
    </span>
    <span className="icon-circle">
        <i className="fa-solid fa-arrow-right"></i>
    </span>
</button>
```

### Newsletter.jsx
```jsx
<button className="btn btn-accent" type="submit">
    <span className="btn-title">
        <span>Subscribe</span>
    </span>
    <span className="icon-circle">
        <i className="fa-solid fa-arrow-right"></i>
    </span>
</button>
```

### Pricing.jsx
```jsx
<a href="#" className="btn btn-accent">
    <div className="btn-title">
        <span>View Details</span>
    </div>
    <div className="icon-circle">
        <i className="fa-solid fa-arrow-right"></i>
    </div>
</a>
```

### NotFound.jsx
```jsx
<a href="/" className="btn btn-accent">
    <div className="btn-title">
        <span>Back to Home</span>
    </div>
    <div className="icon-circle">
        <i className="fa-solid fa-arrow-right"></i>
    </div>
</a>
```

### VideoButton.jsx
```jsx
import React from "react";
import { useModalVideo } from "./ModalVideoContext";

function VideoButton({ videoUrl }) {
  const { openModal } = useModalVideo();

  return (
    <button className="request-loader" onClick={() => openModal(videoUrl)}>
        <i className="fa-solid fa-play"></i>
    </button>
  );
}

export default VideoButton;
```

### SocialButton.jsx (Complete)
```jsx
import React from 'react';
import './SocialButton.css';

const SocialButton = ({ href, icon, platform = 'twitter' }) => {
  const getIcon = () => {
    switch(icon) {
      case 'facebook':
        return (
          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
        );
      case 'instagram':
        return (
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        );
      case 'linkedin':
        return (
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.2 79.7 101.9V416z" />
        );
      case 'youtube':
        return (
          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V174.585l142.739 81.205-142.739 81.201z" />
        );
      default:
        return (
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
        );
    }
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="social-button-wrapper">
      <button className="social-button">
        <div className="bloom-container">
          <div className="button-container-main">
            <div className="button-inner">
              <div className="back" />
              <div className="front">
                <svg xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 512 512">
                  {getIcon()}
                </svg>
              </div>
            </div>
            <div className="button-glass">
              <div className="back" />
              <div className="front" />
            </div>
          </div>
          <div className="bloom bloom1" />
          <div className="bloom bloom2" />
        </div>
      </button>
    </a>
  );
};

export default SocialButton;
```

### SocialButton.css (Complete)
See file: `marko_main_files/marko-react/src/Components/Social/SocialButton.css`

## 6. Files Containing Buttons
- marko_main_files/marko-react/src/Components/Header/header.jsx
- marko_main_files/marko-react/src/Components/Footer/footer.jsx
- marko_main_files/marko-react/src/Components/Form/ContactForm.jsx
- marko_main_files/marko-react/src/Components/Form/Newsletter.jsx
- marko_main_files/marko-react/src/Components/Card/ServiceCard.jsx
- marko_main_files/marko-react/src/Components/Card/TeamCard.jsx
- marko_main_files/marko-react/src/Components/Sidebar/Sidebar.jsx
- marko_main_files/marko-react/src/Components/Video/VideoButton.jsx
- marko_main_files/marko-react/src/Components/Social/SocialButton.jsx
- marko_main_files/marko-react/src/Components/Pricing/Pricing.jsx
- marko_main_files/marko-react/src/Components/Banner/index.jsx
- marko_main_files/marko-react/src/Components/NotFound/notfound.jsx
- marko_main_files/marko-react/src/assets/css/main.css

