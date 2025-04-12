
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Share2 } from 'lucide-react';
import { toast } from 'sonner';

interface ImageDisplayProps {
  imageUrl: string;
  prompt: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, prompt }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `generated-image-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Image download started');
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'My AI Generated Image',
          text: `AI generated image: ${prompt}`,
          url: imageUrl,
        });
      } else {
        await navigator.clipboard.writeText(imageUrl);
        toast.success('Image URL copied to clipboard');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      toast.error('Failed to share image');
    }
  };

  return (
    <div className="w-full animate-fade-in">
      <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white/50 backdrop-blur-sm border border-white/10">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100/30 backdrop-blur-sm">
            <div className="w-full h-full animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 shimmer"></div>
          </div>
        )}
        
        <img
          src={imageUrl}
          alt={prompt}
          className="w-full h-auto object-cover transition-opacity duration-300"
          style={{ opacity: isLoading ? 0 : 1 }}
          onLoad={() => setIsLoading(false)}
        />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
          <p className="text-sm font-light mb-2 line-clamp-2 text-balance">{prompt}</p>
          
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="outline" 
              className="bg-white/20 hover:bg-white/30 border-0 text-white"
              onClick={handleDownload}
            >
              <Download className="h-4 w-4 mr-1" />
              Download
            </Button>
            
            <Button 
              size="sm" 
              variant="outline" 
              className="bg-white/20 hover:bg-white/30 border-0 text-white"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;
