# Projet de page de profil utilisateur - SportSee

Ce projet consiste à développer une page de profil utilisateur pour l'application de coaching sportif SportSee. La page permettra à l'utilisateur de suivre le nombre de sessions réalisées et le nombre de calories brûlées.

## Prérequis

Pour exécuter ce projet, vous aurez besoin de:

- Node.js et npm (vérifiez que vous avez installé la dernière version stable de ces outils en exécutant `node -v` et `npm -v` dans votre terminal)
- Une installation de React (créée en utilisant `npx create-react-app`)
- Une installation de D3 ou Recharts (selon la bibliothèque que vous avez choisie pour afficher les graphiques)
- Un serveur backend Node.js (installation et configuration détaillées disponibles à l'adresse indiquée dans les informations techniques ci-dessous)

## Installation

1. Clonez ce dépôt sur votre ordinateur
2. Ouvrez un terminal et accédez au répertoire du projet
3. Exécutez `npm install` pour installer les dépendances du projet
4. Créez un fichier `.env` à la racine du projet et définissez les variables d'environnement nécessaires (consultez le fichier `.env.example` pour savoir quelles variables sont nécessaires)
5. Exécutez `npm run start` pour lancer l'application en mode développement

## Informations techniques

- Pour afficher les graphiques, vous pouvez utiliser D3 ou Recharts. Importez la bibliothèque choisie dans votre projet et utilisez-la pour afficher les données de l'utilisateur.
- Pour la gestion des appels HTTP, vous pouvez utiliser Fetch ou Axios. Créez un service à part pour gérer ces appels et ne les incluez pas directement dans les composants React.
- Pour formater correctement les données de l'API, créez une classe de modélisation des données qui sera utilisée pour s'assurer que les données sont toujours présentées de manière cohérente.
- Le backend Node.js se trouve à l'adresse [BACKEND_URL]. Suivez les instructions d'installation et de configuration pour mettre en place le serveur.
- La documentation de l'application inclut des Proptypes pour chaque composant React et des commentaires JSdoc pour les fonctions et méthodes.