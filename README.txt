CAFÉ SHIVAM WEBSITE
====================

Frontend-only responsive café website.

FILES
-----
index.html       Main one-page website
style.css        Neumorphism design + responsive CSS + animations
script.js        Mobile menu, scroll reveal, menu filters, frontend-only form validation
privacy.html     DPDP-oriented privacy notice template
assets/          Put your final AI-generated café images here

AI IMAGE PROMPTS
----------------
1. HERO:
"Editorial luxury French café in India, warm morning sunlight, artisan coffee cup with latte art, fresh butter croissant on a ceramic plate, elegant cream and sage interior, subtle French bistro details, photorealistic food photography, natural shadows, premium hospitality campaign, no text, no logo, 4:5 portrait"

2. INTERIOR:
"Photorealistic modern French-inspired café interior in India, cream plaster walls, sage green accents, light oak furniture, arched window, plants, soft morning sunlight, sophisticated but welcoming, premium architectural photography, no people, no text, 4:5 portrait"

3. COFFEE:
"Photorealistic café crème in a handmade ceramic cup, creamy latte art, linen napkin, warm wooden table, soft French café atmosphere, natural window light, premium food photography, no text, 1:1"

4. FRENCH PLATE:
"Photorealistic elegant French ratatouille plated beautifully in a modern ceramic dish, seasonal vegetables, herbs, warm natural light, sophisticated café presentation, premium food photography, no text, 1:1"

5. CROISSANT:
"Photorealistic golden butter croissant, flaky layers visible, on a cream ceramic plate, French bakery atmosphere, warm sunlight, shallow depth of field, premium food photography, no text, 1:1"

Replace the visual placeholder blocks in style.css with background-image URLs or local files such as:
assets/hero.jpg
assets/interior.jpg
assets/coffee.jpg
assets/ratatouille.jpg
assets/croissant.jpg

SECURITY / DPDP NOTES
---------------------
This is deliberately frontend-only. The contact form does NOT send or store data.
For production:
- use HTTPS
- validate and sanitise on the server
- use parameterised SQL queries
- add CSRF protection for state-changing requests
- use secure authentication/password hashing for admin features
- use rate limiting and abuse protection
- avoid collecting unnecessary personal data
- provide a clear privacy notice and consent mechanism where consent is the applicable basis
- define retention/deletion processes
- document processors/third parties
- provide applicable grievance/rights contact methods

The privacy page is a practical template, not legal advice.


HERO BACKGROUND UPDATE
----------------------
The hero now uses a full-width background image instead of a right-side image.
Current file: assets/hero-bg.svg
For a photorealistic AI hero, generate an image using the prompt below and save it as:
assets/hero-bg.jpg

AI HERO BACKGROUND PROMPT:
"Photorealistic premium French-inspired café interior in India, wide cinematic hero composition, elegant cream plaster walls, sage green accents, large sunlit windows, warm natural morning light, beautiful espresso and croissant on a foreground table, subtle Parisian bistro details, sophisticated but welcoming, lots of clean negative space on the left for website headline text, subject detail concentrated toward the right side, realistic professional hospitality photography, no people, no text, no logo, 16:9"

MENU UPDATE
-----------
The menu now contains 25 compact items across Coffee, French Plates, Bakery and Dessert. The category filter remains active.
