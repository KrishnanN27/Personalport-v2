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

  const topTracks = Array.isArray(data?.top) ? data.top.slice(0, 5) : [];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {topTracks.length > 0 && (
        <div>
          <div
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              opacity: 0.5,
              marginBottom: "0.8rem",
            }}
          >
            Top Tracks
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(70px, 1fr))",
              gap: "0.8rem",
            }}
          >
            {topTracks.map((track) => (
              <a
                key={track.id}
                href={track.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={track.album.images[0]?.url}
                  alt="album"
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
