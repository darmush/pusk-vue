<template>
    <section class="relative flex flex-col max-lg:text-center pt-[216px] px-5 xs:px-10 mb-[386px] bg-[url('')]">
        <p class="mb-2 xs:mb-4 text-sm xs:text-lg">Криптокошелёк Pusk</p>
        <h1 class="text-white font-bold text-2xl sm:text-3xl md:text-4xl">Криптомир, который был адаптирован для тебя</h1>
        <img src="/public/img/bg-home-desktop.svg" alt="" class="absolute -z-10 bg-no-repeat w-[1272px] min-w-[946px] h-[1204px] top-[-30%] left-[25%] ">
    </section>

    <SectionTemplate id="about" :cardsContainerClass="'lg:flex-row flex-col'">
        <template #title>Pusk — инструмент, который доступен всем</template>
        <template #text>
            Наше приложение — это десятки микросервисов, доступных в одном экране, привычном и удобном тебе дизайне
        </template>
        <template #cards>
            <CardContainer :cards="aboutCards" :cardTitle="'xs:text-md text-sm mb-2 whitespace-nowrap'" :cardContainerClass="'flex-col max-md:max-w-[496px]'" :cardClass="'py-4'" />
        </template>
        <GradientBgComponent class="-bottom-[45%] right-[30%]" :elipseClass="'w-[720px] h-[720px] -rotate-[30deg]'" :elipseSmallClass="'hidden'" :rectangleClass="'w-[559px] h-[364px] -top-[100px] -left-[50px]'"/>
    </SectionTemplate>

    <SectionTemplate :cardsContainerClass="'md:flex-row flex-col'">
        <template #title>Зарабатывай, инвестируй, используй!</template>
        <template #text>
                Отправляй друзьям крипто-подарки, получай переводы, создавай крипто-вклады, покупай растущие токены и используй приложение для того, что нужно тебе
        </template>
        <template #cards>
            <CardContainer :cards="investCards" :cardTitle="'text-xl mb-3'" :textCardClass="'max-w-[460px]'" :cardClass="'items-center text-center pb-0 xs:pb-0'" :cardImgClass="'pt-12 mt-auto w-[262px] h-[335px]'" />
        </template>
        <CardContainer :cards="investQuestionCard" :cardTitle="'text-xl mb-3'" :cardClass="'items-center text-center'" :cardContainerClass="'w-[1010px] relative after:content-[\'\'] after:absolute after:left-[100%] after:flex-1 after:w-full after:h-full after:bg-accent before:content-[\'\'] before:absolute before:right-[100%] before:flex-1 before:w-full before:h-full before:bg-accent'" />
        <GradientBgComponent class="-bottom-[15%] left-[0%]" :elipseClass="'w-[720px] h-[720px] -rotate-[75deg]'" :elipseSmallClass="'hidden'" :rectangleClass="'w-[394px] h-[559px] -top-[200px] -left-[90px]'"/>
    </SectionTemplate>

    <SectionTemplate id="plugins" :cardsContainerClass="'min-[920px]:flex-row flex-col'" :textSectionClass="'max-w-[820px]'">
        <template #title>Идеальный кошелёк тот, который только твой</template>
        <template #text>
            Ты можешь добавлять и удалять нужный тебе функционал. Точно также, как ты скачиваешь и удаляешь приложения на твоем смартфоне. Только не нужно скачивать.
        </template>
        <template #cards>
            <CardContainer :cards="walletCards" :cardTitle="'sm:text-xl xs:text-lg text-sm-wide mb-3'" :cardContainerClass="'sm:flex-row flex-col'" :textCardClass="'text-sm-wide'"/>
        </template>
    </SectionTemplate>

    <SectionTemplate :cardsContainerClass="'scrollbar md:flex-col max-md:mx-auto max-md:w-screen max-md:relative max-md:left-[50%] max-md:-translate-x-2/4 max-md:px-10 xs:max-md:px-10 max-md:overflow-x-scroll max-md:pb-10 max-md:gap-6 -sm:mt-20 -mt-9'" :textSectionNotExsist="true">
        <template #title>Какие плагины<br class="md:hidden"> уже есть</template>
        <template #cards>
            <CardContainer :cards="pluginsCards" :cardTitle="'text-xl max-md:text-lg mb-3'" :cardIconClass="'order-last md:w-[24px] w-[48px] md:h-[24px] h-[48px] ml-auto'" :cardContainerClass="'md:max-w-[777px] min-w-[280px] max-w-[340px] min-h-[160px] max-md:flex-col'" :cardClass="'max-md:py-6 max-md:px-4'"/>
        </template>
        <GradientBgComponent class="top-[15%] right-[20%]" :elipseClass="'w-[720px] h-[720px] -rotate-[30deg]'" :elipseSmallClass="'w-[264px] h-[264px] top-[150px] -left-[50px] opacity-80'" :rectangleClass="'rounded-full w-[364px] h-[364px] -top-[250px] left-[100px]'"/>
    </SectionTemplate>

    <SectionTemplate :alignLeft="true" :textSectionClass="'max-w-[540px]'" :cardsContainerClass="'hidden'">
        <template #title>Разработай собственный криптосервис</template>
        <template #text>
            Не обязательно иметь миллионы чтобы создавать продукт. Ты уже можешь предложить нам своё решение или продукт, который будет сразу доступен тысячам пользователей. Win-win для всех.
        </template>
        <FormComponent></FormComponent>
        <GradientBgComponent class="top-[50%] -left-[10%]" :elipseClass="'w-[720px] h-[720px] -rotate-[30deg]'" :elipseSmallClass="'hidden'" :rectangleClass="'w-[559px] h-[364px] -top-[100px] -left-[200px]'"/>
    </SectionTemplate>

    <SectionTemplate id="team" :cardsContainerClass="'flex-col md:flex-row md:flex-wrap md:row-wrap'">
        <template #title>Pusk — это люди</template>
        <template #text>
            Ценным продукт делают люди, которые его создают. Мы ценим людей и приглашаем в команду.
        </template>
        <template #cards>
            <CardContainer :cardContainerClass="'flex-col basis-[44%] w-max-[598px]'" :cardTitle="'xs:text-md text-sm-wide whitespace-nowrap mb-2'" :cards="peopleCards" />
        </template>
        <LinkButtonComponent class="md:mt-6" :link="'/jobs'">
            <template #text>Перейти к вакансиям</template>
        </LinkButtonComponent>
    </SectionTemplate>

    <SectionTemplate class="w-full" :cardsContainerClass="'flex-row w-full'">
        <template #title>За сильными решениями — сильная команда</template>
        <template #text>
            Мы хотим, чтобы пользователи любого уровня могли легко достигать своих криптоцелей с помощью всего одного продукта — Pusk.
        </template>
        <template #cards>
            <CardContainer :cards="teamCards" :cardTitle="'xs:text-xl text-lg mb-3'" :textCardClass="'max-w-[891px]'"/>
        </template>
        <GradientBgComponent class="top-[50%] right-[30%]" :elipseClass="'w-[720px] h-[720px] -rotate-[30deg]'" :elipseSmallClass="'hidden'" :rectangleClass="'w-[559px] h-[364px] -top-[200px] -left-[50px]'"/>
    </SectionTemplate>

    <SectionTemplate class="max-w-[1010px]" :cardsContainerClass="'flex-col'">
        <template #title>Для нас это важно</template>
        <template #text>
            Понять продукт и команду можно по тому, что важно для ее участников
        </template>
        <template #cards>
            <CardContainer :cardContainerClass="'flex-col'" :cards="princeplesCards" :cardTitle="'xs:text-xl text-sm-wide xs:mb-3 mb-2'"/>
        </template>
    </SectionTemplate>

    <SectionTemplate id="contacts" class="" :textSectionClass="'max-w-[804px]'">
        <template #title>Пообщаемся?</template>
        <template #text>
            Поэтому по любым вопросам ты можешь написать нашей команде поддержки, руководителю интересующего подразделения или напрямую CEO.
        </template>
        <ContactsComponent class="md:gap-[72px] gap-6 max-md:flex-col max-md:text-center max-xs:text-xs" :titleExist="true"/>
        <GradientBgComponent class="bottom-[20%] right-[10%]" :elipseClass="'w-[720px] h-[720px] -rotate-[30deg] opacity-80'" :elipseSmallClass="'hidden'" :rectangleClass="'w-[559px] h-[364px] top-[100px] -left-[150px] opacity-50'"/>
    </SectionTemplate>
