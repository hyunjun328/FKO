# Twelve-hour collector expansion checklist

- [x] Audit the existing scheduled workflow and generated data dependencies.
- [x] Schedule a single UTC-aligned twelve-hour collection run.
- [x] Collect Fight Matrix rankings and verified Wikimedia Commons fighter photos in that run.
- [x] Commit every generated schedule, result, ranking, image, and status artifact only when changed.
- [x] Add workflow dependency installation and validate generated outputs locally.
- [x] Deploy the verified workflow update.
