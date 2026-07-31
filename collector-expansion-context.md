# Twelve-hour collector expansion context

- The existing workflow currently runs every hour but commits only schedule, result, and visible check-time files. Ranking and photo collectors already exist locally but are not invoked by the workflow.
- Schedule and results refresh at 00:00 and 12:00 Korea Standard Time. Fight Matrix rankings and any missing verified Wikimedia Commons photos refresh once per week on Monday at 06:00 Korea Standard Time.
- Photos remain sourced only from verified Wikimedia Commons metadata with attribution data, rather than user uploads or unverified web images.
