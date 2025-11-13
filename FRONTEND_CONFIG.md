# Frontend Configuration

The Sell My Stuff frontend can be configured using environment variables to work with different API endpoints and authentication methods.

## Environment Variables

Create a `.env` file in the project root with the following variables:

```bash
# API Configuration
VITE_API_BASE_URL=http://localhost:8000
```

### Variables Explained

- **`VITE_API_BASE_URL`**: The base URL of your FastAPI backend
  - Default: `http://localhost:8000` (for local development)
  - Production: `https://your-api-domain.com`


## Usage Examples

### Local Development
```bash
VITE_API_BASE_URL=http://localhost:8000
```

### Production
```bash
VITE_API_BASE_URL=https://api.your-api-domain.com
```

## Building for Production

1. Set your environment variables in `.env`
2. Build the frontend:
   ```bash
   npm run build
   ```
3. Deploy the `dist` folder to your hosting service

**Note**: The API key input field will always be shown to users, ensuring no secrets are exposed in the build bundle.

## API Endpoint

The frontend expects the backend to have an endpoint at:
```
POST {VITE_API_BASE_URL}/listings/analyze
```

With the following request/response format:

**Request:**
```json
{
  "image": "data:image/jpeg;base64,..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Image analyzed successfully",
  "description": "Item description...",
  "suggested_price": "$25 - $35"
}
```
