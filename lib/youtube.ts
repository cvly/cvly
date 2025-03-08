interface YouTubeVideo {
  title: string;
  thumbnail: string;
  url: string;
  publishedAt: string;
}

export async function getYouTubeVideos(): Promise<YouTubeVideo[]> {
  try {
    const response = await fetch('https://www.youtube.com/feeds/videos.xml?channel_id=UC0m81bQuthaQZmFbXEY9QSw');
    const xmlText = await response.text();
    
    // Parse the XML using regex (for simplicity)
    const entries = xmlText.match(/<entry>(.*?)<\/entry>/gs) || [];
    
    const videos = entries.slice(0, 5).map(entry => {
      const title = entry.match(/<title>(.*?)<\/title>/)?.[1] || '';
      const videoId = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1] || '';
      const publishedAt = entry.match(/<published>(.*?)<\/published>/)?.[1] || '';
      
      return {
        title: title.replace(/&quot;/g, '"').replace(/&#39;/g, "'"),
        thumbnail: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        publishedAt: new Date(publishedAt).toLocaleDateString(),
      };
    });

    return videos;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}