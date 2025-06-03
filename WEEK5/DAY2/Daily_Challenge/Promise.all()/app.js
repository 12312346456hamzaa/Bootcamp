document.getElementById("sunrise-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  
  const lat1 = document.getElementById("lat1").value;
  const lng1 = document.getElementById("lng1").value;
  const lat2 = document.getElementById("lat2").value;
  const lng2 = document.getElementById("lng2").value;

  const url1 = `https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${lng1}&formatted=0`;
  const url2 = `https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lng2}&formatted=0`;

  
  const promise1 = fetch(url1)
    .then(res => {
      if (!res.ok) throw new Error("Error fetching City 1");
      return res.json();
    });
  const promise2 = fetch(url2)
    .then(res => {
      if (!res.ok) throw new Error("Error fetching City 2");
      return res.json();
    });

  
  try {
    const [data1, data2] = await Promise.all([promise1, promise2]);
    
    const sunrise1 = new Date(data1.results.sunrise).toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' });
    const sunrise2 = new Date(data2.results.sunrise).toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' });

    document.getElementById("result").innerHTML = `
      <p><strong>City 1 Sunrise:</strong> ${sunrise1} (UTC)</p>
      <p><strong>City 2 Sunrise:</strong> ${sunrise2} (UTC)</p>
    `;
  } catch (err) {
    document.getElementById("result").textContent = "Error: " + err.message;
  }
});
