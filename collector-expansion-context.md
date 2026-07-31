# Twelve-hour collector expansion context

- The existing workflow currently runs every hour but commits only schedule, result, and visible check-time files. Ranking and photo collectors already exist locally but are not invoked by the workflow.
- The requested target is one run at 00:00 and 12:00 UTC, which is 09:00 and 21:00 Korea Standard Time. It will refresh public schedule and results, Fight Matrix rankings, verified Wikimedia Commons photos, and the visible schedule check time.
- Photos remain sourced only from verified Wikimedia Commons metadata with attribution data, rather than user uploads or unverified web images.
