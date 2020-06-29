<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib  prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="html" uri="/WEB-INF/tld/html.tld"  %>
	<c:choose>
		<c:when test="${not empty nonLogin}">
			<c:set var="mbrNm" value="${nonLogin.name}"/>
			<c:choose>
				<c:when test="${fn:length(nonLogin.mbrMobile) == 11}">
				<c:set var="mbrMobile1" value="${fn:substring(nonLogin.mbrMobile,0,3)}"/>
				<c:set var="mbrMobile2" value="${fn:substring(nonLogin.mbrMobile,3,7)}"/>
				<c:set var="mbrMobile3" value="${fn:substring(nonLogin.mbrMobile,7,11)}"/>
				</c:when>
			<c:when test="${fn:length(nonLogin.mbrMobile) == 10}">
				<c:set var="mbrMobile1" value="${fn:substring(nonLogin.mbrMobile,0,3)}"/>
				<c:set var="mbrMobile2" value="${fn:substring(nonLogin.mbrMobile,3,6)}"/>
				<c:set var="mbrMobile3" value="${fn:substring(nonLogin.mbrMobile,6,10)}"/>
			</c:when>
			</c:choose>
			<c:set var="mbrDi" value="${nonLogin.mbrDi}"/>
		</c:when>
		<c:when test="${isLogIn}">
				<c:set var="mbrNm" value="${mbr.mbrNm}"/>
				<c:set var="mbrMobile1" value="${fn:split(mbr.mbrMobile,'-')[0]}"/>
				<c:set var="mbrMobile2" value="${fn:split(mbr.mbrMobile,'-')[1]}"/>
				<c:set var="mbrMobile3" value="${fn:split(mbr.mbrMobile,'-')[2]}"/>

				<c:set var="mbrZipcode" value="${mbr.mbrZipcode}"/>
				<c:set var="mbrAddr" value="${mbr.mbrAddr}"/>
				<c:set var="mbrAddrDtl" value="${mbr.mbrAddrDtl}"/>
		</c:when>
	</c:choose>
<head>
	<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>

	<style>
		.y{cursor:pointer;}
		.visible{display:block;}
		.hidden{display:none;}
	</style>
	<script type="text/javascript">

	var m_oMonth = new Date();

	var nowYear = ${fn:split(iConstant.nowYmd(),'-')[0]};
	var nowMonth = ${fn:split(iConstant.nowYmd(),'-')[1]}-1;
	var nowDay = ${fn:split(iConstant.nowYmd(),'-')[2]};

	m_oMonth.setFullYear(nowYear) ;
	m_oMonth.setMonth(nowMonth);
	m_oMonth.setDate(nowDay);

	var todayDate = parseInt(m_oMonth.getDate());
	var todayYear = parseInt(m_oMonth.getFullYear());
	var todayMonth = parseInt(m_oMonth.getMonth()+1);

	m_oMonth.setDate(1);

	function init(){

		fnEvent();
		fnDataSetting();

	}

	function fnDataSetting(){
// 		$("input, textarea").placeholder();

		$.attfileAdd("file_add","0");
		$.attfileAdd("file_add","1");
		$.attfileAdd("file_add","2");

		printCalendar();
		$.renderCalendar();
		$.initEvent();
		$.lvalue = "SDH0809";
		$("#ascodeLev1").change();
		$("#inpBc").val("AS110100");
		$("#modelItemCd").val('0');
		$.modelList();
		<c:choose>
			<c:when test="${not empty nonLogin}">
				$(".l-conts").show();
				$(".l-conts-choose").hide();
			</c:when>
			<c:when test="${!isLogIn}">
			    layerPopUp('layers');
				$(".m-conts").show();
				$(".l-conts-choose").hide();

			</c:when>
			<c:when test="${isLogIn}">
				$(".l-conts").show();
				$(".l-conts-choose").show();
			</c:when>
		</c:choose>
	}


	function fnEvent(){
		/* 제품 가이드 이벤트 */
		$("input[name=info]").click(function(){
			var idx = $("input[name=info]").index(this);
			$(".ex_img_bx").hide();
			$(".ex_img_bx").eq(idx).show();
		});


			$.attfileAdd = function(className,len){

				$("."+className).append("<input type='text' name='dtlImgName' class='input_txt1' style='margin-bottom:5px;'/><span class='btn01Type dtlImg' style='cursor:pointer;margin-bottom:5px;'>파일찾기</span>");
				$(".dtlImg").unbind("click");
				/*----------------------------- 상세이미지 - 파일 찾기 버튼 클릭 이벤트(소멸성이벤트) -----------------------------*/
				$(".dtlImg").bind("click",function() {
					//확장형 첨부일 경우 인덱스 인자 추가 전달
					var idx = $(".dtlImg").index(this);
					//파라메터 값 object 형
				  		var obj = new Object();
				  		obj.fileAttrName = "dtlImgPath"; //실제 전달할 파일 속성명
				  	   	obj.fileViewAttrName = "dtlImgName"; //현재 노출되는 속성명 name
				  	   	obj.form = "workForm"; //전송할 form name
				  	   	obj.filetype = "image"; //파일 제한 종류 -- image (현재 이미지만 구현)
				  	   	obj.index = idx; //확장형 첨부파일일 경우 사용될 인덱스
					fileSearch(obj);
				});

			$("input[name=mbr]").bind("change",function(){
				if($(this).val() == 1){
					$("#mbrZipcode").val("${mbrZipcode}");
					$("#mbrAddr").val("${mbrAddr}");
					$("#mbrAddrDtl").val("${mbrAddrDtl}");

					$("#mbrMobile1").val("${mbrMobile1}");
					$("#mbrMobile2").val("${mbrMobile2}");
					$("#mbrMobile3").val("${mbrMobile3}");

					//knits 버그수정
					$("#nameArea").show();
					$("#mbrNm").hide();
					
				}else if($(this).val() == 2){

					$("#mbrZipcode").val("");
					$("#mbrAddr").val("");
					$("#mbrAddrDtl").val("");

					$("#mbrMobile1").val("010");
					$("#mbrMobile2").val("");
					$("#mbrMobile3").val("");
					
					//knits 버그수정
					$("#mbrNm").val("");
					$("#nameArea").hide();
					$("#mbrNm").show();
					
				}else{
					return;
				}
			});
		}


		/*고장증상*/
		$("#ascodeLev1").bind("change",function(){
			var codeTp = "";
			if($("#ascodeLev1").val() == ""){
				codeTp = "L";
				var data = $.lvalue;
			}else{
				codeTp = "M";
				data = $("#ascodeLev1").val();
			}
			fnAjax("ascodeList.action", {"codeTp":codeTp,"itmGubun":$.lvalue,"lvalue":data,"asBc":"100"},	//20190507 asBc 추가 [A/S증상대분류]
					function(data, dataType){
						if($("#ascodeLev1").val() == ""){
							if(data.length > 0){
								$("#ascodeLevType").show();
								$("#ascodeLev1").html("<option value=''>고장증상 대분류</option>");
								for (key in data) {
									$("#ascodeLev1").append("<option value='"+data[key].value+"'>"+data[key].label+"</option>");
								}
							}else{
								$("#ascodeLevType").hide();
							}
						}else{
							$("#ascodeLev2").html("<option value=''>고장증상 중분류 </option>");
							for (key in data) {
								$("#ascodeLev2").append("<option value='"+data[key].value+"'>"+data[key].label+"</option>");
							}
						}
					},"POST"
				);

		});

		/*탭이벤트*/
		$('.list_goods a').bind("click",function(){
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
			if($(this).index() == 0 || $(this).index() == 1 || $(this).index() == 2 ){
// 				$.lvalue = "m1";
				$("#inpBc").val("AS110100");
			}else if($(this).index() == 4){
// 				$.lvalue = "m2";
				$("#inpBc").val("AS110200");
			}else{
// 				$.lvalue = "m3";
				$("#inpBc").val("AS110300");
			}

			if($(this).index() == 0){
				$.lvalue = "SDH0809";
				$("#itmGubun").val("SDH0809"); //비데
			}
			if($(this).index() == 1){
				$.lvalue = "SDH0817";
				$("#itmGubun").val("SDH0817");//위생도기
			}
			if($(this).index() == 2){
				$.lvalue = "SDH0802";
				$("#itmGubun").val("SDH0802"); //수전
			}
			if($(this).index() == 3){
				$.lvalue = "SDH0818";
				$("#itmGubun").val("SDH0818"); //블랜더
			}
			if($(this).index() == 4){
				$.lvalue = $(this).val();
				$("#itmGubun").val($(this).val());
				$("#ascodeLev1").html("<option value=''>고장증상 대분류</option>");
				$("#ascodeLev2").html("<option value=''>고장증상 중분류 </option>");
				$.modelList();
				alert("선택하는 제품군은 제품별 AS조치처가 달라 "+
						"전화상담에약 서비스만 가능합니다.\n"+
						"출장서비스가 필요하신 경우 통화 중 상담사가"+
						"안내하여 드릴 것입니다.");
				return;
			}

			$("#modelItemCd").val($(this).index());
			$("#ascodeLev1").val("");
			$("#ascodeLev2").html("<option value=''>고장증상 중분류 </option>");
			$("#ascodeLev1").change();
			$.modelList();
		});
		/*품목 이벤트 - 이누스바스 선택시 */
		$("#itmGubunList").bind("change",function(){
			$("#itmGubun").val($(this).val());
			$.lvalue = $(this).val();
			$("#ascodeLev1").val("");
			$("#ascodeLev2").val("");
			$("#ascodeLev1").change();
			$.modelList();

		});
		/*모델리스트*/
		$.modelList = function(){

			var url = "modelList.action?itmGubun="+$.lvalue;
            // prepare the data
            var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'label' },
                    { name: 'value' }
                ],
                url: url,
                async: false
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
            // Create a jqxComboBox
            $("#modelList").jqxComboBox({ selectedIndex: -1, source: dataAdapter, displayMember: "label", valueMember: "value", width: 300, height: 36,	promptText: "모델을 선택하세요!"});
            // trigger the select event.

