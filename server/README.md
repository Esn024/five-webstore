# Backend

- `.get("/items", getAllItems)`

  - returns all the info for all the products. Something like this:
    ```json
    {
      "status": 200,
      "data": [
        {
          "name": "Barska GB12166 Fitness Watch with Heart Rate Monitor",
          "price": "$49.99",
          "body_location": "Wrist",
          "category": "Fitness",
          "_id": 6543,
          "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/[.....]",
          "numInStock": 9,
          "companyId": 19962
        },
        {
          "name": "Belkin GS5 Sport Fit Armband, Black F8M918B1C00",
          "price": "$24.99",
          "body_location": "Arms",
          "category": "Fitness",
          "_id": 6544,
          "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/[.....]",
          "numInStock": 3,
          "companyId": 16384
        },
        // etc...
      }
    ```

- `.get("/items/:id", getOneItem)`

  - returns all info for one product. E.g. if you request `/items/6573`, you will get this:
    ```json
    {
      "status": 200,
      "data": {
        "name": "Mota MT-G2PBR Smartwatch G2 Pro Black Large Bluetooth NFC Voice Activation",
        "price": "$87.89",
        "body_location": "Wrist",
        "category": "Lifestyle",
        "_id": 6573,
        "imageSrc": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/[.....]",
        "numInStock": 2,
        "companyId": 19787
      },
      "message": "Found item with ID 6573"
    }
    ```

- `.put("/items/buy", buyItems)`
  - buy stock of one or more items. The JSON file is updated with the new stock. It does not allow you to buy more stock than exists.
  - Your body should be something like the following:
    ```json
    {
      "_id": "randomID", //this random ID will be the order number
      "cart": [
        { "itemId": "6544", "quantity": "1" },
        { "itemId": "6545", "quantity": "2" }
      ]
    }
    ```
  - If there are no errors, you will receive the following result:
    ```json
    {
      "status": 202,
      "data": {
        "_id": "randomID",
        "cart": [
          {
            "itemId": "6544",
            "quantity": "1"
          },
          {
            "itemId": "6545",
            "quantity": "2"
          }
        ]
      },
      "message": "Bought item with ID 6544 (1 bought). Bought item with ID 6545 (2 bought). "
    }
    ```
- `.get("/companies", getAllCompanies)`
  - get data for all companies. You should receive a response like the following:
    ```json
    {
      "status": 200,
      "data": [
        {
          "name": "Barska",
          "url": "http://www.barska.com/",
          "country": "United States",
          "_id": 19962
        },
        {
          "name": "Belkin",
          "url": "http://www.belkin.com/",
          "country": "United States",
          "_id": 16384
        }
        //etc.
      ],
      "message": "Displaying all companies"
    }
    ```
- `.get("/companies/:id", getOneCompany)`
  - If you query `/companies/19787`, and you should a receive a response like this:
    ```json
    {
      "status": 200,
      "data": {
        "name": "Mota",
        "url": "https://www.mota.com/",
        "country": "United States",
        "_id": 19787
      },
      "message": "Found company with ID 19787"
    }
    ```

## Currently unused endpoints

The following endpoints are functional, but are not currently used in the app.

- `.put("/items/buy/:id", buyOneItem)`

  - allows you to buy stock of only one item at a time
  - If you send a request to `/items/buy/6544` with a body of
    ```json
    {
      "numberBought": 1
    }
    ```
    you will get the following response:
    ```json
    {
      "status": 202,
      "data": {
        "numberBought": 1
      },
      "message": "Bought item with ID 6544. 1 bought."
    }
    ```

- `.get("/body-locations", getAllItemBodyLocations)`
  - returns a list of all body locations:
    ```json
    {
      "status": 200,
      "data": [
        "Wrist",
        "Arms",
        "Head",
        "Waist",
        "Chest",
        "Hands",
        "Neck",
        "Feet",
        "Torso"
      ],
      "message": "Displaying all body locations"
    }
    ```
- `.get("/categories", getAllItemCategories) // unused`
  - returns a list of all categories:
    ```json
    {
      "status": 200,
      "data": [
        "Fitness",
        "Medical",
        "Lifestyle",
        "Entertainment",
        "Industrial",
        "Pets and Animals",
        "Gaming"
      ],
      "message": "Displaying all categories"
    }
    ```
