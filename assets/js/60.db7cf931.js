(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{266:function(e,t,i){"use strict";i.r(t);var r=i(0),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"proxy-pattern"}},[e._v("Proxy Pattern")]),e._v(" "),i("p",[e._v("Proxy패턴은 Structural Design Pattern(클래스나 객체를 조합해 더 큰 구조를 만드는 패턴)으로, 원본 객체에 대한 요청 앞, 뒤로 무언가를 수행할 수 있도록 해 준다. 출처는 "),i("a",{attrs:{href:"https://refactoring.guru/design-patterns/proxy",target:"_blank",rel:"noopener noreferrer"}},[e._v("이곳"),i("OutboundLink")],1),e._v(" 이다.")]),e._v(" "),i("h2",{attrs:{id:"필요성에-대해"}},[e._v("필요성에 대해.")]),e._v(" "),i("p",[e._v("왜 객체에 대한 접근을 제어해야 할까? 예를 들어 보자."),i("br"),e._v("\n많은 양의 시스템 리소스를 잡아먹는 방대한 양의 Object가 있다고 해 보자. 이 객체에 접근하는 Client들은 이 객체를 항상 필요로 하는 것이 아니라 가끔씩 필요로 한다."),i("br"),e._v("\n그래서 Client들은 Lazy Initialization(필요할 때 생성) Code를 실행해야 하는데, 이때 상당히 많은 코드의 중복이 발생할 수 있다."),i("br"),e._v("\n이상적으로는 Object 클래스에 이 로직을 집어넣는다면 좋겠지만, 현실은 불가능할 때가 많다. 예를들어 closed 3rd-party 라이브러리의 클래스를 사용할 때 그렇다.")]),e._v(" "),i("h2",{attrs:{id:"어떻게-해결할까"}},[e._v("어떻게 해결할까?")]),e._v(" "),i("p",[e._v("Proxy 패턴을 적용해 보자.")]),e._v(" "),i("ul",[i("li",[e._v("Origin Service Object와 같은 interface를 구현한 proxy 클래스를 생성")]),e._v(" "),i("li",[e._v("모든 clients가 proxy에 접근하도록 한다.")]),e._v(" "),i("li",[e._v("proxy는 client로 부터 요청을 받으면 Origin Service Object를 생성하고, 모든 작업을 위임한다.")])]),e._v(" "),i("p",[e._v("이렇게 함으로서 Origin Service Object 의 변경 없이 Origin Service Object의 로직을 실행하기 전, 후에 무언가 필요한 작업을 실행시킬 수 있다.")]),e._v(" "),i("h2",{attrs:{id:"proxy-패턴의-구조"}},[e._v("Proxy 패턴의 구조")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://raw.githubusercontent.com/lingi-log/lingi-log/master/assets/images/study/designpattern/proxy_2.jpeg",alt:"proxy패턴의구조"}})]),e._v(" "),i("ol",[i("li",[i("code",[e._v("ServiceInterface")]),e._v("는 Service의 인터페이스를 정의한다. Proxy는 Service Object처럼 동작하기 위해 이 인터페이스를 구현해야 한다.")]),e._v(" "),i("li",[i("code",[e._v("Service")]),e._v("는 필요한 비지니스 로직을 제공한다.")]),e._v(" "),i("li",[i("code",[e._v("Proxy")]),e._v("클래스에는 service object를 가리키는 reference field가 있다. "),i("code",[e._v("Proxy")]),e._v("가 특정 작업(lazy initialization, logging, access control, caching 등)을 마친 뒤 request를 service object에 전달한다."),i("br"),e._v("\n보통, proxy는 service object의 전체 life cycle을 관리한다.")]),e._v(" "),i("li",[e._v("클라이언트는 동일한 인터페이스를 통해 서비스와 프록시 모두에서 작동해야한다. 이렇게하면 서비스 객체가 필요한 모든 코드에 프록시를 전달할 수 있다.")])]),e._v(" "),i("h2",{attrs:{id:"_3rd-party-라이브러리와-proxy-예시"}},[e._v("3rd-party 라이브러리와 Proxy 예시")]),e._v(" "),i("p",[e._v("Proxy로 어떻게 3rd-party 라이브러리의 lazy initialization과 caching을 구현하는 지 보여주는 예시 이다.\n"),i("img",{attrs:{src:"https://raw.githubusercontent.com/lingi-log/lingi-log/master/assets/images/study/designpattern/proxy_3.jpeg",alt:"proxy와3rdpartylib"}}),e._v("\nLibrary는 video download 클래스를 제공한다. 하지만 이것은 매우 비효율적이다. 만약 Client application이 동일한 video를 여러 번 요청하면, 라이브러리는 그 파일을 캐싱해놓고 재사용하는 것이 아니라 계속해서 다운로드 한다."),i("br"),e._v("\nProxy클래스는 원본 라이브러리와 같은 인터페이스를 구현하고 있으며 모든 작업 요청을 위임한다. 하지만 Client가 동일한 파일을 반복적으로 요청한다면, cache된 파일을 내려준다."),i("br"),e._v("\n아래의 psuedocode를 보고 이해해 보자.")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("// The interface of a remote service.\ninterface ThirdPartyYoutubeLib is\n    method listVideos()\n    method getVideoInfo(id)\n    method downloadVideo(id)\n\n// The concrete implementation of a service connector. Methods\n// of this class can request information from YouTube. The speed\n// of the request depends on a user's internet connection as\n// well as YouTube's. The application will slow down if a lot of\n// requests are fired at the same time, even if they all request\n// the same information.\nclass ThirdPartyYoutubeClass implements ThirdPartyYoutubeLib is\n    method listVideos() is\n        // Send an API request to YouTube.\n\n    method getVideoInfo(id) is\n        // Get metadata about some video.\n\n    method downloadVideo(id) is\n        // Download a video file from YouTube.\n\n// To save some bandwidth, we can cache request results and keep\n// them for some time. But it may be impossible to put such code\n// directly into the service class. For example, it could have\n// been provided as part of a third party library and/or defined\n// as `final`. That's why we put the caching code into a new\n// proxy class which implements the same interface as the\n// service class. It delegates to the service object only when\n// the real requests have to be sent.\nclass CachedYoutubeClass implements ThirdPartyYouTubeLib is\n    private field service: ThirdPartyYouTubeClass\n    private field listCache, videoCache\n    field needReset\n\n    constructor CachedYoutubeClass(service: ThirdPartyYouTubeLib) is\n        this.service = service\n\n    method listVideos() is\n        if (listCache == null || needReset)\n            listCache = service.listVideos()\n        return listCache\n\n    method getVideoInfo(id) is\n        if (videoCache == null || needReset)\n            videoCache = service.getVideoInfo(id)\n        return videoCache\n\n    method downloadVideo(id) is\n        if (!downloadExists(id) || needReset)\n            service.downloadVideo(id)\n\n// The GUI class, which used to work directly with a service\n// object, stays unchanged as long as it works with the service\n// object through an interface. We can safely pass a proxy\n// object instead of a real service object since they both\n// implement the same interface.\nclass YoutubeManager is\n    protected field service: ThirdPartyYouTubeLib\n\n    constructor YoutubeManager(service: ThirdPartyYouTubeLib) is\n        this.service = service\n\n    method renderVideoPage(id) is\n        info = service.getVideoInfo(id)\n        // Render the video page.\n\n    method renderListPanel() is\n        list = service.listVideos()\n        // Render the list of video thumbnails.\n\n    method reactOnUserInput() is\n        renderVideoPage()\n        renderListPanel()\n\n// The application can configure proxies on the fly.\nclass Application is\n    method init() is\n        aYouTubeService = new ThirdPartyYouTubeClass()\n        aYouTubeProxy = new CachedYouTubeClass(aYouTubeService)\n        manager = new YouTubeManager(aYouTubeProxy)\n        manager.reactOnUserInput()\n")])])]),i("h2",{attrs:{id:"적용-분야"}},[e._v("적용 분야")]),e._v(" "),i("h3",{attrs:{id:"lazy-initialization"}},[e._v("Lazy Initialization")]),e._v(" "),i("p",[e._v("객체를 앱 실행 시 생성하는 것이 아니라 객체가 필요할 때(호출됐을 때) 생성할 수 있다.")]),e._v(" "),i("h3",{attrs:{id:"access-control"}},[e._v("Access Control")]),e._v(" "),i("p",[e._v("중요한 자원에 접근할 때 인가받은 사용자만이 접근할 수 있도록 접근을 제어할 수 있다.")]),e._v(" "),i("h3",{attrs:{id:"local-execution-of-a-remote-service"}},[e._v("Local execution of a remote service")]),e._v(" "),i("p",[e._v("원격에 있는 Service를 실행해야 하는 경우 Proxy는 네트워크를 통해 클라이언트 요청을 전달하여 네트워크를 통해 작업하는 모든 정보를 처리한다.")]),e._v(" "),i("h3",{attrs:{id:"logging-request"}},[e._v("Logging Request")]),e._v(" "),i("p",[e._v("실제 Service에 요청을 전달하기 전/후 요청에 대한 로그를 남길 수 있다.")]),e._v(" "),i("h3",{attrs:{id:"caching-request-results"}},[e._v("Caching request results")]),e._v(" "),i("p",[e._v("result를 캐싱해놓음으로서 반복적인 요청에 대해 Service를 호출하지 않고 캐싱해놓은 데이터를 return 해주면 된다.")]),e._v(" "),i("h3",{attrs:{id:"smart-reference"}},[e._v("Smart reference")]),e._v(" "),i("p",[e._v("Smart reference. This is when you need to be able to dismiss a heavyweight object once there are no clients that use it.")]),e._v(" "),i("p",[e._v("The proxy can keep track of clients that obtained a reference to the service object or its results. From time to time, the proxy may go over the clients and check whether they are still active. If the client list gets empty, the proxy might dismiss the service object and free the underlying system resources.")]),e._v(" "),i("p",[e._v("The proxy can also track whether the client had modified the service object. Then the unchanged objects may be reused by other clients.")]),e._v(" "),i("h2",{attrs:{id:"구현방법"}},[e._v("구현방법")]),e._v(" "),i("ol",[i("li",[e._v("존재하는 service interface가 없다면, proxy와 service object를 상호 교환 할 수 있는 interface를 하나 만든다. Service 클래스로 부터 interface를 뽑아내는 것은 항상 가능한 것은 아니다. interface를 뽑아내고 사용하기 위해 많은 곳을 변경해야 하기ㅏ 때문이다. 이럴 경우 대안으로 service 클래스를 상속받아 proxy를 만들 수 있다. 이 경우 proxy는 service 클래스의 interface를 상속받을 수 있다.")]),e._v(" "),i("li",[e._v("Proxy 클래스 에는 service의 reference를 담을 수 있는 필드가 필요하다. 보통 proxy는 service의 생명주기를 관리한다. 드물게 클라이언트가 생성자를 통해 service를 전달하기도 한다.")]),e._v(" "),i("li",[e._v("Proxy의 목적에 따라 method를 구현한다. 대부분의 경우, 특정 동작을 한 후, proxy는 작업을 service의 객체에 위임해야 한다.")]),e._v(" "),i("li",[e._v("경우에 따라 프록시를 사용할 지, 실제 서비스 클래스를 사용할 지 결정할 수 있는 메소드를 제공할 수도 있다. 간단한 static 메소드 이거나 full-blown(완전한?) 팩토리 메소드를 통해.")]),e._v(" "),i("li",[e._v("Service object 를 lazy initialization 할 지 결정한다.")])]),e._v(" "),i("h2",{attrs:{id:"장단점"}},[e._v("장단점")]),e._v(" "),i("h3",{attrs:{id:"장점"}},[e._v("장점")]),e._v(" "),i("ul",[i("li",[e._v("Client가 알 지 못하게 프록시를 적용할 수 있다.")]),e._v(" "),i("li",[e._v("Service object의 life cycle을 관리할 수 있다.(when clients don’t care about it.)")]),e._v(" "),i("li",[e._v("Service object가 생성되지 않았을 때, 사용 불가 상태일 때도 프록시는 이용할 수 있다.")]),e._v(" "),i("li",[e._v("개방/폐쇄 원칙을 따라 service나 client를 수정하지 않고 새로운 프록시를 생성, 사용할 수 있다.")])]),e._v(" "),i("h3",{attrs:{id:"단점"}},[e._v("단점")]),e._v(" "),i("ul",[i("li",[e._v("새 클래스가 많이 생성, 사용되기 때문에 코드가 복잡해 질 수 있다.")]),e._v(" "),i("li",[e._v("Service에서의 응답이 지연될 수 있다.")])]),e._v(" "),i("hr"),e._v(" "),i("p",[e._v("출처 : "),i("a",{attrs:{href:"https://refactoring.guru/design-patterns/proxy",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://refactoring.guru/design-patterns/proxy"),i("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);