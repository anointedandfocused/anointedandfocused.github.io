# Anointed & Focused: Jekyll Blog

A Christ-centered personal blog built with [Jekyll](https://jekyllrb.com/) and hosted free on **GitHub Pages**. It keeps the black-and-gold look of anointedandfocused.com (Cinzel + Montserrat, gold accents, the same cards and buttons) and adds a full blog: written posts, YouTube video posts, categories, tags, search, RSS, and more.

**Publishing = writing one Markdown file.** You never need to touch HTML, CSS, or code.

---

## Contents

1. [Quick reference: publish a post](#1-quick-reference-publish-a-post)
2. [First-time setup](#2-first-time-setup)
3. [Front matter field guide](#3-front-matter-field-guide)
4. [Writing tips: Scripture, images, links](#4-writing-tips)
5. [Categories and tags](#5-categories-and-tags)
6. [Publishing changes to GitHub Pages](#6-publishing-changes-to-github-pages)
7. [Troubleshooting](#7-troubleshooting)
8. [Customizing the site](#8-customizing-the-site)
9. [Replacing the sample content](#9-replacing-the-sample-content)
10. [Built-in features](#10-built-in-features)
11. [Project map](#11-project-map)
12. [Optional: preview on your own computer](#12-optional-preview-on-your-own-computer)

---

## 1. Quick reference: publish a post

### A written post (about 3 minutes of setup)

1. Open your repository on GitHub and open the **`_templates`** folder.
2. Open **`standard-post.md`** and copy everything in it (the copy icon at the top right of the file view).
3. Go back to the main page, open the **`_posts`** folder, and choose **Add file > Create new file**.
4. In the file name box, type the name using this pattern, all lowercase, dashes instead of spaces:

   ```
   YYYY-MM-DD-your-post-title.md
   ```

   Example: `2026-11-10-trusting-god-with-the-plan.md`
5. Paste the template. Fill in the lines between the two `---` marks (see the [field guide](#3-front-matter-field-guide)).
6. Write your article below the second `---`.
7. Click **Commit changes**, then **Commit changes** again. In 1 to 2 minutes the post is live, and it appears automatically on the homepage, its category page, its tag pages, search, and the RSS feed.

### A YouTube video post

1. Copy **`_templates/youtube-video-post.md`** and create a new file in `_posts/` named `YYYY-MM-DD-your-video-title.md`, exactly as above.
2. Get the video ID from YouTube. Open the video and look at the address bar:

   | Address | Video ID |
   |---|---|
   | `https://www.youtube.com/watch?v=AbC123xYz09` | `AbC123xYz09` |
   | `https://youtu.be/AbC123xYz09` | `AbC123xYz09` |
   | `https://www.youtube.com/shorts/AbC123xYz09` | `AbC123xYz09` |

   It is the 11 characters after `v=` or after the last slash. Stop before any `&` or `?`.
3. Paste it into `youtube_id: "AbC123xYz09"` (keep the quotes).
4. Put your **video description or introduction** in `excerpt:`. It appears under the title and on previews.
5. Write your commentary, Scripture, and closing thoughts below the second `---`.
6. Commit. The video player is added automatically and resizes for phones.

> The `type:` line is what tells the site how to display the post. Keep `type: article` for written posts and `type: video` for video posts.

---

## 2. First-time setup

These steps move your existing site into this blog. You only do them once.

1. **Keep these files from your current site** in the root of the repository: `banner.png`, `apple-touch-icon.png`, `favicon-16x16.png`, `favicon-32x32.png`, and `site.webmanifest`. The blog looks for them in the same places your current page does. This project does not include them because they come from your existing site. The banner now appears in the welcome section at the top of the About page.
2. **Replace the old one-page site.** This project's `index.html` replaces your old `index.html`. If you want to keep the old page as a backup, rename it to `old-index.html.txt` first.
3. **Upload the project files.** In your repository choose **Add file > Upload files** and drag in everything from this project (keep the folder structure; the `_posts`, `_layouts`, and other folders must stay as they are). Or use `git` if you prefer. Commit when done.
4. **Turn on GitHub Pages.** Go to **Settings > Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, then choose your main branch and the **/ (root)** folder. Save.
5. **Custom domain.** The included `CNAME` file already contains `anointedandfocused.com`. In **Settings > Pages** confirm the custom domain shows, and tick **Enforce HTTPS** once it becomes available (it can take a short while after DNS is verified). Your site address in `_config.yml` is already set to `https://anointedandfocused.com`.
6. Watch the **Actions** tab. The first build usually takes 1 to 2 minutes. A green check means it is live.

---

## 3. Front matter field guide

The block between the two `---` lines at the top of each post is called **front matter**. It tells the site about the post.

| Field | Required? | What it does | Example |
|---|---|---|---|
| `title` | Yes | The headline. Keep the quotes. | `"Trusting God with the Plan"` |
| `type` | Yes | `article` for written posts, `video` for YouTube posts. | `article` |
| `date` | Yes | Publish date, `YYYY-MM-DD`. A future date stays hidden until that day. | `2026-11-10` |
| `category` | Yes | **One** category. Must match a category title exactly. | `"Biblical Wisdom"` |
| `tags` | Optional | Lowercase words in square brackets. Use `[]` for none. | `[prayer, habits]` |
| `excerpt` | Yes | One or two sentences. Shown on previews, in search, and when shared. For video posts it is the video description under the title. | `"A short summary."` |
| `youtube_id` | Video posts | The 11-character video ID. | `"AbC123xYz09"` |
| `video_start` | Optional | Start the video at this many seconds. | `90` |
| `image` | Optional | Featured image path. For video posts it overrides the YouTube thumbnail. | `/assets/images/posts/photo.jpg` |
| `image_alt` | With `image` | Describes the image for screen readers. | `"Sunrise over a field"` |
| `featured` | Optional | `true` highlights the post at the top of the homepage. | `false` |

**The six categories:** Faith & Spiritual Growth, Biblical Wisdom, Financial Stewardship, Discipline & Personal Development, Purpose & Calling, Christian Living.

**Front matter rules that prevent most problems**

- The first line of the file must be exactly `---`, and the block must close with another `---`.
- Use straight quotes `"` around the title, excerpt, and category. If the text itself contains a double quote, use a single quote inside instead.
- Use spaces, never tabs, for indenting.
- Spelling and capitalization of the category must match exactly (including the `&`).

---

## 4. Writing tips

Everything below the second `---` is plain Markdown.

**Headings.** Use `##` for main sections and `###` for sub-sections. Do not use a single `#`; the post title already does that.

**Bold and italics.** `**bold**` and `*italic*`.

**Scripture.** Put each line in a quote block and give the reference in `<cite>`. It displays with the gold bar and reference:

```markdown
> "Trust in the Lord with all your heart, and do not lean on your own understanding."
>
> <cite>Proverbs 3:5 (ESV)</cite>
```

You can also mention a verse in a normal sentence (for example, Philippians 4:13). Add the translation abbreviation after quoted verses.

**Lists.** Start lines with `- ` for bullets or `1. ` for numbers.

**Links.** `[words people click](https://example.com)`. To link to another post on your site, use its address: `[my post on discipline](/posts/sample-discipline-is-preparation/)`.

**Images.**
1. Upload the picture to the **`assets/images/posts/`** folder (in GitHub: open the folder, then **Add file > Upload files**).
2. In your post, add `![Describe the image](/assets/images/posts/your-image.jpg)`.
3. For a featured image at the top of a post, use the `image:` and `image_alt:` fields instead.

File names are case sensitive and should avoid spaces (`morning-sunrise.jpg`, not `Morning Sunrise.JPG`).

**A second video inside any post.** Anywhere in the post body you can add:

```
{% include youtube.html id="VIDEO_ID" title="Short description" %}
```

---

## 5. Categories and tags

**Categories** group your posts by theme. Each post has one.

- Every category has its own page at `/category/<name>/` that fills itself with matching posts. You do not list posts by hand anywhere.
- The category name on a post preview and on the post itself is a link to that page.
- The full list is at `/categories/`.

**To add a new category:** in the `_topics/` folder, copy one of the existing files, rename it (for example `marriage-and-family.md`), and edit its three lines:

```yaml
---
title: "Marriage & Family"        # The exact name you will use in posts
order: 7                           # Controls the order on the Categories page
description: "One sentence about this category."
---
```

Then use `category: "Marriage & Family"` in your posts. It appears everywhere automatically.

**To rename or remove a category:** edit or delete its file in `_topics/`, and update `category:` in the posts that used it.

**Tags** are optional and flexible. Add several to any post (`tags: [prayer, habits, mornings]`). The **Tags page** (`/tags/`) builds itself from whatever tags your posts use, and each tag shows all matching posts. Use lowercase and keep spelling consistent (`habit` and `habits` count as different tags).

**Related posts** appear under every post. The site picks posts that share the same category (stronger match) or the same tags. If nothing matches yet, it shows your latest posts instead.

---

## 6. Publishing changes to GitHub Pages

### How it works

GitHub Pages watches your repository. Each time you **commit** a change, it automatically runs Jekyll, which turns your Markdown files into web pages and publishes them. There is nothing to upload or deploy yourself. You can see each build under the **Actions** tab (green check = published, red X = problem).

### Option A: in the browser (simplest)

Use **Add file > Create new file** to add a post, or open an existing file and click the **pencil icon** to edit. Click **Commit changes** to publish.

### Option B: from your computer with Git

```bash
git add .
git commit -m "Add post: Trusting God with the Plan"
git push
```

Run these in the project folder. Then check the **Actions** tab on GitHub.

### Saving and organizing files

| What | Where it goes |
|---|---|
| Written and video posts | `_posts/` |
| Post images | `assets/images/posts/` |
| Categories | `_topics/` |
| About page text | `about.md` |
| Site-wide settings | `_config.yml` |
| Menu links | `_data/navigation.yml` |
| Copy-and-paste post templates | `_templates/` (leave these alone; copy them) |

---

## 7. Troubleshooting

| Problem | Likely cause and fix |
|---|---|
| **The post is not showing up** | (1) The `date:` is in the future; use today or earlier. (2) The file is not inside `_posts/`. (3) The file name does not follow `YYYY-MM-DD-title.md` or does not end in `.md`. (4) The build failed; check the **Actions** tab. |
| **Red X in Actions / "Page build failed" email** | Usually a typo in front matter. Open the failed run to see the file name. Common causes: missing closing `---`, a title or excerpt with a colon or quote that is not wrapped in quotes, a tab character, or a curly quote `"` pasted from Word. Fix the line and commit again. |
| **Changes are not visible** | Wait 2 minutes, then hard-refresh (Ctrl+Shift+R, or Cmd+Shift+R on Mac). Confirm the Actions run is green. |
| **Post shows but has no category link** | The `category:` text does not match any file in `_topics/` exactly. Compare spelling and the `&`. |
| **Video area is blank or says unavailable** | Check the `youtube_id` (11 characters, no `v=` or extra text). Confirm the video is Public or Unlisted and that embedding is allowed (YouTube Studio > video > **Show more** > **Allow embedding**). |
| **Image is missing** | The path is case sensitive and must start with `/`, such as `/assets/images/posts/photo.jpg`. Confirm the file was uploaded to that folder. |
| **Banner, favicon, or manifest missing** | Make sure `banner.png`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, and `site.webmanifest` are in the repository root (see setup step 1). |
| **Site does not open at your domain** | In **Settings > Pages**, confirm the custom domain and that the `CNAME` file is still in the repository root. DNS changes can take time. |
| **Search shows "unavailable"** | Search loads `search.json`, which is built with the site. Wait for the build to finish and refresh. |

---

## 8. Customizing the site

You can change nearly everything from a few places, without touching templates:

- **Site name, description, social links, About-page welcome text and banner, analytics:** `_config.yml`. Each setting has a comment beside it.
- **Menu:** `_data/navigation.yml`. Add, remove, or reorder links.
- **About page:** `about.md`. It is plain Markdown. Edit the words between the headings. Keep the `<div class="card" markdown="1">` and `</div>` lines around each section so the cards still display.
- **Colors, fonts, and widths:** the `:root` block at the top of `assets/css/style.css` (gold, background, fonts, column widths). Changing a value there updates the entire site.
- **Posts per page:** `paginate: 7` in `_config.yml`.

---

## 9. Replacing the sample content

The five starter posts are sample content so you can see how everything works. Each one:

- has `sample: true` in its front matter,
- has `sample` in its file name, and
- shows a small dashed **Sample** tag on previews and on the post.

**When you are ready to go live:**

1. Delete the five files in `_posts/` whose names contain `sample-`.
2. Delete the folder `assets/images/sample/` (only the sample posts use it).
3. Publish your real posts. Nothing else needs to change.

If you would rather keep a sample as a reference, set `sample: false` in its front matter (or set `show_sample_badge: false` in `_config.yml` to hide all the tags). The two video samples use public YouTube demo videos as placeholders; replace them with your own.

---

## 10. Built-in features

| Feature | Where / how |
|---|---|
| Blog homepage with featured post, recent posts, and category links | `/` |
| **Pagination** (7 posts per page, "Newer / Older") | Automatic once you have more than 7 posts |
| **Category archives** | `/category/<name>/`, built automatically |
| **Tag archive** | `/tags/` |
| **Search** (title, category, tags, excerpt, and post text) | `/search/` |
| **Related posts** | Under every post |
| **RSS feed** | `/feed.xml` |
| **Sitemap** | `/sitemap.xml` (plus `robots.txt`) |
| **SEO and social sharing metadata** (Open Graph, X card, canonical links) | Built into every page |
| **Share links** (Facebook, X, email) | Under every post |
| **Accessibility** | Skip link, visible keyboard focus, readable type sizes, reduced-motion support, labeled navigation |
| **Mobile friendly** | Menu collapses into a button on phones, full-width buttons, large tap targets, notch-safe margins, and videos that stay 16:9 |

Plugins used (all supported by GitHub Pages): `jekyll-feed`, `jekyll-paginate`, `jekyll-seo-tag`, `jekyll-sitemap`. There is no database, external CMS, or build tool to maintain.

---

## 11. Project map

```
.
├── _config.yml               Site-wide settings
├── _data/navigation.yml      Menu links
├── _includes/                Reusable pieces (header, footer, post card, video embed, related posts...)
├── _layouts/                 Page designs (default, post, page, category)
├── _posts/                   YOUR POSTS GO HERE (written and video)
├── _templates/               Copy-and-paste starting points
│   ├── standard-post.md
│   └── youtube-video-post.md
├── _topics/                  One small file per category
├── assets/
│   ├── css/style.css         All styling (edit :root to change colors and fonts)
│   ├── js/search.js          Search script
│   └── images/posts/         Put your post images here
├── about.md                  About page
├── categories.md             /categories/
├── tags.md                   /tags/
├── search.md, search.json    Search page and its index
├── index.html                Homepage
├── 404.html, robots.txt, CNAME, Gemfile
└── README.md                 This guide
```

---

## 12. Optional: preview on your own computer

You do not need this to publish. It lets you see changes before committing.

1. Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/) (3.x).
2. In the project folder run:

   ```bash
   bundle install
   bundle exec jekyll serve
   ```
3. Open <http://localhost:4000>. Changes to posts and pages refresh as you save. After editing `_config.yml`, stop the server (Ctrl+C) and start it again.
