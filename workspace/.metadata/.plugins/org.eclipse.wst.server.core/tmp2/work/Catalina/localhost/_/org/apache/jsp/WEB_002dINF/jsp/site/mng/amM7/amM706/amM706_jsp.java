/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.62
 * Generated at: 2019-06-18 05:42:17 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.jsp.site.mng.amM7.amM706;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class amM706_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.HashMap<java.lang.String,java.lang.Long>(1);
    _jspx_dependants.put("/WEB-INF/tld/html.tld", Long.valueOf(1541752522000L));
  }

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fc_005fforEach_0026_005fvar_005fitems;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fc_005fif_0026_005ftest;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fc_005fforEach_0026_005fvar_005fitems = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fc_005fif_0026_005ftest = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fc_005fforEach_0026_005fvar_005fitems.release();
    _005fjspx_005ftagPool_005fc_005fif_0026_005ftest.release();
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
      out.write("<head>\r\n");
      out.write("\r\n");
      out.write("\t<!-- 설정관리 : 게시판 설정 -->\r\n");
      out.write("\r\n");
      out.write("<script type=\"text/javaScript\" defer=\"defer\">\r\n");
      out.write("\r\n");
      out.write("\tvar contUrl = \"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${rootUri}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${conUrl}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
      out.write("amM706\";\r\n");
      out.write("\t/*----------------------------------------------------------------------------------------------\r\n");
      out.write("\t * 화면 load시 실행 함수 (onload)\r\n");
      out.write("\t *----------------------------------------------------------------------------------------------*/\r\n");
      out.write("\tfunction init(){\r\n");
      out.write("\t\tfnSearchInit();\r\n");
      out.write("\t\tfnSearch();\r\n");
      out.write("\t\tfnEvent();\r\n");
      out.write("\t\t$(\".fancybox.bis\").fancybox({\r\n");
      out.write("\t\t\tmaxWidth\t: 950,\r\n");
      out.write("\t\t\tmaxHeight\t: 700,\r\n");
      out.write("\t\t\twidth\t\t: '100%',\r\n");
      out.write("\t\t\theight\t\t: '100%'\r\n");
      out.write("\t\t});\r\n");
      out.write("\t}\r\n");
      out.write("\r\n");
      out.write("\t/*----------------------------------------------------------------------------------------------\r\n");
      out.write("\t * Grid 초기값 셋팅 - 선택, 제품명, 판매가, 할인가, 쿠폰, 적립금, 재고, 판매상태, PC노출, 모바일노출, 과세, 등록일, 관리\r\n");
      out.write("\t *----------------------------------------------------------------------------------------------*/\r\n");
      out.write("\tvar _columns = [\r\n");
      out.write("\t\t { text: '프로그램명', datafield: 'boardMstNm', cellclassname: cellclass, width: '22%', cellsalign: 'left', align: 'center'}\r\n");
      out.write("\t\t,{ text: '프로그램유형', datafield: 'boardTpStyleNm', cellclassname: cellclass, width: '22%', cellsalign: 'center', align: 'center'}\r\n");
      out.write("\t\t,{ text: '프로그램종류', datafield: 'boardTpNm', cellclassname: cellclass, width: '22%', cellsalign: 'left', align: 'center'}\r\n");
      out.write("\t\t,{ text: '관리자메뉴명', datafield: 'admMenuNm', cellclassname: cellclass, width: '22%', cellsalign: 'center', align: 'center'}\r\n");
      out.write("\t\t,{ text: '상태', datafield: 'boardStatusYn', cellclassname: cellclass, width: '12%', cellsalign: 'center', align: 'center'}\r\n");
      out.write("// \t\t,{ text: '상품연계', datafield: 'boardProdYn', cellclassname: cellclass, width: '15%', cellsalign: 'center', align: 'center'}\r\n");
      out.write("\t\t,{ text: '게시판코드', datafield: 'boardMstCd', cellclassname: cellclass, cellsalign: 'right', align: 'center', hidden:true}];\r\n");
      out.write("\r\n");
      out.write("\tvar _datafields = [\r\n");
      out.write("\t\t { name: 'boardMstNm', type: 'string'}\r\n");
      out.write("\t\t,{ name: 'boardTpStyleNm', type: 'string'}\r\n");
      out.write("\t\t,{ name: 'boardTpNm', type: 'string'}\r\n");
      out.write("\t\t,{ name: 'admMenuNm', type: 'string'}\r\n");
      out.write("\t\t,{ name: 'boardStatusYn', type: 'string'}\r\n");
      out.write("// \t\t,{ name: 'boardProdYn', type: 'string'}\r\n");
      out.write("\t\t,{ name: 'boardMstCd', type: 'string'}\r\n");
      out.write("\t];\r\n");
      out.write("\r\n");
      out.write("\tfunction fnSearchInit(){\r\n");
      out.write("\t\tfnGridOption('jqxgrid',{\r\n");
      out.write("\t\t\theight:285\r\n");
      out.write("\t       ,columns: _columns\r\n");
      out.write("\t       ,selectionmode: 'singlerow'\r\n");
      out.write("\t    });\r\n");
      out.write("\t}\r\n");
      out.write("\r\n");
      out.write("\t/*----------------------------------------------------------------------------------------------\r\n");
      out.write("\t * grid search\r\n");
      out.write("\t *----------------------------------------------------------------------------------------------*/\r\n");
      out.write("\tfunction fnSearch(){\r\n");
      out.write("\t\tvar dataAdapter = new $.jqx.dataAdapter({\r\n");
      out.write("    \t\tdatatype: \"json\",\r\n");
      out.write("            datafields: _datafields,\r\n");
      out.write("            url: contUrl + \".action\",\r\n");
      out.write("            data: {boardStatusYn: $(\"#boardStatusYn\").val(),boardTpStyle: $(\"#boardTpStyle\").val(),admMenuCd: $(\"#admMenuCd\").val()}\r\n");
      out.write("\t\t});\r\n");
      out.write("\t\t$(\"#jqxgrid\").jqxGrid({source: dataAdapter});\r\n");
      out.write("\t\tfnResetGridEditData('jqxgrid');\r\n");
      out.write("\t\treturn false;\r\n");
      out.write("\t}\r\n");
      out.write("\t/*----------------------------------------------------------------------------------------------\r\n");
      out.write("\t * 이벤트 Setting\r\n");
      out.write("\t *----------------------------------------------------------------------------------------------*/\r\n");
      out.write("\tfunction fnEvent(){\r\n");
      out.write("\r\n");
      out.write("\t\t$(\"#jqxgrid\").on('rowdoubleclick', function (event)\r\n");
      out.write("\t\t{\r\n");
      out.write("\t\t\tvar rowindex = $('#jqxgrid').jqxGrid('getselectedrowindex');\r\n");
      out.write("\t\t\tvar datarow = $('#jqxgrid').jqxGrid('getrowdata', rowindex);\r\n");
      out.write("\t\t\tsetTimeout(function(){\r\n");
      out.write("\t\t\t$.fancybox.open({\r\n");
      out.write("\t\t\t\thref: \"amM706Pop.action?boardMstCd=\"+datarow.boardMstCd,\r\n");
      out.write("\t\t\t\ttype: \"iframe\",\r\n");
      out.write("\t\t\t\tmaxWidth\t: 950,\r\n");
      out.write("\t\t\t\tmaxHeight\t: 800,\r\n");
      out.write("\t\t\t\tmodal : false,\r\n");
      out.write("\t\t\t\tautoSize\t: true\r\n");
      out.write("\t\t\t});\r\n");
      out.write("\t\t\t},200);\r\n");
      out.write("\t\t});\r\n");
      out.write("\r\n");
      out.write("\t\t$(\".modifyBtn\").click(function(){\r\n");
      out.write("\t\t\tvar rowindex = $(\"#jqxgrid\").jqxGrid('getselectedrowindex');\r\n");
      out.write("\t\t\tif(rowindex==-1){\r\n");
      out.write("\t\t\t\talert(\"수정할 게시판을 선택해주세요.\");\r\n");
      out.write("\t\t\t\treturn false;\r\n");
      out.write("\t\t\t}\r\n");
      out.write("\t\t\tvar datarow = $(\"#jqxgrid\").jqxGrid('getrowdata', rowindex);\r\n");
      out.write("\t\t\t$.fancybox.open({\r\n");
      out.write("\t\t\t\thref: \"amM706Pop.action?boardMstCd=\"+datarow.boardMstCd,\r\n");
      out.write("\t\t\t\ttype: \"iframe\",\r\n");
      out.write("\t\t\t\tmaxWidth\t: 950,\r\n");
      out.write("\t\t\t\tmaxHeight\t: 700,\r\n");
      out.write("\t\t\t\twidth\t\t: '100%',\r\n");
      out.write("\t\t\t\theight\t\t: '100%',\r\n");
      out.write("\t\t\t\tmodal : false\r\n");
      out.write("\t\t\t});\r\n");
      out.write("\t\t});\r\n");
      out.write("\r\n");
      out.write("\t\t$(\".delBtn\").click(function(){\r\n");
      out.write("\t\t\tvar rowindex = $(\"#jqxgrid\").jqxGrid('getselectedrowindex');\r\n");
      out.write("\t\t\tvar datarow = $(\"#jqxgrid\").jqxGrid('getrowdata', rowindex);\r\n");
      out.write("\t\t\t$(\"#delCd\").val(datarow.boardMstCd);\r\n");
      out.write("\t\t\t$(\"#delForm\").submit();\r\n");
      out.write("\t\t\t$(\"#delCd\").val(\"\");\r\n");
      out.write("\t\t});\r\n");
      out.write("\r\n");
      out.write("\t\t//검색 이벤트\r\n");
      out.write("\t\t$(\"#boardStatusYn\").on('change', fnSearch);\r\n");
      out.write("\t\t$(\"#boardTpStyle\").on('change', fnSearch);\r\n");
      out.write("\t\t$(\"#admMenuCd\").on('change', fnSearch); \r\n");
      out.write("\r\n");
      out.write("\t\t \r\n");
      out.write("\t}\r\n");
      out.write("\r\n");
      out.write("</script>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("\t<div class=\"pageContScroll_st2\">\r\n");
      out.write("\t\t<div class=\"top_box\">\r\n");
      out.write("\t\t\t<div class=\"table_type\">\r\n");
      out.write("\t\t\t\t<form id=\"delForm\" name=\"delForm\" action=\"amM706D.action\" method=\"post\">\r\n");
      out.write("\t\t\t\t\t<input type=\"hidden\" id=\"delCd\" name=\"delCd\" />\r\n");
      out.write("\t\t\t\t</form>\r\n");
      out.write("\t\t\t\t<table>\r\n");
      out.write("\t\t\t\t\t<caption>신규발행여부로 구성된 마케팅관리 하위의 쿠폰관리에 대한 검색 테이블입니다.</caption>\r\n");
      out.write("\t\t\t\t\t<colgroup>\r\n");
      out.write("\t\t\t\t\t\t<col style=\"width: 15%;\" />\r\n");
      out.write("\t\t\t\t\t\t<col style=\"width: *;\" />\r\n");
      out.write("\t\t\t\t\t</colgroup>\r\n");
      out.write("\t\t\t\t\t<tbody>\r\n");
      out.write("\t\t\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t\t\t<th scope=\"row\">프로그램유형</th>\r\n");
      out.write("\t\t\t\t\t\t\t<td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<select id=\"boardTpStyle\" name=\"boardTpStyle\" style=\"width: 174px;\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"\">전체</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"bbs\">확장프로그램</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"uni\">단일프로그램</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t</select>\r\n");
      out.write("\t\t\t\t\t\t\t</td>\r\n");
      out.write("\t\t\t\t\t\t\t<th scope=\"row\">관리자메뉴명</th>\r\n");
      out.write("\t\t\t\t\t\t\t<td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<select id=\"admMenuCd\" name=\"admMenuCd\" style=\"width: 174px;\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"\">전체</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t");
      if (_jspx_meth_c_005fforEach_005f0(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<option value=\"N/A\">프론트전용</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t</select>\r\n");
      out.write("\t\t\t\t\t\t\t</td>\r\n");
      out.write("\t\t\t\t\t\t\t<th scope=\"row\">사용여부</th>\r\n");
      out.write("\t\t\t\t\t\t\t<td>\r\n");
      out.write("\t\t\t\t\t\t\t\t<select id=\"boardStatusYn\" name=\"boardStatusYn\" style=\"width: 174px;\">\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"\">전체</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"Y\" selected=\"selected\">사용중</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<option value=\"N\">정지</option>\r\n");
      out.write("\t\t\t\t\t\t\t\t</select>\r\n");
      out.write("\t\t\t\t\t\t\t</td>\r\n");
      out.write("\t\t\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t\t</tbody>\r\n");
      out.write("\t\t\t\t</table>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<!-- // table_type -->\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<div class=\"align_area\">\r\n");
      out.write("\t\t<div class=\"right\">\r\n");
      out.write("\t\t\t<a class=\"fancybox bis btn_type2\" data-fancybox-type=\"iframe\" href=\"amM706Pop.action\">등록</a>\r\n");
      out.write("\t\t\t<a class=\"modifyBtn btn_type2\" href=\"javascript:;\">수정</a>\r\n");
      out.write("\t\t\t<a class=\"delBtn btn_type2\" href=\"javascript:;\">정지</a>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
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

  private boolean _jspx_meth_c_005fforEach_005f0(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  c:forEach
    org.apache.taglibs.standard.tag.rt.core.ForEachTag _jspx_th_c_005fforEach_005f0 = (org.apache.taglibs.standard.tag.rt.core.ForEachTag) _005fjspx_005ftagPool_005fc_005fforEach_0026_005fvar_005fitems.get(org.apache.taglibs.standard.tag.rt.core.ForEachTag.class);
    _jspx_th_c_005fforEach_005f0.setPageContext(_jspx_page_context);
    _jspx_th_c_005fforEach_005f0.setParent(null);
    // /WEB-INF/jsp/site/mng/amM7/amM706/amM706.jsp(157,9) name = items type = java.lang.Object reqTime = true required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_c_005fforEach_005f0.setItems((java.lang.Object) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${admMenuList}", java.lang.Object.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
    // /WEB-INF/jsp/site/mng/amM7/amM706/amM706.jsp(157,9) name = var type = java.lang.String reqTime = false required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_c_005fforEach_005f0.setVar("admMenu");
    int[] _jspx_push_body_count_c_005fforEach_005f0 = new int[] { 0 };
    try {
      int _jspx_eval_c_005fforEach_005f0 = _jspx_th_c_005fforEach_005f0.doStartTag();
      if (_jspx_eval_c_005fforEach_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
        do {
          out.write("\r\n");
          out.write("\t\t\t\t\t\t\t\t\t<option value=\"");
          out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${admMenu.admMenuCd}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
          out.write('"');
          out.write(' ');
          if (_jspx_meth_c_005fif_005f0(_jspx_th_c_005fforEach_005f0, _jspx_page_context, _jspx_push_body_count_c_005fforEach_005f0))
            return true;
          out.write(' ');
          out.write('>');
          out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${admMenu.admMenuNm}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
          out.write("</option>\r\n");
          out.write("\t\t\t\t\t\t\t\t\t");
          int evalDoAfterBody = _jspx_th_c_005fforEach_005f0.doAfterBody();
          if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
            break;
        } while (true);
      }
      if (_jspx_th_c_005fforEach_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        return true;
      }
    } catch (java.lang.Throwable _jspx_exception) {
      while (_jspx_push_body_count_c_005fforEach_005f0[0]-- > 0)
        out = _jspx_page_context.popBody();
      _jspx_th_c_005fforEach_005f0.doCatch(_jspx_exception);
    } finally {
      _jspx_th_c_005fforEach_005f0.doFinally();
      _005fjspx_005ftagPool_005fc_005fforEach_0026_005fvar_005fitems.reuse(_jspx_th_c_005fforEach_005f0);
    }
    return false;
  }

  private boolean _jspx_meth_c_005fif_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_c_005fforEach_005f0, javax.servlet.jsp.PageContext _jspx_page_context, int[] _jspx_push_body_count_c_005fforEach_005f0)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  c:if
    org.apache.taglibs.standard.tag.rt.core.IfTag _jspx_th_c_005fif_005f0 = (org.apache.taglibs.standard.tag.rt.core.IfTag) _005fjspx_005ftagPool_005fc_005fif_0026_005ftest.get(org.apache.taglibs.standard.tag.rt.core.IfTag.class);
    _jspx_th_c_005fif_005f0.setPageContext(_jspx_page_context);
    _jspx_th_c_005fif_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_c_005fforEach_005f0);
    // /WEB-INF/jsp/site/mng/amM7/amM706/amM706.jsp(158,46) name = test type = boolean reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_c_005fif_005f0.setTest(((java.lang.Boolean) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${admMenu.admMenuCd eq boardDetail.admMenuCd}", java.lang.Boolean.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false)).booleanValue());
    int _jspx_eval_c_005fif_005f0 = _jspx_th_c_005fif_005f0.doStartTag();
    if (_jspx_eval_c_005fif_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      do {
        out.write("selected");
        int evalDoAfterBody = _jspx_th_c_005fif_005f0.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
    }
    if (_jspx_th_c_005fif_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fc_005fif_0026_005ftest.reuse(_jspx_th_c_005fif_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fc_005fif_0026_005ftest.reuse(_jspx_th_c_005fif_005f0);
    return false;
  }
}
