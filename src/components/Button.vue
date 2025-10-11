<template>
      <button type="button" :class="classes" @click="$emit('click')" :style="style"><slot name="icon"></slot>{{ title }}</button>
</template>

<script>
import { computed, reactive } from "vue";

export default {
      name: "Button",

      props: {
            icon: {
                  type: String,
                  required: false,
            },
            title: {
                  type: String,
                  required: true,
            },
            primary: {
                  type: Boolean,
                  default: false,
            },
            secondary: {
                  type: Boolean,
                  default: false,
            },
            tertiary: {
                  type: Boolean,
                  default: false,
            },
            green: {
                  type: Boolean,
                  default: false,
            },
            blue: {
                  type: Boolean,
                  default: false,
            },
            gray: {
                  type: Boolean,
                  default: false,
            },
            size: {
                  type: String,
                  validator: function (value) {
                        return ["small", "medium", "large", "full"].indexOf(value) !== -1;
                  },
            },
            backgroundColor: {
                  type: String,
            },
      },

      emits: ["click"],

      setup(props) {
            props = reactive(props);
            return {
                  classes: computed(() => ({
                        btn: true,
                        "btn--primary": props.primary,
                        "btn--secondary": props.secondary,
                        "btn--tertiary": props.tertiary,
                        "btn--green": props.green,
                        "btn--blue": props.blue,
                        "btn--gray": props.gray,
                        [`btn--${props.size || "medium"}`]: true,
                  })),

                  style: computed(() => ({
                        backgroundColor: props.backgroundColor,
                  })),
            };
      },
};
</script>

<style scoped lang="scss">
.btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;

      cursor: pointer;
      border: 0;
      border-radius: 8px;
      font-weight: 700;
      line-height: 1;
      font-family: "Montserrat";
      transition: all 0.2s ease;

      border: 2px solid transparent;
}
.btn--primary {
      background-color: var(--btn-red);
      color: white;
}

.btn--primary:hover {
      color: var(--btn-red);
      background: transparent;
      border-color: var(--btn-red);
}

.btn--secondary {
      border: 2px solid white;
      background-color: transparent;
      color: white;

      height: 55px !important;
      display: flex;
      align-items: center;
      gap: 16px;
}

.btn--secondary:hover {
      background-color: white;
}

.btn--tertiary {
      border: 2px solid var(--btn-red);
      background-color: white;
      color: var(--btn-red);

      text-align: center;
}

.btn--green {
      background-color: var(--btn-green);
      color: white;
}

.btn--green:hover {
      color: var(--btn-green) !important;
      background-color: transparent;
      border: 2px solid var(--btn-green);
}

.btn--blue {
      background-color: var(--btn-blue);
      color: white;
}

.btn--blue:hover {
      color: var(--btn-blue) !important;
      background-color: transparent;
      border: 2px solid var(--btn-blue);
}

.btn--gray {
      color: white;
      background-color: #1d427980;
}

.btn--full {
      padding: 0 20px;
      width: 100%;
      max-width: 100%;
      height: 65px;

      font-size: 16px;
      font-weight: 500;
}
.btn--large {
      padding: 0 44px;
      height: 65px;
      font-size: 16px;
      font-weight: 500;
}
.btn--medium {
      padding: 0 60px;
      height: 55px;
      font-size: 16px;
}
.btn--small {
      padding: 0 24px;
      height: 50px;
      font-size: 14px;
}
</style>
