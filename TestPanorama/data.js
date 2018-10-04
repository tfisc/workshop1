var APP_DATA = {
  "scenes": [
    {
      "id": "0-parking",
      "name": "parking",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1639,
      "initialViewParameters": {
        "yaw": -0.9169437275524803,
        "pitch": 0.20179994541510027,
        "fov": 1.3487598040662003
      },
      "linkHotspots": [
        {
          "yaw": 1.47053781274679,
          "pitch": 0.033835923367776743,
          "rotation": 0.7853981633974483,
          "target": "2-exterieurbatiment"
        },
        {
          "yaw": 2.2017759246765563,
          "pitch": -0.02819408963827641,
          "rotation": 0,
          "target": "5-exterieurbatimentapoth"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4877649387571728,
          "pitch": -0.07543596382073048,
          "title": "Entrée extérieure",
          "text": ""
        },
        {
          "yaw": 2.288380611828096,
          "pitch": -0.05984342142048149,
          "title": "Batiment Apothicaire",
          "text": "<span style=\"color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: small; background-color: rgb(255, 255, 255);\">437 Avenue des Apothicaires, 34090 Montpellier</span>"
        }
      ]
    },
    {
      "id": "1-salledecours",
      "name": "salleDeCours",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1707,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1984810325524693,
          "pitch": 0.03506605447018707,
          "rotation": 1.5707963267948966,
          "target": "4-hautescalier"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.2897167461081436,
          "pitch": -0.058992702490265,
          "title": "Hall d'entrée",
          "text": ""
        }
      ]
    },
    {
      "id": "2-exterieurbatiment",
      "name": "exterieurBatiment",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1648.5,
      "initialViewParameters": {
        "yaw": -0.6282592402659102,
        "pitch": 0.10572309922498846,
        "fov": 1.3487598040662003
      },
      "linkHotspots": [
        {
          "yaw": 0.031755433456361004,
          "pitch": 0.09672481452224879,
          "rotation": 1.5707963267948966,
          "target": "4-hautescalier"
        },
        {
          "yaw": -1.4700183158286482,
          "pitch": 0.05445820443200233,
          "rotation": 0.7853981633974483,
          "target": "0-parking"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4165731036679219,
          "pitch": -0.027471683355766885,
          "title": "Parking",
          "text": ""
        },
        {
          "yaw": 0.10824958695186915,
          "pitch": 0.0002884884254470421,
          "title": "Hall d'entrée",
          "text": ""
        }
      ]
    },
    {
      "id": "3-cafet",
      "name": "Cafet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1729,
      "initialViewParameters": {
        "yaw": 2.513274122871838,
        "pitch": 0.33887567270376096,
        "fov": 1.3487598040662003
      },
      "linkHotspots": [
        {
          "yaw": -1.3619772635433556,
          "pitch": 0.20864956210404095,
          "rotation": 1.5707963267948966,
          "target": "4-hautescalier"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2598255555722204,
          "pitch": 0.11447469534811461,
          "title": "Hall d'entrée",
          "text": ""
        }
      ]
    },
    {
      "id": "4-hautescalier",
      "name": "hautEscalier",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1677.5,
      "initialViewParameters": {
        "yaw": 0.21482450473565962,
        "pitch": 0.6331677969088325,
        "fov": 1.3487598040662003
      },
      "linkHotspots": [
        {
          "yaw": 1.7881901697863416,
          "pitch": 0.2182244113797136,
          "rotation": 0,
          "target": "3-cafet"
        },
        {
          "yaw": -1.36612379245717,
          "pitch": 0.11010810395521098,
          "rotation": 0.7853981633974483,
          "target": "1-salledecours"
        },
        {
          "yaw": 0.06851642152093618,
          "pitch": 0.4461754821384787,
          "rotation": 0,
          "target": "2-exterieurbatiment"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.846289588831425,
          "pitch": 0.09797760182105186,
          "title": "Cafétaria",
          "text": ""
        },
        {
          "yaw": 0.11235394066900284,
          "pitch": 0.35397085852236465,
          "title": "Extérieur",
          "text": ""
        },
        {
          "yaw": -1.348879712959329,
          "pitch": 0.038089549692259084,
          "title": "Salle de cours",
          "text": ""
        }
      ]
    },
    {
      "id": "5-exterieurbatimentapoth",
      "name": "exterieurBatimentApoth",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1660,
      "initialViewParameters": {
        "yaw": -0.4431852447288396,
        "pitch": -0.04050123132202543,
        "fov": 1.3487598040662003
      },
      "linkHotspots": [
        {
          "yaw": 2.3111551681903464,
          "pitch": 0.012094694418124163,
          "rotation": 0,
          "target": "0-parking"
        },
        {
          "yaw": 0.013483540861278343,
          "pitch": 0.1543569114872856,
          "rotation": 0,
          "target": "6-interieurbatimentapoth"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3526467937903153,
          "pitch": -0.05311244968975082,
          "title": "Batiment Croix-Verte",
          "text": "1027 rue de la Croix-Verte, 34090 Montpellier"
        },
        {
          "yaw": 0.08482705233432242,
          "pitch": 0.0908026724526465,
          "title": "Hall d'entrée",
          "text": ""
        }
      ]
    },
    {
      "id": "6-interieurbatimentapoth",
      "name": "interieurBatimentApoth",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1693,
      "initialViewParameters": {
        "yaw": -0.6269792910092349,
        "pitch": 0.18812594962982843,
        "fov": 1.3487598040662003
      },
      "linkHotspots": [
        {
          "yaw": -1.531566662941092,
          "pitch": 0.1157146758468599,
          "rotation": 0,
          "target": "5-exterieurbatimentapoth"
        },
        {
          "yaw": 0.21818205822918912,
          "pitch": 0.04162399803779948,
          "rotation": 0.7853981633974483,
          "target": "7-administration"
        },
        {
          "yaw": 1.6952521945730243,
          "pitch": 0.24455463436041036,
          "rotation": 0,
          "target": "8-mydil"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4975745844763573,
          "pitch": 0.08290142151948388,
          "title": "Extérieur&nbsp;",
          "text": ""
        },
        {
          "yaw": 0.3189456751257431,
          "pitch": -0.020717519438514742,
          "title": "Administration",
          "text": ""
        },
        {
          "yaw": 1.7559164842053514,
          "pitch": 0.1760150086240415,
          "title": "MYDIL",
          "text": ""
        }
      ]
    },
    {
      "id": "7-administration",
      "name": "administration",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680.5,
      "initialViewParameters": {
        "yaw": -0.6252492468118067,
        "pitch": 0.3776932285753194,
        "fov": 1.3487598040662003
      },
      "linkHotspots": [
        {
          "yaw": -2.989806488017054,
          "pitch": 0.8236631093469242,
          "rotation": 0.7853981633974483,
          "target": "6-interieurbatimentapoth"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.8518088423222547,
          "pitch": 0.7987796230534041,
          "title": "Hall d'entrée",
          "text": ""
        }
      ]
    },
    {
      "id": "8-mydil",
      "name": "myDil",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1719,
      "initialViewParameters": {
        "yaw": 3.043602656611144,
        "pitch": -0.021304024230952123,
        "fov": 1.3487598040662003
      },
      "linkHotspots": [
        {
          "yaw": 2.1647129153542455,
          "pitch": 0.16893538773932093,
          "rotation": 0,
          "target": "6-interieurbatimentapoth"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.257656148585971,
          "pitch": 0.12392515918682712,
          "title": "Hall d'entrée",
          "text": ""
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
