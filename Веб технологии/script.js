
function showTemaCase(df){
var tex = document.getElementById("temaLabel"); 

  if (df.checked == true) {
		tex.style.display="block";
  } else {
		tex.style.display="none";
  }
};

function checktest(){
  $(".test-container").hide();
  var p = document.getElementById("test-end");
	var q1 = document.getElementById("answer1");
  var q2 = document.getElementById("subject");
  var q3 = document.querySelector('input[name="answer3"]:checked');
  var q4 = "";
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
        q4 = q4 + checkboxes[i].value;
    };
  
  var q5 = document.getElementById("answer5");
  var q6 = document.getElementById("answer6");

  var r = 0;
  var w = "";
  if(q1.value=="head")
  {
    r+=1;
  }
  else
  {
    w= w +" 1";
  }

  if(q2.value=="width")
  {
    r+=1;
  }
  else
  {
    w= w +" 2";
  }

  if(q3.value=="p")
  {
    r+=1;
  }
  else
  {
    w= w +" 3";
  }

  if(q4=="ПравильноВерно")
  {
    r+=1;
  }
  else
  {
    w= w +" 4";
  }

  if(q5.value=="ul")
  {
    r+=1;
  }
  else
  {
    w= w +" 5";
  }

  if(q6.value=="2014-10-28")
  {
    r+=1;
  }
  else
  {
    w= w +" 6";
  }


	p.insertAdjacentHTML('afterbegin',"<br>Количество правильных ответов: " + r);
  if(w.length==0)
  {
    p.insertAdjacentHTML('afterbegin',"Все верно!");
  }
  else
  {
    p.insertAdjacentHTML('afterbegin',"Неправильные ответы в вопросах:" + w);
  }

  $(".test-end").show();
}

function registration(){  
	$(".formregistration").hide();
	
  var p = document.getElementById("form-success-text");
	var nameValue = document.getElementById("name");
  var surnameValue = document.getElementById("surname");
  var midlenameValue = document.getElementById("midlename");
  var phoneValue = document.getElementById("phone");
  var emailValue = document.getElementById("email");
	var subjectValue = document.getElementById("subject");
	var birthdayValue = document.getElementById("birthday");
	var Docl = document.getElementById("temaLabel");
	
	
  p.insertAdjacentHTML('afterbegin',"Фамилия: " + surnameValue.value + "<br> Имя: " + nameValue.value + " <br> Отчество: " + midlenameValue.value +"<br> Телефон: " + phoneValue.value +"<br> Почта: " + emailValue.value + "<br> Предмет: " + subjectValue.value + "<br> дата рождения: " + birthdayValue.value +"<br> Тема доклада: " + Docl.value );
  $(".form-success").show();
}

