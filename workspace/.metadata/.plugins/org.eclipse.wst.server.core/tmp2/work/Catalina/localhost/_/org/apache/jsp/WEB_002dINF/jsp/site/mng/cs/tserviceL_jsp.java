/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.62
 * Generated at: 2019-03-13 05:34:15 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.jsp.site.mng.cs;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class tserviceL_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.HashMap<java.lang.String,java.lang.Long>(1);
    _jspx_dependants.put("/WEB-INF/tld/html.tld", Long.valueOf(1541752522000L));
  }

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html;charset=utf-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<head>\r\n");
      out.write("\r\n");
      out.write("\t<!-- 게시판관리 : 공지사항 -->\r\n");
      out.write("\r\n");
      out.write("<script type=\"text/javaScript\" defer=\"defer\">\r\n");
      out.write("\tvar contUrl = \"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${rootUri}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${conUrl}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
      out.write("tserviceL\";\r\n");
      out.write("\r\n");
      out.write("\tfunction init(){\r\n");
      out.write("\t\tfnSearchInit();\r\n");
      out.write("\t\tfnSearch();\r\n");
      out.write("\t\tfnEvent();\r\n");
      out.write("\t}\r\n");
      out.write("\r\n");
      out.write("\t/*----------------------------------------------------------------------------------------------\r\n");
      out.write("\t * Grid 초기값 셋팅 - 선택, 제품명, 판매가, 할인가, 쿠폰, 적립금, 재고, 판매상태, PC노출, 모바일노출, 과세, 등록일, 관리\r\n");
      out.write("\t *----------------------------------------------------------------------------------------------*/\r\n");
      out.write("\tvar _columns = [\r\n");
      out.write("\t     { text: '선택', datafield: 'chk', width: '5%',  columntype: 'checkbox',sortable: false ,cellsalign: 'center', align: 'center'}\r\n");
      out.write("\t\t,{ text: '번호', datafield: 'num',  width: '5%', cellsalign: 'center', align: 'center'}\r\n");
      out.write("\t\t,{ text: '신청번호', datafield: 'asTempNo',  width: '5%', cellsalign: 'center', align: 'center'}\r\n");
      out.write("\t\t,{ text: '접수번호', datafield: 'asNo',  width: '7%', cellsalign: 'center', align: 'center'}\r\n");
      out.write("\t\t,{ text: '고객번호', datafield: 'csNo',  width: '7%', cellsalign: 'center', align: 'center'}\r\n");
      out.write("\t\t,{ text: '고객명', datafield: 'tNm',  width: '5%', cellsalign: 'center', align: 'center'}\r\n");
      out.write("\t\t,{ text: '연락가능번호', datafield: 'tHp',  width: '8%', cellsalign: 'center', align: 'center'}\r\n");
      out.write("\t\t,{ text: '진행상태', datafield: 'status',  width: '5%', cellsalign: 'center', align: 'center'}\r\n");
      out.write("\t\t,{ text: '당일신청횟수', datafield: 'asDayCount',  width: '5%', cellsalign: 'center', align: 'center'}\r\n");
      out.write("\t\t,{ text: '등록일', datafield: 'regDt',  width: '8%', cellsalign: 'center', align: 'center'}\r\n");
      out.write("\t\t,{ text: '예약일자', datafield: 'bookingDt',  width: '8%', cellsalign: 'center', align: 'center'}\r\n");
      out.write("\t\t,{ text: '제품', datafield: 'prodNm',  width: '5%', cellsalign: 'center', align: 'center'}\r\n");
      out.write("\t\t,{ text: '모델', datafield: 'modelNm',  width: '7%', cellsalign: 'center', align: 'center'}\r\n");
      out.write("\t\t,{ text: '고장증상', datafield: 'ascodeNm',  width: '20%', cellsalign: 'left', align: 'center'}\r\n");
      out.write("\t\t,{ text: '회원구분', datafield: 'csTp',  width: '5%', cellsalign: 'center', align: 'center'}\r\n");
      out.write("\t\t,{ text: '주소', datafield: 'tAddrNm',  width: '20%', cellsalign: 'left', align: 'center'}\r\n");
      out.write("\t\t,{ text: '수정', datafield: 'popButton', width: '5%', cellsalign: 'center', align: 'center',\r\n");
      out.write("\t\t\tcolumntype: 'button', cellsrenderer: function () {\r\n");
      out.write("                return \"수정\";\r\n");
      out.write("             }, buttonclick: function (row) {\r\n");
      out.write("                var dataRecord = $(\"#jqxgrid\").jqxGrid('getrowdata', row);\r\n");
      out.write("\t\t\t\t\t$.fancybox.open({\r\n");
      out.write("\t\t\t\t\t\thref: \"tserviceR.action?asTempNo=\"+ dataRecord.asTempNo,\r\n");
      out.write("\t\t\t\t\t\ttype: \"iframe\",\r\n");
      out.write("\t\t\t\t\t\tmaxWidth\t: 1920,\r\n");
      out.write("\t\t\t\t\t\tmaxHeight\t: 1100,\r\n");
      out.write("\t\t\t\t\t\twidth\t\t: 1000,\r\n");
      out.write("\t\t\t\t\t\theight \t    : 740,\r\n");
      out.write("\t\t\t\t\t\tautoSize\t: false,\r\n");
      out.write("\t\t\t\t\t\tbeforeClose : function(){\r\n");
      out.write("\t\t\t\t\t    \tfnSearch();\r\n");
      out.write("\t\t\t\t\t\t}\r\n");
      out.write("\t\t\t\t\t});\r\n");
      out.write("            }\r\n");
      out.write("\t\t}\r\n");
      out.write("\t\t];\r\n");
      out.write("\r\n");
      out.write("\tvar _datafields = [\r\n");
      out.write("\t     { name: 'chk',    type: 'boolean', value: 'false'}\r\n");
      out.write("\t\t,{ name: 'num', type: 'string'}\r\n");
      out.write("\t\t,{ name: 'asTempNo', type: 'string'}\r\n");
      out.write("\t\t,{ name: 'asNo', type: 'string'}\r\n");
      out.write("\t\t,{ name: 'csNo', type: 'string'}\r\n");
      out.write("\t\t,{ name: 'tNm', type: 'string'}\r\n");
      out.write("\t\t,{ name: 'tHp', type: 'string'}\r\n");
      out.write("\t\t,{ name: 'status', type: 'string'}\r\n");
      out.write("\t\t,{ name: 'asDayCount', type: 'string'}\r\n");
      out.write("\t\t,{ name: 'regDt', type: 'string'}\r\n");
      out.write("\t\t,{ name: 'bookingDt', type: 'string'}\r\n");
      out.write("\t\t,{ name: 'prodNm', type: 'string'}\r\n");
      out.write("\t\t,{ name: 'modelNm', type: 'string'}\r\n");
      out.write("\t\t,{ name: 'ascodeNm', type: 'string'}\r\n");
      out.write("\t\t,{ name: 'csTp', type: 'string'}\r\n");
      out.write("\t\t,{ name: 'tAddrNm', type: 'string'}\r\n");
      out.write("\t];\r\n");
      out.write("\r\n");
      out.write("\tfunction fnSearchInit(){\r\n");
      out.write("\t\tdateTimeInput(\"txtFromDt\", null, \"\");\r\n");
      out.write("\t\tdateTimeInput(\"txtToDt\", null, \"\");\r\n");
      out.write("\t\tfnGridOption('jqxgrid',{\r\n");
      out.write("\t\t\theight:320\r\n");
      out.write("\t       ,columns: _columns\r\n");
      out.write("\t       ,selectionmode: 'multiplecellsextended'\r\n");
      out.write("\t    });\r\n");
      out.write("\t}\r\n");
      out.write("\r\n");
      out.write("\tfunction fnSearch(){\r\n");
      out.write("\t\tvar dataAdapter = new $.jqx.dataAdapter({\r\n");
      out.write("    \t\tdatatype: \"json\",\r\n");
      out.write("            datafields: _datafields,\r\n");
      out.write("            url: contUrl + \".action\",\r\n");
      out.write("            data: {statBc: $(\"#statBc\").val(),\r\n");
      out.write("         \t   searchType:$(\"#searchType\").val(),\r\n");
      out.write("         \t   searchTxt:$(\"#searchTxt\").val(),\r\n");
      out.write("         \t   txtFromDt:$(\"#txtFromDt\").val(),\r\n");
      out.write("         \t   modelItemCd:$(\"#modelItemCd\").val(),\r\n");
      out.write("         \t   txtToDt:$(\"#txtToDt\").val()}\r\n");
      out.write("\t\t});\r\n");
      out.write("\t\t$(\"#jqxgrid\").jqxGrid({source: dataAdapter});\r\n");
      out.write("\t\tfnResetGridEditData('jqxgrid');\r\n");
      out.write("\t\treturn false;\r\n");
      out.write("\t}\r\n");
      out.write("\r\n");
      out.write("\tfunction fnEvent(){\r\n");
      out.write("\r\n");
      out.write("\t\t$('#jqxgrid').on('columnclick', function (e) {\r\n");
      out.write("\t\t\tif(e.args.datafield == 'chk'){\r\n");
      out.write("\t\t\t\tvar rows = $('#jqxgrid').jqxGrid('getrows');\r\n");
      out.write("\t\t\t\tvar newChkValue = $(\"input[name=chkAll]\").is(\":checked\");\r\n");
      out.write("\t\t\t\tvar rowIDs = new Array();\r\n");
      out.write("\t\t\t\tfor(var i = 0, endI = rows.length; i < endI; i++){\r\n");
      out.write("\t\t\t\t\trows[i].chk = !newChkValue;\r\n");
      out.write("\t\t\t\t\trowIDs.push(rows[i].uid);\r\n");
      out.write("\t\t\t\t}\r\n");
      out.write("\t\t\t\t$(\"#jqxgrid\").jqxGrid('updaterow', rowIDs, rows);\r\n");
      out.write("\t\t\t\t$(\"input[name=chkAll]\").prop(\"checked\", !newChkValue);\r\n");
      out.write("\t\t\t}\r\n");
      out.write("\t\t });\r\n");
      out.write("\r\n");
      out.write("\t\t$(\"#jqxgrid\").off('cellclick').on('cellclick', function(e){\r\n");
      out.write("\t\t\tif(e.args.datafield == 'chk'){\r\n");
      out.write("\t\t\t\t$('#jqxgrid').jqxGrid('setcellvalue', e.args.rowindex, 'chk', !e.args.value);\r\n");
      out.write("\t\t\t}\r\n");
      out.write("\t\t});\r\n");
      out.write("\r\n");
      out.write("\t\t$(\"#btn_Search\").on('click', fnSearch);\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t\t$(\"#jqxgrid\").on('celldoubleclick', function (event)\r\n");
      out.write("\t\t\t\t{\r\n");
      out.write("\t\t\t\t\tif(event.args.datafield != 'chk'){\r\n");
      out.write("\t\t  \t\t    var args = event.args;\r\n");
      out.write("\t\t  \t\t    var rowBoundIndex = args.rowindex;\r\n");
      out.write("\t\t\t\t\tvar datarow = $('#jqxgrid').jqxGrid('getrowdata', rowBoundIndex);\r\n");
      out.write("\t\t\t\t\t\tsetTimeout(function(){\r\n");
      out.write("\t\t\t\t\t\t\t$(\"#modifyBtn\").attr(\"href\",\"tserviceR.action?asTempNo=\"+datarow.asTempNo);\r\n");
      out.write("\t\t\t\t\t\t\t$(\"#modifyBtn\").click();\r\n");
      out.write("\t\t\t\t\t\t},200);\r\n");
      out.write("\t\t\t\t\t}\r\n");
      out.write("\t\t\t\t});\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t\t$(\"#btnExcel\").on('click', function(){\r\n");
      out.write("\t\t\tgrideExportExcel('jqxgrid','공지사항목록');\r\n");
      out.write("\t\t});\r\n");
      out.write("\r\n");
      out.write("\t\t$(\".delBtn\").click(function(){\r\n");
      out.write("\t\t\tvar rows = $('#jqxgrid').jqxGrid('getrows');\r\n");
      out.write("\r\n");
      out.write("\t\t\t$.paramData = new Object();\r\n");
      out.write("\r\n");
      out.write("\t\t\tvar j = 0;\r\n");
      out.write("\t\t\tfor(var i = 0; i < rows.length; i++){\r\n");
      out.write("\t\t\t\tvar row = rows[i];\r\n");
      out.write("\t\t\t\tif(row.chk == true){\r\n");
      out.write("// \t\t\t\t\t$.paramData[j] =  row.boardSeq;\r\n");
      out.write("\t\t\t\t\t$.paramData[j] =  row.asTempNo; //20190312 ryul 수정\r\n");
      out.write("\t\t\t\t\tj++;\r\n");
      out.write("\t\t\t\t}\r\n");
      out.write("\t\t\t}\r\n");
      out.write("\t\t\tif(j == 0){\r\n");
      out.write("\t\t\t\talert(\"삭제할 게시글을 선택해주세요.\");\r\n");
      out.write("\t\t\t\treturn false;\r\n");
      out.write("\t\t\t}\r\n");
      out.write("\r\n");
      out.write("\t\t\tif(confirm(\"삭제하시겠습니까?\")){\r\n");
      out.write("// \t\t\t\tfnAjax(\"bbt00002D.action\",  {\"data\":$.paramData}, function(data, dataType){\r\n");
      out.write("// \t\t\t\t\tvar data = data.replace(/\\s/gi,'');\r\n");
      out.write("// \t\t\t\t\talert(data);\r\n");
      out.write("// \t\t\t\t\t$('#jqxgrid').jqxGrid('clearselection');\r\n");
      out.write("// \t\t\t\t\tfnSearch();\r\n");
      out.write("// \t\t\t\t},'POST','text');\r\n");
      out.write("\t\t\t\t//20190313 ryul 수정\r\n");
      out.write("\t\t\t\tfnAjax(\"csAdmCancel.action\",  {\"data\":$.paramData}, function(data, dataType){\r\n");
      out.write("\t\t\t\t\tvar data = data.replace(/\\s/gi,'');\r\n");
      out.write("\t\t\t\t\t$('#jqxgrid').jqxGrid('clearselection');\r\n");
      out.write("\t\t\t\t\tfnSearch();\r\n");
      out.write("\t\t\t\t},'POST','text');\r\n");
      out.write("\t\t\t}\r\n");
      out.write("\t\t});\r\n");
      out.write("\r\n");
      out.write("\t\t$(\"#registBtn,#modifyBtn\").fancybox({\r\n");
      out.write("\t\t\tmaxWidth\t: 1920,\r\n");
      out.write("\t\t\tmaxHeight\t: 1100,\r\n");
      out.write("\t\t\twidth\t\t: 1000,\r\n");
      out.write("\t\t\tautoSize\t: true,\r\n");
      out.write("\t\t\tbeforeClose : function(){\r\n");
      out.write("\t\t    \tfnSearch();\r\n");
      out.write("\t\t\t}\r\n");
      out.write("\t\t});\r\n");
      out.write("\r\n");
      out.write("\t}\r\n");
      out.write("\r\n");
      out.write("</script>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("\t<input name='chkAll' type='checkbox' style=\"display:none\"/>\r\n");
      out.write("\t<div class=\"pageContScroll_st2\">\r\n");
      out.write("\t\t<div class=\"top_box\">\r\n");
      out.write("\t\t\t<form id=\"workForm\" name=\"workForm\"  method=\"post\">\r\n");
      out.write("\t\t\t<input type=\"hidden\" id=\"boardSeq\" name=\"boardSeq\" />\r\n");
      out.write("\t\t\t<div class=\"table_type\">\r\n");
      out.write("\t\t\t\t<table>\r\n");
      out.write("\t\t\t\t\t<caption>등록일, 분류, 키워드검색으로 구성된 공지사항목록에 대한 검색 테이블입니다.</caption>\r\n");
      out.write("\t\t\t\t\t<colgroup>\r\n");
      out.write("\t\t\t\t\t\t<col style=\"width:135px;\" />\r\n");
      out.write("\t\t\t\t\t\t<col style=\"width:350px;\" />\r\n");
      out.write("\t\t\t\t\t\t<col style=\"width:135px;\" />\r\n");
      out.write("\t\t\t\t\t\t<col style=\"width:*\" />\r\n");
      out.write("\t\t\t\t\t</colgroup>\r\n");
      out.write("\t\t\t\t\t<tbody>\r\n");
      out.write("\t\t\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t\t\t<th scope=\"row\">등록일</th>\r\n");
      out.write("\t\t\t\t\t\t\t<td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<div id='txtFromDt' name=\"txtFromDt\" style='float:left;'></div>\r\n");
      out.write("\t\t\t\t\t\t\t\t<div style='float:left;line-height:28px;'>&nbsp;~&nbsp;</div>\r\n");
      out.write("\t\t\t\t\t\t\t\t<div id='txtToDt' name=\"txtToDt\"  style='float:left;'></div>\r\n");
      out.write("\t\t\t\t\t\t\t</td>\r\n");
      out.write("\t\t\t\t\t\t\t<th scope=\"row\">제품</th>\r\n");
      out.write("\t\t\t\t\t\t\t<td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<select id=\"modelItemCd\" name=\"modelItemCd\" style=\"width:100px;\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"\">제품전체</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"0\">비데</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"1\">위생도기</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"2\">수전</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"3\">비데블렌더</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"4\">이누스바스</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t</select>\r\n");
      out.write("\t\t\t\t\t\t\t</td>\r\n");
      out.write("\t\t\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t\t\t<th scope=\"row\">텍스트검색</th>\r\n");
      out.write("\t\t\t\t\t\t\t<td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<select id=\"searchType\" style=\"width:100px;\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"1\">성명</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"2\">휴대폰번호</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"3\">주소</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t</select>\r\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"text\" id=\"searchTxt\" class=\"marL10\" style=\"width:145px;\" />\r\n");
      out.write("\t\t\t\t\t\t\t</td>\r\n");
      out.write("\t\t\t\t\t\t\t<th scope=\"row\">진행상태</th>\r\n");
      out.write("\t\t\t\t\t\t\t<td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<select id=\"statBc\" name=\"statBc\" style=\"width:100px;\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"\" >전체</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"0\" selected=\"selected\">처리대기</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"AS204100\">접수</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"AS204200\">수리진행</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"AS204300\">수리완료</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"AS204400\">정산</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"AS204800\">상담처리</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"AS204900\">취소</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t</select>\r\n");
      out.write("\t\t\t\t\t\t\t</td>\r\n");
      out.write("\t\t\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t\t</tbody>\r\n");
      out.write("\t\t\t\t</table>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t</form>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<div class=\"btn_area marB35\" >\r\n");
      out.write("\t\t\t\t\t<div class=\"center\">\r\n");
      out.write("\t\t\t\t\t\t<a id=\"btn_Search\" class=\"btn_blue_line2\" href=\"javascript:\" >검색</a>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<div class=\"left\" style=\"line-height:40px;\">\r\n");
      out.write("\t\t\t\t\t\t<a class=\"btn_type2 btn_icon5\" id=\"btnExcel\" style=\"margin-left:0px;\"  href=\"javascript:;\" >엑셀다운로드</a>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<div class=\"right\" style=\"line-height:40px;\">\r\n");
      out.write("\t\t\t\t\t<!-- 20190313 ryul 담당자 취소에서 삭제로 변경 (기능적으로 삭제가 맞음) - 송규희 대리님과 협의 -->\r\n");
      out.write("<!-- \t\t\t\t\t\t<a class=\"delBtn btn_type2\" style=\"margin-left:0px;\" href=\"javascript:;\">담당자 취소</a> -->\r\n");
      out.write("\t\t\t\t\t\t<a class=\"delBtn btn_type2\" style=\"margin-left:0px;\" href=\"javascript:;\">삭제</a>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t<a id=\"modifyBtn\"  class=\"btn_type2\" data-fancybox-type=\"iframe\"  href=\"javascript:;\" style=\"display:none;\"></a>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("<!-- \t\t<div class=\"align_area\"> -->\r\n");
      out.write("<!-- \t\t\t<div class=\"left\"> -->\r\n");
      out.write("<!-- \t\t\t\t<a class=\"btn_type2 btn_icon5\" id=\"btnExcel\" style=\"margin-left:0px;\"  href=\"javascript:;\" >엑셀다운로드</a> -->\r\n");
      out.write("<!-- \t\t\t</div> -->\r\n");
      out.write("<!-- \t\t\t<div class=\"center\"> -->\r\n");
      out.write("<!-- \t\t\t\t<a class=\"btn_blue_line\" id=\"btn_Search\" href=\"#\">검색</a> -->\r\n");
      out.write("<!-- \t\t\t</div> -->\r\n");
      out.write("<!-- \t\t\t<div class=\"right\"> -->\r\n");
      out.write("<!-- \t\t\t\t<a id=\"registBtn\"  class=\"btn_type2\" data-fancybox-type=\"iframe\"  href=\"javascript:;\">등록</a> -->\r\n");
      out.write("<!-- \t\t\t\t<a id=\"modifyBtn\"  class=\"btn_type2\" data-fancybox-type=\"iframe\"  href=\"javascript:;\" style=\"display:none;\"></a> -->\r\n");
      out.write("<!-- \t\t\t\t<a class=\"delBtn btn_type2\" href=\"javascript:;\">삭제</a> -->\r\n");
      out.write("<!-- \t\t\t</div> -->\r\n");
      out.write("<!-- \t\t</div> -->\r\n");
      out.write("\r\n");
      out.write("\t\t<div class=\"grid_type1\">\r\n");
      out.write("\t\t\t<div id=\"jqxgrid\"></div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\r\n");
      out.write("\t</div>\r\n");
      out.write("\r\n");
      out.write("</body>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
