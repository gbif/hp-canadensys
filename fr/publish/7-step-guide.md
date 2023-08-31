---
layout: compose
sideNavigation: fr.sidenav.publish
composition:
  - type: heroImage
  - type: pageMarkdown
lang-ref: 7-step-guide
lang: fr
title: Guide de publication en 7 étapes
background: https://inaturalist-open-data.s3.amazonaws.com/photos/212581690/original.jpg
imageLicense: |
  <em>Charadrius melodus</em> Ord, 1824 observed in Canada by Steven McGrath via [iNaturalist](https://www.gbif.org/occurrence/3874089341)
#description:
height: 70vh
toc: true
parallax: true
---

# Introduction

Ce guide explique comment publier vos données de biodiversité auprès de [GBIF](http://www.gbif.org/), et du monde entier, via le [dépôt Canadensys](http://data.canadensys.net/ipt). Ce n’est pas la seule méthode que vous pouvez utiliser pour publier vos données, mais nous pensons que c’est, à l’heure actuelle, la plus pratique pour les collections et organisations Canadiennes.

Notre dépôt est propulsé par l’[Outil de Publication Intégré du GBIF (IPT)](https://www.gbif.org/en/ipt) et maintenu par nos soins, ce qui vous permet de télécharger, standardiser, publier et enregistrer vos données en **7 étapes**, sans le soucis d’installer et maintenir votre propre outil de publication. Les données sont publiées au nom de votre organisation et tout ceci est parfaitement gratuit.

![](/assets/images/data-publication-guide-schema-fr.png)

Pour de l’information sur les différentes classes de données, suivez les guides du GBIF suivants :

* [Exigences de qualité pour la publication de données d’occurence](https://www.gbif.org/data-quality-requirements-occurrences)
* [Exigences de qualité pour la publication de listes taxonomiques](https://www.gbif.org/data-quality-requirements-checklists)
* [Exigences de qualité pour la publication de métadonnées](https://www.gbif.org/dataset-classes)
* [Exigences de qualité pour la publication de données d’échantillonnage](https://www.gbif.org/data-quality-requirements-sampling-events)

# Conditions

Nous nous soucions des données et nous voulons juste nous assurer qu’il en va de même pour vous. Afin de publier vos données à l’aide du dépôt Canadensys vous devez répondre aux critères suivants :

* Vous êtes associés à une collection ou une organisation **Canadienne**.
* Vous publiez des jeux de données de spécimens ou d’observations, une checklist taxonomique, un jeu de données d’échantillonnage ou simplement des métadonnées (en d’autres mots, l’un des **4 types de jeu de données** supportées par IPT).
* Vous détenez les **droits** pour publier ces données.
* Vous avez la volonté de **conserver et maintenir** ce jeu de données et d’améliorer sa qualité lorsque possible.
* Vous avez la volonté de fournir des **métadonnées** les plus complètes possibles, afin que les utilisateurs puissent aisément comprendre de quoi votre jeu de données traite.
* Vous publiez les données sur le **domaine public**, ainsi les usagers pourront réellement les utiliser. Nous vous recommandons vivement la publication sous [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

# 1. Création de votre ressource sur l'IPT

Le [dépôt Canadensys](https://data.canadensys.net/ipt/) utilise l’[Outil de Publication Intégré du GBIF (IPT)](https://www.gbif.org/ipt), une application web libre de droit développée par [GBIF](https://www.gbif.org/) et personalisée par Canadensys afin de s'intégrer parfaitement à notre site Internet. Nous l’utilisons pour publier et enregistrer tous nos jeux de données. Afin de pouvoir créer et gérer votre propre jeu de données (appelé « ressource »), vous aurez besoin d’un **compte utilisateur**. 
[Contactez-nous](mailto:canadensys.network@gmail.com) afin que nous puissions vous le créer.

Une fois votre compte créé, connectez-vous en haut de [cette page](https://data.canadensys.net/ipt/?request_locale=fr). Cliquez sur l'onglet *gérer les ressources* afin d’accéder à votre page de gestion. Cette page affiche toutes les ressources que vous gérez. Elle vous apparaîtra donc vide lors de la première utilisation. Vous pouvez **créer une nouvelle ressource** au bas de la page. Suivez le [manuel de l'IPT](https://ipt.gbif.org/manual/) pour de plus amples instructions.

Attention : veuillez utiliser le format suivant (en minuscule) pour le **nom court de votre ressource (shortname)** : *codedelacollection-typededonnées* (ex. *acad-specimens* ou *wildlife-sightings-observations*). Cela permet d’identifier de manière unique votre ressource et d’y accéder, et cela ne peut être modifié ultérieurement ! A des fins de test, veuillez utiliser *codedelacollection-test* (e.g. ubc-test).

Dès que votre ressource est créée, vous pourrez voir [une vue d’ensemble de votre ressource](https://ipt.gbif.org/manual/en/ipt/latest/manage-resources#resource-overview), qui est actuellement vide.

![](/assets/images/data-publication-guide-empty-resource-fr.png)

# 2. Exportation

La manière la plus simple pour ajouter vos données sur IPT est d’exporter celles-ci de votre base de données sous forme de [**fichier texte délimité**](https://fr.wikipedia.org/wiki/Delimiter-separated_values) (ex .txt, .tab, .csv). La plupart des bases de données offrent cette option. Utilisez le format d’encodage des caractères [**UTF-8**](https://fr.wikipedia.org/wiki/UTF-8) lors de votre exportation (et non pas [ASCII](https://fr.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange), [Macintosh](https://fr.wikipedia.org/wiki/MacRoman) ou [Windows ANSI](https://fr.wikipedia.org/wiki/American_National_Standards_Institute)), afin d’éviter la mauvaise interprétation des caractères accentués (ex. é, à, ü, î ). Si l’option vous est offerte, choisissez d’inclure la **ligne d’en-tête** dans votre fichier d’exportation (la première ligne avec les noms des champs), puisque cette information sera utile par la suite.

# 3. Téléchargement

Télécharger votre fichier source sur l'IPT est une étape facile : allez sur la vue d’ensemble de votre ressource > *Source de Données* puis cliquez sur *Choisissez un fichier*. Vous devriez songer à compresser/ziper votre fichier source afin d’améliorer la vitesse de téléchargement des larges fichiers. L'IPT décompressera automatiquement votre fichier. Suivre le [manuel de l'IPT](https://ipt.gbif.org/manual/) pour de plus amples informations (incluant le téléchargement de fichiers source multiples, ou directement via la connection à une base de données).

Une fois que votre fichier source a été correctement téléchargé, une page de détails apparaît (Voir l’[exemple de capture d’écran](https://ipt.gbif.org/manual/en/ipt/latest/manage-resources#source-data) dans le manuel IPT), affichant comment votre fichier a été interprété par l'IPT (nombres de colonnes, lignes, lignes d’en-tête, encodage des caractères, délimiteurs de texte, etc.). Cliquez sur le bouton *aperçu* pour vérifier l’exactitude des informations, puis cliquez sur *enregistrer*.

# 4. Conversion Darwin Core

Les données de biodiversité sont publiées sous le standard [Darwin Core](https://dwc.tdwg.org/). Cela inclut une [liste de termes](https://dwc.tdwg.org/terms/) et permet que vos données soient comprises et utilisées par tout le monde. Cela permet également à un agrégateur comme GBIF de combiner vos données avec d’autres données, tel qu’ils le font sur leur [portail de données](http://www.gbif.org/).

La conversion Darwin Core est l’étape qui vous permet de lier les champs de votre fichier source aux termes Darwin Core appropriés. C’est l’**étape la plus difficile** dans le processus de publication de vos données, et ce pour deux raisons : 1) la [liste des termes Darwin Core](https://dwc.tdwg.org/terms/) peut être effrayante, et il peut être compliqué de choisir les termes appropriés à votre jeu de données, et 2) à l’heure actuelle, l’IPT ne permettant que des conversions une-à-une des champs, la facilité de la conversion va dépendre de la structure de votre jeu de données, et de la possibilité de l’exporter dans le format le plus proche des standards Darwin Core.

C’est pour ces raisons que nous sommes là ! [Contactez-nous](mailto:canadensys.network@gmail.com) afin d’organiser un appel téléphonique ou une rencontre en ligne, pour que nous puissions vous guider à travers les étapes, vérifier votre conversion Darwin Core, suggérer l’utilisation de termes et vous aider à répéter les étapes 2 à 4 jusqu’à la meilleure conversion possible.

Vous trouverez plus d’informations à propos de la conversion Darwin Core dans le [manuel de l'IPT](https://ipt.gbif.org/manual/) (incluant les types de noyaux, les extensions, la conversion automatique, les valeurs par défaut, les traductions de valeurs, etc.) et dans l’[introduction au standard Darwin Core sur notre site web](/resources/documents/#data-standardization-and-darwin-core).

# 5. Ajout de métadonnées

Si l’on compare les données à des briques LEGO, alors les [métadonnées](/fr/resources/documents/#metadata) sont la belle boîte et le feuillet d’instructions. Elles permettent à l’usager de découvrir votre jeu de données et ainsi de déterminer si celui-ci est pertinent pour ses travaux. Il est donc important de prendre un peu de temps pour les compléter.

Allez sur la vue d’ensemble de votre ressource > *Metadonnées* et cliquez sur *Modifier* pour ouvrir l’éditeur de métadonnées. [Contactez-nous](mailto:canadensys.network@gmail.com) afin d’enregistrer votre institution (si ce n’est déjà fait) auprès du GBIF, afin de lier votre ressource à votre institution dans les métadonnées. Nous vous informerons lorsque votre jeu de données sera disponible sur le portail de données du GBIF.

Toutes les informations que vous fournirez ici seront directement visibles sur la page de votre ressource et associées à vos données lors de la publication. Les métadonnées sont exprimées en [EML](https://github.com/gbif/eml-profile), qui est un standard utilisé par GBIF, et peuvent également être téléchargées sous forme de [fichier RTF (Rich Text Format)](https://en.wikipedia.org/wiki/Rich_Text_Format). Ce dernier peut servir d’**ébauche de manuscript** décrivant votre jeu de données (un [« Article de Données« )](https://www.gbif.org/data-papers), qui peut être soumis à l’un des journaux libres d’accès et révisés par les pairs de [Pensoft](https://pensoft.net/), tels que le [Biodiversity Data Journal](https://bdj.pensoft.net/), [Phytokeys](https://phytokeys.pensoft.net/), [Zookeys](https://zookeys.pensoft.net/), [Biorisk](https://biorisk.pensoft.net/), [Neobiota](https://neobiota.pensoft.net/) or [Nature Conservation](https://natureconservation.pensoft.net/).

Suivez le [manuel de l'IPT](https://ipt.gbif.org/manual/en/ipt/latest/manage-resources#basic-metadata) pour des instructions détaillées à propos de l’éditeur de métadonnées, et utilisez l’un des jeux de données déjà publiés comme exemple ([collection](https://data.canadensys.net/ipt/resource.do?r=mt-specimens), [checklist](https://data.canadensys.net/ipt/resource.do?r=vascan)). De plus amples informations à propos des métadonnées sont disponibles sur notre site web.

# 6. Publication

Tout est maintenant prêt pour la publication ! Rendez-vous sur la vue d’ensemble de votre ressource > *Versions publiées* et cliquez sur *Publier*. Le IPT va transformer vos données en Darwin Core, les combiner avec les métadonnées et les empaqueter dans un fichier compressé appelé une "**Archive Darwin Core**(https://dwc.tdwg.org/text/)".

Si vous souhaitez attribuer un [DOI](https://fr.wikipedia.org/wiki/Digital_Object_Identifier) à votre jeu de données, vous devez au préalable cliquer sur « Reserve » puis modifier la visibilité de votre ressource vers « Public », avant de cliquer sur « Publier ». Le DOI est enregistré directement auprès de [DataCite](https://datacite.org) et un lien est ajouté au métadonnées de votre ressource. Pour de plus amples information à propos de l’attribution de DOI, veuillez consulter le [Flux de travail IPT DOI](https://ipt.gbif.org/manual/en/ipt/latest/doi-workflow). Consultez le [manuel de l'IPT](https://ipt.gbif.org/manual/) pour plus de détails sur la publication en général.

En retournant sur la vue d’ensemble de votre ressource > *Versions publiées*, vous pouvez voir les détails de votre premier jeu de données publié, incluant la date de publication et la version. Votre jeu de données étant publié de manière privée, la dernière chose qu’il vous reste à faire est de cliquer sur *Visibilité de la ressource* > **Public** (voir le [manuel de l'IPT](https://ipt.gbif.org/manual/en/ipt/latest/manage-resources#publication)) afin de le rendre disponible à tous. Attention : veuillez, s.v.p, ne pas rendre publique une version test.

Félicitations, vous venez de publier votre premier jeu de données aux yeux du monde ! Il est maintenant listé sur la [page d’accueil du dépôt](https://data.canadensys.net/ipt/?request_locale=fr) et vous pouvez le partager et en faire un lien : https://data.canadensys.net/ipt/resource?r=dataset-shortname. C’est le moment opportun pour prévenir les réseaux régionaux ou thématiques dont vous faites partie, comme par exemple [VertNet](http://www.vertnet.org/), le [Consortium of Northeastern Herbaria](https://neherbaria.org/portal/) ou la [Société d’Entomologie du Canada](https://esc-sec.ca/).

Votre jeu de données publié est une **vue statique** de vos données qui ne changera pas tant que vous ne téléchargerez pas une version mise à jour de votre fichier source et cliquiez de nouveau sur *Publier*. Les avantages sont que vos données sont toujours disponibles, ne requièrent pas de connection directe à votre base de données et peuvent-être aisément partagées (ex. vous pouvez envoyer par courriel l’Archive Darwin Core à un(e) collègue). Cela vous permet également de mieux contrôler le processus de publication : version 1, version 2, etc. et les usagers sont informés de quand date la ressource et des différences entre les versions (ajout de données, corrections d’erreurs, etc).

# 7. Enregistrement auprès de GBIF

Même si votre jeu de données est maintenant disponible à tous, il peut s’avérer difficile pour un usager de le **découvrir**. C’est pourquoi nous vous recommandons de l’enregistrer auprès du [GBIF (Global Biodiversity Information Facility)](http://www.gbif.org/). Cela permet à vos données de devenir disponibles à une audience internationale via le [portail de données de GBIF](https://www.gbif.org/occurrence/search) et cela assure l’**attribution complète** des crédits à votre institution. En vous enregistrant, vous acceptez les [accords de partage de données de GBIF](https://www.gbif.org/terms/data-publisher).

Sur la page de la vue d’ensemble de votre ressource, cliquer sur *Visibilité de la ressource* > **Enregistrement** (voir le [manuel de l’IPT](https://ipt.gbif.org/manual/en/ipt/latest/manage-resources#registration)) afin d’enregistrer votre jeu de données auprès du GBIF. Cela leur permettra d’indexer votre ressource à leur portail, à partir duquel elle sera facilement accessible à tous.

# Citation

Comme tout le contenu de ce site, ce guide est publié sous [CC-BY](https://creativecommons.org/licenses/by/4.0/deed.fr). La meilleure manière de le citer est la suivante :

Desmet, P. & C. Sinou. 2012. 7-step guide to data publication. Canadensys. [Link](https://community.canadensys.net/data-publication-guide)