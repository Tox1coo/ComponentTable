<template>
<section class="content">
  <SearchBar :search-string.sync="searchString" @searchStringUpdate="updateTable">
    <template #tabButtons>
      <TabButtonList :tabs-types="tabsTypes" :font-size="20" @updateActiveTab="updateTypesTab"/>
    </template>
    <template #buttonAction>
      <TheButton :text="'Добавить задачу'" :classes="'btn-icon btn-icon--after btn-icon--after-margin-sm'" :with-icon="true" :position-icon="'after'">
        +
      </TheButton>
    </template>
    <template #searchBottom>
      <ViewsList :view-list="viewList" @updateActiveView="updateActiveView"/>
      <div class="type-task">
        <TabButton v-for="typeTask in typeTaskList"
                   :key="typeTask.id"
                   :label="typeTask.label"
                   :is-button="true"
                   :color-active="'#fff'"
                   class="pl-md pr-md pt-xs pb-xs border-5"
                   :is-active="typeTask.isActive"
                   @actionClick="updateTypesListTab(typeTask.id)"
              />
      </div>
    </template>
  </SearchBar>
  <TableTask :statuses-list="statusesList" :columns="columns" :items="getTasksList"/>
</section>
</template>

<script>
import SearchBar from "./components/SearchBar/SearchBar.vue";
import TableTask from "@/components/TableTasks/TableTask.vue";
import ViewsList from "@/components/Views/ViewsList.vue";
import TabButton from "@/components/Tab/TabButton.vue";
import TheButton from "@/components/UI/TheButton.vue";
import TabButtonList from "@/components/Tab/TabButtonList.vue";

