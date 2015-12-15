POST /test/restro/_search
{
  "query": {
    "filtered": {
      "query": {
        "nested": {
          "path": "dishes",
          "query": {
            "filtered": {
              "filter": {
                "term": {
                  "dishes.tags": "seafood"
                }
              }
            }
          },
          "inner_hits": {}
        }
      },
      "filter": {
        "geo_distance": {
          "distance": 1000,
          "distance_unit": "km",
          "location": {
            "lat": 40.780621,
            "lon": -73.969234
          }
        }
      }
    }
  }
}
POST /test/restro/_search
{
  "filter": {
    "bool": {
      "must": [
        {
          "query": {
            "query_string": {
              "default_field": "address.country",
              "query": "United States",
              "default_operator": "AND"
            }
          }
        },
        {
          "query": {
            "query_string": {
              "default_field": "address.region",
              "query": "New York",
              "default_operator": "AND"
            }
          }
        },
        {
          "query": {
            "query_string": {
              "default_field": "address.locality",
              "query": "New York",
              "default_operator": "AND"
            }
          }
        },
        {
          "query": {
            "query_string": {
              "default_field": "address.neighbourhood",
              "query": "tribeca"
            }
          }
        }
      ]
    }
  }
}
POST /test/restro/_search
{
  "filter": {
    "bool": {
      "must": [
        {
          "query": {
            "query_string": {
              "default_field": "address.country",
              "query": "United States",
              "default_operator": "AND"
            }
          }
        },
        {
          "query": {
            "query_string": {
              "default_field": "address.region",
              "query": "New York",
              "default_operator": "AND"
            }
          }
        },
        {
          "query": {
            "query_string": {
              "default_field": "address.locality",
              "query": "New York",
              "default_operator": "AND"
            }
          }
        },
        {
          "query": {
            "query_string": {
              "default_field": "address.neighbourhood",
              "query": "tribeca"
            }
          }
        }
      ]
    }
  }
}
POST /test/restro/_search
{
    "size": 7,
    "sort": {
      "_script": {
        "script_file": "random",
        "type": "number",
        "params": {},
        "order": "asc"
      }
    },
    "filter": {
      "bool": {
        "must": [
          {
            "geo_distance": {
              "distance": "1000m",
              "location": { 
                "lat": 40.780621,
                "lon": -73.969234
              }
            }
          }
        ]
      }
    }
  }
POST /test/restro/_search
{
    "query": {
        "bool": {
            "must": [{
                "match": {
                   "name": "burger"
                } }],
            "must_not": [
               {
                   "match": {
                      "meal": "dinner"
                   }
               }
            ]
        }
    }
}
POST /test/restro/_search
{
    "query": {
      "filtered": {
        "query": {
          "nested": {
            "path": "dishes",
            "query": {
              "filtered": {
                "filter": {
                  "term": {
                    "dishes.cuisine": "steakhouses"
                  }
                }
              }
            },
            "inner_hits": {}
          }
        },
        "filter": {
          "bool": {
            "must": [
              {
                "query": {
                  "query_string": {
                    "default_field": "address.country",
                    "query": "United States",
                    "default_operator": "AND"
                  }
                }
              },
              {
                "query": {
                  "query_string": {
                    "default_field": "address.region",
                    "query": "New York",
                    "default_operator": "AND"
                  }
                }
              },
              {
                "query": {
                  "query_string": {
                    "default_field": "address.locality",
                    "query": "New York",
                    "default_operator": "AND"
                  }
                }
              }
            ]
          }
        }
      }
    }
}
POST /test/restro/_search
{
    "size": 7,
    "sort": {
      "_script": {
        "script_file": "random",
        "type": "number",
        "params": {},
        "order": "asc"
      }
    },
    "filter": {
      "bool": {
        "must": [
          {
            "query": {
              "query_string": {
                "default_field": "address.country",
                "query": "United States",
                "default_operator": "AND"
              }
            }
          },
          {
            "query": {
              "query_string": {
                "default_field": "address.region",
                "query": "New York",
                "default_operator": "AND"
              }
            }
          },
          {
            "query": {
              "query_string": {
                "default_field": "address.locality",
                "query": "New York",
                "default_operator": "AND"
              }
            }
          },
          {
            "terms": {
              "available_veg_type": [
                1
              ]
            }
          }
        ],
        "must_not": [
          {
            "ids": {
              "values": [
                "543917c0c0e5a407f0f544e8",
                "543917c0c0e5a407f0f54a2e",
                "543917c0c0e5a407f0f543f3",
                "543917c0c0e5a407f0f547a5",
                "543917c0c0e5a407f0f5459e",
                "543917c0c0e5a407f0f5464b",
                "543917c0c0e5a407f0f545ca"
              ]
            }
          }
        ]
      }
    }
  }
GET /test/restro/_mapping
GET /_status
POST /test/restro/_search
{
    "query": {
      "filtered": {
        "query": {
          "nested": {
            "path": "dishes",
            "query": {
              "filtered": {
                "filter": {
                  "term": {
                    "dishes.ingredients": "chicken"
                  }
                }
              }
            },
            "inner_hits": {}
          }
        },
        "filter": {
          "bool": {
            "must": [
              {
                "query": {
                  "query_string": {
                    "default_field": "address.country",
                    "query": "United States",
                    "default_operator": "AND"
                  }
                }
              },
              {
                "query": {
                  "query_string": {
                    "default_field": "address.region",
                    "query": "New York",
                    "default_operator": "AND"
                  }
                }
              },
              {
                "query": {
                  "query_string": {
                    "default_field": "address.locality",
                    "query": "New York",
                    "default_operator": "AND"
                  }
                }
              }
            ]
          }
        }
      }
    },
    "from": 0
  }
