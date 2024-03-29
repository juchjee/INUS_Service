<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="html" uri="/WEB-INF/tld/html.tld"%>
<head>
	<script type="text/javascript">
		function init(){
			/* 약관 class 이벤트 */
			if($(".footer div div ul").find("li:eq(0)").find("a").attr("class") == ""){
				$(".footer div div ul").find("li:eq(0)").find("a").addClass("glay");
			}
			if($(".footer div div ul").find("li:eq(1)").find("a").attr("class") != ""){
				$(".footer div div ul").find("li:eq(1)").find("a").removeClass();
			}
			if($(".footer div div ul").find("li:eq(2)").find("a").attr("class") == ""){
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
			<h2 class="tit">개인정보취급방침</h2>		
			<p class="desc">이누스 개인정보취급방침입니다.</p>
			<div class="page_location">
				<ul>
					<li><a href="#"><span class="home"><span class="hidden">home</span></span></a></li>					
					<li class="last"><a href="#">개인정보취급방침</a></li>
				</ul>
			</div>
		</div>
		<div class="box_terms type1">
			<div class="inner">
				<p class="txt">&#60;inus 서비스센터&#62; ('http://cs.inusbath.com'이하 'inus 서비스센터 홈페이지') 은(는) 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 
				보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.<br>
				&#60;inus 서비스센터&#62;('inus 서비스센터 홈페이지') 은(는) 회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 
				공지할 것입니다.</p>
				<p class="txt under ffb">본 방침은 2017년 10월 1일부터 시행됩니다.</p>
			</div>
			<div class="inner">
				<h3 class="tit ffb">1. 개인정보의 처리 목적</h3>
				<p class="txt under">&#60;inus 서비스센터&#62;('http://cs.inusbath.com'이하 'inus 서비스센터 홈페이지')은(는) 개인정보를 다음의 목적을 위해 처리합니다.</p>
				<p class="txt">처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.</p>
				<ul class="txt">
					<li class="square">가. 홈페이지 회원가입 및 관리<br />
					고충처리, 분쟁 조정을 위한 기록 보존 등을 목적으로 개인정보를 처리합니다.</li>
					<li class="square">나. 민원사무 처리<br />
					민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.</li>
					<li class="square">다. 재화 또는 서비스 제공<br />
					서비스 제공, 본인인증 등을 목적으로 개인정보를 처리합니다.</li>
				</ul>
			</div>
			<div class="inner">
				<h3 class="tit ffb">2. 개인정보 파일 현황</h3>
				<ul class="txt">
					<li class="square">개인정보 파일명 : 개인정보 수집 파일 현황</li>
					<li class="square">개인정보 항목 :이메일, 휴대전화번호, 비밀번호, 이름, 접속 로그, 쿠키</li>
					<li class="square">수집방법 : 홈페이지, 서면양식, 전화/팩스</li>
					<li class="square">보유근거 : 개인정보취급 방침</li>
					<li class="square">보유기간 : 3년</li>
					<li class="square">관련법령 :소비자의 불만 또는 분쟁처리에 관한 기록 : 3년(전자상거래등에서의 소비자보호에 관한 법률) </li>
				</ul>
			</div>
			<div class="inner">				
				<h3 class="tit ffb">3. 개인정보처리 위탁</h3>
				<p class="txt">① &#60;inus 서비스센터&#62;('inus 서비스센터 홈페이지')은(는) 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
				<p class="txt">② &#60;inus 서비스센터&#62;('http://cs.inusbath.com'이하 'inus 서비스센터 홈페이지')은(는) 위탁계약 체결 시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.</p>
				<p class="txt">③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체 없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.</p>
				<ul class="txt">
				</ul>
			</div>
			<div class="inner">
				<h3 class="tit ffb">4. 정보주체의 권리,의무 및 그 행사방법 이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.</h3>
				<p class="txt">① 정보주체는 inus 서비스센터(‘http://cs.inusbath.com’이하 ‘inus 서비스센터 홈페이지) 에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
				<ul class="txt">
					<li class="square">개인정보 열람요구</li>
					<li class="square">오류 등이 있을 경우 정정 요구</li>
					<li class="square">삭제요규</li>
					<li class="square">처리정지 요구</li>
				</ul>
				<p class="txt">② 제1항에 따른 권리 행사는 inus 서비스센터(‘http://cs.inusbath.com’이하 ‘inus 서비스센터 홈페이지) 에 대해 개인정보 보호법 시행규칙 별지 제8호 서식에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 <기관/회사명>(‘사이트URL’이하 ‘사이트명) 은(는) 이에 대해 지체 없이 조치하겠습니다.</p>
				<p class="txt">③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 <기관/회사명>(‘사이트URL’이하 ‘사이트명) 은(는) 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.</p>
				<p class="txt">④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.<br>이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.</p>
			</div>
			<div class="inner">
				<h3 class="tit ffb">5. 처리하는 개인정보의 항목 작성</h3>
				<p class="txt">① &#60;inus 서비스센터&#62;('http://cs.inusbath.com'이하 'inus 서비스센터 홈페이지')은(는) 다음의 개인정보 항목을 처리하고 있습니다.</p>
				<ul class="txt">
					<li class="square">필수항목 : 이메일, 휴대전화번호, 이름, 접속 로그, 쿠키</li>
				</ul>
				<p class="txt">② 추가정보 제공을 원하지 않는 경우 수집하지 않으며, 미동의로 인해 이용상의 어떤 불이익도 발생하지 않습니다.</p>
			</div>
			<div class="inner">
				<h3 class="tit ffb">6. 개인정보의 파기</h3>
				<p class="txt"> &#60;inus 서비스센터&#62;('inus 서비스센터 홈페이지')은(는) 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체 없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.</p>
				<ul class="txt">
					<li class="square">파기절차<br>이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.-파기기한이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다. </li>
					<li class="square">파기방법<br>전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.<br>종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다. </li>
					<li class="square"></li>
					<li class="square"></li>
					<li class="square"></li>
					<li class="square"></li>
				</ul>
			</div>
			<div class="inner">
				<h3 class="tit ffb">7. 개인정보의 안전성 확보 조치</h3>
				<p class="txt">&#60;inus 서비스센터&#62;('inus 서비스센터 홈페이지')은(는) 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다</p>
				<ul class="txt">
					<li class="square">정기적인 자체 감사 실시<br>개인정보 취급 관련 안정성 확보를 위해 정기적(반기 1회)으로 자체 감사를 실시하고 있습니다</li>
					<li class="square">개인정보 취급 직원의 최소화 및 교육<br>개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.</li>
					<li class="square">내부관리계획의 수립 및 시행<br>개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.</li>
					<li class="square">해킹 등에 대비한 기술적 대책<br>&#60;inus 서비스센터&#62;('inus 서비스센터 홈페이지')은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다</li>
					<li class="square">접속기록의 보관 및 위,변조 방지개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관, 관리하고 있으며, 접속 기록이 위,변조 및 도난, 분실되지 않도록 보안기능 사용하고 있습니다.</li>
					<li class="square">개인정보에 대한 접근 제한<br>개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.</li>
					<li class="square">문서보안을 위한 잠금 장치 사용<br>개인정보가 포함된 서류, 보조저장매체 등을 잠금 장치가 있는 안전한 장소에 보관하고 있습니다.</li>
					<li class="square">비 인가자에 대한 출입 통제<br>개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.</li>
				</ul>
			</div>
			<div class="inner">
				<h3 class="tit ffb">8. 개인정보 보호책임자 작성</h3>
				<p class="txt">① inus 서비스센터(‘http://cs.inusbath.com’이하 ‘inus 서비스센터 홈페이지) 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
				<p class="txt"><br>▶ 개인정보 보호책임자</p>
				<ul class="txt">
					<li class="square">성명 : 홍덕기</li>
					<li class="square">직급 : 상무</li>
					<li class="square">연락처 : 02-3218-6873, foreverkhm@isdongseo.co.kr, 02-512-5100</li>
					<li class="square">※ 개인정보 보호 담당부서로 연결됩니다.<br></li>
				</ul>
				<p class="txt"><br>▶ 개인정보 보호 담당부서</p>
				<ul class="txt">
					<li class="square">부서명 : 경영개선팀</li>
					<li class="square">담당자 : 김성욱</li>
					<li class="square">연락처 : 02-3218-6836, 990029@isdongseo.co.kr , 02-512-5100</li>
				</ul>
				<p class="txt"><br>② 정보주체께서는 inus 서비스센터(‘http://cs.inusbath.com’이하 ‘inus 서비스센터 홈페이지) 의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. inus 서비스센터(‘http://cs.inusbath.com’이하 ‘inus 서비스센터 홈페이지) 은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다. </p>
			</div>
			<div class="inner">
				<h3 class="tit ffb">9. 개인정보 열람청구</h3>
				<p class="txt">① 정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. &#60;inus 서비스센터&#62;(‘http://cs.inusbath.com'이하 'inus 서비스센터 홈페이지')은(는) 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.</p>
				<p class="txt"><br>▶ 개인정보 열람청구 접수·처리 부서</p>
				<ul class="txt">
					<li class="square">부서명 : 인사팀</li>
					<li class="square">담당자 : 이영렬</li>
					<li class="square">연락처 : 02-3218-6622, 202juno@isdongseo.co.kr, 02-512-5100</li>
				</ul>
				<p class="txt">② 정보주체께서는 제1항의 열람청구 접수․처리부서 이외에, 행정안전부의 ‘개인정보보호 종합지원 포털’ 웹사이트(www.privacy.go.kr)를 통하여서도 개인정보 열람청구를 하실 수 있습니다</p>
				<p class="txt">▶ 행정안전부 개인정보보호 종합지원 포털 → 개인정보 민원 → 개인정보 열람등 요구 (본인확인을 위하여 아이핀(I-PIN)이 있어야 함)</p>
			</div>
			<div class="inner">
				<h3 class="tit ffb">10.권익침해 구제방법</h3>
				<p class="txt">아래의 기관은 &#60;사업자/단체명&#62; 과는 별개의 기관으로서, &#60;inus 서비스센터&#62;(‘http://cs.inusbath.com'이하 'inus 서비스센터 홈페이지')의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다.</p>
				<p class="txt"><br>▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영) </p>
				<ul class="txt">
					<li class="square">소관업무 : 개인정보 침해사실 신고, 상담 신청 </li>
					<li class="square">홈페이지 : privacy.kisa.or.kr </li>
					<li class="square">전화 : (국번없이) 118 </li>
					<li class="square">주소 : (138-950) 서울시 송파구 중대로 135 한국인터넷진흥원 개인정보침해신고센터 </li>
				</ul>
				<p class="txt"><br>▶ 개인정보 분쟁조정위원회 (한국인터넷진흥원 운영)</p>
				<ul class="txt">
					<li class="square">소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)</li>
					<li class="square">홈페이지 : privacy.kisa.or.kr </li>
					<li class="square">전화 : (국번없이) 118 </li>
					<li class="square">주소 : (138-950) 서울시 송파구 중대로 135 한국인터넷진흥원 개인정보침해신고센터 </li>
				</ul>
				<p class="txt"><br>▶ 대검찰청 사이버 범죄 수사단 : 02-3480-3573 (www.spo.go.kr)</p>
				<p class="txt"><br>▶ 경찰청 사이버 범죄 수사단 : 1566-0112 (www.netan.go.kr)</p>
			</div>
			<div class="inner">
				<h3 class="tit ffb">11. 개인정보 처리방침 변경 </h3>
				<p class="txt">① 이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
			</div>
		</div>
	</div>
	<!--// sub -->
</body>