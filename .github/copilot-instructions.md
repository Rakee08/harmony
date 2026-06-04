# Harmony - AI Coding Instructions

## Project Overview

Harmony is a premium offline music player built using React Native and TypeScript.

The goal is to create a production-quality music player focused on local music playback, excellent performance, and a premium user experience.

Harmony is NOT a streaming service.

Do not introduce streaming concepts, login flows, subscriptions, social features, or backend APIs unless explicitly requested.

---

## Tech Stack

* React Native (Latest Stable)
* TypeScript
* React Navigation
* Zustand
* React Native Reanimated
* React Native Gesture Handler
* React Native BootSplash
* Native Modules (Swift + Kotlin)
* SQLite (future phase)

---

## Architecture

Use Feature-First Architecture.

Folder Structure:

src/
features/
library/
player/
playlists/
search/
settings/

components/
navigation/
theme/
hooks/
store/
services/
types/

---

## Coding Standards

* Use functional components only.
* Use TypeScript everywhere.
* Avoid class components.
* Prefer composition over inheritance.
* Follow SOLID principles.
* Keep components small and reusable.
* Separate UI from business logic.

---

## UI Guidelines

Harmony follows:

* Apple Music level polish
* Native mobile interactions
* OLED dark theme
* Premium typography
* Album artwork focused design

Avoid:

* Excessive animations
* Flashy gradients
* Web-like layouts
* Over-engineering

---

## State Management

Use Zustand.

Avoid Redux.

Keep stores focused and feature-oriented.

---

## Navigation

Use React Navigation.

Bottom Tabs:

* Library
* Search
* Playlists
* Settings

A global Mini Player should eventually appear above the tab bar.

---

## Performance

Always prioritize:

* FlatList for large lists
* Memoization when necessary
* Avoid unnecessary re-renders
* Avoid anonymous functions in large lists

---

## Output Expectations

Generate clean, maintainable, production-ready code.

Prefer readability over cleverness.

Always explain important architectural decisions in comments when creating new modules.
