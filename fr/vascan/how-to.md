---
layout: compose
sideNavigation: sidenav.vascan
composition:
  - type: heroImage
  - type: pageMarkdown
lang-ref: howtoVascan
lang: fr
title: Comment utiliser VASCAN
background: https://inaturalist-open-data.s3.amazonaws.com/photos/229323742/original.jpeg
imageLicense: |
  <em>Botrypus virginianus</em> (L.) Michx. observé au Canada par Braden J. Judson via [iNaturalist](https://www.gbif.org/occurrence/3903585417)
#description:
height: 70vh
toc: true
---

# Introduction

La Base de données des plantes vasculaires du Canada (VASCAN) est une liste complète de toutes les plantes vasculaires signalées au Canada, au Groenland (Danemark) et à Saint-Pierre-et-Miquelon (France). VASCAN est une base de données de liste d'espèces. Son enregistrement principal est un taxon, par ex. une espèce comme *Acer saccharum* Marshall. Elle contient également des informations relatives à ce taxon, telles que sa répartition, sa taxonomie, ses synonymes et noms vernaculaires, ainsi qu'une source bibliographique pour presque tous ces éléments. VASCAN est développé à partir de la littérature, bien que des ajouts récents soient parfois issus d’informations provenant directement des spécimens. 

Nous avons conçu VASCAN pour être aussi ouvert que possible. Ainsi, les utilisateurs peuvent télécharger la [base de données entière](http://data.canadensys.net/ipt/resource.do?r=vascan) ou leur propre sous-ensemble via le [générateur de liste](/vascan/checklist-builder/) sous forme d'archives Darwin Core ou de fichiers texte. Les utilisateurs peuvent également signaler et afficher les problèmes liés aux données et à l'interface dans [notre outil de suivi des problèmes](https://github.com/Canadensys/vascan-data/issues).

VASCAN est une application [Java](https://www.java.com/) exécutée dans [Tomcat](http://tomcat.apache.org/) utilisant une base de données [MySQL](https://www.mysql.com/). Bien qu'elle ait été conçue pour les plantes, nous nous sommes efforcés de généraliser la structure de la base de données et de l'application, afin qu'elle puisse également être utilisée pour d'autres groupes taxonomiques, tels que les animaux et les champignons.

# Recherche de noms

Entrez un nom scientifique ou un nom vernaculaire et la base de données vous proposera des suggestions de noms correspondants commençant par le nom que vous avez saisi.
Une recherche sur "arte" renverra "Artemisia", mais pas "two-parted sedge".

Pour chaque nom scientifique, plusieurs informations sont fournies :
* Statut de l'espèce (accepté ou synonyme)
* Noms vernaculaires, en français et en anglais, avec le statut du nom vernaculaire (accepté ou synonyme)
* Synonymes
* Distribution au niveau provincial, avec le statut de distribution :
  * **Native** : Taxon présent uniquement à la suite de processus naturels, sans intervention humaine.
  * **Introduite** : Taxon établi (naturalisé) dans une région en dehors de son aire de répartition d'origine, de manière délibérée ou accidentelle, à la suite de l'activité humaine. Les taxons sont considérés comme introduits au Canada lorsqu'ils se sont établis après la colonisation européenne.
  * **Éphémère** : Taxon non établi de manière permanente dans la région, mais récurrent dans la nature sur une base quasi annuelle, généralement issu de la culture (par exemple blé, tomate, etc.).
  * **Exclu** : Taxon signalé dans la région, mais non établi ou déterminé par erreur.
  * **Disparu** : Taxon originaire de la région, mais actuellement considéré comme éradiqué. Ce statut n'est attribué qu'après une recherche active et est généralement déterminé par une agence de conservation.
  * **Douteux** : Taxon signalé dans la région par une source, mais information non encore validée.
  * **Absent** : Taxon non signalé dans la région.
* Classification
* Port (arbre, arbuste, herbacée ou vigne)

![](/assets/images/Vascan-search.png)

# Générateur de listes

Vous souhaitez savoir quels arbres sont indigènes à Terre-Neuve, quels genres sont introduits dans toutes les prairies ou quelles espèces de *Salix* sont présentes en Colombie-Britannique, mais pas dans le reste du Canada ? Vous pouvez le découvrir grâce au générateur de listes, qui permet de combiner un ensemble de critères de sélection (groupe taxonomique, port, distribution, statut ou une combinaison de ceux-ci) et de critères d'affichage (rangs à inclure, préférence de tri) pour créer votre liste d'espèce personnalisée.

Une fois que le résultat répond à vos besoins, vous pouvez télécharger la liste sous forme de simple fichier texte délimité par des tabulations ou sous forme d'archive Darwin Core standardisée. Ce dernier comprend également les noms vernaculaires et les synonymes.

Les données sont là pour être utilisées, c'est pourquoi nous utilisons une licence [Creative Commons Attribution-ShareAlike 3.0 Unported (CC-BY-SA)](https://creativecommons.org/licenses/by-sa/3.0/deed.fr), vous permettant de vous appuyer sur notre travail. Vous pouvez également télécharger la base de données complète sous forme d'archive Darwin Core.

![](/assets/images/Checklist-builder.png)

# API

## Recherche

L'API de recherche VASCAN accepte les requêtes GET et POST. Le chemin contient une version explicite et la ressource de recherche accepte un paramètre **q**. La valeur de **q** peut être un nom scientifique, un nom vernaculaire ou un identifiant de taxon VASCAN (ex. 861). Il peut s'agir d'une valeur unique pour les requêtes GET ou de plusieurs valeurs (maximum 200) pour les requêtes POST, chacune séparée par des sauts de ligne, \\n. Les noms scientifiques ou noms vernaculaires peuvent éventuellement être précédés de votre identifiant local et d'une barre verticale, \|. Les requêtes GET pour les URI basés sur JSON peuvent avoir un paramètre de rappel supplémentaire pour les réponses JSONP.

```
http://data.canadensys.net/vascan/api/0.1/search.json  
  OR  
http://data.canadensys.net/vascan/api/0.1/search.xml  
```

### Paramètre

Nom scientifique. nom vernaculaire ou identifiant de taxon VASCAN.

**e.g. ?q=Crataegus dodgei  
e.g. ?q=1004232|lowbush blueberry  
e.g. ?q=5031**


### Réponse

```
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
```

## OpenRefine

Utilisez [OpenRefine](https://openrefine.org/) afin de réconcilier vos noms scientifiques ou vernaculaires avec les données de VASCAN.  

```
http://data.canadensys.net/vascan/refine/0.1/reconcile
```

## Projet R

Utilisez [Taxize](https://cran.r-project.org/web/packages/taxize/index.html) afin de réconcilier vos noms scientifiques ou vernaculaires avec les données de VASCAN.  

```
https://cran.r-project.org/web/packages/taxize/index.html
```

# Personnes

**[Luc Brouillet](https://irbv.umontreal.ca/le-personnel/luc-brouillet/)**, [Université de Montréal Biodiversity Centre](https://irbv.umontreal.ca/institute/infrastructure/biodiversity-centre/?lang=en), [Herbier Marie-Victorin (MT)](https://irbv.umontreal.ca/research/collections/marie-victorin-herbarium-mt/?lang=en) - Coordination et design, compilation des données taxonomiques et de distribution  
**F. Coursol**, Jardin Botanique de Montréal - Compilation des données taxonomiques et de distribution   
**Susan Meades**, [Northern Ontario Plant Database](http://www.northernontarioflora.ca/) - Compilation des données taxonomiques  
**Marc Favreau**, Bureau de la Traduction (retraité) - Compilation des noms vernaculaires français  
**Marilyn Anions**, Botaniste - Compilation des noms vernaculaires anglais
