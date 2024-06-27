<script setup lang="ts">
	const route = useRoute()
	useHead({
		script: [
			{ src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js' },
		],
		link: [
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap',
			},
			{
				rel: 'stylesheet',
				href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
			},
		],
	})
</script>

<template>
	<main>
		<header>
			<div class="name"><h1>Дождевой квартал</h1></div>
			<div class="city"><span>район города Дождеград</span></div>
		</header>
		<section class="mayor">
			<div class="swiper newSwiper">
				<div class="swiper-wrapper">
					<div class="city swiper-slide">
						<div class="block">
							<div class="main-image">
								<img src="/generated_img/park.jpg" />
							</div>
						</div>
					</div>
					<div class="city swiper-slide">
						<div class="block">
							<svg viewbox="0 0 986 582">
								<circle
									data-text="Готовы к незабываемым приключениям? Добро пожаловать в «Водопад Чудес» - современный развлекательный центр, где вас ждет мир увлекательных аттракционов и ярких впечатлений! Погрузитесь в мир драйва и адреналина! Разнообразные семейные аттракционы для детей всех возрастов: от милых каруселей до забавных игровых автоматов. Помимо аттракционов, вас ждет: Обширная зона отдыха с уютными кафе, ресторанами и сувенирными лавками. Просторные игровые площадки для детей всех возрастов. Тематические шоу и представления для всей семьи. «Водопад Чудес» - это: Современные технологии и высочайшие стандарты безопасности. Незабываемые эмоции и яркие воспоминания. Приезжайте в «Водопад Чудес» - здесь сказка оживает!"
									data-photo="/generated_img/park.jpg"
									data-title="Развлекательный центр «Водопад Чудес»"
									class="park"
									cx="270"
									cy="250"
									r="10"
									fill="red"
								/>
								<circle
									data-text="Добро пожаловать в мир волшебства, где музыка, танцы и драма сливаются воедино, создавая незабываемые впечатления! Музыкальный театр - это не просто здание, это место, где рождаются эмоции, где истории оживают на глазах у зрителя. Проведите вечер в окружении красоты, искусства и эмоций, зарядитесь позитивом и вдохновением! Не упустите возможность посетить Музыкальный театр и открыть для себя мир, где мечты становятся реальностью!"
									data-photo="/generated_img/music-theater.jpg"
									data-title="Музыкальный театр"
									class="park"
									cx="423"
									cy="520"
									r="10"
									fill="red"
								/>
								<circle
									data-text="Сквер – это маленький уголок зеленого рая в шумном и суетливом городе. Здесь можно отдохнуть от повседневной суеты, насладиться свежим воздухом и красотой природы. Что может быть в сквере? Зеленые газоны, просто для того, чтобы понежиться на солнышке, цветущие клумбы, фонтан, скульптуры, лавочки, детские площадки. Сквер – это место для всех: для влюбленных, которые хотят провести время вдвоем, для семей с детьми, которые хотят весело провести время, для пожилых людей, которые хотят отдохнуть на свежем воздухе. Приходите в сквер и наслаждайтесь его красотой и спокойствием!"
									data-photo="/generated_img/square.jpg"
									data-title="Сквер: Оазис спокойствия в шумном городе"
									class="park"
									cx="619"
									cy="310"
									r="10"
									fill="red"
								/>
							</svg>
							<div class="map-image"><img src="/img/map.jpg" /></div>
						</div>
					</div>
				</div>
				<div class="swiper-pagination"></div>
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
			</div>
			<div class="info-bg">
				<div class="info">
					<img src="" class="info-photo" />
					<h2 class="info-title"></h2>
					<p class="info-text"></p>
				</div>
			</div>
			<div class="tooltip"></div>

			<h2>Обращение мэра Дождевого квартала</h2>
			<p>
				Дождеград – это город, где каждая капля дождя – это символ жизни и
				развития. Наш город, с населением 105 000 человек, славится своей
				неповторимой атмосферой, где свежий воздух и зелень сливаются воедино.
			</p>
			<p>
				Недавно Дождеград принял участие в программе «Индексы качества городской
				среды», которая помогает нам оценить, насколько город отвечает
				потребностям своих жителей.
			</p>
			<p>
				К сожалению, в прошлом году мы получили не самые высокие оценки. Мы
				получили 152 балла из возможных 360.
			</p>
			<p>
				В Дождеграде мы стремимся к постоянному развитию и стараемся создать для
				жителей все условия для комфортной жизни. Однако, результаты индекса
				качества городской среды показывают, что нам необходимо работать над
				некоторыми проблемами.
			</p>
			<h3>Район «Дождевой Квартал»</h3>
			<p>
				В этом районе был построен современный развлекательный центр «Водопад
				Чудес» с большим парком аттракционов. Несмотря на наши надежды, центр не
				пользуется популярностью.
			</p>
			<p>
				Вопрос: Почему «Водопад Чудес» не привлекает посетителей? Какие меры
				можно предпринять, чтобы повысить его привлекательность и посещаемость?
			</p>
		</section>
		<section class="swiper mySwiper">
			<div class="swiper-wrapper">
				<div class="review swiper-slide">
					<div class="image-review">
						<img src="/generated_img/rain_quarter.jpg" width="100%" />
					</div>
					<div class="name-review">Стена Хокаге</div>
					<div class="coordinates">Координаты: 78.2066, 26.0156</div>
					<div class="likes">Комментарии</div>
					<div class="star-date">5⭐️ | 3 мая 2017, 23:53</div>
					<div class="comment">
						Ходила сюда с ребенком, хорошо погуляли. Доченьке понравилось.
						Думаем вернуться сюда на следующей неделе. Приходите, не пожалеете.
					</div>
				</div>
				<div class="review swiper-slide">
					<div class="image-review">
						<img src="/generated_img/rain_quarter.jpg" width="100%" />
					</div>
					<div class="name-review">Стена Хокаге</div>
					<div class="coordinates">Координаты: 78.2066, 26.0156</div>
					<div class="likes">Комментарии</div>
					<div class="star-date">5⭐️ | 3 мая 2017, 23:53</div>
					<div class="comment">
						Ходила сюда с ребенком, хорошо погуляли. Доченьке понравилось.
						Думаем вернуться сюда на следующей неделе. Приходите, не пожалеете.
					</div>
				</div>
				<div class="review swiper-slide">
					<div class="image-review">
						<img src="/generated_img/rain_quarter.jpg" width="100%" />
					</div>
					<div class="name-review">Стена Хокаге</div>
					<div class="coordinates">Координаты: 78.2066, 26.0156</div>
					<div class="likes">Комментарии</div>
					<div class="star-date">5⭐️ | 3 мая 2017, 23:53</div>
					<div class="comment">
						Ходила сюда с ребенком, хорошо погуляли. Доченьке понравилось.
						Думаем вернуться сюда на следующей неделе. Приходите, не пожалеете.
					</div>
				</div>
				<div class="review swiper-slide">
					<div class="image-review">
						<img src="/generated_img/rain_quarter.jpg" width="100%" />
					</div>
					<div class="name-review">Стена Хокаге</div>
					<div class="coordinates">Координаты: 78.2066, 26.0156</div>
					<div class="likes">Комментарии</div>
					<div class="star-date">5⭐️ | 3 мая 2017, 23:53</div>
					<div class="comment">
						Ходила сюда с ребенком, хорошо погуляли. Доченьке понравилось.
						Думаем вернуться сюда на следующей неделе. Приходите, не пожалеете.
					</div>
				</div>
			</div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</section>
	</main>
