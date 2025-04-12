
import { toast } from 'sonner';

interface GenerateImageParams {
  prompt: string;
  apiKey: string;
  width?: number;
  height?: number;
  negativePrompt?: string;
}

interface PredictionResponse {
  id: string;
  status: 'starting' | 'processing' | 'succeeded' | 'failed' | 'canceled';
  output?: string[];
  error?: string;
}

export class ReplicateService {
  private baseUrl = 'https://api.replicate.com/v1/predictions';
  
  async generateImage({
    prompt,
    apiKey,
    width = 768,
    height = 768,
    negativePrompt = '',
  }: GenerateImageParams): Promise<string | null> {
    if (!apiKey) {
      toast.error('Please provide an API key');
      return null;
    }

    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Token ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          version: "39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b", 
          input: {
            prompt,
            negative_prompt: negativePrompt,
            width,
            height,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to generate image');
      }

      const prediction: PredictionResponse = await response.json();
      
      const result = await this.pollForResult(prediction.id, apiKey);
      
      if (result && result.status === 'succeeded' && result.output && result.output.length > 0) {
        return result.output[0];
      } else if (result?.error) {
        throw new Error(result.error);
      } else {
        throw new Error('Failed to generate image');
      }
    } catch (error) {
      console.error('Error generating image:', error);
      toast.error(error instanceof Error ? error.message : 'An error occurred');
      return null;
    }
  }

  private async pollForResult(id: string, apiKey: string): Promise<PredictionResponse> {
    const maxAttempts = 60; 
    let attempts = 0;

    while (attempts < maxAttempts) {
      attempts++;
      
      try {
        const response = await fetch(`${this.baseUrl}/${id}`, {
          headers: {
            'Authorization': `Token ${apiKey}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.detail || 'Failed to check prediction status');
        }

        const prediction: PredictionResponse = await response.json();
        
        if (['succeeded', 'failed', 'canceled'].includes(prediction.status)) {
          return prediction;
        }
        
        
        await new Promise(resolve => setTimeout(resolve, 5000));
      } catch (error) {
        console.error('Error polling for result:', error);
        throw error;
      }
    }

    throw new Error('Timed out waiting for image generation');
  }
}

export default new ReplicateService();
