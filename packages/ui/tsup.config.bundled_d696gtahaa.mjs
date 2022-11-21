// tsup.config.ts
import { defineConfig } from 'tsup';
var config = {
  entry: ['src/**/index.{ts,tsx}'],
  target: 'es6',
  minify: true,
  clean: true,
  format: ['esm'],
  dts: true,
  silent: true,
  sourcemap: true,
};
var tsup_config_default = defineConfig(config);
export { tsup_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL1VzZXJzL3N0ZXZlbl9jaG9uZy9Eb3dubG9hZHMvcmVwb3MvYmlnLWRpcHBlci0yLjAtY29zbW9zL3BhY2thZ2VzL3VpL3RzdXAuY29uZmlnLnRzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIi9Vc2Vycy9zdGV2ZW5fY2hvbmcvRG93bmxvYWRzL3JlcG9zL2JpZy1kaXBwZXItMi4wLWNvc21vcy9wYWNrYWdlcy91aVwiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vVXNlcnMvc3RldmVuX2Nob25nL0Rvd25sb2Fkcy9yZXBvcy9iaWctZGlwcGVyLTIuMC1jb3Ntb3MvcGFja2FnZXMvdWkvdHN1cC5jb25maWcudHNcIjsvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCB7IGRlZmluZUNvbmZpZywgT3B0aW9ucyB9IGZyb20gJ3RzdXAnO1xuXG5jb25zdCBjb25maWc6IE9wdGlvbnMgPSB7XG4gIGVudHJ5OiBbJ3NyYy8qKi9pbmRleC57dHMsdHN4fSddLFxuICB0YXJnZXQ6ICdlczYnLFxuICBtaW5pZnk6IHRydWUsXG4gIGNsZWFuOiB0cnVlLFxuICBmb3JtYXQ6IFsnZXNtJ10sXG4gIGR0czogdHJ1ZSxcbiAgc2lsZW50OiB0cnVlLFxuICBzb3VyY2VtYXA6IHRydWUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoY29uZmlnKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUE2QjtBQUV0QyxJQUFNLFNBQWtCO0FBQUEsRUFDdEIsT0FBTyxDQUFDLHVCQUF1QjtBQUFBLEVBQy9CLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFBQSxFQUNQLFFBQVEsQ0FBQyxLQUFLO0FBQUEsRUFDZCxLQUFLO0FBQUEsRUFDTCxRQUFRO0FBQUEsRUFDUixXQUFXO0FBQ2I7QUFFQSxJQUFPLHNCQUFRLGFBQWEsTUFBTTsiLAogICJuYW1lcyI6IFtdCn0K