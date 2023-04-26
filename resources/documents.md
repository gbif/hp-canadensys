---
layout: compose
composition:
  - type: heroImage
  - type: pageMarkdown
lang-ref: documents
lang: en
title: Documents
background: https://inaturalist-open-data.s3.amazonaws.com/photos/218909053/original.jpg
imageLicense: |
  <em>Symphyotrichum novae-angliae</em> (L.) G.L.Nesom observed in Canada by Suzanne Labbé via [iNaturalist](https://www.gbif.org/occurrence/3881376924)
#description:
height: 70vh
toc: true
---

# Imaging

## Imaging labels

Photographing specimen labels is often used as a first step towards text digitization, which is still necessary as text on an image cannot be searched or analyzed. Text can be extracted automatically from the image with [Optical Character Recognition (OCR)](https://en.wikipedia.org/wiki/Optical_character_recognition), but this will require human proofreading and structuring of the information, and it can sometime be more time-consuming than keystroking. The main use of a label image is that it serves as a verbatim backup: publishing it in combination with the text information allows users to verify the information and report errors without having access to the physical specimen.
Nowadays, labels are usually imaged at the same time as the entire specimen, but further processing of the information contained on the label is not immediate.

## Imaging specimens

Photographing specimens results in one or more images of the whole specimen. This process is generally more complex than imaging labels, as the image could be useful for scientific research. Method (camera vs scanner), resolution, color, light-conditions, format and storage are all factors to be considered. As a result, this type of imaging can become very time-consuming and unless automated, it should first be considered for the most scientifically valuable specimens, such as types, or for specific taxa, depending on the specificity of the collection (geographical or taxonomic focus).  
Methods used to image specimens will also widely varies on the type of specimens. Imaging a herbarium sheet is easier than imaging a pinned insect

## Tools

* [SilverImage](http://www.silverbiology.com/products/silverimage/), a tool from [SilverBiology](http://www.silverbiology.com/) that helps to follow and analyze the imaging process
* [Adobe Lightroom](https://www.adobe.com/ca/products/photoshop-lightroom.html) helps with the organization and enhancement of photo taken

## Litterature and dcocuments

* Hegghammer, T. OCR with Tesseract, Amazon Textract, and Google Document AI: a benchmarking experiment. J Comput Soc Sc 5, 861–882 (2022). https://doi.org/10.1007/s42001-021-00149-1
* iDigBio documentation about [Specimen Image Capture](https://www.idigbio.org/wiki/index.php/Specimen_Image_Capture) and [Specimen Image Processing](https://www.idigbio.org/wiki/index.php/Specimen_Image_Processing)
* [Häuser et al., 2005. Digital imaging of biological type specimens : A manual of best practice](https://www.gbif.org/fr/document/80576/digital-imaging-of-biological-type-specimens-a-manual-of-best-practice)
* [Melissa Tulig and Kimberly Watson, 2011. Streamlining Collaborative Digitization](https://www.idigbio.org/content/streamlining-collaborative-digitization)

# Georeferencing

Georeferencing is the process of interpreting textual descriptions of places into spatial descriptions (i.e. [geographic coordinates](https://en.wikipedia.org/wiki/Geographic_coordinate_system)).  
E.g. “Bear Island, Lake Temagami, Nipissing District, Ontario, Canada” → decimal latitude: 46.9831216, decimal longitude: -80.0681018, uncertainty: 1410m.  
Georeferencing biological specimens – which often only have textual descriptions of their locality – allows the information to be displayed on a map and used in spatial analyses.

Although extremely useful, georeferencing is also time-consuming and should be tackled as a community, with the right [tools]() and [guidelines](https://docs.gbif.org/course-data-mobilization/en/key-documentation.html#georeferencing/)

>
  A Location that is poorly georeferenced obscures the information upon which a georeference should be based, potentially making the originally provided information irrecoverable. The resulting georeferences can be misleading to users and lead to errors in research outputs. Thus, an important take-home message is, "To georeference poorly is worse than not to georeference at all."
>

Chapman AD & Wieczorek JR (2020) Georeferencing Best Practices. Copenhagen: GBIF Secretariat. https://doi.org/10.15468/doc-gg7h-s853

[APIs (Appication Programming Interface)](https://en.wikipedia.org/wiki/API) can tremendously help to georeference batch of information, allowing to retrieve geographic coordinates from adresses or localities, or the opposite.
API requests can be automated in data cleaning tools, such as [OpenRefine](http://openrefine.org/) or [R](https://www.r-project.org/).

## Georeferencing tools

* [Georeferencing Calculator](http://georeferencing.org/georefcalculator/gc.html) and its [manual](https://doi.org/10.35035/gdwq-3v93)
* [GeoLocate](https://www.geo-locate.org/developers/default.html)
* [UTM / MTM calculator](http://leware.net/geo/utmgoogleapp.htm)
* [SimpleMappr](https://www.simplemappr.net/)
* [GeoNames](http://www.geonames.org/), a database referencing geographical names around the world.
* [GeoRepository](https://epsg.org/home.html), a web application and API to search and display geodetic metadata.
* [CoordinateCleaner](https://besjournals.onlinelibrary.wiley.com/doi/10.1111/2041-210X.13152)

# Data Cleaning

>
  Data Cleaning is an essential part of the Information Management Chain as mentioned in the associated document, Principles of Data Quality (Chapman 2005a). As stressed there, error prevention is far superior to error detection and cleaning, as it is cheaper and more efficient to prevent errors than to try and find them and correct them later. No matter how efficient the process of data entry, errors will still occur and therefore data validation and correction cannot be ignored. Error detection, validation and cleaning do have key roles to play, especially with legacy data (e.g. museum and herbarium data collected over the last 300 years), and thus both error prevention and data cleaning should be incorporated in an organisation’s data management policy.
>
  One important product of data cleaning is the identification of the basic causes of the errors detected and using that information to improve the data entry process to prevent those errors from re-occurring.
>

Chapman, A. D. 2005. Principles and Methods of Data Cleaning: Primary Species and Species-Occurrence Data. http://www.gbif.org/document/80528

Several tools have been developed to help finding errors and applying modifications. These tools can also help enriching dataset by deriving information from available fields.

## Tools

* [OpenRefine](http://openrefine.org/) - a powerful free, open source tool for working with messy data
* [bdc R package](https://brunobrr.github.io/bdc/) - A toolkit for standardizing, integrating, and cleaning biodiversity data
* [bdclean](https://bdverse.org/bdclean/) - user friendly data cleaning Shiny app
* GBIF Tools such as:
   * [Species matching](https://www.gbif.org/tools/species-lookup) which normalize species names from a csv file against the GBIF backbone
   * [Name parser](https://www.gbif.org/tools/name-parser) which dissect name strings into its component
   * [Data validator](https://www.gbif.org/tools/data-validator) which will help to locate the issues and flags within a dataset

## Litterature

* Chapman, A. D. 2005. Principles and Methods of Data Cleaning: Primary Species and Species-Occurrence Data, version 1.0. Report for the Global Biodiversity Information Facility, Copenhagen. Available online at http://www.gbif.org/document/80528.
* Ribeiro et al. 2022. bdc: A toolkit for standardizing, integrating and cleaning biodiversity data. Methods in Ecology and Evolution 13(7). https://doi.org/10.1111/2041-210X.13868
* Zermoglio PF, Plata Corredor CA, Wieczorek JR, Ortiz Gallego R & Buitrago L (2021) Guía para la limpieza de datos sobre biodiversidad con OpenRefine. Versión 3. Copenhagen: GBIF Secretariat. https://doi.org/10.15468/doc-gzjg-af18.


# Data types

From the beginning, GBIF has been focusing on publication and visualization of species occurrence data (something, somewhere, at a certain point in time).  
Datasets are centered on a core table with potential extensions linked to that core, creating a star-like schema, and allowing the publication of more informative datasets.
Three core can be used:
* [Occurrence](https://rs.gbif.org/core/dwc_occurrence_2022-02-02.xml): publication linked to occurrences.
* [Taxon](https://rs.gbif.org/core/dwc_taxon_2022-02-02.xml): publication linked to taxa. It is used to publish checklists.
* [Event](https://rs.gbif.org/core/dwc_event_2022-02-02.xml): publication linked to one or several collection events, with multiple occurrences collected during each event. This core is especially useful when publishing ecological dataset, usually based on sampling-event.

With theses cores and extensions, it is possible to publish [four types of dataset (plus one!)](https://data-blog.gbif.org/post/data-shareability/)
* Organism occurences
* Checklists
* Sampling events
* DNA-derived occurrences
* Metadata-only datasets (that's the plus one)

Example of what it is NOT possible to share on GBIF:
* Human occurences
* Datasets originating from GBIF and cleaned or modified by users to fit their purpose (republishing them would create duplicates)
* Predicted occurrences based on predictive models
* Non-organismal occurrences (rocks for example)

If you are not sure how to publish your dataset, [contact us](maitlo:canadensys.network@gmail.com) or the [GBIF helpdesk](mailto:helpdesk@gbif.org).
GBIF, TDWG, and other partners, are exploring new approaches to publish more complex types of data. If you are interested to know more about this subject, visit the [New data models page on GBIF](https://www.gbif.org/composition/HjlTr705BctcnaZkcjRJq/data-model-principal-composition).


# Darwin Core

[Darwin Core](https://dwc.tdwg.org/) - DwC for short - is a standard maintained by the [Darwin Core Maintenance Interest Group](https://www.tdwg.org/standards/dwc/#maintenance-group%22%3E). It includes a glossary of terms intended to facilitate the sharing of information about biological diversity by providing identifiers, labels, and definitions. Darwin Core is primarily based on taxa, their occurrence in nature as documented by observations, specimens, samples, and related information.

A data standard facilitates data sharing and re-use by other projects. 

## Mapping to Darwin Core

One of the first steps in publishing your data, is translating or “mapping” your data from its current format to Darwin Core. For example, you might have the field *Collector* in your database or spreadsheet, which corresponds to [*recordedBy*](https://dwc.tdwg.org/terms/#recordedBy) in Darwin Core. In other cases it might not be so straightforward, which is why we offer support in mapping your data to Darwin Core. For more details, see [step 4 of our publication guide](https://canadensys.hp.gbif-staging.org/publish/7-step-guide/#4-darwin-core-mapping).

## Should you use Darwin Core to design a database?

Darwin Core is designed to exchange biodiversity information, not to manage data. You should design your database/spreadsheet in a way that fits the needs of your collection, but the list of all [Darwin Core terms](http://rs.tdwg.org/dwc/terms/index.htm) or the ones used for other datasets in the Canadensys network might give you an idea of what fields you could include and how you could share your database as Darwin Core later.

## Documents

* [Darwin Core quick reference guide](https://dwc.tdwg.org/terms/)
* [Templates](https://github.com/tdwg/dwc/tree/master/dist) to start using Darwin Core
* The [Darwin Core Hour](https://github.com/tdwg/dwc-qa/wiki/Webinars), a series of webinar, organized by [iDigBio](https://www.idigbio.org/), around the Darwin Core standards.

# Metadata

Metadata is **data about data**, and can be used to define, structure, manage and discover information. In the context of a specimen dataset, metadata includes the address of the collection, the number of specimens, the taxonomic scope, the names and definitions of the dataset fields, etc.  

Metadata is no different than ‘regular data’: one person’s data is often another person’s metadata. For example, the address of a collection is metadata for a specimen dataset, but data for a registry of collections. For a data user, good metadata will enable them to discover data and assess their appropriateness for particular needs.

## Metadata standards

Data standards are used to exchange metadata (primarily used for machine-machine interaction). In the biodiversity informatics community, the standards used are:

* [Ecological Metadata Language (EML)](https://eml.ecoinformatics.org/)
* [Resource Description Framework (RDF)](https://www.w3.org/RDF/)
* [Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH)](https://www.openarchives.org/pmh/)

All standards are expressed as [XML](https://en.wikipedia.org/wiki/XML). Datasets which are published via the IPT automatically express their metadata as [EML](https://eml.ecoinformatics.org/).

## Registries

In order to allow the discovery of data, a dataset/collection not only needs metadata, but also needs to be registered somewhere. For institutions and collections, [the Global Registry of Scientific Collections (GrSciColl)](https://www.gbif.org/grscicoll), maintained by [GBIF](https://www.gbif.org/), is the main registry. Information contained in this registry is based on partners and previous initiatives like the Biodiversity Collection Index (BCI) or the Global Registry of Biodiversity Repositories (GRBio).

>
GRSciColl includes data on institutions, collections and associated staff members and spans all scientific disciplines, including earth and space sciences, anthropology, archaeology, biology and biomedicine, as well as applied fields like agriculture, veterinary medicine and technology.
>
GRSciColl also serves as the registry for InstitutionCodes and CollectionCodes—elements used in the DarwinCore data standard used in the biodiversity informatics community. Use of these terms enables publications and databases to point unambiguously to collections and their contents.
>

>
GBIF is working with partners to establish a standardized, interoperable flow of information between this registry and other key collections infrastructures. GRSciColl runs a weekly synchronization with [Index Herbariorum (IH)](http://sweetgum.nybg.org/science/ih/). Following content migration from [iDigBio Collections](https://www.idigbio.org/portal/collections), GRSciColl shares an integrated registry delivering consistent information with shared editing access to users of both GBIF.org and iDigBio.org.
>

For institution and collection managers, GBIF has community-curation functionality, allowing for updates and additions of information within the registry.  
More information (and videos) are available on the [GBIF website](https://www.gbif.org/grscicoll).