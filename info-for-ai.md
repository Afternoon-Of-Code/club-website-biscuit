# South Asian Student Society website
This template is for AI coding assistants.

## Tech stack:
- HTML  
- CSS  
- Alpine.js  
- Eleventy  
- Google Calendar API + Google Sheets API  

## Color theme:
- Feel free to add shadows, transitions, and other stylistic elements.  
- `#8F0F22` Red (secondary)
- `#236139` Green (accent)
- `#DF993A` Yellow (secondary)
- `#FEEFC6` Background
- `#3A210F` Text

**Note:** There is a good chance that the club does not always have pre-made posters. Expect to see posters about a week before the event.  

---

## Main features required:
- Fully integrated with Google Calendar API for event updates  
- Fully integrated with a Google Sheet to extract club leaders info and photos  
- Hero section with the next event and its mini poster on the side, with a button to join the club's group on "Gator Hub" (the college's website)  
- Uses a default poster for events without a poster  
- Home, Events, About, Member pages  
- Unless handled by something else, all website text and images (not icons) must be editable using markdown paired with Eleventy  
- Website must feel **smooth when scrolling**  
- Must check if the file link provided by the Google Calendar API is an image or not  
- All UI interactions must have **smooth transitions** (hover effects, fade-ins, accordions, card animations)  
- No security holes  

---

## Global Navigation Bar
- Links to: Home, Events, Leaders, Members, About  
- Sticks to top on scroll  
- Smooth scroll to page sections or links to subpages  
- **Animations:**  
  - Nav bar **slides down/fades in** on page load  
  - Hover on nav links **smoothly changes color and slightly scales**  

---

## Per page breakdown

### Home page

#### Hero section
- tagline: "Represent South Asian cultures & embrace the student community"
- A nice background image covering the whole hero section.  
- Background image must **stay fixed** even when scrolling  
- Club's logo and name  
- Right side must contain a **card with the immediate next event** details and a poster  
- Next event details must be extracted using the Google Calendar API  
- A button to join the club's Gator Hub group: **"Join us on Gator Hub"**  
- **Animations:**  
  - Fade-in for hero text and logo on page load  
  - Slide-in for next event card from the right  

---

#### Upcoming events section
- A timeline made by integrating the Google Calendar API showing the next 4 events. Clicking on them will show their details. Use a default poster if no image is attached.  
- A button to see the club's Google Calendar  
- **Animations:**  
  - Timeline events **fade and slide up** when scrolling into view  
  - Hovering over an event card **slightly lifts card with shadow**  

---

#### Find us on our socials!
- Club's social media pages  
- Club's Gator Hub feed page  
- **Animations:**  
  - Social icons **scale up slightly** on hover with smooth transition  

---

#### Quick one-liner mission statement
- One-line mission + 2–3 key stats  
- **Animations:**  
  - Stats numbers **count up** on scroll into view  

---

#### Frequency Asked Questions (Accordion)
- An accordion that contains frequently asked questions  
- One question must **not close** when another opens  
- Must open and close **smoothly** with **slide-down/fade** animations  

---

### Events page
- Full upcoming events feed  
- Auto-sync with Google Calendar  
- Past events gallery  
- **Animations:**  
  - Event cards **fade/slide in** on scroll  
  - Hovering on gallery images **slightly zooms** them  

---

### Join Us
- A page explaining why someone should join the club  
- **Animations:**  
  - Section cards **slide up** on scroll  
  - Call-to-action buttons **scale on hover**  

---

### About
- Full mission & purpose statement  
- Contact info / forms  
- Optional testimonials  
- **Animations:**  
  - Testimonials **fade-in with staggered delay**  
  - Forms **slide/fade into view** on scroll  
- Full roster of officers
- Photos, roles, bios  
- Pull dynamically from Google Sheet  
- **Animations:**  
  - Leader cards **fade-in and lift slightly** on scroll  
  - Hovering shows bio overlay with smooth opacity transition  


---

## Footer
- Generic footer with contact info and page info  
- Made by Anshu Pathak  
- **Animations:**  
  - Hovering on links **changes color smoothly**  
  - Footer can **fade in** when scrolling to bottom  
