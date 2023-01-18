# Simple Express/Node API

### Usage
`yarn install` -  to install dependencies
`yarn start` - to start the server

### Check route
You can use Postman to see the result of a route while the server is started. For example:

```
GET http://localhost:3001/api/friends?q=reed
```

should return
```
[
    {
        "id": 5,
        "name": "Reed Richards",
        "handle": "@Mister-Fantastic"
    }
]
```

This API runs on PORT 3001. Requests from the front end of this app are allowed because we have `"Access-Control-Allow-Origin"` Header set to `"*"`.