---
layout: compose
lang-ref: ipt
lang: en
title: Data repository
background: https://inaturalist-open-data.s3.amazonaws.com/photos/182276315/original.jpg
imageLicense: |
  <em>Bombus melanopygus</em> Nylander, 1848. Photo by Jandrewnydam via [iNaturalist](https://www.gbif.org/occurrence/3712546723)
description: Integrated Publishing Toolkit 
height: 70vh
composition:
  - type: heroImage
  - type: pageMarkdown
  - type: features # The block type "features" shows a list of cards
    data: ipt.listIPT # We also need some data for those cards. In this case we refer to a yaml file in the _data folder.
---

# Introduction to the IPT 


The [GBIF Integrated Publishing Toolkit](https://github.com/gbif/ipt) – or IPT for short – is a free and open source web application for publishing biodiversity data. Developed by the [Global Biodiversity Information Facility (GBIF)](https://www.gbif.org/) with the help of the biodiversity informatics community including Canadensys, it has become the recommended way to publish biodiversity data.

The [Canadensys repository](https://data.canadensys.net/ipt/) is a customized IPT that we use to publish and register all our datasets, including primary occurrence data (such as specimens), taxonomic checklists, general resource metadata, and sampling-event data. If you are interested in using this IPT for your own publication needs, see our [publication guide] for more details.
