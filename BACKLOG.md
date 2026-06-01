# SNO Website — Backlog
_Last updated: 2026-06-01_

## ✅ Completado

- Todos los 28 operadores tienen `.md` de lore (alineado con descripción YouTube)
- HTML dossiers creados para todos los 28 operadores
- Ops 01–26 desbloqueados en el website
- Ops 27 (Velvet Marquee) y 28 (Static Bloom) tienen dossier listo, carta LOCKED
- Website desplegado en Vercel
- DOSSIER-SPEC.md: spec canónico para crear dossiers
- Sistema de estados: released / scheduled / unlocked / locked

---

## 🔴 Alta prioridad

### 1. Conectar GitHub → Vercel auto-deploy
Actualmente se requiere `vercel --prod` manual en cada push.

**Fix:** Vercel dashboard → proyecto "website" → Settings → Git → conectar `silverquevedo/sno-website`
→ cada `git push` a `main` despliega automáticamente.

---

### 2. Featured operators dinámicos en Home
Los 3 featured están hardcodeados en `src/pages/index.astro` (índices 26, 27, 24).

**Fix rápido (1 línea):**
```ts
const featured = OPERATORS.filter(op => op.slug && op.released).slice(-3).reverse();
```

---

### 3. Desbloquear ops 27 y 28 cuando estén listas
Cuando el video de YouTube esté público:
1. `operators.ts` → cambiar `released: false` a `released: true`
2. `git push` → auto-deploy

Op 27 (Velvet Marquee) y op 28 (Static Bloom) ya tienen dossier HTML listo.

---

## 🟡 Media prioridad

### 4. Página 404 custom
Crear `src/pages/404.astro` con estilo SNO.
```
SIGNAL LOST
OPERATOR NOT FOUND · CODE 404
← Return to Grid
```

### 5. Hero con imagen de fondo
El hero usa solo gradiente CSS. Agregar imagen de ciudad cyberpunk + overlay.
```css
.hero { background-image: url('/images/hero-city.jpg'); }
```

### 6. Dominio personalizado
Agregar dominio custom en Vercel dashboard si existe.

---

## 🟢 Baja prioridad / Fase siguiente

### 7. DB auto-unlock (Neon + SSR)
Elimina el edit manual de operators.ts. El video pasa a público en YouTube → la carta se desbloquea sola.

**Stack:** Neon (Postgres serverless) + Astro SSR (`output: 'server'` + `@astrojs/vercel`) + Vercel Cron que consulta YouTube Data API cada 5 min.

Ver plan detallado en `../.claude/plans/listo-entonces-hagamos-esto-imperative-book.md` (Workstream C2–5).

### 8. Página de Facciones (`/factions`)
Descripción + color + lista de operadores por facción.

### 9. Búsqueda de operadores
Filtro client-side por nombre/facción sobre el grid.

### 10. Dossier como componentes Astro
Reemplazar el `<iframe>` actual por componentes Astro nativos. Mejor integración con nav y estilos globales.

---

## 📌 Próximo chat

1. **Conectar GitHub auto-deploy** — 5 min en Vercel dashboard
2. **Featured dinámico** — 1 línea de código
3. **404 page** — rápido, impacto visual inmediato
