(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["comple","chunk-515a8379"],{"0095":function(t,n,a){"use strict";a("95c5")},"13aa":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container-fluid banner-interno"},[a("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),a("div",{staticClass:"container"},[a("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?a("div",{staticClass:"banner-interno__titulo__icono me-3"},[a("i",{class:t.icono})]):t._e(),a("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},o=[],r={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},i=r,s=(a("0095"),a("2877")),c=Object(s["a"])(i,e,o,!1,null,null,null);n["default"]=c.exports},"44b8":function(t,n,a){"use strict";a("e29a")},"95c5":function(t,n,a){},dd8c:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"curso-main-container complementario"},[a("BannerInterno",{attrs:{icono:"far fa-folder-open",titulo:"Material complementario"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[a("div",{staticClass:"table-responsive"},[a("table",[t._m(0),a("tbody",t._l(t.complementarioData,(function(n,e){return a("tr",{key:"complementario-"+e},[a("td",{attrs:{colspan:"8",scope:"row"},domProps:{innerHTML:t._s(n.texto)}}),a("td",{attrs:{colspan:"2"},domProps:{innerHTML:t._s(n.tipo)}}),a("td",{attrs:{colspan:"2"}},[a("div",{staticClass:"complementario__btn"},[a("a",{attrs:{href:n.descarga?t.obtenerLink(n.descarga):n.link,target:"_blank"}},[a("i",{staticClass:"fas fa-external-link-alt"})])])])])})),0)])])])],1)},o=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("thead",[a("tr",[a("th",{attrs:{colspan:"8",scope:"col"}},[t._v("Autor, (año del documento o material), Nombre del documento o material")]),a("th",{attrs:{colspan:"2",scope:"col"}},[t._v("Tipo de material")]),a("th",{attrs:{colspan:"2",scope:"col"}},[t._v("Enlace")])])])}],r=a("13aa"),i={name:"MaterialComplementario",components:{BannerInterno:r["default"]},computed:{complementarioData:function(){return this.$config.complementario}}},s=i,c=(a("44b8"),a("2877")),l=Object(c["a"])(s,e,o,!1,null,null,null);n["default"]=l.exports},e29a:function(t,n,a){}}]);
//# sourceMappingURL=comple.305edc5d.js.map