// 			fnAjax("modelList.action", {"itmGubun":$.lvalue},
// 				function(data, dataType){
// 					$("#model").html("<option value=''>선택하세요!</option>");

// 					if(data.length > 0){
// 						$("#modelType").show();
// 						for (key in data) {
// 							$("#model").append("<option value='"+data[key].value+"'>"+data[key].label+"</option>");
// 						}
// 					}else{
// 						$("#modelType").hide();
// 					}


// 				},"POST"
// 			);
		}


		/** 주소 찾기 **/
		$("#addrBtn").click(function(){
			new daum.Postcode({
		        oncomplete: function(data) {
		        	// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
	                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
	                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
	                var fullAddr = ''; // 최종 주소 변수
	                var extraAddr = ''; // 조합형 주소 변수
	                // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
	                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
	                    fullAddr = data.roadAddress;
	                } else { // 사용자가 지번 주소를 선택했을 경우(J)
	                    fullAddr = data.jibunAddress;
	                }
	                // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
	                if(data.userSelectedType === 'R'){
	                    //법정동명이 있을 경우 추가한다.
	                    if(data.bname !== ''){
//		                        extraAddr += data.bname;
	                    }
	                    // 건물명이 있을 경우 추가한다.
	                    if(data.buildingName !== ''){
//		                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
	                    }
	                    // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
//		                    fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
	                    extraAddr = (extraAddr !== '' ? '('+ extraAddr +') ' : '');
	                }
	                // 우편번호와 주소 정보를 해당 필드에 넣는다.
	                $('#mbrZipcode').val(data.zonecode); //5자리 새우편번호 사용
	                $('#mbrAddr').val(fullAddr);
	                // 커서를 상세주소 필드로 이동한다.
	                $('#mbrAddrDtl').val(extraAddr);
	                $('#mbrAddrDtl').focus();
		        }
		    }).open();
		});

		$(".rsv li").bind("click", function(){
			var idx =  $(".rsv li").index(this);

			if($(this).attr("class") != "f"){
				$('.rsv li').removeClass('s');
				$(this).addClass("s");


				$("#csTimeSeq").val($(this).attr("value"));
				$("#selectTimeText").text($(this).text());
			}else{
				alert("선택하신 시간은 예약할 수 없습니다.");
			}
		});


		/*----------------------------- 전송이벤트 - 저장버튼 클릭 이벤트 Start -----------------------------*/
		 $("#okBtn").bind("click",function(){
			if(!strLength($("#comment").val())){
				alert('1000byte를 넘을 수 없습니다.');
				return false;
			}

			if(!$("input:checkbox[id=privteCk]").is(":checked")){
				alert('개인정보 수집 및 이용 동의를 해주세요.');
				return false;
			}

			var item = $("#modelList").jqxComboBox('getSelectedItem');
			if(item == null){
				alert("모델을 선택해주세요!");
				$("#model").val("");
				return;
			}else{
				$("#model").val(item.value);
			}

			//knits ie에서는 mbrNm 정의안됨 오류발생으로 주석처리
			//$("#mbrNm").val(mbrNm.value);
			
			fnSubmit("workForm","예약신청");
		});
		/*----------------------------- 전송이벤트 - 저장버튼 클릭 이벤트 End -----------------------------*/
	}

	function strLength(str){
		var len = 0;
	    for (var i = 0; i < str.length; i++) {
	        if (escape(str.charAt(i)).length == 6) {
	            len++;
	        }
	        len++;
	    }
	    if(len>1000){
	    	return false;
	    }
	    return true;
	}

	function fnByteCheck(e, byteLength){
		var text = $(e).val();
		var textLength = 0;
		for(var i = 0; i < text.length; i++){
			/* if(escape(text.charAt(i)).length == 6){
				textLength++;
			}
			textLength++;
			*/
			if(encodeURIComponent(text.charAt(i)).length == 9){// 한글
				textLength += 2;
			}else if(encodeURIComponent(text.charAt(i)).length == 1){// 영문
				textLength += 1;
			}else{ //특수문자
				textLength += 2;
			}
		}
		var cutbyLenText = cutByLen(text, byteLength);
		if(textLength > byteLength){
			$("#comment").val("");
			$("#comment").val(cutbyLenText);
			$("#comment").html("");
			$("#comment").html(cutbyLenText);
			$('#chkByte').text("");
			$('#chkByte').text("1000/1000");
		}else{
			$('#chkByte').text("");
			$('#chkByte').text(textLength+"/1000");
		}
	}

	function cutByLen(str, maxByte) {
		 for(b=i=0;c=str.charCodeAt(i);) {
			 b+=c>>7?2:1;
			 if(b > maxByte){
				 break;
			 }
			 i++;
		 }
		 return str.substring(0,i);
	 }

	function spanText(day){

		var spanMonth = m_oMonth.getMonth()+1;
		if(spanMonth < 10){
			spanMonth = '0' + spanMonth;
		}

		if(day < 10){
			day = '0' + day;
		}

		$('.rsv td').removeClass('s');
		$("#"+day).addClass("s");


		var spanDay = $("#year").val()+"-"+spanMonth+"-"+day

// 		$("#bookingDt").val(spanDay);	//20191119 주석처리
		$("#selectText").text(spanDay);

		//20191119 주석처리
// 		fnAjax("csTimeMpgList.action", {"bookingDt":spanDay},
// 				function(data, dataType){
// 					$('.rsv li').removeClass('f');
// 					for (key in data) {
// 						if(data[key].csTimeLimit == 'N'){
// 							$(".rsv li[value="+data[key].csTimeSeq+"]").addClass("f");
// 						}

// 						$(".rsv li[value="+data[key].csTimeSeq+"]").html(data[key].csTimeValue);
// 					}

// 					$("#selectTimeText").text("시간을 선택하세요");
// 				},"POST"
// 			);

	}

	function printCalendar() {

	    /* 달력 UI 생성 */
		$.renderCalendar = function() {

			var postData = $("#calendarFrm").serializeArray();
			$.ajax({
			    url : "calendar.action",
			    type: "POST",
			    data : postData,
			    success:function(data, textStatus, jqXHR)
			    {
			    	var joinMonth = parseInt($("#month").val());

					if($("#month").val() == ''){
						joinMonth = todayMonth;
						$("#year").val(todayYear);
						$("#month").val("0"+(todayMonth+1));
					}

					var arrTable = [];

					arrTable.push('<table class="rsv">');
					arrTable.push('<caption>달력</caption>');
					arrTable.push('<thead><tr>');

					var arrWeek = "일월화수목금토".split("");

					for(var i=0, len=arrWeek.length; i<len; i++) {
						arrTable.push('<th scope="col">' + arrWeek[i] + '</th>');
					}
					arrTable.push('</tr></thead>');
					arrTable.push('<tbody>');

					var oStartDt = new Date(m_oMonth.getTime());
			        // 1일에서 1일의 요일을 빼면 그 주 첫번째 날이 나온다.
					oStartDt.setDate(oStartDt.getDate() - oStartDt.getDay());


					for(var i=0; i<100; i++) {

						var dayValue = oStartDt.getDate();
						if(dayValue < 10){
							dayValue = '0' + dayValue;
						}

						if(i % 7 == 0) {
							arrTable.push('<tr>');
						}

						var sClass = '';
			            sClass += m_oMonth.getMonth() != oStartDt.getMonth() ? 'not-this-month ' : '';
						sClass += i % 7 == 0 ? 'sun' : '';
						sClass += i % 7 == 6 ? 'sat' : '';

						var notMonth = m_oMonth.getMonth() != oStartDt.getMonth() ? 'notMonth ' : '';

			            if(notMonth != ''){
			            	arrTable.push('<td></td>');
			            }else{
			            	var holly = "N";
							if(data.length > 0){
								for (key in data) {
									if(data[key].workDd == dayValue){
										holly = "Y";
										break;
									}
								}
							}

							if(i % 7 == 0 || i % 7 == 6){  //주말제외
								arrTable.push('<td id="'+dayValue+'" class="'+sClass+'">' + oStartDt.getDate() + '</td>');
							}else if(todayYear < $("#year").val()){
								if(holly == "N"){
									arrTable.push('<td id="'+dayValue+'" class="y" onclick="spanText('+oStartDt.getDate()+')"">' + oStartDt.getDate() + '</td>');
									}else{
										arrTable.push('<td id="'+dayValue+'" class="'+sClass+'">' + oStartDt.getDate() + '</td>');
									}
							}else if(todayYear == $("#year").val() && todayMonth < joinMonth){
								if(holly == "N"){
									arrTable.push('<td id="'+dayValue+'" class="y" onclick="spanText('+oStartDt.getDate()+')"">' + oStartDt.getDate() + '</td>');
									}else{
										arrTable.push('<td id="'+dayValue+'" class="'+sClass+'">' + oStartDt.getDate() + '</td>');
									}
							}else if(todayYear == $("#year").val() && todayMonth == joinMonth){
								if(todayDate < oStartDt.getDate() ){
									if(holly == "N"){
									arrTable.push('<td id="'+dayValue+'" class="y" onclick="spanText('+oStartDt.getDate()+')"">' + oStartDt.getDate() + '</td>');
									}else{
										arrTable.push('<td id="'+dayValue+'" class="'+sClass+'">' + oStartDt.getDate() + '</td>');
									}
								}else{
									arrTable.push('<td id="'+dayValue+'" class="'+sClass+'">' + oStartDt.getDate() + '</td>');
								}
							}else{
								arrTable.push('<td id="'+dayValue+'" class="'+sClass+'">' + oStartDt.getDate() + '</td>');
							}
			            }
						oStartDt.setDate(oStartDt.getDate() + 1);

						if(i % 7 == 6) {
							arrTable.push('</tr>');
							if(m_oMonth.getMonth() != oStartDt.getMonth()) {
								break;
							}
						}
					}
					arrTable.push('</tbody></table>');

					$('#calendar').html(arrTable.join(""));
					$.changeMonth();

			    },
			    error: function(jqXHR, textStatus, errorThrown)
			    {
			    	alert("통신에 실패 하였습니다. 관리자에게 문의해 주세요.");
			    }
			}); // ajax

		}

		/* Next, Prev 버튼 이벤트 */
		$.initEvent = function() {
			$('#btnPrev').bind("click",function(){
				$.onPrevCalendar();
			});

			$('#btnNext').bind("click",function(){
				$.onNextCalendar();
			});
		}

	    /* 이전 달력 */
		$.onPrevCalendar = function() {
			m_oMonth.setMonth(m_oMonth.getMonth() - 1);
			var spanMonth = m_oMonth.getMonth()+1;
			if(spanMonth < 10){
				spanMonth = '0' + spanMonth;
			}
			$("#month").val(spanMonth);

			if($("#month").val() > 11){
				$("#year").val(m_oMonth.getFullYear());
			}

			$.renderCalendar();
		}

	    /* 다음 달력 */
		$.onNextCalendar = function() {
			m_oMonth.setMonth(m_oMonth.getMonth() + 1);

			var spanMonth = m_oMonth.getMonth()+1;
			if(spanMonth < 10){
				spanMonth = '0' + spanMonth;
			}
			$("#month").val(spanMonth);

			if($("#month").val() < 2){
				$("#year").val(m_oMonth.getFullYear());
			}

			$.renderCalendar();

		}

	    /* 달력 이동되면 상단에 현재 년 월 다시 표시 */
		$.changeMonth = function() {
			$('#currentDate').text($.getYearMonth(m_oMonth).substr(0,9));
		}

	    /* 날짜 객체를 년 월 문자 형식으로 변환 */
		$.getYearMonth = function(oDate) {
			var spanMonth = oDate.getMonth()+1;
			if(spanMonth < 10){
				spanMonth = '0' + spanMonth;
			}
			return oDate.getFullYear() + '년 ' + spanMonth + '월';
		}
	}

	function keydown(seq) {
		  var keycode = '';
		  if(window.event) keycode = window.event.keyCode;
		 if(keycode == 13){
			 if(seq == 1){
		 	 	actionLogin();
			 }
		 }
		  return false;
		}

	function keydownAjax(seq) {
		  var keycode = '';
		  if(window.event) keycode = window.event.keyCode;
		 if(keycode == 13){
			 if(seq == 1){
		 	 	actionLoginAjax();
			 }
		 }
		  return false;
		}


		function actionLogin() {
			var _mbrId = $(document.loginForm.mbrId).val().length;
			var _mbrPw = $(document.loginForm.mbrPw).val().length;
			if(_mbrId == 0){
				alert("아이디를 입력하세요");
				$(document.loginForm.mbrId).focus();
				return false;
			}else if (_mbrId.length < 4 || _mbrId.length > 16) {
				alert("아이디는 영문숫자조합 최소 4자에서 최대 16자까지 입력 가능합니다");
				$(document.loginForm.mbrId).focus();
				return false;
			}
			if(_mbrPw == 0){
				alert("비밀번호를 입력하세요");
				$(document.loginForm.mbrPw).focus();
				return false;
			}else if (_mbrPw.length < 4 || _mbrPw.length > 16) {
				alert("패스워드는 4~16자까지만 입력 가능합니다.");
				$(document.loginForm.mbrPw).focus();
				return false;
			}
	        document.loginForm.action="/ISDS/mm/actionLogin.action";
	        document.loginForm.submit();
		}


		function actionAjaxLogin() {
			var _mbrId = $("#mbrIdA").val().length;
			var _mbrPw = $("#mbrPwA").val().length;
			if(_mbrId == 0){
				alert("아이디를 입력하세요");
				$(document.workForm.mbrId).focus();
				return false;
			}else if (_mbrId.length < 4 || _mbrId.length > 16) {
				alert("아이디는 영문숫자조합 최소 4자에서 최대 16자까지 입력 가능합니다");
				$(document.workForm.mbrId).focus();
				return false;
			}
			if(_mbrPw == 0){
				alert("비밀번호를 입력하세요");
				$(document.workForm.mbrPw).focus();
				return false;
			}else if (_mbrPw.length < 4 || _mbrPw.length > 16) {
				alert("패스워드는 4~16자까지만 입력 가능합니다.");
				$(document.workForm.mbrPw).focus();
				return false;
			}

			fnAjax("/ISDS/mm/actionLoginAjax.action", {"mbrId":$("#mbrIdA").val(),"mbrPw":$("#mbrPwA").val(),"saveIdCookie":$("#saveIdCookieA").val()},
					function(data, dataType){
						if(data.status == "ok"){
							$(".l-conts").show();
							$(".m-conts").hide();
							$("#nameArea").text(data.mbrNm);
							$("#mbrNm").val(data.mbrNm);
							$("#mbrZipcode").val(data.mbrNm);
							$("#mbrAddr").val(data.mbrAddr);
							$("#mbrAddrDtl").val(data.mbrAddrDtl);

							$("#mbrMobile1").val(data.mbrMobile.split("-")[0]);
							$("#mbrMobile2").val(data.mbrMobile.split("-")[1]);
							$("#mbrMobile3").val(data.mbrMobile.split("-")[2]);
							$(".l-conts-choose").hide();

						}else{
							$(".m-conts").show();
							$(".l-conts").hide();
							alert(data.msg);
						}
					},"POST"
			);

		}

	</script>
