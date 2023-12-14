---
layout: compose
sideNavigation: sidenav.publish
composition:
  - type: heroImage
  - type: pageMarkdown
lang-ref: 7-step-guide
lang: en
title: 7-step-guide to data publication
background: https://inaturalist-open-data.s3.amazonaws.com/photos/212581690/original.jpg
imageLicense: |
  <em>Charadrius melodus</em> Ord, 1824 observed in Canada by Steven McGrath via [iNaturalist](https://www.gbif.org/occurrence/3874089341)
#description:
height: 70vh
toc: true
parallax: true
---

# Introduction

This guide explains how to publish your biodiversity data to [GBIF](http://www.gbif.org/) and the world using the [Canadensys repository](http://data.canadensys.net/ipt). It is not the only method you can use to publish your data, but we think it is presently the most convenient one for Canadian collections and organizations.
Our repository is powered by the [GBIF Integrated Publishing Toolkit (IPT)](https://www.gbif.org/en/ipt) and maintained by us, which allows you to upload, standardize, publish and register your data in **7 steps**, without the hassle of installing and maintaining a program. The data are published in your organization’s name and it is free.

![](/assets/images/data-publication-guide-schema.png)


For information about the different classes of datasets, see the following GBIF guides:

* [Data quality requirements to publishing occurrence data](https://www.gbif.org/data-quality-requirements-occurrences)
* [Data quality requirements to publishing checklists](https://www.gbif.org/data-quality-requirements-checklists)
* [Data quality requirements to publishing metadata](https://www.gbif.org/dataset-classes)
* [Data quality requirements to publishing sampling-event data](https://www.gbif.org/data-quality-requirements-sampling-events)

# Conditions

We care about data and we just want to make sure you do too. In order to publish your data using the [Canadensys repository](https://data.canadensys.net/ipt/) you should meet the following criteria:

* You are associated with a **Canadian** collection or organization.
* You are publishing a specimen or observation dataset, a taxonomic checklist, a sampling-event dataset or simply metadata (in other words, one of the **4 types of datasets** supported by the IPT).
* You hold the **rights** to publish the data.
* You are willing to **maintain** the dataset and improve its quality where possible.
* You are willing to provide sufficient **metadata**, so users can learn what the dataset is about.
* You are publishing the data under an **open license**, so others can really use them. We strongly recommend publishing under [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

# 1. Create your resource on the IPT

The [Canadensys repository](https://data.canadensys.net/ipt/) is powered by the [GBIF Integrated Publishing Toolkit (IPT)](https://www.gbif.org/ipt), an open source web application developed by [GBIF](https://www.gbif.org/) and customized by Canadensys to be fully integrated into our website. We use it to publish and register all our datasets. To be able to create and manage your own dataset (called a “resource”), you will need a **user account**. Just [contact](mailto:canadensys.network@gmail.com) us to create one for you.

Once you have your account, login at the top of [this page](https://data.canadensys.net/ipt/). Click on the tab *Manage resources* to get access to your dashboard. It will display all the datasets you are managing and will be empty at first. You can **create a new resource** at the bottom of the page. Follow the [IPT manual](https://ipt.gbif.org/manual/) for more detailed instructions.

Warning: please use the following lowercase format for the **shortname** of your resource: *yourcollectioncode-datasettype* (e.g. *acad-specimens* or *wildlife-sightings-observations*). This name is used to uniquely identify and access your resource and cannot be modified subsequently! For testing purposes, please use *yourcollectioncode-test* (e.g. *ubc-test*).

Once you have created your resource, you will see an empty [resource overview page](https://ipt.gbif.org/manual/en/ipt/latest/manage-resources#resource-overview).

![](/assets/images/data-publication-guide-empty-resource.png)

# 2. Export

The easiest way to get your data into the IPT is to first export them from your database as a [**delimited text file**](https://en.wikipedia.org/wiki/Delimiter-separated_values) (e.g. .txt, .tab, .csv). Most databases offer the option to do so. Use the **[UTF-8](https://en.wikipedia.org/wiki/UTF-8) character encoding** for your export (and not [ASCII](https://en.wikipedia.org/wiki/ASCII), [Macintosh](https://en.wikipedia.org/wiki/Mac_OS_Roman) or [Windows ANSI](https://en.wikipedia.org/wiki/Windows-1252)) to avoid misinterpretations of accented characters (e.g. é, à, ü, î). If you have the choice, include a **header line** in your export (a first line with the field names), as it will be helpful later.

# 3. Upload

Uploading your source file to the IPT is easy: go to your resource overview page > *Source Data* and click *Choose File*. You might want to compress/zip your source file first to improve the upload speed of large files. The IPT will unzip them automatically once received. Follow the [IPT manual](https://ipt.gbif.org/manual/) for more detailed instructions (including the option to use multiple source files or to upload via a direct database connection).

Once your source file has been uploaded correctly, a source file detail page will be shown (see an [example screenshot](https://ipt.gbif.org/manual/en/ipt/latest/manage-resources#source-data) in the IPT manual), displaying how the IPT has interpreted your file (number of columns, rows, header rows, character encoding, delimiters, etc.). Click the *preview* button to verify everything is correct, then click *save*.

# 4. Darwin Core Mapping

Biodiversity data are published in the [Darwin Core](https://dwc.tdwg.org/) standard. It includes a [list of defined terms](https://dwc.tdwg.org/terms/) and allows your data to be understood and used by anyone. It also allows an aggregator like GBIF to combine your data with other data, like they do on their [portal](http://www.gbif.org/).

Darwin Core mapping is the process of linking the fields in your source file with the appropriate Darwin Core terms. It is the **most challenging step** in publishing your data for two reasons: 1) the [list of Darwin Core terms](https://dwc.tdwg.org/terms/) can be overwhelming, so it might be difficult to select the ones that are appropriate for your dataset, and 2) the IPT currently only allows one-to-one mapping of fields, so the ease of mapping will depend on your database structure and on the feasibility of exporting as close to Darwin Core as possible.

This is why we are here to help! [Contact us](mailto:canadensys.network@gmail.com) to arrange a phone or online call to guide you through the steps, review your mapping, suggest terms and help you repeat steps 2-4 until the mapping is just right.

You can find more information regarding Darwin Core mapping in the [IPT manual](https://ipt.gbif.org/manual/) (including core types, extensions, automapping, default values, value translation, etc.) and in the introduction to Darwin Core [on our website](/resources/documents/#data-standardization-and-darwin-core).

# 5. Add metadata

If data are LEGO bricks, then [metadata](/resources/documents/#metadata) are the shiny box and instructions. They enable users to discover your dataset and assess its relevance for their particular needs, so it pays off investing some time providing them.

Go to your resource overview page > *Metadata* and click *Edit* to open the metadata editor. [Contact us](mailto:canadensys.network@gmail.com) to register your institution (if not done so already) to GBIF, in order to be able to link your resource with your institution in the metadata.

Any information you provide here will be visible on the resource homepage and bundled together with your data when you publish. Metadata are expressed in the [GBIF EML Profile](https://github.com/gbif/eml-profile) standard and can also be downloaded as a [Rich Text Format (RTF) file](https://en.wikipedia.org/wiki/Rich_Text_Format). The latter can serve as a **draft manuscript** describing the dataset (a “[Data Paper](https://www.gbif.org/data-papers)“), which can be submitted for peer-review to a [Pensoft](https://pensoft.net/) open-access journal such as the [Biodiversity Data Journal](https://bdj.pensoft.net/), [Phytokeys](https://phytokeys.pensoft.net/), [Zookeys](https://zookeys.pensoft.net/), [Biorisk](https://biorisk.pensoft.net/), [Neobiota](https://neobiota.pensoft.net/) or [Nature Conservation](https://natureconservation.pensoft.net/).

Follow the [IPT manual](https://ipt.gbif.org/manual/en/ipt/latest/manage-resources#basic-metadata) for detailed instructions about the metadata editor and use one of the currently published datasets as an example (e.g. [collection example](https://data.canadensys.net/ipt/resource.do?r=mt-specimens), [checklist example](https://data.canadensys.net/ipt/resource.do?r=vascan)). See our website for more information regarding metadata.

# 6. Publish

At this stage, you are all set to publish! Go to your resource overview page > *Published Versions* and click *Publish*. The IPT will now generate your data as Darwin Core, combine it with the metadata and package it as a standardized zip-file called a “[**Darwin Core Archive**](https://dwc.tdwg.org/text/)“.

If you wish to assign a [DOI](https://en.wikipedia.org/wiki/Digital_object_identifier) to your dataset, you need to click on the ‘Reserve’ button, then change the visibility of your dataset to ‘Public’ before hitting the ‘Publish’ button. The DOI is registered directly with [DataCite](https://datacite.org/) and a link will be added in the metadata of your ressource. For more information about the DOI assignation steps, see the [IPT DOI Workflows](https://ipt.gbif.org/manual/en/ipt/latest/doi-workflow). See the [IPT manual](https://ipt.gbif.org/manual/) for more details about the general publication process.

Back on the resource overview page > *Published Versions*, you can see the details of your first published dataset, including the publication date and the version number. Since your dataset is published privately, the only thing left to do is to click *Visibility* > ***Public*** (see the [IPT manual](https://ipt.gbif.org/manual/en/ipt/latest/manage-resources#publication)) to make it available to everyone. Warning: please do not do this for your test dataset.

Congratulations, you just published your dataset to the world! It is now listed on the [repository homepage](https://data.canadensys.net/ipt/) and you can share and link to it via: https://data.canadensys.net/ipt/resource?r=dataset-shortname. This would be a good time to notify any regional or thematic network you are involved in, such as [VertNet](http://www.vertnet.org/), the [Consortium of Northeastern Herbaria](https://neherbaria.org/portal/) or the [Entomological Society of Canada](https://esc-sec.ca/).

Your published dataset is a **static snapshot** of your data and will not change until you upload an updated source file and click *publish* again. This procedure has the advantage that your dataset is always available, does not require a live internet connection to your database and can be easily shared (e.g. you can email the Darwin Core Archive to a colleague). It also allows you to control the publication process more precisely: version 1, version 2, etc. and users are informed of how recent the data are and the differences between versions (addition of data, correction of errors, etc).

# 7. Register with GBIF

Even though your dataset is now available to everyone, it might be difficult for users to **discover** it. This is why we recommend registering your dataset with the [Global Biodiversity Information Facility (GBIF)](http://www.gbif.org/). It allows your data to become available to an international audience via the [GBIF portal](https://www.gbif.org/occurrence/search) and it ensures **full attribution** is given to your institution. By registering, you agree with the [GBIF Data Publisher Agreement](https://www.gbif.org/terms/data-publisher).

On the resource overview page, click on *Visibility* > ***Register*** (see the [IPT manual](https://ipt.gbif.org/manual/en/ipt/latest/manage-resources#registration)) to register your dataset with the GBIF registry. It will allow GBIF to index your resource on their portal, where it can be easily accessed by everyone.

# Citation

As all documents on this website, this guide is published under [CC-BY](https://creativecommons.org/licenses/by/4.0/deed.en). The preferred citation is:

Desmet, P. & C. Sinou. 2012. 7-step guide to data publication. Canadensys. <https://canadensys.net/publish/7-step-guide/>
