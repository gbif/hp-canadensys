---
lang-ref: home
layout: home
title: Canadensys
description: Making Canadian biodiversity information freely and openly available 
background: https://inaturalist-open-data.s3.amazonaws.com/photos/190926491/original.jpg
imageLicense: |
  <em>Sanguinaria canadensis</em> L. Photo by Suzanne Labbé via [iNaturalist](https://www.gbif.org/occurrence/3764124042)
height: 80vh
parallax: true
klass: home
cta:
  - text: Explore
    href: /occurrence/search/?view=MAP
    isPrimary: true
  - text: Publish
    href: /publish/ipt/
  - text: Vascan
    href: /vascan/name-search/
permalink: /
composition:
  - type: heroImage # the block type
  - data: home.stats
    type: stats
  - type: split
    data: home.about
  - type: split
    data: home.explorer
  - type: split
    data: home.training
  - type: latestPosts
    data: we_do_not_want_any_header # weird hack as the block layout looks for a data element and falls back to the page if none is present
---


