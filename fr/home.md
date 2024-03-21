---
lang-ref: home
lang: fr
layout: home
title: Canadensys
description: Rendre l’information canadienne sur la biodiversité accessible
background: https://inaturalist-open-data.s3.amazonaws.com/photos/190926491/original.jpg
imageLicense: |
  <em>Sanguinaria canadensis</em> L. Photo by Suzanne Labbé via [iNaturalist](https://www.gbif.org/occurrence/3764124042)
height: 80vh
parallax: true
klass: home
cta:
  - text: Données du Canada
    href: /occurrence/search/?view=MAP&publishingCountry=CA
    isPrimary: true
  - text: Données à propos du Canada
    href: /occurrence/search/?filter=eyJtdXN0Ijp7ImNvdW50cnkiOlsiQ0EiXX0sIm11c3Rfbm90Ijp7Im9jY3VycmVuY2VJc3N1ZSI6WyJDT1VOVFJZX0NPT1JESU5BVEVfTUlTTUFUQ0giLCJDT1VOVFJZX01JU01BVENIIiwiWkVST19DT09SRElOQVRFIl19fQ%3D%3D&view=MAP
  - text: Publier
    href: /fr/publish/ipt
  - text: Vascan
    href: https://data.canadensys.net/vascan/search?lang=fr
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

