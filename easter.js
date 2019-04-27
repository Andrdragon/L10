var data = {
	defaultLanguage: 'en',
	dictionary:{
		en:{
			name: "Your name",
			namePlaceholder: "Input your name",
			gender: "Choose your gender",
			genderMale: "Male",
			genderFemale: "Female",
			BornCountryWrapper: "Choose country where you were born",
			countries: {
				USA: "USA",
				RU: "Russia",
				UA: "Ukraine"
			},
			isShowLiveContry: "The country where you were born and the country where you live are the same?",
			email: "Your email",
			emailPlaceholder:"Input your email",
			buttontext: "Send"
		},
	
	ru:{
			name: "Введите ваше имя",
			namePlaceholder: "Введите ваше имя",
			gender: "Ваш пол",
			genderMale: "M",
			genderFemale: "Ж",
			BornCountryWrapper: "Место рождения",
			countries: {
				USA: "Америка",
				RU: "Россия",
				UA: "Украина"
			},
			isShowLiveContry: "Страна где вы родились и страна где вы живете равны?",
			email: "Введите ваш email",
			emailPlaceholder:"Введите ваш email",
			buttontext: "Отправить"
		}
	}
}
$(".language-image").click(function(event) {
	var currentLanguage =$(this).attr('data-lang')
	$(".language-image").removeClass('active')
	$(this).addClass('active');
	console.log(currentLanguage)
});
function setFormValue(){
	var dict = data.dictionary[currentLanguage]
	$("name.description").text(dict.name)
	$("name input").attr('PlaceHolder', dict.namePlaceHolder)
}
var currentLanguage = data.defaultLanguage;
setFormValue();