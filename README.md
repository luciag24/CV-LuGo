# Modern CV Portfolio

Moderný životopis a portfólio vytvorený s Next.js, TypeScript a Tailwind CSS.

## Funkcie

- 🎨 Moderný, čistý dizajn
- 📱 Responzívny layout
- ⚡ Rýchle načítanie s Next.js
- 🎯 Optimalizované pre SEO
- ♿ Prístupné (accessibility)
- 🌈 Krásne animácie a prechody

## Technológie

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Ikony
- **Framer Motion** - Animácie (voliteľné)

## Inštalácia

1. **Nainštalujte závislosti:**
   ```bash
   npm install
   ```

2. **Spustite vývojový server:**
   ```bash
   npm run dev
   ```

3. **Otvorte [http://localhost:3000](http://localhost:3000) vo vašom prehliadači**

## Prispôsobenie

### Základné informácie
Upravte súbor `app/page.tsx` a komponenty v priečinku `components/`:

- **Meno a tituly** - `components/Hero.tsx`
- **O mne sekcia** - `components/About.tsx`
- **Zručnosti** - `components/Skills.tsx`
- **Projekty** - `components/Experience.tsx`
- **Kontakt** - `components/Contact.tsx`

### Farby a štýly
Upravte `tailwind.config.js` pre zmenu farieb a `app/globals.css` pre vlastné štýly.

### Obrázky
Pridajte svoje obrázky do priečinka `public/` a upravte cesty v komponentoch.

## Štruktúra projektu

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── BackgroundShapes.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   └── Skills.tsx
├── public/
└── package.json
```

## Deployment

### Vercel (odporúčané)
1. Pushnite kód na GitHub
2. Pripojte repozitár k Vercel
3. Automatický deployment

### Iné platformy
```bash
npm run build
npm start
```

## Príklady úprav

### Zmena mena
```tsx
// components/Hero.tsx
<h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
  Vaše Skutočné Meno
</h1>
```

### Pridanie nového projektu
```tsx
// components/Experience.tsx
const projects = [
  {
    title: 'Môj nový projekt',
    description: 'Popis projektu...',
    tags: ['React', 'Node.js'],
    // ...
  },
  // ...
]
```

## Podpora

Ak máte otázky alebo potrebujete pomoc s prispôsobením, vytvorte issue v GitHub repozitári.

## Licencia

MIT License - môžete používať a upravovať podľa potreby. 