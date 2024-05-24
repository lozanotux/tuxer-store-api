# Tuxer Store API

This Node.js API was maded to learn several Node.js concepts.

## How to use it?

**Requirements:**
* Node.js 20.X
* Insomnia (optional)

1. Install dependencies:
    ```bash
    npm install
    ```

2. Run application:
    ```bash
    export API_PORT=9001
    npm run start
    ```

3. Test the API:

    <span style="background-color: #6b6297;color: white;padding: 4px 8px;">GET</span> **Get all products**
    ```bash
    curl --request GET \
        --url http://localhost:9001/api/v1/products
    ```

    <span style="background-color: #6b6297;color: white;padding: 4px 8px;">GET</span> **Get  product by id**
    ```bash
    curl --request GET \
        --url http://localhost:9001/api/v1/products/62302cd9-e720-4611-97ec-99780b0bbcc0
    ```

    <span style="background-color: #567e32;color: white;padding: 4px 8px;">POST</span> **Create product**
    ```bash
    curl --request POST \
        --url http://localhost:9001/api/v1/products \
        --header 'Content-Type: application/json' \
        --data '{
            "name": "New product",
            "price": 1209,
            "image": "http://placeimg.com/640/480"
        }'
    ```

    <span style="background-color: #8f8838;color: white;padding: 4px 8px;">PATCH</span> **Update partial product**
    ```bash
    curl --request PATCH \
        --url http://localhost:9001/api/v1/products/639b8233-6381-4c9a-a0fc-c61cda0b1d7e \
        --header 'Content-Type: application/json' \
        --data '{
            "name": "Changed product name",
            "price": 123
        }'
    ```

    <span style="background-color: #974231;color: white;padding: 4px 8px;">DELETE</span> **Delete product**
    ```bash
    curl --request DELETE \
        --url http://localhost:9001/api/v1/products/cb2c30d1-f992-49ba-8bee-514c922e4b51
    ```

> **NOTE:** an [insomnia.json](./insomnia.json) collection is available for importing all requests and test the API.