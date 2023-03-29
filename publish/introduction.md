---
layout: compose
sideNavigation: sidenav.publish
composition:
  - type: heroImage
  - type: pageMarkdown
lang-ref: introduction
lang: en
title: How to publish data
background: /assets/images/Odocoileus_hemionus_(Rafinesque,_1817).jpeg
imageLicense: |
  *Odocoileus hemionus (Rafinesque, 1817). Photo by John Krampl via [iNaturalist](https://www.gbif.org/occurrence/4011988341)
description: Introduction to biodiversity data publication 
height: 70vh
toc: true
---
Data publication is the process of making biodiversity information available online, and is the core mission of Canadensys.
To publish data on Canadensys and GBIF, several crucial steps are recommended. Data cleaning, standardization and georeferencing are needed to make data compatible with international data bases. Although not mandatory, imaging of labels or specimens is also often part of the data publication process. More detailed information and best practices for all these steps are provided on the Resources page of this portal. The process for publishing data on the Canadensys repository is explained in our 7 step guide to publication.

# Data Cleaning
Data Cleaning is an essential part of the information management chain. Error prevention should be considered a priority relative to error detection and cleaning, as it is cheaper and more efficient to prevent errors than to try and find them and correct them later. No matter how efficient the process of data entry, errors will still occur and therefore data validation and correction cannot be ignored. Error detection, validation and cleaning have key roles to play, especially with legacy data (e.g., museum and herbarium data collected over the last 300 years), and thus both error prevention and data cleaning should be incorporated in an organisation’s data management policy.

One important product of data cleaning is the identification of the basic causes of the errors detected and using that information to improve the data entry process to prevent those errors from reoccurring.

# Standardization
Darwin Core – or DwC for short – is a group of standards designed for sharing biodiversity data. Developed by Biodiversity Information Standards (TDWG), it allows data owners to publish biodiversity information in a language (Darwin Core) and format (e.g. Darwin Core archives) that can be understood and used by everyone.

The Darwin Core includes a glossary of terms intended to facilitate the sharing of information about biological diversity by providing reference definitions, examples, and commentaries (see  Darwin Core website). The Darwin Core is primarily based on taxa, their occurrence in nature as documented by observations, specimens, and samples, and related information. The Simple Darwin Core is a specification for one particular way to use the terms – to share data about taxa and their occurrences in a simply structured way. Other Darwin Core extensions are possible to share data about xxxxx, xxxxx, xxxx, for example.

# Georeferencing
Georeferencing is the process of interpreting textual descriptions of places into spatial descriptions (i.e. geographic coordinates). E.g. “Bear Island, Lake Temagami, Nipissing District, Ontario, Canada” → decimal latitude: 46.9831216, decimal longitude: -80.0681018, uncertainty: 1410m (show on map). Georeferencing biological specimens – which often only have textual descriptions of their locality – allows the information to be displayed on a map and used in spatial analyses.

One of the goals of Canadensys is to georeference a large part of the published specimen information as accurately as possible, and to provide uncertainties for coordinates, which gives key information to determine the data’s fitness for use and thus the data quality.We encourage collaborative georeferencing which greatly reduces the duplication of efforts and can generate more accurate results, since specimens can be grouped per province/locality in the overall network (instead of per collection), and thus be georeferenced by the people with the most knowledge of these provinces/localities.

Although extremely useful, georeferencing is time-consuming and should be tackled as a community, with the right tools (add link) and guidelines (add link to documentation section). 

# Imaging
Photographing specimen labels is often used as a first step towards text digitization, which is still necessary as text on an image cannot be searched or analyzed. Text can be extracted automatically from the image with Optical Character Recognition (OCR), but this will always require human proofreading and structuring of the information, and it can be more time-consuming than keystroking. The main use of a label image is that it serves as a verbatim backup: publishing it in combination with the text information allows users to verify the information and report errors without having access to the physical specimen. (revoir texte)

Photographing specimens results in one or more images of the whole specimen. This process is generally more complex than imaging labels, as the image could be useful for scientific research. Method (camera vs scanner), resolution, colour, light-conditions, format and storage are all factors to be considered. As a result, this type of imaging can become very time-consuming and unless automated, it should only be considered for the most scientifically valuable specimens, such as types (pas mal négatif).
