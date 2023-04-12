---
layout: compose
sideNavigation: sidenav.publish
composition:
  - type: heroImage
  - type: pageMarkdown
lang-ref: introduction
lang: en
title: How to publish data
background: https://inaturalist-open-data.s3.amazonaws.com/photos/250327897/original.jpeg
imageLicense: |
  <em>Odocoileus hemionus</em> (Rafinesque, 1817). Photo by John Krampl via [https://www.gbif.org/occurrence/4011988341]
description: Introduction to biodiversity data publication 
height: 70vh
toc: true
parallax: true
---
Data publication is the process of making biodiversity information available online, and is the core mission of Canadensys.

To publish data on Canadensys and GBIF, several crucial steps are recommended. [Data cleaning], [standardization] and [georeferencing] are needed to make data compatible with international data bases. Although not mandatory, [imaging] of labels or specimens is also often part of the data publication process. More detailed information and best practices for all these steps are provided on the Resources page of this portal. The process for publishing data on the Canadensys repository is explained in our [7-step guide] to publication.

# Data Cleaning
Data Cleaning is an essential part of the information management chain. Error prevention should be considered a priority relative to error detection and cleaning, as it is cheaper and more efficient to prevent errors than to try and find them and correct them later. No matter how efficient the process of data entry, errors will still occur and therefore data validation and correction cannot be ignored. Error detection, validation and cleaning have key roles to play, especially with legacy data (e.g., museum and herbarium data collected over the last 300 years), and thus both error prevention and data cleaning should be incorporated in an organisation’s data management policy.

Further [information], [documentation] and [tools] for data cleaning are available on the Resources page.

# Standardization
Darwin Core – or DwC for short – is a group of standards designed for sharing biodiversity data. Developed by the [Biodiversity Information Standards (TDWG)](http://www.tdwg.org/), these standards allow data owners to publish biodiversity information in a language (**Darwin Core**) and format (e.g. **Darwin Core archives**) that can be understood and used by everyone.

The Darwin Core includes a [glossary of terms](https://dwc.tdwg.org/terms/) intended to facilitate the sharing of information about biological diversity by providing reference definitions, examples, and commentaries (see [Darwin Core website](https://dwc.tdwg.org/)). The Darwin Core is primarily based on taxa, their occurrence in nature as documented by observations, specimens, and samples, and related information. The Simple Darwin Core is a specification for one particular way to use the terms – to share data about taxa and their occurrences in a simply structured way. Other Darwin Core extensions are possible to share data about xxxxx, xxxxx, xxxx, for example.

# Georeferencing
Georeferencing is the process of interpreting textual descriptions of places into spatial descriptions (i.e. geographic coordinates). E.g. “Bear Island, Lake Temagami, Nipissing District, Ontario, Canada” → decimal latitude: 46.9831216, decimal longitude: -80.0681018, uncertainty: 1410m ([show on map]). Georeferencing biological specimens – which often only have textual descriptions of their locality – allows the information to be displayed on a map and used in spatial analyses.

Georeferencing is time-consuming and should be tackled with the right tools (add link) and guidelines (add link to documentation section). We encourage collaborative georeferencing, which greatly reduces the duplication of efforts and can generate more accurate results, since specimens can be grouped per province/locality in the overall network (instead of per collection), and thus be georeferenced by the people with the most knowledge of these provinces/localities.


# Imaging
Photographing specimen labels is often used as a first step towards text digitization, which is still necessary as text on an image cannot be searched or analyzed. Text can be extracted automatically from the image with Optical Character Recognition (OCR), but this will always require human proofreading and structuring of the information. Label images also importantly serve as a verbatim backup, allowing users to verify the information and report errors without having access to the physical specimen.

Photographing specimens results in one or more images of the whole specimen. This process is generally more complex and time consuming than imaging labels, but the resulting imaging can be important for scientific research. Method (camera vs scanner), resolution, colour, light-conditions, format and storage are all factors to be considered. 
