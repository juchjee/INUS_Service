<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<c:if test="${empty rootUri}"><c:set var="rootUri" value="${iConstant.get('ROOT_URI')}" scope="request" /></c:if>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko">
<head>
	<c:import url="/WEB-INF/jsp/general/meta.jsp" />
	<title><spring:message code="eGov.title" /></title>
	<c:import url="/WEB-INF/jsp/general/lib_simple.jsp"/>

	<script language="javascript">
	function fncGoAfterErrorPage(){
	    history.back(-2);
	}
	</script>
</head>

<body>
	<div class="errorBoxWrap">
		<div><img src="/common/img/header/logo.gif" alt="ISDS" /></div>
		<div class="errorBox">
			<div>
				<div class="errorImg"><img src="/common/img/header/er_logo.jpg" alt="" /></div>
				<div class="errorTxt">
					세션이 만료되었습니다.
				</div>
				<div class="errorBtn">
					<a href="#LINK" onClick="fncGoAfterErrorPage();">이전페이지로</a>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
