
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { EyeIcon, EyeOffIcon, KeyIcon, ExternalLinkIcon } from 'lucide-react';

const API_KEY_STORAGE_KEY = 'replicate-api-key';

interface ApiKeyInputProps {
  onApiKeyChange: (apiKey: string) => void;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ onApiKeyChange }) => {
  const [apiKey, setApiKey] = useState<string>('');
  const [showApiKey, setShowApiKey] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  useEffect(() => {
    const savedApiKey = localStorage.getItem(API_KEY_STORAGE_KEY);
    if (savedApiKey) {
      setApiKey(savedApiKey);
      setIsSaved(true);
      onApiKeyChange(savedApiKey);
    }
  }, [onApiKeyChange]);

  const handleSaveApiKey = () => {
    if (!apiKey.trim()) {
      toast.error('Please enter an API key');
      return;
    }

    localStorage.setItem(API_KEY_STORAGE_KEY, apiKey);
    setIsSaved(true);
    onApiKeyChange(apiKey);
    toast.success('API key saved');
  };

  const handleClearApiKey = () => {
    localStorage.removeItem(API_KEY_STORAGE_KEY);
    setApiKey('');
    setIsSaved(false);
    onApiKeyChange('');
    toast.info('API key removed');
  };

  return (
    <div className="w-full max-w-md mx-auto animate-slide-up">
      <div className="glass-panel rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-2">
          <KeyIcon className="h-4 w-4 text-blue-500" />
          <h2 className="text-lg font-medium">Replicate API Key</h2>
        </div>
        
        <div className="space-y-2">
          <div className="relative">
            <Input
              type={showApiKey ? 'text' : 'password'}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your Replicate API key"
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowApiKey(!showApiKey)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              aria-label={showApiKey ? 'Hide API key' : 'Show API key'}
            >
              {showApiKey ? (
                <EyeOffIcon className="h-4 w-4" />
              ) : (
                <EyeIcon className="h-4 w-4" />
              )}
            </button>
          </div>
          
          <div className="flex gap-2">
            <Button 
              onClick={handleSaveApiKey}
              className="flex-1"
              variant="default"
              disabled={!apiKey.trim() || isSaved}
            >
              {isSaved ? 'Saved' : 'Save Key'}
            </Button>
            
            {isSaved && (
              <Button 
                onClick={handleClearApiKey}
                variant="outline"
              >
                Clear
              </Button>
            )}
          </div>
        </div>
        
        <div className="text-xs text-gray-500">
          <p className="flex items-center gap-1">
            Need an API key?
            <a 
              href="https://replicate.com/account/api-tokens" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 inline-flex items-center"
            >
              Get one from Replicate
              <ExternalLinkIcon className="h-3 w-3 ml-1" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyInput;
