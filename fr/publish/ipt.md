---
layout: compose
lang-ref: ipt
lang: fr
title: Répertoire de données
background: https://inaturalist-open-data.s3.amazonaws.com/photos/182276315/original.jpg
imageLicense: |
  <em>Bombus melanopygus</em> Nylander, 1848. Photo by Jandrewnydam via [iNaturalist](https://www.gbif.org/occurrence/3712546723)
description: Integrated Publishing Toolkit 
height: 70vh
composition:
  - type: heroImage
  - type: pageMarkdown
  - type: split
    data: fr.ipt.canadensys
  - type: features # The block type "features" shows a list of cards
    data: fr.ipt.listIPT # We also need some data for those cards. In this case we refer to a yaml file in the _data folder.
parallax: true 
---

# Introduction à l'IPT 

L'[Outil de Publication Intégré de GBIF](https://github.com/gbif/ipt), ou IPT, est une application web Open Source gratuite utilisée pour publier des données de biodiversité.
Développé par le [Global Biodiversity Information Facility (GBIF)](https://www.gbif.org/) avec l'aide de la communauté de l'informatique de la biodiversité, incluant Canadensys, il est l'outil recommandé par la communauté internationale pour publier des données de biodiversité. 

Le [répertoire Canadensys](https://data.canadensys.net/ipt/) est un IPT personnalisé que nous utilisons pour publier et enregistrer tous nos jeux de données, incluant des données d'occurrences primaires (tel que les spécimens), des listes taxonomiques, des métadonnées de ressources et des données d'échantillonnage. Si vous êtes intéréssés à utiliser cet IPT pour publier des données, veuillez vous référer à notre [guide de publication](/fr/publish/7-step-guide/) pour de plus amples détails. Le [manuel de l'utilisateur](https://ipt.gbif.org/manual/en/ipt/latest/) développé par GBIF est également une excellente source d'information.
