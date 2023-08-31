---
layout: compose
composition:
  - type: heroImage
  - type: pageMarkdown
lang-ref: tools-API
lang: fr
title: API des Outils
background: https://inaturalist-open-data.s3.amazonaws.com/photos/187091455/original.jpeg
imageLicense: |
  <em>Platycryptus undatus</em> (De Geer, 1778) observé au Canada par Alex via [iNaturalist](https://www.gbif.org/occurrence/3760275367)
#description:
height: 70vh
#toc: true
---

# Introduction

L'API des Outils accepte les requêtes de types GET et POST. Les méthodes sont exprimées comme des URI de ressource et acceptent un paramètre **data** et leurs résultats sont en XML ou JSON. Le paramètre data peut avoir une ou plusieurs valeurs, toutes les valeurs doivent être séparées par un saut de ligne \\\n. Un identifiant optionnel peut précéder chaque valeur. Ce dernier doit être séparé de la valeur par un tab ou une barre verticale \\|. Pour de meilleurs performances, utilisez le paramètre optionnel **idprovided** = TRUE si vos données incluent un identifiant ou **idprovided** = FALSE s'ils n'en n'incluent pas. Les requêtes GET ayant un URI pointant vers une ressource JSON peuvent avoir un paramètre additionnel **callback** pour obtenir une réponse [JSONP](http://en.wikipedia.org/wiki/JSONP).

# Conversion de coordonnées

```md
http://data.canadensys.net/tools/coordinates.json
or
http://data.canadensys.net/tools/coordinates.xml
```  

Les résultats sont exprimés en [GeoJSON](http://www.geojson.org/) et [GML](http://en.wikipedia.org/wiki/Geography_Markup_Language) respectivement.

Par exemple : ht<span>tp://data.canadensys.net/tools/coordinates.json?**data**=35|45° 32' 25"N,129° 40' 31"W&**idprovided**=TRUE&**callback**=MyCallback 
Génère la réponse suivante :   

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

Par exemple : ht<span>tp://data.canadensys.net/tools/coordinates.xml?**data**=35|45° 32' 25"N,129° 40' 31"W  
Génère la réponse suivante :  

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

# Conversion de dates

```md
http://data.canadensys.net/tools/dates.json
OR
http://data.canadensys.net/tools/dates.xml
``` 

Par exemple : ht<span>tp://data.canadensys.net/tools/dates.json?**data**=Jun 13, 2008&**callback**=MyCallback 
Génère la réponse suivante : 

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