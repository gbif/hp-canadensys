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

The Database of Vascular Plants of Canada (VASCAN) is a comprehensive list of all vascular plants reported in Canada, Greenland (Denmark) and Saint Pierre and Miquelon (France). VASCAN is a checklist database. Its core record is a taxon, e.g. a species like Acer saccharum Marshall. It also contains information related to that taxon, such as its distribution, taxonomy, synonyms and vernacular names, and a source for almost all of these elements. VASCAN is literature-based, though recent additions are sometimes specimen-based.  

As opposed to many other checklist websites, we designed VASCAN to be as open as possible. Instead of locking the data in an unusable format, users can download the [whole database](http://data.canadensys.net/ipt/resource.do?r=vascan) or their own subset through the [checklist builder](/vascan/checklist-builder/) as Darwin Core Archives or flat text files. Users can also report and view issues with the data and interface in [our open issue tracker](https://github.com/Canadensys/vascan-data/issues). 

VASCAN is a [Java](https://www.java.com/) application running in [Tomcat](http://tomcat.apache.org/) using a [MySQL](https://www.mysql.com/) database. Although it was designed for plants, we made an effort to generalize the structure of the database and application, so it could also be used for other taxonomic groups, such as animals and fungi. 

# Name search

Enter a scentific name or a vernacular name and the database will give you suggestions of corresponding names starting with the name you have entered. 
A search on "arte" will return "Artemisia", but not "Two-parted sedge". 

For each scientific name, several information are provided: 
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
* Habit (tree, shrub, herb or vine)

![](/assets/images/Vascan-search.png)

# Checklist builder

Interested to know which trees are native in Newfoundland, which genera are introduced in all of the prairies or which *Salix* species occur in British Columbia, but not in the rest of Canada? You can find it out with the checklist builder, which allows you to combine a set of selection criteria (taxonomic group, habit, distribution, status or a combination of these) and display criteria (ranks to include, sort preference) to create your own customized checklist.

Once the result answer your needs you can download the checklist as a simple tab delimited text file or as a standardized Darwin Core archive. The latter one also includes the vernacular names and synonyms.

The data are there to be used, which is why we licensed them under the Creative Commons Attribution-ShareAlike 3.0 Unported License, allowing you to build upon our work. You can also download the full database as a Darwin Core archive.

![](/assets/images/Checklist-builder.png)

# API

## Search

The VASCAN Search API accepts GET and POST requests. The path contains an explicit version and the search resource accepts a parameter **q**. The value for **q** can be a scientific name, a vernacular name or a VASCAN taxon identifier (e.g. 861). It may be a single value for GET requests or multiple values (maximum 200) for POST requests, each separated by line breaks, \n. Scientific or vernacular names may optionally be preceded by your local identifier and a pipe, |. GET requests for JSON-based URIs may have an additional callback parameter for JSONP responses.  

``
http://data.canadensys.net/vascan/api/0.1/search.json  
OR  
http://data.canadensys.net/vascan/api/0.1/search.xml  
``

### Parameter

Scientific name, vernacular name, or VASCAN taxon identifier.  
Use line breaks, \n between values for POST requests. Precede values with your local identifier and a pipe, | (optional).  

**e.g. ?q=Crataegus dodgei
e.g. ?q=1004232|lowbush blueberry
e.g. ?q=5031**


### Response

``
{
    apiVersion: "0.1",
    lastUpdatedDate: "YYYY-MM-DD",
    results: [
        {
            searchedTerm: "Crataegus dodgei",
            numMatches: 1,
            matches: [
                {
                    taxonID: 8673,
                    scientificName: "Crataegus dodgei Ashe",
                    scientificNameAuthorship: "Ashe",
                    canonicalName: "Crataegus dodgei",
                    taxonRank: "species",
                    taxonomicAssertions: [
                        {
                            acceptedNameUsage: "Crataegus dodgei Ashe",
                            acceptedNameUsageID: 8673,
                            nameAccordingTo: "FNA Editorial Committee. in prep. Flora of North America north of Mexico...etc",
                            nameAccordingToID: "",
                            taxonomicStatus: "accepted",
                            parentNameUsageID: 2408,
                            higherClassification: "Equisetopsida;Magnoliidae;Rosanae;Rosales;Rosaceae;Spiraeoideae;Pyreae;Crataegus;Crataegus sect. Coccineae;Crataegus ser. Rotundifoliae"
                        }
                    ],
                    vernacularNames: [
                        {
                            vernacularName: "aubépine de Dodge",
                            language: "fr",
                            source: "McMurray, S. & A. Lehela. 1999. Ontario Plant List - Digital Version 1.0...etc",
                            preferredName: true
                        },
                        {
                            vernacularName: "Dodge's hawthorn",
                            language: "en",
                            source: "",
                            preferredName: true
                        },
                        {
                            vernacularName: "aubépine jaunâtre",
                            language: "fr",
                            source: "Cuerrier, A. Proposition de nom français. (pers. comm.)",
                            preferredName: false
                        },
                        {
                            vernacularName: "yellowish hawthorn",
                            language: "en",
                            source: "Anions, M., Director of Science, NatureServe Canada (pers. comm.)",
                            preferredName: false
                        },
                        {
                            vernacularName: "yellowish Dodge's hawthorn",
                            language: "en",
                            source: "FNA Editorial Committee. in prep. Flora of North America north of Mexico. Volume 17...etc",
                            preferredName: false
                        }
                    ],
                    distribution: [
                        {
                            locationID: "ISO 3166-2:CA-ON",
                            locality: "ON",
                            establishmentMeans: "native",
                            occurrenceStatus: "native"
                        },
                        {
                            locationID: "ISO 3166-2:CA-QC",
                            locality: "QC",
                            establishmentMeans: "native",
                            occurrenceStatus: "native"
                        }
                    ]
                }
            ]
        }
    ]
}
``

## OpenRefine

Use [OpenRefine](https://openrefine.org/) to reconcile your scientific or vernacular names against VASCAN.  

``
http://data.canadensys.net/vascan/refine/0.1/reconcile
``

## R Project

Use [Taxize](https://cran.r-project.org/web/packages/taxize/index.html) to reconcile your scientific or vernacular names against VASCAN.  

``
https://cran.r-project.org/web/packages/taxize/index.html
``

# People