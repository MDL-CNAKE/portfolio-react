# Portfolio — Marguerite El Mbimbey

Portfolio personnel en React + TypeScript + Tailwind CSS + Framer Motion avec animations et fond de code défilant.

## Développement local

```bash
npm install
npm run dev
```

Ouvre http://localhost:5173

## Build de production

```bash
npm run build
```

Le résultat est généré dans `dist/`.

## Déployer sur Vercel (recommandé)

1. Crée un nouveau dépôt GitHub (par exemple `portfolio-react`) et pousse ce dossier dedans :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/MDL-CNAKE/portfolio-react.git
   git push -u origin main
   ```
2. Va sur [vercel.com](https://vercel.com) et connecte-toi avec ton compte GitHub.
3. Clique sur "Add New Project", sélectionne le dépôt `portfolio-react`.
4. Vercel détecte automatiquement Vite — laisse les réglages par défaut et clique "Deploy".
5. En quelques secondes, ton site est en ligne sur une URL du type `portfolio-react.vercel.app` (tu peux ensuite lui donner un nom personnalisé dans les réglages du projet).

Chaque `git push` sur `main` republie automatiquement le site.

## Modifier le contenu

Tout le contenu (profil, compétences, projets, parcours) se trouve dans un seul fichier :
`src/data.ts`

Les sections visuelles sont dans `src/components/` : `Hero.tsx`, `About.tsx`, `Projects.tsx`, `Timeline.tsx`, `Contact.tsx`.
