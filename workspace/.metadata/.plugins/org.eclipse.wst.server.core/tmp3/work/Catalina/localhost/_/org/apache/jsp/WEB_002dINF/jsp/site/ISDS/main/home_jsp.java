/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.62
 * Generated at: 2019-01-25 05:16:53 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.jsp.site.ISDS.main;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class home_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fc_005fchoose;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fc_005fwhen_0026_005ftest;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fc_005fotherwise;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fc_005fchoose = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fc_005fwhen_0026_005ftest = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fc_005fotherwise = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fc_005fchoose.release();
    _005fjspx_005ftagPool_005fc_005fwhen_0026_005ftest.release();
    _005fjspx_005ftagPool_005fc_005fotherwise.release();
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
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!DOCTYPE HTML>\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("\t<link rel=\"stylesheet\" href=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${rootUri}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
      out.write("common/css/main.css\" />\r\n");
      out.write("\t<script type=\"text/javascript\">\r\n");
      out.write("\r\n");
      out.write("\t\tfunction init(){\r\n");
      out.write("\t\t\tfnEvent();\r\n");
      out.write("\t\t}\r\n");
      out.write("\r\n");
      out.write("\t\tfunction fnEvent(){\r\n");
      out.write("\t\t\tnoticeView = function() {\r\n");
      out.write("\t\t\t\tdocument.noticeForm.action = \"/ISDS/bbt/bbt00001V.do\";\r\n");
      out.write("\t\t\t   \tdocument.noticeForm.submit();\r\n");
      out.write("\t\t\t}\r\n");
      out.write("\r\n");
      out.write("\t\t}\r\n");
      out.write("\r\n");
      out.write("\t</script>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("\t<form id=\"noticeForm\" name=\"noticeForm\" method=\"post\">\r\n");
      out.write("\t\t\t<input type=\"hidden\" id=\"boardSeq\" name=\"boardSeq\" value=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${mainNoticeList[0].boardSeq}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
      out.write("\" />\r\n");
      out.write("\t\t\t<input type=\"hidden\" id=\"pageCd\" name=\"pageCd\" value=\"BBM00067\" />\r\n");
      out.write("\t\t\t<input type=\"hidden\" id=\"boardMstCd\" name=\"boardMstCd\" value=\"BBM00067\" />\r\n");
      out.write("\t\t\t<input type=\"hidden\" id=\"boardCateSeq\" name=\"boardCateSeq\" value=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${mainNoticeList[0].boardCateSeq}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
      out.write("\" />\r\n");
      out.write("\t\t\t<input type=\"hidden\" id=\"page\" name=\"page\" value=\"1\"/>\r\n");
      out.write("\t</form>\r\n");
      out.write("\t<section class=\"cont\">\r\n");
      out.write("\t");
      if (_jspx_meth_c_005fchoose_005f0(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t\t<div class=\"notice_bx\">\r\n");
      out.write("\t\t\t<p class=\"txt\"><a href=\"javascript:;\" onclick=\"noticeView();\">");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${mainNoticeList[0].boardTitle}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
      out.write("</a></p>\r\n");
      out.write("\t\t\t<a href=\"/ISDS/bbt/bbt00001.do?boardMstCd=BBM00067\" class=\"btn_more\">이누스 공지사항 더 보기</a>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<!--// notice_bx -->\r\n");
      out.write("\t\t<div class=\"quick_bx\">\r\n");
      out.write("\t\t\t<ul>\r\n");
      out.write("\t\t\t\t<li class=\"mq01\"><a href=\"/ISDS/repair/inusRepairState.do\"><span class=\"txt\">A/S 접수현황</span></a></li>\r\n");
      out.write("\t\t\t\t<li class=\"mq02\"><a href=\"/ISDS/repair/inusRepairStateFinish.do\"><span class=\"txt\">A/S 완료현황</span></a></li>\r\n");
      out.write("\t\t\t\t<li class=\"mq03\"><a href=\"/ISDS/repair/inusInstallAccept.do\"><span class=\"txt\">온라인 설치접수내역</span></a></li>\r\n");
      out.write("\t\t\t\t<li class=\"mq04\"><a href=\"/ISDS/repair/inusHandling.do\"><span class=\"txt\">A/S 수리내역 조회</span></a></li>\r\n");
      out.write("\t\t\t</ul>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<!--// quick_bx -->\r\n");
      out.write("\t</section>\r\n");
      out.write("\t<!-- <a href=\"callto:01234567890\" class=\"callBt\">상담전화연결</a> -->\r\n");
      out.write("</body>\r\n");
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

  private boolean _jspx_meth_c_005fchoose_005f0(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  c:choose
    org.apache.taglibs.standard.tag.common.core.ChooseTag _jspx_th_c_005fchoose_005f0 = (org.apache.taglibs.standard.tag.common.core.ChooseTag) _005fjspx_005ftagPool_005fc_005fchoose.get(org.apache.taglibs.standard.tag.common.core.ChooseTag.class);
    _jspx_th_c_005fchoose_005f0.setPageContext(_jspx_page_context);
    _jspx_th_c_005fchoose_005f0.setParent(null);
    int _jspx_eval_c_005fchoose_005f0 = _jspx_th_c_005fchoose_005f0.doStartTag();
    if (_jspx_eval_c_005fchoose_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      do {
        out.write("\r\n");
        out.write("\t\t");
        if (_jspx_meth_c_005fwhen_005f0(_jspx_th_c_005fchoose_005f0, _jspx_page_context))
          return true;
        out.write("\r\n");
        out.write("\t\t");
        if (_jspx_meth_c_005fotherwise_005f0(_jspx_th_c_005fchoose_005f0, _jspx_page_context))
          return true;
        out.write('\r');
        out.write('\n');
        out.write('	');
        int evalDoAfterBody = _jspx_th_c_005fchoose_005f0.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
    }
    if (_jspx_th_c_005fchoose_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fc_005fchoose.reuse(_jspx_th_c_005fchoose_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fc_005fchoose.reuse(_jspx_th_c_005fchoose_005f0);
    return false;
  }

  private boolean _jspx_meth_c_005fwhen_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_c_005fchoose_005f0, javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  c:when
    org.apache.taglibs.standard.tag.rt.core.WhenTag _jspx_th_c_005fwhen_005f0 = (org.apache.taglibs.standard.tag.rt.core.WhenTag) _005fjspx_005ftagPool_005fc_005fwhen_0026_005ftest.get(org.apache.taglibs.standard.tag.rt.core.WhenTag.class);
    _jspx_th_c_005fwhen_005f0.setPageContext(_jspx_page_context);
    _jspx_th_c_005fwhen_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_c_005fchoose_005f0);
    // /WEB-INF/jsp/site/ISDS/main/home.jsp(35,2) name = test type = boolean reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_c_005fwhen_005f0.setTest(((java.lang.Boolean) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${isLogIn}", java.lang.Boolean.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false)).booleanValue());
    int _jspx_eval_c_005fwhen_005f0 = _jspx_th_c_005fwhen_005f0.doStartTag();
    if (_jspx_eval_c_005fwhen_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      do {
        out.write("\r\n");
        out.write("\t\t\t<div class=\"login_msg_bx after\">\r\n");
        out.write("\t\t\t\t<strong>");
        out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${loginVO.custNm}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
        out.write("</strong>\r\n");
        out.write("\t\t\t\t<ul class=\"list_Box\">\r\n");
        out.write("\t\t\t\t\t<li class=\"one\"><a href=\"/ISDS/repair/inusRepairState.do\">당일접수<em>");
        out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${workCount.todayAsCount}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
        out.write("</em>건</a></li>\r\n");
        out.write("\t\t\t\t\t<li class=\"two\"><a href=\"/ISDS/repair/inusRepairState.do\">미처리<em>");
        out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${workCount.readyAsCount}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
        out.write("</em>건</a></li>\r\n");
        out.write("\t\t\t\t</ul>\r\n");
        out.write("\t\t\t</div>\r\n");
        out.write("\t\t\t<!--// login_msg_bx.after -->\r\n");
        out.write("\r\n");
        out.write("\t\t");
        int evalDoAfterBody = _jspx_th_c_005fwhen_005f0.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
    }
    if (_jspx_th_c_005fwhen_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fc_005fwhen_0026_005ftest.reuse(_jspx_th_c_005fwhen_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fc_005fwhen_0026_005ftest.reuse(_jspx_th_c_005fwhen_005f0);
    return false;
  }

  private boolean _jspx_meth_c_005fotherwise_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_c_005fchoose_005f0, javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  c:otherwise
    org.apache.taglibs.standard.tag.common.core.OtherwiseTag _jspx_th_c_005fotherwise_005f0 = (org.apache.taglibs.standard.tag.common.core.OtherwiseTag) _005fjspx_005ftagPool_005fc_005fotherwise.get(org.apache.taglibs.standard.tag.common.core.OtherwiseTag.class);
    _jspx_th_c_005fotherwise_005f0.setPageContext(_jspx_page_context);
    _jspx_th_c_005fotherwise_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_c_005fchoose_005f0);
    int _jspx_eval_c_005fotherwise_005f0 = _jspx_th_c_005fotherwise_005f0.doStartTag();
    if (_jspx_eval_c_005fotherwise_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      do {
        out.write("\r\n");
        out.write("\t\t\t<section class=\"login_msg_bx\">\r\n");
        out.write("\t\t\t\t<p>반갑습니다.<strong>inus 서비스센터</strong>입니다.<br>로그인을 하셔야 서비스를 이용하실 수 있습니다.</p>\r\n");
        out.write("\t\t\t\t<div class=\"mt15\">\r\n");
        out.write("\t\t\t\t\t<a href=\"/ISDS/mm/acessLogin.do\" class=\"btn_login mAuto\">로그인</a>\r\n");
        out.write("\t\t\t\t</div>\r\n");
        out.write("\t\t\t</section>\r\n");
        out.write("\t\t\t<!-- // login_msg_bx -->\r\n");
        out.write("\t\t");
        int evalDoAfterBody = _jspx_th_c_005fotherwise_005f0.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
    }
    if (_jspx_th_c_005fotherwise_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fc_005fotherwise.reuse(_jspx_th_c_005fotherwise_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fc_005fotherwise.reuse(_jspx_th_c_005fotherwise_005f0);
    return false;
  }
}
