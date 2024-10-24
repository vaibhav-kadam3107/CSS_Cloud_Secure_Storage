import React, { useState } from 'react';
import { Shield, Cloud, Image, Zap, ChevronRight, Camera, Lock, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define Button component
const Button = ({ children, className = '', variant = 'default', ...props }) => {
  const styles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-100',
  };

  return (
    <button
      className={`rounded-md px-4 py-2 transition ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Define Card component
const Card = ({ children, className = '' }) => (
  <div className={`border rounded-lg shadow-sm ${className}`}>
    {children}
  </div>
);

// Define CardContent component
const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

// Define Navbar component
const Navbar = () => (
  <nav className="bg-white shadow">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">MyApp</div>
      <div className="flex space-x-4">
        <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
        <a href="#security" className="text-gray-600 hover:text-blue-600">Security</a>
        <a href="#cta" className="text-gray-600 hover:text-blue-600">Get Started</a>
      </div>
    </div>
  </nav>
);

const LandingPage = () => {
  const [isHovered, setIsHovered] = useState(null);

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "End-to-End Encryption",
      description: "Your photos are encrypted before they leave your device, ensuring maximum privacy and security."
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: "Unlimited Storage",
      description: "Never worry about running out of space with our unlimited cloud storage solution."
    },
    {
      icon: <Image className="w-6 h-6 text-blue-500" />,
      title: "Smart Organization",
      description: "AI-powered photo organization with automatic tagging and facial recognition."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: "Lightning Fast",
      description: "Quick uploads and instant access to your photos from any device."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Secure Your Memories
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Store your photos safely in the cloud with military-grade encryption
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/login">
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded-lg mr-4">
              Login
            </button>
          </Link>
          <Button variant="outline">
            Learn More
          </Button>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Security Highlights */}
      <section id="security" className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Your Security is Our Priority
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Lock className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
              <p className="text-blue-100">Your photos never leave your device unencrypted</p>
            </div>
            <div className="flex flex-col items-center">
              <Share2 className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Sharing</h3>
              <p className="text-blue-100">Share photos safely with friends and family</p>
            </div>
            <div className="flex flex-col items-center">
              <Camera className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automatic Backup</h3>
              <p className="text-blue-100">Never lose a precious memory again</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Start Protecting Your Photos Today
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join millions of users who trust us with their precious memories
        </p>
        <Button 
          onMouseEnter={() => setIsHovered('cta')}
          onMouseLeave={() => setIsHovered(null)}
        >
          Try It Free
          <ChevronRight className={`ml-2 transition-transform duration-300 ${isHovered === 'cta' ? 'translate-x-1' : ''}`} />
        </Button>
      </section>
    </div>
  );
};

export default LandingPage;
