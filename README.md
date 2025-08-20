# uit-resource-hub
Unlock essential tools and guides for UIT students.

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## List of resources

Below is a list of current software/services that offer an education plan/discount to UIT students:

1. [GitHub Education](https://github.com/education/students) (Tons of other softwares are included in this one)
2. [YouTube Premium - Student Plan](https://www.youtube.com/premium/student)
3. [Spotify Premium - Student Plan](https://www.spotify.com/vn-vi/student/)
4. [Slack for Education Discount](https://slack.com/intl/en-gb/help/articles/206646877-Apply-for-the-Slack-for-Education-discount)
5. [Figma for Education](https://www.figma.com/education/)
6. [Canva for Students](https://www.canva.com/education/students/)
7. [Notion for Education](https://www.notion.com/product/notion-for-education)
8. [Apple Store - Discount for Students](https://www.apple.com/vn-edu/store)
9. [Azure free credits for students](https://azure.microsoft.com/en-us/free/students/) 
10. [Airtable Student Plan](https://support.airtable.com/docs/nonprofit-and-educational-plans-faqs)*
11. [UiTiOt LaTeX Editor](https://latex.uitiot.vn/login)

## Development

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
