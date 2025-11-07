var siteConfig = {
  "version": 3,
  "pages": [
    {
      "id": "occurrenceSearch"
    },
    {
      "id": "collectionSearch"
    },
    {
      "id": "collectionKey"
    },
    {
      "id": "institutionSearch"
    },
    {
      "id": "institutionKey"
    },
    {
      "id": "datasetKey"
    },
    {
      "id": "datasetSearch"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    "INSTITUTION",
    "COLLECTION",
    "OCCURRENCE",
    "DATASET"
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": themeStyle.colors.primary,
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "ARCTIC": [
          "NATURAL",
          "BRIGHT"
        ],
        "PLATE_CAREE": [
          "NATURAL",
          "BRIGHT",
          "DARK"
        ],
        "MERCATOR": [
          "NATURAL",
          "BRIGHT",
          "SATELLITE",
          "DARK"
        ],
        "ANTARCTIC": [
          "NATURAL",
          "BRIGHT",
          "DARK"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "vocabularyLocale": "en",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    },
    {
      "code": "fr",
      "localeCode": "fr",
      "label": "Français",
      "default": false,
      "textDirection": "ltr",
      "cmsLocale": "fr",
      "iso3LetterCode": "fra",
      "vocabularyLocale": "fr-FR",
      "gbifOrgLocalePrefix": "/fr",
      "grSciCollLocalePrefix": "",
      "mapTileLocale": "fr"
    }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "or",
      "predicates": [
        {
          "type": "equals",
          "key": "publishingCountry",
          "value": "CA"
        },
        {
          "type": "equals",
          "key": "country",
          "value": "CA"
        }
      ]
    },
    "highlightedFilters": [
      "taxonKey",
      "verbatimScientificName",
      "institutionKey",
      "collectionKey",
      "catalogNumber",
      "recordedBy",
      "identifiedBy"
    ],
    "excludedFilters": [
      "occurrenceStatus",
      "networkKey",
      "hostingOrganizationKey",
      "protocol",
      "publishingCountry",
      "institutionCode",
      "collectionCode"
    ],
    "availableTableColumns": [
      "features",
      "institutionKey",
      "collectionKey",
      "catalogNumber",
      "country",
      "year",
      "recordedBy",
      "identifiedBy"
    ],
    "tabs": [
      "map",
      "table",
      "gallery",
      "datasets",
      "clusters",
      "dashboard",
      "download"
    ],
    "mapSettings": {
      "lat": 58,
      "lng": -102,
      "zoom": 3.5
    }
  },
  "collectionSearch": {
    "scope": {
      "country": "CA",
      "displayOnNHCPortal": true,
      "active": true
    },
    "excludedFilters": [
      "countrySingleGrSciColl"
    ]
  },
  "institutionSearch": {
    "scope": {
      "country": "CA",
      "displayOnNHCPortal": true,
      "active": true
    },
    "excludedFilters": [
      "country"
    ]
  },
  "datasetSearch": {
    "scope": {
      "publishingCountry": "CA"
    },
    "highlightedFilters": [
      "q",
      "publishingOrg",
      "type",
      "license"
    ],
    "excludedFilters": [
      "publishingCountry"
    ]
  },
  "publisherSearch": {},
  "literatureSearch": {}
}
