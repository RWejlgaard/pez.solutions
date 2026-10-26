# pez.solutions

The website of Pez Solutions Ltd, the company behind [Updawg](https://updawg.net).
Astro, static output, no JavaScript; the look is updawg.net's.

```sh
npm ci
npm run dev      # http://localhost:4321
npm run check && npm run build
```

A push to `master` builds the site and rsyncs `dist/` to `/srv/pez.solutions`
on helsinki-a, where Caddy serves it. The release workflow also publishes a
Docker image (`rwejlgaard/pez.solutions`) for PRs titled `major:`, `minor:`,
`fix:` or `chore:`.
