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


Ce guide explique comment publier vos données de biodiversité sur [GBIF](http://www.gbif.org/) en utilisant le [répertoire Canadensys](http://data.canadensys.net/ipt). Le répertoire Canadensys est alimenté par [l’Outil de Publication Intégré du GBIF (IPT)](https://www.gbif.org/en/ipt) et personnalisé par Canadensys pour être entièrement intégré à notre site web. Il vous permet de télécharger, de standardiser, de publier et d'enregistrer vos données en **7 étapes**. Il est important de noter que les données sont publiées au nom de votre organisation, et ce gratuitement.


[Accédez à l'IPT](https://data.canadensys.net/ipt/){: .button .is-primary}


![](/assets/images/How-to_guide/Steps_fr.jpeg)





## Format de jeu de données


Les données sur la biodiversité sont publiées sur Canadensys selon la norme [Darwin Core](https://dwc.tdwg.org/) (DwC). Elle comprend un [glossaire des termes définis](https://dwc.tdwg.org/terms/) (mentionné sous le format dwc:nomDuTerme ci-après) et permet à vos données d'être comprises et utilisées par n'importe qui. 

Le standard Darwin Core offre un moyen robuste et stable de compiler et de partager des données sur la biodiversité, quelle que soit la technologie utilisée pour le faire. Elle permet également à l'agrégateur GBIF d'intégrer vos données à d'autres données dans le monde entier.

[GBIF portal](http://www.gbif.org/){: .button .is-primary}

Il n'est pas nécessaire d'utiliser ces termes dans vos données sources, mais le fait d'en prendre connaissance devrait vous aider à construire les fondations de votre base de données.


## Les classes de jeux de données

Il existe **quatre classes de jeux de données** pris en charge par l'IPT. Pour plus d'informations sur les différentes classes de jeux de données, consultez les guides GBIF suivants:
* [Exigences de qualité des données pour la publication des **données d'occurrence**](https://www.gbif.org/data-quality-requirements-occurrences)
* [Exigences de qualité des données pour la publication des **listes de contrôle**](https://www.gbif.org/data-quality-requirements-checklists)
* [Exigences de qualité des données pour la publication des **métadonnées**](https://www.gbif.org/dataset-classes)
* [Exigences de qualité des données pour la publication des **données d'événement d'échantillonnage**](https://www.gbif.org/data-quality-requirements-sampling-events)


## Conditions

Les données nous tiennent à coeur et nous voulons nous assurer que c'est aussi le cas pour vous. Pour publier vos données dans le [répertoire Canadensys](https://data.canadensys.net/ipt/), vous devez répondre aux critères suivants:
* Vous êtes associé à une collection ou une organisation **canadienne**.
* Vous publiez l'un des **quatre types d'ensembles de données** soutenus par l'IPT.
* Vous détenez les **droits** de publication des données.
* Vous êtes prêt à **maintenir** le jeu de données et à en améliorer la qualité dans la mesure du possible.
* Vous êtes prêt à fournir suffisamment de **métadonnées** pour que les utilisateurs et utilisatrices puissent savoir de quoi il s'agit.
* Vous publiez les données sous une **licence ouverte** pour que d'autres puissent vraiment les utiliser. Nous recommandons vivement de publier sous [CC0](https://creativecommons.org/publicdomain/zero/1.0/).




## Enregistrement de l'institution et de la collection


Avant de commencer, il est essentiel d'enregistrer votre institution et votre collection sur [GRSciColl](https://scientific-collections.gbif.org/). Le registre mondial des collections scientifiques (GRSciColl) est un référentiel exhaustif d'informations sur les collections scientifiques, géré par la communauté. Vous devrez également enregistrer votre institution ou votre organisation en tant qu'éditeur sur GBIF.


![](/assets/images/How-to_guide/GRSciColl_GBIF.jpeg)


[Ajoutez votre instituion sur GRSciColl](https://registry.gbif.org/institution/create){: .button .is-primary}

[Ajoutez votre collection sur GRSciColl](https://registry.gbif.org/collection/create){: .button .is-primary}

[Devenir un fournisseur de données](https://www.gbif.org/fr/become-a-publisher){: .button .is-primary}




# 1. Créez une ressource sur l'IPT

C'est parti !

Pour pouvoir créer et gérer votre propre jeu de données (appelé « ressource »), vous aurez besoin d'un **compte utilisateur**. Il vous suffit de nous contacter pour en créer un pour vous et votre équipe en nous fournissant les noms et adresses électroniques pertinents.

[Contactez-nous !](mailto:canadensys.network@gmail.com){: .button .is-primary}


Une fois que vous avez un compte, connectez-vous en haut de [cette page](https://data.canadensys.net/ipt/). Cliquez sur l'onglet **_Gestion des ressources_** pour accéder à votre tableau de bord. Il affichera tous les ensembles de données que vous gérez et sera vide au début. Vous pouvez **créer une nouvelle ressource** en bas de la page. Suivez le [manuel IPT](https://ipt.gbif.org/manual/) pour des instructions plus détaillées.

> **_NOTICE:_** Veuillez utiliser le format minuscule suivant pour le **nom court** de votre ressource : *votrecode de collecte - type de données* (par exemple, *spécimensacad* ou *observations d'observation de la faune sauvage*). Ce nom est utilisé pour identifier et accéder à votre ressource de manière unique et ne peut pas être modifié par la suite ! À des fins de test, veuillez utiliser *votreCodeDeCollection-test* (par exemple *ubc-test*).





Une fois que vous avez créé votre ressource, vous verrez la [page de présentation de la ressource](https://ipt.gbif.org/manual/fr/ipt/latest/manage-resources#resource-overview).


<img src="/assets/images/How-to_guide/emptyResource_fr.png" style="border: 1px solid grey;">



Vous pouvez ajouter les gestionnaires de données qui peuvent avoir accès à votre ressource au bas de la page de présentation de la ressource.

<img src="/assets/images/How-to_guide/managers_fr.png" style="border: 1px solid grey;">

















# 2. Exportation



Exportez votre base de données sous forme de [**fichier texte délimité**](https://en.wikipedia.org/wiki/Delimiter-separated_values), ce qui garantit que les valeurs de vos données sont séparées dans chaque ligne par des caractères de délimitation spécifiques (par exemple .txt, .tab, .csv).

**_Exemples_** : Les formats de données délimitées ont des champs/colonnes séparés par un caractère (caractère de tabulation, virgule, point-virgule) et des enregistrements/rangées terminés par des nouvelles lignes.


{% highlight ruby %}
specificEpithet,infraspecificEpithet,occurrenceRemarks
Leucoagaricus,naucinus,"Du texte, avec une virgule"
{% endhighlight %}

{% highlight ruby %}
specificEpithet;infraspecificEpithet;occurrenceRemarks
Leucoagaricus;naucinus;"Du texte; avec un point-virgule"
{% endhighlight %}

{% highlight ruby %}
specificEpithet infraspecificEpithet  occurrenceRemarks
Leucoagaricus naucinus  "Du texte, avec une virgule"
{% endhighlight %}


L'attribution de l'encodage peut aussi parfois rendre les choses difficiles en raison d'interprétations erronées des caractères accentués (par exemple é, à, ü, î) ou du caractère de degré (°). C'est notamment le cas pour les informations sur les auteurs (dwc:**scientificNameAuthorship**), la personne/groupe/organisation qui a attribué le nom du taxon (dwc:**identfiedBy**) et les coordonnées géographiques (dwc:**decimalLatitude** et dwc:**decimalLongitude**).

Sélectionnez l'encodage de caractères **[UTF-8](https://en.wikipedia.org/wiki/UTF-8)** pour votre exportation. Si l'option est disponible, incluez une ligne d'en-tête dans votre exportation (une première ligne avec les noms des champs), car elle sera utile plus tard.

> **_ATTENTION:_**  Veuillez éviter d'utiliser le codage de caractères [ASCII](https://en.wikipedia.org/wiki/ASCII), [Macintosh](https://en.wikipedia.org/wiki/Mac_OS_Roman), et [Windows ANSI](https://en.wikipedia.org/wiki/Windows-1252).


À cette étape, vous pouvez nous contacter si vous souhaitez obtenir une vérification rapide de vos données avant de les télécharger vers l'IPT.





# 3. Téléchargement


Pour importer vos données (vos données sources, et éventuellement une ou plusieurs [extensions](https://rs.gbif.org/extensions.html)), allez sur la page de présentation de votre ressource > **Données sources_** et cliquez sur **_Ajouter_**. Vous pouvez importer de nouvelles données, ou vous pouvez également importer vos données sources en tant que ressource déjà archivée (Darwin Core Archive, dossier de configuration de ressource IPT zippé, ou fichier de métadonnées). Vous trouverez plus d'informations sur les fichiers sources que vous pouvez importer [ici](https://ipt.gbif.org/manual/en/ipt/latest/manage-resources#create-a-new-resource).


![](/assets/images/How-to_guide/Source_data_fr.png)


>**_NOTE:_**
Vous pouvez compresser votre fichier source afin d'améliorer la vitesse de téléchargement des fichiers volumineux. L'IPT les décompressera automatiquement une fois qu'il les aura reçus. Suivez le [Manuel de l'IPT](https://ipt.gbif.org/manual/) pour obtenir des instructions plus détaillées, y compris pour avoir les détails de la possibilité d'utiliser plusieurs fichiers sources ou de télécharger via une connexion directe à la base de données.

Une fois que votre fichier source a été correctement téléchargé, une page de détail du fichier source s'affiche (voir un [exemple de capture d'écran](https://ipt.gbif.org/manual/en/ipt/latest/manage-resources#source-data) dans le manuel de l'IPT), indiquant comment l'IPT a interprété votre fichier (nombre de colonnes, de lignes, de lignes d'en-tête, encodage des caractères, délimiteurs, etc.). Cliquez sur le bouton **_Éditer_** sur votre fichier source et sur le bouton **_Option_** >  **_Aperçu_** pour vérifier que tout est en ordre, puis cliquez sur **_Enregistrer_**.




# 4. Conversion Darwin Core



La conversion Darwin Core lier les champs de votre fichier source aux termes Darwin Core appropriés.

Si vos données sources utilisent déjà des termes Darwin Core dans l'en-tête de vos données, le processus de conversion est entièrement automatisé. Une simple vérification de la correspondance faite est alors nécessaire pour valider cette étape. Une fois vérifiée, cliquez sur le bouton **_Enregistrer_**.

Si vos données n'utilisent pas les termes Darwin Core, cette étape peut s'avérer difficile pour deux raisons :

1. La [liste des termes Darwin Core](https://dwc.tdwg.org/terms/) peut être imposante, et il peut donc être difficile de sélectionner ceux qui sont appropriés pour votre ensemble de données.
2. L'IPT ne permet actuellement qu'une mise en correspondance des champs un à un, de sorte que la facilité de mise en correspondance dépendra de la structure de votre base de données et de la faisabilité d'une exportation aussi proche que possible vers le Darwin Core. Contactez-nous pour vous guider à travers les étapes, examiner votre conversion, suggérer des termes et vous aider à répéter les étapes 2 à 4 jusqu'à ce que la conversion soit juste.


Vous trouverez plus d'informations sur la conversion Darwin Core dans le [manuel de l'IPT](https://ipt.gbif.org/manual/) (y compris les types de noyaux, les extensions, la conversion automatique, les valeurs par défaut, la traduction des valeurs, etc.) et dans l'introduction au Darwin Core [sur notre site web](/resources/documents/#data-standardization-and-darwin-core).


# 5. Ajout de métadonnées


Si les données sont des briques LEGO, les [métadonnées](/resources/documents/#metadata) sont la boîte brillante et les instructions. Elles permettent aux utilisateurs de découvrir votre jeu de données et d'évaluer sa pertinence par rapport à leurs besoins particuliers, il est donc utile d'investir un peu de temps pour les fournir.

Allez sur la page de présentation de votre ressource > **_Metadata_** et cliquez sur **_Edit_** pour ouvrir l'éditeur de métadonnées. Liez votre ressource avec votre institution dans les métadonnées une fois qu'elle est enregistrée auprès du GBIF (voir [cette section](#Institution-and-collection-registrations) dans l'introduction de cette page).

<img src="/assets/images/How-to_guide/Metadata_fr.png" style="border: 1px solid grey;">

Les métadonnées sont exprimées en [EML](https://github.com/gbif/eml-profile), qui est un standard utilisé par GBIF, et peuvent également être téléchargées sous forme de fichier RTF (Rich Text Format).





> **_NOTE:_** 
Le profil GBIF EML peut également être téléchargé sous forme de fichier [Rich Text Format (RTF)](https://en.wikipedia.org/wiki/Rich_Text_Format) en utilisant le bouton **_Télécharger_**. Ce dernier peut servir **d’ébauche de manuscrit** décrivant l'ensemble de données (un « [Article de Données](https://www.gbif.org/data-papers) »), qui peut être soumis à l’un des journaux libres d’accès et révisés par les pairs de [Pensoft](https://pensoft.net/) tels que le [Biodiversity Data Journal](https://bdj.pensoft.net/), [Phytokeys](https://phytokeys.pensoft.net/), [Zookeys](https://zookeys.pensoft.net/), [Biorisk](https://biorisk.pensoft.net/), [Neobiota](https://neobiota.pensoft.net/) ou [Nature Conservation](https://natureconservation.pensoft.net/).



Suivez [le manuel de l'IPT](https://ipt.gbif.org/manual/en/ipt/latest/manage-resources#basic-metadata) pour obtenir des instructions détaillées sur l'éditeur de métadonnées et utilisez l'un des ensembles de données actuellement publiés comme exemple:
* [exemple de collection](https://data.canadensys.net/ipt/resource.do?r=mt-specimens)
* [exemple de checklist](https://data.canadensys.net/ipt/resource.do?r=vascan)


# 6. Publication

Par défaut, la visibilité de votre ressource est définie comme étant privée. Lorsque vous êtes prêt à la rendre publique **_Visibilité_** et cliquez sur **_Modifier_** pour la faire passer à **_Public_**. Voir le [Manuel de l' IPT](https://ipt.gbif.org/manual/en/ipt/latest/manage-resources#publication) pour plus d'informations.

<img src="/assets/images/How-to_guide/Visibility_fr.png" style="border: 1px solid grey;">


Pour publier votre jeu de données, cliquez sur **_Publier_**. Vous pouvez également publier lorsque la **_Visibilité_** est privée. Cela peut vous permettre de sauvegarder la version de votre jeu de données parmi les gestionnaires de la ressource avant qu'il ne soit prêt à être partagé publiquement. Lorsque vous décidez que la version publiée est satisfaisante, vous pouvez changer la **_Visibilité_** vers **_Public_**.

<img src="/assets/images/How-to_guide/Publication_fr.png" style="border: 1px solid grey;">


Au cours du processus de publication, l'IPT Canadensys générera vos données en tant que Darwin Core, les combinera avec les métadonnées et les regroupera dans un fichier zip standardisé appelé [**Archive Darwin Core**](https://dwc.tdwg.org/text/).

![](/assets/images/How-to_guide/DwC_archive.png)


Si vous souhaitez attribuer un [DOI](https://en.wikipedia.org/wiki/Digital_object_identifier) à votre jeu de données, vous devez cliquer sur le bouton **_Reserver_** ![](/assets/images/How-to_guide/DOI_button.png), puis publier à nouveau en utilisant le bouton **_Publier_**.
Le DOI est enregistré directement auprès de [DataCite](https://datacite.org/) et un lien sera ajouté dans les métadonnées de votre ressource. Si votre jeu de données n'a pas encore été publié, vous devez d'abord le publier, réserver un DOI et publier à nouveau. La version de votre jeu de données passera alors de la version 1.x à la version 2.0, car il s'agit d'un changement majeur dans les métadonnées de votre jeu de données.
Pour plus d'informations sur les étapes d'attribution des DOI, vous pouvez consulter le [processus de DOI](https://ipt.gbif.org/manual/en/ipt/latest/doi-workflow). Pour plus de détails sur le processus général de publication, voir le [Manuel de l'IPT](https://ipt.gbif.org/manual/).

> **_NOTE:_**
Ne publiez pas publiquemenent des données **test** si vous en utilisez.


Félicitations ! Vous venez de publier votre premier jeu de données aux yeux du monde !
Il est maintenant listé sur la [page d’accueil du répertoire](https://data.canadensys.net/ipt/) et vous pouvez le partager en utilisant ce format de lien :
{% highlight ruby %}https://data.canadensys.net/ipt/resource?r=dataset-shortname{% endhighlight %}



Vous pouvez desormais notifier les réseaux régionaux ou thématiques dont vous faites partie, comme par exemple  [VertNet](http://www.vertnet.org/), le [Consortium of Northeastern Herbaria](https://neherbaria.org/portal/) ou la [Société d’Entomologie du Canada](https://esc-sec.ca/).


Gardez à l'esprit que vore jeu de données publié est une **vue statique** de vos données qui ne changera pas tant que vous ne téléchargerez pas une version mise à jour de votre fichier source et cliquiez à nouveau sur **_Publier_**. Cette procédure présente l'avantage que votre jeu de données est toujours disponible, qu'il ne nécessite pas de connexion Internet à votre base de données et qu'il peut être facilement partagé (par exemple, vous pouvez envoyer l'archive Darwin Core à un collègue par courrier électronique). Elle vous permet également de contrôler plus précisément le processus de publication (version 1, version 2, etc.) et les utilisateurs sont informés du caractère récent des données et des différences entre les versions (par exemple, ajout de données, correction d'erreurs, modification des métadonnées, etc.)





# 7. Enregistrement auprès de GBIF



Even though your dataset is now available to everyone on the Canadensys IPT, you can enhance its accessibility by users by registering your dataset with the [Global Biodiversity Information Facility (GBIF)](http://www.gbif.org/). It allows your data to become available to an international audience via the [GBIF portal](https://www.gbif.org/occurrence/search). It also ensures **full attribution** is given to your institution. By registering your data, you agree with the [GBIF Data Publisher Agreement](https://www.gbif.org/terms/data-publisher).

Même si votre jeu de données est désormais accessible à tous sur l'IPT Canadensys, vous pouvez améliorer son accessibilité par les utilisateurs et utilisatrices en enregistrant votre jeu de données auprès du [Global Biodiversity Information Facility (GBIF)](http://www.gbif.org/).
Cela permet à vos données d'être accessibles à un public international via le [portail GBIF](https://www.gbif.org/occurrence/search). Il garantit également que **l'attribution complète** est donnée à votre institution. En enregistrant vos données, vous acceptez le [Accord de publication des données de GBIF](https://www.gbif.org/terms/data-publisher).






On the resource overview page, in the registration section, click on **_Register_**. You can then confirm that you are in accord with the GBIF data sharing agreement in the dialog box. Your dataset is now available on GBIF!
See the [IPT manual](https://ipt.gbif.org/manual/en/ipt/latest/manage-resources#registration)) for more details about the registration step. It will allow GBIF to index your resource on their portal, where it can be easily accessed by everyone.

Sur la page de présentation des ressources, dans la **section enregistrement**, cliquez sur **_Enregistrer_**. Vous pouvez alors confirmer l'accord de partage de données de GBIF dans la boîte de dialogue. Votre jeu de données est maintenant disponible sur GBIF ! Cela permettra à GBIF d'indexer votre ressource sur son portail, où elle sera facilement accessible à tous.
Consultez le [manuel IPT](https://ipt.gbif.org/manual/en/ipt/latest/manage-resources#registration)) pour plus de détails sur l'étape d'enregistrement.



<img src="/assets/images/How-to_guide/Registration_fr.png" style="border: 1px solid grey;">



> **_NOTE:_** 
Si votre jeu de données a déjà été publié (entièrement ou partiellement) sur GBIF via un autre IPT, des mesures doivent être prises pour relier l'ancien et le nouveau jeu de données afin d'éviter les doublons. Contactez-nous pour que nous puissions organiser cette étape supplémentaire dans le processus de publication !

[Contactez-nous](mailto:canadensys.network@gmail.com){: .button .is-primary}



# Citation

Comme tout le contenu de ce site, ce guide est publié sous [CC-BY](https://creativecommons.org/licenses/by/4.0/deed.fr).
Pour citer ce guide, utilisez la citation :


Desmet, P.; Leménager, M.; Sinou, C. 2025. 7-step guide to data publication. Canadensys. <https://canadensys.net/publish/7-step-guide/>
