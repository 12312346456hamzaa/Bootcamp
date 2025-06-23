import React from 'react';

function App() {
  const handleClick = async () => {
    const webhookUrl = "https://webhook.site/TON_URL_ICI"; // Remplace avec ton lien unique

    const data = {
      key1: 'myusername',
      email: 'myemail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.text(); // webhook.site retourne souvent du texte
      console.log('Réponse reçue :', result);
    } catch (error) {
      console.error('Erreur lors de l’envoi :', error);
    }
  };

  return (
    <div className="App">
      <h1>Exercise 4: Post JSON Data</h1>
      <button onClick={handleClick}>Send Data</button>
    </div>
  );
}

export default App;
