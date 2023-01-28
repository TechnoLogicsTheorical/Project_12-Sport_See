# Projet de page de profil utilisateur - SportSee
Ce projet consiste à développer une page de profil utilisateur pour l'application de coaching sportif SportSee. La page permettra à l'utilisateur de suivre le nombre de sessions réalisées et le nombre de calories brûlées.

## Prérequis
Pour exécuter ce projet, assurez-vous d'avoir installé les prérequis suivants sur votre ordinateur :

- Node.js et npm (vérifiez que vous avez installé la dernière version stable de ces outils en exécutant `node -v` et `npm -v` dans votre terminal)

## Installation
1. Créer 2 dossiers : Front_End et Back_End au sein d'un répertoire racine 'project_12-sport_see'.
2. Ouvrez un terminal et accédez au répertoire du 'Front_End'
3. Clonez le Repositery déstinée au Front: `git clone https://github.com/TechnoLogicsTheorical/Project_12-Sport_See`
4. Exécutez `npm install` pour installer les dépendances du projet
5. Dans un autre terminal, aller dans le dossier 'Back_End'
6. 
7. Clone le Repositery destinée au Back': `git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard`
8. Suivez maintenant, configuration du serveur Back End

## Configuration
1. Dans le dossier Back_End, ouvrez le fichier `app\index.js`
2. Modifier la déclaration de variable concernant le port à la ligne 8 correspondant à : `const port = 3000` en `const port = 3333`
3. Passer aux instructions de lancement


## Lancement
1. Rendez-vous dans le répertoire racine dont vos dossiers Front_End et Back_End sont en place.
2. Dans un terminal, exécutez la commande : `cd Front_End && npm start`
3. Dans un autre terminal, exécuter la commande : `cd Back_End && npm start`

## Utilisation
Au sein de la page dite Racine, vous aurez une première interface de contrôle pour basculer les données : en Mode API ou en données Mockées.

Qui est de base en mode de données Mockées pour ne pas poser de soucis, si le serveur API n'est pas disponible !

Si vous basculez, en mode serveur API et qu'il n'est pas lancer, une erreur sera relatée dans la console Web du navigateur !

Il y a deux choix utilisateurs disponibles, Karl et Cecilia qui vous afficheront les données relatées à chacun.