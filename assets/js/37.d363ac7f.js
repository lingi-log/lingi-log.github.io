(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{236:function(t,a,s){"use strict";s.r(a);var n=s(0),p=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mybatis에서-1-n-관계-테이블-join-하기"}},[t._v("Mybatis에서 1:n 관계 테이블 JOIN 하기")]),t._v(" "),s("p",[t._v("Album")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("id")]),t._v(" "),s("th",[t._v("album")]),t._v(" "),s("th",[t._v("singer")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("Love poem")]),t._v(" "),s("td",[t._v("아이유")])])])]),t._v(" "),s("p",[t._v("Singer")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("id")]),t._v(" "),s("th",[t._v("album_id")]),t._v(" "),s("th",[t._v("song")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("unlucky")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("그 사람")])]),t._v(" "),s("tr",[s("td",[t._v("3")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("Blueming")])]),t._v(" "),s("tr",[s("td",[t._v("4")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("시간의 바깥")])]),t._v(" "),s("tr",[s("td",[t._v("5")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("자장가")])]),t._v(" "),s("tr",[s("td",[t._v("6")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("Love poem")])])])]),t._v(" "),s("p",[t._v("두 테이블이 있고 여기서 album과 가수, 곡정보를 한꺼번에 가져오고 싶으면 join을 사용하면 된다. 조인을 사용해 가져오면 아래와 같은 형태로 가져오게 되는데,")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("album_id")]),t._v(" "),s("th",[t._v("album")]),t._v(" "),s("th",[t._v("가수")]),t._v(" "),s("th",[t._v("song_id")]),t._v(" "),s("th",[t._v("song")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("Love poem")]),t._v(" "),s("td",[t._v("아이유")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("unlucky")])]),t._v(" "),s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("Love poem")]),t._v(" "),s("td",[t._v("아이유")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("그 사람")])]),t._v(" "),s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("Love poem")]),t._v(" "),s("td",[t._v("아이유")]),t._v(" "),s("td",[t._v("3")]),t._v(" "),s("td",[t._v("Blueming")])]),t._v(" "),s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("Love poem")]),t._v(" "),s("td",[t._v("아이유")]),t._v(" "),s("td",[t._v("4")]),t._v(" "),s("td",[t._v("시간의 바깥")])]),t._v(" "),s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("Love poem")]),t._v(" "),s("td",[t._v("아이유")]),t._v(" "),s("td",[t._v("5")]),t._v(" "),s("td",[t._v("자장가")])]),t._v(" "),s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("Love poem")]),t._v(" "),s("td",[t._v("아이유")]),t._v(" "),s("td",[t._v("6")]),t._v(" "),s("td",[t._v("Love poem")])])])]),t._v(" "),s("p",[t._v("album과 가수 정보가 중복으로 들어가게 된다. Album과 Singer는 1:n 관계로, Album에 해당하는 정보는 한개만 있어도 되기 때문에")]),t._v(" "),s("h3",{attrs:{id:"쿼리-관련"}},[t._v("쿼리 관련")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("resultMap")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("resultAlbum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.example.demo.api.album.domain.Album"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("property")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("column")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("albumId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("result")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("property")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("column")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("albumTitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("collection")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("property")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("songs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("column")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("albumId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("javaType")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ArrayList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ofType")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.example.demo.api.album.domain.Song"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("property")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("column")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("songId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("result")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("property")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("column")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("songTitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("result")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("property")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("track"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("column")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("track"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("result")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("property")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("column")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("collection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("resultMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=p.exports}}]);