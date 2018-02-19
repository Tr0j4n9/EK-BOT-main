<a name="4" />
## 4 (Feb 19th, 2018)

### Features
- `$ddg` Search the web with DuckDuckGo
- `$feedback` Leave feedback about the bot
- `$feelsbadman` Because not everything is good
- `$ow` Overwatch commands
- `$random` Commands for generating some truly random numbers and strings
- `$robohash` Get your personal robot and monster image

### Bug Fixes
- Ignore casing for meme names
- The suffix for `$leet` and `$snoop` is lowercased, as uppercase was being ignored 

### Technical Features
- Added datadog metric tracking
- Renamed envs `YOUTUBE_API_KEY` to `YOUTUBE_KEY` and `CHAMPIONGG_API` to `CHAMPIONGG_KEY`
- Split up `info.js` into its own folder
- Better speed.
