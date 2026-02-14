import { useEffect, useState } from "react";

export default function NowPlaying() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://www.sknk.fyi/api/now-playing");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Spotify fetch error:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return <div style={{ opacity: 0.6 }}>Loading…</div>;

  const current = data.current?.item;
  const topTracks = data.top?.slice(0, 5) || [];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* ================= NOW PLAYING ================= */}
      <div>
        <div
          style={{
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            opacity: 0.5,
            marginBottom: "0.6rem",
          }}
        >
          Now Playing
        </div>

        {current ? (
          <a
            href={current.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              gap: "0.85rem",
              textDecoration: "none",
              color: "inherit",
              alignItems: "center",
            }}
          >
            <img
              src={current.album.images[0]?.url}
              alt="album"
              style={{
                width: 64,
                height: 64,
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
            <div>
              <div style={{ fontWeight: 600 }}>{current.name}</div>
              <div style={{ opacity: 0.7, fontSize: "0.9rem" }}>
                {current.artists.map((a) => a.name).join(", ")}
              </div>
            </div>
          </a>
        ) : (
          <div style={{ opacity: 0.5 }}>Nothing playing right now</div>
        )}
      </div>

      {/* ================= TOP TRACKS ================= */}
      {topTracks.length > 0 && (
        <div>
          <div
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              opacity: 0.5,
              marginBottom: "0.6rem",
            }}
          >
            Top Tracks
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            {topTracks.map((track) => (
              <a
                key={track.id}
                href={track.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  opacity: 0.85,
                  transition: "opacity 0.2s ease",
                }}
              >
                {track.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
