(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{FI1z:function(t,s,e){"use strict";e.r(s);var r=e("eVuF"),a=e.n(r),v={data:function(){return{appearance:null,attributes:null,geometry:null,center:{lng:102,lat:38},centerOutline:{lng:110,lat:38}}},mounted:function(){a.a.all([this.$refs.circle.createPromise,this.$refs.circleOutline.createPromise]).then((function(t){console.log("All geometries are loaded.");var s=t.reduce((function(t,s){var e=s.cesiumObject.constructor.createGeometry(s.cesiumObject),r=s.vm.$parent.modelMatrix?Cesium.BoundingSphere.transform(e.boundingSphere,s.vm.$parent.modelMatrix):e.boundingSphere;return null===t?r:Cesium.BoundingSphere.union(t,r)}),null);t[0].viewer.scene.camera.flyToBoundingSphere(s)}))},methods:{ready:function(t){var s=t.Cesium,e=t.viewer;t.cesiumObject;this.viewer=e;var r=s.ColorGeometryInstanceAttribute,a=s.PerInstanceColorAppearance;this.attributes={color:new r(Math.random(),Math.random(),Math.random(),.5)},this.appearance=new a({flat:!0})},LEFT_CLICK:function(t){var s=this.viewer.scene.pick(t.position);console.log(s)}}},n=e("JFUb"),_=Object(n.a)(v,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("CircleGeometry、CircleOutlineGeometry")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("示例")]),t._v(" "),e("h3",[t._v("加载圆形")]),t._v(" "),e("h4",[t._v("预览")]),t._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:t.ready,LEFT_CLICK:t.LEFT_CLICK}},[e("vc-primitive-ground",{attrs:{appearance:t.appearance}},[e("vc-instance-geometry",{attrs:{geometry:t.geometry,attributes:t.attributes},on:{"update:geometry":function(s){t.geometry=s}}},[e("vc-geometry-circle",{ref:"circle",attrs:{center:t.center,radius:25e4}})],1)],1),t._v(" "),e("vc-primitive",{attrs:{appearance:t.appearance}},[e("vc-instance-geometry",{attrs:{attributes:t.attributes}},[e("vc-geometry-outline-circle",{ref:"circleOutline",attrs:{center:t.centerOutline,radius:25e4}})],1)],1)],1)],1)]],2),t._v(" "),e("h4",[t._v("代码")]),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v("属性")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("hr"),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("hr"),t._v(" "),t._m(6),t._v(" "),e("h2",[t._v("事件")]),t._v(" "),t._m(7),t._v(" "),e("hr")],1)}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",{pre:!0},[t._v("vc-geometry-circle")]),t._v(" 组件用于加载圆形。")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("vc-geometry-outline-circle")]),t._v(" 组件用于加载圆形轮廓。")]),t._v(" "),e("li",[t._v("需要作为 "),e("code",{pre:!0},[t._v("vc-instance-geometry")]),t._v(" 的子组件使用，可以挂载到 "),e("code",{pre:!0},[t._v("vc-primitive")]),t._v(" 或 "),e("code",{pre:!0},[t._v("vc-primitive-ground")]),t._v("。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@LEFT_CLICK")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"LEFT_CLICK"')]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive-ground")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":appearance")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"appearance"')]),t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-instance-geometry")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":geometry.sync")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"geometry"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":attributes")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"attributes"')]),t._v(">")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-geometry-circle")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"circle"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":center")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"center"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":radius")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"250000"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-geometry-circle")]),t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-instance-geometry")]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive-ground")]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":appearance")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"appearance"')]),t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-instance-geometry")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":attributes")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"attributes"')]),t._v(">")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-geometry-outline-circle")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"circleOutline"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":center")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"centerOutline"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":radius")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"250000"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-geometry-outline-circle")]),t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-instance-geometry")]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("appearance")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("attributes")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("geometry")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("center")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("102")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("38")]),t._v(" },\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("centerOutline")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("110")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("38")]),t._v(" }\n      }\n    },\n    mounted() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Promise")]),t._v(".all(["),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.circle.createPromise, "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.circleOutline.createPromise]).then("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("instances")]),t._v(") =>")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'All geometries are loaded.'")]),t._v(")\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" boundingSphereUnion = instances.reduce("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("prev, cur")]),t._v(") =>")]),t._v(" {\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" boundingSphere = cur.vm.$parent.modelMatrix\n            ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)\n            : geometry.boundingSphere\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" prev === "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(" ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)\n        }, "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("null")]),t._v(")\n        instances["),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v("].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n      })\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready({ Cesium, viewer }) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".viewer = viewer\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { ColorGeometryInstanceAttribute, PerInstanceColorAppearance } = Cesium\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".attributes = {\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" ColorGeometryInstanceAttribute("),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Math")]),t._v(".random(), "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Math")]),t._v(".random(), "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Math")]),t._v(".random(), "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.5")]),t._v(")\n        }\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".appearance = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" PerInstanceColorAppearance({\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("flat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("\n        })\n      },\n      LEFT_CLICK(movement) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" feature = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".viewer.scene.pick(movement.position)\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(feature)\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",[s("code",{pre:!0},[this._v("vc-geometry-circle")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("属性名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("center")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("required")]),t._v(" 指定圆形中心点。 "),e("strong",[t._v("结构：{ lng: number, lat: number, height: number }")])])]),t._v(" "),e("tr",[e("td",[t._v("radius")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("required")]),t._v(" 指定圆形半径。")])]),t._v(" "),e("tr",[e("td",[t._v("ellipsoid")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定圆形参考椭球体。")])]),t._v(" "),e("tr",[e("td",[t._v("height")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0.0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定圆形离地表的高度（米）。")])]),t._v(" "),e("tr",[e("td",[t._v("granularity")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0.02")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定圆形圆弧每个点的角间距（弧度）。")])]),t._v(" "),e("tr",[e("td",[t._v("vertexFormat")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定要计算的顶点属性。")])]),t._v(" "),e("tr",[e("td",[t._v("extrudedHeight")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0.0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定圆形拉伸的高度（米）。")])]),t._v(" "),e("tr",[e("td",[t._v("stRotation")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0.0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定圆形纹理的旋转坐标（以弧度为单位）。 正旋转为逆时针方向。")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",[s("code",{pre:!0},[this._v("vc-geometry-outline-circle")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("属性名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("center")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("required")]),t._v(" 指定圆形中心点。 "),e("strong",[t._v("结构：{ lng: number, lat: number, height: number }")])])]),t._v(" "),e("tr",[e("td",[t._v("radius")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("required")]),t._v(" 指定圆形半径。")])]),t._v(" "),e("tr",[e("td",[t._v("ellipsoid")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定圆形参考椭球体。")])]),t._v(" "),e("tr",[e("td",[t._v("height")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0.0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定圆形离地表的高度（米）。")])]),t._v(" "),e("tr",[e("td",[t._v("granularity")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0.02")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定圆形圆弧每个点的角间距（弧度）。")])]),t._v(" "),e("tr",[e("td",[t._v("extrudedHeight")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0.0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定圆形拉伸的高度（米）。")])]),t._v(" "),e("tr",[e("td",[t._v("numberOfVerticalLines")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("16")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定圆形在拉伸时顶部与底部之间绘制的线数。")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("参考官方文档："),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/CircleGeometry.html"}},[this._v("CircleGeometry")])]),this._v("、"),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/CircleOutlineGeometry.html"}},[this._v("CircleOutlineGeometry")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名")]),t._v(" "),e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ready")]),t._v(" "),e("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),e("td",[t._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])])])])}],!1,null,null,null);s.default=_.exports},POJ7:function(t,s,e){t.exports=e("FI1z")}}]);
//# sourceMappingURL=118.076f6a6945e7d67bba3d.js.map