# Sell My Stuff - Hackathon Project

Sell My Stuff is a web application that helps you create compelling product listings by uploading a photo and receiving AI-powered descriptions and price suggestions. 

This project serves as the target application for aspiring AWS cloud engineers participating in our hackathon.

![Sell My Stuff UI](docs/ui.png)

## 🏆 Hackathon Challenge

**Your Mission**: Deploy the complete infrastructure required to run this application using Terraform and GitHub Actions.

This hackathon is designed to help aspiring cloud engineers gain hands-on experience with:
- AWS infrastructure provisioning with Terraform
- CI/CD pipelines with GitHub Actions
- Static hosting with Amazon S3
- Content distribution with Amazon CloudFront
- Integration with Amazon API Gateway

## Backend Project

This is the frontend React application for the Sell My Stuff service. The backend API that powers this application can be found at:

- **Backend Repository**: [Sell My Stuff - Backend](https://github.com/breakintocloud/hackathon-sell-my-stuff-backend)

The backend provides AI-powered image analysis and generates professional product descriptions and price suggestions that are displayed in this frontend interface.

## Features

- 📸 Upload any photo (JPG, PNG, GIF up to 10MB)
- 🤖 AI-powered item analysis and description generation
- 💰 Smart price suggestions based on item analysis
- 🔑 Secure API key authentication
- 📋 Copy-ready listing text for easy posting
- 🎨 Modern, responsive UI with drag-and-drop upload
- ⚡ Fast, efficient image processing
- 🔒 Secure - API keys are user-provided and not stored

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### 1. Clone the repository
```bash
git clone https://github.com/breakintocloud/hackathon-sell-my-stuff-frontend.git
cd hackathon-sell-my-stuff-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Windows Users - Troubleshooting

If you encounter issues with `package-lock.json` on Windows:

1. **Delete existing lock file and node_modules:**
   ```bash
   # PowerShell/Command Prompt
   rmdir /s node_modules
   del package-lock.json
   
   # Or use the provided script
   npm run clean
   ```

2. **Reinstall dependencies:**
   ```bash
   npm install
   ```

3. **If issues persist, ensure you're using the correct Node/npm versions:**
   ```bash
   node --version  # Should be 18+
   npm --version   # Should be 9+
   ```

### Common Issues
- **Lock file conflicts**: Run `npm run clean` to regenerate the lock file
- **Permission errors**: Run your terminal as Administrator (Windows) or use `sudo` (macOS/Linux)
- **Version conflicts**: Ensure all team members use Node.js 18+ and npm 9+

### 4. Build for production
```bash
npm run build
```

This will create a `dist` folder with the production-ready build of your application.

### 5. Preview the production build
```bash
npm run preview
```

This will serve the production build locally for testing before deployment.

## Configuration

The app can be configured using environment variables. See [FRONTEND_CONFIG.md](./FRONTEND_CONFIG.md) for detailed configuration options.

### Environment Variables
- `VITE_API_BASE_URL` - The base URL of your API backend (default: `http://localhost:8000`)

## Deployment

Simply build the project and deploy the `dist` folder contents.

## Usage
1. Enter your API key for the Sell My Stuff backend service
2. Upload a photo of the item you want to sell
3. Click **Analyze Item**
4. View the AI-generated description and price suggestion
5. Copy the listing text to use on your preferred marketplace

> **Note:** Your API key is only used to authenticate with the Sell My Stuff backend service. It is never stored in the application.

## Tech Stack
- [React](https://react.dev/) - Frontend framework
- [Vite](https://vite.dev/) - Build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering

## 🚀 Join the Break Into Cloud Community

This hackathon is part of the [Break Into Cloud](https://www.skool.com/cloud) community, where aspiring cloud engineers come together to:

- **Build Real Projects**: Get hands-on experience with AWS, Terraform, and modern DevOps practices
- **Get Hired**: Connect with opportunities and receive guidance on landing cloud engineering roles
- **Learn Together**: Join 783+ members in a supportive environment focused on practical cloud skills

### Need Help or Want to Participate?

- **Join our community**: [Break Into Cloud on Skool](https://www.skool.com/cloud)
- **Get support**: Ask questions, share your progress, and get feedback from fellow cloud engineers
- **Future hackathons**: Stay updated on upcoming challenges and learning opportunities

Whether you're just starting your cloud journey or looking to advance your skills, our community provides the resources and support you need to succeed.

## License
MIT
