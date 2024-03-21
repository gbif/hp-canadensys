var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary,
    fontSize: '16px'
  }
});

var siteConfig = {
  version: 2,
  routes: {
    enabledRoutes: ['occurrenceSearch', 'collectionSearch', 'collectionKey', 'institutionSearch', 'institutionKey', 'datasetKey', 'datasetSearch'], // what widgets do you include on your site. If not included we will link to gbif.org (for showing individual datasets for example)
    alwaysUseHrefs: true, // if true, then we will always use hrefs, if false we will use onClick events and push state to the history. I've added this because I just realize that the language picker doesn't work with pushState as the url of the translated site is not updated with the new url
  },
  availableCatalogues: ['INSTITUTION', 'COLLECTION', 'OCCURRENCE', 'DATASET'],
  occurrence: {
    excludedFilters: ['occurrenceStatus', 'networkKey', 'hostingOrganizationKey', 'protocol', 'publishingCountryCode', 'institutionCode', 'collectionCode'],
    highlightedFilters: ['taxonKey', 'verbatimScientificName', 'institutionKey', 'collectionKey', 'catalogNumber', 'recordedBy', 'identifiedBy'],
    availableTableColumns: ['features', 'institutionKey', 'collectionKey', 'catalogNumber', 'country', 'year', 'recordedBy', 'identifiedBy'],
    mapSettings: {
      lat: 58,
      lng: -102,
      zoom: 3.5
    },
    rootPredicate: {
      "type": "or",
      "predicates": [
        { 
          type: "equals", 
          key: "publishingCountry", 
          value: "CA"
        },
        { 
          type: "equals", 
          key: "country", 
          value: "CA"
        }
      ]
    },
    occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS'] // what tabs should be shown
  },
  collection: {
    // filters on the grscicoll institution v1 API https://www.gbif.org/developer/summary
    // https://hp-theme.gbif-staging.org/data-exploration-config
    rootFilter: {
      country: 'CA',
      displayOnNHCPortal: true,
      active: true
    },
    excludedFilters: ['countrySingleGrSciColl'],// no reason to show a filter on country, when there is only one
  },
  institution: {
    rootFilter: {
      country: 'CA',
      displayOnNHCPortal: true,
      active: true
    },
    excludedFilters: ['countrySingleGrSciColl'],// no reason to show a filter on country, when there is only one
    mapSettings: {
      enabled: true, // show a map on institution search?
      lat: 58,
      lng: -102,
      zoom: 3.5
    },
  },
  //literature: {
    //rootFilter: {
      //predicate: {
        //type: 'or', predicates: [
          //{
            //type: 'in',
            //key: 'countriesOfResearcher',
            //values: ['CA']
          //},
          //{
            //type: 'in',
            //key: 'countriesOfCoverage',
            //values: ['CA']
          //}
        //]
      //}
    //},
    //highlightedFilters: ['q', 'countriesOfResearcher', 'countriesOfCoverage', 'year']
  //},
  dataset: {
    rootFilter: { publishingCountry: 'CA' },
    highlightedFilters: ['q', 'anyPublisherKey', 'datasetType', 'license'],
    excludedFilters: ['publishingCountryCode'],
  },
  //apiKeys: {
  //maptiler: "GET_YOUR_OWN_TOKEN", // https://github.com/gbif/hosted-portals/issues/229
  //mapbox: "GET_YOUR_OWN__TOKEN"
  //},
  maps: {
    //locale: 'ja', // we want to show the maps in japanese
    defaultProjection: 'MERCATOR',
    defaultMapStyle: 'BRIGHT',
    mapStyles: {
      ARCTIC: ['NATURAL', 'BRIGHT'],
      PLATE_CAREE: ['NATURAL', 'BRIGHT', 'DARK'],
      MERCATOR: ['NATURAL', 'BRIGHT', 'SATELLITE', 'DARK'],
      ANTARCTIC: ['NATURAL', 'BRIGHT', 'DARK']
    }
  },
  //messages: { // custom overwrites for the translations, e.g. label the occurrence catalog as a specimen catalog to match our data scope of specimens.
  //"catalogues.occurrences": "Occurrences"
  //}
};
