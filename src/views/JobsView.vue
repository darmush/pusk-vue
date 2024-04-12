<template>
    <section class="relative flex flex-col items-center mx-auto mb-[260px] max-xs:mb-40 text-center pt-[216px] px-5 xs:px-10">
        <h2 class="text-white text-2xl font-bold sm:text-3xl mb-8 xs:mb-10">Твори, создавай</h2>
        <p class="max-w-[700px] mb-20">Стань частью команды криптоэнтузиастов и dev-гениев, которые создают бизнес решая потребности людей</p>
        <img src="/public/img/bg-jobs-desktop.svg" alt="" class="absolute -z-10 bg-no-repeat w-[1734px] h-[1320px] min-w-[918px] top-[-100%] right-[-28%]">
    </section>

    <section class="relative flex flex-col items-center mx-auto mb-[260px] px-5 xs:px-10 max-xs:mb-40 text-center">
        <GradientBgComponent class="top-[30%] -left-[15%]" :elipseClass="'w-[820px] h-[820px] rotate-[30deg]'" :elipseSmallClass="'hidden'" :rectangleClass="'w-[264px] h-[364px] top-[200px] left-[200px]'"/>
        <h2 class="text-white text-2xl font-bold sm:text-3xl sm:mb-20 mb-[60px]">Кого ищем сейчас</h2>
        <VacancyCardContainer :vacancyCards="vacancies" :textBlock="vacancies.textBlock"/>
    </section>

    <SectionTemplate class="lg:text-left" :alignLeft="true" :textSectionClass="'max-w-[580px] max-lg:mx-auto mb-0'">
        <template #title>Хочу вместе с вами делать Pusk</template>
        <template #text>
            Хочешь работать с нами, но нет подходящей вакансии?<br class="max-xs:hidden"> Заполни форму, расскажи о себе, приложи своё CV или резюме и мы свяжемся с тобой
        </template>
        <FormComponent class=""/>
    </SectionTemplate>
</template>

<script>
import VacancyCardContainer from '@/components/VacancyCardContainer.vue'
import FormComponent from '@/components/FormComponent.vue'
import SectionTemplate from '@/components/SectionTemplate.vue'
import GradientBgComponent from '@/components/GradientBgComponent.vue'


export default {
    components: {
        VacancyCardContainer,
        FormComponent,
        SectionTemplate,
        GradientBgComponent,
    },
    data() {
        return {
            vacancies: [
                {
                    name: 'Community Manager',
                    wage: 'от 80 000 руб.',
                    experience: '3-6 лет',
                    format: 'Офис, полный день',
                    titleXs: 'Что предстоит делать',
                    textBlock: [
                        'Помогать и консультировать пользователей в социальных сетях',
                        'Собирать обратную связь от пользователей по удобству, функциональности и качеству работы продуктов',
                        'Помогать и консультировать пользователей в социальных сетях',
                        'Собирать обратную связь от пользователей по удобству, функциональности и качеству работы продуктов',
                    ],
                    link: '/vacancy',
                },
                {
                    name: 'Influence manager - CPA',
                    wage: 'от 80 000 руб.',
                    experience: '3-6 лет',
                    format: 'Офис, полный день',
                    titleXs: 'Что предстоит делать',
                    textBlock: [
                        'Помогать и консультировать пользователей в социальных сетях',
                        'Собирать обратную связь от пользователей по удобству, функциональности и качеству работы продуктов',
                        'Помогать и консультировать пользователей в социальных сетях',
                        'Собирать обратную связь от пользователей по удобству, функциональности и качеству работы продуктов',
                    ],
                    link: '/vacancy',
                },
            ],
        }
    },
}
</script>
