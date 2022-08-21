<%@ include file="init.jsp" %>

<div id="<portlet:namespace />-root"></div>

<c:choose>
	<c:when test="${modeDev}">
		<script>
			document.getElementById('<portlet:namespace />-root').id = 'dev-root'
		</script>
		<script src="http://localhost:8081/o/react-portlet/webpack.bundle.js"></script>
	</c:when>
	<c:otherwise>
		<aui:script require="${mainRequire}">
			main.default('<portlet:namespace />-root');
		</aui:script>
	</c:otherwise>
</c:choose>
