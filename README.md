# web-application

# 🌐 Web Application — Spring Boot + React (Next.js)

Простое интерактивное веб-приложение, где пользователь вводит своё имя, нажимает кнопку, и получает персональное приветствие.  
Полностью написано на **Spring Boot (backend)** и **React / Next.js (frontend)**. В проекте применён **TDD-подход**, ручная настройка CORS и адаптивный дизайн.

---

## 🚀 Функции

- 🔁 REST API на `/greet?name=...`
- 💬 Ответ от сервера: `Hello, Aruzhan!`
- 🎨 UI на React + Tailwind CSS
- 🔒 CORS-настройка вручную (`WebConfig.java`)
- ✅ Юнит-тесты (`HelloControllerTest`)
- 🖥 Разворачивается локально на 2 портах: `8080` и `3000`

---

## 🛠 Технологии

- Java 21
- Spring Boot 3.5
- React + Next.js 15
- Tailwind CSS
- Gradle

---

## 📦 Установка и запуск

### 🔧 Backend (Spring Boot)

```bash
cd demo
.\gradlew bootRun

### 🔧 frontend
cd frontend
npm install
npm run dev

