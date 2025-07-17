import {NextRequest} from 'next/server';
import {z} from 'zod';
import {defineFlow, runFlow, streamFlow} from 'genkit';

import {ai} from '../genkit';
import {fromZodError} from 'zod-validation-error';
import {generate} from 'genkit/ai';

const TripRecommendationSchema = z.object({
  departurePoint: z.string(),
  duration: z.string(),
  tripContext: z.string(),
});

type TripRecommendation = z.infer<typeof TripRecommendationSchema>;

export const recommendTrips = defineFlow(
  {
    name: 'recommendTrips',
    inputSchema: TripRecommendationSchema,
    outputSchema: z.string(),
  },
  async (input: TripRecommendation) => {
    const {departurePoint, duration, tripContext} = input;
    const prompt = `You are a friendly and helpful travel assistant for a bus service called TripTrek. Your goal is to recommend a travel itinerary based on the user's preferences and the current availability of trips.

User Preferences:
- Preferred Departure Point: ${departurePoint}
- Desired Trip Duration: ${duration}

Current Trip Availability and Context:
${tripContext}

Based on all this information, generate a concise and helpful travel recommendation.
- If there are direct matches, highlight them.
- If there are no direct matches, suggest the closest alternatives.
- If some trips are unavailable, clearly state this and factor it into your advice.
- Keep the tone professional, encouraging, and clear.
- Format the output as clean markdown.
`;

    const llmResponse = await generate({
      model: ai.model,
      prompt: prompt,
      config: {
        temperature: 0.7,
      },
    });

    return llmResponse.text();
  }
);
