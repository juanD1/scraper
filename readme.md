# Scraping

A simple API for get product info of amazon using scraping.

- Type some Markdown on the left
- See HTML in the right
- Magic

### Product Info

Request type GET which has key url like query param to extract information of detail product in amazon product web page:

The `/product-info` endpoint return object with product information.
The response includes and object of product information:

- name: string
- img: string
- price?: number
- quantity?: number
- allImages: [string]
- isAvailable: bool

### Examples

#### Response product WITH stock

```json
{
  "name": "Fossil Women Jacqueline Stainless Steel and Leather Casual Quartz Watch",
  "price": 83.3,
  "quantity": 30,
  "img": "https://images-na.ssl-images-amazon.com/images/I/81IWWPwQCgL._AC_UY500_.jpg",
  "allImages": [
    "https://images-na.ssl-images-amazon.com/images/I/41ArzbKOTWL._AC_SR38,50_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/41X7NwTg6RL._AC_SR38,50_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/41D323oxM%2BL._AC_SR38,50_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/21-pH6NNVZL._AC_SR38,50_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/41AEOM8FJPL._AC_SR38,50_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51EHs1tfgBL._AC_SR38,50_.jpg",
    "https://m.media-amazon.com/images/I/51oJxZfAcaL.SX38_SY50_CR,0,0,38,50_PKmb-play-button-overlay-thumb_.jpg"
  ],
  "isAvailable": true
}
```

#### Response product WITHOUT stock

```json
{
  "name": "Fossil Women Jacqueline Stainless Steel and Leather Casual Quartz Watch",
  "img": "https://images-na.ssl-images-amazon.com/images/I/81JtrV-BcjL._AC_UX466_.jpg",
  "allImages": [
    "https://images-na.ssl-images-amazon.com/images/I/41bu7MMpBSL._AC_SR38,50_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/31cfjnmTtSL._AC_SR38,50_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/31O4o1ItA6L._AC_SR38,50_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51Q178oVmDL._AC_SR38,50_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/41h1j3eUIBL._AC_SR38,50_.jpg"
  ],
  "isAvailable": false
}
```
