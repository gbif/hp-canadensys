---
layout: compose
sideNavigation: sidenav.vascan
composition:
  - type: heroImage
  - type: pageMarkdown
lang-ref: howtoVascan
lang: en
title: How to use VASCAN
background: https://inaturalist-open-data.s3.amazonaws.com/photos/229323742/original.jpeg
imageLicense: |
  <em>Botrypus virginianus</em> (L.) Michx. observed in Canada by Braden J. Judson via [iNaturalist](https://www.gbif.org/occurrence/3903585417)
#description:
height: 70vh
toc: true
---

# Introduction

The Database of Vascular Plants of Canada (VASCAN) is a comprehensive list of all vascular plants reported in Canada, Greenland (Denmark) and Saint Pierre and Miquelon (France). VASCAN is a checklist database. Its core record is a taxon, e.g. a species like Acer saccharum Marshall. It also contains information related to that taxon, such as its distribution, taxonomy, synonyms and vernacular names, and a source for almost all of these elements.

As opposed to many other checklist websites, we designed VASCAN to be as open as possible. Instead of locking the data in an unusable format, users can download the [whole database](http://data.canadensys.net/ipt/resource.do?r=vascan) or their own subset through the [checklist builder](/vascan/checklist-builder/) as Darwin Core Archives or flat text files. Users can also report and view issues with the data and interface in [our open issue tracker](https://github.com/Canadensys/vascan-data/issues). 

VASCAN is a [Java](https://www.java.com/) application running in [Tomcat](http://tomcat.apache.org/) using a [MySQL](https://www.mysql.com/) database. Although it was designed for plants, we made an effort to generalize the structure of the database and application, so it could also be used for other taxonomic groups, such as animals and fungi. 

# Name search

Enter a scentific name or a vernacular name and the database will give you suggestions of corresponding names starting with the name you have entered. 
A search on "arte" will return "Artemisia", but not "Two-parted sedge". 

For each name, several information are provided: 
* Status of the species (accepted of synonym)
* Vernacular names, both in French and English, with status of the vernacular name (accepted or synonym)
* Synonyms
* Distribution at the province level, with distribution status:
  * **Native**: Taxon present as a result of natural processes only, without human agency.
  * **Introduced**: Taxon established (naturalized) in a region outside of its original range, as a result of human activity, either deliberate or accidental. Taxa are considered introduced in Canada when they became established after European colonization.
  * **Ephemeral**: Taxon not established permanently in the region, but recurring in the wild on a near-annual basis, usually from cultivation (e.g. wheat, tomato, etc.).
  * **Excluded**: Taxon reported from the region, but not established or erroneously determined.
  * **Extirpated**: Taxon native to the region, but currently considered eradicated. This status is only given after active search, and is usually determined by a conservation agency.
  * **Doubtful**: Taxon reported from the region by a source, but information not yet validated.
  * **Absent**: Taxon not reported from the region.
* Classification
* Habit


# Checklist builder