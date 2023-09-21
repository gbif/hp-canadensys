---
layout: compose
composition:
  - type: heroImage
  - type: pageMarkdown
lang-ref: documents
lang: fr
title: Documentation
background: https://inaturalist-open-data.s3.amazonaws.com/photos/218909053/original.jpg
imageLicense: |
  <em>Symphyotrichum novae-angliae</em> (L.) G.L.Nesom observed in Canada by Suzanne Labbé via [iNaturalist](https://www.gbif.org/occurrence/3881376924)
#description:
height: 70vh
toc: true
---

# Numérisation et imagerie

La **numérisation** peut prendre différentes formes et signifier des processus différents, comme par exemple :
* Ajouter les données provenant d'un spécimen à la base de données
* Prendre une image de l'étiquette d'un spécimen d'herbier ou d'un spécimen entier
* Transférer un enregistrer de chant d'oiseau d'un format analogique à un format digital
* Scanner un insecte en 3D

> La numérisation est le processus permettant de convertir de l'information dans un format digital (c.à.d. lisible par un ordinateur). (Wikipédia)

**Numérisation d'étiquettes**

La photographie des étiquettes de spécimens est souvent utilisée comme première étape vers la numérisation textuelle des précieuses informations contenues sur l'étiquette. Par la suite, le texte pourra être extrait manuellement ou de manière automatisée à partir de l'image en utilisant la [Reconnaissance Optique de Caractères (OCR)](https://fr.wikipedia.org/wiki/Reconnaissance_optique_de_caract%C3%A8res), ce dernier nécessitant une relecture et une structuration de l'information, ce qui peut parfois prendre plus de temps que de taper l'information à la main. Les images d'étiquettes jouent un rôle important de sauvegarde textuelle, permettant aux utilisateurs de vérifier l'information et de rapporter les erreurs sans avoir besoin d'accéder au spécimen physique. De nos jours, les étiquettes sont le plus souvent photographiées en même temps que le spécimen complet, mais le traitement des informations contenues sur l'étiquette se fait souvent seulement par la suite.

**Numérisation de spécimens**

Photographier des spécimens engendre une ou plusieurs images du spécimen complet. Ce processus est généralement plus complexe que la numérisation d'étiquettes, mais l'image en résultant peut être importante pour la recherche scientifique. La méthode (caméra vs. scanner), la résolution, la couleur, les conditions lumineuses, le format et la méthode de stockage sont tous des facteurs devant être pris en considération. Par conséquent, ce type de numérisation peut devenir très gourmand en temps et, à moins d'être automatisé, devrait en premier lieu être considéré pour les spécimens de plus grande valeur scientifique, comme les types, ou pour des groupes taxonomiques spécifiques, tout dépendant de la spécificité de la collection (focus géographique ou taxonomique). Les méthodes utilisées pour la numérisation varient également en fonction du type de spécimens et de collections. Photographier un insecte épinglé est généralement plus complexe que numériser un spécimen d'herbier.

**Outils**

* [SilverImage](http://www.silverbiology.com/products/silverimage/), un outil de [SilverBiology](http://www.silverbiology.com/) pouvant aider à suivre et analyser le processus de numérisation
* [Adobe Lightroom](https://www.adobe.com/ca/products/photoshop-lightroom.html) est très utile pour l'amélioration et l'organisation des photos prises
* [Tesseract](https://tesseract-ocr.github.io/tessdoc/) est un logiciel de reconnaissance de texte (OCR) open source supportant une grande variété de langues
* [Google Vision AI](https://cloud.google.com/vision), développé par Google, est une puissante application AI permettant l'extraction d'informations à partir d'images (certains frais peuvent s'appliquer après un certain nombre de requêtes)
* [Google Documents AI](https://cloud.google.com/document-ai), également développé par Google, permet d'extraire des données depuis des documents (des frais sont appliqués).

4. **Littérature et documentation**

* Gribomont, Isabelle. OCR with Google Vision API and Tesseract (2023). <https://doi.org/10.46430/phen0109>
* Hegghammer, T. OCR with Tesseract, Amazon Textract, and Google Document AI: a benchmarking experiment. J Comput Soc Sc 5, 861–882 (2022). <https://doi.org/10.1007/s42001-021-00149-1>
* iDigBio documentation about [Specimen Image Capture](https://www.idigbio.org/wiki/index.php/Specimen_Image_Capture) and [Specimen Image Processing](https://www.idigbio.org/wiki/index.php/Specimen_Image_Processing)
* [Häuser et al., 2005. Digital imaging of biological type specimens: A manual of best practice](https://www.gbif.org/fr/document/80576/digital-imaging-of-biological-type-specimens-a-manual-of-best-practice)
* [Melissa Tulig and Kimberly Watson, 2011. Streamlining Collaborative Digitization](https://www.idigbio.org/content/streamlining-collaborative-digitization)

# Géoréférencement

Le géoréférencement est le processus permettant d'interpréter les descriptions textuelles de localisation afin d'en extraire des descriptions géographiques ([coordonnées géographiques](https://fr.wikipedia.org/wiki/Coordonn%C3%A9es_g%C3%A9ographiques)). Le géoréférencement de spécimens biologiques, qui n'ont souvent que des descriptions textuelles à propos de leur localisation, permet au spécimen d'être placé sur une carte et utilisé dans des analyses spatiales.

Ex. “Bear Island, Lake Temagami, Nipissing District, Ontario, Canada” → latitude décimale : 46.9831216, longitude décimale : -80.0681018, incertitude : 1410m. 

Le géoréférencement peut prendre beaucoup de temps et devrait être effectué à l'aide des bons outils et des bonnes [lignes directrices](https://docs.gbif.org/course-data-mobilization/en/key-documentation.html#georeferencing). Nous encourageons le [géoréférencement collaboratif](https://docs.gbif.org/georeferencing-best-practices/1.0/en/#collaborative-georeferencing), qui réduit grandement la duplication des efforts et peut générer des résultats plus précis, puisque les spécimens peuvent être groupés par province ou localité dans un réseau plus général (au lieu d'une collection seulement), puis géoréférencés par les personnes ayant le plus de connaissances à propos de ces provinces et localités.

L'un des objectifs de Canadensys est de géoréférencer une large partie des spécimens publiés de manière la plus précise possible, et de fournir des données d'incertitudes pour les coordonnées, ce qui donne des informations clés pour déterminer leur utilité et ainsi la qualité des données.

> La quantité massive de données patrimoniales conservées dans les musées, herbiers, universités et autres de ce monde est de loin la plus grande difficulté en géoréférencement de données primaires d'occurrences d'espèces. La plupart des récolteurs actuels utilisent maintenant des GPS ou des cartes à grande échelle afin de localiser leurs événements de collecte. La plupart des nouvelles données entrant dans les institutions possèdent donc déjà des coordonnées. Néanmoins, la plupart des musées commençant la numérisation de leurs collections font face à une vaste tâche de géoréférencement de la grande quantité de données ne possédant que des informations minimales quant à leur localisation. 

Pour plus d'informations sur le géoréférencement, consultez : Chapman AD & Wieczorek JR (2020) Georeferencing Best Practices. Copenhagen: GBIF Secretariat. <https://doi.org/10.15468/doc-gg7h-s853>

Les [APIs (Appication Programming Interface)](https://fr.wikipedia.org/wiki/Interface_de_programmation) peuvent drastiquement aider en facilitant le géoréférencement de lots de données, permettant de retrouver des coordonnées géographiques provenant d'adresses et de localités, ou l'inverse.
Les requêtes API peuvent être automatisées dans des outils de nettoyage de données tels que [OpenRefine](http://openrefine.org/) ou [R](https://www.r-project.org/).

**Outils de géoréférencement**

* [Georeferencing Calculator](http://georeferencing.org/georefcalculator/gc.html) et son [manuel](https://doi.org/10.35035/gdwq-3v93)
* [GeoLocate](https://www.geo-locate.org/developers/default.html)
* [UTM / MTM calculator](http://leware.net/geo/utmgoogleapp.htm)
* [SimpleMappr](https://www.simplemappr.net/)
* [GeoNames](http://www.geonames.org/), une base de données référençant des noms géographiques de partout dans le monde.
* [GeoRepository](https://epsg.org/home.html), une applicarion web et une API permettant de chercher et afficher des métadonnées géodésiques.
* [CoordinateCleaner](https://besjournals.onlinelibrary.wiley.com/doi/10.1111/2041-210X.13152)

# Nettoyage de données

Le nettoyage de données est un aspect essentiel de la chaine de gestion de l'information. Tel que noté par [Chapman (2005)](http://www.gbif.org/document/80528) :
 > la prévention des erreurs devrait être considérée comme une priorité par rapport à la détection et correction de celles-ci, puisqu'il est plus économique de prévenir les erreurs que d'essayer de les trouver et de les corriger plus tard. Quelle que soit l’efficacité du processus de saisie des données, des erreurs se produiront toujours et, par conséquent, la validation et la correction des données ne peuvent être ignorées. La détection, la validation et le nettoyage des erreurs ont tous un rôle clé à jouer, en particulier avec les données patrimoniales (ex. les données de musées et d'herbiers récoltées pendant les 300 dernières années), et donc la prévention des erreurs et le nettoyage des données doivent être intégrés dans la politique de gestion des données d’une organisation.

Plusieurs outils ont été développés pour aider à trouver les erreurs et à mettre en œuvre des modifications. Ces outils peuvent également contribuer à enrichir les jeux de données en ajoutant de l'information à partir des champs disponibles.

**Outils**

* [OpenRefine](http://openrefine.org/), un puissant outil gratuit et open source pour travailler avec des données désordonnées
* [bdc R package](https://brunobrr.github.io/bdc/), une boîte à outils pour normaliser, intégrer et nettoyer les données sur la biodiversité
* [bdclean](https://bdverse.org/bdclean/), Application Shiny conviviale de nettoyage de données
* Outils GBIF tels que :
   * [Correspondance Taxonomique](https://www.gbif.org/fr/tools/species-lookup) qui normalise les noms d'espèces à partir d'un fichier csv par rapport au backbone GBIF
   * [Analyseur de Noms](https://www.gbif.org/fr/tools/name-parser) qui dissèque les noms en plusieurs composantes
   * [Validateur de Données](https://www.gbif.org/fr/tools/data-validator) qui aide à localiser les problèmes et les drapeaux à l'intérieur d'un jeu de données

**Littérature**

* Chapman, A. D. 2005. Principles and Methods of Data Cleaning: Primary Species and Species-Occurrence Data, version 1.0. Report for the Global Biodiversity Information Facility, Copenhagen. <http://www.gbif.org/document/80528>
* Ribeiro et al. 2022. bdc: A toolkit for standardizing, integrating and cleaning biodiversity data. Methods in Ecology and Evolution 13(7). <https://doi.org/10.1111/2041-210X.13868>
* Zermoglio PF, Plata Corredor CA, Wieczorek JR, Ortiz Gallego R & Buitrago L (2021) Guía para la limpieza de datos sobre biodiversidad con OpenRefine. Versión 3. Copenhagen: GBIF Secretariat. <https://doi.org/10.15468/doc-gzjg-af18>


# Types de Données

Depuis le début, le GBIF s'est concentré sur la publication et la visualisation de données d'occurrence d'espèces (quelque chose, quelque part, à un moment donné).
Les jeux de données sont centrés sur une table principale avec des extensions potentielles liées à ce noyau, créant un schéma en étoile et permettant la publication de jeux de données plus informatifs.
Trois coeurs peuvent être utilisés :
* [Occurrence](https://rs.gbif.org/core/dwc_occurrence_2022-02-02.xml) : publication liée à des occurrences
* [Taxon](https://rs.gbif.org/core/dwc_taxon_2022-02-02.xml) : publication liée à des taxa. Utilisé pour publier des liste d'espèces.
* [Event](https://rs.gbif.org/core/dwc_event_2022-02-02.xml) : publication liée à un pu plusieurs événements de récolte, pendant lesquels plusieurs occurrences ont été récoltées pour chaque événement. Ce coeur est particulièrement utile pour publier des jeux de données écologiques, généralement basés sur des événements d'échantillonnage.

En utilisant ces coeurs et extensions, il est possible de publier [quatre types de jeux de données (plus un !)](https://data-blog.gbif.org/post/data-shareability/)
* Occurrences d'organismes
* Listes d'espèces
* Événements d'échantillonnage
* Occurrences dérivées de données ADN
* Jeux de données contenant uniquement des métadonnées (c'est le plus un)

Exemples de ce qu'il est IMPOSSIBLE de publier sur GBIF :
* Occurrences humaines
* Jeux de données provenant de GBIF et nettoyées ou modifiées par les utilisateurs afin de s'adapter à leurs besoins (les republier créera des doublons)
* Occurrences prédites par des modèles prédictifs
* Occurrences non organiques (des roches par exemple)

Si vous n'êtes pas certain de la manière de publier votre jeu de données, [contactez-nous](maitlo:canadensys.network@gmail.com) ou le [bureau d'aide de GBIF](mailto:helpdesk@gbif.org).
GBIF, TDWG et d'autres partenaires explorent de nouvelles approches afin de publier des types de données plus complexes. Si vous êtes intéressés à en apprendre plus sur ce sujet, visitez la [page sur les nouveaux modèles de données de GBIF](https://www.gbif.org/composition/HjlTr705BctcnaZkcjRJq/data-model-principal-composition).


# Standardisation des données et Darwin Core

**Darwin Core**

[Darwin Core](https://dwc.tdwg.org/), ou DwC, est un ensemble de normes conçues pour le partage de données sur la biodiversité. Développées par le [Biodiversity Information Standards (TDWG)](http://www.tdwg.org/), ces normes permettent aux propriétaires de données de publier des informations sur la biodiversité dans une langue (**Darwin Core**) et un format (ex. **Archives Darwin Core**) compréhensibles et utilisables par tous. Une norme de données facilite le partage et la réutilisation des données par d'autres projets.

Le Darwin Core comprend un [glossaire de termes](https://dwc.tdwg.org/terms/) destiné à faciliter le partage d'informations sur la diversité biologique en fournissant des définitions de référence, des exemples et des commentaires (voir [site Web Darwin Core](https://dwc.tdwg.org/)). Le Darwin Core est principalement basé sur les taxons, leur présence dans la nature telle que documentée par des observations, des spécimens et des échantillons, ainsi que des informations associées. Le [Simple Darwin Core](https://dwc.tdwg.org/simple/) est une spécification pour une  manière particulière d'utiliser les termes : partager des données sur les taxons et leurs occurrences d'une manière structurée simplement. D'autres extensions Darwin Core sont disponibles pour partager des données sur [la répartition des espèces](https://rs.gbif.org/extension/gbif/1.0/distribution_2022-02-02.xml), [l'historique d'identification](https://rs.gbif.org/extension/dwc/identification_history_2022-02-02.xml), les [mesures et faits](https://rs.gbif.org/extension/obis/extended_measurement_or_fact.xml), les [analyses écologiques](https://rs.gbif.org/core/dwc_event_2022-02-02.xml) ou les [données dérivées de l'ADN](https://rs.gbif.org/extension/gbif/1.0/dna_derived_data_2022-02-23.xml).
 

**Cartographie Darwin Core**

L'une des premières étapes de la publication de vos données consiste à traduire ou à « mapper » vos données de leur format actuel vers le Darwin Core. Par exemple, vous pourriez avoir le champ *Collector* dans votre base de données ou votre feuille de calcul, qui correspond à [*recordedBy*](https://dwc.tdwg.org/terms/#recordedBy) dans le Darwin Core. Dans d'autres cas, cela peut ne pas être aussi simple, c'est pourquoi nous vous proposons une assistance pour mapper vos données vers le Darwin Core. Pour plus de détails, consultez [l'étape 4 de notre guide de publication](/publish/7-step-guide/#4-darwin-core-mapping).

**Faut-il utiliser le Darwin Core pour concevoir une base de données ?**

Le Darwin Core est conçu pour échanger des informations sur la biodiversité, et non pour gérer des données. Vous devriez concevoir votre base de données/feuille de calcul d'une manière qui répond aux besoins de votre collection et la rendre pratique et informative pour votre équipe, tout en facilitant le partage ultérieur de l'ensemble de données en Darwin Core. La liste de tous les [termes Darwin Core](http://rs.tdwg.org/dwc/terms/index.htm) ou de ceux utilisés pour d'autres ensembles de données du réseau Canadensys peut vous donner une idée des champs que vous pourriez inclure. et comment partager votre base de données en tant que Darwin Core.

**Documentation**

* [Guide rapide de référence Darwin Core](https://dwc.tdwg.org/terms/)
* [Modèles](https://github.com/tdwg/dwc/tree/master/dist) afin de commencer à utiliser le Darwin Core
* La [Darwin Core Hour](https://github.com/tdwg/dwc-qa/wiki/Webinars), une série de webinaire, organisée par [iDigBio](https://www.idigbio.org/), à propos des normes Darwin Core.

# Métadonnées

Les métadonnées sont des **données sur les données** et peuvent être utilisées pour définir, structurer, gérer et découvrir des informations. Dans le contexte d'un ensemble de données de spécimens, les métadonnées comprennent l'adresse de la collection, le nombre de spécimens, la portée taxonomique, les noms et définitions des champs de l'ensemble de données, etc.

Les métadonnées ne sont pas différentes des « données ordinaires » : les données d’une personne sont souvent les métadonnées d’une autre personne. Par exemple, l’adresse d’une collection correspond à des métadonnées pour un ensemble de données de spécimens, mais à des données pour un registre de collections. Pour un utilisateur de données, de bonnes métadonnées lui permettront de découvrir des données et d'évaluer leur adéquation à des besoins particuliers.

**Normes de métadonnées**

Les normes de données sont utilisées pour échanger des métadonnées (principalement utilisées pour l'interaction machine-machine). Dans la communauté de l'informatique de la biodiversité, les standards utilisés sont :

* [Ecological Metadata Language (EML)](https://eml.ecoinformatics.org/)
* [Resource Description Framework (RDF)](https://www.w3.org/RDF/)
* [Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH)](https://www.openarchives.org/pmh/)

Toutes les normes sont exprimées au format [XML](https://en.wikipedia.org/wiki/XML). Les jeux de données publiés via l'IPT expriment automatiquement leurs métadonnées sous forme de [EML](https://eml.ecoinformatics.org/).


# Registres

Afin de permettre la découverte de données, un jeu de données/collection a non seulement besoin de métadonnées, mais doit également être enregistré quelque part. Pour les institutions et les collections, [le Registre mondial des collections scientifiques (GrSciColl)](https://www.gbif.org/grscicoll), maintenu par le [GBIF](https://www.gbif.org/), est le registre principal. Les informations contenues dans ce registre sont basées sur des partenaires et des initiatives antérieures telles que le Biodiversity Collection Index (BCI) ou le Global Registry of Biodiversity Repositories (GRBio).

>
GRSciColl comprend des données sur les institutions, les collections et les membres du personnel associé et couvre toutes les disciplines scientifiques, incluant les sciences de la terre et de l'espace, l'anthropologie, l'archéologie, la biologie et la biomédecine, ainsi que des domaines appliqués comme l'agriculture, la médecine vétérinaire et la technologie.
>

>
GRSciColl sert également de registre pour les codes d'institutions et de collections (institutionCode et collectionCode), qui sont des éléments DarwinCore utilisés dans la communauté de l'informatique de la biodiversité. L'utilisation de ces termes permet aux publications et aux bases de données de pointer sans ambiguïté vers les collections et leur contenu.
>

>
Le GBIF travaille avec des partenaires pour établir un flux d'informations standardisé et interopérable entre ce registre et d'autres infrastructures clés sur les collectionsd. GRSciColl effectue une synchronisation hebdomadaire avec [Index Herbariorum (IH)](http://sweetgum.nybg.org/science/ih/). Suite à la migration du contenu des [Collection iDigBio](https://www.idigbio.org/portal/collections), GRSciColl partage un registre intégré fournissant des informations cohérentes avec un accès d'édition partagé aux utilisateurs de [GBIF](https://www.gbif.org/) et d'[iDigBio](https://www.idigbio.org/).
>

Pour les gestionnaires d'institutions et de collections, le GBIF dispose d'une fonctionnalité de curation communautaire, permettant des mises à jour et des ajouts d'informations au sein du registre.
Plus d'informations (et des vidéos) sont disponibles sur le [site Web du GBIF](https://www.gbif.org/grscicoll).
