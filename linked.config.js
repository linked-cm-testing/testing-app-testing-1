export default {
  // CN queries this app only with the DSL: raw SPARQL (/api/select-raw) is refused.
  server: { rawQueries: 'off' },
  cssMode: 'tailwind',
  // Materialize this app's registered shapes into its data store on boot (default).
  syncShapesOnBoot: true,
};
