$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 2,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"\u003cmake\u003e\" on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"\u003cmodel\u003e\" on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"\u003clocation\u003e\" on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"\u003cprice\u003e\" on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 16,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Jeep",
        "Compass",
        "QLD - All",
        "$20,000"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Kia",
        "Rio",
        "VIC - All",
        "$15,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Audi",
        "A3",
        "NSW - All",
        "$10,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "BMW",
        "118d",
        "VIC - All",
        "$25,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Nissan",
        "Cube",
        "WA - All",
        "$30,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Mazda",
        "CX-5",
        "NSW - All",
        "$15,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18080866000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Jeep\" on new and used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Compass\" on new and used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"QLD - All\" on new and used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$20,000\" on new and used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 315921800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 525761300,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 4383185800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 135623600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMakeOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 641100800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compass",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModelOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 360774400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocationOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 310896500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPriceOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 459425000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTabOnNewAndUsedCardSearch()"
});
formatter.result({
  "duration": 3306207000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2091629300,
  "status": "passed"
});
formatter.after({
  "duration": 3001922100,
  "status": "passed"
});
formatter.before({
  "duration": 13674143200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Kia\" on new and used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Rio\" on new and used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"VIC - All\" on new and used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$15,000\" on new and used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Kia\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 62300,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 531159200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 4677820400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 112713000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMakeOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 1283855600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rio",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModelOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 439494600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocationOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 307760900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPriceOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 358042000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTabOnNewAndUsedCardSearch()"
});
formatter.result({
  "duration": 4322376500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2074245200,
  "status": "passed"
});
formatter.after({
  "duration": 2883636100,
  "status": "passed"
});
formatter.before({
  "duration": 13179701500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Audi\" on new and used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"A3\" on new and used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - All\" on new and used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$10,000\" on new and used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 53200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 370728600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 4026753400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 150068000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMakeOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 539616800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A3",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModelOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 606453000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocationOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 299814400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$10,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPriceOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 330393900,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTabOnNewAndUsedCardSearch()"
});
formatter.result({
  "duration": 3467054500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2044776000,
  "status": "passed"
});
formatter.after({
  "duration": 2828113600,
  "status": "passed"
});
formatter.before({
  "duration": 11201761100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"BMW\" on new and used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"118d\" on new and used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"VIC - All\" on new and used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$25,000\" on new and used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 34700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1292686800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 5341423900,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 225785000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMakeOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 437037100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "118d",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModelOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 825542600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocationOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 425135100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$25,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPriceOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 363649300,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTabOnNewAndUsedCardSearch()"
});
formatter.result({
  "duration": 4752915900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2057105700,
  "status": "passed"
});
formatter.after({
  "duration": 2970778900,
  "status": "passed"
});
formatter.before({
  "duration": 13595453500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Nissan\" on new and used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Cube\" on new and used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"WA - All\" on new and used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$30,000\" on new and used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Nissan\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 50200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 544111800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 4232353900,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 170793600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMakeOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 633936500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cube",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModelOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 432006800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WA - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocationOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 393605500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPriceOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 295895300,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTabOnNewAndUsedCardSearch()"
});
formatter.result({
  "duration": 2978563900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2042578900,
  "status": "passed"
});
formatter.after({
  "duration": 2636111300,
  "status": "passed"
});
formatter.before({
  "duration": 14594272100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Mazda\" on new and used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"CX-5\" on new and used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - All\" on new and used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$15,000\" on new and used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab on new and used card search",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Mazda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 40200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 474326400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 1448162300,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 415551500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMakeOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 613697900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CX-5",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModelOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 279440100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocationOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 317232700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPriceOnNewAndUsedCardSearch(String)"
});
formatter.result({
  "duration": 536177500,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTabOnNewAndUsedCardSearch()"
});
formatter.result({
  "duration": 4219702800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2093662700,
  "status": "passed"
});
formatter.after({
  "duration": 2868772400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"\u003cmake\u003e\" on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"\u003cmodel\u003e\" on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"\u003clocation\u003e\" on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"\u003cprice\u003e\" on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 36,
      "id": "search-functionality;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Jeep",
        "Compass",
        "QLD - All",
        "$20,000"
      ],
      "line": 37,
      "id": "search-functionality;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "Kia",
        "Rio",
        "VIC - All",
        "$15,000"
      ],
      "line": 38,
      "id": "search-functionality;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "Audi",
        "A3",
        "NSW - All",
        "$10,000"
      ],
      "line": 39,
      "id": "search-functionality;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "BMW",
        "118d",
        "VIC - All",
        "$25,000"
      ],
      "line": 40,
      "id": "search-functionality;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "Nissan",
        "Cube",
        "WA - All",
        "$30,000"
      ],
      "line": 41,
      "id": "search-functionality;search-the-used-car-with-model;;6"
    },
    {
      "cells": [
        "Mazda",
        "CX-5",
        "NSW - All",
        "$15,000"
      ],
      "line": 42,
      "id": "search-functionality;search-the-used-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12799654400,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"Jeep\" on used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"Compass\" on used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"QLD - All\" on used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"$20,000\" on used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 53400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 807512600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 3916806300,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 75084000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMakeOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 457570000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compass",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModelOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 624678300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QLD - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocationOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 373756900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPriceOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 279980800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTabOnUsedCardSearch()"
});
formatter.result({
  "duration": 2672111300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2060652900,
  "status": "passed"
});
formatter.after({
  "duration": 2788161400,
  "status": "passed"
});
formatter.before({
  "duration": 13118139000,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"Kia\" on used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"Rio\" on used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"VIC - All\" on used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"$15,000\" on used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"Kia\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 46900,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 526955800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 3176500600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 124445000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMakeOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 453366900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rio",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModelOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 632704800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocationOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 330922500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPriceOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 295764700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTabOnUsedCardSearch()"
});
formatter.result({
  "duration": 2478701400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2062854600,
  "status": "passed"
});
formatter.after({
  "duration": 2893220500,
  "status": "passed"
});
formatter.before({
  "duration": 13206076100,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"Audi\" on used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"A3\" on used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"NSW - All\" on used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"$10,000\" on used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 65700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 512842600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 3738108000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 87895400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMakeOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 392921700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A3",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModelOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 526298900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocationOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 471326500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$10,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPriceOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 275805400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTabOnUsedCardSearch()"
});
formatter.result({
  "duration": 3866953100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2033764900,
  "status": "passed"
});
formatter.after({
  "duration": 2800740600,
  "status": "passed"
});
formatter.before({
  "duration": 13621522300,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"BMW\" on used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"118d\" on used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"VIC - All\" on used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"$25,000\" on used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 37200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 523673600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 4697671100,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 83823600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMakeOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 429384800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "118d",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModelOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 576378800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocationOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 263389600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$25,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPriceOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 271721200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTabOnUsedCardSearch()"
});
formatter.result({
  "duration": 2627184400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2044762900,
  "status": "passed"
});
formatter.after({
  "duration": 2608365900,
  "status": "passed"
});
formatter.before({
  "duration": 13855780200,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"Nissan\" on used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"Cube\" on used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"WA - All\" on used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"$30,000\" on used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"Nissan\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 38700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 565039600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 3331222600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 343141200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMakeOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 955353200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cube",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModelOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 674227200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WA - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocationOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 462895300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPriceOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 349406800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTabOnUsedCardSearch()"
});
formatter.result({
  "duration": 5052696000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2067312400,
  "status": "passed"
});
formatter.after({
  "duration": 2636849300,
  "status": "passed"
});
formatter.before({
  "duration": 10574628400,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality;search-the-used-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click ‘Used’ link",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I navigate to ‘Used Cars For Sale’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I select make \"Mazda\" on used card search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select model \"CX-5\" on used card search",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select location \"NSW - All\" on used card search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select price \"$15,000\" on used card search",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Find My Next Car tab on used card search",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see the make \"Mazda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 41900,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1238509500,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 4931119100,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 74797000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMakeOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 673870200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CX-5",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModelOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 415188800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocationOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 400094100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$15,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPriceOnUsedCardSearch(String)"
});
formatter.result({
  "duration": 268457800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTabOnUsedCardSearch()"
});
formatter.result({
  "duration": 3227759200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 2076403100,
  "status": "passed"
});
formatter.after({
  "duration": 2579797900,
  "status": "passed"
});
});