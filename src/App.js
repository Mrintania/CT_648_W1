import React, { useEffect, useState } from "react";

function App() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);

  // ฟังก์ชันดึงข้อมูลจาก API
  const fetchJoke = () => {
    setLoading(true);
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.joke);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching joke:", error);
        setLoading(false);
      });
  };

  // เรียกใช้ฟังก์ชัน fetchJoke ครั้งแรกเมื่อโหลดหน้า
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Dad Joke</h1>
      {loading ? <p>Loading...</p> : <p>{joke}</p>}
      {/* ปุ่มสำหรับดึงข้อมูลใหม่ */}
      <button onClick={fetchJoke} disabled={loading} style={{ marginTop: "20px" }}>
        {loading ? "Loading..." : "Get New Joke"}
      </button>
    </div>
  );
}

export default App;