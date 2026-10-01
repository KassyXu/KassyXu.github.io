# KassyXu.github.io

Source for [www.jiangyuzeng.com](https://www.jiangyuzeng.com), built with [Hugo](https://gohugo.io) and the [Blowfish](https://blowfish.page) theme.
English is served at `/`, Chinese at `/zh-cn/`; visitors can switch language and light/dark mode from the header.

## Layout

| Path | What it holds |
|------|---------------|
| `content/` | Page text. `index.md` is English, `index.zh-cn.md` is Chinese. |
| `content/publications/` | Publication list (one `publication` shortcode per paper). |
| `content/gallery/` | Gallery photos and captions. Hugo resizes the photos at build time. |
| `config/_default/` | Site, language, menu and theme settings. Author name, bio and links are in `languages.*.toml`. |
| `assets/img/` | Profile photo. |
| `assets/css/custom.css` | Small style additions on top of Blowfish. |
| `layouts/shortcodes/` | Custom shortcodes (`publication`). |
| `static/` | Copied as-is: `CNAME`, `vbi.html` and its images. |
| `themes/blowfish/` | Theme, as a git submodule pinned to a release tag. |

## Local preview

```sh
git clone --recurse-submodules https://github.com/KassyXu/KassyXu.github.io.git
hugo server        # Hugo extended 0.163–0.166, http://localhost:1313
```

## Deploy

Pushing to `main` runs `.github/workflows/hugo.yml`, which builds the site and publishes it to GitHub Pages.
The repository's Pages source must be set to **GitHub Actions** (Settings → Pages).
