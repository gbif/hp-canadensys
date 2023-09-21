---
layout: compose
composition:
  - type: heroImage
  - type: pageMarkdown
lang-ref: documents
lang: en
title: Documentation
background: https://inaturalist-open-data.s3.amazonaws.com/photos/218909053/original.jpg
imageLicense: |
  <em>Symphyotrichum novae-angliae</em> (L.) G.L.Nesom observed in Canada by Suzanne Labbé via [iNaturalist](https://www.gbif.org/occurrence/3881376924)
#description:
height: 70vh
toc: true
---

# Digitization and Imaging

**Digitization** can take several forms or refer to different processes, for example:
* Entering data from a specimen to a database
* Taking an image of an herbarium specimen label or of the entire specimen
* Transferring a record of a bird song from an analog to a digital format
* 3D-scanning of an insect

> Digitization is the process of converting information into a digital (i.e., computer-readable) format. (Wikipedia)

**Imaging labels**

Photographing specimen labels is often used as a first step towards text digitization of the precious information located on the label. Afterwards, text can be extracted manually or automatically from the image with [Optical Character Recognition (OCR)](https://en.wikipedia.org/wiki/Optical_character_recognition), the latter requiring human proofreading and structuring of the information, which can sometimes be more time-consuming than keystroking. Label images importantly serve as a verbatim backup, allowing users to verify the information and report errors without having access to the physical specimen. Nowadays, labels are usually imaged at the same time as the entire specimen, but further processing of the information contained on the label is not immediate.

**Imaging specimens**

Photographing specimens results in one or more images of the whole specimen. This process is generally more complex than imaging labels, but the resulting image can be important for scientific research. Method (camera vs scanner), resolution, colour, light-conditions, format and storage are all factors to be considered. As a result, this type of imaging can become time-consuming and, unless automated, should first be considered for the most scientifically valuable specimens, such as types, or for specific taxa, depending on the specificity of the collection (geographical or taxonomic focus). Methods used to image specimens also widely vary depending on the type of specimens and collections. Imaging a pinned insect is generally more challenging than imaging a pressed ou mounted plant.

**Tools**

* [SilverImage](http://www.silverbiology.com/products/silverimage/), a tool from [SilverBiology](http://www.silverbiology.com/) that helps to follow and analyze the imaging process
* [Adobe Lightroom](https://www.adobe.com/ca/products/photoshop-lightroom.html) helps with the organization and enhancement of photos taken
* [Tesseract](https://tesseract-ocr.github.io/tessdoc/) is an open source text recognition (OCR) Engine supporting a wide variety of languages
* [Google Vision AI](https://cloud.google.com/vision), developped by Google, is a powerfull AI application enabling the extraction of information from images (fees after a certain number of requests)
* [Google Documents AI](https://cloud.google.com/document-ai), also developped by Google, is used to extract data from documents (fees applied) 

**Literature and documentation**

* Gribomont, Isabelle. OCR with Google Vision API and Tesseract (2023). <https://doi.org/10.46430/phen0109>
* Hegghammer, T. OCR with Tesseract, Amazon Textract, and Google Document AI: a benchmarking experiment. J Comput Soc Sc 5, 861–882 (2022). <https://doi.org/10.1007/s42001-021-00149-1>
* iDigBio documentation about [Specimen Image Capture](https://www.idigbio.org/wiki/index.php/Specimen_Image_Capture) and [Specimen Image Processing](https://www.idigbio.org/wiki/index.php/Specimen_Image_Processing)
* [Häuser et al., 2005. Digital imaging of biological type specimens : A manual of best practice](https://www.gbif.org/fr/document/80576/digital-imaging-of-biological-type-specimens-a-manual-of-best-practice)
* [Melissa Tulig and Kimberly Watson, 2011. Streamlining Collaborative Digitization](https://www.idigbio.org/content/streamlining-collaborative-digitization)

# Georeferencing

Georeferencing is the process of interpreting textual descriptions of places into spatial descriptions (i.e. [geographic coordinates](https://en.wikipedia.org/wiki/Geographic_coordinate_system)). Georeferencing biological specimens – which often only have textual descriptions of their locality – allows the information to be displayed on a map and used in spatial analyses.

e.g. “Bear Island, Lake Temagami, Nipissing District, Ontario, Canada” → decimal latitude: 46.9831216, decimal longitude: -80.0681018, uncertainty: 1410m.  

Georeferencing is time-consuming and should be tackled with the right tools and [guidelines](https://docs.gbif.org/course-data-mobilization/en/key-documentation.html#georeferencing). We encourage [collaborative georeferencing](https://docs.gbif.org/georeferencing-best-practices/1.0/en/#collaborative-georeferencing), which greatly reduces the duplication of efforts and can generate more accurate results, since specimens can be grouped per province/locality in the overall network (instead of per collection), and thus be georeferenced by the people with the most knowledge of these provinces/localities.

One of the goals of Canadensys is to georeference a large part of the published specimen information as accurately as possible, and to provide uncertainties for coordinates, which gives key information to determine the data’s fitness for use and thus the data quality. 

> By far the most difficult issue in georeferencing primary species occurrence data is the massive amount of legacy data held in the world’s museums, herbaria, universities, etc. Most modern collectors are now using GPSs or large scale maps to locate their collection events, and thus most of the new data entering institutions already include georeferences. Most museums beginning to database their collections, however, are faced with the massive task of georeferencing the huge backlog of data in their collections, much of it with very little or vague location information. (Chapman & Wieczorek 2006)

For more information on georeferencing, consult: Chapman AD & Wieczorek JR (2020) Georeferencing Best Practices. Copenhagen: GBIF Secretariat. <https://doi.org/10.15468/doc-gg7h-s853>

[APIs (Appication Programming Interface)](https://en.wikipedia.org/wiki/API) can tremendously help to georeference batch information, allowing the retrieval of geographic coordinates from adresses or localities, or the opposite.
API requests can be automated in data cleaning tools, such as [OpenRefine](http://openrefine.org/) or [R](https://www.r-project.org/).

**Georeferencing tools**

* [Georeferencing Calculator](http://georeferencing.org/georefcalculator/gc.html) and its [manual](https://doi.org/10.35035/gdwq-3v93)
* [GeoLocate](https://www.geo-locate.org/developers/default.html)
* [UTM / MTM calculator](http://leware.net/geo/utmgoogleapp.htm)
* [SimpleMappr](https://www.simplemappr.net/)
* [GeoNames](http://www.geonames.org/), a database referencing geographical names around the world
* [GeoRepository](https://epsg.org/home.html), a web application and API to search and display geodetic metadata
* [CoordinateCleaner](https://besjournals.onlinelibrary.wiley.com/doi/10.1111/2041-210X.13152)

# Data Cleaning

Data Cleaning is an essential part of the information management chain. As noted by [Chapman (2005)](http://www.gbif.org/document/80528):
 > ...error prevention should be considered a priority relative to error detection and cleaning, as it is cheaper and more efficient to prevent errors than to try to find them and correct them later. No matter how efficient the process of data entry, errors will still occur and therefore data validation and correction cannot be ignored. Error detection, validation and cleaning all have key roles to play, especially with legacy data (e.g., museum and herbarium data collected over the last 300 years), and thus both error prevention and data cleaning should be incorporated in an organization’s data management policy. (Chapman 2005)

Several tools have been developed to help find errors and to implement modifications. These tools can also help enrich datasets by deriving information from available fields.

**Tools**

* [OpenRefine](http://openrefine.org/) - a powerful free, open source tool for working with messy data
* [bdc R package](https://brunobrr.github.io/bdc/) - a toolkit for standardizing, integrating, and cleaning biodiversity data
* [bdclean](https://bdverse.org/bdclean/) - user friendly data cleaning Shiny app
* GBIF Tools such as:
   * [Species matching](https://www.gbif.org/tools/species-lookup) which normalizes species names from a csv file against the GBIF backbone
   * [Name parser](https://www.gbif.org/tools/name-parser) which dissects name strings into its component
   * [Data validator](https://www.gbif.org/tools/data-validator) which will helps to locate the issues and flags within a dataset

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
 
The Darwin Core includes a [glossary of terms](https://dwc.tdwg.org/terms/) intended to facilitate the sharing of information about biological diversity by providing reference definitions, examples, and commentaries (see [Darwin Core website](https://dwc.tdwg.org/)). The Darwin Core is primarily based on taxa, their occurrence in nature as documented by observations, specimens and samples, and related information. The [Simple Darwin Core](https://dwc.tdwg.org/simple/) is a specification for one particular way to use the terms – to share data about taxa and their occurrences in a simply structured way. Other Darwin Core extensions are available to share data about [species distribution](https://rs.gbif.org/extension/gbif/1.0/distribution_2022-02-02.xml), [identification history](https://rs.gbif.org/extension/dwc/identification_history_2022-02-02.xml), [measurements and facts](https://rs.gbif.org/extension/obis/extended_measurement_or_fact.xml), [ecological survey](https://rs.gbif.org/core/dwc_event_2022-02-02.xml) or [DNA derived data](https://rs.gbif.org/extension/gbif/1.0/dna_derived_data_2022-02-23.xml), for example.


**Mapping to Darwin Core**

One of the first steps in publishing your data, is translating or “mapping” your data from its current format to Darwin Core. For example, you might have the field *Collector* in your database or spreadsheet, which corresponds to [*recordedBy*](https://dwc.tdwg.org/terms/#recordedBy) in Darwin Core. In other cases it might not be so straightforward, which is why we offer support in mapping your data to Darwin Core. For more details, see [step 4 of our publication guide](/publish/7-step-guide/#4-darwin-core-mapping).

**Should you use Darwin Core to design a database?**

Darwin Core is designed to exchange biodiversity information, not to manage data. You should design your database/spreadsheet in a way that fits the needs of your collection and makes it practical and informative for your team, while facilitating subsequent sharing of the dataset in Darwin Core. The list of all [Darwin Core terms](http://rs.tdwg.org/dwc/terms/index.htm) or the ones used for other datasets in the Canadensys network might give you an idea of what fields you could include and how you could share your database as Darwin Core.

**Documentation**

* [Darwin Core quick reference guide](https://dwc.tdwg.org/terms/)
* [Templates](https://github.com/tdwg/dwc/tree/master/dist) to start using Darwin Core
* The [Darwin Core Hour](https://github.com/tdwg/dwc-qa/wiki/Webinars), a series of webinar, organized by [iDigBio](https://www.idigbio.org/), around the Darwin Core standards

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

To allow the discovery of data, a dataset/collection needs metadata, but also needs to be registered somewhere. For institutions and collections, [the Global Registry of Scientific Collections (GrSciColl)](https://www.gbif.org/grscicoll), maintained by [GBIF](https://www.gbif.org/), is the main registry. Information contained in this registry is based on partners and previous initiatives like the Biodiversity Collection Index (BCI) or the Global Registry of Biodiversity Repositories (GRBio).

>
GRSciColl includes data on institutions, collections and associated staff members and spans all scientific disciplines, including earth and space sciences, anthropology, archaeology, biology and biomedicine, as well as applied fields like agriculture, veterinary medicine and technology.

>
GRSciColl also serves as the registry for *InstitutionCodes* and *CollectionCodes* — elements used in the DarwinCore data standard used in the biodiversity informatics community. Use of these terms enables publications and databases to point unambiguously to collections and their contents.
>

>
GBIF is working with partners to establish a standardized, interoperable flow of information between this registry and other key collections infrastructures. GRSciColl runs a weekly synchronization with [Index Herbariorum (IH)](http://sweetgum.nybg.org/science/ih/). Following content migration from [iDigBio Collections](https://www.idigbio.org/portal/collections), GRSciColl shares an integrated registry delivering consistent information with shared editing access to users of both GBIF.org and iDigBio.org. ([GrSciColl](https://www.gbif.org/grscicoll))
>

For institution and collection managers, GBIF has community-curation functionality, allowing for updates and additions of information within the registry.  
More information (and videos) are available on the [GBIF website](https://www.gbif.org/grscicoll).