</head>

<body>
	<form id="calendarFrm" name="calendarFrm" method="post">
		<input type="hidden" id="year" name="year" value="${fn:split(iConstant.nowYmd(),'-')[0]}"/>
		<input type="hidden" id="month" name="month" value="${fn:split(iConstant.nowYmd(),'-')[1]}"/>
	</form>

	<form id="workForm" name="workForm" action="csSave.action" method="post" enctype="multipart/form-data">

		<input type="hidden" id="model" name="model" value=""/>
	<div class="sub">
		<div class="box_guide">
			<h2 class="tit">출장서비스 예약</h2>
			<div class="txt_bx">
				<p class="mark">출장서비스를 예약하시면 전문 엔지니어가 확인 후 전화 드리겠습니다.</p>
				<p>출장날짜와 시간은 담당 엔지니어를 통해 조정 가능합니다.<br>원활한 출장서비스를 위해 상담사와 통화 후 출장서비스를 진행 할 수 있습니다.<br>전화상담 예약을 원하실 경우 [홈 > 서비스 예약 > 전화상담] 메뉴를 이용해주시기 바랍니다.</p>
				<a href="/ISDS/view/view.do?pageCd=resGuid" class="svn btn01Type">서비스요금 안내</a>
			</div>

			<div class="page_location">
				<ul>
					<li><a href="javascript:;"><span class="home"><span class="hidden">home</span></span></a></li>
					<li><a href="javascript:;">서비스예약</a></li>
					<li class="last"><a href="javascript:;">출장서비스 예약</a></li>
				</ul>
			</div>
		</div>
		<!--// box_guide -->
		<div class="guide_btn_list">
			<a href="/ISDS/bbt/bbt00004.do?pageCd=BBM00004" class="fap"><strong class="hv">자주하는 질문</strong><span>유사한 증상 찾아보기</span></a>
			<a href="/ISDS/bbt/bbt00004.do?pageCd=BBM00007" class="mtd"><strong class="hv">간단 조치 방법</strong><span>제품별 간단 조치 방법</span></a>
			<a href="/ISDS/bbt/bbt00008.do?pageCd=BBM00002" class="mvi"><strong class="hv">동영상 가이드</strong><span>쉽고 간단한 영상 조치방법</span></a>
		</div>
		<!--// guide_btn_list -->
		<div class="step_bx st01"><h3>제품 증상 선택<span>필수 입력사항</span></h3></div>
		<!--// step01 title -->
		<div class="list_goods">
			<a href="javascript:;" class="gd01 active">비데</a>
			<a href="javascript:;" class="gd02">위생도기</a>
			<a href="javascript:;" class="gd03">수전</a>
			<a href="javascript:;" class="gd04">블렌더</a>
			<a href="javascript:;" class="gd05 last">이누스바스</a>
		</div>
		<!--// 탭메뉴 리스트 -->
		<div class="tblType01 mt30">
			<table>
				<caption>제품선택,고장증상 작성</caption>
				<tbody>
					<tr>
						<th scope="row" class="star"><label for="modelList">모델선택</label></th>
						<td>
