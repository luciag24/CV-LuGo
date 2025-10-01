# Environment Variables Setup

## Pre lokálny vývoj:

Vytvorte súbor `.env.local` v root priečinku projektu s týmito premennými:

```env
# EmailJS konfigurácia
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_dfa7sbr
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_lv25xjb
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=ApNrXwpFkbsnBFqVv

# Osobné údaje
NEXT_PUBLIC_PERSONAL_EMAIL=lucia.gogolova81@gmail.com
NEXT_PUBLIC_PERSONAL_PHONE=+421 949 612 457
NEXT_PUBLIC_PERSONAL_GITHUB=https://github.com/luciag24
```

## Pre produkčné nasadenie (Vercel):

1. **Vercel Dashboard** → váš projekt
2. **Settings** → **Environment Variables**
3. **Pridajte tieto premenné:**
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = `service_dfa7sbr`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = `template_lv25xjb`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = `ApNrXwpFkbsnBFqVv`
   - `NEXT_PUBLIC_PERSONAL_EMAIL` = `lucia.gogolova81@gmail.com`
   - `NEXT_PUBLIC_PERSONAL_PHONE` = `+421 949 612 457`
   - `NEXT_PUBLIC_PERSONAL_GITHUB` = `https://github.com/luciag24`

## Bezpečnosť:

- ✅ **Citlivé údaje** sú v `.gitignore`
- ✅ **Environment premenné** sa nepoužijú v kóde
- ✅ **Fallback hodnoty** pre lokálny vývoj
- ✅ **Bezpečné nasadenie** na Vercel

## Poznámky:

- `NEXT_PUBLIC_` prefix je potrebný pre client-side premenné
- Vercel automaticky načíta environment premenné
- Lokálne môžete použiť `.env.local` súbor


