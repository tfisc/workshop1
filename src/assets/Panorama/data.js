var APP_DATA = {
  "scenes": [
    {
      "id": "0-parking-croix-verte",
      "name": "Parking Croix-Verte",
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
          "target": "2-extrieur-btiment-croix-verte"
        },
        {
          "yaw": 2.2017759246765563,
          "pitch": -0.02819408963827641,
          "rotation": 0,
          "target": "5-extrieur-btiment-apothicaire"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.211450680829551,
          "pitch": 0.08348946835175752,
          "title": "Batiment Apothicaire",
          "text": "<span style=\"color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: small; background-color: rgb(255, 255, 255);\">437 Avenue des Apothicaires, 34090 Montpellier</span>"
        }
      ]
    },
    {
      "id": "1-salle-de-cours",
      "name": "Salle de cours",
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
          "target": "4-hall-dentre-croix-verte"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-extrieur-btiment-croix-verte",
      "name": "Extérieur bâtiment Croix-Verte",
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
          "target": "4-hall-dentre-croix-verte"
        },
        {
          "yaw": -1.4700183158286482,
          "pitch": 0.05445820443200233,
          "rotation": 0.7853981633974483,
          "target": "0-parking-croix-verte"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-caftria",
      "name": "Cafétéria",
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
          "target": "4-hall-dentre-croix-verte"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.274708451325912,
          "pitch": 0.0955670220965672,
          "title": "Toilettes",
          "text": "<div><br></div>"
        }
      ]
    },
    {
      "id": "4-hall-dentre-croix-verte",
      "name": "Hall d'entrée Croix-Verte",
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
          "target": "3-caftria"
        },
        {
          "yaw": -1.3661237845894636,
          "pitch": 0.11010811194278602,
          "rotation": 0.7853981633974483,
          "target": "1-salle-de-cours"
        },
        {
          "yaw": 0.06851642152093618,
          "pitch": 0.4461754821384787,
          "rotation": 0,
          "target": "2-extrieur-btiment-croix-verte"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-extrieur-btiment-apothicaire",
      "name": "Extérieur bâtiment Apothicaire",
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
          "target": "0-parking-croix-verte"
        },
        {
          "yaw": 0.013483540861278343,
          "pitch": 0.1543569114872856,
          "rotation": 0,
          "target": "6-intrieur-btiment-apothicaire"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.315673688965804,
          "pitch": -0.09153111088305899,
          "title": "Batiment Croix-Verte",
          "text": "1027 rue de la Croix-Verte, 34090 Montpellier"
        }
      ]
    },
    {
      "id": "6-intrieur-btiment-apothicaire",
      "name": "Intérieur bâtiment Apothicaire",
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
          "target": "5-extrieur-btiment-apothicaire"
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
      "infoHotspots": []
    },
    {
      "id": "7-administration",
      "name": "Administration",
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
          "target": "6-intrieur-btiment-apothicaire"
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
      "name": "MYDIL",
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
          "target": "6-intrieur-btiment-apothicaire"
        }
      ],
      "infoHotspots": []
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
