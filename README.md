# FIT2179 DV2 Public Transport Starter Site

## How to run locally

Because Vega-Lite loads local CSV/GeoJSON files, open this project through a local server.

### Option 1: VS Code Live Server
1. Open this folder in VS Code.
2. Install the Live Server extension.
3. Right-click `index.html`.
4. Click **Open with Live Server**.

### Option 2: Python local server
Open a terminal inside this folder and run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Folder structure

- `index.html` contains the webpage layout.
- `css/style.css` controls typography and layout.
- `js/vega_lite_vis.js` embeds the charts.
- `specs/` contains the Vega-Lite JSON files.
- `data/` contains the cleaned datasets.

## Important

Do not double-click `index.html` directly. Some charts may fail because browsers block local file loading.

## Current charts

1. Network map
2. Station density grid
3. Station count by line
4. Monthly ridership trend
5. April 2026 ridership ranking
6. Day-of-week heatmap
7. Weekday/weekend comparison
8. Frequency/headway comparison
9. BRT OD heatmap
10. BRT top pairs
11. BRT stop map
12. Interchange stations


## Idiom refinement notes

- `01_network_map.json` has been reframed as a station **dot map**. The station dots are the main marks. The route lines are pale contextual guides.
- `02_station_density_grid.json` has been reframed as a **bin map**. It now uses equal-sized square marks and colour luminance for station count, avoiding redundant size + colour encoding for the same quantitative attribute.
- Chart cards should not create internal horizontal or vertical scrollbars.
- The main page title and section headings use a serif typeface.
