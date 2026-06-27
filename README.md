# 🧠 Quiz Builder (React + NestJS + Prisma)

Quiz Builder — це навчальний проєкт для створення динамічних квізів із питаннями різних типів.  
Фронтенд побудований на React + React Hook Form + Zod, бекенд на NestJS + Prisma.

---

# 🚀 Основний функціонал

- Створення квізу
- Додавання/видалення питань
- Вибір типу питання:
  - INPUT (текстова відповідь)
  - BOOLEAN (так / ні)
  - CHECKBOX (множинний вибір — без options на етапі create)
- Валідація форми через Zod
- Збереження в базу через NestJS + Prisma

---

# 🧱 Технології

## Frontend

- React
- TypeScript
- React Hook Form
- Zod
- Axios

## Backend

- NestJS
- Prisma
- PostgreSQL

---

# 📦 Структура даних

## Quiz

```ts
{
  id: string;
  title: string;
  questions: Question[];
}
```

# Запуск проєкту

## Встановлення залежностей

cd frontend/
npm install

cd backend/
npm install

## 🖥️ Запуск frontend

npm run dev

---

## ⚙️ Запуск backend

npm run start:dev

---

## 🗄️ Prisma (база даних)

npx prisma migrate dev

npx prisma studio
