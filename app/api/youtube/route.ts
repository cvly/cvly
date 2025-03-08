import { NextResponse } from 'next/server';
import { getYouTubeVideos } from '@/lib/youtube';

export async function GET() {
  try {
    const videos = await getYouTubeVideos();
    return NextResponse.json(videos);
  } catch (error) {
    console.error('YouTube RSS feed error:', error);
    return NextResponse.json({ error: 'Failed to fetch videos' }, { status: 500 });
  }
}