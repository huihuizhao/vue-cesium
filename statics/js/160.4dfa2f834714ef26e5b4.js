(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{ULfo:function(s,t,a){s.exports=a("YCII")},YCII:function(s,t,a){"use strict";a.r(t);var r={data:function(){return{particleCanvas:null,options:[]}},methods:{complete:function(){console.log("cc")},ready:function(s){this.cesiumInstance=s;var t=s.Cesium,a=s.viewer;a.scene.debugShowFramesPerSecond=!0,t.Math.setRandomNumberSeed(315),this.modelMatrix=t.Transforms.eastNorthUpToFixedFrame(t.Cartesian3.fromDegrees(108.59777,40.03883)),this.emitterInitialLocation=new t.Cartesian3(0,0,100),this.minimumExplosionSize=30,this.maximumExplosionSize=100,this.particlePixelSize=new t.Cartesian2(7,7);this.lifetime=5;for(var r=[{minimumRed:.75,green:0,minimumBlue:.8,alpha:1},{red:0,minimumGreen:.75,minimumBlue:.8,alpha:1},{red:0,green:0,minimumBlue:.8,alpha:1},{minimumRed:.75,minimumGreen:.75,blue:0,alpha:1}],e=0;e<20;++e){for(var n=t.Math.randomBetween(-100,100),v=t.Math.randomBetween(-80,100),l=t.Math.randomBetween(-50,50),_=new t.Cartesian3(n,v,l),i=t.Color.fromRandom(r[e%r.length]),p=[],o=0;o<3;++o)p.push(new t.ParticleBurst({time:t.Math.nextRandomNumber()*this.lifetime,minimum:400,maximum:400}));this.createFirework(_,i,p)}var c=a.scene.camera,m=new t.Cartesian3(-300,0,0);c.lookAtTransform(this.modelMatrix,m),c.lookAtTransform(t.Matrix4.IDENTITY);var h=t.Cartesian3.subtract(this.emitterInitialLocation,m,new t.Cartesian3);t.Cartesian3.normalize(h,h);var d=t.Math.PI_OVER_TWO-Math.acos(t.Cartesian3.dot(h,t.Cartesian3.UNIT_Z));c.lookUp(d)},createFirework:function(s,t,a){var r=new Cesium.Matrix4,e=Cesium.Cartesian3.add(this.emitterInitialLocation,s,new Cesium.Cartesian3),n=Cesium.Matrix4.fromTranslation(e,r),v=Cesium.Matrix4.multiply(this.modelMatrix,n,new Cesium.Matrix4),l=Cesium.Matrix4.inverseTransformation(v,v),_=Cesium.Math.randomBetween(this.minimumExplosionSize,this.maximumExplosionSize),i=new Cesium.Cartesian3,p=.7*((_-this.minimumExplosionSize)/(this.maximumExplosionSize-this.minimumExplosionSize))+.3;this.options.push({image:this.getImage(),startColor:t,endColor:t.withAlpha(0),particleLife:p,speed:100,imageSize:this.particlePixelSize,emissionRate:0,emitter:new Cesium.SphereEmitter(.1),bursts:a,lifetime:this.lifetime,updateCallback:function(s){var t=Cesium.Matrix4.multiplyByPoint(l,s.position,i);Cesium.Cartesian3.magnitudeSquared(t)>=_*_&&Cesium.Cartesian3.clone(Cesium.Cartesian3.ZERO,s.velocity)},modelMatrix:this.modelMatrix,emitterModelMatrix:n})},getImage:function(){var s=this.particleCanvas;if(!Cesium.defined(s)){(s=document.createElement("canvas")).width=20,s.height=20;var t=s.getContext("2d");t.beginPath(),t.arc(8,8,8,0,Cesium.Math.TWO_PI,!0),t.closePath(),t.fillStyle="rgb(255, 255, 255)",t.fill()}return s}}},e=a("JFUb"),n=Object(e.a)(r,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("ParticleSystem")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("加载 ParticleSystem 烟火特效")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{attrs:{shouldAnimate:""},on:{ready:s.ready}},s._l(s.options,(function(t,r){return a("vc-primitive-particle",{key:r,attrs:{image:t.image,startColor:t.startColor,endColor:t.endColor,particleLife:t.particleLife,speed:t.speed,imageSize:t.imageSize,emissionRate:t.emissionRate,emitter:t.emitter,bursts:t.bursts,lifetime:t.lifetime,updateCallback:t.updateCallback,modelMatrix:t.modelMatrix,emitterModelMatrix:t.emitterModelMatrix},on:{complete:s.complete}})})),1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(4),s._v(" "),a("hr")],1)}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("vc-primitive-particle")]),this._v(" 组件用于加载粒子系统。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("shouldAnimate")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-particle")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"(option, index) of options"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"index"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":image")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"option.image"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":startColor")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"option.startColor"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":endColor")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"option.endColor"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":particleLife")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"option.particleLife"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":speed")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"option.speed"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":imageSize")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"option.imageSize"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":emissionRate")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"option.emissionRate"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":emitter")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"option.emitter"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":bursts")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"option.bursts"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":lifetime")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"option.lifetime"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":updateCallback")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"option.updateCallback"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":modelMatrix")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"option.modelMatrix"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":emitterModelMatrix")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"option.emitterModelMatrix"')]),s._v("\n      >")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-particle")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("particleCanvas")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": []\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" scene = viewer.scene\n        scene.debugShowFramesPerSecond = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        Cesium.Math.setRandomNumberSeed("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("315")]),s._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108.59777")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.03883")]),s._v("))\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".emitterInitialLocation = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100.0")]),s._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".minimumExplosionSize = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".maximumExplosionSize = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100.0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".particlePixelSize = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("7.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("7.0")]),s._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" burstSize = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("400.0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".lifetime = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10.0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" numberOfFireworks = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20.0")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" xMin = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-100.0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" xMax = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100.0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" yMin = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-80.0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" yMax = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100.0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" zMin = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-50.0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" zMax = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50.0")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" colorOptions = [\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("minimumRed")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.75")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("green")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("minimumBlue")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.8")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("alpha")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("red")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("minimumGreen")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.75")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("minimumBlue")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.8")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("alpha")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("red")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("green")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("minimumBlue")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.8")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("alpha")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("minimumRed")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.75")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("minimumGreen")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.75")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("blue")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("alpha")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v("\n          }\n        ]\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" i = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < numberOfFireworks; ++i) {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" x = Cesium.Math.randomBetween(xMin, xMax)\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" y = Cesium.Math.randomBetween(yMin, yMax)\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" z = Cesium.Math.randomBetween(zMin, zMax)\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" offset = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3(x, y, z)\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" color = Cesium.Color.fromRandom(colorOptions[i % colorOptions.length])\n\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" bursts = []\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" j = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; j < "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v("; ++j) {\n            bursts.push(\n              "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.ParticleBurst({\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": Cesium.Math.nextRandomNumber() * "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".lifetime,\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("minimum")]),s._v(": burstSize,\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("maximum")]),s._v(": burstSize\n              })\n            )\n          }\n\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".createFirework(offset, color, bursts)\n        }\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" camera = viewer.scene.camera\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" cameraOffset = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-300.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(")\n        camera.lookAtTransform("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".modelMatrix, cameraOffset)\n        camera.lookAtTransform(Cesium.Matrix4.IDENTITY)\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" toFireworks = Cesium.Cartesian3.subtract("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".emitterInitialLocation, cameraOffset, "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3())\n        Cesium.Cartesian3.normalize(toFireworks, toFireworks)\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" angle = Cesium.Math.PI_OVER_TWO - "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".acos(Cesium.Cartesian3.dot(toFireworks, Cesium.Cartesian3.UNIT_Z))\n        camera.lookUp(angle)\n      },\n      createFirework(offset, color, bursts) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" emitterModelMatrixScratch = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Matrix4()\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" position = Cesium.Cartesian3.add("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".emitterInitialLocation, offset, "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3())\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" emitterModelMatrix = Cesium.Matrix4.fromTranslation(position, emitterModelMatrixScratch)\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" particleToWorld = Cesium.Matrix4.multiply("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".modelMatrix, emitterModelMatrix, "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Matrix4())\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" worldToParticle = Cesium.Matrix4.inverseTransformation(particleToWorld, particleToWorld)\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" size = Cesium.Math.randomBetween("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".minimumExplosionSize, "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".maximumExplosionSize)\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" particlePositionScratch = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3()\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" force = "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("particle")]),s._v(") ")]),s._v("{\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" position = Cesium.Matrix4.multiplyByPoint(worldToParticle, particle.position, particlePositionScratch)\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (Cesium.Cartesian3.magnitudeSquared(position) >= size * size) {\n            Cesium.Cartesian3.clone(Cesium.Cartesian3.ZERO, particle.velocity)\n          }\n        }\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" normalSize = (size - "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".minimumExplosionSize) / ("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".maximumExplosionSize - "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".minimumExplosionSize)\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" minLife = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.3")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" maxLife = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" life = normalSize * (maxLife - minLife) + minLife\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".options.push({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("image")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".getImage(),\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("startColor")]),s._v(": color,\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("endColor")]),s._v(": color.withAlpha("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v("),\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("particleLife")]),s._v(": life,\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("speed")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100.0")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("imageSize")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".particlePixelSize,\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("emissionRate")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("emitter")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.SphereEmitter("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.1")]),s._v("),\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bursts")]),s._v(": bursts,\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lifetime")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".lifetime,\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("updateCallback")]),s._v(": force,\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("modelMatrix")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".modelMatrix,\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("emitterModelMatrix")]),s._v(": emitterModelMatrix\n        })\n      },\n      getImage() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" particleCanvas = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".particleCanvas\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!Cesium.defined(particleCanvas)) {\n          particleCanvas = "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".createElement("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'canvas'")]),s._v(")\n          particleCanvas.width = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v("\n          particleCanvas.height = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" context2D = particleCanvas.getContext("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2d'")]),s._v(")\n          context2D.beginPath()\n          context2D.arc("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", Cesium.Math.TWO_PI, "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(")\n          context2D.closePath()\n          context2D.fillStyle = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'rgb(255, 255, 255)'")]),s._v("\n          context2D.fill()\n        }\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" particleCanvas\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("true")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("是否显示粒子。")])]),s._v(" "),a("tr",[a("td",[s._v("updateCallback")]),s._v(" "),a("td",[s._v("Function")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 更新回调函数。")])]),s._v(" "),a("tr",[a("td",[s._v("emitter")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 粒子触发器类型。")])]),s._v(" "),a("tr",[a("td",[s._v("modelMatrix")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 4x4转换矩阵，可将粒子系统从模型转换为世界坐标。")])]),s._v(" "),a("tr",[a("td",[s._v("emitterModelMatrix")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 4x4转换矩阵，用于转换粒子系统局部坐标系内的粒子系统发射器。")])]),s._v(" "),a("tr",[a("td",[s._v("emissionRate")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("5")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 每秒要发射的粒子数。")])]),s._v(" "),a("tr",[a("td",[s._v("bursts")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" ParticleBurst 数组，在周期性时间发射粒子。")])]),s._v(" "),a("tr",[a("td",[s._v("loop")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 粒子系统完成后是否应循环其爆发。")])]),s._v(" "),a("tr",[a("td",[s._v("scale")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 设置比例尺，以在其粒子寿命期间应用到粒子图像。")])]),s._v(" "),a("tr",[a("td",[s._v("startScale")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 在粒子寿命开始时应用于粒子图像的初始比例。")])]),s._v(" "),a("tr",[a("td",[s._v("endScale")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 在粒子寿命结束时应用于粒子图像的最终比例。")])]),s._v(" "),a("tr",[a("td",[s._v("color")]),s._v(" "),a("td",[s._v("Object|Array|String")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 设置粒子在其粒子寿命期间的颜色。")])]),s._v(" "),a("tr",[a("td",[s._v("startColor")]),s._v(" "),a("td",[s._v("Object|Array|String")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 粒子在其生命初期的颜色。")])]),s._v(" "),a("tr",[a("td",[s._v("endColor")]),s._v(" "),a("td",[s._v("Object|Array|String")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 粒子寿命结束时的颜色。")])]),s._v(" "),a("tr",[a("td",[s._v("image")]),s._v(" "),a("td",[s._v("Object|String")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 用于广告牌的URI，HTMLImageElement或HTMLCanvasElement。")])]),s._v(" "),a("tr",[a("td",[s._v("imageSize")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 如果设置，则将覆盖用来缩放粒子图像尺寸（以像素为单位）的minimumImageSize和maximumImageSize输入。")])]),s._v(" "),a("tr",[a("td",[s._v("minimumImageSize")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 设置宽度的最小范围，以高度为单位，在该范围之上可以随机缩放粒子图像的尺寸（以像素为单位）。")])]),s._v(" "),a("tr",[a("td",[s._v("maximumImageSize")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 设置最大边界（宽度乘以高度），在该边界以下可以随机缩放粒子图像的尺寸（以像素为单位）。")])]),s._v(" "),a("tr",[a("td",[s._v("speed")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 如果设置，则用该值覆盖minimumSpeed和maximumSpeed输入。")])]),s._v(" "),a("tr",[a("td",[s._v("minimumSpeed")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 设置以米/秒为单位的最小范围，在该范围上可以随机选择粒子的实际速度。")])]),s._v(" "),a("tr",[a("td",[s._v("maximumSpeed")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 设置以米/秒为单位的最大范围，在该范围内将随机选择粒子的实际速度。")])]),s._v(" "),a("tr",[a("td",[s._v("lifetime")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 粒子系统发射粒子的时间（以秒为单位）。")])]),s._v(" "),a("tr",[a("td",[s._v("particleLife")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("5.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 如果设置，则使用此值覆盖minimumParticleLife和maximumParticleLife输入。")])]),s._v(" "),a("tr",[a("td",[s._v("minimumParticleLife")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 设置以秒为单位的粒子寿命的可能持续时间的最小范围，在该范围内可以随机选择粒子的实际寿命。")])]),s._v(" "),a("tr",[a("td",[s._v("maximumParticleLife")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 设置以秒为单位的粒子生命的可能持续时间的最大范围，在该范围内将随机选择粒子的实际生命。")])]),s._v(" "),a("tr",[a("td",[s._v("mass")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 设置粒子的最小和最大质量（以千克为单位）。")])]),s._v(" "),a("tr",[a("td",[s._v("minimumMass")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 设置粒子质量的最小范围（以千克为单位）。 粒子的实际质量将被选择为高于此值的随机量。")])]),s._v(" "),a("tr",[a("td",[s._v("maximumMass")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 设置最大粒子质量（以千克为单位）。 粒子的实际质量将选择为低于此值的随机量。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("参考官方文档："),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/ParticleSystem.html"}},[this._v("ParticleSystem")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),s._v(" "),a("tr",[a("td",[s._v("complete")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("当粒子系统达到其生命周期尽头时触发事件。")])])])])}],!1,null,null,null);t.default=n.exports}}]);
//# sourceMappingURL=160.4dfa2f834714ef26e5b4.js.map