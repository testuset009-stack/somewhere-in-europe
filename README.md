# Somewhere in Europe

European map quiz engine for a TV display (`/`) and mobile host controller (`/host`).

## Quick Start

```bash
npm install
node server.cjs
```

- TV screen: `http://<local-ip>:3000/`
- Host controller: `http://<local-ip>:3000/host`
- Health check: `GET /health`

### Environment Variables

- `PORT` — HTTP port (default `3000`)
- `DATA_DIR` — writable folder for `state.json` and uploaded `.txt` packs (default `./data`)

## Production Features

- **Secret answer isolation**: `GET /api/state` hides `country`, `answerText`, and unrevealed `part2` while a question is active.
- **Optional Host PIN**: off by default; can be enabled or disabled inside Host Settings.
- **Secret TV Debug Drawer**: disabled by default; toggle by tapping 5 times in the top-left corner (or title on the waiting screen), pressing `Ctrl+Shift+D`, or opening `/?debug=1`.

## Question Pack Format (`.txt`)

```txt
#1 [FR]
Question part 1 text...
+++
Optional extra clue (part 2, half points)
---
France — short explanation shown after reveal
```
