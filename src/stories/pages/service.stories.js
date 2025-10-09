import Header from "@/components/Header.vue";
import Service from "@/components/Service.vue";
import Advantages from "@/components/Advantages.vue";
import Faq from "@/components/Faq.vue";
import BannerSecond from "@/components/BannerSecond.vue";
import Reviews from "@/components/Reviews.vue";
import Location from "@/components/Location.vue";
import Footer from "@/components/Footer.vue";
import Reasons from "@/components/Reasons.vue";

export default {
      title: "Pages/Service",
};

export const Default = () => ({
      components: { Header, Faq, BannerSecond, Reviews, Location, Footer, Service, Advantages, Reasons },
      template: `
      <div>
            <Header />
            <Service />
            <Advantages />
            <Reasons />
            <Faq />
            <section>
            <BannerSecond />
            </section>
            <Reviews />
            <Location />
            <Footer />
      </div>
      `,
});
