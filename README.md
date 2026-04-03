# MDServe

<div align="center">

![Logo](https://raw.githubusercontent.com/mdserve/mdserve.github.io/main/docs/logo.png)

</div>

<div align="center">

  *Render Markdown files in Git repositories* 🛎️

</div>

<div align="center">

[![main](https://github.com/mdserve/mdserve.github.io/actions/workflows/main.yml/badge.svg)](https://github.com/mdserve/mdserve.github.io/actions/workflows/main.yml)

</div>

## Introduction

With MDServe any Markdown file in a public GitHub repository can be rendered
instantly as a clean, readable page. No need to set up a static site generator
or put your content on someone else's platform.

## Getting started

To view the `README.md` of any public repository, replace `github.com` with
`mdserve.github.io`. For example, take a look at the Awesome list of mind
expanding books repository:

[https://mdserve.github.io/hackerkid/Mind-Expanding-Books](https://mdserve.github.io/hackerkid/Mind-Expanding-Books)

To view any other Markdown file in a public repository, just append the path.
For example, take a look at the list of free programming books in the Markdown
file `books/free-programming-books-subjects.md` of the
`EbookFoundation/free-programming-books` repository:

[https://mdserve.github.io/EbookFoundation/free-programming-books/books/free-programming-books-subjects.md](https://mdserve.github.io/EbookFoundation/free-programming-books/books/free-programming-books-subjects.md)

Relative links to Markdown files in the same repository are replaced
automatically by MDServe links. This enables simple navigation between pages,
for example in the index page of your blog:

[https://mdserve.github.io/robvanderleek/notes](https://mdserve.github.io/robvanderleek/notes)

## Development

Would not have been possible without these Libraries:

- [Pico CSS](https://picocss.com/)
- [react-markdown](https://github.com/remarkjs/react-markdown)
    * [remark-gfm](https://github.com/remarkjs/remark-gfm)
    * [rehype-highlight](https://github.com/rehypejs/rehype-highlight)
    * [rehype-raw](https://github.com/rehypejs/rehype-raw)
    * [rehype-slug](https://github.com/rehypejs/rehype-slug)
