/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.62
 * Generated at: 2019-04-25 01:50:05 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.jsp.mobile.scm.inusBath;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class mItmShipGrdDtlR_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

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
      response.setContentType("text/html; charset=UTF-8");
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
      out.write("<style>\r\n");
      out.write(".dhx_loading_overlay{\r\n");
      out.write("\twidth:100%;\r\n");
      out.write("\theight:100%;\r\n");
      out.write("\tbackground-color:#D6D6D6;\r\n");
      out.write("\topacity:0.5;\r\n");
      out.write("\tbackground-image:url(/component/dxTouch/codebase/imgs/loading.png);\r\n");
      out.write("\tbackground-repeat:no-repeat;\r\n");
      out.write("\tbackground-position:center;\r\n");
      out.write("};\r\n");
      out.write(".dhx_form{\r\n");
      out.write("background: #FFFFFF;\r\n");
      out.write("};\r\n");
      out.write("</style>\r\n");
      out.write("<script type=\"text/javascript\">\r\n");
      out.write("var w = $(window).width(); \r\n");
      out.write("var h = $(window).height();\r\n");
      out.write("var h = h-425;\r\n");
      out.write("var date = dateformat(new Date());\r\n");
      out.write("var fullDate = new Date();\r\n");
      out.write("var hour = fullDate.getHours()+'';\r\n");
      out.write("var minute = fullDate.getMinutes();\r\n");
      out.write("if(minute <= 9){\r\n");
      out.write("\tminute = '0'+minute;\r\n");
      out.write("}\r\n");
      out.write("var form = { id: 'app', view: 'layout',\r\n");
      out.write("\t\trows: [\r\n");
      out.write("\t\t\t\t{ view: 'layout', type: 'wide',\r\n");
      out.write("\t\t\t\t\trows: [\r\n");
      out.write("\t\t\t\t\t\t{   type: \"clean\", height: 45,\r\n");
      out.write("\t\t\t\t\t        cols: [\r\n");
      out.write("\t\t\t\t\t          { view: \"button\", type: \"round\", label: \"돌아가기\", click: \"fn_back();\" }\r\n");
      out.write("\t\t\t\t\t\t    ]\r\n");
      out.write("\t\t\t\t\t    },\r\n");
      out.write("\t\t\t\t\t\t{ view: 'form', scroll: false, height : 380,\r\n");
      out.write("\t\t\t\t\t\t\telements: [\r\n");
      out.write("\t\t\t\t\t\t\t\t{ view: 'text', label: '구분'\t\t, id: 'saleGubunNm'\t, readonly:true},\r\n");
      out.write("\t\t\t\t\t\t\t\t{ view: \"text\", label: '시공단계'\t, id: \"endChkNm\"\t, readonly:true},\r\n");
      out.write("\t\t\t\t\t\t\t\t{ view: \"text\", label: '진행단계'  , id: \"saleLevelNm\"\t, readonly:true},\r\n");
      out.write("\t\t\t\t\t\t\t\t{ view: \"text\", label: '시공기간'\t, id: \"workDt\"\t, readonly:true},\r\n");
      out.write("// \t\t\t\t\t\t\t\t{ view: \"text\", label: '완료일자'\t, id: \"workTodt\"\t, readonly:true},\r\n");
      out.write("\t\t\t\t\t\t\t\t{ view: 'text', label: '고객명'\t, id: 'cusName'\t, readonly:true},\r\n");
      out.write("\t\t\t\t\t\t\t\t{ view: \"text\", label: '주소'\t\t, id: \"fldAddr\"\t, readonly:true},\r\n");
      out.write("\t\t\t\t\t\t\t\t{ view: \"text\", label: '시공비매입', id: \"buyAmt\"\t, readonly:true},\r\n");
      out.write("\t\t\t\t\t\t\t\t{ view: \"text\", label: '추가내용'\t, id: \"expBcText\"\t, readonly:true},\r\n");
      out.write("\t\t\t\t\t\t\t\t{ view: \"text\", label: '시공점의견'\t, id: \"siEndText\"\t, readonly:true},\r\n");
      out.write("\t\t\t\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t\t\t\t{ view: \"text\", label: '견적번호'\t, id: \"estNo\"\t, readonly:true},\r\n");
      out.write("\t\t\t\t\t\t\t\t{ view: \"text\", label: '구분코드'\t, id: \"saleGubun\"\t, readonly:true},\r\n");
      out.write("\t\t\t\t\t\t\t\t{ view: \"text\", label: '시작일자'\t, id: \"frDt\"\t, readonly:true},\r\n");
      out.write("\t\t\t\t\t\t\t\t{ view: \"text\", label: '종료일자'\t, id: \"toDt\"\t, readonly:true},\r\n");
      out.write("\t\t\t\t\t\t\t\t{ view: \"text\", label: '시공사'\t, id: \"custInfo\", readonly:true},\r\n");
      out.write("\t\t\t\t\t\t\t\t{ view: \"text\", label: '시공사'\t, id: \"custCd\"\t, readonly:true},\r\n");
      out.write("\t\t\t\t\t\t\t\t{ view: \"text\", label: '시공사'\t, id: \"custNm\"\t, readonly:true},\r\n");
      out.write("\t\t\t\t\t\t\t\t{ view: \"text\", label: '시공마감확인'\t, id: \"saleEndChk\"\t, readonly:true},\r\n");
      out.write("\t\t\t\t\t\t\t\t{ view: \"text\", label: '시공비마감'\t, id: \"endChk\"\t, readonly:true},\r\n");
      out.write("\t\t\t\t\t\t\t], id: 'frmMain'\r\n");
      out.write("\t\t\t\t\t\t},\r\n");
      out.write("\t\t\t\t\t\t{ view: 'grid', datatype: 'json', id:'gridMain', select: true, scroll: \"xy\", height : h,\r\n");
      out.write("\t\t\t\t\t\t\tfields: [\r\n");
      out.write("\t\t\t\t\t\t\t\t{ width: 80, label: '품목코드'\t, template: '#itmCd#', type: 'custom', align: 'left'},\r\n");
      out.write("\t\t\t\t\t\t\t\t{ width: 140, label: '품목명'\t, template: '#itmNm#' , type: 'custom', align: 'left'},\r\n");
      out.write("\t\t\t\t\t\t\t\t{ width: 80, label: '규격'\t, template: '#spec#' , type: 'custom', align: 'left'},\r\n");
      out.write("\t\t\t\t\t\t\t\t{ width: 40, label: '수량'\t, template: function(obj){\r\n");
      out.write("\t\t\t\t\t\t\t\t\tvar outQty = addComma(obj.outQty);\r\n");
      out.write("\t\t\t\t\t\t\t\t\treturn outQty;\r\n");
      out.write("\t\t\t\t\t\t\t\t}, type: 'custom', align: 'right'}\r\n");
      out.write("\t\t\t\t\t\t\t], header: true,\r\n");
      out.write("\t\t\t\t\t\t},\r\n");
      out.write("\t\t\t\t\t], id: 'itmShip'\r\n");
      out.write("\t\t\t\t}\r\n");
      out.write("\t\t\t]\r\n");
      out.write("\t\t}\r\n");
      out.write("\r\n");
      out.write("var loginView = {\r\n");
      out.write("    type: \"clean\",\r\n");
      out.write("    css: \"layout\",\r\n");
      out.write("    rows: [toolbar, {gravity: 1}, { type: \"clean\", cols: [{ width: 15 }, form, {width: 15}]}, {gravity: 2}]\r\n");
      out.write("};\r\n");
      out.write("\r\n");
      out.write("var search = \"\";\r\n");
      out.write("dhx.ready(function() {\r\n");
      out.write("\tdhx.ui.fullScreen();\r\n");
      out.write("    dhx.ui(form); \r\n");
      out.write("    \r\n");
      out.write("    search = window.location.search;\r\n");
      out.write("    if(search) {\r\n");
      out.write("    \tif(fn_setParam(search)) {\r\n");
      out.write("    \t\tfn_search();\r\n");
      out.write("    \t}\r\n");
      out.write("\t}\r\n");
      out.write("});\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("function fn_setParam(search) {\r\n");
      out.write("\tvar vb = true;\r\n");
      out.write("\tvar uri = decodeURI(search);\r\n");
      out.write("\t\r\n");
      out.write("\tif(uri != \"\" || uri != null || uri != undefined) {\r\n");
      out.write("\t\turi = uri.slice(1, uri.length);\r\n");
      out.write("\t\t\r\n");
      out.write("\t\tvar param = uri.split('?');\r\n");
      out.write("\t\t\r\n");
      out.write("\t\tfor(var i=0; i < param.length; i++) {\r\n");
      out.write("\t\t\tvar devide = param[i].split('=');\r\n");
      out.write("\t\t\t$$(devide[0]).setValue(devide[1]);\r\n");
      out.write("\t\t}\r\n");
      out.write("\t} else {\r\n");
      out.write("\t\tvb = false;\r\n");
      out.write("\t}\r\n");
      out.write("\t\r\n");
      out.write("\treturn vb;\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("function fn_back() {\r\n");
      out.write("\tlocation.assign(\"/mobile/scm/inusBath/mItmShipR.do\" + \"?frDt=\" + $$('frDt').getValue() + \"?toDt=\" + $$('toDt').getValue() +\"?custCd=\" + $$('custCd').getValue());\t\r\n");
      out.write("// \tlocation.assign(\"/mobile/scm/inusBath/mSigongFinishR.do\" + \"?frDt=\" + $$('frDt').getValue() + \"?toDt=\" + $$('toDt').getValue() + \"?custInfo=\" + $$('custInfo').getValue() + \"?custCd=\" + $$('custCd').getValue() + \"?custNm=\" + $$('custNm').getValue());\t\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("function fn_search(){\r\n");
      out.write("\tvar obj = {};\r\n");
      out.write("\tobj.frDt =  $$('frDt').getValue();\r\n");
      out.write("\tobj.toDt =  $$('toDt').getValue();\r\n");
      out.write("\tobj.custCd =  $$('custCd').getValue();\r\n");
      out.write("\tobj.estNo = $$('estNo').getValue();\r\n");
      out.write("\t\r\n");
      out.write("\tmobileAjax(\"/mobile/scm/inusBath/mItmShipR/list\",obj,function(data){\r\n");
      out.write("\t\tsearch = \"\";\r\n");
      out.write("\t\t$$('custNm').setValue(data[0].custNm);\r\n");
      out.write("\t\t$$('saleGubun').setValue(data[0].saleGubun);\r\n");
      out.write("\t\t$$('saleGubunNm').setValue(data[0].saleGubunNm);\r\n");
      out.write("\t\t$$('endChkNm').setValue(data[0].endChkNm);\r\n");
      out.write("\t\t$$('saleLevelNm').setValue(data[0].saleLevelNm);\r\n");
      out.write("\t\tvar workDt = data[0].workFrdt.toString().substring(0,11) + \" ~ \" + data[0].workTodt.toString().substring(0,11);\r\n");
      out.write("\t\t$$('workDt').setValue(workDt);\r\n");
      out.write("// \t\t$$('workFrdt').setValue(data[0].workFrdt.toString().substring(0,11));\r\n");
      out.write("// \t\t$$('workTodt').setValue(data[0].workTodt.toString().substring(0,11));\r\n");
      out.write("\t\t$$('cusName').setValue(data[0].cusName);\r\n");
      out.write("\t\t$$('fldAddr').setValue(data[0].fldAddr);\r\n");
      out.write("\t\t$$('buyAmt').setValue(addComma(data[0].buyAmt));\r\n");
      out.write("\t\t$$('expBcText').setValue(data[0].expBcText);\r\n");
      out.write("\t\t$$('siEndText').setValue(data[0].siEndText);\r\n");
      out.write("\t\t$$('saleEndChk').setValue(data[0].saleEndChk);\r\n");
      out.write("\t\t$$('endChk').setValue(data[0].endChk);\r\n");
      out.write("\r\n");
      out.write("\t\tfn_searchCB(data[0].estNo);\r\n");
      out.write("\t});\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("function fn_searchCB(estNo) {\r\n");
      out.write("\tvar gridMain = $$('gridMain');\r\n");
      out.write("\tdhx.extend(gridMain, dhx.OverlayBox);\r\n");
      out.write("\tgridMain.showOverlay();\r\n");
      out.write("\t\r\n");
      out.write("\tvar obj = {};\r\n");
      out.write("\tobj.estNo = estNo;\r\n");
      out.write("\t\r\n");
      out.write("\tif(estNo!=undefined) {\r\n");
      out.write("\t\tmobileAjax(\"/mobile/scm/inusBath/mItmShipGrdDtlR/list\",obj,function(data){\r\n");
      out.write("\t\t\tgridMain.clearAll();\r\n");
      out.write("\t\t\tgridMain.define('datatype', 'json');\r\n");
      out.write("\t\t\tgridMain.define('data', data);\r\n");
      out.write("\t\t\tgridMain.adjust();\r\n");
      out.write("\t\t\tgridMain.refresh();\r\n");
      out.write("\t\t\tgridMain.hideOverlay();\r\n");
      out.write("\t\t});\r\n");
      out.write("\t}\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("function addComma(num) {\r\n");
      out.write("  var regexp = /\\B(?=(\\d{3})+(?!\\d))/g;\r\n");
      out.write("  return num.toString().replace(regexp, ',');\r\n");
      out.write("}\r\n");
      out.write("</script>\r\n");
      out.write("<form id=\"pForm\" name=\"pForm\">\r\n");
      out.write("<input type=\"hidden\" id=\"gridId\" name=\"gridId\">\r\n");
      out.write("</form>");
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
