(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+hRI":function(s,t,a){(s.exports=a("I1BE")(!1)).push([s.i,"\n.twipsy {\n  display: block;\n  position: absolute;\n  visibility: visible;\n  max-width: 200px;\n  min-width: 100px;\n  padding: 5px;\n  font-size: 11px;\n  z-index: 1000;\n  opacity: 0.8;\n  -khtml-opacity: 0.8;\n  -moz-opacity: 0.8;\n  filter: alpha(opacity=80);\n}\n.twipsy.left .twipsy-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-left: 5px solid #000000;\n}\n.twipsy.right .twipsy-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-right: 5px solid #000000;\n}\n.twipsy-inner {\n  padding: 3px 8px;\n  background-color: #000000;\n  color: white;\n  text-align: center;\n  max-width: 200px;\n  text-decoration: none;\n  border-radius: 4px;\n}\n.twipsy-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n",""])},"/dKn":function(s,t,a){var r=a("+hRI");"string"==typeof r&&(r=[[s.i,r,""]]),r.locals&&(s.exports=r.locals);(0,a("SZ7m").default)("d06b3de4",r,!0,{})},XRUi:function(s,t,a){"use strict";a.r(t);var r={data:function(){return{modelUrl:"https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json",pointDrawing:!1,polylineDrawing:!1,polygonDrawing:!1}},methods:{ready:function(s){s.Cesium;var t=s.viewer;this.cesiumInstance=s,this.tooltip=createTooltip(t.cesiumWidget.container),t.scene.globe.depthTestAgainstTerrain=!0},toggle:function(s){console.log(s),this.$refs[s].drawing=!this.$refs[s].drawing},clear:function(){this.$refs.handlerPoint.clear(),this.$refs.handlerLine.clear(),this.$refs.handlerPolygon.clear()},activeEvt:function(s){this[s.type]=s.isActive},movingEvt:function(s){this.tooltip.showAt(s,"<p>左键绘制, 右键结束绘制.</p>")},drawEvt:function(s){s.finished&&this.tooltip.setVisible(!1),console.log(s)},readyPromise:function(s){this.cesiumInstance.viewer.zoomTo(s,new Cesium.HeadingPitchRange(0,-.5,2*s.boundingSphere.radius))}}},e=a("JFUb");var n=function(s){a("eUPV"),a("/dKn")},v=Object(e.a)(r,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("绘制工具")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("绘制线")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{attrs:{scene3DOnly:""},on:{ready:s.ready}},[a("vc-primitive-3dtileset",{attrs:{url:s.modelUrl},on:{readyPromise:s.readyPromise}}),s._v(" "),a("vc-handler-draw-point",{ref:"handlerPoint",on:{activeEvt:s.activeEvt,movingEvt:s.movingEvt,drawEvt:s.drawEvt}}),s._v(" "),a("vc-handler-draw-polyline",{ref:"handlerLine",on:{activeEvt:s.activeEvt,movingEvt:s.movingEvt,drawEvt:s.drawEvt}}),s._v(" "),a("vc-handler-draw-polygon",{ref:"handlerPolygon",on:{activeEvt:s.activeEvt,movingEvt:s.movingEvt,drawEvt:s.drawEvt}})],1),s._v(" "),a("div",{staticClass:"demo-tool"},[a("md-button",{staticClass:"md-raised md-accent",on:{click:function(t){return s.toggle("handlerPoint")}}},[s._v(s._s(s.pointDrawing?"停止":"点"))]),s._v(" "),a("md-button",{staticClass:"md-raised md-accent",on:{click:function(t){return s.toggle("handlerLine")}}},[s._v(s._s(s.polylineDrawing?"停止":"线"))]),s._v(" "),a("md-button",{staticClass:"md-raised md-accent",on:{click:function(t){return s.toggle("handlerPolygon")}}},[s._v(s._s(s.polygonDrawing?"停止":"面"))]),s._v(" "),a("md-button",{staticClass:"md-raised md-accent",on:{click:s.clear}},[s._v("清除")])],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),a("h3",[s._v("vc-handler-draw-point")]),s._v(" "),s._m(2),s._v(" "),a("h3",[s._v("vc-handler-draw-polyline")]),s._v(" "),s._m(3),s._v(" "),a("h3",[s._v("vc-handler-draw-polygon")]),s._v(" "),s._m(4),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(5),s._v(" "),a("h2",[s._v("方法")]),s._v(" "),s._m(6)],1)}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[a("code",{pre:!0},[s._v("vc-handler-draw-point")]),s._v(" 组件用于绘制点。")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("vc-handler-draw-polyline")]),s._v(" 组件用于绘制线。")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("vc-handler-draw-polygon")]),s._v(" 组件用于绘制面。")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("scene3DOnly")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-3dtileset")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"modelUrl"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@readyPromise")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"readyPromise"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-3dtileset")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-handler-draw-point")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handlerPoint"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@activeEvt")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"activeEvt"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@movingEvt")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"movingEvt"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@drawEvt")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"drawEvt"')]),s._v("\n      >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-handler-draw-point")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-handler-draw-polyline")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handlerLine"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@activeEvt")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"activeEvt"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@movingEvt")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"movingEvt"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@drawEvt")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"drawEvt"')]),s._v("\n      >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-handler-draw-polyline")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-handler-draw-polygon")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handlerPolygon"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@activeEvt")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"activeEvt"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@movingEvt")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"movingEvt"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@drawEvt")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"drawEvt"')]),s._v("\n      >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-handler-draw-polygon")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"toggle('handlerPoint')\"")]),s._v(">")]),s._v("{{ pointDrawing ? '停止' : '点' }}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"toggle('handlerLine')\"")]),s._v(">")]),s._v("{{ polylineDrawing ? '停止' : '线' }}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"toggle('handlerPolygon')\"")]),s._v(">")]),s._v("{{ polygonDrawing ? '停止' : '面' }}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"clear"')]),s._v(">")]),s._v("清除"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("modelUrl")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pointDrawing")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("polylineDrawing")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("polygonDrawing")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".tooltip = createTooltip(viewer.cesiumWidget.container)\n        viewer.scene.globe.depthTestAgainstTerrain = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      },\n      toggle(type) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(type)\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs[type].drawing = !"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs[type].drawing\n      },\n      clear() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.handlerPoint.clear()\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.handlerLine.clear()\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.handlerPolygon.clear()\n      },\n      activeEvt(_) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("[_.type] = _.isActive\n      },\n      movingEvt(windowPosition) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".tooltip.showAt(windowPosition, "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'<p>左键绘制, 右键结束绘制.</p>'")]),s._v(")\n      },\n      drawEvt(result) {\n        result.finished && "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".tooltip.setVisible("),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(result)\n      },\n      readyPromise(tileset) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { viewer } = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        viewer.zoomTo(tileset, "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.HeadingPitchRange("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-0.5")]),s._v(", tileset.boundingSphere.radius * "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2.0")]),s._v("))\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"css"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".twipsy")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("display")]),s._v(": block;\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("position")]),s._v(": absolute;\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("visibility")]),s._v(": visible;\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("max-width")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200px")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("min-width")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100px")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5px")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("font-size")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("11px")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("z-index")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("opacity")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.8")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("-khtml-opacity")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.8")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("-moz-opacity")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.8")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("filter")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("alpha")]),s._v("(opacity=80);\n  }\n  "),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".twipsy")]),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".left")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".twipsy-arrow")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("top")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50%")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("right")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("margin-top")]),s._v(": -"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5px")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("border-top")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5px")]),s._v(" solid transparent;\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("border-bottom")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5px")]),s._v(" solid transparent;\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("border-left")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5px")]),s._v(" solid "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#000000")]),s._v(";\n  }\n  "),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".twipsy")]),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".right")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".twipsy-arrow")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("top")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50%")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("left")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("margin-top")]),s._v(": -"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5px")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("border-top")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5px")]),s._v(" solid transparent;\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("border-bottom")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5px")]),s._v(" solid transparent;\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("border-right")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5px")]),s._v(" solid "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#000000")]),s._v(";\n  }\n  "),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".twipsy-inner")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3px")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8px")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("background-color")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#000000")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": white;\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("text-align")]),s._v(": center;\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("max-width")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200px")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("text-decoration")]),s._v(": none;\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("-webkit-border-radius")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4px")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("-moz-border-radius")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4px")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("border-radius")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4px")]),s._v(";\n  }\n  "),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".twipsy-arrow")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("position")]),s._v(": absolute;\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("mode")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 绘制模式，0 连续绘制，1 绘制一次就结束。")])]),s._v(" "),a("tr",[a("td",[s._v("pointColor")]),s._v(" "),a("td",[s._v("String|Array|Object")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'rgb(255,229,0)'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定点颜色。")])]),s._v(" "),a("tr",[a("td",[s._v("pointPixelSize")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("8")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定点的像素大小。")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("mode")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 绘制模式，0 连续绘制，1 绘制一次就结束。")])]),s._v(" "),a("tr",[a("td",[s._v("depthTest")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定绘制的线对象是否参与深度测试。")])]),s._v(" "),a("tr",[a("td",[s._v("pointColor")]),s._v(" "),a("td",[s._v("String|Array|Object")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'rgb(255,229,0)'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定点颜色。")])]),s._v(" "),a("tr",[a("td",[s._v("pointPixelSize")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("8")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定点的像素大小。")])]),s._v(" "),a("tr",[a("td",[s._v("polylineColor")]),s._v(" "),a("td",[s._v("String|Array|Object")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'#51ff00'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定线颜色。")])]),s._v(" "),a("tr",[a("td",[s._v("polylineWidth")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("2")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定线宽度。")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("mode")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 绘制模式，0 连续绘制，1 绘制一次就结束。")])]),s._v(" "),a("tr",[a("td",[s._v("depthTest")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定绘制的线对象是否参与深度测试。")])]),s._v(" "),a("tr",[a("td",[s._v("pointColor")]),s._v(" "),a("td",[s._v("String|Array|Object")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'rgb(255,229,0)'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定点颜色。")])]),s._v(" "),a("tr",[a("td",[s._v("pointPixelSize")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("8")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定点的像素大小。")])]),s._v(" "),a("tr",[a("td",[s._v("polylineColor")]),s._v(" "),a("td",[s._v("String|Array|Object")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'#51ff00'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定线颜色。")])]),s._v(" "),a("tr",[a("td",[s._v("polylineWidth")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("2")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定线宽度。")])]),s._v(" "),a("tr",[a("td",[s._v("polygonColor")]),s._v(" "),a("td",[s._v("String|Array|Object")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'rgba(255,165,0,0.25)'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定面颜色。")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("activeEvt")]),s._v(" "),a("td",[s._v("{ type: String, isActive: Boolean }")]),s._v(" "),a("td",[s._v("绘制开始或停止时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("movingEvt")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td",[s._v("绘制过程中触发。返回鼠标位置。")])]),s._v(" "),a("tr",[a("td",[s._v("drawEvt")]),s._v(" "),a("td",[s._v("{ polyline: Object, type: Object, finished: Boolean }")]),s._v(" "),a("td",[s._v("绘制过程中触发。返回绘制的线的坐标点。")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("方法名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("clear")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("清除绘制对象（同时停止绘制）。")])])])])}],!1,n,null,null);t.default=v.exports},eUPV:function(s,t,a){var r=a("glJS");"string"==typeof r&&(r=[[s.i,r,""]]),r.locals&&(s.exports=r.locals);(0,a("SZ7m").default)("24bd64cd",r,!0,{})},glJS:function(s,t,a){(s.exports=a("I1BE")(!1)).push([s.i,"\n.twipsy {\n    display: block;\n    position: absolute;\n    visibility: visible;\n    max-width: 200px;\n    min-width: 100px;\n    padding: 5px;\n    font-size: 11px;\n    z-index: 1000;\n    opacity: 0.8;\n    -khtml-opacity: 0.8;\n    -moz-opacity: 0.8;\n    filter: alpha(opacity=80);\n}\n.twipsy.left .twipsy-arrow {\n    top: 50%;\n    right: 0;\n    margin-top: -5px;\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-left: 5px solid #000000;\n}\n.twipsy.right .twipsy-arrow {\n    top: 50%;\n    left: 0;\n    margin-top: -5px;\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    border-right: 5px solid #000000;\n}\n.twipsy-inner {\n    padding: 3px 8px;\n    background-color: #000000;\n    color: white;\n    text-align: center;\n    max-width: 200px;\n    text-decoration: none;\n    border-radius: 4px;\n}\n.twipsy-arrow {\n    position: absolute;\n    width: 0;\n    height: 0;\n}\n",""])},j8Y8:function(s,t,a){s.exports=a("XRUi")}}]);
//# sourceMappingURL=7.535e53013a94314c0438.js.map