# beyond-tab

## 環境構築

```sh
docker compose up -d
```

## ログの確認方法

```sh
docker compose logs -f
```

## コマンドの実行方法

```sh
docker compose exec app cat /app/package.json
```

## format

```sh
docker compose exec app yarn format
```
