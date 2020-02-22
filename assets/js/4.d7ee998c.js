(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{202:function(t,v,e){t.exports=e.p+"assets/img/aop-3.26584a92.png"},221:function(t,v,e){"use strict";e.r(v);var i=e(0),_=Object(i.a)({},(function(){var t=this,v=t.$createElement,i=t._self._c||v;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"aop"}},[t._v("AOP")]),t._v(" "),i("p",[t._v("Aspect-oriendted Programming (AOP)은 OOP를 보완하는 수단으로, 흩어진 Aspect를 모듈화 할 수 있는 프로그래밍 기법. 흩어진 관심사 (Crosscutting Concerns)")]),t._v(" "),i("h2",{attrs:{id:"aop-용어"}},[t._v("AOP 용어")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("용어")]),t._v(" "),i("th",[t._v("설명")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Aspect")]),t._v(" "),i("td",[t._v("공통적으로 적용될 기능을 의미. 횡단 관심사의 기능이라고도 할 수 잇으며 한 개 이상이 Pointcut과 Advice 조합으로 만들어진다.")])]),t._v(" "),i("tr",[i("td",[t._v("Advice")]),t._v(" "),i("td",[t._v("관점의 구현체로 조인포인트에 삽입되어 동작하는것을 의미함. 스프링에서 사용하는 Advice는 동작하는 시점에따라 다섯 종류로 구분된다.")])]),t._v(" "),i("tr",[i("td",[t._v("Jointpoint")]),t._v(" "),i("td",[t._v("어드바이스를 적용하는 지점을 의미. 스프링에서 Jointpoint는 항상 메서드 실행단계만 가능하다.")])]),t._v(" "),i("tr",[i("td",[t._v("Pointcut")]),t._v(" "),i("td",[t._v("Advice를 적용할 조인트포인트를 선별하는 과정이나 그 기능을 정의한 모듈을 의미. 정규표현식이나 AspectJ문법을 이용하여 어떤 Jointpoint를 사용할지 결정.")])]),t._v(" "),i("tr",[i("td",[t._v("Target")]),t._v(" "),i("td",[t._v("Advice를 받을 대상을 의미")])]),t._v(" "),i("tr",[i("td",[t._v("Weaving")]),t._v(" "),i("td",[t._v("어드바이스를 적용하는것을 의미. 공통 코드를 원하는 대상에 삽입하는것을 의미한다.")])])])]),t._v(" "),i("h3",{attrs:{id:"weaving"}},[t._v("Weaving")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("종류")]),t._v(" "),i("th",[t._v("설명")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Runtime weaving")]),t._v(" "),i("td",[t._v("JDK dynamic proxy 나 CGLIB proxy를 생성하여 실행시간에 target에 weaving 하는 방식")])]),t._v(" "),i("tr",[i("td",[t._v("Compile-time weaving")]),t._v(" "),i("td",[t._v("컴파일 시점에 Application 소스코드와 Aspect 코드를 Weaving 하여 AOP가 적용된 클래스를 만들어내는 방식")])]),t._v(" "),i("tr",[i("td",[t._v("Post-compile weaving")]),t._v(" "),i("td",[t._v("Binary weaving이라고도 하며 이미 존재하는 클래스나 JAR파일을 조작하여 weaving 한다.")])]),t._v(" "),i("tr",[i("td",[t._v("Load-time weaving")]),t._v(" "),i("td",[t._v("Weaving 하는 시점을 class loader가 class를 jvm에 로드하는 시점으로 늦춘 것 빼고 Post-compile weaving방식과 동일.")])])])]),t._v(" "),i("h2",{attrs:{id:"aop-구현체"}},[t._v("AOP 구현체")]),t._v(" "),i("ul",[i("li",[t._v("AspectJ")]),t._v(" "),i("li",[t._v("스프링 AOP")])]),t._v(" "),i("h3",{attrs:{id:"스프링-aop"}},[t._v("스프링 AOP")]),t._v(" "),i("p",[t._v("Runtime weaving 방식을 사용하며 프록시 기반 AOP 구현체이다.")]),t._v(" "),i("h4",{attrs:{id:"runtime-weaving"}},[t._v("Runtime weaving")]),t._v(" "),i("p",[t._v("proxy(JDK dynamic proxy 나 CGLIB prox)를 사용하여 구현되었다.")]),t._v(" "),i("p",[i("img",{attrs:{src:e(202),alt:"runtime weaving"}})]),t._v(" "),i("p",[t._v("둘의 차이점은, JDK dynamic proxy는 interface 기반, CGLIB proxy는 class 기반이라는 것이다.\nJDK dynamic proxy – Spring AOP에서 선호하는 방법이다. targeted object가 interface를 구현하였다면 JDK dynamic proxy가 사용된다.\nCGLIB proxy – target object가 interface를 구현하지 않았다면, CGLIB proxy 가 사용된다.")]),t._v(" "),i("p",[t._v("스프링 AOP 특징")]),t._v(" "),i("ul",[i("li",[t._v("프록시 기반의 AOP 구현체")]),t._v(" "),i("li",[t._v("스프링 빈에만 AOP를 적용 할 수 있다.")]),t._v(" "),i("li",[t._v("모든 AOP 기능을 제공하는 것이 목적이 아니라, 스프링 IoC와 연동하여 엔터프라이즈 애플리케이션에서 가장 흔한 문제에 대한 해결책을 제공하는 것이 목적")]),t._v(" "),i("li",[t._v("스프링 IoC 컨테이너가 제공하는 기반 시설과 Dynamic 프록시를 사용하여 여러\n복잡한 문제 해결.")]),t._v(" "),i("li",[t._v("동적 프록시: 동적으로 프록시 객체 생성하는 방법")]),t._v(" "),i("li",[t._v("자바가 제공하는 방법은 인터페이스 기반 프록시 생성.")]),t._v(" "),i("li",[t._v("CGlib은 클래스 기반 프록시도 지원.")]),t._v(" "),i("li",[t._v("스프링 IoC: 기존 빈을 대체하는 동적 프록시 빈을 만들어 등록 시켜준다.")]),t._v(" "),i("li",[t._v("클라이언트 코드 변경 없음.")]),t._v(" "),i("li",[t._v("AbstractAutoProxyCreator implements BeanPostProcessor")])]),t._v(" "),i("h3",{attrs:{id:"aspectj"}},[t._v("AspectJ")]),t._v(" "),i("p",[t._v("AspectJ는 컴파일 시점에 소스코드가 aspect와 함께 컴파일된다. 스프링 AOP와 달리 runtime에 따로 할게 없다. 또한 스프링 AOP와 달리 어떤 Design pattern도 필요없다.(And so unlike Spring AOP, it doesn't require any design patterns.) To weave the aspects to the code, it introduces its compiler known as AspectJ compiler (ajc), through which we compile our program and then runs it by supplying a small (< 100K) runtime library.")])])}),[],!1,null,null,null);v.default=_.exports}}]);