<!-- 							<div class="select_bx"> -->
<!-- 								<select name="model" id="model" title="모델선택"></select> -->
<!-- 							</div> -->

							<div id='modelList'></div>
						</td>
					</tr>
					<tr>
						<th scope="row" class="star"><label for="sct01">고장증상</label></th>
						<td>
							<div class="select_bx">
								<select name="ascodeLev1" id="ascodeLev1"  title="고장증상 대분류" class="validation[required]" >
									<option value=''>고장증상 대분류</option>
								</select>
								<select name="ascodeLev2" id="ascodeLev2" title="고장증상 중분류" class="twoPart validation[required]">
									<option value=''>고장증상 중분류</option>
								</select>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row" class="star"><label for="comment">고장증상 상세</label></th>
						<td>
							<div class="txtArea pb10">
							<textarea id="comment" name="comment" class="validation[required]" title="고장증상 상세" style="font-family: Malgun Gothic, 돋음, Dotum,Arial,sans-serif" onkeyUp="fnByteCheck(this,'1000');" placeholder="고장증상에 대한 상세내용을 입력하시면 더욱 신속히 처리해 드리겠습니다.예) 비데 불이 깜빡거려요"></textarea>
								<div>
									<span class="info">* 최대 1000byte(한글 500자, 영문 1000자)까지 가능</span>
									<span class="cur" id="chkByte">0/1000 byte</span>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!--// step01 content -->
		<div class="step_bx st02"><h3>고객 정보 입력<span>필수 입력사항</span></h3></div>
		<!--// step02 title -->
				<div class="m-conts" style="display:none;">
					<strong><span class="f_blue f_bold">로그인</span> 후 이용하실 수 있습니다.</strong>
					<div class="usr_bx">
						<div class="member">
							<h3>회원</h3>
							<fieldset>
								<legend>회원 로그인</legend>
								<div class="input_bx log" style="margin-top:20px;">
									<input type="text" name="mbrId" id="mbrIdA" placeholder="아이디" class="id" onkeydown="keydownAjax(1);"/>
									<input type="password" name="mbrPw" id="mbrPwA" placeholder="비밀번호" class="pw mt10" onkeydown="keydownAjax(1);" style="text-indent: 0px;"/>
								</div>
								<div class="btn_bx" style="margin-top:20px;">
									<a href="javascript:;" class="btn btn02Type" onclick="actionAjaxLogin();">로그인</a>
								</div>
							</fieldset>
						</div>
						<div class="member non">
							<h3>비회원</h3>
							<fieldset>
							<div class="gray_bx">
								<p>비회원일 경우 실명인증 후 서비스예약이 가능합니다.<br>아래 휴대폰인증 버튼을 눌러주세요.</p>
								<div class="btnWrap ac">
									<a href="javascript:;" onclick="fnPopup('hp');" class="btn btn01Type">휴대폰인증</a>
								</div>
							</div>
							</fieldset>
						</div>
					</div>
					<!--// usr_bx -->
				</div>

				<div class="l-conts"  style="display:none;">
				<div class="rdi_bx_wrap l-conts-choose">
					<div class="rdibox">
						<input type="radio" id="sameif" class="" name="mbr" value="1" checked="checked"><i></i>
						<label for="sameif">회원정보와 동일</label>
					</div>
					<div class="rdibox">
						<input type="radio" id="newif" class="" name="mbr" value="2"><i></i>
						<label for="newif">새로운 정보 입력</label>
					</div>
				</div><!--// rdi_bx_wrap -->

				<div class="tblType01">
				<table>
					<caption>고객 정보 입력란</caption>
					<tbody>
						<tr>
							<th scope="row" class="star"><label for="model">성명</label></th>
							<td>
								<span id="nameArea">${mbrNm}</span>
								<div class="call_bx">
									<input type="text" id="mbrNm" name="mbrNm" value="${mbrNm}" class="validation[required]" title="성명" style="display: none;">
								</div>
							</td>
						</tr>
						<tr>
							<th scope="row" class="star"><label for="call">연락가능번호</label></th>
							<td>
								<div class="call_bx">
									<html:selectList name='mbrMobile1' id='mbrMobile1'  selectedValue="${mbrMobile1}" optionValues='|010|011|016|017|018|019' optionNames='선택|010|011|016|017|018|019' script='class="pay_input_size07"'/>
									<div class="centerNum">
									<input type="text" id="mbrMobile2" name="mbrMobile2" class="validation[numberOnlyLeft,required]" title="연락가능번호" value="${mbrMobile2}" maxlength="4">
									</div>
									<input type="text" id="mbrMobile3" name="mbrMobile3" class="validation[numberOnlyLeft,required]" title="연락가능번호" value="${mbrMobile3}" maxlength="4">
								</div>
								<span>* 통화가 되지 않을 경우 예약이 취소될 수 있으니 전화번호를 정확하게 입력해주세요.</span>
							</td>
						</tr>
						<tr>
							<th scope="row" class="star"><label for="adrs">주소</label></th>
							<td>
								<div class="adrs_bx">
									<div class="post">
										<input type="text" name="mbrZipcode" id="mbrZipcode" maxlength="7" class="validation[required]" title="우편번호" readonly="readonly" value="${mbrZipcode}"/>
										<a href="javascript:;" id="addrBtn" class="btn01Type ml10">우편번호 찾기</a>
									</div>
									<input type="text" id="mbrAddr" name="mbrAddr" class="validation[required]" title="주소" readonly="readonly" value="${mbrAddr}"/>
									<input type="text" id="mbrAddrDtl" name="mbrAddrDtl" value="${mbrAddrDtl}" />
								</div>
							</td>
						</tr>
						<tr>
							<th scope="row"><label for="file">첨부파일</label></th>
							<td>
								<div class="multi_file">
									<div class="file_add">

									</div>
									<div class="file_ex">
									<span>* 이미지 첨부만 가능.</span><span>0/50 MB<br/></span>
									<br/><br/>
									</div>
									<div class="file_lst">
									<c:forEach items="${fileList}" var="fileList" varStatus="status">
										<div class="file_lst_bx">
											<span class="input_txt" onclick="exDown('${fileList.attchCd}');"  style="cursor:pointer"><c:out value="${fileList.attchFileNm}" /></span>
