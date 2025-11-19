A small toolkit to automatically collect, store and visualise OpenClimateFix (OCF) operational metrics — for example: newsletter subscribers, Twitter followers, GitHub stars, Cloudflare pageviews, and Open Collective balances.

All time-series data live in the `data/` directory and are updated by scheduled workflows. The repo includes lightweight fetch scripts that call public APIs and append timestamped values to JSON files, plus a simple Next.js frontend to visualise the results.

**Quick Links**
- **Data:** `data/`
- **Fetch scripts:** `get-opencollective.js`, `get-twitter.js`, `get-mailchimp.js`, `get-github.js`, `get-cloudflare.js`
- **Frontend:** `metrics-frontend/` (Next.js)
- **License:** `LICENSE.md`

**What this repo does**
- Periodically queries public APIs (Open Collective, Twitter, Mailchimp, GitHub, Cloudflare) and appends timestamped numeric values into JSON time-series files under `data/`.
- Provides a small Next.js dashboard in `metrics-frontend/` to visualise curated metrics with simple charts.
- Uses GitHub Actions to run the fetch scripts on schedule and commit updated data back to the repository.

Getting started
--------------

1. Clone the repo and install dependencies (root and frontend):

```bash
git clone <repo-url>
cd metrics
npm install
cd metrics-frontend
npm install
```

2. Run a fetch script locally (from the repository root). Each script writes into `data/`:

```bash
# run directly with node
node get-opencollective.js
node get-twitter.js
node get-mailchimp.js
node get-github.js
node get-cloudflare.js

# or, if npm scripts are defined, use (example):
npm run get-opencollective
```

3. Run the frontend (development mode):

```bash
cd metrics-frontend
npm run dev
# open http://localhost:3000
```

Environment variables & secrets
------------------------------
Some fetch scripts may require API keys or environment variables (e.g. Mailchimp, Cloudflare or Twitter tokens). Inspect each script (e.g. `get-mailchimp.js`) for required env vars and configure them locally or in GitHub Actions secrets.

Data format
-----------
Time-series are stored as JSON arrays inside `data/`. Each entry is a small object containing a timestamp and numeric value — for example:

```json
[
	{ "x": "2025-01-01T00:00:00Z", "y": 123 },
	{ "x": "2025-01-02T00:00:00Z", "y": 126 }
]
```

Contributing
------------
- Keep the `data/` files as time-ordered arrays of timestamp/value objects.
- If you add or modify a fetch script, also update the corresponding workflow in `.github/workflows/`.
- For frontend changes, update files in `metrics-frontend/` and run the dev server to preview.
- Small improvements and documentation fixes are welcome — please send a pull request from a feature branch.

Notes & references
------------------
- This repository is for operational metrics for the organisation. For ML experiment metrics and forecasting, see `nowcasting_utils`: https://github.com/openclimatefix/nowcasting_utils
- The frontend uses Tailwind CSS. See `metrics-frontend/package.json` and `metrics-frontend/styles/` for more details.

License
-------
See `LICENSE.md`.
