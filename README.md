# 📺 Streaming Dashboard — Next.js 14 + TypeScript + Tailwind

A mini streaming service dashboard (Netflix-style UI) built using **Next.js App Router**, **TypeScript**, **Tailwind CSS**, and **The Movie Database (TMDB API)**.
This project displays a hero banner, multiple horizontal movie rows, and dynamic movie detail pages — fully responsive and deployable on Vercel.

---

## 🚀 Features

* ⚡ **Next.js 14 App Router**
* 🎨 **Tailwind CSS UI** (responsive & modern layout)
* 🍿 **TMDB API integration**
* 🖼️ Hero banner (server-rendered)
* 🎞️ Horizontal scrollable movie rows (client components)
* 🔍 Dynamic movie details page `/movie/[id]`
* 🧩 Clean folder structure & reusable components
* 🌐 Vercel deployment ready
* 🔐 Environment variables for API Key
* 🔎 TypeScript interfaces for API responses

---

## 📁 Project Structure

```
streaming-dashboard/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── movie/
│       └── [id]/
│           └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── HeroBanner.tsx
│   ├── MovieRow.tsx
│   └── MovieCard.tsx
├── lib/
│   └── tmdb.ts
├── types/
│   └── movie.ts
├── public/
├── next.config.js
├── tailwind.config.js
├── package.json
├── README.md
└── AI_Report.md
```

---

## 🛠️ Tech Stack

* **Next.js 14 (App Router)**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **TMDB API**
* **Vercel Deployment**

---

## 🔑 Environment Variables

Create a `.env.local` file in the root:

---

## 🔧 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/farazsfa007/first-skill-nxtwave-assignment
cd first-skill-nxtwave-assign
```

### 2️⃣ Install dependencies

Using npm:

```bash
npm install
```

or pnpm:

```bash
pnpm install
```

### 3️⃣ Add environment variables

Create `.env.local`:


### 4️⃣ Run the development server

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 📦 Build for production

```bash
npm run build
npm start
```

---

## 🚢 Deployment (Vercel)

Deployment Link:- https://first-skill-nxtwave-assignment-armbgjblr.vercel.app/

---

## 🧩 Components Overview

### ⭐ HeroBanner

* Shows a large backdrop from the most popular movie.
* Server-rendered for better SEO.

### 🎬 MovieRow

* Horizontally scrollable list of movie posters.
* Fully client-side interactive.

### 🎞️ MovieCard

* Image + movie title.
* Links to dynamic `/movie/[id]` page.

### 📄 Movie Detail Page

Displays:

* Movie poster
* Title
* Overview
* Genres
* Release date
* Rating

---

or downgrade to Next.js 14 stable.

---

## 📄 License

---