<!-- 											<button class="btn_del"><span class="blind" >파일삭제</span></button> -->
										</div>
					          		</c:forEach>
									</div>
								</div><!-- fileUpload -->
								<dl class="img_file_guide">
									<dt>이미지 업로드 가이드</dt>
									<dd><p>품목별 업로드 가이드를 확인하세요.</p>
										<div class="rdi_bx_wrap" id="infoDiv">
											<div class="rdibox">
												<input type="radio" id="goods01" class="" name="info" value="0" checked="checked"><i></i>
												<label for="goods01">비데</label>
											</div>
											<div class="rdibox">
												<input type="radio" id="goods02" class="" name="info" value="1"><i></i>
												<label for="goods02">위생도기</label>
											</div>
											<div class="rdibox">
												<input type="radio" id="goods03" class="" name="info" value="2"><i></i>
												<label for="goods03">수전</label>
											</div>
											<div class="rdibox">
												<input type="radio" id="goods04" class="" name="info" value="3"><i></i>
												<label for="goods04">블렌더</label>
											</div>
											<div class="rdibox">
												<input type="radio" id="goods05" class="" name="info" value="4"><i></i>
												<label for="goods05">이누스바스</label>
											</div>
										</div><!--// rdi_bx_wrap -->
										<div class="ex_img_bx" id="infoImg0" >
											<span>예시)</span>
											<p style="padding-top:0px;width:200px;"><img src="/common/img/sub/SS-365.png" style="width:180px;height:165px;"></p>
											<p style="padding-top:0px;width:200px;"><img src="/common/img/sub/UB-FH6515.png" style="width:180px;height:165px;"></p>
										</div>
										<div class="ex_img_bx" id="infoImg1" style="display:none;">
											<span>예시)</span>
											<p style="padding-top:0px;width:200px;"><img src="/common/img/sub/C853.png" style="width:180px;height:165px;"></p>
										</div>
										<div class="ex_img_bx" id="infoImg2" style="display:none;">
											<span>예시)</span>
											<p style="padding-top:0px;width:200px;"><img src="/common/img/sub/G0110.png" style="width:180px;height:165px;"></p>
										</div>
										<div class="ex_img_bx" id="infoImg3" style="display:none;">
											<span>예시)</span>
											<p style="padding-top:0px;width:200px;"><img src="/common/img/sub/V38_1.png" style="width:180px;height:165px;"></p>
										</div>
										<div class="ex_img_bx" id="infoImg4" style="display:none;">
											<span>예시)</span>
											<p style="padding-top:0px;width:200px;"><img src="/common/img/sub/1.png" style="width:180px;height:165px;background-color:silver;"></p>
											<p style="padding-top:0px;width:200px;"><img src="/common/img/sub/2.png" style="width:180px;height:165px;"></p>
										</div>
									</dd>
								</dl>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		<div class="person_info_agree mt30" >
			<span class="star">개인정보 수집 및 이용 동의</span>
			<p style="line-height: 23px">
				inus 서비스센터 개인정보 취급방침<br>
				<br>
				<inus 서비스센터>('http://cs.inusbath.com'이하 'inus 서비스센터
				홈페이지')은(는) 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을
				원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.<br>
				<br>
				<inus 서비스센터>('inus 서비스센터 홈페이지') 은(는) 회사는 개인정보처리방침을 개정하는 경우
				웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.<br>
				<br>
				○ 본 방침은부터 2017년 10월 1일부터 시행됩니다.<br>
				<br>
				개인정보의 처리 목적 <inus 서비스센터>('http://cs.inusbath.com'이하 'inus
				서비스센터 홈페이지')은(는) 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는
				사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.<br>
				가. 홈페이지 회원가입 및 관리<br>
				고충처리, 분쟁 조정을 위한 기록 보존 등을 목적으로 개인정보를 처리합니다.<br>
				나. 민원사무 처리<br>
				민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.<br>
				다. 재화 또는 서비스 제공<br>
				서비스 제공, 본인인증 등을 목적으로 개인정보를 처리합니다.<br>
				<br>
				2. 개인정보 파일 현황<br>
				1. 개인정보 파일명 : 개인정보 수집 파일 현황<br>
				- 개인정보 항목 :이메일, 휴대전화번호, 비밀번호, 이름, 접속 로그, 쿠키<br>
				- 수집방법 : 홈페이지, 서면양식, 전화/팩스<br>
				- 보유근거 : 개인정보취급 방침<br>
				- 보유기간 : 3년<br>
				- 관련법령 :소비자의 불만 또는 분쟁처리에 관한 기록 : 3년(전자상거래등에서의 소비자보호에 관한 법률) <br>
				<br>
				3. 개인정보처리 위탁<br>
				① <inus 서비스센터>('inus 서비스센터 홈페이지')은(는) 원활한 개인정보 업무처리를 위하여 다음과
				같이 개인정보 처리업무를 위탁하고 있습니다.<br>
				② <inus 서비스센터>('http://cs.inusbath.com'이하 'inus 서비스센터
				홈페이지')은(는) 위탁계약 체결 시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지,
				기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에
				명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.<br>
				③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체 없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.<br>
				<br>
				4.정보주체의 권리,의무 및 그 행사방법 이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.<br>
				① 정보주체는 inus 서비스센터(‘http://cs.inusbath.com’이하 ‘inus 서비스센터 홈페이지) 에
				대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.<br>
				1. 개인정보 열람요구<br>
				2. 오류 등이 있을 경우 정정 요구<br>
				3. 삭제요구<br>
				4. 처리정지 요구<br>
				② 제1항에 따른 권리 행사는 inus 서비스센터(‘http://cs.inusbath.com’이하 ‘inus
				서비스센터 홈페이지) 에 대해 개인정보 보호법 시행규칙 별지 제8호 서식에 따라 서면, 전자우편, 모사전송(FAX) 등을
				통하여 하실 수 있으며 <기관 /회사명>(‘사이트URL’이하 ‘사이트명) 은(는) 이에 대해 지체 없이
				조치하겠습니다.<br>
				③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 <기관 /회사명>(‘사이트URL’이하
				‘사이트명) 은(는) 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.<br>
				④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.<br>
				이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.<br>
				<br>
				5. 처리하는 개인정보의 항목 작성<br>
				① <inus 서비스센터>('http://cs.inusbath.com'이하 'inus 서비스센터
				홈페이지')은(는) 다음의 개인정보 항목을 처리하고 있습니다.<br>
				- 필수항목 : 이메일, 휴대전화번호, 이름, 접속 로그, 쿠키<br>
				② 추가정보 제공을 원하지 않는 경우 수집하지 않으며, 미동의로 인해 이용상의 어떤 불이익도 발생하지 않습니다.<br>
				<br>
				6. 개인정보의 파기<inus 서비스센터>('inus 서비스센터 홈페이지')은(는) 원칙적으로 개인정보
				처리목적이 달성된 경우에는 지체 없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.<br>
				- 파기절차<br>
				이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라
				일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로
				이용되지 않습니다.-파기기한이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에,
				개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가
				불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다. <br>
				- 파기방법<br>
				전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.<br>
				종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다. <br>
				<br>
				7. 개인정보의 안전성 확보 조치 <inus 서비스센터>('inus 서비스센터 홈페이지')은(는)
				개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.<br>
				1. 정기적인 자체 감사 실시<br>
				개인정보 취급 관련 안정성 확보를 위해 정기적(반기 1회)으로 자체 감사를 실시하고 있습니다<br>
				2. 개인정보 취급 직원의 최소화 및 교육<br>
				개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.<br>
				3. 내부관리계획의 수립 및 시행<br>
				개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.<br>
				4. 해킹 등에 대비한 기술적 대책<br>
				<inus 서비스센터>('inus 서비스센터 홈페이지')은 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출
				및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고
				기술적/물리적으로 감시 및 차단하고 있습니다<br>
				5. 접속기록의 보관 및 위,변조 방지<br>
				개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관, 관리하고 있으며, 접속 기록이 위,변조 및 도난, 분실되지
				않도록 보안기능 사용하고 있습니다.<br>
				6. 개인정보에 대한 접근 제한<br>
				개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한
				조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.<br>
				7. 문서보안을 위한 잠금 장치 사용<br>
				개인정보가 포함된 서류, 보조저장매체 등을 잠금 장치가 있는 안전한 장소에 보관하고 있습니다.<br>
				8. 비 인가자에 대한 출입 통제<br>
				개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.<br>
				<br>
				8. 개인정보 보호책임자 작성<br>
				① inus 서비스센터(‘http://cs.inusbath.com’이하 ‘inus 서비스센터 홈페이지) 은(는)
				개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와
				같이 개인정보 보호책임자를 지정하고 있습니다.<br>
				<br>
				▶ 개인정보 보호책임자<br>
				성명 :홍덕기<br>
				직급 :상무<br>
				연락처 :02-3218-6873, foreverkhm@isdongseo.co.kr, 02-512-5100<br>
				※ 개인정보 보호 담당부서로 연결됩니다.<br>
				<br>
				▶ 개인정보 보호 담당부서<br>
				부서명 : 경영개선팀<br>
				담당자 : 김성욱<br>
				연락처 : 02-3218-6836, 990029@isdongseo.co.kr , 02-512-5100<br>
				<br>
				② 정보주체께서는 inus 서비스센터(‘http://cs.inusbath.com’이하 ‘inus 서비스센터 홈페이지)
				의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보
				보호책임자 및 담당부서로 문의하실 수 있습니다. inus 서비스센터(‘http://cs.inusbath.com’이하
				‘inus 서비스센터 홈페이지) 은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다<br>
				<br>
				9. 개인정보 열람청구<br>
				① 정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. <inus 서비스센터>(‘http://cs.inusbath.com'이하
				'inus 서비스센터 홈페이지')은(는) 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.<br>
				<br>
				▶ 개인정보 열람청구 접수·처리 부서<br>
				부서명 : 인사팀<br>
				담당자 : 이영렬<br>
				연락처 : 02-3218-6622, 202juno@isdongseo.co.kr, 02-512-5100<br>
				<br>
				② 정보주체께서는 제1항의 열람청구 접수․처리부서 이외에, 행정안전부의 ‘개인정보보호 종합지원 포털’
				웹사이트(www.privacy.go.kr)를 통하여서도 개인정보 열람청구를 하실 수 있습니다<br>
				<br>
				▶ 행정안전부 개인정보보호 종합지원 포털 → 개인정보 민원 → 개인정보 열람등 요구 (본인확인을 위하여
				아이핀(I-PIN)이 있어야 함)<br>
				<br>
				10.권익침해 구제방법<br>
				아래의 기관은 <사업자 /단체명> 과는 별개의 기관으로서, <inus 서비스센터>(‘http://cs.inusbath.com'이하
				'inus 서비스센터 홈페이지')의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이
				필요하시면 문의하여 주시기 바랍니다.<br>
				<br>
				▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영) <br>
				- 소관업무 : 개인정보 침해사실 신고, 상담 신청 <br>
				- 홈페이지 : privacy.kisa.or.kr <br>
				- 전화 : (국번없이) 118 <br>
				- 주소 : (138-950) 서울시 송파구 중대로 135 한국인터넷진흥원 개인정보침해신고센터 <br>
				<br>
				▶ 개인정보 분쟁조정위원회 (한국인터넷진흥원 운영 <br>
				- 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결) <br>
				- 홈페이지 : privacy.kisa.or.kr <br>
				- 전화 : (국번없이) 118 <br>
				- 주소 : (138-950) 서울시 송파구 중대로 135 한국인터넷진흥원 개인정보침해신고센터 <br>
				<br>
				▶ 대검찰청 사이버 범죄 수사단 : 02-3480-3573 (www.spo.go.kr)<br>
				▶ 경찰청 사이버 범죄 수사단 : 1566-0112 (www.netan.go.kr)<br>
				<br>
				11. 개인정보 처리방침 변경 <br>
				①이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는
				변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.<br>
			</p>
			<span class="chkbox red mt10">
				<label class="label_txt"><input type="checkbox" value="" name="" id="privteCk" /><span class="txt">개인정보 수집 및 이용에 동의합니다.</span></label>
			</span>
		</div><!--// 동의 -->
		<!-- 20191119 주석처리 -->
		<%-- 
		<!-- 20191118 필수입력사항 글자를 없앰 -->
<!-- 		<div class="step_bx st03"><h3>예약 일정 입력<span>필수 입력사항</span></h3></div> -->
		<div class="step_bx st03"><h3>예약 일정 입력</h3></div>
		<!--// step03 title -->
		<div class="rsv_wrap_bx">
			<div class="rsv_date_bx w100">
				<div class="top">
					<p class="tit">예약날짜 선택</p>
					<ul class="info_color">
						<li class="y">예약가능일</li>
						<li class="s">선택일</li>
					</ul>
				</div><!--// top -->

				<div class="body">
					<div class="ymd">
						<a href="javascript:;" id="btnPrev" class="prev">이전</a>
						<span id="currentDate"></span>
						<a href="javascript:;" id="btnNext" class="next">다음</a>
					</div>
					<div class="month" id="calendar">
					</div>
				</div><!--// body -->


				<div class="btm">선택일 : <span id="selectText" class="fc-blue">날짜를 선택하세요</span></div><!--// date_btm -->
			</div>
			<!--// rsv_date_bx -->
		</div>
		--%>
		<div class="rsv_wrap_bx"></div>  <!-- 20191119 추가 -->
		<!--// rsv_wrap_bx -->
		<p class="mark">고객 센터 운영시간은 평일 9시~18시입니다.
		                (단, 토/일,공휴일은 휴무 , 점심시간 12시~13시 제외) <br/>
		                전문 엔지니어가 확인 후 전화 드리겠습니다.</p>
		<div class="btnArea">
<!-- 			<button id="cancel" class="left">예약취소</button> -->
			<button type="button" id="okBtn" class="right">예약신청</button>
		</div>
		</div>
	</div>

	<input type="hidden" name="mbrDi" id="mbrDi" value="${mbrDi}"/>
<!-- 	<input type="hidden" name="bookingDt" id="bookingDt" class="validation[required]" title="예약날짜"/> -->
	<input type="hidden" name="bookingDt" id="bookingDt" title="예약날짜"/>
	<input type="hidden" name="csType" id="csType" value="SER" />
	<input type="hidden" name="modelItemCd" id="modelItemCd" value="" />
	<input type="hidden" name="inpBc" id="inpBc" value="" />
	<input type="hidden" name="itmGubun" id="itmGubun" value="SDH0809" />
	</form>

	<!-- 팝업 2017-08-18 추가 -->
	 <div class="layer">
		<form name="loginForm" method="post">

		<div class="bg"></div>
		<div id="layers" class="pop-layer">
			<div class="pop-container">
				<div class="pop-conts">
					<strong><span class="f_blue f_bold">로그인</span> 후 이용하실 수 있습니다.</strong>
					<div class="usr_bx">
						<div class="member">
							<h3>회원</h3>
							<fieldset>
								<legend>회원 로그인</legend>
								<div class="input_bx log">
									<input type="text" name="mbrId" id="mbrId" placeholder="아이디" class="id" onkeydown="keydown(1);"/>
									<input type="password" name="mbrPw" id="mbrPw" placeholder="비밀번호" class="pw mt10" onkeydown="keydown(1);" style="text-indent: 0px;"/>
									<div class="id_pw_bx">
										<ul>
											<li>
												<span class="chkbox">
													<label class="label_txt"><input type="checkbox" name="saveIdCookie" id="saveIdCookie"<c:if test="${!empty mbrId}"> checked="checked"</c:if> value="on"><span class="txt" >아이디 저장</span></label>
												</span>
											</li>
											<li>
												<a href="javascript:;">아이디/비밀번호 찾기</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="btn_bx">
									<a href="javascript:;" class="btn btn02Type" onclick="actionLogin();">로그인</a>
								</div>
							</fieldset>
						</div>
						<div class="member non">
							<h3>비회원</h3>
							<fieldset>
							<div class="gray_bx">
								<p>비회원일 경우 실명인증 후 서비스예약이 가능합니다.<br>아래 휴대폰인증 버튼을 눌러주세요.</p>
								<div class="btnWrap ac">
									<a href="javascript:;" onclick="fnPopup('hp');" class="btn btn01Type">휴대폰인증</a>
								</div>
							</div>
							</fieldset>
						</div>
						<div class="usr_info_txt">
							<p>아직 이누스 서비스센터 회원이 아니신가요?<br>회원이 되시면 보다 다양한 서비스를 이용하실 수 있습니다.</p>
							<a href="/ISDS/mm/join.do" class="btn btn03Type">회원가입</a>
						</div>
					</div>
					<!--// usr_bx -->
					<a href="javascript:;" class="close_btn" >닫기</a>
				</div>
				<!--// pop_conts -->
			</div>
		</div>
		<!--// pop-layer -->
	    </form>
	 </div>
</body>