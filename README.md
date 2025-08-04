# FAQ accordion

## Table of contents

- [Overview](#overview)
  - [Screenshot and live site URL](#screenshot-and-live-site-url)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Inspired by](#inspired-by)

## Overview

### Screenshot and live site URL

| Desktop                                     | Mobile                                    |
| ------------------------------------------- | ----------------------------------------- |
| ![desktop](/assets/desktop-screenshot.jpeg) | ![Mobile](/assets/mobile-screenshot.jpeg) |

[Live Site URL](https://noonpanirsabzi.github.io/faq-accordion)

## My process

### What I learned

1. **Using Negative Margins for Vertical Positioning**  
   I encountered this technique while trying to vertically overlap the FAQ box on top of the header background. My initial approach was to use `position: absolute` on the FAQ box. However, since it was the only content inside `<main>`, this caused the main section to collapse—losing its background color and bottom spacing.  
   To solve this, I needed the FAQ box to remain part of the normal document flow so that `<main>` could retain its layout and styling, while still visually overlapping the header. Applying a negative top margin to the FAQ box achieved exactly that: it preserved the flow and allowed the visual overlap.  
   In other scenarios—where the parent container doesn’t rely on the child’s presence for layout—`position: absolute` can still be a valid and clean solution.

## Author

- Github - [@AminForouzan](https://github.com/AminForouzan)
- Frontend Mentor - [@AminForouzan](https://www.frontendmentor.io/profile/AminForouzan)

## Inspired by

- [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz).
