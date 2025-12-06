# Animalia (Batch 10)

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

Open http://localhost:3000

## API Documentation

- Local: `http://localhost:3000`
- Production: `https://animalia-10.haidar.dev`

| Endpoint          | HTTP     | Description         | Available |
| ----------------- | -------- | ------------------- | --------- |
| `/animals`        | `GET`    | Get all animals     | ✅        |
| `/animals/{slug}` | `GET`    | Get animal by id    | ✅        |
| `/animals`        | `POST`   | Add new animal      |           |
| `/animals`        | `DELETE` | Delete all animals  |           |
| `/animals/{id}`   | `DELETE` | Delete animal by id |           |
| `/animals/{id}`   | `PATCH`  | Patch animal by id  |           |
| `/animals/{id}`   | `PUT`    | Update animal by id |           |
