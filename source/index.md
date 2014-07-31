---
title: API Reference

language_tabs:
  - shell
  - ruby
  - javascript

toc_footers:
  - <a href='#'>Generate your HMAC key</a>
  - <a href='http://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - errors

search: true
---

# Introduction

```shell
curl -X GET https://user:password@your.mingle.server:8080/api/v2/projects/my_project/cards/1.xml 

```

```ruby
require "uri"
require "net/https"
require "time"
require "rubygems"
require "api_auth"
 
MINGLE_URL = "https://your-org.mingle-api.thoughtworks.com/api/v2/projects.xml"
 
access_key_id = "your_username"
secret_access_key = "???????????????"
 
uri = URI.parse(MINGLE_URL)
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true
 
request = Net::HTTP::Get.new(uri.request_uri)
ApiAuth.sign!(request, access_key_id, secret_access_key)
 
response = http.request(request)
puts response.body

```

RESTful APIs offer a convenient way to integrate networked systems.

Mingle provides a RESTful API through which you can access and manipulate various kinds of resources. Cards, transitions and users are the kinds of resources that are available in this version of the API

The following sections will walk you through the various resources and the operations that are supported on each of them.

The Mingle API provides access to various kinds of resources in Mingle over HTTP. These resources are available as both json and xml documents. The standard HTTP operations of GET, POST, PUT and DELETE are used to support read, create, update and delete.

Hence performing a GET operation for a card resource would be the equivalent of reading that card, performing a PUT on a user would be the equivalent of updating that user; and so on.

Not all resources support all the operations, as sometimes it doesn't make sense within Mingle to allow those operations
An example is performing a DELETE on a user resource, as users in Mingle cannot be deleted.

# Configuration

## Authentication

### SaaS Customers
For SaaS customers, the Mingle API supports HMAC authentication. 
All API requests to SaaS are made over HTTPS and Mingle On-Site with SSL configured
#### Generating your HMAC key

Unlike basic authentication, HMAC authentication is user specific. Every user can generate one HMAC secret key from the profile page under the HMAC Auth Key tab.

Please note that regenerating your HMAC key will invalidate your existing key.

### On Site Customers 

For On Site customers, the Mingle API supports basic authentication.
#### Configuring basic authentication
To enable basic authentication, set `basic_authentication_enabled: true` in ``<Mingle Data Directory>/config/auth_config.yml``

# Projects

## Metadata

## Create a New Project

## Find All Projects

## Find a Single Project

# Cards
## Metadata
`name` String.

`description` String; the HTML that Mingle renders for the card description.

`type` Resource; name of the card type for each card; string.

`id` Integer; read only, system assigned unique identifier for a card.

`number` Integer; read only, unique identifier of a card within a project - Use this for both GET and PUT.

`project` Resource; name and identifier of a project a card belongs to; both strings.

`version` Integer; read only, current card version. You can specify the version to get history version of the card.

`project_card_rank` Integer; read only, the rank of the card in a project.

`created_on` Datetime; read only, date and time of creating card.

`modified_on` Datetime; read only, date and time of last modification.

`modified_by` Resource; name and login id of user who is the last to modify the card; both String, read only.

 `created_by` Resource; name and login id of user who created the card; both String, read only.

`properties` Array; property: Resource; name and a current value for each card property defined for current card's card type are listed; Data type will depend on the property while property name is always String. The property also includes attributes about the property type_description and whether or not it is hidden.

`tags` String; read only, comma-delimited list of tags associated with the card.

`rendered_description` Resource; Link to rendered card description as HTML.

## Create a New Card

To create a new card, you can send a POST request with two necessary parameters - card type and name. 

## Find All Cards or Get a Set of Cards

```javascript
  function getCardsXml (){
      $j.ajax({
      url: 'https://sarah.mingle.thoughtworks.com/api/v2/projects/clix/cards.xml',
      data: null,
      success: function(data, textStatus, jqXHR) {
        console.log("Response: " + data.responseText);
        console.log("Success!!!!");
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(":'-(");
        console.log("Response: " + jqXHR.responseText);
        console.log("HTTP stats: " + textStatus);
        console.log("error: " + errorThrown);
      },
      complete: function(jqXHR, textStatus) {
        console.log("Complete");
        console.log(textStatus);
    }
    });
  };       
```

