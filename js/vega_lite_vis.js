const charts = [
  ["#vis1", "specs/01_network_map.json"],
  ["#vis2", "specs/02_station_density_grid.json"],
  ["#vis3", "specs/03_station_count_by_line.json"],
  ["#vis4", "specs/04_monthly_ridership_trend.json"],
  ["#vis5", "specs/05_latest_ridership_ranking.json"],
  ["#vis6", "specs/06_day_of_week_heatmap.json"],
  ["#vis7", "specs/07_weekday_weekend_comparison.json"],
  ["#vis8", "specs/08_frequency_headway.json"],
  ["#vis9", "specs/09_brt_od_heatmap.json"],
  ["#vis10", "specs/10_brt_top_pairs.json"],
  ["#vis11", "specs/11_brt_stop_map.json"],
  ["#vis12", "specs/12_interchange_stations.json"]
];

charts.forEach(([selector, spec]) => {
  vegaEmbed(selector, spec, {
    actions: false,
    renderer: "svg"
  }).catch(error => {
    console.error(`Error loading ${spec}:`, error);
    document.querySelector(selector).innerHTML =
      `<p class="error">Could not load ${spec}. Check file paths and run through a local server.</p>`;
  });
});
