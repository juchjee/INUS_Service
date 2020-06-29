<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="html" uri="/WEB-INF/tld/html.tld"%>
<head>
	<script type="text/javascript">
		function init(){
			/* 약관 class 이벤트 */
			if($(".footer div div ul").find("li:eq(0)").find("a").attr("class") != ""){
				$(".footer div div ul").find("li:eq(0)").find("a").removeClass();
			}
			if($(".footer div div ul").find("li:eq(1)").find("a").attr("class") == ""){
				$(".footer div div ul").find("li:eq(1)").find("a").addClass("glay");
			}
			if($(".footer div div ul").find("li:eq(2)").find("a").attr("class") != ""){
				$(".footer div div ul").find("li:eq(2)").find("a").addClass("glay");
			}
		}
	</script>
</head>
<body>
	<body>
	<div class="sub">
	  	<!--=============== #CONNTENTS ===============-->
		<div class="box_guide">
			<h2 class="tit">이용약관</h2>		
			<p class="desc">이누스 이용약관입니다.</p>
			<div class="page_location">
				<ul>
					<li><a href="#"><span class="home"><span class="hidden">home</span></span></a></li>					
					<li class="last"><a href="#">이용약관</a></li>
				</ul>
			</div>
		</div>
		<div class="box_terms">
			<div class="inner">
				<h3 class="tit">제 1조 (목적)</h3>
				<p class="txt">이 약관은 아이에스동서가 운영하는 A/S 웹사이트(이하 “사이트”이라 한다.)에서 제공하는 인터넷 관련서비스 (이하 “서비스”라 한다.)를 이용함에 있어 
				서비스 이용자의 권리ㆍ의무 및 책임사항을 규정함으로 목적으로 합니다. </p>
			</div>
			<div class="inner">
				<h3 class="tit">제 2조 (정의)</h3>
				<ul class="txt">
					<li><span class="num">①</span>“사이트”이란 아이에스동서가 일정 서비스를 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 서비스를 이용할 수 있도록 
					설정한 가상의 영업장을 말하며, 아울러 사이트를 운영하는 사업자의 의미로도 사용합니다. </li>
					<li><span class="num">②</span>“이용자”란 “사이트”에 접속하여 이 약관에 따라 “사이트”가 제공하는 서비스를 이용자를 말합니다. </li>
				</ul>
			</div>
			<div class="inner">
				<h3 class="tit">제 3조 (약관의 명시와 개정)</h3>
				<ul class="txt">
					<li><span class="num">①</span>"사이트"는 이 약관의 내용과 상호, 영업소 소재지, 연락처(전화, 팩스, 전자우편 주소 등) 등을 이용자가 알 수 있도록 서비스화면에 게시합니다. </li>
					<li><span class="num">②</span>"사이트"는 약관의 규제 등에 관한 법률, 전자거래기본법, 전자서명법, 정보통신망이용촉진 등에 관한 법률, 방문 판매 등에 관한 법률, 
					소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</li>
					<li><span class="num">③</span>"사이트"가 약관을 개정할 경우에는 적용일자 및 개정 사유를 명시하여 현행약관과 함께 "사이트"의 초기화면 에 그 적용일자 7일 이전부터 
					적용일자 전일까지 공지합니다. </li>
					<li><span class="num">④</span>"사이트"가 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 
				    개정전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 
				    공지기간 내에 "사이트"에 송신하여 "사이트"의 동의를 받은 경우에는 개정약관 조항이 적용됩니다. </li>
					<li><span class="num">⑤</span>이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 정부가 제정한 전자거래소비자보호지침 및 관계법령 또는 상관례에 따릅니다. </li>
				</ul>
			</div>
			<div class="inner">				
				<h3 class="tit">제 4조 (서비스 이용 계약의 성립)</h3>
				<ul class="txt">
					<li><span class="num">①</span>"사이트"의 서비스 이용 계약은 이용자가 이 약관에 동의한다는 의사표시와 서비스 이용 신청을 하고, 이에 대한 " 사이트"의 이용 승낙으로 성립됩니다.</li>
					<li><span class="num">②</span>이용자가 사이트의 서비스를 이용하고자 하는 경우, 이용자는 사이트에서 요청하는 개인 신상정보를 제공해야 합니다.</li>
					<li><span class="num">③</span>사이트는 다음 각 호에 해당하는 서비스의 이용 신청에 대하여는 이를 승낙하지 아니합니다.</li>
					<li><span class="num">　가.</span>다른 사람의 명의를 사용하여 신청하였을 때</li>
					<li><span class="num">　나.</span>본인의 실명으로 신청하지 않았을 때 </li>
					<li><span class="num">　다.</span>서비스 이용 계약 신청서의 내용을 허위로 기재하였을 때 </li>
					<li><span class="num">　라.</span>사회의 안녕과 질서 혹은 미풍양속을 저해할 목적으로 신청하였을 때</li>
					<li><span class="num">　마.</span>기타 이용신청자의 귀책사유로 이용승낙이 곤란한 경우</li>
				</ul>
			</div>
			<div class="inner">
				<h3 class="tit">제5조(서비스 이용 및 제한)</h3>
				<ul class="txt">
				<li><span class="num">①</span>사이트의 서비스 이용은 사이트의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간을 원칙으로 합니다. </li>
				<li><span class="num">②</span>사이트는 정보통신 시스템 등의 정기점검, 보수, 교체, 고장, 통신두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시 중단할 수 있습니다. </li>
				<li><span class="num">③</span>제2항에 의한 서비스 중단의 경우에는 사이트는 홈페이지 내의 공지사항 및 기타 팝업을 통해 이용자에게 통지를 합니다. 단, 사이트가 통제할 수 없는 사유로 인한 서비스 중단으로 사전 통지가 불가능한 경우에는 그러하지 아니합니다. </li>
				<li><span class="num">④</span>사이트에서 제공하는 서비스는 기본적으로 무료입니다. 단, 별도로 유료임을 명시한 정보에 대해서는 해당 정보에 명시된 요금을 지불하여야 사용이 가능합니다. </li>
				<li><span class="num">⑤</span>이용자는 "사이트"를 이용함으로써 얻은 정보를 "사이트"의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송, 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다. </li>
				<li><span class="num">⑥</span> "사이트"는 서비스 요금이 무료인 서비스 이용과 관련하여 이용자에게 발생한 어떠한 손해에 대해서도 책임을 지지 않습니다. </li>
				</ul>
			</div>
			<div class="inner">
				<h3 class="tit">제6조(서비스의 중단)</h3>
				<ul class="txt">
				<li><span class="num">①</span>"사이트"는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. </li>
				<li><span class="num">②</span>사이트는 정보통신 시스템 등의 정기점검, 보수, 교체, 고장, 통신두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시 중단할 수 있습니다. </li>
				<li><span class="num">③</span>제1항에 의한 서비스 중단의 경우에는 "사이트"가 정한 방법으로 이용자에게 통지합니다. </li>
				</ul>
			</div>
			<div class="inner">
				<h3 class="tit">제7조(개인정보보호)</h3>
				<ul class="txt">
				<li><span class="num">①</span>"사이트"는 이용자의 정보수집시 고객상담 등에 필요한 최소한의 정보를 수집합니다. 다음 사항을 필수사항으로 하며 그 외 사항은 선택사항으로 합니다. </li>
				<li><span class="num">　가.</span>고객상담</li>
				<li><span class="num">　　-</span>개인정보: 이름, 전화번호, 이메일, 주소 그외 요청에 대한 정보</li>
				<li><span class="num">②</span>"사이트"가 이용자의 개인식별이 가능한 개인정보를 수집하는 때에는 반드시 당해 이용자의 동의를 받습니다. </li>
				<li><span class="num">③</span>제공된 개인정보는 당해 이용자의 동의 없이 목적 외의 이용이나 제3자에게 제공할 수 없으며, 이에 대한 모든 책임은 "사이트"가 집니다.</li>
				<li><span class="num">　</span>다만, 다음의 경우에는 예외로 합니다.</li>
				<li><span class="num">　　-</span>"사이트"가 제공하는 서비스의 실시 시 필요한 최소한의 이용자의 정보(성명, 주소, 전화번호)를 알려주는 경우</li>
				<li><span class="num">　　-</span>통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우</li>
				<li><span class="num">④</span>"사이트"가 제2항과 제3항에 의해 이용자의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명 및 전화번호 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받는자, 제공목적 및 제공할 정보의 내용)등 정보통신망이용촉진 등에 관한 법률 제16조제3항이 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를 철회할 수 있습니다. </li>
				<li><span class="num">⑤</span>이용자는 언제든지 "사이트"가 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 "사이트"는 이에 대해 지체 없이 필요한 조치를 취할 의무를 집니다. 이용자가 오류의 정정을 요구한 경우에는 "사이트"는 그 오류를 정정할 때까지 당해 개인정보를 이용 하지 않습니다.</li>
				<li><span class="num">⑥</span>"사이트" 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체 없이 파기합니다. </li>
				</ul>
			</div>
			<div class="inner">
				<h3 class="tit">제8조("사이트"의 의무)</h3>
				<ul class="txt">
				<li><span class="num">①</span>"사이트"는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 서비스를 제공하는데 최선을 다하여야 합니다. </li>
				<li><span class="num">②</span>"사이트"는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다. </li>
				<li><span class="num">③</span>"사이트"는 이용자가 원하지 않는 영리목적의 광고성 전자우편을 발송하지 않습니다. </li>
				</ul>
			</div>
			<div class="inner">
				<h3 class="tit">제9조(이용자의 의무)</h3>
				<ul class="txt">
				<li><span class="num"></span>이용자는 다음 행위를 하여서는 안됩니다.</li>
				<li><span class="num">①</span>신청 또는 변경시 허위내용의 등록 </li>
				<li><span class="num">②</span>"사이트"에 게시된 정보의 변경 </li>
				<li><span class="num">③</span>"사이트"가 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시 </li>
				<li><span class="num">④</span>"사이트" 기타 제3자의 저작권 등 지적재산권에 대한 침해 </li>
				</ul>
			</div>
			<div class="inner">
				<h3 class="tit">제10조(저작권의 귀속 및 이용제한)</h3>
				<ul class="txt">
				<li><span class="num">①</span>"사이트"가 작성한 저작물에 대한 저작권 기타 지적재산권은 "사이트"에 귀속합니다. </li>
				<li><span class="num">②</span>이용자는 "사이트"를 이용함으로써 얻은 정보를 "사이트"의 사전 승낙없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다. </li>
				</ul>
			</div>
			<div class="inner">
				<h3 class="tit">제11조(분쟁해결)</h3>
				<ul class="txt">
				<li><span class="num">①</span>"사이트"는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다. </li>
				<li><span class="num">②</span>"사이트"와 이용자간에 발생한 분쟁은 전자거래기본법 제28조 및 동 시행령 제15조에 의하여 설치된 전자거래분쟁조정위원회의 조정에 따를 수 있습니다. </li>
				</ul>
			</div>
			<div class="inner">
				<h3 class="tit">제12조(재판권 및 준거법)</h3>
				<ul class="txt">
				<li><span class="num">①</span>"사이트"와 이용자간에 발생한 전자거래 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다. </li>
				<li><span class="num">②</span>이 약관은 준거법으로 한국법을 적용합니다.</li>
				</ul>
			</div>
		</div>
	</div>
	<!--// sub -->
</body>