/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.62
 * Generated at: 2019-03-26 07:24:20 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.jsp.mobile.scm.orderDelivery;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;

public final class mSalesShipDtlR_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write(".dhx_table {\r\n");
      out.write("\twidth: 100%;\r\n");
      out.write("\theight : 100%; \r\n");
      out.write("\ttext-align: left; \r\n");
      out.write("\tpadding: 10px 10px 10px 10px;\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write(".dhx_div {\r\n");
      out.write("\twidth: 100%;\r\n");
      out.write("\theight : 45px; \r\n");
      out.write("\ttext-align: center; \r\n");
      out.write("\tpadding: 10px 10px 10px 10px;\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write(".dhx_btn {\r\n");
      out.write("\twidth: 100%;\r\n");
      out.write("\theight : 100%; \r\n");
      out.write("\ttext-align: center; \r\n");
      out.write("/* \tpadding: 10px 10px 10px 10px; */\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write(".dhx_title {\r\n");
      out.write("\twidth: 100%;\r\n");
      out.write("\theight : 35px; \r\n");
      out.write("\ttext-align: left; \r\n");
      out.write("\tpadding: 0px 0 0 20px;\r\n");
      out.write("\tbackground-color: #c2dae2;\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write(".dhx_left_lbl {\r\n");
      out.write("\twidth : 100px;\r\n");
      out.write("\theight : 35px;\r\n");
      out.write("\tfont-size : 0.8em;\r\n");
      out.write("\tpadding: 5px 0 0 20px;\r\n");
      out.write("\tborder: 0px solid #d3d3d3;\r\n");
      out.write("\tfont-weight\t: bold;\r\n");
      out.write("\tbackground-color\t: #f2f2f2;\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write(".dhx_right_lbl {\r\n");
      out.write("\twidth : 200px;\r\n");
      out.write("\theight : 35px;\r\n");
      out.write("\tfont-size : 0.8em;\r\n");
      out.write("\tpadding: 0 5px 0 10px;\r\n");
      out.write("\tborder: 0px solid #d3d3d3;\r\n");
      out.write("\tfont-weight\t: bold;\r\n");
      out.write("\tbackground-color\t: #f2f2f2;\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("</style>\r\n");
      out.write("<script type=\"text/javascript\">\r\n");
      out.write("var w = $(window).width(); \r\n");
      out.write("var lw = parseInt(w*0.3);\r\n");
      out.write("var rw = parseInt(w*0.7);\r\n");
      out.write("var h = $(window).height();\r\n");
      out.write("var twidth = w-20;\r\n");
      out.write("\r\n");
      out.write("//부모창 파라미터 받아오기 [stdDt, itmCd]\r\n");
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
      out.write("\t\t\t$('#' + devide[0]).val(devide[1]);\t//val = data 형식\r\n");
      out.write("\t\t}\r\n");
      out.write("\t} else {\r\n");
      out.write("\t\tvb = false;\r\n");
      out.write("\t}\r\n");
      out.write("\t\r\n");
      out.write("\treturn vb;\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("//준비\r\n");
      out.write("dhx.ready(function() {\r\n");
      out.write("\tdhx.ui.fullScreen();\r\n");
      out.write("\t$('dhx_btn').css('width', twidth + 'px');\r\n");
      out.write("\t$('dhx_left_lbl').css('width', lw + 'px');\r\n");
      out.write("\t$('dhx_right_lbl').css('width', rw + 'px');\r\n");
      out.write("\t\r\n");
      out.write("\tif(fn_setParam(window.location.search)) {\r\n");
      out.write("\t    fn_search();\t//자동조회\r\n");
      out.write("\t}\r\n");
      out.write("});\r\n");
      out.write("\r\n");
      out.write("function fn_back() {\r\n");
      out.write("\tvar deptCd = $(\"#deptCd\").val();\r\n");
      out.write("\tvar empNo = $(\"#empNo\").val();\r\n");
      out.write("\tvar facCd = $(\"#facCd\").val();\r\n");
      out.write("\tvar outDt = searchDate($('#outDt').val());\r\n");
      out.write("\r\n");
      out.write("\tdebugger;\r\n");
      out.write("\tdeptCd = deptCd == \"undefined\" ? \"\" : deptCd;\r\n");
      out.write("\tempNo = empNo == \"undefined\" ? \"\" : empNo;\r\n");
      out.write("\tfacCd = facCd == \"undefined\" ? \"\" : facCd;\r\n");
      out.write("\toutDt = outDt == \"undefined\" ? \"\" : outDt;\r\n");
      out.write("\t\r\n");
      out.write("\tvar urlInfo = $('#urlInfo').val();\r\n");
      out.write("\tlocation.assign(\"/mobile/scm/orderDelivery/mSalesShipR.do\" + \"?deptCd=\" + deptCd + \"?empNo=\" + empNo + \"?facCd=\" + facCd + \"?outDt=\" + outDt);\t\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("function fn_search(){\r\n");
      out.write("\tvar obj = {};\r\n");
      out.write("\tobj.outNo = $('#outNo').val();\r\n");
      out.write("\tobj.outSq = $('#outSq').val();\r\n");
      out.write("\t\r\n");
      out.write("\tmobileAjax(\"/mobile/scm/orderDelivery/mSalesShipDtlR/list\",obj,function(data){\r\n");
      out.write("\t\tvar d = data[0];\r\n");
      out.write("\t\t//출고일자, 출고사업장, 출고사원, 현장명, 납품장소, 품목코드, 품목명, 수량, 금액, 차량번호, 운전자, 핸드폰\r\n");
      out.write("\t\t$(\"#outDtR\").text(d.outDt);\r\n");
      out.write("\t\t$(\"#facNm\").text(d.facNm);\r\n");
      out.write("\t\t$(\"#empNm\").text(d.empNm);\r\n");
      out.write("\t\t$(\"#fldNm\").text(d.fldNm);\r\n");
      out.write("\t\t$(\"#dlvYard\").text(d.dlvYard);\r\n");
      out.write("\t\t$(\"#outDt\").text(d.outDt);\r\n");
      out.write("\t\t$(\"#itmCd\").text(d.itmCd);\r\n");
      out.write("\t\t$(\"#itmNm\").text(d.itmNm);\r\n");
      out.write("\t\t$(\"#outQty\").text(addComma(d.outQty)); \r\n");
      out.write("\t\t$(\"#outAmt\").text(addComma(d.outAmt));\r\n");
      out.write("\t\t$(\"#carNo\").text(d.carNo);\r\n");
      out.write("\t\t$(\"#drvNm\").text(d.drvNm);\r\n");
      out.write("\t\t$(\"#mobile\").text(d.mobile);\r\n");
      out.write("\t});\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("function addComma(num) {\r\n");
      out.write("  var regexp = /\\B(?=(\\d{3})+(?!\\d))/g;\r\n");
      out.write("   return parseInt(num).toString().replace(regexp,',');\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("//뒤로가기 버튼 이벤트\r\n");
      out.write("window.onpageshow = function(event) {\r\n");
      out.write("\tif(event.persisted) {\r\n");
      out.write("\t\tthis.fn_back();\r\n");
      out.write("\t}\r\n");
      out.write("}\r\n");
      out.write("</script>\r\n");
      out.write("\r\n");
      out.write("<!-- overflow : auto > 브라우저가 결정하게 함 -->\r\n");
      out.write("<div style=\"width:100%; height:100%; overflow:auto;\">\r\n");
      out.write("<form id=\"pForm\" name=\"pForm\">\r\n");
      out.write("<input type=\"hidden\" id=\"outNo\" name=\"outNo\" value=\"\">\r\n");
      out.write("<input type=\"hidden\" id=\"outSq\" name=\"outSq\" value=\"\">\r\n");
      out.write("<input type=\"hidden\" id=\"deptCd\" name=\"deptCd\" value=\"\">\r\n");
      out.write("<input type=\"hidden\" id=\"empNo\" name=\"empNo\" value=\"\">\r\n");
      out.write("<input type=\"hidden\" id=\"facCd\" name=\"facCd\" value=\"\">\r\n");
      out.write("<input type=\"hidden\" id=\"outDt\" name=\"outDt\" value=\"\">\r\n");
      out.write("</form>\r\n");
      out.write("\r\n");
      out.write("<div class=\"dhx_view dhx_el_roundbutton\" id=\"button1\" style=\"width:100%; overflow-y:auto;\">\r\n");
      out.write("\t<table class=\"dhx_table\">\r\n");
      out.write("\t\t<tbody>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td class=\"dhx_btn\">\r\n");
      out.write("\t\t\t\t\t<input type=\"button\" style=\"width:100%; margin:0px;\" value=\"돌아가기\" onclick=\"fn_back()\">\r\n");
      out.write("\t\t\t\t</td>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t</tbody>\r\n");
      out.write("\t</table>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<div id=\"detail\">\r\n");
      out.write("<table class=\"dhx_table\">\r\n");
      out.write("\t<tbody>\r\n");
      out.write("\t\t<tr>\r\n");
      out.write("\t\t\t<th colspan='2' class=\"dhx_title\">출하 상세내역</th>\r\n");
      out.write("\t\t</tr>\r\n");
      out.write("\t\t<!-- 현장명, 출고일자, 품목코드, 품목명, 수량, 금액, 차량번호, 운전자, 핸드폰 -->\r\n");
      out.write("\t\t<tr>\r\n");
      out.write("\t\t\t<td class=\"dhx_left_lbl\">출고일자</td>\r\n");
      out.write("\t\t\t<td class=\"dhx_right_lbl\"><span id=\"outDtR\"></span></td>\r\n");
      out.write("\t\t</tr>\r\n");
      out.write("\t\t<tr>\r\n");
      out.write("\t\t\t<td class=\"dhx_left_lbl\">출고사업장</td>\r\n");
      out.write("\t\t\t<td class=\"dhx_right_lbl\"><span id=\"facNm\"></span></td>\r\n");
      out.write("\t\t</tr>\r\n");
      out.write("\t\t<tr>\r\n");
      out.write("\t\t\t<td class=\"dhx_left_lbl\">담당자</td>\r\n");
      out.write("\t\t\t<td class=\"dhx_right_lbl\"><span id=\"empNm\"></span></td>\r\n");
      out.write("\t\t</tr>\r\n");
      out.write("\t\t<tr>\r\n");
      out.write("\t\t\t<td class=\"dhx_left_lbl\">현장명</td>\r\n");
      out.write("\t\t\t<td class=\"dhx_right_lbl\"><span id=\"fldNm\"></span></td>\r\n");
      out.write("\t\t</tr>\r\n");
      out.write("\t\t<tr>\r\n");
      out.write("\t\t\t<td class=\"dhx_left_lbl\">납품장소</td>\r\n");
      out.write("\t\t\t<td class=\"dhx_right_lbl\"><span id=\"dlvYard\"></span></td>\r\n");
      out.write("\t\t</tr>\r\n");
      out.write("\t\t<tr>\r\n");
      out.write("\t\t\t<td class=\"dhx_left_lbl\">품목코드</td>\r\n");
      out.write("\t\t\t<td class=\"dhx_right_lbl\"><span id=\"itmCd\"></span></td>\r\n");
      out.write("\t\t</tr>\r\n");
      out.write("\t\t<tr>\r\n");
      out.write("\t\t\t<td class=\"dhx_left_lbl\">품목명</td>\r\n");
      out.write("\t\t\t<td class=\"dhx_right_lbl\"><span id=\"itmNm\"></span></td>\r\n");
      out.write("\t\t</tr>\r\n");
      out.write("\t\t<tr>\r\n");
      out.write("\t\t\t<td class=\"dhx_left_lbl\">수량</td>\r\n");
      out.write("\t\t\t<td class=\"dhx_right_lbl\"><span id=\"outQty\"></span></td>\r\n");
      out.write("\t\t</tr>\r\n");
      out.write("\t\t<tr>\r\n");
      out.write("\t\t\t<td class=\"dhx_left_lbl\">금액</td>\r\n");
      out.write("\t\t\t<td class=\"dhx_right_lbl\"><span id=\"outAmt\"></span></td>\r\n");
      out.write("\t\t</tr>\r\n");
      out.write("\t\t<tr>\r\n");
      out.write("\t\t\t<td class=\"dhx_left_lbl\">차량번호</td>\r\n");
      out.write("\t\t\t<td class=\"dhx_right_lbl\"><span id=\"carNo\"></span></td>\r\n");
      out.write("\t\t</tr>\r\n");
      out.write("\t\t<tr>\r\n");
      out.write("\t\t\t<td class=\"dhx_left_lbl\">운전자</td>\r\n");
      out.write("\t\t\t<td class=\"dhx_right_lbl\"><span id=\"drvNm\"></span></td>\r\n");
      out.write("\t\t</tr>\r\n");
      out.write("\t\t<tr>\r\n");
      out.write("\t\t\t<td class=\"dhx_left_lbl\">핸드폰</td>\r\n");
      out.write("\t\t\t<td class=\"dhx_right_lbl\"><span id=\"mobile\"></span></td>\r\n");
      out.write("\t\t</tr>\r\n");
      out.write("\t</tbody>\r\n");
      out.write("</table>\r\n");
      out.write("</div>\r\n");
      out.write("</div>\r\n");
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
