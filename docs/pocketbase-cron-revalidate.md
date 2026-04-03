# PocketBase cron + manual revalidate

## 1) Добавить `pb_hooks` в docker-compose PocketBase

```yaml
services:
  pocketbase:
    environment:
      REVALIDATE_SECRET: "<same-secret-as-nextjs>"
      NEXT_REVALIDATE_URL: "https://volimfit.ru/api/revalidate"
    volumes:
      - ./pb_data:/pb_data
      - ./pb_public:/pb_public
      - ./pb_migrations:/pb_migrations
      - ./pb_hooks:/pb_hooks
```

## 2) Положить hook файл

Скопируйте:

`scripts/pocketbase/revalidate-crons.pb.js`

на сервер PocketBase в:

`/opt/pocketbase/pb_hooks/revalidate-crons.pb.js`

## 3) Перезапустить PocketBase

```bash
cd /opt/pocketbase
docker compose up -d
```

## 4) Проверка в админке PocketBase

`Settings -> Crons`

Должны появиться 2 job:

- `revalidate_trainers`
- `revalidate_public_offer_files`

Кнопка `▶` запускает job вручную (принудительное обновление сайта).