</template>

<style scoped>
	body {
		background-color: #f4f2f2;
		font-family: 'Montserrat', sans-serif;
	}

	.wrapper {
		padding: 0 150px;
	}

	header {
		display: flex;
		align-items: center;
		margin: 20px 0;
	}

	h1 {
		font-size: 30px;
		color: #2c2c2c;
	}

	.city span {
		font-size: 13px;
		color: #aaaaaa;
		margin-top: 27px;
		margin-left: 8px;
	}

	main {
		margin: 0 auto;
	}

	section.mayor {
		margin: 20px 0;
	}

	h2,
	h3 {
		font-family: 'Roboto Slab', serif;
		color: #2c2c2c;
		margin: 20px 0;
	}

	h2 {
		font-size: 28px;
		font-weight: 500;
	}

	h3 {
		font-size: 22px;
		font-weight: 500;
	}

	p {
		margin: 20px 0;
		font-size: 15px;
		color: #777777;
		line-height: 1.5;
	}

	.swiper-wrapper {
		margin-left: 50px;
	}
	.swiper-button-next,
	.swiper-rtl .swiper-button-prev {
		right: 140px;
		left: auto;
		color: white !important;
		background-color: rgb(119, 118, 118);
		padding: 10px;
		border-radius: 10px;
	}
	.swiper-button-prev,
	.swiper-rtl .swiper-button-next {
		left: 140px;
		right: auto;
		color: white !important;
		background-color: rgb(119, 118, 118);
		padding: 10px;
		border-radius: 10px;
	}

	.main-image img,
	.map-image img {
		display: block;
		margin: auto;
	}

	.info-bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		opacity: 0;
		transition: opacity 0.3s;
		pointer-events: none;
		z-index: 10;
	}

	.info-bg.active {
		pointer-events: all;
		opacity: 1;
	}

	.info {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #fff;
		border-radius: 20px;
		padding: 25px;
		width: 500px;
		height: 650px;
		text-align: center;
	}

	.info-photo {
		width: 100%;
		height: auto;
	}

	.info-title {
		font-size: 22px;
	}

	.info-text {
		font-size: 18px;
	}

	.review {
		margin: 40px;
	}

	.name-review,
	.coordinates,
	.likes,
	.star-date,
	.comment {
		margin: 10px 15px;
		font-family: 'Roboto Slab', serif;
	}

	.name-review {
		font-size: 20px;
		color: black;
	}

	.coordinates,
	.comment {
		color: rgb(67, 66, 66);
		font-size: 15px;
	}

	.likes {
		font-size: 15px;
	}

	.star-date {
		color: rgb(110, 109, 109);
		font-size: 14px;
		margin-top: 30px;
	}
</style>