export default {
  name: 'app',
  components: {TabButtonList, TheButton, TabButton, ViewsList, TableTask, SearchBar},
  data () {
    return {
      statusesList: [
        {
          "id": 1,
          "name": "all",
          "label": "Все",
          "color": "#2679FB"
        },
        {
          "id": 2,
          "name": "work",
          "label": "В работе",
          "color": "#6CBE39"
        },
        {
          "id": 3,
          "name": "overdue",
          "label": "Просроченные",
          "color": "#C75550"
        },
        {
          "id": 4,
          "name": "deferred",
          "label": "Отложенные",
          "color": "#FFAE02"
        },
        {
          "id": 5,
          "name": "waitingControl",
          "label": "Ждёт контроля",
          "color": "#272727"
        }
      ],
      tasks: [
        {
          "id": 1,
          "name": "Пример название",
          "status": {
            "code":"work",
            "label": "В работе",
            "colorText": "#6CBE39"
          },
          "activity": {
            "messages": {
              "count": 1,
              "bgc": "#6CBE39"
            },
            "label": "31 Февраля 2024, 11:38"
          },
          "messages": "2",
          "deadlineDate": "17 Марта, 15:00 ",
          "director": "Дорофеев Д.Н",
          "responsible": "Аврамов К.Д",
          "projectOFgroup": {
            "image": "",
            "name": "SOLT"
          }
        },
        {
          "id": 2,
          "name": "Создать чат-бот для сотрудников",
          "status": {
            "code":"work",
            "label": "В работе",
            "colorText": "#6CBE39"
          },
          "activity": "31 Февраля 2024, 11:38",
          "messages": "2",
          "deadlineDate": "17 Марта, 15:00 ",
          "director": "Дорофеев Д.Н",
          "responsible": "Аврамов К.Д",
          "projectOFgroup": {
            "image": "",
            "name": ""
          }
        },
        {
          "id":3,
          "name": "Создать чат-бот для сотрудников",
          "status": {
            "code":"work",
            "label": "В работе",
            "colorText": "#6CBE39"
          },
          "activity": "31 Февраля 2024, 11:38",
          "messages": "2",
          "deadlineDate": "17 Марта, 15:00 ",
          "director": "Дорофеев Д.Н",
          "responsible": "Аврамов К.Д",
          "projectOFgroup": {
            "image": "",
            "name": "SOLT"
          }
        },
        {
          "id": 4,
          "name": "Создать чат-бот для сотрудников",
          "status": {
            "code":"work",
            "label": "В работе",
            "colorText": "#6CBE39"
          },
          "activity": "31 Февраля 2024, 11:38",
          "messages": "2",
          "deadlineDate": "17 Марта, 15:00 ",
          "director": "Дорофеев Д.Н",
          "responsible": "Аврамов К.Д",
          "projectOFgroup": {
            "image": "",
            "name": "SOLT"
          }
        },
        {
          "id": 5,
          "name": "Создать чат-бот для сотрудников",
          "status": {
            "code":"work",
            "label": "В работе",
            "colorText": "#6CBE39"
          },
          "activity": "31 Февраля 2024, 11:38",
          "messages": "2",
          "deadlineDate": "17 Марта, 15:00 ",
          "director": "Дорофеев Д.Н",
          "responsible": "Аврамов К.Д",
          "projectOFgroup": {
            "image": "",
            "name": "SOLT"
          }
        },
        {
          "id": 6,
          "name": "Создать чат-бот для сотрудников",
          "status": {
            "code":"work",
            "label": "В работе",
            "colorText": "#6CBE39"
          },
          "activity": "31 Февраля 2024, 11:38",
          "messages": "2",
          "deadlineDate": "17 Марта, 15:00 ",
          "director": "Дорофеев Д.Н",
          "responsible": "Аврамов К.Д",
          "projectOFgroup": {
            "image": "",
            "name": "SOLT"
          }
        },
        {
          "id": 7,
          "name": "Создать чат-бот для сотрудников",
          "status": {
            "code":"work",
            "label": "В работе",
            "colorText": "#6CBE39"
          },
          "activity": "31 Февраля 2024, 11:38",
          "messages": "2",
          "deadlineDate": "17 Марта, 15:00 ",
          "director": "Дорофеев Д.Н",
          "responsible": "Аврамов К.Д",
          "projectOFgroup": {
            "image": "",
            "name": "SOLT"
          }
        },
        {
          "id": 8,
          "name": "Создать чат-бот для сотрудников",
          "status": {
            "code":"work",
            "label": "В работе",
            "colorText": "#6CBE39"
          },
          "activity": "31 Февраля 2024, 11:38",
          "messages": "2",
          "deadlineDate": "17 Марта, 15:00 ",
          "director": "Дорофеев Д.Н",
          "responsible": "Аврамов К.Д",
          "projectOFgroup": {
            "image": "",
            "name": "SOLT"
          }
        },
        {
          "id": 9,
          "name": "Создать чат-бот для сотрудников",
          "status": {
            "code":"work",
            "label": "В работе",
            "colorText": "#6CBE39"
          },
          "activity": "31 Февраля 2024, 11:38",
          "messages": "2",
          "deadlineDate": "17 Марта, 15:00 ",
          "director": "Дорофеев Д.Н",
          "responsible": "Аврамов К.Д",
          "projectOFgroup": {
            "image": "",
            "name": "SOLT"
          }
        },
        {
          "id": 11,
          "name": "Создать чат-бот для сотрудников",
          "status": {
            "code":"work",
            "label": "В работе",
            "colorText": "#6CBE39"
          },
          "activity": "31 Февраля 2024, 11:38",
          "messages": "2",
          "deadlineDate": "17 Марта, 15:00 ",
          "director": "Дорофеев Д.Н",
          "responsible": "Аврамов К.Д",
          "projectOFgroup": {
            "image": "",
            "name": "SOLT"
          }
        },
        {
          "id": 12,
          "name": "Создать чат-бот для сотрудников",
          "status": {
            "code":"work",
            "label": "В работе",
            "colorText": "#6CBE39"
          },
          "activity": "31 Февраля 2024, 11:38",
          "messages": "2",
          "deadlineDate": "17 Марта, 15:00 ",
          "director": "Дорофеев Д.Н",
          "responsible": "Аврамов К.Д",
          "projectOFgroup": {
            "image": "",
            "name": "SOLT"
          }
        },
        {
          "id": 13,
          "name": "Создать чат-бот для сотрудников",
          "status": {
            "code":"work",
            "label": "В работе",
            "colorText": "#6CBE39"
          },
          "activity": "31 Февраля 2024, 11:38",
          "messages": "2",
          "deadlineDate": "17 Марта, 15:00 ",
          "director": "Дорофеев Д.Н",
          "responsible": "Аврамов К.Д",
          "projectOFgroup": {
            "image": "",
            "name": "SOLT"
          }
        },
        {
          "id": 14,
          "name": "Создать чат-бот для сотрудников",
          "status": {
            "code":"work",
            "label": "В работе",
            "colorText": "#6CBE39"
          },
          "activity": "31 Февраля 2024, 11:38",
          "messages": "2",
          "deadlineDate": "17 Марта, 15:00 ",
          "director": "Дорофеев Д.Н",
          "responsible": "Аврамов К.Д",
          "projectOFgroup": {
            "image": "/assets/project.png",
            "name": "SOLT"
          }
        },
        {
          "id": 15,
          "name": "Создать чат-бот для сотрудников",
          "status": {
            "code":"work",
            "label": "В работе",
            "colorText": "#6CBE39"
          },
          "activity": "31 Февраля 2024, 11:38",
          "messages": "2",
          "deadlineDate": "17 Марта, 15:00 ",
          "director": "Дорофеев Д.Н",
          "responsible": "Аврамов К.Д",
          "projectOFgroup": {
            "image": "",
            "name": "SOLT"
          }
        },
        {
          "id": 16,
          "name": "Создать чат-бот для сотрудников",
          "status": {
            "code":"work",
            "label": "В работе",
            "colorText": "#6CBE39"
          },
          "activity": "31 Февраля 2024, 11:38",
          "messages": "2",
          "deadlineDate": "17 Марта, 15:00 ",
          "director": "Дорофеев Д.Н",
          "responsible": "Аврамов К.Д",
          "projectOFgroup": {
            "image": "",
            "name": "SOLT"
          }
        }
      ],
      columns: [
        {
          prop: 'name',
          label: 'Название'
        },
        {
          prop: 'status',
          label: 'Статус'
        },
        {
          prop: 'activity',
          label: 'Активность'
        },
        {
          prop: 'deadlineDate',
          label: 'Крайний срок'
        },   {
          prop: 'director',
          label: 'Постановщик'
        },   {
          prop: 'responsible',
          label: 'Ответственный'
        },   {
          prop: 'projectOFgroup',
          label: 'Проект, группа'
        },
      ],
      searchString: '',
      viewList:[
        {
          id: 1,
          label: 'Списком',
          name: "list",
          isActive: true,
          className: 'horizontal full'
        },
        {
          id: 2,
          label: 'По срокам',
          name: "deadline",
          isActive: false,
          className: 'vertical steps'
        },
        {
          id: 3,
          label: 'По статусам',
          name: "statuses",
          isActive: false,
          className: 'vertical steps'
        },
      ],
      typeTaskList:[
        {
          id: 1,
          label: 'Все',
          name: "all",
          isActive: true,
        },
        {
          id: 2,
          label: 'Делаю',
          name: "work",
          isActive: false,
        },
        {
          id: 3,
          label: 'Поручил',
          name: "director",
          isActive: false,
        },
        {
          id: 4,
          label: 'Архив',
          name: "Archive",
          isActive: false,
        },
      ],
      tabsTypes:[
        {
          id: 1,
          label: 'Мои задачи',
          name: "tasks",
          isActive: true
        },
        {
          id: 2,
          label: 'Группы',
          name: "groups",
          isActive: false
        }
      ],
    }
  },
  computed: {
    getTasksList() {
      return this.tasks.filter((task) => task.name.toLowerCase().trim().indexOf(this.searchString.toLowerCase().trim()) !== -1);
    }
  },
  methods: {
    updateTable(string){
      this.searchString = string
    },
    updateTypesTab(tabId) {
      this.updateActiveTab(tabId, 'tabsTypes')
    },
    updateActiveView(tabId){
      this.updateActiveTab(tabId, 'viewList')
    },
    updateTypesListTab(tabId){
      this.updateActiveTab(tabId, 'typeTaskList')
    },
    updateActiveTab(tabId, arrayName) {
      let beforeActiveId = this[arrayName].findIndex((tab) => tab.isActive);
      let newActiveId = this[arrayName].findIndex(tab => tab.id === tabId);
      this[arrayName][beforeActiveId].isActive = false;
      this[arrayName][newActiveId].isActive = true;
    }
  }
}
</script>

