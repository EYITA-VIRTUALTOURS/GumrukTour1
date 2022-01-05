(function(){
    var script = {
 "start": "this.init(); this.set('mute', true); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_0868FEA9_2B83_5772_41C0_D83127A96B19.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "paddingRight": 0,
 "downloadEnabled": false,
 "height": "100%",
 "id": "rootPlayer",
 "horizontalAlign": "left",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41"
 ],
 "minHeight": 20,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "borderRadius": 0,
 "definitions": [{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -35.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08935580_2B83_B532_41BC_D9DDD950A54A"
},
{
 "movementMode": "constrained",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -7.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BA46217_2B83_AF5E_41AF_8B1DDDF66F7A"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 133.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B5418F8_2B83_BCD3_41BD_ACB4D3C91941"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 21.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_084D4608_2B83_B732_41C2_B4C33F4D93CC"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 162.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0FE786E5_2B83_B4FD_41C4_589F13706F82"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -173.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08B885C2_2B83_B537_4166_5BF95FF15046"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -35.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B23F308_2B83_AD33_4184_92C7B041AE84"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -84.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0FE9A6FD_2B83_B4D2_41B2_06DA5B9929FF"
},
{
 "thumbnailUrl": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_t.jpg",
 "label": "5",
 "id": "panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
   "backwardYaw": 132.02,
   "yaw": -90.35,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
   "backwardYaw": 132.02,
   "yaw": -72.23,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6",
   "backwardYaw": 44.43,
   "yaw": 38.46,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6",
   "backwardYaw": 44.43,
   "yaw": 33.66,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196",
   "backwardYaw": -175.02,
   "yaw": 169.27,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196",
   "backwardYaw": -175.02,
   "yaw": 160.4,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F372935F_E6DB_1912_41E1_A9A50BC3092A",
  "this.overlay_F3C35AC2_E6D9_EB72_41CB_52727B8D05DA",
  "this.overlay_F35B4673_E6D9_3B12_41E6_6D942D653E62",
  "this.overlay_F0B73EAE_E6C9_2B32_41BE_A45DB6F00C5F",
  "this.overlay_E7E3E5BF_F0B4_7253_41E9_81B0692BA6DB",
  "this.overlay_E7F1B50E_F0B4_3235_41E3_B4B9071911ED",
  "this.overlay_0FC5B01F_26A5_52FF_41B0_7808D734C1B0",
  "this.overlay_0DEF2030_26A7_32C1_4188_462804C97E2B",
  "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 127,
  "yaw": 8.94,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_0F5D8743_2B83_B535_41B4_F8B23B849FC2"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 135.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F23A797_2B83_B55D_41BF_F559DC015879"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -104.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0AF0333A_2B83_AD56_41A0_0291718B8B9C"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -13.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08A995D4_2B83_B4D3_4180_354C7C879807"
},
{
 "thumbnailUrl": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_t.jpg",
 "label": "3",
 "id": "panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
   "backwardYaw": -123.45,
   "yaw": 86.9,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976",
   "backwardYaw": 0.5,
   "yaw": 169.83,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976",
   "backwardYaw": 0.5,
   "yaw": 175.79,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976",
   "backwardYaw": 0.5,
   "yaw": -170.47,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F4F0C3B9_E679_191E_41AD_D3ED7093F7DC",
  "this.overlay_F4CE9A68_E679_2B3E_41E4_186FFB14337C",
  "this.overlay_F23D53C9_E67F_797E_41DA_CEB9D31F7CB9",
  "this.overlay_F5F8AB23_E679_2932_41C6_B6096A418A96",
  "this.overlay_F57C432D_E67B_1936_41CE_C5BC49C02D77",
  "this.overlay_E5FE8C88_F17B_D23E_41DD_C0575B618CC1",
  "this.overlay_E593DD69_F17C_32FF_41DE_A8F0B4641D37",
  "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 129.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F8B171D_2B83_B54D_41B1_870088432EDA"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 21.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_087E661D_2B83_B752_41B6_7037EFDB87C6"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -21.64,
  "class": "PanoramaCameraPosition",
  "pitch": -4.2
 },
 "id": "panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_camera"
},
{
 "thumbnailUrl": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_t.jpg",
 "label": "IMG_20211213_160409_00_264",
 "id": "panorama_1489CC0C_1E74_9876_41BB_005113520ACA",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_148A5298_1E77_899E_419D_1D63F89160F9",
   "backwardYaw": 75.88,
   "yaw": -140.06,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6A50C55D_267D_FD40_41B9_C0BA77CF373F",
  "this.overlay_6B93E85C_267D_5341_41A4_9719CAFBB521",
  "this.panorama_1489CC0C_1E74_9876_41BB_005113520ACA_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_t.jpg",
 "label": "IMG_20211213_144415_00_189",
 "id": "panorama_15745C11_1E74_986E_4184_2C27856CB6C5",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124",
   "backwardYaw": -47.03,
   "yaw": 160.24,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124",
   "backwardYaw": -47.03,
   "yaw": 149.85,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_0234BEC2_26A5_4F41_41C2_DC8EC8BF2EF7",
  "this.overlay_03268BD5_26A5_3540_41B3_D90AE1444B6B",
  "this.panorama_15745C11_1E74_986E_4184_2C27856CB6C5_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 135.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0ED477A3_2B83_B575_41AD_1BD37922DCC7"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_camera"
},
{
 "thumbnailUrl": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_t.jpg",
 "label": "IMG_20211213_141856_00_163",
 "id": "panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A",
   "backwardYaw": -43.57,
   "yaw": 166.82,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A",
   "backwardYaw": -43.57,
   "yaw": 164.14,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_0E92D43B_1E8D_8892_41A6_A873BCAD19DF",
  "this.overlay_1132BCDF_1E8F_7993_41B9_6F206FA41C15",
  "this.panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -129.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F715FE9_2B83_54F5_41BF_D86453928D0E"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 18.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F517FC4_2B83_5533_41C2_93C1956DA250"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -134.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0EF3608E_2B83_AB4E_41BF_F935C85574D2"
},
{
 "thumbnailUrl": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_t.jpg",
 "label": "IMG_20211213_153214_00_224",
 "id": "panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD",
   "backwardYaw": -6.78,
   "yaw": 64.99,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E",
   "backwardYaw": -168.07,
   "yaw": 154.61,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_15748459_1E77_889E_4190_1EE592F648CB",
   "backwardYaw": 75.65,
   "yaw": -112.96,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1577B4D8_1E77_899E_41B7_969F6F12575C",
   "backwardYaw": 171.21,
   "yaw": 127.42,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92",
   "backwardYaw": -91.54,
   "yaw": -83.17,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92",
   "backwardYaw": -91.54,
   "yaw": -79.13,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1FAF4588_26E3_FDC1_41C1_67F072400456",
  "this.overlay_1CF64AAB_269D_F7C7_41C0_C8A42BEB565F",
  "this.overlay_1F60B48C_269F_33C1_41B8_2AEBAB7C89BF",
  "this.overlay_1C049837_269D_52CF_4193_1BE6C6338C48",
  "this.overlay_1DB1A4E3_26A2_F347_41A0_A2A74E5A847A",
  "this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_tcap0",
  "this.overlay_24CFF2E2_2B84_ACF6_41C5_5D1C043FC583",
  "this.overlay_245C716E_2B83_ADCF_41C3_9A4D994174FF",
  "this.overlay_3B73C0AC_2B8D_AB73_41B5_AE670EDE9451",
  "this.overlay_3B0316DD_2B8D_54CD_41C1_06A47AE69B0B",
  "this.overlay_3A3E187E_2B8C_BBCE_41AA_D462FF2B3BA3"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -47.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09DF640C_2B83_AB32_4193_9E59369C1F52"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -94.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F4E774E_2B83_B5CF_41A7_35718893D229"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -7.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0860F634_2B83_B753_41C2_744BA384A9C6"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -175.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B26F9C8_2B83_BD32_41A7_3999399A6527"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_14827FE7_1E74_97B2_4172_168011EC93C6_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 48.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B4DA926_2B83_BD7F_41BE_1893EBB6875B"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_148B8F42_1E74_B8F2_4195_88BE25966606_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 56.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09986447_2B83_AB3D_41C3_A61C92364A42"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -97.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B6B8965_2B83_BDF2_419E_50E8AA614A40"
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002",
   "camera": "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976",
   "camera": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA",
   "camera": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
   "camera": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977",
   "camera": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6",
   "camera": "this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "camera": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "camera": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87",
   "camera": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "media": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "camera": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "media": "this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A",
   "camera": "this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "media": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
   "camera": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "media": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
   "camera": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "media": "this.panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0",
   "camera": "this.panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "media": "this.panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258",
   "camera": "this.panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "media": "this.panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91",
   "camera": "this.panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "media": "this.panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D",
   "camera": "this.panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "media": "this.panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C",
   "camera": "this.panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "media": "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124",
   "camera": "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "media": "this.panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A",
   "camera": "this.panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "media": "this.panorama_1486C35F_1E74_8892_41BD_7A97DC18788E",
   "camera": "this.panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "media": "this.panorama_15745C11_1E74_986E_4184_2C27856CB6C5",
   "camera": "this.panorama_15745C11_1E74_986E_4184_2C27856CB6C5_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "media": "this.panorama_1486D626_1E74_88B2_418A_1B5A5850E43B",
   "camera": "this.panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "media": "this.panorama_148B8F42_1E74_B8F2_4195_88BE25966606",
   "camera": "this.panorama_148B8F42_1E74_B8F2_4195_88BE25966606_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "media": "this.panorama_1486CC94_1E74_9995_41B4_4B513680E8C1",
   "camera": "this.panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "media": "this.panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196",
   "camera": "this.panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "media": "this.panorama_1486031B_1E77_8893_41A4_C788B23EDBC4",
   "camera": "this.panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "media": "this.panorama_1575CF89_1E77_987E_4194_2F4225271FF5",
   "camera": "this.panorama_1575CF89_1E77_987E_4194_2F4225271FF5_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "media": "this.panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A",
   "camera": "this.panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "media": "this.panorama_15748459_1E77_889E_4190_1EE592F648CB",
   "camera": "this.panorama_15748459_1E77_889E_4190_1EE592F648CB_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "media": "this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB",
   "camera": "this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "media": "this.panorama_1577B4D8_1E77_899E_41B7_969F6F12575C",
   "camera": "this.panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "media": "this.panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92",
   "camera": "this.panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "media": "this.panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD",
   "camera": "this.panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "media": "this.panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913",
   "camera": "this.panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "media": "this.panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7",
   "camera": "this.panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 37)",
   "media": "this.panorama_1481B964_1E77_98B6_41B0_A76D7932C31E",
   "camera": "this.panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 37, 38)",
   "media": "this.panorama_148A5298_1E77_899E_419D_1D63F89160F9",
   "camera": "this.panorama_148A5298_1E77_899E_419D_1D63F89160F9_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38, 39)",
   "media": "this.panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399",
   "camera": "this.panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 39, 40)",
   "media": "this.panorama_1489D783_1E74_8872_41B2_143BBBD42CE1",
   "camera": "this.panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 40, 41)",
   "media": "this.panorama_14827FE7_1E74_97B2_4172_168011EC93C6",
   "camera": "this.panorama_14827FE7_1E74_97B2_4172_168011EC93C6_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 41, 42)",
   "media": "this.panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663",
   "camera": "this.panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 42, 43)",
   "media": "this.panorama_1482A27E_1E74_8892_4192_3388B028C3C0",
   "camera": "this.panorama_1482A27E_1E74_8892_4192_3388B028C3C0_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 43, 44)",
   "media": "this.panorama_1489CC0C_1E74_9876_41BB_005113520ACA",
   "camera": "this.panorama_1489CC0C_1E74_9876_41BB_005113520ACA_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 44, 45)",
   "media": "this.panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47",
   "camera": "this.panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 45, 46)",
   "media": "this.panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE",
   "camera": "this.panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 46, 47)",
   "media": "this.panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE",
   "camera": "this.panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 47, 48)",
   "media": "this.panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C",
   "camera": "this.panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 48, 0)",
   "media": "this.panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E",
   "camera": "this.panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 67.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_093A14FB_2B83_B4D6_41B0_B62729705A31"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -171.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BEDE195_2B83_AD52_41BC_E77A004E3F2B"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -10.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0825068A_2B83_B734_41C0_3EE49470F2AF"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_14867ECB_1E74_99F2_41B9_68414C867124_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 45.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B15B970_2B83_BDD3_41A5_B022689490B0"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 4.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0997343C_2B83_AB52_41C5_354A1C923389"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -10.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0803365E_2B83_B7CE_41BD_2AE6437D43D4"
},
{
 "thumbnailUrl": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_t.jpg",
 "label": "4",
 "id": "panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA",
   "backwardYaw": 86.9,
   "yaw": -123.45,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA",
   "backwardYaw": 86.9,
   "yaw": -118.7,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "backwardYaw": -168.19,
   "yaw": -3.27,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "backwardYaw": -168.19,
   "yaw": -7.1,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977",
   "backwardYaw": -90.35,
   "yaw": 132.02,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977",
   "backwardYaw": -90.35,
   "yaw": 149.22,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F255C89C_E647_3716_41D6_45837819D966",
  "this.overlay_F38CD3A1_E6C7_3931_41E1_0EB98EF0F045",
  "this.overlay_F2430522_E6D9_1932_41E0_AA4FB6421084",
  "this.overlay_F091E393_E6D9_7912_41EA_45A20199469E",
  "this.overlay_E49D9F8E_F14C_2E35_41E5_7B34560116A4",
  "this.overlay_E7523A64_F0B4_F6F6_41E1_7D70720821C7",
  "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -10.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08DDD52A_2B83_B577_41BA_E43B25DCDB08"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 162.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0FF7C6D0_2B83_B4D3_4188_03E3F173FA55"
},
{
 "thumbnailUrl": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_t.jpg",
 "label": "IMG_20211213_160525_00_267",
 "id": "panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_15748459_1E77_889E_4190_1EE592F648CB",
   "backwardYaw": -22.36,
   "yaw": -5.15,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6BF59429_267F_D2C3_41BE_B417861EA1E5",
  "this.overlay_6B6BD43C_267F_32C0_41BB_A735F65D00D4",
  "this.panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 16.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0EE847D4_2B83_B4D3_41A9_D892B2FE9B13"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 85.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0FC5A6BC_2B83_B753_41A2_D7A333B3B21A"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -55.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F11E00E_2B83_AB4E_41A5_2ED7B7AB7F1B"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 129.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0FBBC729_2B83_B575_41C2_F907E75AC871"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 132.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F2CE059_2B83_ABD2_41BD_9E447217053F"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -112.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B3279B4_2B83_BD53_41BE_EBF9980BD8F7"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -141.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B68F2BC_2B83_AF52_41BA_1CF7FF2F22B6"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -15.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BAF4225_2B83_AF72_41B0_742A36BC28BB"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -134.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0EC78075_2B83_ABD2_41AF_646C2C0F4DD5"
},
{
 "thumbnailUrl": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_t.jpg",
 "label": "IMG_20211213_152603_00_215",
 "id": "panorama_1575CF89_1E77_987E_4194_2F4225271FF5",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1486031B_1E77_8893_41A4_C788B23EDBC4",
   "backwardYaw": 67.41,
   "yaw": 155.22,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1486031B_1E77_8893_41A4_C788B23EDBC4",
   "backwardYaw": 67.41,
   "yaw": 141.19,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E",
   "backwardYaw": 4.51,
   "yaw": -110.67,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E",
   "backwardYaw": 4.51,
   "yaw": -121.59,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_174B1595_26ED_3DC3_41C2_7E0C90AE2C99",
  "this.overlay_11181314_26E5_76C0_41BC_7746801FF502",
  "this.overlay_13D60B86_26E3_55C1_41BB_BDB5DAF44707",
  "this.overlay_1E082B83_26E3_55C7_417A_02383C22FEF0",
  "this.panorama_1575CF89_1E77_987E_4194_2F4225271FF5_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 59.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B426262_2B83_AFF7_41BA_0760FFC23EFF"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -123.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B477256_2B83_AFDF_419D_544F268D648A"
},
{
 "thumbnailUrl": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_t.jpg",
 "label": "IMG_20211213_142929_00_171",
 "id": "panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C",
   "backwardYaw": -44.54,
   "yaw": -38.38,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C",
   "backwardYaw": -44.54,
   "yaw": -44.97,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258",
   "backwardYaw": -23.35,
   "yaw": 152.63,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D",
   "backwardYaw": -44.27,
   "yaw": 6.25,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D",
   "backwardYaw": -44.27,
   "yaw": 17.96,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_0BA3D162_1E95_88B2_41AE_068E0EA93CBC",
  "this.overlay_0A28B6EB_1E97_89B3_41B5_A43C99AE1860",
  "this.overlay_0BDAA68E_1E94_8872_4191_33C2C7105217",
  "this.overlay_0B237946_1E8D_98F2_41B0_56380EE829D0",
  "this.overlay_37F88095_2665_33C0_41A9_A2AF77479427",
  "this.overlay_357BAB4F_2663_555F_41C3_27DD232344B7",
  "this.overlay_30BBDF18_2662_CEC1_41C1_A4D875BA5FFF",
  "this.panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 157.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F6F8766_2B83_B5FF_41C1_9FE9B1DB84F7"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -79.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F6CC003_2B83_AB36_41A7_80AEAF733B6A"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 45.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B1F397C_2B83_BDD3_4173_3290008C73A2"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -24.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B9211AF_2B83_AD4E_418F_AEA2BFF2D0BA"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 83.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A36A3E6_2B83_ACFE_41C5_050920479272"
},
{
 "thumbnailUrl": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_t.jpg",
 "label": "IMG_20211213_142702_00_168",
 "id": "panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "backwardYaw": 124.37,
   "yaw": 155.27,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "backwardYaw": 124.37,
   "yaw": 156.39,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91",
   "backwardYaw": 152.63,
   "yaw": -23.35,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91",
   "backwardYaw": 152.63,
   "yaw": -21.63,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_0FFF6C36_1E97_9895_4168_01A02580624D",
  "this.overlay_0A675D36_1E9C_F892_418A_F65CB75C6C75",
  "this.overlay_0A73F491_1E9C_886E_41B1_AB5BFAE5D417",
  "this.overlay_0BAD9804_1E9C_9876_41B0_968E90C1FF9E",
  "this.overlay_0B7EE763_1E8F_88B2_41BE_711651AE9164",
  "this.overlay_0B6876F0_1E8C_89AE_4185_9CB04147660E",
  "this.panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -98.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B705288_2B83_AF33_41BB_808A837765EA"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -59.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0E9837DF_2B83_B4CD_41BB_04A4486C314E"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 173.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0ADA1322_2B83_AD76_41B1_2D64250BC446"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -112.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B0809A8_2B83_BD72_41C0_FFF6F4FFD613"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 111.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BB098C2_2B83_BB37_41B9_4E9EA129EA70"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 11.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0ACE532E_2B83_AD4E_41C4_BFD04B88A826"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 127,
  "yaw": 60.87,
  "pitch": -0.06,
  "class": "PanoramaCameraPosition"
 },
 "id": "panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 136.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0963C4AB_2B83_AB75_41BF_88F330CAF46E"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 72.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08E2556A_2B83_B5F7_41A0_87AC4C7E9C19"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -123.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B52423C_2B83_AF53_41C1_3CE0EF025E53"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 21.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F78BFF6_2B83_54DE_41B2_7A9CC6DDAD2D"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 54.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_095F047B_2B83_ABD5_41B0_B4C732B7827C"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 135.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F025780_2B83_B533_41B0_669EAD06FCD8"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 156.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F31978C_2B83_B533_41C1_9628A636DFF4"
},
{
 "thumbnailUrl": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_t.jpg",
 "label": "IMG_20211213_160202_00_261",
 "id": "panorama_1482A27E_1E74_8892_4192_3388B028C3C0",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_14827FE7_1E74_97B2_4172_168011EC93C6",
   "backwardYaw": -125.48,
   "yaw": -158.52,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14827FE7_1E74_97B2_4172_168011EC93C6",
   "backwardYaw": -125.48,
   "yaw": 164.8,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6DA57850_2665_3341_41BD_FD8622F38D95",
  "this.overlay_6D19DA9B_2663_37C7_41C0_33FB8EF81579",
  "this.overlay_6B0EBCC5_2663_D340_41A6_C05335720DF0",
  "this.panorama_1482A27E_1E74_8892_4192_3388B028C3C0_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 12.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B03A993_2B83_BD56_41A2_9845F16342A8"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -175.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B672950_2B83_BDD2_4180_6F9478B0248F"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_34B7404E_2B83_ABCE_41C2_32DA1231AC5E",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_0868FEA9_2B83_5772_41C0_D83127A96B19",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1489CC0C_1E74_9876_41BB_005113520ACA_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 165.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0E8A47EB_2B83_B4F5_41C4_865EC35090E9"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 4.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09E4A430_2B83_AB52_41B7_307B1410E5C6"
},
{
 "thumbnailUrl": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_t.jpg",
 "label": "IMG_20211213_155309_00_246",
 "id": "panorama_148A5298_1E77_899E_419D_1D63F89160F9",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_15748459_1E77_889E_4190_1EE592F648CB",
   "backwardYaw": -74.99,
   "yaw": -128,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399",
   "backwardYaw": -161.49,
   "yaw": -158.94,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1489CC0C_1E74_9876_41BB_005113520ACA",
   "backwardYaw": -140.06,
   "yaw": 75.88,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14827FE7_1E74_97B2_4172_168011EC93C6",
   "backwardYaw": -87.98,
   "yaw": 50.97,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_65647BE7_269E_D54F_41B7_629125A61CC1",
  "this.overlay_62C8C104_269F_32C1_41C2_A9AF28E3AEB1",
  "this.overlay_65434C2F_269E_D2DF_4140_B9AE01C3003E",
  "this.overlay_63CEDADD_269D_3743_4199_D125B601FADC",
  "this.overlay_63D0140D_2663_F2C0_41A8_E8416B3FF653",
  "this.overlay_6050BC84_2663_53C1_41BF_0E9ED7433BFB",
  "this.overlay_60DB1D18_2665_72C1_41A1_F6926ED3FDA5",
  "this.overlay_6006440C_2665_D2C1_4182_57740D37C70A",
  "this.panorama_148A5298_1E77_899E_419D_1D63F89160F9_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -25.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B8AE8AB_2B83_BB76_41C5_19AD99EEF329"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_34B7404E_2B83_ABCE_41C2_32DA1231AC5E",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_0868BEA9_2B83_5772_41B5_136126A92EF2",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -141.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B6E32B0_2B83_AF52_41AF_7FBCF969DB37"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -134.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0ECE5081_2B83_AB32_41BB_3F523DDD9C4E"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -93.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0FE2BF4B_2B83_5535_41C4_D96F4B82BFEE"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -156.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F99C712_2B83_B557_41AE_3DDCD2A110A2"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -9.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B7C5945_2B83_BD32_41B5_FD3981382334"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1575CF89_1E77_987E_4194_2F4225271FF5_camera"
},
{
 "thumbnailUrl": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_t.jpg",
 "label": "IMG_20211213_143325_00_177",
 "id": "panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91",
   "backwardYaw": -38.38,
   "yaw": -44.54,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91",
   "backwardYaw": -38.38,
   "yaw": -26.48,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D",
   "backwardYaw": 44.68,
   "yaw": -107.32,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D",
   "backwardYaw": 44.68,
   "yaw": -101.99,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_331286A3_2663_DFC7_41AC_82F5673DDADA",
  "this.overlay_320D0E69_2663_4F40_41BA_6342F1FF9D61",
  "this.overlay_3205C2D0_2665_5741_41AD_C95213C61B34",
  "this.overlay_33E9759D_2667_7DC3_41A8_318056AD025F",
  "this.overlay_313BAF84_2663_4DC1_41B9_9E1B3E4DDFC9",
  "this.panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 11.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B4B026F_2B83_AFCC_41B4_D32A209C9CDE"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -115.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B76D27B_2B83_AFD5_41BA_EB762F43BDA6"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BBF2201_2B83_AF32_4172_FD94A1123B1C"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -24.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B9C71BA_2B83_AD56_41B0_004509CE6712"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -135.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A7BD3B5_2B83_AD52_41A9_5F85A756EB61"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 37.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BAAC8ED_2B83_BCF2_41C1_EAD0C6431BDC"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 85.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0FD596A5_2B83_B77D_41AE_47A70F852F1C"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -18.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B72E93B_2B83_BD56_4193_0886B7DE1163"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -24.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0EC5B7AF_2B83_B54D_4180_B887389742CC"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 11.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F9F7F78_2B83_55D2_41BA_6FD99C26118E"
},
{
 "thumbnailUrl": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_t.jpg",
 "label": "10",
 "id": "panorama_E3322B6E_F174_36F2_41E8_9261080F3A87",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": 135.51,
   "yaw": -142.82,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": 135.51,
   "yaw": -145.22,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": 135.51,
   "yaw": -146.95,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
   "backwardYaw": 144.32,
   "yaw": -131.41,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "backwardYaw": -1.78,
   "yaw": 163.66,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E91B0BE8_F0D4_35FE_41EB_904E45241F77",
  "this.overlay_EB523FB0_F0D4_EE6E_41D8_151ABE741474",
  "this.overlay_E89D3040_F0D5_D22E_41B9_1BDC16562082",
  "this.overlay_EBD507BE_F0D4_5E52_41E7_D00851EA4F8A",
  "this.overlay_E51B41DF_F263_324C_41E9_811B3E6A0353",
  "this.overlay_EAFA5D33_F263_13D4_41EB_CE40535C65B9",
  "this.overlay_EA43D0D2_F221_1254_41E8_3F262F23FABA",
  "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -172.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F38704C_2B83_AB32_41AB_821B2BD73B73"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 12.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B59590F_2B83_BD4D_41C5_7FFB5871F299"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 88.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A878360_2B83_ADF2_41C1_9ACB4F979065"
},
{
 "thumbnailUrl": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_t.jpg",
 "label": "9",
 "id": "panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258",
   "backwardYaw": 155.27,
   "yaw": 124.37,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258",
   "backwardYaw": 155.27,
   "yaw": 121.97,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": -163.05,
   "yaw": -68.96,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": -163.05,
   "yaw": -62.54,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
   "backwardYaw": 120.71,
   "yaw": -55.5,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "backwardYaw": -14.93,
   "yaw": 172.21,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "backwardYaw": -14.93,
   "yaw": 165.05,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "backwardYaw": -14.93,
   "yaw": -171.84,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87",
   "backwardYaw": 163.66,
   "yaw": -1.78,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87",
   "backwardYaw": 163.66,
   "yaw": 5.04,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E65A9820_F0D4_D26D_4190_88B35F159298",
  "this.overlay_E998D320_F0DC_D66D_41B4_B90D91064136",
  "this.overlay_EAA49BC9_F0DC_363F_41EA_7CD00897199A",
  "this.overlay_EBA81ADA_F0DC_D7DD_41BD_F1BBD5CF5CED",
  "this.overlay_EAE1CF24_F21F_2FFC_41CD_4AC7A2B73E22",
  "this.overlay_E50BD41B_F21F_31D4_41C0_47B69F79630C",
  "this.overlay_EBC4A709_F221_1FB5_41C7_B8AEF9C70B64",
  "this.overlay_EA4CD800_F221_31B3_41E0_CADB55C030DA",
  "this.overlay_EB8EB2F5_F223_165D_41D5_B3AA429062A3",
  "this.overlay_0E171665_1E8C_88B7_41A4_691F8391419F",
  "this.overlay_0FCF3326_1E94_88B2_41B5_5CCB457A79D8",
  "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -93.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0FFB7F34_2B83_5552_41C1_8FB30E869812"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -47.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A2CC401_2B83_AB32_41A9_E42B4617DF5F"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_camera"
},
{
 "thumbnailUrl": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_t.jpg",
 "label": "IMG_20211213_154622_00_236",
 "id": "panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913",
   "backwardYaw": -120.33,
   "yaw": 161.54,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7",
   "backwardYaw": -168.7,
   "yaw": 52.25,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB",
   "backwardYaw": 64.99,
   "yaw": -6.78,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1BAAC540_26AD_5D41_41BA_22C81302DF56",
  "this.overlay_18F8AE1C_26AD_CEC1_41A2_802328D40BEF",
  "this.overlay_18B7CD5B_26AF_4D47_41C0_D70060F221D6",
  "this.overlay_19E115BC_26AE_DDC1_419D_0B43204BD039",
  "this.overlay_19D36D87_26AD_4DCF_41BC_8950DB7366E6",
  "this.overlay_66DA6A0C_26A3_36C1_41AD_E6B89A8773AE",
  "this.panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -135.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A6F53C0_2B83_AD32_41C4_35E5BE0B690F"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 111.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BB698B5_2B83_BB5D_4190_C2B3B0752070"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 89.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F860F8C_2B83_5532_419C_6AE8B0C38FA8"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_camera"
},
{
 "thumbnailUrl": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_t.jpg",
 "label": "IMG_20211213_153350_00_225",
 "id": "panorama_1577B4D8_1E77_899E_41B7_969F6F12575C",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB",
   "backwardYaw": 127.42,
   "yaw": 171.21,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB",
   "backwardYaw": 127.42,
   "yaw": -172.84,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1D9B68C3_26A5_3347_41B5_594713AB9363",
  "this.overlay_1AE4EBF3_26A5_D547_41C3_12DA1BAB7140",
  "this.overlay_1A39170B_26A7_3EC7_41BD_E06F542DB151",
  "this.panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 133.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B5FE903_2B83_BD35_41C2_9E8BD917CE1E"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 172.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08CE0541_2B83_B535_418D_605C60797F13"
},
{
 "thumbnailUrl": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_t.jpg",
 "label": "14",
 "id": "panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": 45.02,
   "yaw": 131.26,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": 45.02,
   "yaw": 110.41,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": 45.02,
   "yaw": 133.54,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
   "backwardYaw": 82.62,
   "yaw": -167.55,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "backwardYaw": -55.5,
   "yaw": 120.71,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "backwardYaw": -55.5,
   "yaw": 122.11,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E1218EF8_F221_EE54_41EA_CEEFCF71EEBF",
  "this.overlay_E17FDDD4_F221_1253_41CE_EFDE082CE36C",
  "this.overlay_E7FE903B_F263_11D4_41EE_2C8A1671F162",
  "this.overlay_EAF7AC82_F21E_F2B4_41D6_3D2FE0149904",
  "this.overlay_EAA2322C_F221_71F3_41EB_6850C713CF1D",
  "this.overlay_EAB6E883_F221_12B5_41D1_8306A5AA4E0B",
  "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -52.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0FB16FA1_2B83_5575_41B6_713E0B901977"
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "touchControlMode": "drag_rotation",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -35.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0885E597_2B83_B55E_41BD_FE5FA1491932"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -25.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A8B036D_2B83_ADF2_41B3_5B42775FA829"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 58.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B8731C5_2B83_AD32_41BC_817EE3D6B04B"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -97.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BCBE145_2B83_AD32_4199_DC201316D4F2"
},
{
 "thumbnailUrl": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_t.jpg",
 "label": "15",
 "id": "panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": -46.39,
   "yaw": 154.47,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "backwardYaw": -46.39,
   "yaw": 162.67,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
   "backwardYaw": -167.55,
   "yaw": 82.62,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
   "backwardYaw": -167.55,
   "yaw": 95.34,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87",
   "backwardYaw": -131.41,
   "yaw": 144.32,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87",
   "backwardYaw": -131.41,
   "yaw": 129.76,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E7602CC4_F263_12BC_41CC_E94B04E3DF22",
  "this.overlay_E77D67F9_F261_3E55_41D9_F4D8152FB2A5",
  "this.overlay_E72758A0_F261_12F4_41AB_217536E83188",
  "this.overlay_E482B904_F27F_33BC_41EE_1654AE186CFB",
  "this.overlay_E49EBE0C_F27F_11B3_4192_C7906B82EEAC",
  "this.overlay_E4E3FC0B_F261_F1B4_41EC_E34EB27B5570",
  "this.overlay_0EBE4F88_1E75_987E_41A3_EA825528C6E8",
  "this.overlay_0E6960D5_1E74_8996_417B_DAC598F504AF",
  "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -7.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0811264A_2B83_B737_41BB_EFF6E7C825E5"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_camera"
},
{
 "thumbnailUrl": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_t.jpg",
 "label": "IMG_20211213_160835_00_270",
 "id": "panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE",
   "backwardYaw": -70.56,
   "yaw": 7.37,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C",
   "backwardYaw": 92.2,
   "yaw": 23.21,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1486031B_1E77_8893_41A4_C788B23EDBC4",
   "backwardYaw": -96.45,
   "yaw": -90.82,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6B6ABD63_2662_CD47_41BE_3F790D114B04",
  "this.overlay_68847ECC_2663_4F41_41BC_E19E8EBDB13C",
  "this.overlay_689D71C5_2665_3543_4193_A719B1B4CBB4",
  "this.overlay_6963853D_2666_D2C3_41BA_9DBB20E2BD21",
  "this.overlay_7180FAE5_279F_D743_41A8_35FB40D0C898",
  "this.overlay_70E45197_279F_55CF_41C1_8ABC73C2B70F",
  "this.panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -127.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A53E391_2B83_AD52_41BF_6D722EF22E02"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 105.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0FAB3FB8_2B83_5553_41BB_A11FF9C37A6A"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 11.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0FE93F63_2B83_55F6_41A7_8AAD9B4B8921"
},
{
 "thumbnailUrl": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_t.jpg",
 "label": "13",
 "id": "panorama_E3011261_F174_76EF_41E1_5CAAD482684A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0",
   "backwardYaw": 166.82,
   "yaw": -43.57,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E3F1B5DE_F223_124C_41EA_3A2EEE54E7E4",
  "this.overlay_E2F633BC_F223_16CC_41E7_54695B4EB8B4",
  "this.overlay_E05D49D2_F222_F254_41D8_1C4966A460A8",
  "this.overlay_E53DE815_F267_11DD_41D4_91DD49C4C392",
  "this.overlay_E50CF6B5_F266_FEDC_41D6_53B81E0E4E10",
  "this.overlay_E518569B_F261_1ED4_41D0_23E5AC8FBB9E",
  "this.overlay_10899961_1E73_F8AE_41A9_7861C0ACA682",
  "this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 141.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A45E39E_2B83_AD4E_41A1_F0046D8966D5"
},
{
 "thumbnailUrl": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_t.jpg",
 "label": "2",
 "id": "panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA",
   "backwardYaw": 169.83,
   "yaw": 0.5,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002",
   "backwardYaw": -7.03,
   "yaw": 175.93,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002",
   "backwardYaw": -7.03,
   "yaw": 165.71,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_FFA8E91E_E649_6912_41EA_25F93DB663F0",
  "this.overlay_FF378CE7_E649_2F32_41E6_C8A4DB437805",
  "this.overlay_FFD33961_E647_292E_41E2_4E840151C994",
  "this.overlay_FFF1E0C5_E647_3776_41CE_BCBE0F5E2671",
  "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_t.jpg",
 "label": "IMG_20211213_155903_00_255",
 "id": "panorama_14827FE7_1E74_97B2_4172_168011EC93C6",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_148A5298_1E77_899E_419D_1D63F89160F9",
   "backwardYaw": 50.97,
   "yaw": -87.98,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1482A27E_1E74_8892_4192_3388B028C3C0",
   "backwardYaw": -158.52,
   "yaw": -125.48,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663",
   "backwardYaw": 100.89,
   "yaw": 95.88,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6EFE2C29_266F_32C3_41BC_F4ADCC0EE967",
  "this.overlay_6E2F035C_266F_3541_41C2_07EE89C99DDE",
  "this.overlay_6E36E25C_2662_D741_416C_954C5DBE3993",
  "this.overlay_6CC8E40C_2663_52C1_419E_465E1F09606E",
  "this.overlay_6A4F008C_2665_53C0_419C_BDA693C5D548",
  "this.overlay_6F506B64_2666_D541_41AE_054FBF667444",
  "this.panorama_14827FE7_1E74_97B2_4172_168011EC93C6_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 132.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0ED36065_2B83_ABF2_41A8_D0C54108716A"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -94.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F7FE75A_2B83_B5D7_41C1_1FDCB0F95FE4"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -24.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0EF637BC_2B83_B553_41A2_562905A7F5C5"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -25.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0ABDA37A_2B83_ADD6_41A4_DB864FDA2770"
},
{
 "thumbnailUrl": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_t.jpg",
 "label": "IMG_20211213_154738_00_237",
 "id": "panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD",
   "backwardYaw": 161.54,
   "yaw": -120.33,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_66D9EF0D_26A2_CEC3_41A5_A60CD68B6794",
  "this.overlay_667933FC_26A5_7541_41B2_B9E5D07BA8FD",
  "this.panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 48.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B770930_2B83_BD52_41B0_5F40A0CC11C3"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 175.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B1BE2D3_2B83_ACD6_41A2_2E56C1EBC083"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 96.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_085C45F3_2B83_B4D6_41AE_FD9A6DE3F060"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -8.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0AE22347_2B83_AD3E_41B5_4073EFAD721F"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 172.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08F14558_2B83_B5D3_4197_32F44B0C7170"
},
{
 "thumbnailUrl": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_t.jpg",
 "label": "IMG_20211213_144241_00_186",
 "id": "panorama_1486C35F_1E74_8892_41BD_7A97DC18788E",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A",
   "backwardYaw": 164.44,
   "yaw": -17.59,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A",
   "backwardYaw": 164.44,
   "yaw": -19.06,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_056493E5_26A6_F543_4197_285AD3614FB6",
  "this.overlay_02345DC8_26A7_CD41_41A8_4A68F0EC93E4",
  "this.panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_camera"
},
{
 "thumbnailUrl": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_t.jpg",
 "label": "IMG_20211213_144707_00_195",
 "id": "panorama_148B8F42_1E74_B8F2_4195_88BE25966606",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124",
   "backwardYaw": 56.24,
   "yaw": -167.04,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124",
   "backwardYaw": 56.24,
   "yaw": -160.4,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124",
   "backwardYaw": 56.24,
   "yaw": 171.71,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_00AEB406_26AE_D2C1_4195_BC997CF60C5E",
  "this.overlay_036A9E5C_26AF_CF41_41C2_27359D14D74A",
  "this.overlay_0155C320_26AE_D6C0_4171_110BCB59C45C",
  "this.panorama_148B8F42_1E74_B8F2_4195_88BE25966606_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 16.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0EE627C8_2B83_B533_41C3_0D5A48FE048B"
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002",
   "camera": "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976",
   "camera": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA",
   "camera": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
   "camera": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977",
   "camera": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6",
   "camera": "this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "camera": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "camera": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87",
   "camera": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
   "camera": "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A",
   "camera": "this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
   "camera": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
   "camera": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0",
   "camera": "this.panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258",
   "camera": "this.panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91",
   "camera": "this.panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D",
   "camera": "this.panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C",
   "camera": "this.panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124",
   "camera": "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A",
   "camera": "this.panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_1486C35F_1E74_8892_41BD_7A97DC18788E",
   "camera": "this.panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_15745C11_1E74_986E_4184_2C27856CB6C5",
   "camera": "this.panorama_15745C11_1E74_986E_4184_2C27856CB6C5_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "media": "this.panorama_1486D626_1E74_88B2_418A_1B5A5850E43B",
   "camera": "this.panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "media": "this.panorama_148B8F42_1E74_B8F2_4195_88BE25966606",
   "camera": "this.panorama_148B8F42_1E74_B8F2_4195_88BE25966606_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "media": "this.panorama_1486CC94_1E74_9995_41B4_4B513680E8C1",
   "camera": "this.panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196",
   "camera": "this.panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.panorama_1486031B_1E77_8893_41A4_C788B23EDBC4",
   "camera": "this.panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "media": "this.panorama_1575CF89_1E77_987E_4194_2F4225271FF5",
   "camera": "this.panorama_1575CF89_1E77_987E_4194_2F4225271FF5_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "media": "this.panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A",
   "camera": "this.panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "media": "this.panorama_15748459_1E77_889E_4190_1EE592F648CB",
   "camera": "this.panorama_15748459_1E77_889E_4190_1EE592F648CB_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "media": "this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB",
   "camera": "this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "media": "this.panorama_1577B4D8_1E77_899E_41B7_969F6F12575C",
   "camera": "this.panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "media": "this.panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92",
   "camera": "this.panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "media": "this.panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD",
   "camera": "this.panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "media": "this.panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913",
   "camera": "this.panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "media": "this.panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7",
   "camera": "this.panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "media": "this.panorama_1481B964_1E77_98B6_41B0_A76D7932C31E",
   "camera": "this.panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "media": "this.panorama_148A5298_1E77_899E_419D_1D63F89160F9",
   "camera": "this.panorama_148A5298_1E77_899E_419D_1D63F89160F9_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "media": "this.panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399",
   "camera": "this.panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "media": "this.panorama_1489D783_1E74_8872_41B2_143BBBD42CE1",
   "camera": "this.panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "media": "this.panorama_14827FE7_1E74_97B2_4172_168011EC93C6",
   "camera": "this.panorama_14827FE7_1E74_97B2_4172_168011EC93C6_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "media": "this.panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663",
   "camera": "this.panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "media": "this.panorama_1482A27E_1E74_8892_4192_3388B028C3C0",
   "camera": "this.panorama_1482A27E_1E74_8892_4192_3388B028C3C0_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "media": "this.panorama_1489CC0C_1E74_9876_41BB_005113520ACA",
   "camera": "this.panorama_1489CC0C_1E74_9876_41BB_005113520ACA_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "media": "this.panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47",
   "camera": "this.panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "media": "this.panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE",
   "camera": "this.panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "media": "this.panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE",
   "camera": "this.panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "media": "this.panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C",
   "camera": "this.panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_camera"
  },
  {
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 0)",
   "media": "this.panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E",
   "camera": "this.panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 165.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0EAC4803_2B83_BB36_41B4_85181EAA229B"
},
{
 "thumbnailUrl": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_t.jpg",
 "label": "IMG_20211213_153034_00_219",
 "id": "panorama_15748459_1E77_889E_4190_1EE592F648CB",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47",
   "backwardYaw": -5.15,
   "yaw": -22.36,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148A5298_1E77_899E_419D_1D63F89160F9",
   "backwardYaw": -128,
   "yaw": -74.99,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB",
   "backwardYaw": -112.96,
   "yaw": 75.65,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB",
   "backwardYaw": -112.96,
   "yaw": 74.26,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A",
   "backwardYaw": 61.58,
   "yaw": 170.68,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1181D0B7_26E3_33CF_41C2_8171A01C0699",
  "this.overlay_116DF353_26E3_3547_41C3_5B9A5CA1F14C",
  "this.overlay_117DA68B_26E5_5FC0_41C1_9D381572987A",
  "this.overlay_1F256123_26E5_32C7_41BE_2180D9154F2A",
  "this.overlay_1FFAD2C4_26E7_5742_41C1_7E43C5C271DF",
  "this.overlay_1F4AE7C0_26E7_3D40_41AE_42F51A46B728",
  "this.overlay_1E5F2684_26E5_7FC1_41BE_AC313C0AC75A",
  "this.overlay_1CB8440A_26E5_32C1_41C0_103B237CD2F1",
  "this.panorama_15748459_1E77_889E_4190_1EE592F648CB_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -171.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B9731A4_2B83_AD72_41AB_A28D2FE7BBD8"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -25.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B8FA8A1_2B83_BB72_419F_6E9CD5E92FCC"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 39.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F462FD0_2B83_54D3_41B9_F03226FB9D90"
},
{
 "thumbnailUrl": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_t.jpg",
 "label": "IMG_20211213_145443_00_199",
 "id": "panorama_1486CC94_1E74_9995_41B4_4B513680E8C1",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6",
   "backwardYaw": -171.06,
   "yaw": 81.96,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6",
   "backwardYaw": -171.06,
   "yaw": 92.84,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124",
   "backwardYaw": 85.44,
   "yaw": 4.93,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124",
   "backwardYaw": 85.44,
   "yaw": 4.3,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_01D1F4C0_26AD_F340_4178_646750240BE8",
  "this.overlay_0E93D866_26A2_D340_41B2_4E5016646A51",
  "this.overlay_01798411_26A3_D2C3_41AC_D4AD85BE1628",
  "this.overlay_014DF130_26A2_F2C1_41B3_D5B96E562C37",
  "this.panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -104.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BFED16E_2B83_ADCE_41C5_EA5BBA37154D"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_15748459_1E77_889E_4190_1EE592F648CB_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -55.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F18701A_2B83_AB56_41B1_CE716EB09267"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 124.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BF7E150_2B83_ADD2_41C0_72DD7A679973"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -19.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B1A3988_2B83_BD33_41BD_D10D83D64927"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_15745C11_1E74_986E_4184_2C27856CB6C5_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_098AB455_2B83_ABD2_41A1_9BE044DE25F8"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 124.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BF2315E_2B83_ADCE_416D_1AFCAE2D0F48"
},
{
 "thumbnailUrl": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_t.jpg",
 "label": "IMG_20211213_161056_00_273",
 "id": "panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE",
   "backwardYaw": 7.37,
   "yaw": -70.56,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6941AF25_2665_CEC3_41AB_6A0EEF2560FC",
  "this.overlay_691D20E3_2663_3347_41C1_718C48CF9DB4",
  "this.panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B285313_2B83_AD55_41AD_B3D2FB86E014"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E3011261_F174_76EF_41E1_5CAAD482684A_camera"
},
{
 "thumbnailUrl": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_t.jpg",
 "label": "IMG_20211213_161153_00_276",
 "id": "panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE",
   "backwardYaw": 23.21,
   "yaw": 92.2,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_699D2D3F_2663_4D3F_41A6_A7114BCA3BEB",
  "this.overlay_7690A8C6_266D_3341_41C2_DE5F15151160",
  "this.panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -98.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B64A2A4_2B83_AF72_41B3_664916E969A8"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 54.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09400486_2B83_AB3F_41A0_8D716B1A45ED"
},
{
 "thumbnailUrl": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_t.jpg",
 "label": "IMG_20211213_152034_00_207",
 "id": "panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1486031B_1E77_8893_41A4_C788B23EDBC4",
   "backwardYaw": 172.17,
   "yaw": 8.25,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1486031B_1E77_8893_41A4_C788B23EDBC4",
   "backwardYaw": 172.17,
   "yaw": 8.64,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977",
   "backwardYaw": 169.27,
   "yaw": -175.02,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977",
   "backwardYaw": 169.27,
   "yaw": -160.03,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977",
   "backwardYaw": 169.27,
   "yaw": 153.62,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_0DD68234_26A5_56C0_41A2_AED384BF3656",
  "this.overlay_0908A1A1_26A3_D5C3_41C1_D02BAAE1F881",
  "this.overlay_0B9B26FC_269D_5F41_41BB_2A79A64FD706",
  "this.overlay_0BB9D918_269D_32C1_41AA_77DBA7C7D0AB",
  "this.overlay_0BD112F1_269D_5743_41B7_B34958D200E3",
  "this.panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_148A5298_1E77_899E_419D_1D63F89160F9_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -9.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B1132C8_2B83_AF32_4193_49EA770982ED"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -52.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0FA64FAC_2B83_5573_41A4_61FD47F06FB0"
},
{
 "thumbnailUrl": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_t.jpg",
 "label": "IMG_20211213_154125_00_228",
 "id": "panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB",
   "backwardYaw": 154.61,
   "yaw": -168.07,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB",
   "backwardYaw": 154.61,
   "yaw": 171.08,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1575CF89_1E77_987E_4194_2F4225271FF5",
   "backwardYaw": -110.67,
   "yaw": 4.51,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_691499CF_266E_D55F_41BE_771AED4C3000",
  "this.overlay_7625B0C6_266F_D341_4196_60BF87E197BE",
  "this.overlay_7680D35D_266E_D543_41B6_A79D1D1E0D19",
  "this.overlay_74B4061E_266D_5EC0_41BC_03305B688CEC",
  "this.overlay_74E65984_2663_75C1_4183_26E16EE69400",
  "this.panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -16.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B82C896_2B83_BB5F_41BD_3C84E7B0964D"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -15.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BA8A231_2B83_AF52_419C_ACFD1D5F2818"
},
{
 "thumbnailUrl": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_t.jpg",
 "label": "IMG_20211213_143949_00_180",
 "id": "panorama_14867ECB_1E74_99F2_41B9_68414C867124",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1486D626_1E74_88B2_418A_1B5A5850E43B",
   "backwardYaw": 170.58,
   "yaw": -50.68,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1486CC94_1E74_9995_41B4_4B513680E8C1",
   "backwardYaw": 4.93,
   "yaw": 85.44,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A",
   "backwardYaw": 82.05,
   "yaw": -94.35,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A",
   "backwardYaw": 82.05,
   "yaw": -93.79,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D",
   "backwardYaw": -134.68,
   "yaw": 144.9,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D",
   "backwardYaw": -134.68,
   "yaw": 150.1,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_15745C11_1E74_986E_4184_2C27856CB6C5",
   "backwardYaw": 160.24,
   "yaw": -47.03,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148B8F42_1E74_B8F2_4195_88BE25966606",
   "backwardYaw": -167.04,
   "yaw": 56.24,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148B8F42_1E74_B8F2_4195_88BE25966606",
   "backwardYaw": -167.04,
   "yaw": 56.26,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_31914311_2665_D6C3_41BD_1F8EDE3AC9EE",
  "this.overlay_318D6680_2663_3FC1_41C2_E7F996E97362",
  "this.overlay_3FF59150_269E_D541_41C0_62BAE6D6E0E5",
  "this.overlay_3F44FF50_269F_4D40_41AA_34D22735FA58",
  "this.overlay_3F55D44E_269D_5341_4147_7B6B41EC70EC",
  "this.overlay_3A12A406_26A5_72C1_41A4_E811C69502A2",
  "this.overlay_3BAD3090_26A3_D3C1_41C2_778C480BF3E0",
  "this.overlay_389546CC_26A3_3F41_41BB_453C2C587F2E",
  "this.overlay_3B4E0240_26AD_3741_41B6_75567B08B25E",
  "this.overlay_39E1B8C8_26AF_D341_418F_01502807523B",
  "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -27.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F335040_2B83_AB32_41BD_81E7DDE83C8C"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 127,
  "yaw": -135.57,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_09C2D418_2B83_AB52_41BB_1549EAC4A150"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -48.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BBC48CC_2B83_BB33_41B4_E758EA0172A2"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 89.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BF8E179_2B83_ADD2_41C2_016AFCC5AE67"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 58.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B8081D3_2B83_ACD6_41B8_D7D2F0292B93"
},
{
 "thumbnailUrl": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_t.jpg",
 "label": "IMG_20211213_160107_00_258",
 "id": "panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_14827FE7_1E74_97B2_4172_168011EC93C6",
   "backwardYaw": 95.88,
   "yaw": 100.89,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6C396F3B_2667_4EC0_41B8_B8FE68ADF6A8",
  "this.overlay_6D7DC754_2665_5D41_41C2_055F7AB65C01",
  "this.panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -44.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B09F2EF_2B83_ACCE_4194_36E363FE612C"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -97.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B61795A_2B83_BDD6_41AA_55BA8CE2AF5A"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 69.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0AA10386_2B83_AD3E_41A2_8B6A03D0AE5C"
},
{
 "thumbnailUrl": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_t.jpg",
 "label": "IMG_20211213_155053_00_243",
 "id": "panorama_1481B964_1E77_98B6_41B0_A76D7932C31E",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_642125A5_26A3_FDC3_41C1_2426AB61B6E8",
  "this.overlay_656BDEE5_26A3_4F40_41B6_7B7DB9FD301A",
  "this.panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -7.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BBAF20C_2B83_AF32_41C2_D2D6BF56C317"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 141.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A4913AA_2B83_AD76_4171_D5DA3D4538EF"
},
{
 "thumbnailUrl": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_t.jpg",
 "label": "1",
 "id": "panorama_EC205856_E64F_3712_41EC_BA0C87196002",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976",
   "backwardYaw": 175.93,
   "yaw": -7.03,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_EBE0BCC9_E65B_2F71_41C7_EB06380EFCE9",
  "this.overlay_E852FDA3_E659_2932_41E1_4BC810D66EEE",
  "this.overlay_E9056477_E65F_1F11_41E8_BAF685334FD5",
  "this.overlay_FEC3CD92_E64B_2912_41E9_323073D95A3F",
  "this.overlay_F1AA7EA8_E649_2B3E_41CC_9087B60C1C42",
  "this.panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -98.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B79B298_2B83_AF52_41AA_4692A38BBA54"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 89.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BE38187_2B83_AD3E_41C3_790F41EA5641"
},
{
 "thumbnailUrl": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_t.jpg",
 "label": "12",
 "id": "panorama_E3352A9A_F174_5652_4180_3DD758DB6B02",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
   "backwardYaw": 154.47,
   "yaw": -46.39,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A",
   "backwardYaw": 154.47,
   "yaw": -39.89,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "backwardYaw": -68.96,
   "yaw": -163.05,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "backwardYaw": -68.96,
   "yaw": -158,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
   "backwardYaw": 131.26,
   "yaw": 45.02,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9",
   "backwardYaw": 131.26,
   "yaw": 32.01,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87",
   "backwardYaw": -142.82,
   "yaw": 135.51,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87",
   "backwardYaw": -142.82,
   "yaw": 138.09,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_EE5637CA_F37C_FE32_41D0_DB741DCF1D0A",
  "this.overlay_E9862826_F37D_F272_41D4_AB9AA9D819B5",
  "this.overlay_EE4508A2_F374_7272_41EE_0F4BBC2AB5DC",
  "this.overlay_EE5830A1_F374_526E_41E0_5F255EDD0CB8",
  "this.overlay_E23B607E_F227_724C_41E2_CF45BFC0CD4E",
  "this.overlay_E58D26F1_F261_7E54_41D6_177877F231FD",
  "this.overlay_E44F06B5_F267_1EDD_41BA_128AC83C00F5",
  "this.overlay_E5012374_F261_165C_41E2_26D991B3488F",
  "this.overlay_E5707ACD_F261_164D_41E4_54E6F0A81EA0",
  "this.overlay_E56CA583_F261_12B5_41E8_CCC2601B2FC6",
  "this.overlay_EACCB364_F261_367C_41CD_A12E896F212C",
  "this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -16.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0E5CE80E_2B83_BB4F_41BD_3090D610B833"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -44.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B3FB2FD_2B83_ACCD_4194_645703DED682"
},
{
 "thumbnailUrl": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_t.jpg",
 "label": "IMG_20211213_154835_00_242",
 "id": "panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD",
   "backwardYaw": 52.25,
   "yaw": -168.7,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_644CE820_26A5_52C1_41A6_B82EBD7D8644",
  "this.overlay_65EFA79C_26A5_DDC1_41B5_FD1F12DA50A5",
  "this.panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09BBC463_2B83_ABF5_41B4_28BAB354C63C"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -173.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_08B605AD_2B83_B54D_41B8_73D45D3058CD"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -4.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A3973F5_2B83_ACD2_4180_2447F934F4CC"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 89.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F8B0F95_2B83_555D_41A5_463838FDF98C"
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_t.jpg",
 "overlays": [
  "this.panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_tcap0"
 ],
 "partial": false,
 "class": "Panorama",
 "label": "IMG_20211213_155722_00_252",
 "id": "panorama_1489D783_1E74_8872_41B2_143BBBD42CE1",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "vfov": 180,
 "hfovMin": "135%",
 "pitch": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 127,
  "yaw": 8.94,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_0FAC6735_2B83_B55D_41BA_8B22999AE445"
},
{
 "thumbnailUrl": "media/map_34B7404E_2B83_ABCE_41C2_32DA1231AC5E_t.png",
 "fieldOfViewOverlayInsideOpacity": 0.37,
 "image": {
  "levels": [
   {
    "url": "media/map_34B7404E_2B83_ABCE_41C2_32DA1231AC5E.png",
    "width": 3200,
    "height": 2260,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/map_34B7404E_2B83_ABCE_41C2_32DA1231AC5E_lq.png",
    "width": 304,
    "tags": "preload",
    "height": 215,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "FINAL FLOOR PLANS psi.dwg newe-Model 3",
 "initialZoomFactor": 1,
 "id": "map_34B7404E_2B83_ABCE_41C2_32DA1231AC5E",
 "width": 6623,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#00CCFF",
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "height": 4678,
 "fieldOfViewOverlayRadiusScale": 0.07,
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 165.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0EBA27F6_2B83_B4DE_417A_B97FA0A87FEA"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 88.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A966352_2B83_ADD6_4149_7FC17D00C66A"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -175.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B3D69BE_2B83_BD4E_41B7_CEDE75B344C2"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 37.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BAFE8E2_2B83_BCF7_4195_4AB66117D0E2"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 12.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B44391A_2B83_BD57_41B3_0C8135BDC7B6"
},
{
 "thumbnailUrl": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_t.jpg",
 "partial": false,
 "label": "7",
 "id": "panorama_F545612C_E6C7_3936_41E2_7B4B285066B6",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1486CC94_1E74_9995_41B4_4B513680E8C1",
   "backwardYaw": 81.96,
   "yaw": -171.06,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1486CC94_1E74_9995_41B4_4B513680E8C1",
   "backwardYaw": 81.96,
   "yaw": -159.15,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1486CC94_1E74_9995_41B4_4B513680E8C1",
   "backwardYaw": 81.96,
   "yaw": 165.81,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977",
   "backwardYaw": 38.46,
   "yaw": 44.43,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977",
   "backwardYaw": 38.46,
   "yaw": 29.96,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 136,
 "overlays": [
  "this.overlay_E5C5F71F_E826_7E97_41A2_D36B77CAF576",
  "this.overlay_E5F579AB_E826_95B8_41BA_814E75F81412",
  "this.overlay_E798AE19_E83A_8E9B_41BF_D0CD0C67E1A4",
  "this.overlay_E73FED1F_E83B_B297_41E4_379B1ED0B380",
  "this.overlay_3DE7DABD_26A7_37C3_41A6_9B38C84BBC98",
  "this.overlay_738E9127_27A5_72CF_41B9_FBF5F9FEDAF4",
  "this.overlay_72769A98_27A5_57C1_41B7_850E5EC8D0CF",
  "this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 136.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0972D49B_2B83_AB55_41BA_CA22AC782203"
},
{
 "thumbnailUrl": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_t.jpg",
 "label": "8",
 "id": "panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
   "backwardYaw": -3.27,
   "yaw": -168.19,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
   "backwardYaw": -3.27,
   "yaw": 171.33,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB",
   "backwardYaw": -3.27,
   "yaw": -169.54,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "backwardYaw": 172.21,
   "yaw": -14.93,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8",
   "backwardYaw": 172.21,
   "yaw": -13.31,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E62C4CCA_F0BC_5232_41E1_B4A5D241D42A",
  "this.overlay_E9E9F7F7_F0BC_5DD2_4184_2E5977F5F29F",
  "this.overlay_1B4C2FBA_0BEC_E9EF_41A3_E6BA431B5FC6",
  "this.overlay_04A8EEED_0BED_AB6A_4188_732570EF4EE4",
  "this.overlay_1B12F264_0BEB_7A9B_4186_FBD23A2FBFC4",
  "this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -44.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B03B2E0_2B83_ACF2_41A2_41B468193E84"
},
{
 "thumbnailUrl": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_t.jpg",
 "label": "IMG_20211213_152206_00_210",
 "id": "panorama_1486031B_1E77_8893_41A4_C788B23EDBC4",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE",
   "backwardYaw": -90.82,
   "yaw": -96.45,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE",
   "backwardYaw": -90.82,
   "yaw": -94.58,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196",
   "backwardYaw": 8.25,
   "yaw": 172.17,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196",
   "backwardYaw": 8.25,
   "yaw": 157.01,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1575CF89_1E77_987E_4194_2F4225271FF5",
   "backwardYaw": 155.22,
   "yaw": 67.41,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1575CF89_1E77_987E_4194_2F4225271FF5",
   "backwardYaw": 155.22,
   "yaw": 66.45,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A",
   "backwardYaw": -121.84,
   "yaw": -4.31,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A",
   "backwardYaw": -121.84,
   "yaw": -1.76,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_085CEFF0_26E6_CD41_41B5_7469B228C424",
  "this.overlay_0810999B_26E7_D5C7_419E_C8F7AA2221BF",
  "this.overlay_08426FA0_26E5_CDC1_41B6_33E27441411D",
  "this.overlay_087155A2_26E3_5DC1_41C2_7BDC764B5DE1",
  "this.overlay_09B1A38C_26E3_35C0_4194_DC32B1AECDDB",
  "this.overlay_09FE6903_26ED_F2C7_41A9_CF107E2B8988",
  "this.overlay_096232B6_26EF_57C1_41AC_78BEFAB032B9",
  "this.overlay_16571BF9_26EF_5543_41BB_3E1601F97026",
  "this.panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_1482A27E_1E74_8892_4192_3388B028C3C0_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -118.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_092B2514_2B83_B552_41A3_C70E38F9BF1A"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 12.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B0F799E_2B83_BD4F_41C4_6D15B841BB43"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -48.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BA598D7_2B83_BCDD_41B0_2D6227C624EC"
},
{
 "thumbnailUrl": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_t.jpg",
 "label": "IMG_20211213_144053_00_183",
 "id": "panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_15745C11_1E74_986E_4184_2C27856CB6C5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_15745C11_1E74_986E_4184_2C27856CB6C5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1486D626_1E74_88B2_418A_1B5A5850E43B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124",
   "backwardYaw": -94.35,
   "yaw": 82.05,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124",
   "backwardYaw": -94.35,
   "yaw": 81.16,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1486C35F_1E74_8892_41BD_7A97DC18788E",
   "backwardYaw": -17.59,
   "yaw": 164.44,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1486C35F_1E74_8892_41BD_7A97DC18788E",
   "backwardYaw": -17.59,
   "yaw": 159.9,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_39BA7CE7_26AD_534F_41BC_B431A05F079A",
  "this.overlay_06E41740_26A2_DD41_41A0_FAF4EC1F5FEF",
  "this.overlay_0781F0ED_26A2_D340_4186_C1C63DFD4AAE",
  "this.overlay_065E129F_26A5_D7FF_41C0_0ACB86240024",
  "this.overlay_07D9EF6C_26A6_CD41_41B1_724C946DC700",
  "this.overlay_0469FE96_26A3_4FC1_41A7_0214E831306B",
  "this.overlay_05BC0A81_26A2_D7C0_41C1_F73629D90D32",
  "this.panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -123.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B5D024A_2B83_AF37_412E_C8E80BBE01B0"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 127,
  "yaw": -135.57,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "id": "camera_09F3E424_2B83_AB72_41B6_16D2CF711207"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -27.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F0CA02A_2B83_AB76_41C0_E6A45604D692"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BB5C1F0_2B83_ACD2_41A5_B3B15862F062"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_091614B7_2B83_AB5D_41C3_3DA720B716C6"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 67.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_090924E6_2B83_B4FF_41A9_2E3C92A297E5"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90,
  "class": "RotationalCameraDisplayPosition"
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "displayMovements": [
  {
   "easing": "linear",
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "easing": "cubic_in_out",
   "duration": 3000,
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "id": "panorama_EC205856_E64F_3712_41EC_BA0C87196002_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 109.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A1153CE_2B83_ACCE_41B9_E4F01C29B41F"
},
{
 "thumbnailUrl": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_t.jpg",
 "label": "IMG_20211213_155413_00_249",
 "id": "panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_148A5298_1E77_899E_419D_1D63F89160F9",
   "backwardYaw": -158.94,
   "yaw": -161.49,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148A5298_1E77_899E_419D_1D63F89160F9",
   "backwardYaw": -158.94,
   "yaw": 165.28,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_61C4609C_2665_33C1_4190_2AA3E8DD5A7A",
  "this.overlay_61231E95_2662_CFC3_4191_B8930DB1C1B4",
  "this.overlay_6F30AF2B_2663_CEC7_41B7_EDF8314192E8",
  "this.panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_t.jpg",
 "label": "IMG_20211213_144528_00_192",
 "id": "panorama_1486D626_1E74_88B2_418A_1B5A5850E43B",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124",
   "backwardYaw": -50.68,
   "yaw": 170.58,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124",
   "backwardYaw": -50.68,
   "yaw": 159.4,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_0323C075_26A3_D343_41BB_C38412A204D1",
  "this.overlay_00D3E140_26AD_3541_41C3_0E94BE517188",
  "this.panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 135.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F11B774_2B83_B5D3_41A6_3C011266895F"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B8C61E3_2B83_ACF6_41C4_5164C563E324"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -87.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A0333DA_2B83_ACD6_41C4_70E2CC3C1EE8"
},
{
 "thumbnailUrl": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_t.jpg",
 "label": "IMG_20211213_154416_00_231",
 "id": "panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB",
   "backwardYaw": -83.17,
   "yaw": -91.54,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_1ABFFECB_26A5_4F47_4186_0BC4A85C4447",
  "this.overlay_1BFC6623_26A5_FEC7_41A7_BDF13702377A",
  "this.panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_t.jpg",
 "label": "IMG_20211213_143119_00_174",
 "id": "panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C",
   "backwardYaw": -107.32,
   "yaw": 44.68,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124",
   "backwardYaw": 144.9,
   "yaw": -134.68,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_14867ECB_1E74_99F2_41B9_68414C867124",
   "backwardYaw": 144.9,
   "yaw": -140.09,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91",
   "backwardYaw": 6.25,
   "yaw": -44.27,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91",
   "backwardYaw": 6.25,
   "yaw": -55.73,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_35425FD1_267D_4D43_41C3_08A08912F90B",
  "this.overlay_32DBFA07_267F_56C0_41AA_1FE9EE8ABF68",
  "this.overlay_3261CA71_267F_F743_41AF_405F053D10CD",
  "this.overlay_326CB467_267D_F34F_41C2_B10625EE97F5",
  "this.overlay_3238F257_2662_D74F_415E_DB69CD99048C",
  "this.overlay_33EF3F4E_266F_CD41_41C2_A9E0CA1D4790",
  "this.overlay_301A7ABF_266D_57C0_41AE_8023E39149A1",
  "this.panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -10.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0833C675_2B83_B7DD_41BF_4FB0906522AF"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_09AE546F_2B83_ABCD_41BD_6301DAD7BBAF"
},
{
 "thumbnailUrl": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_t.jpg",
 "label": "IMG_20211213_152855_00_216",
 "id": "panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_15748459_1E77_889E_4190_1EE592F648CB",
   "backwardYaw": 170.68,
   "yaw": 61.58,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1486031B_1E77_8893_41A4_C788B23EDBC4",
   "backwardYaw": -4.31,
   "yaw": -121.84,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_10CF2DD6_26EE_CD40_41B7_3C4570A48213",
  "this.overlay_13431A5B_26EF_7747_41AD_8080B64F5A5C",
  "this.overlay_103017D0_26EF_5D41_41C2_5BD42EFA0887",
  "this.overlay_1E982CD2_26ED_5341_41A9_8AE24146B3C6",
  "this.panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_tcap0"
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "hfovMin": "135%",
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 92.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0F4DAFDC_2B83_54D3_4190_5AFD4EDF9B62"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_090774D3_2B83_B4D5_4198_291972CF2F6F"
},
{
 "paddingLeft": 0,
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingRight": 10,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "minHeight": 50,
 "toolTipPaddingLeft": 10,
 "width": "100%",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minWidth": 100,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 0.5,
 "playbackBarHeight": 10,
 "shadow": false,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "top": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "paddingRight": 0,
 "data": {
  "name": "--SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "horizontalAlign": "left",
 "right": "0%",
 "width": 115.05,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "0%",
 "propagateClick": true,
 "borderSize": 0,
 "height": 641,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "layout": "absolute",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0
},
{
 "paddingRight": 0,
 "data": {
  "name": "--MENU"
 },
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288"
 ],
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "left": "0%",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "horizontalAlign": "left",
 "right": "0%",
 "backgroundOpacity": 0.64,
 "minHeight": 1,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "propagateClick": true,
 "bottom": 0,
 "height": 118,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "layout": "absolute",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0
},
{
 "paddingRight": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "horizontalAlign": "left",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "minHeight": 1,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "0%",
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "layout": "absolute",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "paddingLeft": 0
},
{
 "paddingRight": 0,
 "data": {
  "name": "--LOCATION"
 },
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "horizontalAlign": "left",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "minHeight": 1,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "0%",
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "layout": "absolute",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "paddingLeft": 0
},
{
 "paddingRight": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "horizontalAlign": "left",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "minHeight": 1,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "top": "0%",
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "layout": "absolute",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "paddingLeft": 0
},
{
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingRight": 0,
 "maxHeight": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "horizontalAlign": "center",
 "width": 58,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "height": 58,
 "borderSize": 0,
 "mode": "toggle",
 "class": "IconButton",
 "shadow": false,
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingTop": 0,
 "maxWidth": 58,
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingRight": 0,
 "maxHeight": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "horizontalAlign": "center",
 "width": 58,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "height": 58,
 "borderSize": 0,
 "mode": "toggle",
 "class": "IconButton",
 "shadow": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingTop": 0,
 "maxWidth": 58,
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "paddingLeft": 0,
 "progressBorderSize": 0,
 "id": "MapViewer",
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "minHeight": 1,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minWidth": 1,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "playbackBarHeight": 10,
 "shadow": false,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarBackgroundOpacity": 1,
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Floor Plan"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB, this.camera_0A2CC401_2B83_AB32_41A9_E42B4617DF5F); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FFA01F6B_E6CB_2931_41D1_F5A31E46E3F2",
   "yaw": -90.35,
   "pitch": -34.48,
   "hfov": 10.3,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F372935F_E6DB_1912_41E1_A9A50BC3092A",
 "data": {
  "label": "Circle 01c"
 },
 "maps": [
  {
   "hfov": 10.3,
   "yaw": -90.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB, this.camera_09DF640C_2B83_AB32_4193_9E59369C1F52); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_F3C35AC2_E6D9_EB72_41CB_52727B8D05DA",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 92.77,
   "yaw": -72.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_1_1_0_map.gif",
      "width": 200,
      "height": 187,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6, this.camera_09C2D418_2B83_AB52_41BB_1549EAC4A150); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FFA08F6B_E6CB_2931_41C2_A894205B6B63",
   "yaw": 38.46,
   "pitch": -16.92,
   "hfov": 6.15,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F35B4673_E6D9_3B12_41E6_6D942D653E62",
 "data": {
  "label": "Circle 01c"
 },
 "maps": [
  {
   "hfov": 6.15,
   "yaw": 38.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_2_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6, this.camera_09F3E424_2B83_AB72_41B6_16D2CF711207); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_F0B73EAE_E6C9_2B32_41BE_A45DB6F00C5F",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 37.56,
   "yaw": 33.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_3_1_0_map.gif",
      "width": 163,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E7E3E5BF_F0B4_7253_41E9_81B0692BA6DB",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 65.61,
   "yaw": -31.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_4_1_0_map.gif",
      "width": 200,
      "height": 138,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E80638B1_F0CC_726E_41EA_E50ACE495F37",
   "yaw": -32.64,
   "pitch": -13.75,
   "hfov": 5.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E7F1B50E_F0B4_3235_41E3_B4B9071911ED",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 5.16,
   "yaw": -32.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_5_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196, this.camera_09E4A430_2B83_AB52_41B7_307B1410E5C6); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40A5C636_279D_DEC1_418B_B13ED782861A",
   "yaw": 169.27,
   "pitch": -23.08,
   "hfov": 5.03,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0FC5B01F_26A5_52FF_41B0_7808D734C1B0",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "hfov": 5.03,
   "yaw": 169.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_6_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196, this.camera_0997343C_2B83_AB52_41C5_354A1C923389); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_0DEF2030_26A7_32C1_4188_462804C97E2B",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 39.34,
   "yaw": 160.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_7_1_0_map.gif",
      "width": 133,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976, this.camera_098AB455_2B83_ABD2_41A1_9BE044DE25F8); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_F4F0C3B9_E679_191E_41AD_D3ED7093F7DC",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 21.8,
   "yaw": 169.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_0_1_0_map.gif",
      "width": 121,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976, this.camera_09BBC463_2B83_ABF5_41B4_28BAB354C63C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F0278995_E648_E916_41E3_1D5714A356F8",
   "yaw": 175.79,
   "pitch": -30.02,
   "hfov": 4.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F4CE9A68_E679_2B3E_41E4_186FFB14337C",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "hfov": 4.32,
   "yaw": 175.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976, this.camera_09AE546F_2B83_ABCD_41BD_6301DAD7BBAF); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_F23D53C9_E67F_797E_41DA_CEB9D31F7CB9",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 20.78,
   "yaw": -170.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_2_1_0_map.gif",
      "width": 88,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 01b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F0271995_E648_E916_41B1_13FC97DEE13C",
   "yaw": 90.1,
   "pitch": -24.93,
   "hfov": 5.4,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_F5F8AB23_E679_2932_41C6_B6096A418A96",
 "maps": [
  {
   "hfov": 5.4,
   "yaw": 90.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_3_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB, this.camera_09986447_2B83_AB3D_41C3_A61C92364A42); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_F57C432D_E67B_1936_41CE_C5BC49C02D77",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 37.07,
   "yaw": 86.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_4_1_0_map.gif",
      "width": 192,
      "height": 199,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E5FE8C88_F17B_D23E_41DD_C0575B618CC1",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 67.87,
   "yaw": 18.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_1_HS_7_1_0_map.gif",
      "width": 200,
      "height": 158,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EBF5A731_F0B4_5E6E_41D8_7144E0B501A0",
   "yaw": 22.3,
   "pitch": -14.38,
   "hfov": 8.92,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E593DD69_F17C_32FF_41DE_A8F0B4641D37",
 "data": {
  "label": "Circle 03b"
 },
 "maps": [
  {
   "hfov": 8.92,
   "yaw": 22.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_8_0_0_map.gif",
      "width": 39,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40DF766A_279D_DF41_41AF_F460D751640C",
   "yaw": -140.35,
   "pitch": 7.05,
   "hfov": 4.41,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_6A50C55D_267D_FD40_41B9_C0BA77CF373F",
 "maps": [
  {
   "hfov": 4.41,
   "yaw": -140.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148A5298_1E77_899E_419D_1D63F89160F9, this.camera_0BFED16E_2B83_ADCE_41C5_EA5BBA37154D); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_6B93E85C_267D_5341_41A4_9719CAFBB521",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 74.16,
   "yaw": -140.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0_HS_1_1_0_map.gif",
      "width": 189,
      "height": 199,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_1489CC0C_1E74_9876_41BB_005113520ACA_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14867ECB_1E74_99F2_41B9_68414C867124, this.camera_0F2CE059_2B83_ABD2_41BD_9E447217053F); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40C36650_279D_DF41_41B0_C43FB343FC67",
   "yaw": 160.24,
   "pitch": 8.11,
   "hfov": 5.98,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0234BEC2_26A5_4F41_41C2_DC8EC8BF2EF7",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 5.98,
   "yaw": 160.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14867ECB_1E74_99F2_41B9_68414C867124, this.camera_0ED36065_2B83_ABF2_41A8_D0C54108716A); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_03268BD5_26A5_3540_41B3_D90AE1444B6B",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 62.68,
   "yaw": 149.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0_HS_1_1_0_map.gif",
      "width": 134,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_15745C11_1E74_986E_4184_2C27856CB6C5_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A, this.camera_0972D49B_2B83_AB55_41BA_CA22AC782203); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B45D922_266F_D2C0_41B1_E6643D69F017",
   "yaw": 166.82,
   "pitch": -32.17,
   "hfov": 6.18,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0E92D43B_1E8D_8892_41A6_A873BCAD19DF",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 6.18,
   "yaw": 166.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_1_HS_0_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3011261_F174_76EF_41E1_5CAAD482684A, this.camera_0963C4AB_2B83_AB75_41BF_88F330CAF46E); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_1132BCDF_1E8F_7993_41B9_6F206FA41C15",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 34.96,
   "yaw": 164.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_1_HS_1_1_0_map.gif",
      "width": 79,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92, this.camera_0A966352_2B83_ADD6_4149_7FC17D00C66A); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D1F65E_279D_DF41_418A_7BEE8981E906",
   "yaw": -83.17,
   "pitch": 10.57,
   "hfov": 6.2,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1FAF4588_26E3_FDC1_41C1_67F072400456",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 6.2,
   "yaw": -83.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92, this.camera_0A878360_2B83_ADF2_41C1_9ACB4F979065); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_1CF64AAB_269D_F7C7_41C0_C8A42BEB565F",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 25.72,
   "yaw": -79.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0_HS_1_1_0_map.gif",
      "width": 39,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD, this.camera_0ADA1322_2B83_AD76_41B1_2D64250BC446); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_1F60B48C_269F_33C1_41B8_2AEBAB7C89BF",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 43.61,
   "yaw": 64.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0_HS_2_1_0_map.gif",
      "width": 124,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D1165F_279D_DF7F_41A3_38B006174048",
   "yaw": -112.88,
   "pitch": -22.24,
   "hfov": 6.26,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1C049837_269D_52CF_4193_1BE6C6338C48",
 "maps": [
  {
   "hfov": 6.26,
   "yaw": -112.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0_HS_3_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_15748459_1E77_889E_4190_1EE592F648CB, this.camera_0AF0333A_2B83_AD56_41A0_0291718B8B9C); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_1DB1A4E3_26A2_F347_41A0_A2A74E5A847A",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 36.35,
   "yaw": -112.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0_HS_4_1_0_map.gif",
      "width": 122,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3E5CC0D8_2B8D_ACD2_41B7_F4536A51AB30",
   "yaw": 130.57,
   "pitch": 14.19,
   "hfov": 4.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_24CFF2E2_2B84_ACF6_41C5_5D1C043FC583",
 "maps": [
  {
   "hfov": 4.32,
   "yaw": 130.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1577B4D8_1E77_899E_41B7_969F6F12575C, this.camera_0AE22347_2B83_AD3E_41B5_4073EFAD721F); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_245C716E_2B83_ADCF_41C3_9A4D994174FF",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 18.96,
   "yaw": 127.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0_HS_6_1_0_map.gif",
      "width": 35,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3E5C60D8_2B8D_ACD2_41C2_FB15F37E34F3",
   "yaw": 154.21,
   "pitch": 6.18,
   "hfov": 3.9,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_3B73C0AC_2B8D_AB73_41B5_AE670EDE9451",
 "maps": [
  {
   "hfov": 3.9,
   "yaw": 154.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E, this.camera_0ACE532E_2B83_AD4E_41C4_BFD04B88A826); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_3B0316DD_2B8D_54CD_41C1_06A47AE69B0B",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 32.51,
   "yaw": 154.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0_HS_8_1_0_map.gif",
      "width": 112,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3E5DA0D8_2B8D_ACD2_41C1_1440BA2565BC",
   "yaw": 66.25,
   "pitch": 8.25,
   "hfov": 3.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_3A3E187E_2B8C_BBCE_41AA_D462FF2B3BA3",
 "maps": [
  {
   "hfov": 3.88,
   "yaw": 66.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0_HS_9_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA, this.camera_0FFB7F34_2B83_5552_41C1_8FB30E869812); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FE59C8B7_E6C9_1712_41D3_7D4F8B608321",
   "yaw": -123.45,
   "pitch": -21.12,
   "hfov": 6.59,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F255C89C_E647_3716_41D6_45837819D966",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 6.59,
   "yaw": -123.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_1_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA, this.camera_0FE2BF4B_2B83_5535_41C4_D96F4B82BFEE); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_F38CD3A1_E6C7_3931_41E1_0EB98EF0F045",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 49.58,
   "yaw": -118.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_3_1_0_map.gif",
      "width": 196,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977, this.camera_0F860F8C_2B83_5532_419C_6AE8B0C38FA8); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_F2430522_E6D9_1932_41E0_AA4FB6421084",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 94.79,
   "yaw": 132.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_5_1_0_map.gif",
      "width": 200,
      "height": 135,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977, this.camera_0F8B0F95_2B83_555D_41A5_463838FDF98C); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FAFFF0B1_EB47_4B66_41DA_E9857700C52D",
   "yaw": 149.22,
   "pitch": -25.11,
   "hfov": 6.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F091E393_E6D9_7912_41EA_45A20199469E",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "hfov": 6.16,
   "yaw": 149.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_7_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A, this.camera_0FE93F63_2B83_55F6_41A7_8AAD9B4B8921); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E49D9F8E_F14C_2E35_41E5_7B34560116A4",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 82.94,
   "yaw": -3.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_9_1_0_map.gif",
      "width": 200,
      "height": 187,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A, this.camera_0F9F7F78_2B83_55D2_41BA_6FD99C26118E); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EBF22732_F0B4_5E52_41EA_6D4C1716294D",
   "yaw": -7.1,
   "pitch": -23.43,
   "hfov": 7.95,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E7523A64_F0B4_F6F6_41E1_7D70720821C7",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "hfov": 7.95,
   "yaw": -7.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_10_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40DFA66B_279D_DF47_41BF_EB83D56387B4",
   "yaw": 2.03,
   "pitch": 3.44,
   "hfov": 3.8,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_6BF59429_267F_D2C3_41BE_B417861EA1E5",
 "maps": [
  {
   "hfov": 3.8,
   "yaw": 2.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_15748459_1E77_889E_4190_1EE592F648CB, this.camera_0F6F8766_2B83_B5FF_41C1_9FE9B1DB84F7); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_6B6BD43C_267F_32C0_41BB_A735F65D00D4",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 75.32,
   "yaw": -5.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0_HS_1_1_0_map.gif",
      "width": 195,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E, this.camera_0B3D69BE_2B83_BD4E_41B7_CEDE75B344C2); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40CBF656_279D_DF41_41C1_CCC9604F8A79",
   "yaw": -110.67,
   "pitch": -30.53,
   "hfov": 6.38,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_174B1595_26ED_3DC3_41C2_7E0C90AE2C99",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "hfov": 6.38,
   "yaw": -110.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.53,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E, this.camera_0B26F9C8_2B83_BD32_41A7_3999399A6527); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_11181314_26E5_76C0_41BC_7746801FF502",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 100.33,
   "yaw": -121.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0_HS_1_1_0_map.gif",
      "width": 200,
      "height": 160,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1486031B_1E77_8893_41A4_C788B23EDBC4, this.camera_0B0809A8_2B83_BD72_41C0_FFF6F4FFD613); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40CCE657_279D_DF4F_41BD_0882F567FDA0",
   "yaw": 155.22,
   "pitch": -22.72,
   "hfov": 6.19,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_13D60B86_26E3_55C1_41BB_BDB5DAF44707",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 6.19,
   "yaw": 155.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0_HS_2_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1486031B_1E77_8893_41A4_C788B23EDBC4, this.camera_0B3279B4_2B83_BD53_41BE_EBF9980BD8F7); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_1E082B83_26E3_55C7_417A_02383C22FEF0",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 81.93,
   "yaw": 141.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0_HS_3_1_0_map.gif",
      "width": 200,
      "height": 199,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_1575CF89_1E77_987E_4194_2F4225271FF5_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C, this.camera_0F11B774_2B83_B5D3_41A6_3C011266895F); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B44F924_266F_D2C0_41BD_9957468A1106",
   "yaw": -38.38,
   "pitch": -20.45,
   "hfov": 6.49,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0BA3D162_1E95_88B2_41AE_068E0EA93CBC",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 6.49,
   "yaw": -38.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_1_HS_0_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D, this.camera_0F23A797_2B83_B55D_41BF_F559DC015879); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B449924_266F_D2C0_41BF_F566352ACFAE",
   "yaw": 6.25,
   "pitch": -23.57,
   "hfov": 5.42,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0A28B6EB_1E97_89B3_41B5_A43C99AE1860",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 5.42,
   "yaw": 6.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_1_HS_1_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B44A924_266F_D2C0_41BA_F4D13A5AC2D2",
   "yaw": 149.14,
   "pitch": 1.43,
   "hfov": 3.87,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0BDAA68E_1E94_8872_4191_33C2C7105217",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 3.87,
   "yaw": 149.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258, this.camera_0F31978C_2B83_B533_41C1_9628A636DFF4); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_0B237946_1E8D_98F2_41B0_56380EE829D0",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 44.18,
   "yaw": 152.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_1_HS_3_1_0_map.gif",
      "width": 200,
      "height": 193,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C, this.camera_0F025780_2B83_B533_41B0_669EAD06FCD8); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_37F88095_2665_33C0_41A9_A2AF77479427",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 45.56,
   "yaw": -44.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0_HS_4_1_0_map.gif",
      "width": 199,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D, this.camera_0ED477A3_2B83_B575_41AD_1BD37922DCC7); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_357BAB4F_2663_555F_41C3_27DD232344B7",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 84.2,
   "yaw": 17.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0_HS_5_1_0_map.gif",
      "width": 200,
      "height": 135,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.58,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3832078C_26A5_FDC1_4195_21EDB93408C0",
   "yaw": 55.72,
   "pitch": 2.07,
   "hfov": 4.45,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_30BBDF18_2662_CEC1_41C1_A4D875BA5FFF",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 4.45,
   "yaw": 55.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91, this.camera_0F0CA02A_2B83_AB76_41C0_E6A45604D692); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B459923_266F_D2C0_41BB_19E4DD5CC56E",
   "yaw": -23.35,
   "pitch": -22.12,
   "hfov": 5.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0FFF6C36_1E97_9895_4168_01A02580624D",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 5.35,
   "yaw": -23.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_1_HS_0_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91, this.camera_0F335040_2B83_AB32_41BD_81E7DDE83C8C); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_0A675D36_1E9C_F892_418A_F65CB75C6C75",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 57.92,
   "yaw": -21.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_1_HS_1_1_0_map.gif",
      "width": 179,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B445923_266F_D2C0_41B7_2B3A00BF2914",
   "yaw": -11.78,
   "pitch": -12.48,
   "hfov": 4.57,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0A73F491_1E9C_886E_41B1_AB5BFAE5D417",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 4.57,
   "yaw": -11.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_1_HS_2_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B447923_266F_D2C0_41BD_06CBD58E0E9E",
   "yaw": -34.82,
   "pitch": -10.88,
   "hfov": 4.53,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0BAD9804_1E9C_9876_41B0_968E90C1FF9E",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 4.53,
   "yaw": -34.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_1_HS_3_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_0F11E00E_2B83_AB4E_41A5_2ED7B7AB7F1B); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B440923_266F_D2C0_41C1_C7E47D102999",
   "yaw": 155.27,
   "pitch": 8.46,
   "hfov": 10.22,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0B7EE763_1E8F_88B2_41BE_711651AE9164",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 10.22,
   "yaw": 155.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_0F18701A_2B83_AB56_41B1_CE716EB09267); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_0B6876F0_1E8C_89AE_4185_9CB04147660E",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 48.63,
   "yaw": 156.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_1_HS_5_1_0_map.gif",
      "width": 69,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.58,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40DDA669_279D_DF43_41B7_8880D64FA08A",
   "yaw": -165.66,
   "pitch": 3.44,
   "hfov": 8.56,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_6DA57850_2665_3341_41BD_FD8622F38D95",
 "maps": [
  {
   "hfov": 8.56,
   "yaw": -165.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14827FE7_1E74_97B2_4172_168011EC93C6, this.camera_095F047B_2B83_ABD5_41B0_B4C732B7827C); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_6D19DA9B_2663_37C7_41C0_33FB8EF81579",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 41.41,
   "yaw": -158.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0_HS_1_1_0_map.gif",
      "width": 123,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14827FE7_1E74_97B2_4172_168011EC93C6, this.camera_09400486_2B83_AB3F_41A0_8D716B1A45ED); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_6B0EBCC5_2663_D340_41A6_C05335720DF0",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 31.22,
   "yaw": 164.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0_HS_2_1_0_map.gif",
      "width": 80,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_1482A27E_1E74_8892_4192_3388B028C3C0_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D7D663_279D_DF47_41BF_820E1C0C4ED4",
   "yaw": -160.69,
   "pitch": 15.23,
   "hfov": 5.22,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_65647BE7_269E_D54F_41B7_629125A61CC1",
 "maps": [
  {
   "hfov": 5.22,
   "yaw": -160.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399, this.camera_0F517FC4_2B83_5533_41C2_93C1956DA250); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_62C8C104_269F_32C1_41C2_A9AF28E3AEB1",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 19.34,
   "yaw": -158.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0_HS_1_1_0_map.gif",
      "width": 29,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D80663_279D_DF47_4181_11BEEAEA3222",
   "yaw": 78.65,
   "pitch": 10.72,
   "hfov": 6.2,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_65434C2F_269E_D2DF_4140_B9AE01C3003E",
 "maps": [
  {
   "hfov": 6.2,
   "yaw": 78.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1489CC0C_1E74_9876_41BB_005113520ACA, this.camera_0F462FD0_2B83_54D3_41B9_F03226FB9D90); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_63CEDADD_269D_3743_4199_D125B601FADC",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 28.07,
   "yaw": 75.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0_HS_3_1_0_map.gif",
      "width": 44,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D8A664_279D_DF41_41B7_6824D5BDAAE7",
   "yaw": 51.72,
   "pitch": -19.75,
   "hfov": 5.41,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_63D0140D_2663_F2C0_41A8_E8416B3FF653",
 "maps": [
  {
   "hfov": 5.41,
   "yaw": 51.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0_HS_4_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14827FE7_1E74_97B2_4172_168011EC93C6, this.camera_0F4DAFDC_2B83_54D3_4190_5AFD4EDF9B62); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_6050BC84_2663_53C1_41BF_0E9ED7433BFB",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 32.48,
   "yaw": 50.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0_HS_5_1_0_map.gif",
      "width": 113,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D9F664_279D_DF41_41B4_9EF4E1354364",
   "yaw": -131.18,
   "pitch": -21.75,
   "hfov": 5.34,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_60DB1D18_2665_72C1_41A1_F6926ED3FDA5",
 "maps": [
  {
   "hfov": 5.34,
   "yaw": -131.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0_HS_6_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_15748459_1E77_889E_4190_1EE592F648CB, this.camera_0FAB3FB8_2B83_5553_41BB_A11FF9C37A6A); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_6006440C_2665_D2C1_4182_57740D37C70A",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 46.97,
   "yaw": -128,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0_HS_7_1_0_map.gif",
      "width": 120,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_148A5298_1E77_899E_419D_1D63F89160F9_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D, this.camera_0A7BD3B5_2B83_AD52_41A9_5F85A756EB61); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_383CD78E_26A5_FDC1_41B2_AF52F4F19A63",
   "yaw": -107.32,
   "pitch": -23.64,
   "hfov": 5.21,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_331286A3_2663_DFC7_41AC_82F5673DDADA",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 5.21,
   "yaw": -107.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0_HS_0_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.64,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91, this.camera_0A45E39E_2B83_AD4E_41A1_F0046D8966D5); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_383D278E_26A5_FDC1_41AD_FEF2B552043F",
   "yaw": -44.54,
   "pitch": -21.25,
   "hfov": 4.99,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_320D0E69_2663_4F40_41BA_6342F1FF9D61",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 4.99,
   "yaw": -44.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0_HS_1_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D, this.camera_0A6F53C0_2B83_AD32_41C4_35E5BE0B690F); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_3205C2D0_2665_5741_41AD_C95213C61B34",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 61.05,
   "yaw": -101.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0_HS_2_1_0_map.gif",
      "width": 195,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91, this.camera_0A4913AA_2B83_AD76_4171_D5DA3D4538EF); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_33E9759D_2667_7DC3_41A8_318056AD025F",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 84.63,
   "yaw": -26.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0_HS_3_1_0_map.gif",
      "width": 200,
      "height": 136,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.79,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_383E478E_26A5_FDC1_41BE_00A43368197B",
   "yaw": -95.57,
   "pitch": 2.4,
   "hfov": 5.4,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_313BAF84_2663_4DC1_41B9_9E1B3E4DDFC9",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 5.4,
   "yaw": -95.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_0B285313_2B83_AD55_41AD_B3D2FB86E014); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E91B0BE8_F0D4_35FE_41EB_904E45241F77",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 32.25,
   "yaw": 163.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_1_HS_1_1_0_map.gif",
      "width": 150,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.14,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_0B03B2E0_2B83_ACF2_41A2_41B468193E84); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_EB523FB0_F0D4_EE6E_41D8_151ABE741474",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 41.31,
   "yaw": -142.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_3_1_0_map.gif",
      "width": 200,
      "height": 83,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_0B09F2EF_2B83_ACCE_4194_36E363FE612C); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E89D3040_F0D5_D22E_41B9_1BDC16562082",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 28.2,
   "yaw": -145.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_4_1_0_map.gif",
      "width": 92,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A, this.camera_0B23F308_2B83_AD33_4184_92C7B041AE84); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5A24DC_F223_124C_41DF_FAF57926A40A",
   "yaw": -131.41,
   "pitch": -10,
   "hfov": 8.76,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EBD507BE_F0D4_5E52_41E7_D00851EA4F8A",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 8.76,
   "yaw": -131.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_5_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_0B3FB2FD_2B83_ACCD_4194_645703DED682); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5DD4DC_F223_124C_41DD_ADDB8AEE18CD",
   "yaw": -146.95,
   "pitch": -21.17,
   "hfov": 10.11,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E51B41DF_F263_324C_41E9_811B3E6A0353",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 10.11,
   "yaw": -146.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_6_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5D64DC_F223_124C_41CA_15285FB41733",
   "yaw": 158.52,
   "pitch": -16.16,
   "hfov": 5.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_EAFA5D33_F263_13D4_41EB_CE40535C65B9",
 "maps": [
  {
   "hfov": 5.55,
   "yaw": 158.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_7_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EDA88F7F_F261_2E4C_41D1_6242C0A42390",
   "yaw": 169.32,
   "pitch": 0.55,
   "hfov": 3.25,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EA43D0D2_F221_1254_41E8_3F262F23FABA",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 3.25,
   "yaw": 169.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_1_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87, this.camera_0E5CE80E_2B83_BB4F_41BD_3090D610B833); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E65A9820_F0D4_D26D_4190_88B35F159298",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 64.73,
   "yaw": -1.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_1_1_0_map.gif",
      "width": 200,
      "height": 162,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_0EE627C8_2B83_B533_41C3_0D5A48FE048B); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E998D320_F0DC_D66D_41B4_B90D91064136",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 53.06,
   "yaw": -68.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_3_1_0_map.gif",
      "width": 159,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E807D8B4_F0CC_7256_41BB_67CABB23142B",
   "yaw": -98.21,
   "pitch": -13.38,
   "hfov": 8.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAA49BC9_F0DC_363F_41EA_7CD00897199A",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 8.1,
   "yaw": -98.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_4_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9, this.camera_0E9837DF_2B83_B4CD_41BB_04A4486C314E); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E807F8B4_F0CC_7256_41DC_24C6BA3BADC9",
   "yaw": -55.5,
   "pitch": -11.37,
   "hfov": 8.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EBA81ADA_F0DC_D7DD_41BD_F1BBD5CF5CED",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 8.16,
   "yaw": -55.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_5_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.37,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_0EE847D4_2B83_B4D3_41A9_D892B2FE9B13); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5B84DB_F223_1254_41DB_D625C00035F2",
   "yaw": -62.54,
   "pitch": -26.44,
   "hfov": 7.46,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAE1CF24_F21F_2FFC_41CD_4AC7A2B73E22",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 7.46,
   "yaw": -62.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_7_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87, this.camera_0B82C896_2B83_BB5F_41BD_3C84E7B0964D); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5B54DB_F223_1254_41CC_84DCB0457273",
   "yaw": 5.04,
   "pitch": -19.41,
   "hfov": 7.85,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E50BD41B_F21F_31D4_41C0_47B69F79630C",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 7.85,
   "yaw": 5.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_8_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A, this.camera_0E8A47EB_2B83_B4F5_41C4_865EC35090E9); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_ED963F7D_F261_2E4C_41CF_900DE276E32E",
   "yaw": 172.21,
   "pitch": 3.71,
   "hfov": 9.53,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EBC4A709_F221_1FB5_41C7_B8AEF9C70B64",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 9.53,
   "yaw": 172.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_1_HS_9_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.71,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A, this.camera_0EBA27F6_2B83_B4DE_417A_B97FA0A87FEA); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_EA4CD800_F221_31B3_41E0_CADB55C030DA",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 30.93,
   "yaw": 165.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_1_HS_10_1_0_map.gif",
      "width": 62,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A, this.camera_0EAC4803_2B83_BB36_41B4_85181EAA229B); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_EB8EB2F5_F223_165D_41D5_B3AA429062A3",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 16.81,
   "yaw": -171.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_1_HS_11_1_0_map.gif",
      "width": 35,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258, this.camera_0EC5B7AF_2B83_B54D_4180_B887389742CC); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2B41191C_266F_D2C1_41C3_0BC1E4383DF5",
   "yaw": 124.37,
   "pitch": 5.07,
   "hfov": 8.29,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0E171665_1E8C_88B7_41A4_691F8391419F",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 8.29,
   "yaw": 124.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_12_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258, this.camera_0EF637BC_2B83_B553_41A2_562905A7F5C5); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_0FCF3326_1E94_88B2_41B5_5CCB457A79D8",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 30.69,
   "yaw": 121.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_13_1_0_map.gif",
      "width": 62,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D3F661_279D_DF43_41B2_7E3FD2B6A477",
   "yaw": -6.77,
   "pitch": -24.18,
   "hfov": 7.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1BAAC540_26AD_5D41_41BA_22C81302DF56",
 "maps": [
  {
   "hfov": 7.14,
   "yaw": -6.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0_HS_0_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB, this.camera_0B76D27B_2B83_AFD5_41BA_EB762F43BDA6); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_18F8AE1C_26AD_CEC1_41A2_802328D40BEF",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 64.92,
   "yaw": -6.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0_HS_1_1_0_map.gif",
      "width": 119,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D41661_279D_DF43_41C2_E0DB9C7CCCA7",
   "yaw": 61.32,
   "pitch": 15.24,
   "hfov": 7.06,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_18B7CD5B_26AF_4D47_41C0_D70060F221D6",
 "maps": [
  {
   "hfov": 7.06,
   "yaw": 61.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7, this.camera_0B4B026F_2B83_AFCC_41B4_D32A209C9CDE); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_19E115BC_26AE_DDC1_419D_0B43204BD039",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 52.99,
   "yaw": 52.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0_HS_3_1_0_map.gif",
      "width": 53,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D4B661_279D_DF43_41A9_0EA5260CDD16",
   "yaw": 171.84,
   "pitch": 13.25,
   "hfov": 6.6,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_19D36D87_26AD_4DCF_41BC_8950DB7366E6",
 "maps": [
  {
   "hfov": 6.6,
   "yaw": 171.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913, this.camera_0B426262_2B83_AFF7_41BA_0760FFC23EFF); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_66DA6A0C_26A3_36C1_41AD_E6B89A8773AE",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 35.87,
   "yaw": 161.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0_HS_5_1_0_map.gif",
      "width": 74,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D1B660_279D_DF41_419C_3DBB398DC67F",
   "yaw": 175.59,
   "pitch": 4.96,
   "hfov": 3.45,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1D9B68C3_26A5_3347_41B5_594713AB9363",
 "maps": [
  {
   "hfov": 3.45,
   "yaw": 175.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB, this.camera_0FB16FA1_2B83_5575_41B6_713E0B901977); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_1AE4EBF3_26A5_D547_41C3_12DA1BAB7140",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 17.91,
   "yaw": 171.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0_HS_1_1_0_map.gif",
      "width": 61,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB, this.camera_0FA64FAC_2B83_5573_41A4_61FD47F06FB0); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_1A39170B_26A7_3EC7_41BD_E06F542DB151",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 15,
   "yaw": -172.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0_HS_2_1_0_map.gif",
      "width": 64,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_0EC78075_2B83_ABD2_41AF_646C2C0F4DD5); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E1218EF8_F221_EE54_41EA_CEEFCF71EEBF",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 46.4,
   "yaw": 131.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_3_1_0_map.gif",
      "width": 200,
      "height": 97,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_0BF7E150_2B83_ADD2_41C0_72DD7A679973); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E17FDDD4_F221_1253_41CE_EFDE082CE36C",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 18.84,
   "yaw": 120.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_4_1_0_map.gif",
      "width": 149,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_0ECE5081_2B83_AB32_41BB_3F523DDD9C4E); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E7FE903B_F263_11D4_41EE_2C8A1671F162",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 47.41,
   "yaw": 110.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_5_1_0_map.gif",
      "width": 144,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.79,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A, this.camera_0BCBE145_2B83_AD32_4199_DC201316D4F2); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EE2324DF_F223_124C_41E0_3F2C0A47CB50",
   "yaw": -167.55,
   "pitch": -16.02,
   "hfov": 7.52,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAF7AC82_F21E_F2B4_41D6_3D2FE0149904",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 7.52,
   "yaw": -167.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_6_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_0EF3608E_2B83_AB4E_41BF_F935C85574D2); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EE22E4DF_F223_124C_4188_EE6875D4E164",
   "yaw": 133.54,
   "pitch": -22.04,
   "hfov": 7.48,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAA2322C_F221_71F3_41EB_6850C713CF1D",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 7.48,
   "yaw": 133.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_7_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.04,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_0BF2315E_2B83_ADCE_416D_1AFCAE2D0F48); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EE2284DF_F223_124C_41E8_C0422EB6CBDB",
   "yaw": 122.11,
   "pitch": -10.24,
   "hfov": 3.74,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EAB6E883_F221_12B5_41D1_8306A5AA4E0B",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 3.74,
   "yaw": 122.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_8_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "paddingRight": 0,
 "maxHeight": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "horizontalAlign": "center",
 "width": 58,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "height": 58,
 "borderSize": 0,
 "mode": "push",
 "class": "IconButton",
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "visible": false,
 "maxWidth": 58,
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingRight": 0,
 "maxHeight": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "horizontalAlign": "center",
 "width": 58,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "height": 58,
 "borderSize": 0,
 "mode": "toggle",
 "class": "IconButton",
 "shadow": false,
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingTop": 0,
 "maxWidth": 58,
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingRight": 0,
 "maxHeight": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "horizontalAlign": "center",
 "width": 58,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "height": 58,
 "borderSize": 0,
 "mode": "toggle",
 "class": "IconButton",
 "shadow": false,
 "data": {
  "name": "IconButton HS "
 },
 "paddingTop": 0,
 "maxWidth": 58,
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9, this.camera_0B59590F_2B83_BD4D_41C5_7FFB5871F299); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E975E305_F262_F7BD_41E7_8B19253A6931",
   "yaw": 82.62,
   "pitch": -16.4,
   "hfov": 8.62,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E7602CC4_F263_12BC_41CC_E94B04E3DF22",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 8.62,
   "yaw": 82.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_0B5418F8_2B83_BCD3_41BD_ACB4D3C91941); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E9757306_F262_F7BF_41D6_367717E1421C",
   "yaw": 154.47,
   "pitch": -23.8,
   "hfov": 11.66,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E77D67F9_F261_3E55_41D9_F4D8152FB2A5",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 11.66,
   "yaw": 154.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87, this.camera_0B4DA926_2B83_BD7F_41BE_1893EBB6875B); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E4C8935E_F262_F64C_41D8_E9E4AAE1AC82",
   "yaw": 144.32,
   "pitch": -9.62,
   "hfov": 8.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E72758A0_F261_12F4_41AB_217536E83188",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 8.35,
   "yaw": 144.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_2_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.62,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9, this.camera_0B44391A_2B83_BD57_41B3_0C8135BDC7B6); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E482B904_F27F_33BC_41EE_1654AE186CFB",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 46.39,
   "yaw": 95.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_3_1_0_map.gif",
      "width": 200,
      "height": 185,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3352A9A_F174_5652_4180_3DD758DB6B02, this.camera_0B5FE903_2B83_BD35_41C2_9E8BD917CE1E); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E49EBE0C_F27F_11B3_4192_C7906B82EEAC",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 35.14,
   "yaw": 162.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_4_1_0_map.gif",
      "width": 103,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87, this.camera_0B770930_2B83_BD52_41B0_5F40A0CC11C3); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E4E3FC0B_F261_F1B4_41EC_E34EB27B5570",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 24.81,
   "yaw": 129.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_5_1_0_map.gif",
      "width": 98,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -7.46,
   "hfov": 8.79,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_6_0.png",
      "width": 151,
      "height": 151,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.67,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_0EBE4F88_1E75_987E_41A3_EA825528C6E8",
 "maps": [
  {
   "hfov": 8.79,
   "yaw": -7.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_0E6960D5_1E74_8996_417B_DAC598F504AF",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 42.25,
   "yaw": -6.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_7_1_0_map.gif",
      "width": 71,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40E0F66B_279D_DF47_41B8_DA0C7A56E9F4",
   "yaw": 6.97,
   "pitch": -19.4,
   "hfov": 3.85,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_6B6ABD63_2662_CD47_41BE_3F790D114B04",
 "maps": [
  {
   "hfov": 3.85,
   "yaw": 6.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE, this.camera_0A1153CE_2B83_ACCE_41B9_E4F01C29B41F); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_68847ECC_2663_4F41_41BC_E19E8EBDB13C",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 18.62,
   "yaw": 7.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0_HS_1_1_0_map.gif",
      "width": 74,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01a Right"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40E1166C_279D_DF41_4187_4C13359E5378",
   "yaw": 22.47,
   "pitch": -41.31,
   "hfov": 7.16,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_689D71C5_2665_3543_4193_A719B1B4CBB4",
 "maps": [
  {
   "hfov": 7.16,
   "yaw": 22.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C, this.camera_0A0333DA_2B83_ACD6_41C4_70E2CC3C1EE8); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_6963853D_2666_D2C3_41BA_9DBB20E2BD21",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 10.48,
   "yaw": 23.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0_HS_3_1_0_map.gif",
      "width": 18,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4EB80EFE_279D_4F41_41C0_FC748DB4D20A",
   "yaw": -92.05,
   "pitch": -37.62,
   "hfov": 7.59,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_7180FAE5_279F_D743_41A8_35FB40D0C898",
 "maps": [
  {
   "hfov": 7.59,
   "yaw": -92.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0_HS_4_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.62,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1486031B_1E77_8893_41A4_C788B23EDBC4, this.camera_0A36A3E6_2B83_ACFE_41C5_050920479272); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_70E45197_279F_55CF_41C1_8ABC73C2B70F",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 73.58,
   "yaw": -90.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0_HS_5_1_0_map.gif",
      "width": 91,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E3F1B5DE_F223_124C_41EA_3A2EEE54E7E4",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 66.2,
   "yaw": -72.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_4_1_0_map.gif",
      "width": 200,
      "height": 148,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E2F633BC_F223_16CC_41E7_54695B4EB8B4",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 74.48,
   "yaw": 83.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_5_1_0_map.gif",
      "width": 200,
      "height": 173,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E05D49D2_F222_F254_41D8_1C4966A460A8",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 38.38,
   "yaw": -157.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_6_1_0_map.gif",
      "width": 200,
      "height": 199,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EE2104DE_F223_124C_41E0_55E403B6F018",
   "yaw": 66.32,
   "pitch": -25.03,
   "hfov": 8.67,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E53DE815_F267_11DD_41D4_91DD49C4C392",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 8.67,
   "yaw": 66.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_7_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.03,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EE20A4DE_F223_124C_41DF_B2D4BB056EC3",
   "yaw": -57.77,
   "pitch": -24.92,
   "hfov": 8,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E50CF6B5_F266_FEDC_41D6_53B81E0E4E10",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 8,
   "yaw": -57.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_8_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EE2054DE_F223_124C_41C6_D6436942DEC1",
   "yaw": -153.91,
   "pitch": -12.22,
   "hfov": 7.78,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E518569B_F261_1ED4_41D0_23E5AC8FBB9E",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 7.78,
   "yaw": -153.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_9_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0, this.camera_08A995D4_2B83_B4D3_4180_354C7C879807); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -43.57,
   "hfov": 4.75,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_10_0.png",
      "width": 80,
      "height": 83,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.18,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_10899961_1E73_F8AE_41A9_7861C0ACA682",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 4.75,
   "yaw": -43.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_10_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_E3011261_F174_76EF_41E1_5CAAD482684A_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC205856_E64F_3712_41EC_BA0C87196002, this.camera_08CE0541_2B83_B535_418D_605C60797F13); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2519518_E679_391E_41DF_2C50B651C871",
   "yaw": 175.93,
   "pitch": -33.33,
   "hfov": 3.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FFA8E91E_E649_6912_41EA_25F93DB663F0",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "hfov": 3.77,
   "yaw": 175.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC205856_E64F_3712_41EC_BA0C87196002, this.camera_08F14558_2B83_B5D3_4197_32F44B0C7170); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_FF378CE7_E649_2F32_41E6_C8A4DB437805",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 30.56,
   "yaw": 165.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0_HS_1_1_0_map.gif",
      "width": 99,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F2500518_E679_391E_41D9_D311D06AF959",
   "yaw": 2.86,
   "pitch": -0.87,
   "hfov": 7.61,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FFD33961_E647_292E_41E2_4E840151C994",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "hfov": 7.61,
   "yaw": 2.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0_HS_2_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA, this.camera_08DDD52A_2B83_B577_41BA_E43B25DCDB08); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_FFF1E0C5_E647_3776_41CE_BCBE0F5E2671",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 38.09,
   "yaw": 0.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0_HS_3_1_0_map.gif",
      "width": 184,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 22.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40DB1665_279D_DF43_41A4_82BFD634C717",
   "yaw": -124.34,
   "pitch": 19.89,
   "hfov": 7.36,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_6EFE2C29_266F_32C3_41BC_F4ADCC0EE967",
 "maps": [
  {
   "hfov": 7.36,
   "yaw": -124.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1482A27E_1E74_8892_4192_3388B028C3C0, this.camera_0F78BFF6_2B83_54DE_41B2_7A9CC6DDAD2D); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_6E2F035C_266F_3541_41C2_07EE89C99DDE",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 24.23,
   "yaw": -125.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0_HS_1_1_0_map.gif",
      "width": 35,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40DBB666_279D_DF41_41C1_70C556D9E430",
   "yaw": -88.37,
   "pitch": -18.8,
   "hfov": 6.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_6E36E25C_2662_D741_416C_954C5DBE3993",
 "maps": [
  {
   "hfov": 6.54,
   "yaw": -88.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0_HS_2_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148A5298_1E77_899E_419D_1D63F89160F9, this.camera_0F715FE9_2B83_54F5_41BF_D86453928D0E); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_6CC8E40C_2663_52C1_419E_465E1F09606E",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 53.72,
   "yaw": -87.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0_HS_3_1_0_map.gif",
      "width": 125,
      "height": 199,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40DCC667_279D_DF4F_41C2_A6EA1073792E",
   "yaw": 98.84,
   "pitch": 19.19,
   "hfov": 7.39,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_6A4F008C_2665_53C0_419C_BDA693C5D548",
 "maps": [
  {
   "hfov": 7.39,
   "yaw": 98.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663, this.camera_0F6CC003_2B83_AB36_41A7_80AEAF733B6A); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_6F506B64_2666_D541_41AE_054FBF667444",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 89.33,
   "yaw": 95.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0_HS_5_1_0_map.gif",
      "width": 120,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_14827FE7_1E74_97B2_4172_168011EC93C6_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D5D662_279D_DF41_41B1_C3A8329AFD6D",
   "yaw": -112.03,
   "pitch": 10.47,
   "hfov": 7.2,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_66D9EF0D_26A2_CEC3_41A5_A60CD68B6794",
 "maps": [
  {
   "hfov": 7.2,
   "yaw": -112.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD, this.camera_0B72E93B_2B83_BD56_4193_0886B7DE1163); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_667933FC_26A5_7541_41B2_B9E5D07BA8FD",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 63.34,
   "yaw": -120.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0_HS_1_1_0_map.gif",
      "width": 122,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A, this.camera_0BAF4225_2B83_AF72_41B0_742A36BC28BB); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40C2C650_279D_DF41_41AC_CF3FF342AED8",
   "yaw": -17.59,
   "pitch": 4.23,
   "hfov": 4.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_056493E5_26A6_F543_4197_285AD3614FB6",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 4.31,
   "yaw": -17.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A, this.camera_0BA8A231_2B83_AF52_419C_ACFD1D5F2818); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_02345DC8_26A7_CD41_41A8_4A68F0EC93E4",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 20.37,
   "yaw": -19.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0_HS_1_1_0_map.gif",
      "width": 77,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14867ECB_1E74_99F2_41B9_68414C867124, this.camera_0B52423C_2B83_AF53_41C1_3CE0EF025E53); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40C49651_279D_DF43_41B9_D1924B8AEF5D",
   "yaw": -167.04,
   "pitch": 2.18,
   "hfov": 5.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_00AEB406_26AE_D2C1_4195_BC997CF60C5E",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 5.31,
   "yaw": -167.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14867ECB_1E74_99F2_41B9_68414C867124, this.camera_0B5D024A_2B83_AF37_412E_C8E80BBE01B0); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_036A9E5C_26AF_CF41_41C2_27359D14D74A",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 39.55,
   "yaw": -160.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0_HS_1_1_0_map.gif",
      "width": 139,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14867ECB_1E74_99F2_41B9_68414C867124, this.camera_0B477256_2B83_AFDF_419D_544F268D648A); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_0155C320_26AE_D6C0_4171_110BCB59C45C",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 15.99,
   "yaw": 171.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0_HS_2_1_0_map.gif",
      "width": 48,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_148B8F42_1E74_B8F2_4195_88BE25966606_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40CE965D_279D_DF43_41C2_F2E360B62983",
   "yaw": 175.09,
   "pitch": -13.9,
   "hfov": 3.74,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1181D0B7_26E3_33CF_41C2_8171A01C0699",
 "maps": [
  {
   "hfov": 3.74,
   "yaw": 175.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0_HS_0_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A, this.camera_092B2514_2B83_B552_41A3_C70E38F9BF1A); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_116DF353_26E3_3547_41C3_5B9A5CA1F14C",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 19.12,
   "yaw": 170.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0_HS_1_1_0_map.gif",
      "width": 126,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB, this.camera_090924E6_2B83_B4FF_41A9_2E3C92A297E5); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40CF165D_279D_DF43_418F_BC713D11E89D",
   "yaw": 75.65,
   "pitch": -27.67,
   "hfov": 7.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_117DA68B_26E5_5FC0_41C1_9D381572987A",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 7.77,
   "yaw": 75.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0_HS_2_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB, this.camera_093A14FB_2B83_B4D6_41B0_B62729705A31); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_1F256123_26E5_32C7_41BE_2180D9154F2A",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 66.94,
   "yaw": 74.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0_HS_3_1_0_map.gif",
      "width": 95,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D0665E_279D_DF41_41BF_0FAA7A4C96F7",
   "yaw": -86.26,
   "pitch": -21.86,
   "hfov": 6.76,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1FFAD2C4_26E7_5742_41C1_7E43C5C271DF",
 "maps": [
  {
   "hfov": 6.76,
   "yaw": -86.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0_HS_4_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148A5298_1E77_899E_419D_1D63F89160F9, this.camera_090774D3_2B83_B4D5_4198_291972CF2F6F); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_1F4AE7C0_26E7_3D40_41AE_42F51A46B728",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 61.15,
   "yaw": -74.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0_HS_5_1_0_map.gif",
      "width": 84,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.62,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D0865E_279D_DF41_41BF_3BD319B451E1",
   "yaw": -13.48,
   "pitch": 5.12,
   "hfov": 7.23,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1E5F2684_26E5_7FC1_41BE_AC313C0AC75A",
 "maps": [
  {
   "hfov": 7.23,
   "yaw": -13.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47, this.camera_091614B7_2B83_AB5D_41C3_3DA720B716C6); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_1CB8440A_26E5_32C1_41C0_103B237CD2F1",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 50.62,
   "yaw": -22.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0_HS_7_1_0_map.gif",
      "width": 78,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_15748459_1E77_889E_4190_1EE592F648CB_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14867ECB_1E74_99F2_41B9_68414C867124, this.camera_0F4E774E_2B83_B5CF_41A7_35718893D229); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40C5E652_279D_DF41_41A3_B136996488A9",
   "yaw": 4.93,
   "pitch": -23.69,
   "hfov": 5.63,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_01D1F4C0_26AD_F340_4178_646750240BE8",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "hfov": 5.63,
   "yaw": 4.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14867ECB_1E74_99F2_41B9_68414C867124, this.camera_0F7FE75A_2B83_B5D7_41C1_1FDCB0F95FE4); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_0E93D866_26A2_D340_41B2_4E5016646A51",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 49.63,
   "yaw": 4.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0_HS_1_1_0_map.gif",
      "width": 143,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6, this.camera_0FAC6735_2B83_B55D_41BA_8B22999AE445); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40C60652_279D_DF41_41A7_EE0E1977D3CE",
   "yaw": 81.96,
   "pitch": -17.35,
   "hfov": 4.9,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_01798411_26A3_D2C3_41AC_D4AD85BE1628",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 4.9,
   "yaw": 81.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0_HS_2_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F545612C_E6C7_3936_41E2_7B4B285066B6, this.camera_0F5D8743_2B83_B535_41B4_F8B23B849FC2); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_014DF130_26A2_F2C1_41B3_D5B96E562C37",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 58.52,
   "yaw": 92.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0_HS_3_1_0_map.gif",
      "width": 200,
      "height": 164,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE, this.camera_0F38704C_2B83_AB32_41AB_821B2BD73B73); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_6941AF25_2665_CEC3_41AB_6A0EEF2560FC",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 30.67,
   "yaw": -70.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0_HS_0_1_0_map.gif",
      "width": 83,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.76,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40E2366D_279D_DF43_41B9_2D069C9118F5",
   "yaw": -76.85,
   "pitch": -16.4,
   "hfov": 3.28,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_691D20E3_2663_3347_41C1_718C48CF9DB4",
 "maps": [
  {
   "hfov": 3.28,
   "yaw": -76.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40E2C66E_279D_DF41_41B9_567115182B9E",
   "yaw": 81.41,
   "pitch": 14.11,
   "hfov": 8.56,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_699D2D3F_2663_4D3F_41A6_A7114BCA3BEB",
 "maps": [
  {
   "hfov": 8.56,
   "yaw": 81.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE, this.camera_0F99C712_2B83_B557_41AE_3DDCD2A110A2); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_7690A8C6_266D_3341_41C2_DE5F15151160",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 56.99,
   "yaw": 92.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0_HS_1_1_0_map.gif",
      "width": 67,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1486031B_1E77_8893_41A4_C788B23EDBC4, this.camera_0860F634_2B83_B753_41C2_744BA384A9C6); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40C6A653_279D_DF47_41B9_E2F515CD1863",
   "yaw": 8.25,
   "pitch": -19.52,
   "hfov": 4.18,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0DD68234_26A5_56C0_41A2_AED384BF3656",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "hfov": 4.18,
   "yaw": 8.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1486031B_1E77_8893_41A4_C788B23EDBC4, this.camera_0811264A_2B83_B737_41BB_EFF6E7C825E5); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_0908A1A1_26A3_D5C3_41C1_D02BAAE1F881",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 38.83,
   "yaw": 8.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0_HS_1_1_0_map.gif",
      "width": 160,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977, this.camera_0803365E_2B83_B7CE_41BD_2AE6437D43D4); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40C7E653_279D_DF47_41B2_C1BB44EC2E66",
   "yaw": -175.02,
   "pitch": -16.46,
   "hfov": 4.9,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0B9B26FC_269D_5F41_41BB_2A79A64FD706",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 4.9,
   "yaw": -175.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0_HS_2_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977, this.camera_0833C675_2B83_B7DD_41BF_4FB0906522AF); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_0BB9D918_269D_32C1_41AA_77DBA7C7D0AB",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 39.62,
   "yaw": -160.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0_HS_3_1_0_map.gif",
      "width": 137,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977, this.camera_0825068A_2B83_B734_41C0_3EE49470F2AF); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_0BD112F1_269D_5743_41B7_B34958D200E3",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 51.66,
   "yaw": 153.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0_HS_4_1_0_map.gif",
      "width": 125,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40E3066E_279D_DF5E_4176_CF527C3A1C44",
   "yaw": -164.77,
   "pitch": 8.44,
   "hfov": 6.21,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_691499CF_266E_D55F_41BE_771AED4C3000",
 "maps": [
  {
   "hfov": 6.21,
   "yaw": -164.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB, this.camera_0A8B036D_2B83_ADF2_41B3_5B42775FA829); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_7625B0C6_266F_D341_4196_60BF87E197BE",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 25.19,
   "yaw": -168.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0_HS_1_1_0_map.gif",
      "width": 53,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB, this.camera_0ABDA37A_2B83_ADD6_41A4_DB864FDA2770); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_7680D35D_266E_D543_41B6_A79D1D1E0D19",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 17.85,
   "yaw": 171.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_0_HS_2_1_0_map.gif",
      "width": 49,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1575CF89_1E77_987E_4194_2F4225271FF5, this.camera_0AA10386_2B83_AD3E_41A2_8B6A03D0AE5C); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_74B4061E_266D_5EC0_41BC_03305B688CEC",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 82.67,
   "yaw": 4.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_1_HS_3_1_0_map.gif",
      "width": 200,
      "height": 168,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40E34670_279D_DF41_419A_E2D9CB6390D2",
   "yaw": 4.73,
   "pitch": -21.91,
   "hfov": 4.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_74E65984_2663_75C1_4183_26E16EE69400",
 "maps": [
  {
   "hfov": 4.1,
   "yaw": 4.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_1_HS_4_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D, this.camera_0B15B970_2B83_BDD3_41A5_B022689490B0); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40BD164D_279D_DF43_41B6_1459F67C7FEA",
   "yaw": 144.9,
   "pitch": 5.51,
   "hfov": 8.6,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_31914311_2665_D6C3_41BD_1F8EDE3AC9EE",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 8.6,
   "yaw": 144.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D, this.camera_0B1F397C_2B83_BDD3_4173_3290008C73A2); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_318D6680_2663_3FC1_41C2_E7F996E97362",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 61.03,
   "yaw": 150.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0_HS_1_1_0_map.gif",
      "width": 85,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 01a Left"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_383F578F_26A5_FDDF_41B0_55777C71AFC1",
   "yaw": 81.56,
   "pitch": -19.86,
   "hfov": 10.85,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_3FF59150_269E_D541_41C0_62BAE6D6E0E5",
 "maps": [
  {
   "hfov": 10.85,
   "yaw": 81.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0_HS_2_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1486CC94_1E74_9995_41B4_4B513680E8C1, this.camera_0B672950_2B83_BDD2_4180_6F9478B0248F); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_3F44FF50_269F_4D40_41AA_34D22735FA58",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 46.92,
   "yaw": 85.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0_HS_3_1_0_map.gif",
      "width": 170,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A, this.camera_0B61795A_2B83_BDD6_41AA_55BA8CE2AF5A); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3838678F_26A5_FDDF_41B2_3755D596F659",
   "yaw": -94.35,
   "pitch": -20.09,
   "hfov": 5.26,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3F55D44E_269D_5341_4147_7B6B41EC70EC",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "hfov": 5.26,
   "yaw": -94.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0_HS_4_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148B8F42_1E74_B8F2_4195_88BE25966606, this.camera_0B03A993_2B83_BD56_41A2_9845F16342A8); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0F488A93_26A5_D7C7_417F_F54618BD6C26",
   "yaw": 56.24,
   "pitch": 7.65,
   "hfov": 7.81,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3A12A406_26A5_72C1_41A4_E811C69502A2",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 7.81,
   "yaw": 56.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148B8F42_1E74_B8F2_4195_88BE25966606, this.camera_0B0F799E_2B83_BD4F_41C4_6D15B841BB43); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_3BAD3090_26A3_D3C1_41C2_778C480BF3E0",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 14.38,
   "yaw": 56.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0_HS_6_1_0_map.gif",
      "width": 31,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1486D626_1E74_88B2_418A_1B5A5850E43B, this.camera_0B7C5945_2B83_BD32_41B5_FD3981382334); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0F49EA94_26A5_D7C1_419E_C7007532FB34",
   "yaw": -50.68,
   "pitch": 8.47,
   "hfov": 7.79,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_389546CC_26A3_3F41_41BB_453C2C587F2E",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 7.79,
   "yaw": -50.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_15745C11_1E74_986E_4184_2C27856CB6C5, this.camera_0B1A3988_2B83_BD33_41BD_D10D83D64927); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_3B4E0240_26AD_3741_41B6_75567B08B25E",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 30.66,
   "yaw": -47.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0_HS_8_1_0_map.gif",
      "width": 44,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A, this.camera_0B6B8965_2B83_BDF2_419E_50E8AA614A40); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_39E1B8C8_26AF_D341_418F_01502807523B",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 32.84,
   "yaw": -93.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0_HS_9_1_0_map.gif",
      "width": 145,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_14867ECB_1E74_99F2_41B9_68414C867124_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40DD6668_279D_DF41_41AA_8B9BEABBC25B",
   "yaw": 93.35,
   "pitch": 6.83,
   "hfov": 6.52,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_6C396F3B_2667_4EC0_41B8_B8FE68ADF6A8",
 "maps": [
  {
   "hfov": 6.52,
   "yaw": 93.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14827FE7_1E74_97B2_4172_168011EC93C6, this.camera_0FE9A6FD_2B83_B4D2_41B2_06DA5B9929FF); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_6D7DC754_2665_5D41_41C2_055F7AB65C01",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 52.63,
   "yaw": 100.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0_HS_1_1_0_map.gif",
      "width": 117,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D6B662_279D_DF41_41A0_6B16518DA893",
   "yaw": -2.49,
   "pitch": 7.46,
   "hfov": 6.26,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_642125A5_26A3_FDC3_41C1_2426AB61B6E8",
 "maps": [
  {
   "hfov": 6.26,
   "yaw": -2.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_656BDEE5_26A3_4F40_41B6_7B7DB9FD301A",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 73.49,
   "yaw": -5.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0_HS_1_1_0_map.gif",
      "width": 200,
      "height": 190,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D, this.camera_02646F78_26A5_CD41_4156_43AA284D3148)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_EBE0BCC9_E65B_2F71_41C7_EB06380EFCE9",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 62.31,
   "yaw": 149.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_0_1_0_map.gif",
      "width": 148,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D, this.camera_02778F85_26A5_CDC0_41AE_F3DA76861E10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E852FDA3_E659_2932_41E1_4BC810D66EEE",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 28.22,
   "yaw": -166.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_1_1_0_map.gif",
      "width": 68,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976, this.camera_0A3973F5_2B83_ACD2_4180_2447F934F4CC); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E9056477_E65F_1F11_41E8_BAF685334FD5",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 27.23,
   "yaw": -7.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_3_1_0_map.gif",
      "width": 200,
      "height": 187,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FA796552_E648_F912_41E4_000E9B6922DD",
   "yaw": -6.08,
   "pitch": -1.55,
   "hfov": 5.46,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FEC3CD92_E64B_2912_41E9_323073D95A3F",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "hfov": 5.46,
   "yaw": -6.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_5_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EDA86099_E64F_371E_41EA_4048F9685E6D, this.camera_0386DF91_26A5_CDC0_41B0_1805566D4733)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FA792552_E648_F912_41EB_C8727674C6A3",
   "yaw": 178.03,
   "pitch": -26.86,
   "hfov": 3.51,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F1AA7EA8_E649_2B3E_41CC_9087B60C1C42",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "hfov": 3.51,
   "yaw": 178.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_6_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_0BB698B5_2B83_BB5D_4190_C2B3B0752070); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_EE5637CA_F37C_FE32_41D0_DB741DCF1D0A",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 34.38,
   "yaw": -163.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_1_1_0_map.gif",
      "width": 131,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5CF4DC_F223_124C_41D1_0135FFCD526A",
   "yaw": -144.22,
   "pitch": -0.85,
   "hfov": 4.87,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E9862826_F37D_F272_41D4_AB9AA9D819B5",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 4.87,
   "yaw": -144.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_EE4508A2_F374_7272_41EE_0F4BBC2AB5DC",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 59.01,
   "yaw": -3.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_4_1_0_map.gif",
      "width": 200,
      "height": 177,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.37,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9, this.camera_0BBC48CC_2B83_BB33_41B4_E758EA0172A2); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_EE5830A1_F374_526E_41E0_5F255EDD0CB8",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 29.98,
   "yaw": 45.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_6_1_0_map.gif",
      "width": 141,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A, this.camera_0B8FA8A1_2B83_BB72_419F_6E9CD5E92FCC); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E23B607E_F227_724C_41E2_CF45BFC0CD4E",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 28.03,
   "yaw": -46.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_8_1_0_map.gif",
      "width": 113,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87, this.camera_0BAFE8E2_2B83_BCF7_4195_4AB66117D0E2); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5FC4DD_F223_124C_41E6_7AAF37EB2F07",
   "yaw": 135.51,
   "pitch": -16.27,
   "hfov": 10.96,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E58D26F1_F261_7E54_41D6_177877F231FD",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 10.96,
   "yaw": 135.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_9_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E3322B6E_F174_36F2_41E8_9261080F3A87, this.camera_0BAAC8ED_2B83_BCF2_41C1_EAD0C6431BDC); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E44F06B5_F267_1EDD_41BA_128AC83C00F5",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 67.39,
   "yaw": 138.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_10_1_0_map.gif",
      "width": 189,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5F54DD_F223_124C_41D4_D12F07CE8EE1",
   "yaw": -4.96,
   "pitch": -29.85,
   "hfov": 10.8,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E5012374_F261_165C_41E2_26D991B3488F",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 10.8,
   "yaw": -4.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_11_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9, this.camera_0BA598D7_2B83_BCDD_41B0_2D6227C624EC); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5EE4DD_F223_124C_41DF_23ACADF1D2EC",
   "yaw": 32.01,
   "pitch": -17.12,
   "hfov": 7.48,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E5707ACD_F261_164D_41E4_54E6F0A81EA0",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 7.48,
   "yaw": 32.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_12_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A, this.camera_0B8AE8AB_2B83_BB76_41C5_19AD99EEF329); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5E64DD_F223_124C_41DF_0AC896D4CB7C",
   "yaw": -39.89,
   "pitch": -18.24,
   "hfov": 5.63,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E56CA583_F261_12B5_41E8_CCC2601B2FC6",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 5.63,
   "yaw": -39.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_13_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_0BB098C2_2B83_BB37_41B9_4E9EA129EA70); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_EE5E24DE_F223_124C_41E3_CBA98CFF7E2B",
   "yaw": -158,
   "pitch": -16.89,
   "hfov": 7.49,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_EACCB364_F261_367C_41CD_A12E896F212C",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 7.49,
   "yaw": -158,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_14_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D67662_279D_DF41_41BF_E798DFC67FE3",
   "yaw": -168.05,
   "pitch": 2.06,
   "hfov": 5.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_644CE820_26A5_52C1_41A6_B82EBD7D8644",
 "maps": [
  {
   "hfov": 5.31,
   "yaw": -168.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD, this.camera_0A53E391_2B83_AD52_41BF_6D722EF22E02); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_65EFA79C_26A5_DDC1_41B5_FD1F12DA50A5",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 20.95,
   "yaw": -168.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0_HS_1_1_0_map.gif",
      "width": 90,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_1489D783_1E74_8872_41B2_143BBBD42CE1_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977, this.camera_0B6E32B0_2B83_AF52_41AF_7FBCF969DB37); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9345D69_E839_B2BB_41C3_F0902D2CD9CD",
   "yaw": 44.43,
   "pitch": -15.86,
   "hfov": 5.04,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E5C5F71F_E826_7E97_41A2_D36B77CAF576",
 "data": {
  "label": "Circle 01c"
 },
 "maps": [
  {
   "hfov": 5.04,
   "yaw": 44.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977, this.camera_0B68F2BC_2B83_AF52_41BA_1CF7FF2F22B6); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E5F579AB_E826_95B8_41BA_814E75F81412",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 45.9,
   "yaw": 29.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_1_1_0_map.gif",
      "width": 189,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.79,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E798AE19_E83A_8E9B_41BF_D0CD0C67E1A4",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 20.02,
   "yaw": 83.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_2_1_0_map.gif",
      "width": 170,
      "height": 160,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F90B8D69_E839_B2BB_41DF_068371605097",
   "yaw": 77.68,
   "pitch": -10.17,
   "hfov": 3.64,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E73FED1F_E83B_B297_41E4_379B1ED0B380",
 "data": {
  "label": "Circle 01c"
 },
 "maps": [
  {
   "hfov": 3.64,
   "yaw": 77.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_3_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1486CC94_1E74_9995_41B4_4B513680E8C1, this.camera_0B705288_2B83_AF33_41BB_808A837765EA); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0F20CA7F_26A5_D73F_41C1_E8CDF0C42761",
   "yaw": -171.06,
   "pitch": -23.6,
   "hfov": 6.56,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3DE7DABD_26A7_37C3_41A6_9B38C84BBC98",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "hfov": 6.56,
   "yaw": -171.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_4_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1486CC94_1E74_9995_41B4_4B513680E8C1, this.camera_0B79B298_2B83_AF52_41AA_4692A38BBA54); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_738E9127_27A5_72CF_41B9_FBF5F9FEDAF4",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 42.87,
   "yaw": -159.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_5_1_0_map.gif",
      "width": 125,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.79,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1486CC94_1E74_9995_41B4_4B513680E8C1, this.camera_0B64A2A4_2B83_AF72_41B3_664916E969A8); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_72769A98_27A5_57C1_41B7_850E5EC8D0CF",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 27.33,
   "yaw": 165.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_6_1_0_map.gif",
      "width": 114,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_0BBAF20C_2B83_AF32_41C2_D2D6BF56C317); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FECED969_F21F_3275_41EC_54E67DE2AD8A",
   "yaw": -14.93,
   "pitch": 1.93,
   "hfov": 8.07,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_E62C4CCA_F0BC_5232_41E1_B4A5D241D42A",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 8.07,
   "yaw": -14.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8, this.camera_0BA46217_2B83_AF5E_41AF_8B1DDDF66F7A); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_E9E9F7F7_F0BC_5DD2_4184_2E5977F5F29F",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 31.3,
   "yaw": -13.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_1_1_0_map.gif",
      "width": 96,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB, this.camera_0B8C61E3_2B83_ACF6_41C4_5164C563E324); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_1B4C2FBA_0BEC_E9EF_41A3_E6BA431B5FC6",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 24.04,
   "yaw": -168.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_2_1_0_map.gif",
      "width": 72,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB, this.camera_0BB5C1F0_2B83_ACD2_41A5_B3B15862F062); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_04A8EEED_0BED_AB6A_4188_732570EF4EE4",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 34.41,
   "yaw": 171.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_3_1_0_map.gif",
      "width": 102,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB, this.camera_0BBF2201_2B83_AF32_4172_FD94A1123B1C); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1AE638BE_0BE5_57E6_4191_362F35CCEF15",
   "yaw": -169.54,
   "pitch": 5.81,
   "hfov": 8.86,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1B12F264_0BEB_7A9B_4186_FBD23A2FBFC4",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 8.86,
   "yaw": -169.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE, this.camera_0BF8E179_2B83_ADD2_41C2_016AFCC5AE67); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40C82653_279D_DF47_41A0_52737D71DF01",
   "yaw": -96.45,
   "pitch": -37.12,
   "hfov": 9.04,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_085CEFF0_26E6_CD41_41B5_7469B228C424",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 9.04,
   "yaw": -96.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0_HS_0_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE, this.camera_0BE38187_2B83_AD3E_41C3_790F41EA5641); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_0810999B_26E7_D5C7_419E_C8F7AA2221BF",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 66.69,
   "yaw": -94.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0_HS_1_1_0_map.gif",
      "width": 94,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.53,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1575CF89_1E77_987E_4194_2F4225271FF5, this.camera_0B9211AF_2B83_AD4E_418F_AEA2BFF2D0BA); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40C93654_279D_DF41_41A8_B0FF40DD5E8D",
   "yaw": 67.41,
   "pitch": -22.35,
   "hfov": 7.25,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_08426FA0_26E5_CDC1_41B6_33E27441411D",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 7.25,
   "yaw": 67.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0_HS_2_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1575CF89_1E77_987E_4194_2F4225271FF5, this.camera_0B9C71BA_2B83_AD56_41B0_004509CE6712); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_087155A2_26E3_5DC1_41C2_7BDC764B5DE1",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 58.41,
   "yaw": 66.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0_HS_3_1_0_map.gif",
      "width": 172,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A, this.camera_0B8731C5_2B83_AD32_41BC_817EE3D6B04B); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40CA6654_279D_DF41_41C3_1EB9A9E2F5D9",
   "yaw": -4.31,
   "pitch": -18.63,
   "hfov": 4.74,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_09B1A38C_26E3_35C0_4194_DC32B1AECDDB",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 4.74,
   "yaw": -4.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0_HS_4_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A, this.camera_0B8081D3_2B83_ACD6_41B8_D7D2F0292B93); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_09FE6903_26ED_F2C7_41A9_CF107E2B8988",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 53.58,
   "yaw": -1.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0_HS_5_1_0_map.gif",
      "width": 171,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196, this.camera_0BEDE195_2B83_AD52_41BC_E77A004E3F2B); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40CB5655_279D_DF43_41C2_398116F21276",
   "yaw": 172.17,
   "pitch": -24.45,
   "hfov": 6.34,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_096232B6_26EF_57C1_41AC_78BEFAB032B9",
 "data": {
  "label": "Circle Point 01c"
 },
 "maps": [
  {
   "hfov": 6.34,
   "yaw": 172.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0_HS_6_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196, this.camera_0B9731A4_2B83_AD72_41AB_A28D2FE7BBD8); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_16571BF9_26EF_5543_41BB_3E1601F97026",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 48.24,
   "yaw": 157.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0_HS_7_1_0_map.gif",
      "width": 128,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0F46CA94_26A5_D7C1_41C2_84EB373CBA95",
   "yaw": 9.06,
   "pitch": 14.87,
   "hfov": 9.02,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_39BA7CE7_26AD_534F_41BC_B431A05F079A",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 9.02,
   "yaw": 9.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_06E41740_26A2_DD41_41A0_FAF4EC1F5FEF",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 52.18,
   "yaw": 5.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0_HS_1_1_0_map.gif",
      "width": 66,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14867ECB_1E74_99F2_41B9_68414C867124, this.camera_0FD596A5_2B83_B77D_41AE_47A70F852F1C); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0F471A9A_26A5_D7C1_419F_54C39667D105",
   "yaw": 82.05,
   "pitch": -14.46,
   "hfov": 3.49,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0781F0ED_26A2_D340_4186_C1C63DFD4AAE",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "hfov": 3.49,
   "yaw": 82.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0_HS_2_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14867ECB_1E74_99F2_41B9_68414C867124, this.camera_0FC5A6BC_2B83_B753_41A2_D7A333B3B21A); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_065E129F_26A5_D7FF_41C0_0ACB86240024",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 28.89,
   "yaw": 81.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0_HS_3_1_0_map.gif",
      "width": 152,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40C1264F_279D_DF5F_41BB_1F19D832E8BB",
   "yaw": 64.3,
   "pitch": 5.09,
   "hfov": 4.8,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_07D9EF6C_26A6_CD41_41B1_724C946DC700",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 4.8,
   "yaw": 64.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1486C35F_1E74_8892_41BD_7A97DC18788E, this.camera_0FF7C6D0_2B83_B4D3_4188_03E3F173FA55); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40C1B64F_279D_DF5F_41C1_AB69C8BD080A",
   "yaw": 164.44,
   "pitch": 15.5,
   "hfov": 10.69,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0469FE96_26A3_4FC1_41A7_0214E831306B",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 10.69,
   "yaw": 164.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1486C35F_1E74_8892_41BD_7A97DC18788E, this.camera_0FE786E5_2B83_B4FD_41C4_589F13706F82); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_05BC0A81_26A2_D7C0_41C1_F73629D90D32",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 41.54,
   "yaw": 159.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0_HS_6_1_0_map.gif",
      "width": 58,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40DA7664_279D_DF41_4184_569FBD68839E",
   "yaw": -174.34,
   "pitch": 7.79,
   "hfov": 5.01,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_61C4609C_2665_33C1_4190_2AA3E8DD5A7A",
 "maps": [
  {
   "hfov": 5.01,
   "yaw": -174.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.79,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148A5298_1E77_899E_419D_1D63F89160F9, this.camera_084D4608_2B83_B732_41C2_B4C33F4D93CC); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_61231E95_2662_CFC3_4191_B8930DB1C1B4",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 37.69,
   "yaw": -161.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0_HS_1_1_0_map.gif",
      "width": 120,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148A5298_1E77_899E_419D_1D63F89160F9, this.camera_087E661D_2B83_B752_41B6_7037EFDB87C6); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_6F30AF2B_2663_CEC7_41B7_EDF8314192E8",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 29.94,
   "yaw": 165.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0_HS_2_1_0_map.gif",
      "width": 87,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14867ECB_1E74_99F2_41B9_68414C867124, this.camera_0F8B171D_2B83_B54D_41B1_870088432EDA); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40C45651_279D_DF43_41A8_1087E0C7AD36",
   "yaw": 170.58,
   "pitch": 4.96,
   "hfov": 7.26,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0323C075_26A3_D343_41BB_C38412A204D1",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 7.26,
   "yaw": 170.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14867ECB_1E74_99F2_41B9_68414C867124, this.camera_0FBBC729_2B83_B575_41C2_F907E75AC871); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_00D3E140_26AD_3541_41C3_0E94BE517188",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 41.2,
   "yaw": 159.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0_HS_1_1_0_map.gif",
      "width": 107,
      "height": 199,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40D35660_279D_DF41_41C0_032D6C62F57D",
   "yaw": -84.54,
   "pitch": 10.27,
   "hfov": 5.52,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_1ABFFECB_26A5_4F47_4186_0BC4A85C4447",
 "maps": [
  {
   "hfov": 5.52,
   "yaw": -84.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB, this.camera_085C45F3_2B83_B4D6_41AE_FD9A6DE3F060); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_1BFC6623_26A5_FEC7_41A7_BDF13702377A",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 69.71,
   "yaw": -91.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0_HS_1_1_0_map.gif",
      "width": 196,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3832A78C_26A5_FDC1_41AD_5F40B1537B24",
   "yaw": 57.24,
   "pitch": -29.55,
   "hfov": 6.76,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_35425FD1_267D_4D43_41C3_08A08912F90B",
 "maps": [
  {
   "hfov": 6.76,
   "yaw": 57.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0_HS_0_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C, this.camera_08E2556A_2B83_B5F7_41A0_87AC4C7E9C19); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_32DBFA07_267F_56C0_41AA_1FE9EE8ABF68",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 102.93,
   "yaw": 44.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0_HS_1_1_0_map.gif",
      "width": 174,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91, this.camera_08B605AD_2B83_B54D_41B8_73D45D3058CD); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3833378D_26A5_FDC3_41A8_4D809F73678E",
   "yaw": -44.27,
   "pitch": -28.1,
   "hfov": 13.64,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3261CA71_267F_F743_41AF_405F053D10CD",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "hfov": 13.64,
   "yaw": -44.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0_HS_2_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91, this.camera_08B885C2_2B83_B537_4166_5BF95FF15046); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_326CB467_267D_F34F_41C2_B10625EE97F5",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 106.7,
   "yaw": -55.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0_HS_3_1_0_map.gif",
      "width": 200,
      "height": 119,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "yaw": -67.57,
   "hfov": 3.58,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0_HS_4_0.png",
      "width": 60,
      "height": 69,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_3238F257_2662_D74F_415E_DB69CD99048C",
 "maps": [
  {
   "hfov": 3.58,
   "yaw": -67.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14867ECB_1E74_99F2_41B9_68414C867124, this.camera_08935580_2B83_B532_41BC_D9DDD950A54A); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_383C478D_26A5_FDC3_41B5_F68BF3053398",
   "yaw": -134.68,
   "pitch": 2.38,
   "hfov": 5.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_33EF3F4E_266F_CD41_41C2_A9E0CA1D4790",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "hfov": 5.32,
   "yaw": -134.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_14867ECB_1E74_99F2_41B9_68414C867124, this.camera_0885E597_2B83_B55E_41BD_FE5FA1491932); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_301A7ABF_266D_57C0_41AE_8023E39149A1",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 29.79,
   "yaw": -140.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0_HS_6_1_0_map.gif",
      "width": 142,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40CDD65C_279D_DF41_41A0_C21A0FEF8AF2",
   "yaw": -119.84,
   "pitch": -23.04,
   "hfov": 5.39,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_10CF2DD6_26EE_CD40_41B7_3C4570A48213",
 "maps": [
  {
   "hfov": 5.39,
   "yaw": -119.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0_HS_0_0_0_map.gif",
      "width": 57,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.04,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1486031B_1E77_8893_41A4_C788B23EDBC4, this.camera_0B1BE2D3_2B83_ACD6_41A2_2E56C1EBC083); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_13431A5B_26EF_7747_41AD_8080B64F5A5C",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 82.88,
   "yaw": -121.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0_HS_1_1_0_map.gif",
      "width": 183,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_40CE465C_279D_DF41_41A0_F6DD0F8FA8C0",
   "yaw": 61.01,
   "pitch": -16.11,
   "hfov": 4.84,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_103017D0_26EF_5D41_41C2_5BD42EFA0887",
 "maps": [
  {
   "hfov": 4.84,
   "yaw": 61.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0_HS_2_0_0_map.gif",
      "width": 36,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_15748459_1E77_889E_4190_1EE592F648CB, this.camera_0B1132C8_2B83_AF32_4193_49EA770982ED); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "id": "overlay_1E982CD2_26ED_5341_41A9_8AE24146B3C6",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 40.48,
   "yaw": 61.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0_HS_3_1_0_map.gif",
      "width": 175,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "paddingRight": 0,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "horizontalAlign": "center",
 "right": "0%",
 "width": 110,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "top": "0%",
 "propagateClick": true,
 "borderSize": 0,
 "height": 110,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "layout": "horizontal",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "button menu sup"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0
},
{
 "paddingRight": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "horizontalAlign": "center",
 "right": "0%",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "width": "91.304%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "85.959%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "layout": "vertical",
 "gap": 3,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "paddingLeft": 0
},
{
 "paddingRight": 0,
 "maxHeight": 2,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "horizontalAlign": "center",
 "right": "0%",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": 53,
 "height": 2,
 "borderSize": 0,
 "class": "Image",
 "shadow": false,
 "data": {
  "name": "white line"
 },
 "paddingTop": 0,
 "maxWidth": 3000,
 "scaleMode": "fit_outside",
 "paddingLeft": 0
},
{
 "paddingRight": 0,
 "data": {
  "name": "-button set container"
 },
 "children": [
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "horizontalAlign": "left",
 "width": 1199,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "propagateClick": true,
 "bottom": "0%",
 "height": 51,
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "layout": "horizontal",
 "gap": 3,
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 30
},
{
 "paddingRight": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "shadowColor": "#000000",
 "right": "15%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "top": "7%",
 "class": "Container",
 "bottom": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "layout": "vertical",
 "gap": 10,
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "center"
},
{
 "paddingRight": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "shadowColor": "#000000",
 "right": "10%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "top": "5%",
 "class": "Container",
 "bottom": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "layout": "horizontal",
 "gap": 10,
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left"
},
{
 "paddingRight": 20,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "horizontalAlign": "right",
 "right": "10%",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "bottom": "80%",
 "top": "5%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "layout": "vertical",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "paddingLeft": 0
},
{
 "paddingRight": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "shadowColor": "#000000",
 "right": "15%",
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowVerticalLength": 0,
 "overflow": "visible",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "minWidth": 1,
 "top": "7%",
 "class": "Container",
 "bottom": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "shadowHorizontalLength": 0,
 "layout": "vertical",
 "gap": 10,
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "center"
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FFA01F6B_E6CB_2931_41D1_F5A31E46E3F2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_2_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FFA08F6B_E6CB_2931_41C2_A894205B6B63",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_5_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E80638B1_F0CC_726E_41EA_E50ACE495F37",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F1FBC1AB_E6C7_1932_41D3_A84050FD8977_0_HS_6_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40A5C636_279D_DEC1_418B_B13ED782861A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_1_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F0278995_E648_E916_41E3_1D5714A356F8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_3_0.png",
   "width": 1000,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F0271995_E648_E916_41B1_13FC97DEE13C",
 "frameDuration": 66
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EC285645_E64F_1B76_41DD_AC34494FA9DA_0_HS_8_0.png",
   "width": 1080,
   "height": 660,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EBF5A731_F0B4_5E6E_41D8_7144E0B501A0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1489CC0C_1E74_9876_41BB_005113520ACA_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40DF766A_279D_DF41_41AF_F460D751640C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_15745C11_1E74_986E_4184_2C27856CB6C5_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40C36650_279D_DF41_41B0_C43FB343FC67",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1212DC5D_1E75_7896_41B9_0CC3BBCB88F0_1_HS_0_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2B45D922_266F_D2C0_41B1_E6643D69F017",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40D1F65E_279D_DF41_418A_7BEE8981E906",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0_HS_3_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40D1165F_279D_DF7F_41A3_38B006174048",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0_HS_5_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3E5CC0D8_2B8D_ACD2_41B7_F4536A51AB30",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0_HS_7_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3E5C60D8_2B8D_ACD2_41C2_FB15F37E34F3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1481ACC5_1E77_99F6_41A9_528DB1D479CB_0_HS_9_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3E5DA0D8_2B8D_ACD2_41C1_1440BA2565BC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_1_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FE59C8B7_E6C9_1712_41D3_7D4F8B608321",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_7_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FAFFF0B1_EB47_4B66_41DA_E9857700C52D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EC1BED36_E64F_6912_41CC_59DF365FF4EB_0_HS_10_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EBF22732_F0B4_5E52_41EA_6D4C1716294D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1482F3C8_1E74_8FFD_41B9_E4FEC797DF47_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40DFA66B_279D_DF47_41BF_EB83D56387B4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0_HS_0_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40CBF656_279D_DF41_41C1_CCC9604F8A79",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1575CF89_1E77_987E_4194_2F4225271FF5_0_HS_2_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40CCE657_279D_DF4F_41BD_0882F567FDA0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_1_HS_0_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2B44F924_266F_D2C0_41BD_9957468A1106",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_1_HS_1_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2B449924_266F_D2C0_41BF_F566352ACFAE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_1_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2B44A924_266F_D2C0_41BA_F4D13A5AC2D2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148BC3A2_1E74_8FB2_4186_C05957F1BD91_0_HS_6_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3832078C_26A5_FDC1_4195_21EDB93408C0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_1_HS_0_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2B459923_266F_D2C0_41BB_19E4DD5CC56E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_1_HS_2_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2B445923_266F_D2C0_41B7_2B3A00BF2914",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_1_HS_3_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2B447923_266F_D2C0_41BD_06CBD58E0E9E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_14809C0E_1E74_9872_41A5_3DE9F6D50258_1_HS_4_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2B440923_266F_D2C0_41C1_C7E47D102999",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1482A27E_1E74_8892_4192_3388B028C3C0_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40DDA669_279D_DF43_41B7_8880D64FA08A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40D7D663_279D_DF47_41BF_820E1C0C4ED4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40D80663_279D_DF47_4181_11BEEAEA3222",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0_HS_4_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40D8A664_279D_DF41_41B7_6824D5BDAAE7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148A5298_1E77_899E_419D_1D63F89160F9_0_HS_6_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40D9F664_279D_DF41_41B4_9EF4E1354364",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0_HS_0_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_383CD78E_26A5_FDC1_41B2_AF52F4F19A63",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0_HS_1_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_383D278E_26A5_FDC1_41AD_FEF2B552043F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148AF6A9_1E74_89BE_41BA_D422FCB5D28C_0_HS_4_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_383E478E_26A5_FDC1_41BE_00A43368197B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_5_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5A24DC_F223_124C_41DF_FAF57926A40A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_6_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5DD4DC_F223_124C_41DD_ADDB8AEE18CD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_0_HS_7_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5D64DC_F223_124C_41CA_15285FB41733",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3322B6E_F174_36F2_41E8_9261080F3A87_1_HS_8_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EDA88F7F_F261_2E4C_41D1_6242C0A42390",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_4_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E807D8B4_F0CC_7256_41BB_67CABB23142B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_5_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E807F8B4_F0CC_7256_41DC_24C6BA3BADC9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_7_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5B84DB_F223_1254_41DB_D625C00035F2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_8_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5B54DB_F223_1254_41CC_84DCB0457273",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_1_HS_9_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_ED963F7D_F261_2E4C_41CF_900DE276E32E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E30FB343_F174_3632_41D8_CFCF1D0277E8_0_HS_12_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_2B41191C_266F_D2C1_41C3_0BC1E4383DF5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0_HS_0_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40D3F661_279D_DF43_41B2_7E3FD2B6A477",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40D41661_279D_DF43_41C2_E0DB9C7CCCA7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148A0A7D_1E77_9896_41B3_57BCD0428BCD_0_HS_4_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40D4B661_279D_DF43_41A9_0EA5260CDD16",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1577B4D8_1E77_899E_41B7_969F6F12575C_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40D1B660_279D_DF41_419C_3DBB398DC67F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_6_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE2324DF_F223_124C_41E0_3F2C0A47CB50",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_7_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE22E4DF_F223_124C_4188_EE6875D4E164",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E9939E3C_F0CF_EE56_41DF_F76FD8C401D9_0_HS_8_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE2284DF_F223_124C_41E8_C0422EB6CBDB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_0_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E975E305_F262_F7BD_41E7_8B19253A6931",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_1_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E9757306_F262_F7BF_41D6_367717E1421C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E6D1077C_F0CF_DED5_41E7_98B175305F6A_0_HS_2_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E4C8935E_F262_F64C_41D8_E9E4AAE1AC82",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0_HS_0_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40E0F66B_279D_DF47_41B8_DA0C7A56E9F4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0_HS_2_0.png",
   "width": 1220,
   "height": 1110,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40E1166C_279D_DF41_4187_4C13359E5378",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_15763BD4_1E74_FF96_41BA_3844863EF0BE_0_HS_4_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4EB80EFE_279D_4F41_41C0_FC748DB4D20A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_7_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE2104DE_F223_124C_41E0_55E403B6F018",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_8_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE20A4DE_F223_124C_41DF_B2D4BB056EC3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3011261_F174_76EF_41E1_5CAAD482684A_0_HS_9_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE2054DE_F223_124C_41C6_D6436942DEC1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0_HS_0_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F2519518_E679_391E_41DF_2C50B651C871",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EC1B8F3C_E64F_2916_41D2_C71FD1185976_0_HS_2_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F2500518_E679_391E_41D9_D311D06AF959",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40DB1665_279D_DF43_41A4_82BFD634C717",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0_HS_2_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40DBB666_279D_DF41_41C1_70C556D9E430",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_14827FE7_1E74_97B2_4172_168011EC93C6_0_HS_4_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40DCC667_279D_DF4F_41C2_A6EA1073792E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1481E321_1E77_88AE_4161_2B7ECE0FE913_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40D5D662_279D_DF41_41B1_C3A8329AFD6D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1486C35F_1E74_8892_41BD_7A97DC18788E_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40C2C650_279D_DF41_41AC_CF3FF342AED8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148B8F42_1E74_B8F2_4195_88BE25966606_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40C49651_279D_DF43_41B9_D1924B8AEF5D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0_HS_0_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40CE965D_279D_DF43_41C2_F2E360B62983",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0_HS_2_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40CF165D_279D_DF43_418F_BC713D11E89D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0_HS_4_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40D0665E_279D_DF41_41BF_0FAA7A4C96F7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_15748459_1E77_889E_4190_1EE592F648CB_0_HS_6_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40D0865E_279D_DF41_41BF_3BD319B451E1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0_HS_0_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40C5E652_279D_DF41_41A3_B136996488A9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1486CC94_1E74_9995_41B4_4B513680E8C1_0_HS_2_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40C60652_279D_DF41_41A7_EE0E1977D3CE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148293EB_1E74_8FB2_41B0_CBF40A1DE5FE_0_HS_1_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40E2366D_279D_DF43_41B9_2D069C9118F5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1573ABFA_1E74_9F93_41B6_B23A4284AF6C_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40E2C66E_279D_DF41_41B9_567115182B9E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0_HS_0_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40C6A653_279D_DF47_41B9_E2F515CD1863",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148A39DF_1E77_7B93_41A8_E1E8C4FCB196_0_HS_2_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40C7E653_279D_DF47_41B2_C1BB44EC2E66",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40E3066E_279D_DF5E_4176_CF527C3A1C44",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_15C6BEAE_26E7_CFC1_41C1_833887343D7E_1_HS_4_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40E34670_279D_DF41_419A_E2D9CB6390D2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40BD164D_279D_DF43_41B6_1459F67C7FEA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0_HS_2_0.png",
   "width": 1220,
   "height": 1110,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_383F578F_26A5_FDDF_41B0_55777C71AFC1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0_HS_4_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3838678F_26A5_FDDF_41B2_3755D596F659",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0_HS_5_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0F488A93_26A5_D7C7_417F_F54618BD6C26",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_14867ECB_1E74_99F2_41B9_68414C867124_0_HS_7_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0F49EA94_26A5_D7C1_419E_C7007532FB34",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1576FA46_1E74_B8F2_41AF_93BD74CBD663_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40DD6668_279D_DF41_41AA_8B9BEABBC25B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1481B964_1E77_98B6_41B0_A76D7932C31E_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40D6B662_279D_DF41_41A0_6B16518DA893",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_5_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FA796552_E648_F912_41E4_000E9B6922DD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_EC205856_E64F_3712_41EC_BA0C87196002_0_HS_6_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FA792552_E648_F912_41EB_C8727674C6A3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5CF4DC_F223_124C_41D1_0135FFCD526A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_9_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5FC4DD_F223_124C_41E6_7AAF37EB2F07",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_11_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5F54DD_F223_124C_41D4_D12F07CE8EE1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_12_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5EE4DD_F223_124C_41DF_23ACADF1D2EC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_13_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5E64DD_F223_124C_41DF_0AC896D4CB7C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E3352A9A_F174_5652_4180_3DD758DB6B02_0_HS_14_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_EE5E24DE_F223_124C_41E3_CBA98CFF7E2B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148B1D2B_1E77_B8B2_41BA_6842293046F7_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40D67662_279D_DF41_41BF_E798DFC67FE3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F9345D69_E839_B2BB_41C3_F0902D2CD9CD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 20,
 "rowCount": 5,
 "levels": [
  {
   "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_3_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F90B8D69_E839_B2BB_41DF_068371605097",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F545612C_E6C7_3936_41E2_7B4B285066B6_0_HS_4_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0F20CA7F_26A5_D73F_41C1_E8CDF0C42761",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_FECED969_F21F_3275_41EC_54E67DE2AD8A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_E4B9BB23_F174_D672_41DA_20DB8C56555A_0_HS_4_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_1AE638BE_0BE5_57E6_4191_362F35CCEF15",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0_HS_0_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40C82653_279D_DF47_41A0_52737D71DF01",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0_HS_2_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40C93654_279D_DF41_41A8_B0FF40DD5E8D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0_HS_4_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40CA6654_279D_DF41_41C3_1EB9A9E2F5D9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1486031B_1E77_8893_41A4_C788B23EDBC4_0_HS_6_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40CB5655_279D_DF43_41C2_398116F21276",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0F46CA94_26A5_D7C1_41C2_84EB373CBA95",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0_HS_2_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0F471A9A_26A5_D7C1_419F_54C39667D105",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0_HS_4_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40C1264F_279D_DF5F_41BB_1F19D832E8BB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1575EB8F_1E74_F873_4193_B79C1E6F333A_0_HS_5_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40C1B64F_279D_DF5F_41C1_AB69C8BD080A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1481ACE3_1E77_79B2_419D_CC9B1E41F399_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40DA7664_279D_DF41_4184_569FBD68839E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1486D626_1E74_88B2_418A_1B5A5850E43B_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40C45651_279D_DF43_41A8_1087E0C7AD36",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1481BDBA_1E77_FB92_4194_9BBDA5542C92_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40D35660_279D_DF41_41C0_032D6C62F57D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0_HS_0_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3832A78C_26A5_FDC1_41AD_5F40B1537B24",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0_HS_2_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3833378D_26A5_FDC3_41A8_4D809F73678E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_14865B98_1E74_BF9E_41AD_A011D9A7DB9D_0_HS_5_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_383C478D_26A5_FDC3_41B5_F68BF3053398",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 22,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0_HS_0_0.png",
   "width": 1000,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40CDD65C_279D_DF41_41A0_C21A0FEF8AF2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_148657D2_1E77_B7ED_41B2_0588BEB3A92A_0_HS_2_0.png",
   "width": 1080,
   "height": 720,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_40CE465C_279D_DF41_41A0_F6DD0F8FA8C0",
 "frameDuration": 41
},
{
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingRight": 0,
 "maxHeight": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "horizontalAlign": "center",
 "width": 60,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "propagateClick": true,
 "height": 60,
 "borderSize": 0,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "class": "IconButton",
 "shadow": false,
 "data": {
  "name": "image button menu"
 },
 "paddingTop": 0,
 "maxWidth": 60,
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "fontFamily": "Montserrat",
 "paddingRight": 0,
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button panorama list"
 },
 "fontStyle": "normal",
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "horizontalAlign": "center",
 "iconWidth": 32,
 "width": 130,
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "bold",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "height": 40,
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "PANORAMA LIST",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontSize": 12,
 "class": "Button",
 "layout": "horizontal",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "fontFamily": "Montserrat",
 "paddingRight": 0,
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button location"
 },
 "fontStyle": "normal",
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "horizontalAlign": "center",
 "iconWidth": 32,
 "width": 90,
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "bold",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "height": 40,
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "LOCATION",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontSize": 12,
 "class": "Button",
 "layout": "horizontal",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "fontFamily": "Montserrat",
 "paddingRight": 0,
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button floorplan"
 },
 "fontStyle": "normal",
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "horizontalAlign": "center",
 "iconWidth": 32,
 "width": 103,
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "bold",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "height": 40,
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "FLOORPLAN",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontSize": 12,
 "class": "Button",
 "layout": "horizontal",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "minHeight": 1,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "height": 140,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "layout": "absolute",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0
},
{
 "selectedItemLabelFontWeight": "bold",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelFontColor": "#666666",
 "minHeight": 1,
 "itemBackgroundColorDirection": "vertical",
 "scrollBarWidth": 10,
 "itemLabelGap": 7,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "paddingBottom": 70,
 "verticalAlign": "middle",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "borderRadius": 5,
 "minWidth": 1,
 "width": "100%",
 "selectedItemLabelFontColor": "#04A3E1",
 "itemPaddingBottom": 3,
 "itemThumbnailHeight": 125,
 "borderSize": 0,
 "itemMode": "normal",
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#04A3E1",
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarVisible": "rollOver",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "gap": 26,
 "scrollBarOpacity": 0.5,
 "itemMaxHeight": 1000,
 "shadow": false,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBorderRadius": 0,
 "itemLabelFontFamily": "Montserrat",
 "paddingTop": 10,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemThumbnailWidth": 220,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailShadow": false,
 "itemLabelPosition": "bottom",
 "itemHorizontalAlign": "center",
 "paddingRight": 70,
 "itemPaddingLeft": 3,
 "rollOverItemLabelFontColor": "#04A3E1",
 "selectedItemThumbnailShadow": true,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "backgroundOpacity": 0.05,
 "itemMaxWidth": 1000,
 "itemPaddingTop": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "propagateClick": false,
 "itemBackgroundColor": [],
 "height": "100%",
 "class": "ThumbnailGrid",
 "itemThumbnailOpacity": 1,
 "itemMinHeight": 50,
 "itemPaddingRight": 3,
 "backgroundColorDirection": "vertical",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "horizontalAlign": "center",
 "rollOverItemThumbnailShadow": true,
 "scrollBarMargin": 2,
 "data": {
  "name": "ThumbnailList"
 },
 "itemHeight": 156,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 14,
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "paddingLeft": 70
},
{
 "paddingRight": 0,
 "height": "100%",
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "minHeight": 1,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "width": "85%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "layout": "absolute",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0
},
{
 "paddingRight": 50,
 "height": "100%",
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "minHeight": 1,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "paddingBottom": 20,
 "verticalAlign": "top",
 "width": "15%",
 "borderRadius": 0,
 "minWidth": 400,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "layout": "vertical",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "paddingLeft": 50
},
{
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingRight": 0,
 "maxHeight": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "width": "25%",
 "borderRadius": 0,
 "minWidth": 50,
 "propagateClick": false,
 "height": "75%",
 "borderSize": 0,
 "transparencyActive": false,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "IconButton",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "maxWidth": 60,
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "minHeight": 1,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "height": 140,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "layout": "absolute",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0
},
{
 "paddingRight": 0,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "backgroundOpacity": 0,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "width": "77.115%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "top": "0%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.19vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.19vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText54192"
 },
 "paddingTop": 0,
 "paddingLeft": 80
},
{
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingRight": 0,
 "maxHeight": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "horizontalAlign": "right",
 "right": 20,
 "backgroundOpacity": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 50,
 "propagateClick": false,
 "top": 20,
 "borderSize": 0,
 "transparencyActive": false,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "IconButton",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "maxWidth": 60,
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "paddingRight": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "right": "0%",
 "backgroundOpacity": 1,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5518308556066!2d38.75225921478644!3d9.013319893531774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85c13caf3089%3A0x152a876a259aac72!2sFederal%20Transport%20Authority!5e0!3m2!1sen!2set!4v1641410623823!5m2!1sen!2set",
 "minWidth": 1,
 "top": "0%",
 "bottom": "0%",
 "backgroundColorRatios": [
  0
 ],
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "propagateClick": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 },
 "paddingTop": 0,
 "insetBorder": false,
 "paddingLeft": 0
},
{
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "height": 60,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "layout": "horizontal",
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "contentOpaque": false,
 "paddingLeft": 0
},
{
 "paddingRight": 0,
 "height": "100%",
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "minHeight": 520,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "paddingBottom": 30,
 "verticalAlign": "top",
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 100,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "layout": "vertical",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0
},
{
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "horizontalAlign": "left",
 "width": 370,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "height": 40,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "layout": "horizontal",
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0
},
{
 "paddingRight": 0,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "backgroundOpacity": 0,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "width": "77.115%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "top": "0%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.19vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.19vh;font-family:'Bebas Neue Bold';\">FLOORPLAN: 5th Floor Plan</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText54192"
 },
 "paddingTop": 0,
 "paddingLeft": 80
},
{
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingRight": 0,
 "maxHeight": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "horizontalAlign": "right",
 "right": 20,
 "backgroundOpacity": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 50,
 "propagateClick": false,
 "top": 20,
 "borderSize": 0,
 "transparencyActive": false,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "class": "IconButton",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "maxWidth": 60,
 "cursor": "hand",
 "paddingLeft": 0
},
{
 "paddingRight": 10,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "paddingBottom": 20,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "100%",
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.78vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.76vh;font-family:'Bebas Neue Bold';\">Federal Transport Authority</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.95vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.16vh;font-family:'Bebas Neue Bold';\">Federal Transport Authority, 2 General Abebe Dumtew St, Addis Ababa</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.41vh;\">FEDERAL TRANSPORT AUTHORITY is located in Addis Ababa, Ethiopia and is part of the Executive, Legislative, and Other General Government Support Industry. FEDERAL TRANSPORT AUTHORITY has 155 total employees across all of its locations. (Employees figure is modelled)</SPAN><SPAN STYLE=\"font-size:1.19vh;\">.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0,
 "paddingLeft": 10
},
{
 "fontFamily": "Bebas Neue Bold",
 "paddingRight": 0,
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button"
 },
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "iconWidth": 32,
 "width": 207,
 "shadowSpread": 1,
 "minHeight": 1,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "backgroundOpacity": 0.7,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "height": 59,
 "label": "lorem ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": 34,
 "class": "Button",
 "layout": "horizontal",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "paddingLeft": 0
}],
 "minWidth": 20,
 "propagateClick": true,
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "width": "100%",
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "layout": "absolute",
 "gap": 10,
 "shadow": false,
 "mouseWheelEnabled": true,
 "scripts": {
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getKey": function(key){  return window[key]; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "existsKey": function(key){  return key in window; },
  "unregisterKey": function(key){  delete window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "data": {
  "name": "Player468"
 },
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
