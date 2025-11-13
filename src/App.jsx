import { useState } from 'react';
import MarkdownRenderer from './MarkdownRenderer.jsx';

function App() {
  // Configuration - can be overridden by environment variables
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
  
  const [apiKey, setApiKey] = useState('');
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);

  // Handle file selection
  const handleFileSelect = (file) => {
    if (file && file.type.startsWith('image/')) {
      setPhoto(file);
      setError('');
    } else {
      setError('Please select a valid image file.');
    }
  };

  // Handle drag and drop events
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-start py-0 font-sans"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => e.preventDefault()}
    >
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto mt-8 mb-16 p-12 rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 shadow-2xl text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Sell My Stuff
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 opacity-95">Transform Your Items Into Sales</h2>
          <p className="max-w-3xl mx-auto text-xl opacity-90 mb-8 leading-relaxed">
            Upload a photo of your item and get an AI-powered description and price suggestion that converts browsers into buyers.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              AI-Powered Analysis
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Instant Results
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Professional Listings
            </div>
          </div>
        </div>
      </section>

      {/* Main App Section */}
      <div id="main-app" className="w-full flex flex-col items-center">
        {/* API Key Input */}
        <div className="w-full max-w-lg bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8 flex flex-col gap-4 border border-white/20 animate-slide-up">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <label htmlFor="api-key" className="text-lg font-semibold text-gray-800">API Key</label>
            </div>
            <input
              id="api-key"
              type="password"
              className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-gray-900 bg-white/50 backdrop-blur-sm transition-all duration-200"
              placeholder="Enter your API key..."
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
            />
            <span className="text-sm text-gray-600">API key for authentication with the Sell My Stuff service.</span>
          </div>

        {/* Photo Upload Area */}
        <div className="w-full max-w-2xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8 flex flex-col items-center border border-white/20 animate-slide-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <label className="text-lg font-semibold text-gray-800">Upload Item Photo</label>
          </div>
          
          <div className="w-full">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="photo-upload"
              onChange={e => handleFileSelect(e.target.files[0])}
            />
            <div
              className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200 ${
                isDragOver
                  ? 'border-indigo-500 bg-indigo-50 scale-105'
                  : 'border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-gray-400'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById('photo-upload').click()}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className={`w-8 h-8 mb-4 transition-colors duration-200 ${
                  isDragOver ? 'text-indigo-500' : 'text-gray-500'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className={`mb-2 text-sm transition-colors duration-200 ${
                  isDragOver ? 'text-indigo-600 font-semibold' : 'text-gray-500'
                }`}>
                  {isDragOver ? (
                    <span className="font-semibold">Drop your image here</span>
                  ) : (
                    <>
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </>
                  )}
                </p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
          
          {photo && (
            <div className="mt-6 w-full">
              <div className="relative">
                <img
                  src={URL.createObjectURL(photo)}
                  alt="Item Preview"
                  className="w-full max-h-64 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-lg text-xs">
                  {photo.name}
                </div>
              </div>
            </div>
          )}
          
          <button
            className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
            disabled={!photo || loading}
            onClick={async () => {
              setError('');
              setDescription('');
              setPrice('');
              setLoading(true);
              try {
                // Convert image to base64
                const fileData = await new Promise((resolve, reject) => {
                  const reader = new FileReader();
                  reader.onload = () => resolve(reader.result);
                  reader.onerror = reject;
                  reader.readAsDataURL(photo);
                });
                
                // Prepare headers
                const headers = {
                  'Content-Type': 'application/json',
                };
                
                // Add API key to headers if provided
                if (apiKey) {
                  headers['X-API-Key'] = apiKey;
                }
                
                // Call our FastAPI endpoint
                const response = await fetch(`${API_BASE_URL}/listings/analyze`, {
                  method: 'POST',
                  mode: 'cors',
                  headers,
                  body: JSON.stringify({
                    image: fileData
                  }),
                });
                
                if (!response.ok) {
                  const err = await response.json().catch(() => ({}));
                  throw new Error(err.detail || `HTTP ${response.status}: Failed to analyze image`);
                }
                
                const data = await response.json();
                
                if (data.success) {
                  setDescription(data.description || '');
                  setPrice(data.suggested_price || '');
                } else {
                  throw new Error(data.message || 'Analysis failed');
                }
              } catch (err) {
                setError(err.message || 'An unknown error occurred.');
              } finally {
                setLoading(false);
              }
            }}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing image...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Analyze Item
              </>
            )}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="w-full max-w-2xl bg-red-50/80 backdrop-blur-sm border border-red-200 rounded-2xl shadow-lg p-6 mb-8 text-red-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Error</h3>
            </div>
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Result Area */}
        {description && (
          <div className="w-full max-w-4xl bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 border border-white/20 rounded-3xl shadow-2xl p-8 mb-12 text-gray-800 animate-fade-in relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Your Item Listing</h3>
                </div>
                <button
                  className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
                  onClick={() => {
                    const fullListing = `Description: ${description}\n\nSuggested Price: ${price}`;
                    navigator.clipboard.writeText(fullListing);
                  }}
                  title="Copy to clipboard"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy All
                </button>
              </div>
              
              {/* Price Suggestion */}
              {price && (
                <div className="mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">Suggested Price</h4>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">{price}</p>
                </div>
              )}
              
              {/* Description */}
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">Description</h4>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <MarkdownRenderer>{description}</MarkdownRenderer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 py-8 text-gray-500 text-sm text-center w-full">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-semibold text-gray-600">Sell My Stuff</span>
            </div>
            <p className="text-gray-500 mb-2">Transform your items into sales with AI-powered listings</p>
            <p className="text-xs text-gray-400">&copy; 2025 Sell My Stuff. All rights reserved.</p>
          </div>
        </footer>
      </div> {/* Close main-app wrapper */}
    </div>
  );
}

export default App;