<style lang="scss">
html {
  font-size: 62.5%;
  min-height: 100dvh;
}

body{
  min-height: 100%;
}

*,*::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: none;
}

.content {
  background-color: rgba(#A9A9A9, 0.2);
  min-height: 100%;
  padding: 3.5rem 6rem 6rem;
}
.mr-xs { margin-right: .25em; }
.mr-sm { margin-right: .5em; }
.mr-md { margin-right: 1em; }
.mr-lg { margin-right: 1.5em; }
.mr-xl { margin-right: 3em; }

.ml-xs { margin-left: .25em; }
.ml-sm { margin-left: .5em; }
.ml-md { margin-left: 1em; }
.ml-lg { margin-left: 1.5em; }
.ml-xl { margin-left: 3em; }

.mb-xs { margin-bottom: .25em; }
.mb-sm { margin-bottom: .5em; }
.mb-md { margin-bottom: 1em; }
.mb-lg { margin-bottom: 1.5em; }
.mb-xl { margin-bottom: 3em; }

.p-xs { padding: .25em; }
.p-sm { padding: .5em; }
.p-md { padding: 1em; }
.p-lg { padding: 1.5em; }
.p-xl { padding: 3em; }

.pr-xs { padding-right: .25em; }
.pr-sm { padding-right: .5em; }
.pr-md { padding-right: 1em; }
.pr-lg { padding-right: 1.5em; }
.pr-xl { padding-right: 3em; }

.pl-xs { padding-left: .25em; }
.pl-sm { padding-left: .5em; }
.pl-md { padding-left: 1em; }
.pl-lg { padding-left: 1.5em; }
.pl-xl { padding-left: 3em; }

.pt-xs { padding-top: .25em; }
.pt-sm { padding-top: .5em; }
.pt-md { padding-top: 1em; }
.pt-lg { padding-top: 1.5em; }
.pt-xl { padding-top: 3em; }

.pb-xs { padding-bottom: .25em; }
.pb-sm { padding-bottom: .5em; }
.pb-md { padding-bottom: 1em; }
.pb-lg { padding-bottom: 1.5em; }
.pb-xl { padding-bottom: 3em; }

</style>
