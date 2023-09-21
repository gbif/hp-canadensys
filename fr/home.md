---
lang-ref: home
lang: fr
layout: home
title: Canadensys
description: Rendre l’information canadienne sur la biodiversité accessible à tous 
background: https://inaturalist-open-data.s3.amazonaws.com/photos/190926491/original.jpg
imageLicense: |
  <em>Sanguinaria canadensis</em> L. Photo by Suzanne Labbé via [iNaturalist](https://www.gbif.org/occurrence/3764124042)
height: 80vh
parallax: true
klass: home
cta:
  - text: Explorer
    href: /fr/occurrence/search/?view=MAP
    isPrimary: true
  - text: Publier
    href: /fr/publish/ipt
  - text: Vascan
    href: /fr/vascan/name-search/
permalink: /fr
composition:
  - type: heroImage # the block type
  - data: fr.home.stats
    type: stats
  - type: split
    data: fr.home.about
  - type: split
    data: fr.home.explorer
  - type: split
    data: fr.home.training
  - type: latestPosts
    data: we_do_not_want_any_header # weird hack as the block layout looks for a data element and falls back to the page if none is present
---

