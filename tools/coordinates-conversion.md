---
layout: compose
composition:
  - type: heroImage
  - type: pageMarkdown
  - type: blank
    inlineData: 
      klass: iframe-box
      markdownContent: |
        <iframe id="coordinatesconversion" seamless frameborder="150" src="https://data.canadensys.net/tools/coordinates" height = '790' width="1370" style="height: calc(100vh - 68px);" scrolling='yes' ></iframe>  
lang-ref: coordinates-conversion
lang: en
title: Coordinates conversion
background: https://inaturalist-open-data.s3.amazonaws.com/photos/264182624/original.jpg
imageLicense: |
  <em>Storeria occipitomaculata subsp. occipitomaculata</em> observed in Canada by Heather Haughn via [iNaturalist](https://www.gbif.org/occurrence/4076076317)
#description:
height: 70vh
#toc: true
---

Use this tool to convert geographic coordinates from DDMMSS to decimal degrees. Type coordinate pairs on separate lines or paste latitude and longitude columns from a spreadsheet. Each row may be optionally preceded by an identifier followed by a pipe or tab. 

**Example input**  

45° 32' 25" N, 129° 40' 31" W 
 
1 | 45.5° N, 129.6° W 
2 | 40°26′47″N,74° 0' 21.5022"W 

<script>
  var elem = document.getElementById("coordinateconversion");
  function openWidgetInFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
</script>
