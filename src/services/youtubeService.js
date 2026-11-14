// src/services/youtubeService.js

const YOUTUBE_API_KEY = 'AIzaSyC_pCibDe3cWbV7VP9VPOfZ-LvGWiHrtNU'; 

export async function obtenerVideoDeYouTube(nombreEjercicio) {
  try {
    const query = encodeURIComponent(`ejercicio ${nombreEjercicio} tecnica correcta gym`);
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=1&key=${YOUTUBE_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    // 🔍 Imprimimos la respuesta completa en la consola del navegador
    console.log("Respuesta de YouTube:", data);

    if (data.error) {
      console.error("Error devuelto por la API de YouTube:", data.error.message);
      return null;
    }

    if (data.items && data.items.length > 0) {
      const item = data.items[0];
      return {
        titulo: item.snippet.title,
        descripcion: item.snippet.description,
        videoId: item.id.videoId,
        thumbnail: item.snippet.thumbnails.high.url,
      };
    }
    return null;
  } catch (error) {
    console.error('Error de red al consultar la YouTube Data API:', error);
    return null;
  }
}