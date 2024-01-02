var questions = [
	{
		question: "Какие качества у вас развиты лучше всего?",
		answers: [
			"Благородство и храбрость", 
			"Ум, чувство юмора, мудрость", 
			"Упорство, трудолюбие и честность", 
			"Хитрость, жажда власти, изворотливость",
		],
		fucult: [0, 3, 2, 1],
	},
	{
		question: "Какая стихия вам нравится больше всего?",
		answers: [
			"Огонь",
			"Земля",
			"Воздух",
			"Вода",
		],
		fucult: [0, 2, 3, 1],
	},
	{
		question: "Какой драгоценный камень вас привлекает больше всего?",
		answers: [
			"Рубин",
			"Алмаз",
			"Сапфир",
			"Изумруд",
		],
		fucult: [0, 2, 3, 1],
	},
	{
		question: "Какое приведение вам симпатизирует больше всего?",
		answers: [
			"Почти Безголовый Ник", 
			"Толстый монах", 
			"Серая дама", 
			"Кровавый барон",
		],
		fucult: [0, 2, 3, 1],
	},
	{
		question: "Какой профессор вам нравится больше всего?",
		answers: [
			"Минерва МакГонагалл", 
			"Филиус Флитвик", 
			"Помона Стебель", 
			"Северус Снегг",
		],
		fucult: [0, 3, 2, 1],
	},
	{
		question: "Какое животное вам больше симпатизирует?",
		answers: [
			"Барсук", 
			"Орел", 
			"Лев", 
			"Змея",
		],
		fucult: [2, 3, 0, 1],
	},
	{
		question: "Выберите наиболее приятные цветовые сочетания для вас",
		answers: [
			"Зеленый и серебряный", 
			"Черный и желтый", 
			"Синий и бронзовый", 
			"Красный и золотой",
		],
		fucult: [1, 2, 3, 0],
	},
	{
		question: "Какие люди вам нравятся больше всего?",
		answers: [
			"Дружелюбные", 
			"Оптимистичные", 
			"Статусные", 
			"Стремящиеся к саморазвитию",
		],
		fucult: [2, 0, 1, 3],
	},
	{
		question: "Чем бы вы занимались в свободное время?",
		answers: [
			"Выполнял домашнее задание", 
			"Играл в квиддич", 
			"Пошел бы с друзьями в Хогсмит", 
			"Отправился бы в запретный лес",
		],
		fucult: [3, 1, 2, 0],
	},
	{
		question: "Как вы поведете себя в опасной ситуации?",
		answers: [
			"Постараюсь подальше держаться от проблем", 
			"Тщательно все обдумаю и составлю план", 
			"Обычно я сам организовываю опасность", 
			"Буду полагаться на удачу",
		],
		fucult: [1, 3, 0, 2],
	},
];
var arr = [];
var questionIndex = 0;

var headerContainer = document.querySelector('#header');
var listContainer = document.querySelector('#list');
var submitBtn = document.querySelector('#submit');

function clearPage(){
	headerContainer.innerHTML = '';
	listContainer.innerHTML = '';
}

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

function showQuestion(){
	var headerTemplate = `<h2 class="title">%title%</h2>`;
	var title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
	headerContainer.innerHTML = title;
	var answerNumber = 1;
	for (answerText of questions[questionIndex]['answers']){
		var questionTemplate = `
			<li>
				<label>
					<input value="%number%" type="radio" class="answer" name="answer">
					<span>%answer%</span>
				</label>
			</li>`;
		var answerHTML = questionTemplate.replace('%answer%',answerText).replace('%number%',answerNumber);
		listContainer.innerHTML += answerHTML;
		answerNumber++;
	}
}



function checkAnswer(){
	var checkedRadio = listContainer.querySelector('input:checked');
	if (!checkedRadio){
		submitBtn.blur();
		return
	}
	var userAnswer = parseInt(checkedRadio.value);
	arr.push(questions[questionIndex]['fucult'][userAnswer-1]);

	if (questionIndex !== questions.length-1){
		questionIndex++;
		clearPage();
		showQuestion();
	} else{
		clearPage();
		showResults();
	}
}

function showResults(){
	var resultTemplate = `
		<h2 class="title">%title%</h2>
		<h3 class="summary">%message%</h3>`;
	var massage;
	var a = 0, b = 0, c = 0, d = 0;
	for (var elem of arr) {
		if (elem === 0) {
			a++;
		} else if(elem === 1) {
			b++;
		} else if(elem === 2) {
			c++;
		} else{
			d++;
		}
	}

	var m = Math.max.apply(null, [a, b, c, d]);

	switch(m){
		case a:
			massage = `
				Ваш факультет Гриффиндор. Ученики этого факультета 
				отличаются своей смелостью, желанием восстановить 
				справедливость и сделать мир лучше. Они постоянно ищут 
				приключения, отстаивают свои права и оптимистичны. Любят 
				свою семью, но не так сильно как слизеринцы. Семья для них 
				это подмога, с помощью которой они достигают свои цели.`;
			break;
		case b:
			massage = `
				Слизерин. Эти ребята очень озабочены чистотой, 
				престижностью и богатством. Они любят конкурировать, 
				стремятся достичь высот при помощи хитрости. Но при этом, 
				слизеринцы отличные семьянины. Ради родной крови они 
				готовы предать, стать двойным агентом или пойти против 
				системы.`;
			break;
		case c:
			massage = `
				Вам лучше всего подойдет факультет Пуффендуй. В нем 
				обучают трудолюбивые, дружелюбные и честные ученики. 
				Пуффендуйцы не любят прожигать бесполезно время, они 
				берутся за дела, которые в итоге приносят пользу. Вспомните, 
				когда мандрагора понадобилась для того, чтобы спасти жизнь 
				учеников, Помона Стебль отменила все занятия и выращивала 
				мандрагору. Они равнодушно относятся к конкуренции, но им 
				свойственна такая черта как самопожертвование.`;
			break;
		case d:
			massage = `
				Вас распределительная шляпа направила бы в Когтевран. На 
				данном факультете учатся самые умные ученики, стремящиеся 
				к саморазвитию. Они верят, что в знаниях есть сила. 
				Когтевранцы не обидчивы, знают себе цену и немного 
				эгоистичны. Ученики Когтеврана склонны к одиночеству, ведь 
				только наедине с собой можно понять свои истинные желания. 
				Поэтому с ними сложно заводить дружеские отношения.`;
			break;
	}

	var finalMassage = resultTemplate.replace('%title%','Ваши результаты:').replace('%message%',massage);
	headerContainer.innerHTML = finalMassage;
	submitBtn.blur();
	submitBtn.innerText = 'Начать заново';
	submitBtn.onclick = function(){history.go()};
}