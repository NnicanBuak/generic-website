# Генерация синтаксического контента

## Запуск с использованием Docker
1. Запустить Docker Engine
2. `docker compose up --detach --build`

## Ручной запуск
1. `pnpm install --production || yarn install --production || npm install --production`
2. `pnpm run api || yarn run api || npm run api`
3. `pnpm run database || yarn run database || npm run database`
4. `pnpm run web || yarn run web || npm run web`