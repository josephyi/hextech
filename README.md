# Hextech

Entry for the League of Legends API Challenge 2016

# Installation

Assuming you have node, elixir, and phoenix installed:

```
npm install
mix hex.info
mix deps.get
mix phoenix.server
```
# Docker

```
# Installing node modules
docker run -it -v $(pwd):/app --rm hextech npm install

# Installing new package
docker run -it -v $(pwd):/app --rm hextech npm install --save some_other_lib

# Running Phoenix
docker run -it -v $(pwd):/app -p 4000:4000 -p 4001:4001 -e MIX_ENV=dev --rm hextech mix phoenix.server
```

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: http://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
