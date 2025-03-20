# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- Fully responsive design
- Modern and clean UI
- Mobile-friendly navigation
- Smooth scrolling
- Contact form with validation
- Backend API for handling form submissions

## File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # Styles for the website
├── script.js           # Frontend JavaScript
├── backend/            # Backend code
│   ├── server.js       # Node.js server
│   ├── package.json    # Backend dependencies
│   └── .env.example    # Environment variables example
└── assets/             # Static assets
    ├── images/         # Images for the website
    └── icons/          # Icons for the website
```

## Setup Instructions

### Frontend

1. Clone or download this repository
2. Open `index.html` in your browser to view the website
3. Customize the content in `index.html` with your personal information
4. Replace placeholder images in the `assets/images` directory with your own images

### Backend (for Contact Form)

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example`:
   ```
   cp .env.example .env
   ```

4. Update the `.env` file with your email credentials:
   - For Gmail users: Use an app password instead of your regular password 
   - Follow [Google's instructions](https://support.google.com/accounts/answer/185833) to generate an app password

5. Start the server:
   ```
   npm start
   ```

6. To enable the contact form, update the backend URL in `script.js`:
   - Find the commented section in the form submission handler
   - Uncomment the appropriate fetch request
   - Replace with your actual backend URL

## Deployment

### Frontend

You can deploy the frontend to GitHub Pages, Netlify, Vercel, or any static site hosting service:

- **GitHub Pages**: Push to a GitHub repository and enable GitHub Pages in the repository settings
- **Netlify**: Connect your repository or drag and drop the project folder
- **Vercel**: Connect your repository and follow the deployment steps

### Backend

For the backend, you can deploy to:

- **Heroku**: Connect your repository and follow the deployment steps
- **Render**: Connect your repository and set up a web service
- **DigitalOcean**: Set up a Node.js app platform or a VPS

## Customization

- Change color scheme: Update CSS variables in the `:root` section of `styles.css`
- Add more sections: Follow the existing pattern in `index.html`
- Add more projects: Copy and paste the project card structure in the projects section
- Change fonts: Update the font-family in the `body` selector in `styles.css`

## Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: System fonts (Segoe UI, Tahoma, Geneva, Verdana, sans-serif)

## License

This project is open source and available under the [MIT License](LICENSE). 