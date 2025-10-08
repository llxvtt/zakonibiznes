import { fn } from "storybook/test";
import Button from "@/components/Button.vue";

export default {
      title: "Components/Buttons",
      component: Button,
      tags: ["autodocs"],
      argTypes: {
            size: {
                  control: { type: "select" },
                  options: ["small", "medium", "large"],
            },
            backgroundColor: {
                  control: "color",
            },
      },
      args: {
            onclick: fn(),
      },
};

// primary secondary tertiary

export const Primary = {
      args: {
            primary: true,
            title: "Бесплатная консультация",
      },
};

export const Secondary = {
      args: {
            secondary: true,
            title: "Бесплатная консультация",
            size: "large",
      },
};

export const Tertiary = {
      args: {
            tertiary: true,
            title: "Подробнее",
            size: "medium",
      },
};

export const SocialWK = {
      args: {
            green: true,
            title: "Написать в Вконтакте",
            icon: "/src/assets/images/icons/wk.svg",
            size: "small",
      },
};
export const SocialWhatsap = {
      args: {
            blue: true,
            title: "Написать в WhatsApp",
            icon: "/src/assets/images/icons/whatsapp.svg",
            size: "small",
      },
};

export const Secondary_Telegram = {
      args: {
            secondary: true,
            title: "Telegram канал",
            icon: "/src/assets/images/icons/telegram.svg",
            size: "large",
      },
};

export const Secondary_Подробнее = {
      args: {
            secondary: true,
            title: "Подробнее",
            size: "medium",
      },
};

// export const Large = {
//       args: {
//             size: "large",
//             title: "Button",
//       },
// };

// export const Small = {
//       args: {
//             size: "small",
//             title: "Button",
//       },
// };