## Find a Single Card

## Update a Card

You can update different attributes on a card such as card name, card description, card type or properties that are available on card via card resource API.
### How to update different kinds of properties

Managed/Unmanaged text: Use the text value of the value you would like to update the value to

Managed/Unmanaged numbers: Use the numeric value you would like to set the property to

Date: Use the date string in the project date format

Team member: Use the id of the user you would like to update the value to. You can obtain the user id by looking up the user using the API.
Card: Use the card number of the card you would like to update the value to.

## Get Card Description as HTML

From a card resource, follow the rendered_description resource to retrieve the rendered description for a card as HTML. Notice that rendered_description does not contain any styling information. You may reference the Mingle stylesheet, found on every Mingle page, when displaying rendered_description if you would like it to be styled as is in Mingle. If there are macros in the description, the macros will be rendered as part of the rendered_description. Any JavaScript in the rendered description will be removed from rendered_description. 

# Properties

## Metadata 

## Create a Card Property

## Get Property Definitions for a Project

# Transitions

## Metadata

## Get Executable Transitions

## Get All Transitions for a Project

## Execute a Transition

> To authorize, use this code:

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
```

```python
import 'kittn'

api = Kittn.authorize('meowmeowmeow')
```

```curl
# With curl, you can just pass the correct header with each request
curl "api_endpoint_here"
  -H "Authorization: meowmeowmeow"
```

> Make sure to replace `meowmeowmeow` with your API key.

Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our [developer portal](http://example.com/developers).

Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: meowmeowmeow`

<aside class="notice">
You must replace `meowmeowmeow` with your personal API key.
</aside>

# Pages

## Create a Page

## Find all Pages in a Project

## Update a Page

# MQL

## JSON/JSONP/XML

## execute_mql

# Events

## Metadata 

### Feed/Entries

### Cards

### Pages

### Objectives

### Revisions

### Feed Correction

## Feed Navigation

## List of Events from a Project

## Get Objective Related Events from Planner

# Favorites

## Metadata

## Get All Team Favorites

# Objectives

## Metadata
## Get a Single Objective within Planner
## Get All Objectives within a Plan
## Update a Planned Objective
## Create an Objective within a Plan
## Delete an Objective

# Comments and Murmurs

## Metadata
## Post a Murmur

# SCM Configuration

## Metadata
## On Site Customers
### SVN
### Mercurial
### Perforce
### Git

## SaaS Customers
### Github

# Users

# Version Info

The request locates the version number and the revision number for the Mingle instance you are currently using. All Mingle user types can get this information via API.

```curl 
curl -X GET 'http://sarah:p@localhost:8080/api/v2/info.xml'
<?xml version="1.0" encoding="UTF-8"?>
<info>
  <version>version_number</version>
  <revision>revision_number</revision>
</info>
```


# Tips and Tricks

* The URL to POST/PUT/DELETE may be slightly different from the GET URL
* To POST a resource to a URL, the resource should be sent as a parameters
* Boolean values can be sent as the strings 'true' or 'false'
* Mingle only supports ActiveResource 2.0.2 or later.
* To specify parameters as shown in the examples above you will have to set the request header for Content-Type to "application/x-www-form-urlencoded".
* If you are injecting a macro into a card description via the API, you must open and close the macro markup with {{ }}.
* If you are a Mingle or a project admin, you can update hidden properties as well.



## Get All Kittens

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get
```

```python
import 'kittn'

api = Kittn.authorize('meowmeowmeow')
api.kittens.get()
```

```curl
curl "http://example.com/api/kittens"
  -H "Authorization: meowmeowmeow"
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Isis",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/kittens`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>

## Get a Specific Kitten

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get(2)
```

```python
import 'kittn'

api = Kittn.authorize('meowmeowmeow')
api.kittens.get(2)
```

```shell
curl "http://example.com/api/kittens/3"
  -H "Authorization: meowmeowmeow"
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "name": "Isis",
  "breed": "unknown",
  "fluffiness": 5,
  "cuteness": 10
}
```

This endpoint retrieves a specific kitten.

<aside class="warning">If you're not using an administrator API key, note that some kittens will return 403 Forbidden if they are hidden for admins only.</aside>

### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the cat to retrieve

