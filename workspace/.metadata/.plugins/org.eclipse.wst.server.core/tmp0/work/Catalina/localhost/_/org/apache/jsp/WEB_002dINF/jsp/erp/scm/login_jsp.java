/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.62
 * Generated at: 2018-11-23 05:08:34 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.jsp.erp.scm;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class login_jsp extends org.apache.jasper.runtime.HttpJspBase
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

      out.write("\n");
      out.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n");
      out.write("<html>\n");
      out.write("<head>\n");
      out.write("<title>로그인</title>\n");
      out.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n");
      out.write("</head>\n");
      out.write("<body style=\"background-color: white;\">\n");
      out.write("<style>\n");
      out.write("html {height: 800px; background-color:#FFFFFF;}\n");
      out.write("body {height: 800px; background-color:#FFFFFF;}\n");
      out.write(".login_logo { \n");
      out.write("     border : 5px; border-color : black;\n");
      out.write("\t width:800px; left:0; right:0;  margin-left:auto; margin-right:auto; \n");
      out.write("\theight:60px;  top: 0; bottom:0; margin-top:140px; margin-bottom:auto;\n");
      out.write("}\n");
      out.write(".login_main { \n");
      out.write("\t width:800px; left:0; right:0; margin-left:auto; margin-right:auto; \n");
      out.write("\theight:330px; top: 0; bottom:0; margin-top:auto; margin-bottom:auto;\n");
      out.write("}\n");
      out.write(".login_info { \n");
      out.write("\twidth:800px; left:0; right:0; margin-left:auto; margin-right:auto;\n");
      out.write("\ttop: 0; bottom:0; margin-top:1px;  margin-bottom:auto;\n");
      out.write("}\n");
      out.write("</style>\n");
      out.write("<script type=\"text/javascript\">\n");
      out.write("$(document).ready(function(){\n");
      out.write("\tfn_chk = function(){\n");
      out.write("\t\tvar uid = $(\"#id\").val();\n");
      out.write("\t\tif(uid==\"\") {\n");
      out.write("\t\t\talert(\"아이디를 입력하세요\");\n");
      out.write("\t\t\treturn;\n");
      out.write("\t\t}\n");
      out.write("\n");
      out.write("\t\tvar passwd = $(\"#pw\").val();\n");
      out.write("\t\tif(passwd==\"\") {\n");
      out.write("\t\t\talert(\"패스워드를 입력하세요\");\n");
      out.write("\t\t\treturn; \n");
      out.write("\t\t}\n");
      out.write("\n");
      out.write("\t\tvar req = $.ajax({\n");
      out.write("\t\t\turl: \"/loginCheck\",\n");
      out.write("\t\t\tdata: $(\"#frm\").serialize(),\n");
      out.write("\t\t\ttype: \"post\",\n");
      out.write("\t\t\tdataType: \"json\"\n");
      out.write("\t\t});\n");
      out.write("\t\t\n");
      out.write("\t\treq.done(function(data) {\n");
      out.write("\t\t\t//20180803 useYn, workYn 조건절 추가 [workYn의 경우, 거래처코드가 'a'인 경우, HRA100의 퇴직날짜여부를 확인하며 나머지는 SCM 사용자 등록의 사용여부를 확인한다.]\n");
      out.write("\t\t\tif(data.id == null){\n");
      out.write("\t\t\t\talert(\"계정정보를 확인해주세요\");\n");
      out.write("\t\t\t}else if(data.confirmYn == 0){\n");
      out.write("\t\t\t\talert(\"미승인 상태입니다.\");\n");
      out.write("\t\t\t}else if(data.useYn == 0) {\n");
      out.write("\t\t\t\talert(\"미사용계정입니다.\");\n");
      out.write("\t\t\t}else if(data.workYn == 0) {\n");
      out.write("\t\t\t\talert(\"재직중인 직원만 로그인 가능합니다.\");\n");
      out.write("\t\t\t}else{\n");
      out.write("\t\t\t\tlocation.replace(\"/erp/scm/main.do\");\t\n");
      out.write("\t\t\t}\t\n");
      out.write("\t\t});\t\t\n");
      out.write("\t};\n");
      out.write("\t\n");
      out.write("\t$('#id').focus();\n");
      out.write("\t\n");
      out.write("\tgetjsonData();\n");
      out.write("\t\n");
      out.write("\t//아이디 쿠키저장\n");
      out.write("\tvar userInputId = getCookie(\"userInputId\");\n");
      out.write("    $(\"#id\").val(userInputId); \n");
      out.write("    \n");
      out.write("    if($(\"#id\").val() != \"\"){ \n");
      out.write("        $(\"#idChk\").attr(\"checked\", true); \n");
      out.write("    }\n");
      out.write("    \n");
      out.write("    $(\"#idChk\").change(function(){ \n");
      out.write("        if($(\"#idChk\").is(\":checked\")){ \n");
      out.write("            var userInputId = $(\"#id\").val();\n");
      out.write("            setCookie(\"userInputId\", userInputId, 300); \n");
      out.write("        }else{ // ID 저장하기 체크 해제 시,\n");
      out.write("            deleteCookie(\"userInputId\");\n");
      out.write("        }\n");
      out.write("    });\n");
      out.write("     \n");
      out.write("    $(\"#id\").keyup(function(){ \n");
      out.write("        if($(\"#idChk\").is(\":checked\")){ \n");
      out.write("            var userInputId = $(\"#id\").val();\n");
      out.write("            setCookie(\"userInputId\", userInputId, 300);\n");
      out.write("        }\n");
      out.write("    });\n");
      out.write("    \n");
      out.write("    //랜덤 사진\n");
      out.write("    var mainImgArr = new Array(\"/images/logo/scmMain.jpg\", \"/images/logo/scmMain2.jpg\");\n");
      out.write("    var index = Math.floor(Math.random() * mainImgArr.length);\n");
      out.write("    $('#mainImg').prop(\"src\",mainImgArr[index]);\n");
      out.write("\t\n");
      out.write("});\n");
      out.write("function getjsonData(){\n");
      out.write(" \tif(PARAM_INFO.passwd != undefined){\n");
      out.write(" \t\t$('#pw').val(PARAM_INFO.passwd);\n");
      out.write("\t}\n");
      out.write(" \tif(PARAM_INFO.loginId != undefined){\n");
      out.write(" \t\t$('#id').val(PARAM_INFO.loginId);\n");
      out.write(" \t\t$('#loginBtn').click();\n");
      out.write("\t}\n");
      out.write(" \t\n");
      out.write("};\n");
      out.write("\n");
      out.write("function changePasswordPop(){\n");
      out.write("  var pLayout;\n");
      out.write("  \n");
      out.write("  dhxWins = new dhtmlXWindows();\n");
      out.write("  if (!$('#' + 'w1').length) {\n");
      out.write("\t  if (dhxWins.isWindow('w1')) {\n");
      out.write("\t\t  while (dhxWins.isWindow('w1')) {\n");
      out.write("\t\t\t  var number = eleId.replace(/[^0-9]/g, '');\n");
      out.write("\t\t\t  eleId = eleId.replace(/\\d+/g, '') + number++;\n");
      out.write("\t\t  }\n");
      out.write("\t  }\n");
      out.write("\t  var $div = $('<div/>').appendTo('#container');\n");
      out.write("\t  $div.attr('id', 'w1');\n");
      out.write("  }\n");
      out.write("\n");
      out.write("  w1 = dhxWins.createWindow('w1', 500, 250, 300, 270);\n");
      out.write("  dhxWins.window('w1').setModal(true);\n");
      out.write("  pLayout = w1.attachLayout(\"1C\");\n");
      out.write("  \n");
      out.write("  pLayout.cells(\"a\").hideHeader(); \n");
      out.write("  ifr = pLayout.cells(\"a\").getFrame();\n");
      out.write("  w1.setText(\"비밀번호 변경\");\n");
      out.write("  pLayout.cells(\"a\").attachURL(\"/erp/scm/changePassword.do\");\n");
      out.write("};\n");
      out.write("\n");
      out.write("function setCookie(cookieName, value, exdays){\n");
      out.write("    var exdate = new Date();\n");
      out.write("    exdate.setDate(exdate.getDate() + exdays);\n");
      out.write("    var cookieValue = escape(value) + ((exdays==null) ? \"\" : \"; expires=\" + exdate.toGMTString());\n");
      out.write("    document.cookie = cookieName + \"=\" + cookieValue;\n");
      out.write("}\n");
      out.write(" \n");
      out.write("function deleteCookie(cookieName){\n");
      out.write("    var expireDate = new Date();\n");
      out.write("    expireDate.setDate(expireDate.getDate() - 1);\n");
      out.write("    document.cookie = cookieName + \"= \" + \"; expires=\" + expireDate.toGMTString();\n");
      out.write("}\n");
      out.write("\n");
      out.write("function getCookie(cookieName) {\n");
      out.write("    cookieName = cookieName + '=';\n");
      out.write("    var cookieData = document.cookie;\n");
      out.write("    var start = cookieData.indexOf(cookieName);\n");
      out.write("    var cookieValue = '';\n");
      out.write("    if(start != -1){\n");
      out.write("        start += cookieName.length;\n");
      out.write("        var end = cookieData.indexOf(';', start);\n");
      out.write("        if(end == -1)end = cookieData.length;\n");
      out.write("        cookieValue = cookieData.substring(start, end);\n");
      out.write("    }\n");
      out.write("    return unescape(cookieValue);\n");
      out.write("}\n");
      out.write("</script> \n");
      out.write("\t<form id=\"frm\" name=\"frm\" method=\"post\">\n");
      out.write("\t    <div class=\"login_logo\">\n");
      out.write("\t\t\t<img id=\"scmLogo\" name=\"scmLogo\"  src=\"/images/logo/scmLogo.png\" style=\" width : 160px; height: 100%; margin-right: 500px;\">\n");
      out.write("\t\t</div>\n");
      out.write("\t    <div class=\"login_main\" style=\"border: solid 1px;\">\n");
      out.write("\t\t\t<img id=\"mainImg\" name=\"mainImg\"  src=\"/images/logo/scmMain.jpg\" style=\"max-width: 796px; padding : 2px; height: 326px;\">\n");
      out.write("\t    </div>\n");
      out.write("\t    <div class=\"login_info\" style=\"border: solid 1px;\">\n");
      out.write("\t      <table width=\"430px;\" style=\"margin-top: 10px; margin-left: 390px;\">\n");
      out.write("\t        <tr> \n");
      out.write("\t          <td align=\"right\" width=\"140px;\" height=\"30px;\">\n");
      out.write("\t            <font size=\"2px;\"><b>ID 입력</b></font> \n");
      out.write("\t          </td> \n");
      out.write("\t          <td width=\"160px;\"> \n");
      out.write("\t            <input name=\"id\" id=\"id\" type=\"text\" value=\"\" style=\"width: 150px;\"> \n");
      out.write("\t          </td>\n");
      out.write("\t          <td rowspan=\"2\" width=\"100px;\">\n");
      out.write("\t            <input type=\"button\" name=\"loginBtn\" id=\"loginBtn\" value=\"LOGIN\"  style=\"height: 55px; width: 70px; color:white; background-color: #4A9ABB;\" onClick=\"javascript:fn_chk();\" />\n");
      out.write("\t          </td>\n");
      out.write("\t        </tr>\n");
      out.write("\t        <tr>\n");
      out.write("\t          <td align=\"right\" width=\"140px;\" height=\"30px;\">\n");
      out.write("\t            <font size=\"2px;\"><b>PASSWORD 입력</b></font>\n");
      out.write("\t          </td>\n");
      out.write("\t          <td width=\"160px;\">\n");
      out.write("\t           <input name=\"pw\" id=\"pw\" type=\"password\" value=\"\" onKeyPress=\"if(event.keyCode==13) { fn_chk(); }\" style=\"width: 150px;\">\n");
      out.write("\t          </td>\n");
      out.write("\t        </tr>\n");
      out.write("\t        <tr>\n");
      out.write("\t          <td colspan=\"3\" align=\"center\" height=\"30px;\">\n");
      out.write("\t            <input id=\"idChk\" name=\"idChk\" type=\"checkbox\">\n");
      out.write("\t            <label style=\"text-align: left; width: 120px;\"><font size=\"2px;\"><b>ID 저장</b></font></label> \n");
      out.write("\t            &nbsp;&nbsp;/&nbsp;&nbsp; <a href=\"javascript:changePasswordPop()\">비밀번호변경</a>\n");
      out.write("\t          </td>\n");
      out.write("\t        </tr>\n");
      out.write("\t      </table>\n");
      out.write("\t   </div>\n");
      out.write("\t</form>\n");
      out.write("</body>\n");
      out.write("</html>");
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
