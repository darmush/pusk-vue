<template>
    <section class="relative flex flex-col max-w-[1010px] items-center mx-auto xs:mb-[260px] mb-[180px] pt-[216px] px-5 xs:px-10">
        <h2 class="max-w-[900px] text-center text-white text-2xl sm:text-3xl font-bold mb-9 xs:mb-[72px]">Community Manager / Influence manager - CPA</h2>
        <div class="flex flex-col text-center max-xs:text-sm text-text-light gap-7 mb-[60px] xs:mb-[72px]">
            <div class="flex flex-col items-center gap-3">
                Зароботная плата
                <strong class="block text-white text-md font-semibold">от 80 000 руб.</strong>
            </div>
            <div class="flex flex-col items-center gap-3">
                Опыт работы
                <strong class="block text-white text-md font-semibold">3-6 лет</strong>
            </div>
            <div class="flex flex-col items-center gap-3">
                Формат работы
                <strong class="block text-white text-md font-semibold">Офис, полный день</strong>
            </div>
        </div>
        <img src="/public/img/bg-vacancy-desktop.svg" alt="" class="absolute -z-10 bg-no-repeat w-[1734px] h-[1320px] min-w-[729px] top-[-20%] right-[-40%]">

        <div class="xs:mb-[60px] mb-[80px]">
            <div class="w-max text-bg text-md font-semibold bg-accent xs:py-4 py-3 xs:px-5 px-4">Описание вакансии</div>
            <div class="flex flex-col flex-1 border-2 border-accent bg-bg-card backdrop-blur-sm shadow-card xs:px-5 px-4 py-8 xs:text-sm-wide text-xs text-text-light xs:gap-9 gap-6">
                <div >
                    <h4 class="sm:text-xl text-md text-white font-semibold xs:mb-5 mb-3">О вакансии</h4>
                    <p class="">Международный it холдинг, ищет в свою команду Community Manager / Influence manager - CPA.<br><br>
                    Мы растем, развиваемся и сейчас в поисках новых сотрудников/коллег/друзей... Мы работаем в сегменте Fintech/Blockchain и готовы к покорению новых вершин. В нашей команде не хватает именно Тебя! Опытного и активного специалиста, которому интересно заниматься развитием, продвижением IT продукта.**</p>
                </div>
                <div class="">
                    <h4 class="sm:text-xl text-md text-white font-semibold xs:mb-5 mb-3">Задачи</h4>
                    <p class="">Разработка стратегии продвижения с помощью рекламных размещений на ресурсах партнеров и блогеров, включая YouTube- и Telegram-каналы и тд... Менеджмент блогеров/стримеров (формирование ТЗ и брифов, контроль графика размещения контента, формирование целесообразного ценообразования), контроль выполнения договоренностей, формирование месячного бюджета на закупку контента и контроль проведения выплат/выполненных работ. Формирование и согласование плана по количеству, периодичности, тематике и стилистике публикаций.Анализ рынка, аудитории, конкурентов и эффективности рекламных кампаний. Поиск подходящих партнеров и заключение договоренностей с ними о рекламных размещениях и интеграциях. Ведение финансовой и маркетинговой отчетности по блогерам, контроль остатков контента.</p>
                </div>
                <div class="">
                    <h4 class="sm:text-xl text-md text-white font-semibold xs:mb-5 mb-3">Будет преимуществом</h4>
                    <p class="">Опыт работы с блогерами (размещение на YouTube, Telegram, работа с партнерами) от 3-х лет.Навык копирайтинга: необходимо будет составлять ТЗ и контролировать написание продающих текстов на английском языке. Про-активность и ответственность: необходимо развить это направление с нуля. Знание английского (intermediate и выше), а также грамотный русский язык. Понимание специфики продвижения через Influence-каналы.</p>
                </div>
                <div class="">
                    <h4 class="sm:text-xl text-md text-white font-bold xs:mb-5 mb-3">Условия</h4>
                    <ul class="flex flex-col gap-1 list-disc list-inside xs:mb-4 mb-3">
                        <li>Своевременная достойная заработная плата (обсуждается с финальным кандидатом).</li>
                        <li>Офис А класса Москва Сити (м. Деловой центр/Выставочная), уютное рабочее пространство, оснащенное необходимым современным оборудованием. Молодой дружный коллектив и никакой бюрократии.</li>
                        <li>Корпоративное питание (бесплатный завтрак-обед-полдник-ужин, фрукты, орехи, сыры, молочные продукты, чай, кофе и другие напитки и сладости).</li>
                        <li>Дополнительные поощрения после прохождения испытательного срока, абонемент в фитнес-клуб (оплата 100%).</li>
                    </ul>
                    <p class="">Мы ждем тебя в нашей команде и готовы предложить интересные проекты и профессиональное развитие!</p>
                </div>
            </div>
        </div>

        <div class="text-white relative">
            <GradientBgComponent class="bottom-[10%] right-[15%]" :elipseClass="'w-[820px] h-[820px] rotate-[30deg]'" :elipseSmallClass="'hidden'" :rectangleClass="'w-[264px] h-[364px] top-[200px] left-[200px]'"/>
            <h5 class="text-md max-sm:text-center font-semibold xs:mb-6 mb-8">Ключевые навыки</h5>
            <ul class="flex flex-wrap max-sm:justify-center gap-3">
                <li class="border-2 border-accent bg-bg-card backdrop-blur-sm shadow-card xs:p-4 p-2" v-for="skill in skills" :key="skill">{{ skill }}</li>
            </ul>
        </div>
    </section>

    <SectionTemplate class="lg:text-left" :alignLeft="true" :textSectionClass="'max-w-[560px] max-lg:mx-auto mb-0'">
        <template #title>Хочу вместе с вами делать Pusk</template>
        <template #text>
            Заполни форму и приложи своё резюме или CV, мы свяжемся с тобой и обсудим подробности
        </template>
        <FormComponent class=""/>
    </SectionTemplate>
</template>

<script>
import SectionTemplate from '@/components/SectionTemplate.vue'
import FormComponent from '@/components/FormComponent.vue'
import GradientBgComponent from '@/components/GradientBgComponent.vue'

export default {
    components: {
        SectionTemplate,
        FormComponent,
        GradientBgComponent
    },
    data() {
        return {
            skills: [ 'Английский язык', 'Копирайтинг', 'Грамотность', 'Напсиание текстов', 'Аудит СММ', 'Энтузиазм', 'Продведение мероприятий ', 'Английский язык', 'Копирайтинг', 'Грамотность', 'Напсиание текстов', 'Аудит СММ', 'Энтузиазм', 'Продведение мероприятий ' ]
        }
    }
}
</script>
