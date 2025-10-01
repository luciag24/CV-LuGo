# EmailJS Setup Instructions

## 🚨 AKTUÁLNY STAV
Formulár momentálne funguje s dočasným riešením - otvára email klient. Pre skutočné odosielanie emailov musíte nastaviť EmailJS.

## Krok 1: Vytvorenie EmailJS účtu
1. Choďte na https://www.emailjs.com/
2. Kliknite "Sign Up" a zaregistrujte sa
3. Po prihlásení kliknite "Create New Service"

## Krok 2: Nastavenie Email Service
1. V EmailJS dashboarde choďte na "Email Services"
2. Kliknite "Add New Service"
3. Vyberte "Gmail" 
4. Pripojte svoj Gmail účet (lucia.gogolova81@gmail.com)
5. **SKOPÍRUJTE "Service ID"** (napr. "service_abc123")

## Krok 3: Vytvorenie Email Template
1. Choďte na "Email Templates"
2. Kliknite "Create New Template"
3. Nastavte template takto:

**Subject:** {{subject}}

**Content:**
```
Odosielateľ: {{from_name}}
Email: {{from_email}}
Predmet: {{subject}}

Správa:
{{message}}

---
Táto správa bola odoslaná cez kontaktný formulár na vašej webovej stránke.
```

4. **SKOPÍRUJTE "Template ID"** (napr. "template_xyz789")

## Krok 4: Získanie Public Key
1. Choďte na "Account" → "General"
2. **SKOPÍRUJTE "Public Key"** (napr. "user_abcdef123456")

## Krok 5: Aktualizácia kódu
V súbore `components/Navigation.tsx` na riadkoch 45-47 nahraďte:

```javascript
const serviceId = 'service_abc123' // Váš skutočný Service ID
const templateId = 'template_xyz789' // Váš skutočný Template ID  
const publicKey = 'user_abcdef123456' // Váš skutočný Public Key
```

## Krok 6: Testovanie
1. Spustite aplikáciu: `npm run dev`
2. Kliknite na "Kontakt" v hlavičke
3. Vyplňte formulár a odošlite
4. Skontrolujte svoj email (lucia.gogolova81@gmail.com)

## 🔧 Riešenie problémov
- **"Chyba pri odosielaní"** = EmailJS nie je nastavený
- **"Invalid service ID"** = Zle skopírovaný Service ID
- **"Template not found"** = Zle skopírovaný Template ID

## Poznámky
- EmailJS má bezplatný plán s 200 emailami mesačne
- Všetky emaily budú prichádzať na váš Gmail účet
- Môžete nastaviť automatické odpovede v Gmail
