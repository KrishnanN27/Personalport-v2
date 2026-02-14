export default async function handler(req, res) {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  // 1️⃣ Get fresh access token
  const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  const tokenData = await tokenResponse.json();
  const access_token = tokenData.access_token;

  // 2️⃣ Get currently playing
  const nowPlaying = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );

  if (nowPlaying.status === 204) {
    // If nothing playing → return top tracks
    const top = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=5",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );

    const topData = await top.json();
    return res.status(200).json({ top: topData.items });
  }

  const data = await nowPlaying.json();
  return res.status(200).json({ current: data });
}