</template>

<script>
import CardContainer from '@/components/CardContainer.vue'
import SectionTemplate from '@/components/SectionTemplate.vue'
import FormComponent from '@/components/FormComponent.vue'
import LinkButtonComponent from '@/components/LinkButtonComponent.vue'
import ContactsComponent from '@/components/ContactsComponent.vue'
import GradientBgComponent from '@/components/GradientBgComponent.vue'

    export default {
        components: {
            SectionTemplate,
            CardContainer,
            FormComponent,
            LinkButtonComponent,
            ContactsComponent,
            GradientBgComponent,
        },
        data() {
            return {
                aboutCards: [
                    {
                        title: 'Нам нечего скрывать',
                        text: 'Исходный код открыт и доступен каждому',
                        icon: '/icons/icon-programming-arrows.svg',
                    },
                    {
                        title: 'Вам не за что волноваться',
                        text: 'У сервиса нет доступа к твоему кошельку и средствам',
                        icon: '/icons/icon-scan.svg',
                    },
                    {
                        title: 'Вместе в будущее',
                        text: 'Для наших пользователей мы сделали самую выгодную реферальную программу',
                        icon: '/icons/icon-connection.svg',
                    },
                ],
                investCards: [
                    {
                        title: 'Получай',
                        text: 'Если боишься ошибиться с номером кошелька - используй QR-код. Никаких шансов совершить ошибку',
                        img: '/img/img-receive.png',
                        imgClass: '',
                    },
                    {
                        title: 'Отправляй',
                        text: 'Контакты помогут легко отправить криптовалюту вашим друзьям, коллегам и знакомым. Они ее получат даже если не зарегистрированы в сервисе',
                        img: '/img/img-send.png',
                    },
                ],
                investQuestionCard: [
                    {
                        title: 'Не видишь нужный тебе токен или криптовалюту?',
                        text: 'Напиши нам и мы добавим её в наш сервис для тебя',
                    }
                ],
                walletCards: [
                    {
                        title: 'Какие плагины существуют',
                        text: 'Круто когда можешь быстро конвертировать средства из привычных тебе рублей (фиата) в криптовалюту? Ты можешь завести свою виртуальную банковскую карту. Или увидеть растущий токен, который ты можешь купить и следить за доходностью. Или когда можешь создать вклад в крипте. Все это - реальность.',
                        icon: '/icons/icon-settings.svg',
                    },
                    {
                        title: 'Как работают плагины',
                        text: 'Плагины — это как деталь конструктора, которую можно как присоединить, так и удалить из кошелька. После регистрации кошелька вы сможете сами выбрать: что вам сейчас нужно, а что не пригодится.  Плагины можно добавлять и удалять в течение всего времени работы.',
                        icon: '/icons/icon-book.svg',
                    },
                ],
                pluginsCards: [
                    {
                        title: 'Умная партнёрская система',
                        text: 'Получай USDT за каждого приглашённого пользователя',
                        pluginsImg: '/img/plugins-01.svg',
                        icon: '/icons/icon-share.svg',
                        pluginsImgClass: 'left-[85px] bottom-[15px]',
                    },
                    {
                        title: 'Подключение фиатных счетов',
                        text: 'Пополняй и выводи средства с банковских счетов на Pusk',
                        pluginsImg: '/img/plugins-02.svg',
                        icon: '/icons/icon-share.svg',
                        pluginsImgClass: 'left-[80px] bottom-[30px]',
                    },
                    {
                        title: 'Покупка криптовалют',
                        text: 'Покупай криптовалюту в несколько кликов',
                        pluginsImg: '/img/plugins-03.svg',
                        icon: '/icons/icon-share.svg',
                        pluginsImgClass: 'rotate-[165deg] left-[60px] bottom-[20px]',
                    },
                    {
                        title: 'Лёгкий обмен валютами',
                        text: 'Свап, одну на другую, быстро и безопасно',
                        pluginsImg: '/img/plugins-04.svg',
                        icon: '/icons/icon-share.svg',
                        pluginsImgClass: 'w-[230px] left-[80px] bottom-[30px]',
                    },
                    {
                        title: 'Создать свой плагин',
                        text: 'Хочешь добавить свою разработку? Пиши нам!',
                        pluginsImg: '/icons/icon-add.svg',
                        icon: '/icons/icon-share.svg',
                        pluginsImgClass: 'left-[50%] top-[50%] -translate-y-2/4 -translate-x-2/4',
                    },
                ],
                peopleCards: [
                    {
                        title: 'Комфортный размер оплаты',
                        text: 'Ты сам устанавливаешь комфортный тебе уровень твоего гонорара. Мы всегда рады вознаградить бонусами за ценный вклад.',
                        icon: '/icons/icon-wallet.svg',
                    },
                    {
                        title: 'Работай с кофмортом',
                        text: 'Выдаем всю технику и покупаем любое ПО, необходимое для продуктивной работы',
                        icon: '/icons/icon-computer.svg',
                    },
                    {
                        title: 'Культура и люди',
                        text: 'Это не про документы и правила, которые создаются корпорациями. Тренинги, активности и общение.',
                        icon: '/icons/icon-team.svg',
                    },
                    {
                        title: 'Забота о здоровье',
                        text: 'Трёхразовое питание полностью и посещение одного из лучших фитнес и wellness-центров за счёт компании',
                        icon: '/icons/icon-health.svg',
                    },
                ],
                teamCards: [
                    {
                        title: 'Кто создаёт Pusk',
                        text: 'Над проектом работает международная команда специалистов, с доказанной экспертизой в области разработки, аналитики и блокчейна. Хотя Pusk начал разрабатываться только в конце 2020 года, все участники команды ранее работали с крупными-криптопроектами, NFT-маркетами и блокчейном.',
                    }
                ],
                princeplesCards: [
                    {
                        title: 'Жизнь и опыт пользователя',
                        text: 'Мы много времени и средств выделяем на исследование потребностей и болей пользователей. Благодаря этому мы быстро находим лучшие решения, которые действительно полезны, и не делаем то, что не принесёт пользу пользователям.',
                        iconNum: '1',
                    },
                    {
                        title: 'Какая команда - такой продукт',
                        text: 'Мы обеспечиваем нашим сотрудникам одни из лучших условий на рынке, чтобы они были максимально продуктивными в работе с продуктом и пользователями.',
                        iconNum: '2',
                    },
                    {
                        title: 'Цифровая гигиена',
                        text: 'В мире, где каждую неделю в сеть утекают личные данные, мы создаем процессы, нацеленные на обеспечение защиты ключевого диджитал-актива — данных пользователей',
                        iconNum: '3',
                    },
                ],
            }
        }
    }
</script>

<style>
.scrollbar::-webkit-scrollbar {
    height: 8px;
    background-color: rgba(37, 37, 37, 0.6);
}

.scrollbar::-webkit-scrollbar-thumb {
    background: #40FFE4;
}
</style>
