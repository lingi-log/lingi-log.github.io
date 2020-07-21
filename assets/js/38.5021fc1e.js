(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{241:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"autowired와-aop를-함께-사용할-때-주의-해야-할-점"}},[t._v("Autowired와 AOP를 함께 사용할 때 주의 해야 할 점")]),t._v(" "),s("p",[t._v("AOP(Aspect-oriendted Programming)는 OOP를 보완하는 수단으로, 흩어진 Aspect를 모듈화 할 수 있는 프로그래밍 기법 이고, Autowired는 Spring에서 아~주 간편하게 의존성을 주입하는 방법이다. 토이프로젝트를 진행하며 AOP와 Autowired를 함께 사용하다 겪은 문제상황과 이를 해결한 경험을 기록해놓고자 한다.")]),t._v(" "),s("h2",{attrs:{id:"문제상황"}},[t._v("문제상황")]),t._v(" "),s("p",[t._v("Controller에 Bean으로 등록한 Service를 @Autowired를 통해 주입 받아 사용하려 했지만 "),s("code",[t._v("BeanNotOfRequiredTypeException")]),t._v("이 발생했다. 분명 어제까진 된것 같은데... 뭐때문에 발생한걸까?")]),t._v(" "),s("blockquote",[s("h3",{attrs:{id:"beannotofrequiredtypeexception은-언제-발생하지"}},[t._v("BeanNotOfRequiredTypeException은 언제 발생하지?")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/beans/factory/BeanNotOfRequiredTypeException.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("spring 문서"),s("OutboundLink")],1),t._v("를 보면 이 Exception은 Bean이 예상 타입과 다를 때(Thrown when a bean doesn't match the expected type.) 발생한다고 한다.")])]),t._v(" "),s("p",[t._v("수정했던코드를 한단계씩 되돌려가며 실행해 보았고, 예외를 발생시킨 수정을 찾을 수 있었다.")]),t._v(" "),s("h2",{attrs:{id:"무엇이-예외를-발생시켰나"}},[t._v("무엇이 예외를 발생시켰나")]),t._v(" "),s("ul",[s("li",[t._v("코드 A - 정상동작"),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DeployController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Deploy")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DeployItemReqDto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" deployComp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("코드 B - 예외발생 케이스"),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DeployController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DeployItem")]),t._v(" deployComp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("음 뭐가 다른거지??")]),t._v(" "),s("p",[t._v("일단 클래스 다이어그램을 보자.\n"),s("img",{attrs:{src:"https://raw.githubusercontent.com/lingi-log/lingi-log/master/assets/images/experiences/deployclassdiagram.png",alt:"클래스다이어그램"}})]),t._v(" "),s("p",[t._v("인터페이스 "),s("code",[t._v("Deploy<T>")]),t._v("가 있고, 이를 구현한 추상클래스 "),s("code",[t._v("DeployItem")]),t._v("와 클래스 "),s("code",[t._v("DeployGroup")]),t._v("이 있다. 그리고 추상클래스 "),s("code",[t._v("DeployItem")]),t._v("를 상속받은 클래스 "),s("code",[t._v("DeployItemA")]),t._v(", "),s("code",[t._v("DeployItemB")]),t._v(", "),s("code",[t._v("DeployItemC")]),t._v("가 있다. "),s("code",[t._v("DeployGroup")]),t._v(", "),s("code",[t._v("DeployItemA")]),t._v(", "),s("code",[t._v("DeployItemB")]),t._v(", "),s("code",[t._v("DeployItemC")]),t._v("는 "),s("code",[t._v("@Service")]),t._v(" 어노테이션을 붙여 Bean으로 등록했다. (설계를 왜 이렇게 했는지에 대한 의문이 든다면 잠시 접어두자.)")]),t._v(" "),s("p",[t._v("다시 코드를 보면 인터페이스인 "),s("code",[t._v("Deploy<T>")]),t._v("를 필드로 선언했을 땐 정상 동작하지만  추상클래스 "),s("code",[t._v("DeployItem")]),t._v("를 필드로 선언했을 때 예외가 발생한다는 것을 알 수 있다. 여전히 아리송하다.")]),t._v(" "),s("p",[t._v("이쯤 보고 로그를 다시 보자. 뭔가 건질만한게 있을까?")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Caused by: org.springframework.beans.factory.BeanNotOfRequiredTypeException: Bean named 'deployItemC' is expected to be of type '~~~~~.DeployItem' but was actually of type 'com.sun.proxy.$Proxy95'\n")])])]),s("p",[t._v("여전히 모르겠지만 이상한 점이 하나 보인다. 왜 "),s("code",[t._v("deployComp")]),t._v("의 타입이 "),s("code",[t._v("com.sun.proxy.$Proxy95")]),t._v("이지?")]),t._v(" "),s("p",[t._v("회사 동료와 스터디원들에게 물어봤지만 원인을 찾지 못했는데 끈질긴 구글링 덕에 원인을 찾을 수 있었는데, 그 전에 AOP에 대해 살짝 알아보자.")]),t._v(" "),s("h2",{attrs:{id:"aop-간단하게"}},[t._v("AOP... 간단하게!")]),t._v(" "),s("p",[t._v("앞서 말한것 처럼 AOP(Aspect-oriendted Programming)는 OOP를 보완하는 수단으로, 흩어진 Aspect를 모듈화 할 수 있는 프로그래밍 기법 이다.")]),t._v(" "),s("h3",{attrs:{id:"aop-용어"}},[t._v("AOP 용어")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("용어")]),t._v(" "),s("th",[t._v("설명")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Aspect")]),t._v(" "),s("td",[t._v("공통적으로 적용될 기능을 의미. 횡단 관심사의 기능이라고도 할 수 잇으며 한 개 이상이 Pointcut과 Advice 조합으로 만들어진다.")])]),t._v(" "),s("tr",[s("td",[t._v("Advice")]),t._v(" "),s("td",[t._v("관점의 구현체로 조인포인트에 삽입되어 동작하는것을 의미함. 스프링에서 사용하는 Advice는 동작하는 시점에따라 다섯 종류로 구분된다.")])]),t._v(" "),s("tr",[s("td",[t._v("Jointpoint")]),t._v(" "),s("td",[t._v("어드바이스를 적용하는 지점을 의미. 스프링에서 Jointpoint는 항상 메서드 실행단계만 가능하다.")])]),t._v(" "),s("tr",[s("td",[t._v("Pointcut")]),t._v(" "),s("td",[t._v("Advice를 적용할 조인트포인트를 선별하는 과정이나 그 기능을 정의한 모듈을 의미. 정규표현식이나 AspectJ문법을 이용하여 어떤 Jointpoint를 사용할지 결정.")])]),t._v(" "),s("tr",[s("td",[t._v("Target")]),t._v(" "),s("td",[t._v("Advice를 받을 대상을 의미")])]),t._v(" "),s("tr",[s("td",[t._v("Weaving")]),t._v(" "),s("td",[t._v("어드바이스를 적용하는것을 의미. 공통 코드를 원하는 대상에 삽입하는것을 의미한다.")])])])]),t._v(" "),s("p",[t._v("AOP의 개념들 중 Weaving에 대해 조금 더 알아보자")]),t._v(" "),s("h3",{attrs:{id:"weaving"}},[t._v("Weaving")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("종류")]),t._v(" "),s("th",[t._v("설명")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Runtime weaving")]),t._v(" "),s("td",[t._v("JDK dynamic proxy 나 CGLIB proxy를 생성하여 실행시간에 target에 weaving 하는 방식")])]),t._v(" "),s("tr",[s("td",[t._v("Compile-time weaving")]),t._v(" "),s("td",[t._v("컴파일 시점에 Application 소스코드와 Aspect 코드를 Weaving 하여 AOP가 적용된 클래스를 만들어내는 방식")])]),t._v(" "),s("tr",[s("td",[t._v("Post-compile weaving")]),t._v(" "),s("td",[t._v("Binary weaving이라고도 하며 이미 존재하는 클래스나 JAR파일을 조작하여 weaving 한다.")])]),t._v(" "),s("tr",[s("td",[t._v("Load-time weaving")]),t._v(" "),s("td",[t._v("Weaving 하는 시점을 class loader가 class를 jvm에 로드하는 시점으로 늦춘 것 빼고 Post-compile weaving방식과 동일.")])])])]),t._v(" "),s("p",[t._v("Weaving이 무엇인지는 대충 알 것 같고, 이어서 Spring에서 AOP를 어떻게 구현했는지 알아보자.")]),t._v(" "),s("h3",{attrs:{id:"aop-구현체"}},[t._v("AOP 구현체")]),t._v(" "),s("ul",[s("li",[t._v("AspectJ")]),t._v(" "),s("li",[t._v("스프링 AOP")])]),t._v(" "),s("h3",{attrs:{id:"스프링-aop"}},[t._v("스프링 AOP")]),t._v(" "),s("p",[t._v("Runtime weaving 방식을 사용하며 프록시 기반 AOP 구현체이다.")]),t._v(" "),s("h3",{attrs:{id:"runtime-weaving"}},[t._v("Runtime weaving")]),t._v(" "),s("p",[t._v("proxy(JDK dynamic proxy 나 CGLIB prox)를 사용하여 구현되었다.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/lingi-log/lingi-log/master/assets/images/backend/springboot/aop-3.png",alt:"runtime weaving"}})]),t._v(" "),s("p",[t._v("둘의 차이점은, JDK dynamic proxy는 interface 기반, CGLIB proxy는 class 기반이라는 것이다.\nJDK dynamic proxy – Spring AOP에서 선호하는 방법이다. targeted object가 interface를 구현하였다면 JDK dynamic proxy가 사용된다.\nCGLIB proxy – target object가 interface를 구현하지 않았다면, CGLIB proxy 가 사용된다.")]),t._v(" "),s("h2",{attrs:{id:"갑자기-웬-aop일까"}},[t._v("갑자기 웬 AOP일까")]),t._v(" "),s("p",[t._v("갑자기 웬 AOP?라고 생각할 수도 있지만 "),s("code",[t._v("DeployItem")]),t._v("을 구현할때")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Async")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"asyncExecutor"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DeployItemReqDto")]),t._v(" deployItemReqDto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("이렇게 "),s("code",[t._v("@Async")]),t._v(" 어노테이션을 붙여놨는데, "),s("code",[t._v("@Async")]),t._v("는 AOP 기반으로 동작하게 된다. 뭔가 알것같다.")]),t._v(" "),s("h2",{attrs:{id:"원인"}},[t._v("원인")]),t._v(" "),s("p",[t._v("추상클래스 "),s("code",[t._v("DeployItem")]),t._v("에 "),s("code",[t._v("@Async")]),t._v(" 어노테이션을 사용했기 때문에 "),s("code",[t._v("DeployItem")]),t._v("를 상속받은 클래스 "),s("code",[t._v("DeployItemA")]),t._v(", "),s("code",[t._v("DeployItemB")]),t._v(", "),s("code",[t._v("DeployItemC")]),t._v("는 "),s("strong",[t._v("proxy를 통해서 동작")]),t._v("하게 된다. 이 소스에선 AOP 설정을 따로 한게 없기 때문에 SpringAOP(JDK dynamic proxy 기반)를 통해 구현 된다. 그래서 이때 주입받으려는 bean의 필드의 종류를 Interface가 아닌 추상클래스나 구체 클래스를 선언하면 에러가 나는것이었다.")]),t._v(" "),s("h2",{attrs:{id:"문제-해결은-어떻게"}},[t._v("문제 해결은 어떻게?")]),t._v(" "),s("p",[t._v("고생한것에 비해 문제 해결방법은 간단했다. AOP가 적용된 Bean을 주입받기 위해선")]),t._v(" "),s("ol",[s("li",[t._v("필드를 interface로 선언"),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DeployController")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Deploy")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DeployItemReqDto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" deployComp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("proxy의 종류를 "),s("code",[t._v("CGLIB proxy")]),t._v("로 변경"),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proxyTargetClass"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AsyncConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"asyncExecutor"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("code",[t._v("AspectJ")]),t._v("를 사용하면 된다."),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AdviceMode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ASPECTJ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AsyncConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"asyncExecutor"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"결론"}},[t._v("결론")]),t._v(" "),s("p",[s("code",[t._v("@Autowired")]),t._v("를 통해 의존성을 주입받고 싶은 Bean이 @Async와 같이 "),s("code",[t._v("AOP")]),t._v("를 사용해야 하는 어노테이션이 붙은 객체라면 반드시 "),s("strong",[t._v("필드를 Interface Type으로 선언")]),t._v("해야 하고, 이렇게 할 수 없는 경우엔 "),s("strong",[t._v("GCLIB proxy를 사용하거나 AspectJ를 사용")]),t._v("하면 된다.")])])}),[],!1,null,null,null);a.default=n.exports}}]);