import axios from 'axios';

const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';
const API_KEY = process.env.YOUTUBE_API_KEY;

if (!API_KEY) {
    throw new Error('YOUTUBE_API_KEY not defined in environment variables');
}

interface PlaylistItemResponse {
    snippet: {
        resourceId: {
            videoId: string;
        };
        title: string;
        description: string;
    };
}

interface PlaylistItemResult {
    videoId: string;
    title: string;
    description: string;
}

export async function fetchYoutubePlaylistVideoIds(playlistId: string): Promise<PlaylistItemResult[]> {
    const videosInfo: PlaylistItemResult[] = [];
    let nextPageToken = '';
    const maxResults = 50;

    try {
        do {
            const response = await axios.get(`${YOUTUBE_API_BASE}/playlistItems`, {
                params: {
                    part: 'snippet',
                    maxResults,
                    playlistId,
                    pageToken: nextPageToken,
                    key: API_KEY,
                },
            });

            const items = response.data.items;
            videosInfo.push(...items.map((item: PlaylistItemResponse) => {
                return {
                    videoId: item.snippet.resourceId.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description
                };
            }));
            nextPageToken = response.data.nextPageToken || '';
        } while (nextPageToken);

        return videosInfo;
    } catch (error) {
        console.error('Error fetching YouTube playlist:', error);
        throw new Error('Failed to fetch playlist');
    }
}