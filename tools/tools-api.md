---
layout: compose
composition:
  - type: heroImage
  - type: pageMarkdown
lang-ref: tools-API
lang: en
title: Tools API
background: https://inaturalist-open-data.s3.amazonaws.com/photos/187091455/original.jpeg
imageLicense: |
  <em>Platycryptus undatus</em> (De Geer, 1778) observed in Canada by Alex via [iNaturalist](https://www.gbif.org/occurrence/3760275367)
#description:
height: 70vh
#toc: true
---

# Introduction

The Tools API accepts GET and POST requests. Methods are expressed as resource URIs, they accept a parameter **data**, and their outputs are either XML or JSON.  
The **data** parameter can have a single value for GET requests or multiple values for POST requests, each separated by line breaks, \\\n.  
An optional identifier may precede each value, followed by a tab, or a pipe, \\|.  
For increased performance, set the optional **idprovided** = TRUE if all your data have identifiers or **idprovided** = FALSE if none of your data have identifiers.  
GET requests for JSON-based URIs may have an additional **callback** parameter for [JSONP](https://en.wikipedia.org/wiki/JSONP) responses.

# Coordinate conversion

```md
http://data.canadensys.net/tools/coordinates.json
or
http://data.canadensys.net/tools/coordinates.xml
```  

Outputs are expressed as [GeoJSON](https://geojson.org/) or [GML](https://en.wikipedia.org/wiki/Geography_Markup_Language), respectively. 

For example: "ht<span>tp://data.canadensys.net/tools/coordinates.json?**data**=35|45° 32' 25"N,129° 40' 31"W&**idprovided**=TRUE&**callback**=MyCallback" 
Produces this answer:

```md
MyCallback({
  type: "FeatureCollection",
  features: [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-129.6752778,45.5402778]
    },
    properties: {
      originalValue: "45° 32' 25"N,129° 40' 31"W"
    },
    id: "35"
  }
  ]
});
```  

For example: "ht<span>tp://data.canadensys.net/tools/coordinates.xml?**data**=35|45° 32' 25"N,129° 40' 31"W"  

Produces this answer:

```
<?xml version="1.0" encoding="UTF-8"?>
<gml:FeatureCollection
     xmlns:xs="http://www.w3.org/2001/XMLSchema"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     xmlns:gml="http://www.opengis.net/gml"    
     xmlns:sch="http://www.ascc.net/xml/schematron">
  <gml:featureMembers>
    <xs:result gml:id="35">
      <xs:coordinate>
        <gml:Point srsDimension="2">
          <gml:pos>45.540277777777774 -129.67527777777778</gml:pos>
        </gml:Point>
      </xs:coordinate>
      <xs:originalValue>45° 32' 25"N,129° 40' 31"W</xs:originalValue>
    </xs:result>
  </gml:featureMembers>
</gml:FeatureCollection>
```

# Date parsing

```md
http://data.canadensys.net/tools/dates.json
OR
http://data.canadensys.net/tools/dates.xml
``` 

e.g. ht<span>tp://data.canadensys.net/tools/dates.json?**data**=Jun 13, 2008&**callback**=MyCallback 

Produces 

```md
MyCallback({
  results: [
  {
    originalValue: "Jun 13, 2008",
    year: 2008,
    month: 6,
    day: 13,
    iso8601: "2008-06-13",
    partial: false
  }
  ]
})
```
