import { storyblokInit, apiPlugin } from '@storyblok/react';

export const initStoryblok = () => {
  storyblokInit({
    accessToken: import.meta.env.VITE_STORYBLOK_TOKEN ?? '',
    use: [apiPlugin],
    apiOptions: { region: 'eu' },
  });
};

export async function fetchStory<T>(slug: string, fallback: T): Promise<T> {
  const token = import.meta.env.VITE_STORYBLOK_TOKEN;
  if (!token) return fallback;
  try {
    const res = await fetch(
      `https://api.storyblok.com/v2/cdn/stories/${slug}?version=published&token=${token}`
    );
    if (!res.ok) return fallback;
    const data = await res.json();
    return (data.story?.content ?? fallback) as T;
  } catch {
    return fallback;
  }
}
