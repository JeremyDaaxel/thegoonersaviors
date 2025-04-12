
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Sparkles, RefreshCw } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';
import replicateService from '@/services/replicateService';

interface ImageGeneratorProps {
  apiKey: string;
  onImageGenerated: (imageUrl: string, prompt: string) => void;
}

const ImageGenerator: React.FC<ImageGeneratorProps> = ({ apiKey, onImageGenerated }) => {
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [width, setWidth] = useState(768);
  const [height, setHeight] = useState(768);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleGenerateImage = async () => {
    if (!prompt.trim()) {
      return;
    }

    setIsGenerating(true);
    try {
      const imageUrl = await replicateService.generateImage({
        prompt,
        apiKey,
        width,
        height,
        negativePrompt,
      });

      if (imageUrl) {
        onImageGenerated(imageUrl, prompt);
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const examplePrompts = [
    "A serene landscape with mountains and a lake at sunset",
    "A futuristic city with flying cars and neon lights",
    "A photorealistic portrait of a fox in a forest",
    "A surreal dreamscape with floating islands and waterfalls",
  ];

  const handleUseExample = (example: string) => {
    setPrompt(example);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="glass-panel rounded-2xl p-6 space-y-4 animate-slide-up">
        <div className="space-y-4">
          <div>
            <label htmlFor="prompt" className="block text-sm font-medium mb-1">
              Prompt
            </label>
            <Textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the image you want to generate..."
              className="resize-none h-24"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button
              onClick={handleGenerateImage}
              disabled={!apiKey || !prompt.trim() || isGenerating}
              className="col-span-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all"
            >
              {isGenerating ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate Image
                </>
              )}
            </Button>
          </div>

          {!prompt && (
            <div className="space-y-2">
              <p className="text-xs text-gray-500">Try an example:</p>
              <div className="flex flex-wrap gap-2">
                {examplePrompts.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => handleUseExample(example)}
                    className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1 rounded-full transition-colors"
                  >
                    {example.length > 30 ? example.substring(0, 30) + '...' : example}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              {showAdvanced ? 'Hide advanced options' : 'Show advanced options'}
            </Button>

            {showAdvanced && (
              <div className="mt-4 space-y-4 animate-fade-in">
                <div>
                  <label htmlFor="negativePrompt" className="block text-sm font-medium mb-1">
                    Negative Prompt
                  </label>
                  <Input
                    id="negativePrompt"
                    value={negativePrompt}
                    onChange={(e) => setNegativePrompt(e.target.value)}
                    placeholder="Elements to avoid in the image..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="width" className="block text-sm font-medium mb-1">
                      Width: {width}px
                    </label>
                    <Slider
                      id="width"
                      min={512}
                      max={1024}
                      step={64}
                      value={[width]}
                      onValueChange={(value) => setWidth(value[0])}
                    />
                  </div>

                  <div>
                    <label htmlFor="height" className="block text-sm font-medium mb-1">
                      Height: {height}px
                    </label>
                    <Slider
                      id="height"
                      min={512}
                      max={1024}
                      step={64}
                      value={[height]}
                      onValueChange={(value) => setHeight(value[0])}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
