import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
app.use(cors());

const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
} = process.env;

const basic = Buffer.from(
  `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
).toString("base64");

/* ================= GET REFRESH TOKEN (ONE TIME) ================= */

app.get("/callback", async (req, res) => {
  const code = req.query.code;

  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: "https://effie-hydrocinnamyl-immaturely.ngrok-free.dev/api/spotify/callback",
    }),
    {
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  res.json(response.data);
});

/* ================= NOW PLAYING ================= */

app.get("/spotify", async (req, res) => {
  try {
    const tokenResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: SPOTIFY_REFRESH_TOKEN,
      }),
      {
        headers: {
          Authorization: `Basic ${basic}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const access_token = tokenResponse.data.access_token;

    const nowPlaying = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );

    if (nowPlaying.status === 204 || !nowPlaying.data) {
      return res.json({ isPlaying: false });
    }

    const track = nowPlaying.data.item;

    res.json({
      isPlaying: nowPlaying.data.is_playing,
      title: track.name,
      artist: track.artists.map(a => a.name).join(", "),
      albumImageUrl: track.album.images[0].url,
      songUrl: track.external_urls.spotify,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Spotify data" });
  }
});

app.listen(3000, () =>
  console.log("Spotify server running on http://localhost:3000")
);
