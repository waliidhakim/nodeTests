const express = require('express');
const app = express();
const port = 3000; // Vous pouvez changer le numéro de port selon vos besoins

// Route par défaut
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Écouter le serveur sur le port spécifié
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});