POST /test/restro/_search
{
    "query": {
      "filtered": {
        "query": {
          "nested": {
            "path": "dishes",
            "query": {
              "query_string": {
                "default_field": "dishes.cuisine",
                "query": "chinese",
                "default_operator": "AND"
              }
            },
            "inner_hits": {}
          }
        },
        "filter": {
          "bool": {
            "must": [
              {
                "query": {
                  "query_string": {
                    "default_field": "address.country",
                    "query": "United States",
                    "default_operator": "AND"
                  }
                }
              },
              {
                "query": {
                  "query_string": {
                    "default_field": "address.region",
                    "query": "New York",
                    "default_operator": "AND"
                  }
                }
              },
              {
                "query": {
                  "query_string": {
                    "default_field": "address.locality",
                    "query": "New York",
                    "default_operator": "AND"
                  }
                }
              }
            ]
          }
        }
      }
    },
    "from": 4
  }
GET /autocomplete/suggest/_mapping
POST /test/restro/_search
{
    "query": {
      "filtered": {
        "query": {
          "nested": {
            "path": "dishes",
            "query": {
              "query_string": {
                "default_field": "dishes.cuisine",
                "query": "chinese",
                "default_operator": "AND"
              }
            },
            "inner_hits": {}
          }
        },
        "filter": {
          "bool": {
            "must": [
              {
                "query": {
                  "query_string": {
                    "default_field": "address.country",
                    "query": "United States",
                    "default_operator": "AND"
                  }
                }
              },
              {
                "query": {
                  "query_string": {
                    "default_field": "address.region",
                    "query": "New York",
                    "default_operator": "AND"
                  }
                }
              },
              {
                "query": {
                  "query_string": {
                    "default_field": "address.locality",
                    "query": "New York",
                    "default_operator": "AND"
                  }
                }
              }
            ]
          }
        }
      }
    },
    "from": 0
  }
POST /test/restro/_search
{
     "query": {
       "filtered": {
         "query": {
           "nested": {
             "path": "dishes",
             "query": {
                "bool": {
                  "must": [
                    {
                      "query_string": {
                        "default_field": "dishes.cuisine",
                        "query": "chinese",
                        "default_operator": "AND"
                      }
                    }
                  ],
                  "must_not": [
                    {
                      "terms": {
                        "dishes._id": [
                          "553e05b3acbf94330cfc79ee"
                        ]
                      }
                    }
                  ]
                }
             },
             "inner_hits": {}
           }
         },
         "filter": {
           "bool": {
             "must": [
               {
                 "query": {
                   "query_string": {
                     "default_field": "address.country",
                     "query": "United States",
                     "default_operator": "AND"
                   }
                 }
               },
               {
                 "query": {
                   "query_string": {
                     "default_field": "address.region",
                     "query": "New York",
                     "default_operator": "AND"
                   }
                 }
              },
               {
                 "query": {
                   "query_string": {
                     "default_field": "address.locality",
                     "query": "New York",
                     "default_operator": "AND"
                   }
                 }
               }
             ],
             "must_not": [
               {
                 "ids": {
                  "values": [
                     "543917c0c0e5a407f0f5449f",
                     "543917c0c0e5a407f0f54b9a"
                   ]
                 }
               }
             ]
           }
         }
       }
     },
     "from": 2
   }
POST /test/restro/_search
 {
    "query": {
      "filtered": {
        "query": {
          "nested": {
            "path": "dishes",
            "query": {
              "query_string": {
                "default_field": "dishes.ingredients",
                "query": "chicken",
                "default_operator": "AND"
              }
            },
            "inner_hits": {
              "size": 100
            }
          }
        },
        "filter": {
          "bool": {
            "must": [
              {
                "query": {
                  "query_string": {
                    "default_field": "address.country",
                    "query": "United States",
                    "default_operator": "AND"
                  }
                }
              },
              {
                "query": {
                  "query_string": {
                    "default_field": "address.region",
                    "query": "New York",
                    "default_operator": "AND"
                  }
                }
              },
              {
                "query": {
                  "query_string": {
                    "default_field": "address.locality",
                    "query": "New York",
                    "default_operator": "AND"
                  }
                }
              }
            ]
          }
        }
      }
    },
    "from": 0
  }

POST /hngre/merchants/_search
{
    "size": 5,
    "query": {
        "nested": {
           "path": "dishes",
           "query": {
               "match": {
                   "dishes.name":"Seafood Antonio"
               }
           },
           "inner_hits":{}
        }
    }
}

POST /hngre/merchants/_search
{
    "size": 5,
    "query": {
        "nested": {
           "path": "dishes",
           "query": {
               "query_string": {
                  "default_field": "dishes.name",
                  "query": "Seafood Antonio",
                  "default_operator": "AND"
               }
           },
           "inner_hits":{}
        }
    }
}