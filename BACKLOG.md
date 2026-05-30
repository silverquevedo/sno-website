# SNO Website — Backlog
_Last updated: 2026-05-29_

## 🔴 Alta prioridad

### 1. Dossiers HTML — operadores restantes
10 operadores ya tienen perfil en `Lore/Operators/` pero les falta el HTML del dossier.
Siguen la plantilla de `27-velvet-marquee.html`.
Cuando el HTML existe + video en YouTube → Phase 11 del album-producer → unlock en 2 min.

| # | Operator | .md existe | HTML | Desbloqueado |
|---|----------|-----------|------|-------------|
| 01 | Machine Control | ✅ | ❌ | ❌ |
| 03 | Neural Sands | ✅ | ❌ | ❌ |
| 05 | Midnight Runes | ✅ | ❌ | ❌ |
| 08 | Tribal Circuits | ✅ | ❌ | ❌ |
| 22 | Inescapable Vortex | ✅ | ❌ | ❌ |
| 23 | Ghost Signal | ✅ | ❌ | ❌ |
| 24 | VEX | ✅ | ❌ | ❌ |
| 25 | Ferro Reign | ✅ | ❌ | ❌ |
| 26 | Chrome Hazard | ✅ | ❌ | ❌ |
| 27 | Velvet Marquee | ✅ | ✅ | ✅ |
| 28 | Static Bloom | ✅ | ❌ | ❌ |

**Unlock workflow:** editar `src/data/operators.ts` → campos `lore` y `slug` → `npm run build` → deploy.

---

### 2. Deploy a Vercel (hacer la web pública)
- Conectar el repo a Vercel → auto-deploy en cada `git push`
- Configurar dominio personalizado si existe
- Actualmente solo corre local (`npm run dev` → localhost:4321)

**Pasos:**
1. `vercel login` (o usar dashboard web)
2. `cd website && vercel` → seguir el wizard
3. Configurar: Framework = Astro, Build Command = `npm run build`, Output = `dist`
4. Agregar dominio en Vercel dashboard

---

## 🟡 Media prioridad

### 3. Home — Featured operators dinámicos
Actualmente los 3 featured están hardcodeados (índices 26, 27, 24) en `src/pages/index.astro`.

**Fix:** mostrar automáticamente los últimos N operadores desbloqueados:
```ts
const featured = OPERATORS.filter(op => op.slug).slice(-3).reverse();
```

---

### 4. Hero con imagen de fondo
El hero actual usa solo gradiente CSS.
Opción: imagen de ciudad cyberpunk como background + overlay oscuro encima del título de neón.

```css
.hero {
  background-image: url('/images/hero-city.jpg');
  background-size: cover;
  background-position: center;
}
.hero-bg { /* overlay oscuro encima */ }
```

---

### 5. Página 404 custom
Crear `src/pages/404.astro` con el estilo SNO.

Mensaje sugerido:
```
SIGNAL LOST
OPERATOR NOT FOUND · CODE 404
← Return to Grid
```

---

## 🟢 Baja prioridad / Fase 3

### 6. Dossier como componentes Astro (reemplazar iframe)
El dossier actual se embebe via `<iframe>` dentro de `[slug].astro`.
Migrar a componentes Astro propios para mejor integración con el nav y estilo global.

Layout masonry/bento planeado:
- Hero art full-width (40vh)
- Classification block (8 cols) + Stat sidebar (4 cols)
- Four Movements (full width)
- Relationships (6 cols) + Field Notes (6 cols)
- Tracklist (full width)

---

### 7. Base de datos — Unlock automático (Supabase)
**Cuándo:** cuando quieras que la carta se desbloquee sola al publicarse el video en YouTube.

**Stack:**
- Supabase (Postgres + REST, free tier) — tabla `operators` con `slug`, `lore_path`, `unlocked_at`, `youtube_url`
- Astro SSR mode (`output: 'server'` + `@astrojs/vercel`)
- Cron o webhook: YouTube Data API polling cada 5 min → `status=public` → escribe `unlocked_at`

Hasta entonces: Phase 11 del album-producer es un edit manual de 2 minutos.

---

### 8. Página de Facciones (`/factions`)
- Descripción + color de cada facción
- Lista de operadores por facción
- Mapa MapLibre como vista secundaria (fue removido del grid de operators por UX)

---

### 9. Búsqueda de operadores
Filtro por texto sobre el grid, client-side:
```js
input.addEventListener('input', () => {
  const q = input.value.toLowerCase();
  cards.forEach(c => c.classList.toggle('hidden',
    !c.dataset.name?.includes(q) && !c.dataset.faction?.includes(q)
  ));
});
```

---

## 📌 Próximo chat — Por dónde empezar

1. **Deploy a Vercel** — la web necesita ser pública antes de que tenga sentido desbloquear operadores
2. **Dossier HTML del siguiente operador** — usar plantilla de Velvet Marquee → Phase 11 → unlock
3. **Featured dinámico** — fix rápido (1 línea) para que el home siempre muestre los más recientes
