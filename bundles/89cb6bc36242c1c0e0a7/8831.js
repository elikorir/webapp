"use strict";(self.webpackChunkelement_web=self.webpackChunkelement_web||[]).push([[8831],{"./src/components/views/location/Map.tsx":(t,o,e)=>{e.r(o),e.d(o,{default:()=>h});var r=e("./node_modules/react/index.js"),n=e("./node_modules/classnames/index.js"),l=e.n(n),a=e("./node_modules/maplibre-gl/dist/maplibre-gl.js"),i=e("./node_modules/matrix-js-sdk/src/matrix.ts"),s=e("./node_modules/matrix-js-sdk/src/logger.ts"),c=e("./src/contexts/MatrixClientContext.tsx"),d=e("./src/hooks/useEventEmitter.ts"),u=e("./src/utils/location/index.ts"),m=e("./src/utils/WellKnownUtils.ts"),_=e("./src/utils/location/map.ts");var g=e("./src/Modal.tsx"),p=e("./src/components/views/dialogs/ErrorDialog.tsx"),b=e("./src/languageHandler.tsx");const f=({id:t,centerGeoUri:o,onError:e,interactive:n,bounds:l,allowGeolocate:g})=>{const p=`mx_Map_${t}`,b=(0,r.useContext)(c.Ay),f=(0,d.dF)(b,i.ClientEvent.ClientWellKnown,(t=>{var o;return null===(o=(0,m.XP)(t))||void 0===o?void 0:o.map_style_url})),h=(({interactive:t,bodyId:o,onError:e})=>{const n=(0,c.nH)(),[l,a]=(0,r.useState)();return(0,r.useEffect)((()=>{try{a((0,_.p)(n,!!t,o,e))}catch(t){console.error("Error encountered in useMap",t),t instanceof Error&&(null==e||e(t))}return()=>{l&&(l.remove(),a(void 0))}}),[t,o,e]),l})({interactive:n,bodyId:p,onError:e});(0,r.useEffect)((()=>{f&&h&&h.setStyle(f)}),[f,h]),(0,r.useEffect)((()=>{if(h&&o)try{const t=(0,u.XB)(o);if(!t)throw new Error("Invalid geo URI");h.setCenter({lon:t.longitude,lat:t.latitude})}catch(t){s.v.error("Could not set map center",t)}}),[h,o]),(0,r.useEffect)((()=>{if(h&&l)try{const t=new a.LngLatBounds([l.west,l.south],[l.east,l.north]);h.fitBounds(t,{padding:100,maxZoom:15})}catch(t){s.v.error("Invalid map bounds",t)}}),[h,l]);const[C,E]=(0,r.useState)(null);return(0,r.useEffect)((()=>{if(h){if(g&&!C){const t=new a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!1});E(t),h.addControl(t)}!g&&C&&(h.removeControl(C),E(null))}}),[h,C,g]),(0,r.useEffect)((()=>{if(C)return C.on("error",v),()=>{C.off("error",v)}}),[C]),{map:h,bodyId:p}},v=t=>{var o;s.v.error("Could not fetch location",t),g.Ay.createDialog(p.A,{title:(0,b._t)("location_sharing|error_fetch_location"),description:null!==(o=(0,u.Ff)(t.code))&&void 0!==o?o:""})},h=({bounds:t,centerGeoUri:o,children:e,className:n,allowGeolocate:a,id:i,interactive:s,onError:c,onClick:d})=>{const{map:u,bodyId:m}=f({centerGeoUri:o,onError:c,id:i,interactive:s,bounds:t,allowGeolocate:a});return r.createElement("div",{className:l()("mx_Map",n),id:m,onClick:t=>{t.target.classList.contains("maplibregl-ctrl-attrib-button")||null==d||d()}},!!e&&!!u&&e({map:u}))}},"./src/utils/location/map.ts":(t,o,e)=>{e.d(o,{h:()=>c,p:()=>s});var r=e("./node_modules/maplibre-gl/dist/maplibre-gl.js"),n=e("./node_modules/matrix-js-sdk/src/logger.ts"),l=e("./src/languageHandler.tsx"),a=e("./src/utils/location/findMapStyleUrl.ts"),i=e("./src/utils/location/LocationShareErrors.ts");const s=(t,o,e,s)=>{try{const c=(0,a.M)(t),d=new r.Map({container:e,style:c,zoom:15,interactive:o,attributionControl:!1,locale:{"AttributionControl.ToggleAttribution":(0,l._t)("location_sharing|toggle_attribution"),"AttributionControl.MapFeedback":(0,l._t)("location_sharing|map_feedback"),"FullscreenControl.Enter":(0,l._t)("action|enter_fullscreen"),"FullscreenControl.Exit":(0,l._t)("action|exit_fullscreeen"),"GeolocateControl.FindMyLocation":(0,l._t)("location_sharing|find_my_location"),"GeolocateControl.LocationNotAvailable":(0,l._t)("location_sharing|location_not_available"),"LogoControl.Title":(0,l._t)("location_sharing|mapbox_logo"),"NavigationControl.ResetBearing":(0,l._t)("location_sharing|reset_bearing"),"NavigationControl.ZoomIn":(0,l._t)("action|zoom_in"),"NavigationControl.ZoomOut":(0,l._t)("action|zoom_out")}});return d.addControl(new r.AttributionControl,"top-right"),d.on("error",(t=>{n.v.error("Failed to load map: check map_style_url in config.json has a valid URL and API key",t.error),null==s||s(new Error(i.$.MapStyleUrlNotReachable))})),d}catch(t){n.v.error("Failed to render map",t);if((null==t?void 0:t.message).includes("Failed to initialize WebGL"))throw new Error(i.$.WebGLNotEnabled);throw t}},c=(t,o)=>new r.Marker({element:o,anchor:"bottom",offset:[0,-1]}).setLngLat({lon:t.longitude,lat:t.latitude})}}]);
//# sourceMappingURL=8831.js.map