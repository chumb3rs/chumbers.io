## Features
- Add link to archives/set up post archive. See mathematical crap for what this might look like
- [x] Better theme color: I think the teal is too bright and doesn't look good on light mode. Maybe periwinkle
- Switch media to cloudinary (see ref [here](https://tina.io/docs/reference/config#cloudinary-media-store))
- Add page analytics as on my previous site
- [x] Add LaTeX support in post content
- Add back to top button
- Add reading progress bar
- Look at setting up disqus
- Ability to pin a post to the large spot on the landing page
- Explore [awesome remark](https://github.com/remarkjs/awesome-remark) and [awesome rehype](https://github.com/rehypejs/awesome-rehype) plugins
- Better related posts layout
- Support putting LaTeX in the image/video caption

## Bugs
- [x] Footer doesn't push to bottom of page (see /category/category-1) for example
- Apprently the tina-lock.json needs to be checked into source control?? From [here](https://tina.io/docs/tina-folder/overview)
- [x] Migrate post collection to /content or /posts or something (currently /blog)
- Read Post on the series cards should flip when the entire row is hovered not just that text
- [x] Add <Highlight> and <VideoEmbed> component to mdx
- Make every word capitalized in baes layout title. Go Series > Purdue ... for example
- Fix image mdx component to show alt as caption
- [x] Footnotes not working on mdx pages
- Fix share functionality not working - though it does work on Mac
- On Mac there are some weird wrapping behaviours
- Verify that phone layout and appearance is good...Brave devtools playing up
- Verify code block syntax highlighting working
- [x] There are two "Footnotes" heading links that appear in the toc
  - The fix was just to replace the manual header I had with a horizontal rule
- LaTeX export pngs have a clear background so look trash on dark mode

## Jobs
- Run backfill using specter to convert <Highlight /> tags. Check also for ^^

## Future...
- Do I want to stick with TinaCMS? I think that maybe if I am writing in Obsidian there is no point...
