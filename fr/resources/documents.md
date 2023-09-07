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
* Entrer les données d'un spécimen à la base de données
* Prendre une image de l'étiquette d'un spécimen d'herbier ou d'un spécimen entier
* Transférer un enregistrer de chant d'oiseau d'un format analogique à un format digital
* Scanner un insecte en 3D

> La numérisation est le processus permettant de convertir de l'information dans un format digital (c.à.d. lisisble par un ordinateur). (Wikipedia)

1. **Numérisation d'étiquettes**

La photographie des étiquettes de spécimens est souvent utilisée comme la première étape vers la numérisation textuelle des précieuses informations contenues sur l'étiquette. Par la suite, le texte pourra être extrait manuellement ou de manière automatisée à partir de l'image en utilisant la [Reconnaissance Optique de Caractères (OCR)](https://fr.wikipedia.org/wiki/Reconnaissance_optique_de_caract%C3%A8res), ce dernier nécessitant une relecture et une structuration de l'information, ce qui peut parfois prendre plus de temps que de taper l'information à la main. Les images d'étiquettes jouent un rôle important de sauvegarde textuelle, permettant aux utilisateurs de vérifier l'information et de rapporter les erreurs sans avoir besoin d'accéder au spécimen physqiue. De nos jours, les étiquettes sont le plus souvent photographiées en même temps que le spécimen complet, mais le traitement des informations contenues sur l'étiquette n'est le plus souvent pas immédiate.

2. **Numérisation de spécimens**

Photographier des spécimens engendre une ou plusieurs images du spécimen complet. Ce processus est généralement plus complexe que la numérisation d'étiquettes, mais l'image en résultant peut être importante pour la recherche scientifique. La méthode (caméra vs. scanner), la résolution, la couleur, les conditions lumineuses, le format et la méthode de stockage sont tous des facteurs devant êtres pris en considération. Par conséquent, ce type de numérisation peut devenir très gourmand en temps et, à moins d'être automatisé, devrait en premier lieu être considéré pour les spécimens de plus grande valeur scientifique, comme les types, ou pour des groupes taxonomiques spécifiques, tout dépendant de la spécificité de la collection (focus géographique ou taxonomique). Les méthodes utilisées pour la numérisation varient également beaucoup en fonction du type de spécimens et de collections. Photographier un insecte épinglé est généralement plus complexe que numériser un spécimen d'herbier pressé et monté.

3. **Outils**

* [SilverImage](http://www.silverbiology.com/products/silverimage/), un outil de [SilverBiology](http://www.silverbiology.com/) pouvant aider à suivre et analyser le processus de numérisation
* [Adobe Lightroom](https://www.adobe.com/ca/products/photoshop-lightroom.html) est très utile pour l'amélioration et l'organisation des photos prises
* [Tesseract](https://tesseract-ocr.github.io/tessdoc/) est un logiciel de reconnaissance de texte (OCR) open source supportant une grande variété de langues
* [Google Vision AI](https://cloud.google.com/vision) a été développé par Google et est une puissante application AI permettant l'extraction d'informations à partir d'images (certains frais peuvent s'appliquer après un certain nombre de requêtes)
* [Google Documents AI](https://cloud.google.com/document-ai), également développé par Google, permet d'extraire des données depuis des documents (des frais sont appliqués).

4. **Litérature et documentation**

* Gribomont, Isabelle. OCR with Google Vision API and Tesseract (2023). <https://doi.org/10.46430/phen0109>
* Hegghammer, T. OCR with Tesseract, Amazon Textract, and Google Document AI: a benchmarking experiment. J Comput Soc Sc 5, 861–882 (2022). <https://doi.org/10.1007/s42001-021-00149-1>
* iDigBio documentation about [Specimen Image Capture](https://www.idigbio.org/wiki/index.php/Specimen_Image_Capture) and [Specimen Image Processing](https://www.idigbio.org/wiki/index.php/Specimen_Image_Processing)
* [Häuser et al., 2005. Digital imaging of biological type specimens : A manual of best practice](https://www.gbif.org/fr/document/80576/digital-imaging-of-biological-type-specimens-a-manual-of-best-practice)
* [Melissa Tulig and Kimberly Watson, 2011. Streamlining Collaborative Digitization](https://www.idigbio.org/content/streamlining-collaborative-digitization)

# Géoréférencement

Le géoréférencement est le processus permettant d'interpréter les descriptions textuelles de localisation afin d'en extraire des descriptions géographiques ([coordonnées géographiques](https://fr.wikipedia.org/wiki/Coordonn%C3%A9es_g%C3%A9ographiques)). Le géoréférencement de spécimens biologiques, qui n'ont souvent que des descriptions textuelles à propos de leur localisation, permet au spécimen d'être placé sur une carte et utilisé dans des analyses spatiales.

Ex. “Bear Island, Lake Temagami, Nipissing District, Ontario, Canada” → latitude décimale : 46.9831216, longitude décimale : -80.0681018, incertitude : 1410m. 

Le géoréférencement peut prendre beaucoup de temps et devrait être effectué à l'aide des bons outils et des bonnes [lignes directrices](https://docs.gbif.org/course-data-mobilization/en/key-documentation.html#georeferencing). Nous encourageons le [géoréférencement collaboratif](https://docs.gbif.org/georeferencing-best-practices/1.0/en/#collaborative-georeferencing), qui réduit grandement la duplication des efforts et peut générer des résultats plus précis, puisque les spécimens peuvent être groupés par province ou localité dans un réseau plus général (au lieu d'une collection seulement), puis géoréférencés par les personnes ayant le plus de connaissances à propos des ces provinces et localités.

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

# Data Cleaning

Data Cleaning is an essential part of the information management chain. As noted by [Chapman (2005)](http://www.gbif.org/document/80528):
 > error prevention should be considered a priority relative to error detection and cleaning, as it is cheaper and more efficient to prevent errors than to try to find them and correct them later. No matter how efficient the process of data entry, errors will still occur and therefore data validation and correction cannot be ignored. Error detection, validation and cleaning all have key roles to play, especially with legacy data (e.g., museum and herbarium data collected over the last 300 years), and thus both error prevention and data cleaning should be incorporated in an organization’s data management policy.

Several tools have been developed to help find errors and to implement modifications. These tools can also help enrich datasets by deriving information from available fields.

**Tools**

* [OpenRefine](http://openrefine.org/) - a powerful free, open source tool for working with messy data
* [bdc R package](https://brunobrr.github.io/bdc/) - A toolkit for standardizing, integrating, and cleaning biodiversity data
* [bdclean](https://bdverse.org/bdclean/) - user friendly data cleaning Shiny app
* GBIF Tools such as:
   * [Species matching](https://www.gbif.org/tools/species-lookup) which normalize species names from a csv file against the GBIF backbone
   * [Name parser](https://www.gbif.org/tools/name-parser) which dissect name strings into its component
   * [Data validator](https://www.gbif.org/tools/data-validator) which will help to locate the issues and flags within a dataset

**Literature**

* Chapman, A. D. 2005. Principles and Methods of Data Cleaning: Primary Species and Species-Occurrence Data, version 1.0. Report for the Global Biodiversity Information Facility, Copenhagen. <http://www.gbif.org/document/80528>
* Ribeiro et al. 2022. bdc: A toolkit for standardizing, integrating and cleaning biodiversity data. Methods in Ecology and Evolution 13(7). <https://doi.org/10.1111/2041-210X.13868>
* Zermoglio PF, Plata Corredor CA, Wieczorek JR, Ortiz Gallego R & Buitrago L (2021) Guía para la limpieza de datos sobre biodiversidad con OpenRefine. Versión 3. Copenhagen: GBIF Secretariat. <https://doi.org/10.15468/doc-gzjg-af18>


# Data types

Since the beginning, GBIF has been focusing on publication and visualization of species occurrence data (something, somewhere, at a certain point in time).  
Datasets are centered on a core table with potential extensions linked to that core, creating a star-like schema, and allowing the publication of more informative datasets.
Three cores can be used:
* [Occurrence](https://rs.gbif.org/core/dwc_occurrence_2022-02-02.xml): publication linked to occurrences.
* [Taxon](https://rs.gbif.org/core/dwc_taxon_2022-02-02.xml): publication linked to taxa. It is used to publish checklists.
* [Event](https://rs.gbif.org/core/dwc_event_2022-02-02.xml): publication linked to one or several collection events, with multiple occurrences collected during each event. This core is especially useful when publishing ecological datasets, usually based on sampling-events.

With theses cores and extensions, it is possible to publish [four types of dataset (plus one!)](https://data-blog.gbif.org/post/data-shareability/)
* Organism occurrences
* Checklists
* Sampling events
* DNA-derived occurrences
* Metadata-only datasets (that's the plus one)

Examples of what it is NOT possible to share on GBIF:
* Human occurrences
* Datasets originating from GBIF and cleaned or modified by users to fit their purpose (republishing them would create duplicates)
* Predicted occurrences based on predictive models
* Non-organismal occurrences (rocks for example)

If you are not sure how to publish your dataset, [contact us](maitlo:canadensys.network@gmail.com) or the [GBIF helpdesk](mailto:helpdesk@gbif.org).
GBIF, TDWG, and other partners, are exploring new approaches to publish more complex types of data. If you are interested to know more about this subject, visit the [New data models page on GBIF](https://www.gbif.org/composition/HjlTr705BctcnaZkcjRJq/data-model-principal-composition).


# Data standardization and Darwin Core

**Darwin Core**

[Darwin Core](https://dwc.tdwg.org/) – or DwC for short – is a group of standards designed for sharing biodiversity data. Developed by the [Biodiversity Information Standards (TDWG)](http://www.tdwg.org/), these standards allow data owners to publish biodiversity information in a language (**Darwin Core**) and format (e.g. **Darwin Core archives**) that can be understood and used by everyone. A data standard facilitates data sharing and re-use by other projects.
 
The Darwin Core includes a [glossary of terms](https://dwc.tdwg.org/terms/) intended to facilitate the sharing of information about biological diversity by providing reference definitions, examples, and commentaries (see [Darwin Core website](https://dwc.tdwg.org/)). The Darwin Core is primarily based on taxa, their occurrence in nature as documented by observations, specimens and samples, and related information. The [Simple Darwin Core](https://dwc.tdwg.org/simple/) is a specification for one particular way to use the terms – to share data about taxa and their occurrences in a simply structured way. Other Darwin Core extensions are available to share data about [species distribution](https://rs.gbif.org/extension/gbif/1.0/distribution_2022-02-02.xml), [identification history](https://rs.gbif.org/extension/dwc/identification_history_2022-02-02.xml), [measurements and facts](https://rs.gbif.org/extension/obis/extended_measurement_or_fact.xml), [ecological survey](https://rs.gbif.org/core/dwc_event_2022-02-02.xml) or [DNA derived data](https://rs.gbif.org/extension/gbif/1.0/dna_derived_data_2022-02-23.xml) for example.


**Mapping to Darwin Core**

One of the first steps in publishing your data, is translating or “mapping” your data from its current format to Darwin Core. For example, you might have the field *Collector* in your database or spreadsheet, which corresponds to [*recordedBy*](https://dwc.tdwg.org/terms/#recordedBy) in Darwin Core. In other cases it might not be so straightforward, which is why we offer support in mapping your data to Darwin Core. For more details, see [step 4 of our publication guide](https://canadensys.hp.gbif-staging.org/publish/7-step-guide/#4-darwin-core-mapping).

**Should you use Darwin Core to design a database?**

Darwin Core is designed to exchange biodiversity information, not to manage data. You should design your database/spreadsheet in a way that fits the needs of your collection and make it practical and informative for your team, while facilitation sharing the dataset later in Darwin Core. The list of all [Darwin Core terms](http://rs.tdwg.org/dwc/terms/index.htm) or the ones used for other datasets in the Canadensys network might give you an idea of what fields you could include and how you could share your database as Darwin Core.

**Documentation**

* [Darwin Core quick reference guide](https://dwc.tdwg.org/terms/)
* [Templates](https://github.com/tdwg/dwc/tree/master/dist) to start using Darwin Core
* The [Darwin Core Hour](https://github.com/tdwg/dwc-qa/wiki/Webinars), a series of webinar, organized by [iDigBio](https://www.idigbio.org/), around the Darwin Core standards.

# Metadata

Metadata is **data about data**, and can be used to define, structure, manage and discover information. In the context of a specimen dataset, metadata includes the address of the collection, the number of specimens, the taxonomic scope, the names and definitions of the dataset fields, etc.  

Metadata is no different than ‘regular data’: one person’s data is often another person’s metadata. For example, the address of a collection is metadata for a specimen dataset, but data for a registry of collections. For a data user, good metadata will enable them to discover data and assess their appropriateness for particular needs.

**Metadata standards**

Data standards are used to exchange metadata (primarily used for machine-machine interaction). In the biodiversity informatics community, the standards used are:

* [Ecological Metadata Language (EML)](https://eml.ecoinformatics.org/)
* [Resource Description Framework (RDF)](https://www.w3.org/RDF/)
* [Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH)](https://www.openarchives.org/pmh/)

All standards are expressed as [XML](https://en.wikipedia.org/wiki/XML). Datasets which are published via the IPT automatically express their metadata as [EML](https://eml.ecoinformatics.org/).

# Registries

In order to allow the discovery of data, a dataset/collection not only needs metadata, but also needs to be registered somewhere. For institutions and collections, [the Global Registry of Scientific Collections (GrSciColl)](https://www.gbif.org/grscicoll), maintained by [GBIF](https://www.gbif.org/), is the main registry. Information contained in this registry is based on partners and previous initiatives like the Biodiversity Collection Index (BCI) or the Global Registry of Biodiversity Repositories (GRBio).

>
GRSciColl includes data on institutions, collections and associated staff members and spans all scientific disciplines, including earth and space sciences, anthropology, archaeology, biology and biomedicine, as well as applied fields like agriculture, veterinary medicine and technology.

>
GRSciColl also serves as the registry for InstitutionCodes and CollectionCodes — elements used in the DarwinCore data standard used in the biodiversity informatics community. Use of these terms enables publications and databases to point unambiguously to collections and their contents.
>

>
GBIF is working with partners to establish a standardized, interoperable flow of information between this registry and other key collections infrastructures. GRSciColl runs a weekly synchronization with [Index Herbariorum (IH)](http://sweetgum.nybg.org/science/ih/). Following content migration from [iDigBio Collections](https://www.idigbio.org/portal/collections), GRSciColl shares an integrated registry delivering consistent information with shared editing access to users of both GBIF.org and iDigBio.org.
>

For institution and collection managers, GBIF has community-curation functionality, allowing for updates and additions of information within the registry.  
More information (and videos) are available on the [GBIF website](https://www.gbif.org/grscicoll).

