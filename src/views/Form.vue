<template>
  <div class="form">
    <form @submit.prevent>
      <div class="person">
        <h4>Персональные данные</h4>
        <v-input
         v-model.trim="person.name" 
         label="Имя"> 
        </v-input>
        <v-input
          v-model.trim="person.age"
          label="Возраст"
          @keypress="onClickIsNumber"
        ></v-input>
      </div>
      <div class="children">
        <div class="chidren__top">
          <h4>Дети (макс. 5)</h4>
          <v-button
            :isSecondary="true"
            @click="onClickAdd"
            v-if="children.length < 5"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.13332 7.85555C1.50125 7.85555 0.988866 8.36794 0.988867 9C0.988867 9.63206 1.50126 10.1445 2.13332 10.1445L7.85545 10.1445L7.85545 15.8668C7.85545 16.4989 8.36784 17.0113 8.9999 17.0113C9.63196 17.0113 10.1444 16.4989 10.1444 15.8668L10.1443 10.1445L15.8667 10.1445C16.4988 10.1445 17.0112 9.63207 17.0112 9.00001C17.0112 8.36795 16.4988 7.85556 15.8667 7.85556L10.1443 7.85556L10.1443 2.13338C10.1443 1.50132 9.63195 0.988927 8.99989 0.988927C8.36783 0.988927 7.85544 1.50131 7.85544 2.13338L7.85544 7.85555L2.13332 7.85555Z"
                fill="#01A7FD"
              />
            </svg>
            Добавить ребенка</v-button
          >
        </div>
        <div
          class="chidren__item"
          v-for="(item, index) in children"
          :key="item"
        >
          <v-input v-model.trim="item.name" label="Имя"></v-input>
          <v-input
            v-model.trim="item.age"
            label="Возраст"
            @keypress="onClickIsNumber"
          ></v-input>
          <v-button :isSimply="true" @click="onClickRemove(index)">
            Удалить
          </v-button>
        </div>
      </div>
      <v-button :isPrimary="true" @click="onClickSubmit">Сохранить</v-button>
    </form>
  </div>
</template>

<script lang="ts">
interface DataInterface {
  name: string;
  age: number | null;
}
interface FormDataInterface {
  person: DataInterface;
  children: DataInterface[];
}
import { defineComponent } from "vue";
import vInput from "../components/v-input.vue";
import vButton from "../components/v-button.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    vInput,
    vButton,
  },
  data() {
    return {
      person: {
        name: "",
        age: null,
      } as DataInterface,
      children: [] as DataInterface[],
    };
  },
  methods: {
    onClickAdd() {
      this.children.push({
        name: "",
        age: null,
      });
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onClickIsNumber(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[0-9]$/.test(char)) return true;
      else e.preventDefault();
    },
    onClickRemove(index: number) {
      this.children.splice(index, 1);
    },
    onClickSubmit() {
      const data: FormDataInterface = {
        person: {
          ...this.person,
        },
        children: {
          ...this.children,
        },
      };
      // this.$router.push({name:"preview", params: {data:JSON.stringify(data)}})
      localStorage.setItem("data", JSON.stringify(data as FormDataInterface));
      this.$router.push({ name: "preview" });
    },
  },
});
</script>
<style lang="less" scoped>
.person {
  h4 {
    margin-bottom: 20px;
  }
  .field {
    margin-bottom: 10px;
  }
}
h4 {
  .titleMixin;
}

.children {
  margin-top: 30px;
  margin-bottom: 25px;
}
.chidren__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
button {
  svg {
    margin-right: 8px;
  }
  &:hover {
    path {
      transition: fill 0.3s ease-in-out;
      fill: #fff;
    }
  }
}
.chidren__item {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .field {
    width: 260px;
    margin-right: 18px;
  }
}
</style>
