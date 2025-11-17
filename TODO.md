## Features
- Add link to archives/set up post archive. See mathematical crap for what this might look like
- [x] Better theme color: I think the teal is too bright and doesn't look good on light mode. Maybe periwinkle
- Switch media to cloudinary (consider local/Cloudinary)
- Add page analytics as on my previous site
- [x] Add LaTeX support in post content
- [x] Add back to top button
- Add reading progress bar
- Look at setting up disqus
- Ability to pin a post to the large spot on the landing page
- Explore [awesome remark](https://github.com/remarkjs/awesome-remark) and [awesome rehype](https://github.com/rehypejs/awesome-rehype) plugins
- Better related posts layout
- Support putting LaTeX in the image/video caption
- Level things up with motion.dev
- Add validators to Zed so that categories/projects/series etc. have to come from existing list
- Have proper numbered pagination not just left and right arrows
- Do something better with tags now that I have so many. Also what is the format for tags in the frontmatter? e.g. is is "First second" or "First Second"...can I have it so it doesn't matter

## Bugs
- [x] Footer doesn't push to bottom of page (see /category/category-1) for example
- [x] Migrate post collection to /content or /posts or something (currently /blog)
- Read Post on the series cards should flip when the entire row is hovered not just that text
- [x] Add <Highlight> and <VideoEmbed> component to mdx
- Make every word capitalized in baes layout title. Go Series > Purdue ... for example
- [x] Fix image mdx component to show alt as caption
- [x] Footnotes not working on mdx pages
- Fix share functionality not working - though it does work on Mac
- On Mac there are some weird wrapping behaviours
- Verify that phone layout and appearance is good...Brave devtools playing up
- Verify code block syntax highlighting working
- [x] There are two "Footnotes" heading links that appear in the toc
  - The fix was just to replace the manual header I had with a horizontal rule
- LaTeX export pngs have a clear background so look trash on dark mode
- Have a ToC heading remain highlighted until the next one comes into view. Currently if there is a large vertical space between headings none will be highlighted sometimes
- Quote blocks have double quotations...
- Card mdx component is garbage
- Consistency on video and image captions
- Fix image and video height and width setup

## Jobs
- Run backfill using specter to convert <Highlight /> tags. Check also for ^^
  - Use <Highlight text=['"](.*)['"] /> and <Highlight>\1</Highlight>
- Update internal page links since they still point to /content/<post-name>
- Try viewing on multiple browsers...Firefox seems to be weird
- Can I set up permanent redirects for all the Instagram story blog links??
- Fix roam-style italics?? _dfj_

## Future...
- [x] Do I want to stick with TinaCMS? I think that maybe if I am writing in Obsidian there is no point...

- Explore a move off of Mailchimp to something better, e.g. "Mailerlite". The thing is that I don't think that the number of people I have subscribed at the moment really warrants this...
