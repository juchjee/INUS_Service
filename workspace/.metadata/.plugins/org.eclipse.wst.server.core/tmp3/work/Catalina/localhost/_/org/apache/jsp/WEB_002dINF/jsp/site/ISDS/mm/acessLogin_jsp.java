/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.62
 * Generated at: 2019-01-27 23:36:51 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.jsp.site.ISDS.mm;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class acessLogin_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      response.setContentType("text/html;charset=UTF-8");
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
      out.write("<head>\r\n");
      out.write("\t<style type=\"text/css\">\r\n");
      out.write("\t\t.access .input_box > input[type=\"button\"] {width:29%;}\r\n");
      out.write("\t\t.btn02Type, .btn03Type{height:100%}\r\n");
      out.write("\t</style>\r\n");
      out.write("\t<script type=\"text/javascript\" defer=\"defer\">\r\n");
      out.write("\t<!--\r\n");
      out.write("\t\tfunction init(){\r\n");
      out.write("\t\t\tfnEvent();\r\n");
      out.write("\t\t}\r\n");
      out.write("\r\n");
      out.write("\t\tfunction fnEvent(){\r\n");
      out.write("\t\t\t$.agencyLogin = function(drvNo,custCd){\r\n");
      out.write("\t\t\t\t$(\"#drvNo\").val(drvNo);\r\n");
      out.write("\t\t\t\t$(\"#custCd\").val(custCd);\r\n");
      out.write("\t\t\t\t$(\"#workForm\").submit();\r\n");
      out.write("\t\t\t}\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t\t\t$(\"div.jqTransformSelectWrapper ul li a\").click(function(){\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t\t\t      var value = $(this).parent().index();\r\n");
      out.write("\t\t\t      $(\"[name=custCdList]\").attr('selectedIndex', value);\r\n");
      out.write("\t\t\t\tif($(\"[name=custCdList]\").val() != \"\"){\r\n");
      out.write("\t\t\t      fnAjax(\"/ISDS/mm/ASZ130Ajax.action\", {\"custCd\":$(\"[name=custCdList]\").val()},\r\n");
      out.write("\t\t\t\t\t\t\tfunction(data, dataType){\r\n");
      out.write("\t\t    \t\t\t    \t$(\"#custTit\").text($(\"[name=custCdList] option:selected\").text());\r\n");
      out.write("\t\t\t    \t  \t\t\t$(\"#asz130body\").html(\"\");\r\n");
      out.write("\t\t\t\t\t\t\t\tfor (key in data) {\r\n");
      out.write("\t\t\t\t\t\t\t\t\t$(\"#asz130body\").append(\"<tr><td>\"+data[key].drvNo+\"</td><td>\"+data[key].drvNm+\"</td><td><a href='javascript:;' class='btn blue' onclick=\\\"$.agencyLogin('\"+data[key].drvNo+\"','\"+data[key].custCd+\"');\\\">선택</a></td></tr>\");\r\n");
      out.write("\t\t\t\t\t\t\t\t}\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t\t\t},\"POST\"\r\n");
      out.write("\t\t\t\t\t);\r\n");
      out.write("\t\t\t\t}else{\r\n");
      out.write("\t\t\t\t\t$(\"#custTit\").text(\"\");\r\n");
      out.write("\t\t\t\t\t$(\"#asz130body\").html(\"\");\r\n");
      out.write("\t\t\t\t}\r\n");
      out.write("\t\t\t      return false;\r\n");
      out.write("\t\t\t   });\r\n");
      out.write("\r\n");
      out.write("\t\t\t $(\".layerBtn\").bind(\"click\",function(){\r\n");
      out.write("\t\t\t\t\t//fnSubmit(\"workForm\",\"예약신청\");\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\tif(fnValidation()){\r\n");
      out.write("\t\t\t\t\t\t fnAjax(\"/ISDS/mm/agencyLoginChk.action\", {\"asId\":$(\"[name=asId]\").val(),\"asPw\":$(\"[name=asPw]\").val()},\r\n");
      out.write("\t\t\t\t\t\t\t\t\tfunction(data, dataType){\r\n");
      out.write("\t\t\t\t\t\t\t \t\t\tif(data.loginFlag == 'Y'){\r\n");
      out.write("\t\t\t\t\t    \t\t\t    \t$(\"#custTit\").text(data.custNm);\r\n");
      out.write("\t\t\t\t\t\t    \t  \t\t\t$(\"#asz130body\").html(\"\");\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t\t    \t  \t\t\tvar agencyList = JSON.parse(data.agencyList);\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\tfor (key in agencyList) {\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t$(\"#asz130body\").append(\"<tr><td>\"+agencyList[key].drvNo+\"</td><td>\"+agencyList[key].drvNm+\"</td><td><a href='javascript:;' class='btn blue' onclick=\\\"$.agencyLogin('\"+agencyList[key].drvNo+\"','\"+agencyList[key].custCd+\"');\\\">선택</a></td></tr>\");\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t}\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\tlayerPopUp('layer1'); return false;\r\n");
      out.write("\t\t\t\t\t\t\t \t\t\t}else if(data.loginFlag == 'N'){\r\n");
      out.write("\t\t\t\t\t\t\t \t\t\t\talert(\"아이디 또는 비밀번호가 잘못되었습니다.\");\r\n");
      out.write("\t\t\t\t\t\t\t \t\t\t\treturn;\r\n");
      out.write("\t\t\t\t\t\t\t \t\t\t}else{\r\n");
      out.write("\t\t\t\t\t\t\t \t\t\t\treturn;\r\n");
      out.write("\t\t\t\t\t\t\t \t\t\t}\r\n");
      out.write("\t\t\t\t\t\t\t\t\t},\"POST\"\r\n");
      out.write("\t\t\t\t\t\t\t);\r\n");
      out.write("\t\t\t\t\t}\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t});\r\n");
      out.write("\r\n");
      out.write("\t\t}\r\n");
      out.write("\t\t\r\n");
      out.write("\t\tfunction keydown(seq) {\r\n");
      out.write("\t\t\tvar keycode = '';\r\n");
      out.write("\t\t\tif(window.event) keycode = window.event.keyCode;\r\n");
      out.write("\t\t\tif(keycode == 13){\r\n");
      out.write("\t\t\t\tif(seq == 1){\r\n");
      out.write("\t\t\t\t\t//$('#workForm').submit();\r\n");
      out.write("\t\t\t\t\tif(fnValidation()){\r\n");
      out.write("\t\t\t\t\t\t fnAjax(\"/ISDS/mm/agencyLoginChk.action\", {\"asId\":$(\"[name=asId]\").val(),\"asPw\":$(\"[name=asPw]\").val()},\r\n");
      out.write("\t\t\t\t\t\t\t\t\tfunction(data, dataType){\r\n");
      out.write("\t\t\t\t\t\t\t \t\t\tif(data.loginFlag == 'Y'){\r\n");
      out.write("\t\t\t\t\t    \t\t\t    \t$(\"#custTit\").text(data.custNm);\r\n");
      out.write("\t\t\t\t\t\t    \t  \t\t\t$(\"#asz130body\").html(\"\");\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t\t    \t  \t\t\tvar agencyList = JSON.parse(data.agencyList);\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\tfor (key in agencyList) {\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t$(\"#asz130body\").append(\"<tr><td>\"+agencyList[key].drvNo+\"</td><td>\"+agencyList[key].drvNm+\"</td><td><a href='javascript:;' class='btn blue' onclick=\\\"$.agencyLogin('\"+agencyList[key].drvNo+\"','\"+agencyList[key].custCd+\"');\\\">선택</a></td></tr>\");\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t}\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\tlayerPopUp('layer1'); return false;\r\n");
      out.write("\t\t\t\t\t\t\t \t\t\t}else if(data.loginFlag == 'N'){\r\n");
      out.write("\t\t\t\t\t\t\t \t\t\t\talert(\"아이디 또는 비밀번호가 잘못되었습니다.\");\r\n");
      out.write("\t\t\t\t\t\t\t \t\t\t\treturn;\r\n");
      out.write("\t\t\t\t\t\t\t \t\t\t}else{\r\n");
      out.write("\t\t\t\t\t\t\t \t\t\t\treturn;\r\n");
      out.write("\t\t\t\t\t\t\t \t\t\t}\r\n");
      out.write("\t\t\t\t\t\t\t\t\t},\"POST\"\r\n");
      out.write("\t\t\t\t\t\t\t);\r\n");
      out.write("\t\t\t\t\t}\r\n");
      out.write("\t\t\t\t}\r\n");
      out.write("\t\t\t}\r\n");
      out.write("\t\t\treturn false;\r\n");
      out.write("\t\t}\r\n");
      out.write("\r\n");
      out.write("\t//-->\r\n");
      out.write("</script>\r\n");
      out.write("\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("\t<section class=\"sub cont\">\r\n");
      out.write("\t\t<div class=\"tit_bx\">\r\n");
      out.write("\t\t\t<a href=\"javascript:\" onclick=\"location.href=document.referrer;\" class=\"btn_prev\">이전 화면</a>\r\n");
      out.write("\t\t\t<h2>로그인</h2>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<!--// tit_bx -->\r\n");
      out.write("\t\t<div class=\"intro\">\r\n");
      out.write("\t\t\t<div class=\"logo\">\r\n");
      out.write("\t\t\t\t<strong><span class=\"blind\">inus</span>서비스센터</strong>\r\n");
      out.write("\t\t\t\t<p>대리점/기사용</p>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div class=\"login_bx\">\r\n");
      out.write("\t\t\t\t<dl class=\"usr_id\">\r\n");
      out.write("\t\t\t\t\t<dt><label for=\"userID\">이름</label></dt>\r\n");
      out.write("\t\t\t\t\t<dd><input type=\"text\" name=\"asId\" placeholder=\"아이디\" class=\"usrID validation[required]\" id=\"userID\" onkeydown=\"keydown(1);\"/></dd>\r\n");
      out.write("\t\t\t\t</dl>\r\n");
      out.write("<!-- \t\t\t\t// user ID -->\r\n");
      out.write("\t\t\t\t<dl class=\"usr_pw mt15\">\r\n");
      out.write("\t\t\t\t\t<dt><label for=\"userPW\">비밀번호</label></dt>\r\n");
      out.write("\t\t\t\t\t<dd><input type=\"password\" name=\"asPw\" placeholder=\"비밀번호\" class=\"usrPW validation[required]\" id=\"userPW\" onkeydown=\"keydown(1);\"/></dd>\r\n");
      out.write("\t\t\t\t</dl>\r\n");
      out.write("<!-- \t\t\t\t// user PW -->\r\n");
      out.write("\t\t\t\t<div class=\"mt15\">\r\n");
      out.write("\t\t\t\t\t<a href=\"javascript:;\" class=\"btn_login layerBtn\">로그인</a>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<!--// intro -->\r\n");
      out.write("\t</section>\r\n");
      out.write("\t<!--// sub -->\r\n");
      out.write("\t<!-- <a href=\"callto:01234567890\" class=\"callBt\">상담전화연결</a> -->\r\n");
      out.write("\t<div class=\"layer\">\r\n");
      out.write("\t\t<div class=\"bg\"></div>\r\n");
      out.write("\t\t<div id=\"layer1\" class=\"pop-layer\">\r\n");
      out.write("\t\t\t<div class=\"pop-container\">\r\n");
      out.write("\t\t\t\t<div class=\"pop-conts\">\r\n");
      out.write("\t\t\t\t\t<div class=\"layer_top\">\r\n");
      out.write("\t\t\t\t\t\t<h1>기사리스트</h1>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<div class=\"layer_body\">\r\n");
      out.write("\t\t\t\t\t\t<h2 id=\"custTit\" class=\"tit\"></h2>\r\n");
      out.write("\t\t\t\t\t\t<div class=\"layer_tblType01 mt10\">\r\n");
      out.write("\t\t\t\t\t\t\t<form id=\"workForm\" name=\"workForm\" action=\"agencyLogin.action\" method=\"post\">\r\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"drvNo\" id=\"drvNo\" />\r\n");
      out.write("\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"custCd\" id=\"custCd\" />\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t\t\t\t<table>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<caption></caption>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<thead>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<th scope=\"col\">A/S<br>기사코드</th>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<th scope=\"col\">A/S<br>기사명</th>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t<th scope=\"col\">선택</th>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</thead>\r\n");
      out.write("\t\t\t\t\t\t\t\t\t<tbody id=\"asz130body\">\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t\t\t\t\t</tbody>\r\n");
      out.write("\t\t\t\t\t\t\t\t</table>\r\n");
      out.write("\t\t\t\t\t\t\t</form>\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<a href=\"javascript:;\" class=\"close_btn\">Close</a>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<!--// pop_conts -->\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<!--// pop-layer -->\r\n");
      out.write("\t</div>\r\n");
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
